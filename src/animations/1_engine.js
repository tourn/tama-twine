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
    console.log(size);
    console.log(width);

    return size;
}
function createDisplay(elementId, optionOverrides = {}) {
    var opts = {
        width: displayWidth, height: 5, fontSize: determineFontSize(),
        fg: 'white', bg: '#111',
        ...optionOverrides
    };
    console.log(opts);
    const display = new ROT.Display(opts);
    const node = document.getElementById(elementId);
    console.log("getting drawing node", elementId, node)
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
function animate(elementId, animationName, colors = {}) {
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

    function getColor(mask, x, y) {
        if (mask) {
            const maskValue = mask[x][y]
            return colors[maskValue] || defaultColors[maskValue] || undefined
        }
        return undefined
    }

    function drawImage(image, mask) {
        display.clear();
        for (var i = 0; i < image.length; i++) {
            for (var j = 0; j < image[i].length; j++) {
                display.draw(j, i, image[i][j], getColor(mask, i, j));
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
        drawImage(frame.image, frame.mask);
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
    }
}
