function createRange(startIndex, endExclusive){
    const ret = [];
    for(let i=startIndex;i<endExclusive;i++){
        ret.push(i);
    }

    return ret;
}

function mozartModel(){
    return {
        voices: 2,
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
            [
                'fdg|',
                'F,D,G,|',
            ],
            [
                'A^F/2G/2B/2g/2|',
                '[B,,2 G,2] z|',
            ],
            [
                'gce|',
                '[C,2 E,2] z|',
            ],
            [
                'g d2|',
                'G,,/2B,,/2G,B,,|',
            ],
            [
                '[g2 d2 B2 G2] z|',
                //multi note sixteenths look messed up when beamed
                'G,, [B,/2G,/2] [G,/2F,/2] [^F,/2E,/2] [E,/2D,/2]|',
            ],
            [
                'Gce|',
                '[C,2 E,2] z|',
            ],
            [
                "e/2c/2e/2g/2c'/2g/2|",
                '[C,2 G,2] z|',
            ],
            [
                'c2 z|',
                'C,G,,C,,|',
            ],
        ],
};
}


function generateAbc(model, measureArray){
    let abc = model.header + '\n';

    for(let voice=0;voice<model.voices;voice++){
        abc += `[V:${voice+1}]`;
        for(let measureIndex of measureArray){
            abc += model.measures[measureIndex][voice];
        }
    }

    return abc;
}

const abc = generateAbc(mozartModel(), createRange(0, mozartModel().measures.length));
console.log(abc);

ABCJS.renderAbc('sheet-music', abc, {responsive: true, staffwidth: 1100});
ABCJS.renderMidi('midi-player', abc);