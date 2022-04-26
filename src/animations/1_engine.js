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
function replaceCharacters(frame){
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

    return { width: x, height: y};
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
function animateContinuously(...args) {
    animate(...args).then(function (again) {
        if (again) { animateContinuously(animationName); }
    });
}
function animateMany(elementId, animationNames, colors, body){ // TODO need another signature to pass color overrides
    // console.log("animateMany", animationNames, colors, body)
    animate(elementId, either(animationNames), colors, body)
    .then(()=>animateMany(elementId, animationNames, colors, body))
}
function animate(elementId, animationName, colors = {}, body) {
    // console.log("animate", animationName, colors, body)
    const definition = get(animationName);
    const display = createDisplay(elementId, {width: definition.width, height: definition.height});
    const defaultColors = {
        r: "#cc241d",
        R: "#fb4934",
        g: "#98971a",
        G: "#b8bb26",
        b: "#458588",
        B: "#83a598",
        y: "#d79921",
        Y: "#fabd2f",
        H: colors.h
    }
    let timeout;
    if (timeout) { clearTimeout(timeout); }

    function getCoordinateInstructions(frame, x, y){
        const originalGlyph = frame.image[x][y]
        const maskValue = frame.mask && frame.mask[x][y]
        const color = colors[maskValue] || defaultColors[maskValue] || undefined
        return {
            glyph: replaceBodyParts(originalGlyph, maskValue, body),
            color
        }
    }

    function replaceBodyParts(glyph, mask, body){
        if(mask === 'h'){
            switch(glyph){
                case "(": return body.fur[0]
                case ")": return body.fur[1]
                case ">": return body.feet[0]
                case "<": return body.feet[1]
            }
        }
        if(mask === 'H'){
            switch(glyph){
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
                const {glyph, color} = getCoordinateInstructions(frame, i, j);
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
        setTimeout(()=>animate(...args), 0)
    },
    animateMany(...args) {
        setTimeout(()=>animateMany(...args), 0)
    }
}
