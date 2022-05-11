setup.colors = {
    GRUVBOX_RED_DARK: '#cc241d',
    GRUVBOX_RED_BRIGHT: '#fb4934',
    GRUVBOX_GREEN_DARK: '#98971a',
    GRUVBOX_GREEN_BRIGHT: '#b8bb26',
    GRUVBOX_YELLOW_DARK: '#d79921',
    GRUVBOX_YELLOW_BRIGHT: '#fabd2f',
    GRUVBOX_BLUE_DARK: '#458588',
    GRUVBOX_BLUE_BRIGHT: '#83a598',
    GRUVBOX_PURPLE_DARK: '#b16286',
    GRUVBOX_PURPLE_BRIGHT: '#d3869b',
    GRUVBOX_AQUA_DARK: '#689d6a',
    GRUVBOX_AQUA_BRIGHT: '#8ec07c',
    GRUVBOX_GRAY: '#a89984',
    GRUVBOX_BG: '#282828',
    GRUVBOX_FG: '#ebdbb2'
}

/**
 * A single animation frame looks like this
 
    {
        duration: 1 * duration,
        image: [
            "    (⑊_/)",
            " (3 (oO )",
            "    (> <)"
        ],
        mask: [
            "    hhhhh",
            " 11 hHHhh",
            "    hhhhh"
        ]
    },

 *  Where "image" depicts the actual characters rendered
    And "mask" contains additional information for formatting/coloring the image characters on the matching coordinates
    Some conventions on what mask value to use for what:

    H = face of Hans
    h = body of Hans
    N, n = face, body of Hans (special usage)
    0-9 = things that should be colored at callsite, e.g. the color of the snack Hans is getting
    % = gore (default to Hanses color to make it less brutal)
    ! = blood (default to transparent)
    rgybpaRGYBPAq = colors from colorscheme
 */

Array.prototype.flatMap = function (lambda) {
    return Array.prototype.concat.apply([], this.map(lambda));
};
let duration; // used in animation definition files, which sadly have no local scope

const animations = {}
const displayWidth = 20;
let animationReject;

function register(name, data) {
    if (animations[name]) {
        console.warn(`overwriting animations.${name}`)
    }
    animations[name] = {
        ...getDimensions(data),
        frames: data
            .flatMap(flattenAnimation)
            .map(replaceCharacters)
    }
}
function replaceCharacters(frame) {
    // animation definitions can use the weird character ⑊ instead of an escaped \\ which throws the whole alignment off
    return {
        ...frame,
        image: frame.image.map(line => line.replaceAll("⑊", "\\"))
    }
}
function getDimensions(definition) {
    let x = 0;
    let y = 0;
    definition.flatMap(flattenAnimation).forEach(function (frame) {
        y = Math.max(y, frame.image.length);
        frame.image.forEach(function (line) {
            x = Math.max(x, line.length);
        });
    });

    return { width: x, height: y };
}
function flattenAnimation(frame) {
    if (!frame.loop) {
        return frame;
    } else {
        var frames = [];
        for (var l = 0; l < frame.loop; l++) {
            for (var i = 0; i < frame.frames.length; i++) {
                frames.push(frame.frames[i]);
            }
        }
        return frames;
    }
}
function get(name) {
    const data = animations[name]
    if (!data) {
        console.warn(`tried to get animation ${name} which does not exist`)
        return name != "?" && get("?");
    }
    return data;
}
function determineFontSize() {
    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    var size = Math.min(800 / displayWidth, width / displayWidth);

    return size;
}
function createDisplay(elementId, optionOverrides = {}) {
    var opts = {
        width: displayWidth, height: 5, fontSize: determineFontSize(),
        fg: 'white', bg: '#111',
        ...optionOverrides
    };
    const display = new ROT.Display(opts);
    const node = document.getElementById(elementId);
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    node.appendChild(display.getContainer());
    return display;
}

/* animations can be either passed as "animationName" or ["animationName", {colors}] */
function animateMany(elementId, animations, body) {
    // console.log("animateMany", animationNames, colors, body)
    animate(elementId, either(animations), {}, body)
        .then(() => animateMany(elementId, animations, body))
}
function animate(elementId, animation, colors = {}, body) {
    let animationName;
    if(typeof animation === "object"){
        [animationName, colors] = animation;
    } else {
        animationName = animation;
    }
    // console.log("animate", animationName, colors, body)
    const definition = get(animationName);
    const display = createDisplay(elementId, { width: definition.width, height: definition.height });
    const defaultH = setup.format_rgb(variables().color);
    const defaultColors = {
        r: setup.colors.GRUVBOX_RED_DARK,
        R: setup.colors.GRUVBOX_RED_BRIGHT,
        g: setup.colors.GRUVBOX_GREEN_DARK,
        G: setup.colors.GRUVBOX_GREEN_BRIGHT,
        b: setup.colors.GRUVBOX_BLUE_DARK,
        B: setup.colors.GRUVBOX_BLUE_BRIGHT,
        y: setup.colors.GRUVBOX_YELLOW_DARK,
        Y: setup.colors.GRUVBOX_YELLOW_BRIGHT,
        p: setup.colors.GRUVBOX_PURPLE_DARK,
        P: setup.colors.GRUVBOX_PURPLE_BRIGHT,
        a: setup.colors.GRUVBOX_AQUA_DARK,
        A: setup.colors.GRUVBOX_AQUA_BRIGHT,
        q: setup.colors.GRUVBOX_GRAY,
        h: defaultH,
        H: colors.h || defaultH,
        N: colors.n,
        '%': variables().gore ? setup.GRUVBOX_RED_DARK : (colors.h || defaultH),
        '!': variables().gore ? setup.GRUVBOX_RED_DARK : 'transparent'
    }
    let timeout;
    if (timeout) { clearTimeout(timeout); }

    function getCoordinateInstructions(frame, x, y) {
        const originalGlyph = frame.image[x][y]
        const maskValue = frame.mask && frame.mask[x][y]
        const color = colors[maskValue] || defaultColors[maskValue] || undefined
        return {
            glyph: replaceBodyParts(originalGlyph, maskValue, body),
            color
        }
    }

    function replaceBodyParts(glyph, mask, body) {
        if (mask === 'h' || mask === "n") {
            switch (glyph) {
                case "(": return body.fur[0]
                case ")": return body.fur[1]
                case ">": return body.feet[0]
                case "<": return body.feet[1]
            }
        }
        if (mask === 'H' || mask === "N") {
            switch (glyph) {
                case "o": return body.eyes[0]
                case "O": return body.eyes[1]
            }
        }
        return glyph;
    }

    function drawImage(frame) {
        display.clear();
        for (var i = 0; i < frame.image.length; i++) {
            for (var j = 0; j < frame.image[i].length; j++) {
                const { glyph, color } = getCoordinateInstructions(frame, i, j);
                display.draw(j, i, glyph, color);
            }
        }
    }

    function drawText(image, text) {
        for (var i = 0; i < image.length; i++) {
            const index = image[i].indexOf('%s');
            if (index !== -1) {
                display.drawText(index, i, text);
            }
        }
    }

    function drawFrames(frames, i, resolve) {
        i = i || 0;
        if (i >= frames.length) {
            resolve(true);
            return;
        };
        const frame = frames[i];
        drawImage(frame);
        if (frame.text) {
            drawText(frame.image, frame.text);
        }
        timeout = setTimeout(function () { drawFrames(frames, i + 1, resolve); }, frame.duration);
    }

    return new Promise(function (resolve, reject) {
        animationReject = resolve; //FIXME naming
        drawFrames(definition.frames, 0, resolve);
        // drawFrames(definition.flatMap(flattenAnimation), 0, resolve);
    });


}
setup.animations = {
    register,
    animate(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => animate(...args).then(resolve).catch(reject), 0)
        })
    },
    animateMany(...args) {
        setTimeout(() => animateMany(...args), 0)
    }
}
