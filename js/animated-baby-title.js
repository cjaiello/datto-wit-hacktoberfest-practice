const baby = '👶';
// Fitzpatrick Scale
const fps = ['🏻', '🏼', '🏽', '🏾', '🏿'];
const numBabies = 10;

function getBaby(n) {
    let toneIndex = Math.floor(
        fps.length * (
            (Math.sin((Date.now() / 100) + n) + 1) / 2
        )
    );
    return baby + fps[toneIndex];
}

function updateTitleLoop() {
    let s = '';

    for (let i = 0; i < numBabies; i++) {
        s += getBaby(i);
    }

    document.title = s;
}

const intervalId = setInterval(updateTitleLoop, 500);