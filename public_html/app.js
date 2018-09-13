function createRange(startIndex, endExclusive){
    const ret = [];
    for(let i=startIndex;i<endExclusive;i++){
        ret.push(i);
    }

    return ret;
}

function mozartModel(){
    return {
        header: `X:1
T:Musical Dice Game
M:3/8
L:1/8
Q:200
%%staves {1 2}
K:C`,
        measures: [
`V:1
[K:C clef=treble]fdg|
V:2
[K:C clef=bass]F,D,G,|`,

`V:1
[K:C clef=treble]A^F/2G/2B/2g/2|
V:2
[K:C clef=bass][B,,2 G,2] z|`,

`V:1
[K:C clef=treble]gce|
V:2
[K:C clef=bass][C,2 E,2] z|`,

`V:1
[K:C clef=treble]g d2|
V:2
[K:C clef=bass]G,,/2B,,/2G,B,,|`,
],
};
}


function generateAbc(model, measureArray){
    let abc = model.header;

    for(let measureIndex of measureArray){
        abc += '\n' + model.measures[measureIndex];
    }

    return abc;
}

const abc = generateAbc(mozartModel(), createRange(0, mozartModel().measures.length));
console.log(abc);

ABCJS.renderAbc('sheet-music', abc);
ABCJS.renderMidi('midi-player', abc);