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
        measuresPerLine: 8,
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
            [
                '[ec][dB] z|',
                'G,2G,,|',
            ],
            [
                'B/2A/2B/2c/2d/2B/2|',
                'G,2 z|',
            ],
            [
                'e/2c/2B/2A/2G/2^F/2|',
                'C,D,D,,|',
            ],
            [
                '[cE][cE][cE]|',
                'C,C,C,|',
            ],
            [
                'cGE|',
                '[E,2 C,2] z|',
            ],
            [
                'c2 z|',
                'C,G,,C,,|',
            ],
            [
                'eg/2e/2c|',
                '[G,2 C,2] [E, C,]|',
            ],
            [
                'a^fd|',
                '[D,2 ^F,2] [F, C,]|',
            ],
            [
                'c/2G/2c/2e/2G/2c/2|',
                '[E,2 C,2] z|',
            ],
            [
                'Gce|',
                '[E,2 C,2] [G, C,]|',
            ],
            [
                'e/2c/2eg|',
                '[G,2 C,2] [E, C,]|',
            ],
            [
                "gb/2d'/2d|",
                'B,,2 z|',
            ],
            [
                'c/2e/2g/2d/2A/2^f/2|',
                'C,D,D,,|',
            ],
            [
                'ecG|',
                'C,2 z|',
            ],
            [
                'f/2e/2d/2e/2f/2g/2|',
                'F,/2E,/2D,/2E,/2F,/2G,/2|',
            ],
            [
                '[g2 d2 B2 G2] z|',
                //multi note sixteenths look messed up when beamed
                'G,, [B,/2G,/2] [G,/2F,/2] [^F,/2E,/2] [E,/2D,/2]|',
            ],
        ],
};
}


function generateAbc(model, measureArray){
    let abc = model.header + '\n';
    const measuresPerLine = model.measuresPerLine;

    for(let measureOffset=0;measureOffset<measureArray.length;measureOffset+=measuresPerLine){
        for(let voice=0;voice<model.voices;voice++){
            abc += `[V:${voice+1}]`;
            for(let j=0;j<measuresPerLine && j+measureOffset < measureArray.length;j++){
                abc += model.measures[j+measureOffset][voice];
            }
        }
    }

    return abc;
}

const abc = generateAbc(mozartModel(), createRange(0, mozartModel().measures.length));
console.log(abc);

ABCJS.renderAbc('sheet-music', abc, {responsive: true, staffwidth: 1100});
ABCJS.renderMidi('midi-player', abc);