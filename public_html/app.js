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
K:C
V:1 clef=treble
V:2 clef=bass`,
        measures: [
`[V:1]fdg|
[V:2]F,D,G,|`,

`[V:1]A^F/2G/2B/2g/2|
[V:2][B,,2 G,2] z|`,

`[V:1]gce|
[V:2][C,2 E,2] z|`,

`[V:1]g d2|
[V:2]G,,/2B,,/2G,B,,|`,
],
};
}


function generateAbc(model, measureArray){
    let abc = model.header + '\n';

    for(let measureIndex of measureArray){
        abc += model.measures[measureIndex].replace(/\n/g, '');
    }

    return abc;
}

const abc = generateAbc(mozartModel(), createRange(0, mozartModel().measures.length));
console.log(abc);

ABCJS.renderAbc('sheet-music', abc, {responsive: true, staffwidth: 1100});
ABCJS.renderMidi('midi-player', abc);