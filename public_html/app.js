function createRange(startIndex, endExclusive){
    const ret = [];
    for(let i=startIndex;i<endExclusive;i++){
        ret.push(i);
    }

    return ret;
}

function mozartModel(){
    const cadentialMeasure = [
        '[g2 d2 B2 G2] z',
        //multi note sixteenths look messed up when beamed
        'G,, [B,/2G,/2] [G,/2F,/2] [^F,/2E,/2] [E,/2D,/2]',
    ];
    const albertiBass = '[E,/2C,/2]G,/2[E,/2C,/2]G,/2[E,/2C,/2]G,/2';

    const eighthNoteCChordMeasure = [
        '[cE][cE][cE]',
        'C,C,C,',
    ];


    return {
        voices: 2,
        measuresPerLine: 8,
        header: `X:1
T:Musical Dice Game
C:Wolfgang Amadeus Mozart
M:3/8
L:1/8
Q:200
%%staves {1 2}
K:C
V:1 clef=treble
V:2 clef=bass`,
        measures: [
            [
                'fdg',
                'F,D,G,',
            ],
            [
                'A^F/2G/2B/2g/2',
                '[B,,2 G,2] z',
            ],
            [
                'gce',
                '[C,2 E,2] z',
            ],
            [
                'g d2',
                'G,,/2B,,/2G,B,,',
            ],
            cadentialMeasure,
            [
                'Gce',
                '[C,2 E,2] z',
            ],
            [
                "e/2c/2e/2g/2c'/2g/2",
                '[C,2 G,2] z',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                '[ec][dB] z',
                'G,2G,,',
            ],
            [
                'B/2A/2B/2c/2d/2B/2',
                'G,2 z',
            ],
            [
                'e/2c/2B/2A/2G/2^F/2',
                'C,D,D,,',
            ],
            eighthNoteCChordMeasure,
            [
                'cGE',
                '[E,2 C,2] z',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'eg/2e/2c',
                '[G,2 C,2] [E, C,]',
            ],
            [
                'a^fd',
                '[D,2 ^F,2] [F, C,]',
            ],
            [
                'c/2G/2c/2e/2G/2c/2',
                '[E,2 C,2] z',
            ],
            [
                'Gce',
                '[E,2 C,2] [G, C,]',
            ],
            [
                'e/2c/2eg',
                '[G,2 C,2] [E, C,]',
            ],
            [
                "gb/2d'/2d",
                'B,,2 z',
            ],
            [
                'c/2e/2g/2d/2A/2^f/2',
                'C,D,D,,',
            ],
            [
                'ecG',
                'C,2 z',
            ],
            [
                'f/2e/2d/2e/2f/2g/2',
                'F,/2E,/2D,/2E,/2F,/2G,/2',
            ],
            cadentialMeasure,
            [
                'D/2^F/2A/2d/2^f/2a/2',
                'D,2 C,',
            ],
            [
                '[ec][ec][ec]',
                'C,/2E,/2G,/2E,/2C/2C,/2',
            ],
            [
                'f/2e/2f/2d/2c/2B/2',
                '[B,2 G,2] z',
            ],
            [
                '^f/2d/2A/2a/2f/2d/2',
                '[A,2 C,2] z',
            ],
            [
                'B/2d/2g/2d/2B',
                'G,2 G,,',
            ],
            cadentialMeasure,
            [
                'e/2c/2G e',
                '[G,2 C,2] [G, C,]',
            ],
            [
                'Gce',
                '[E,2 C,2] z',
            ],
            cadentialMeasure,
            [
                'e/2c/2d/2B/2G',
                'G,2 z',
            ],
            [
                'Ad^f',
                '[^F,2 D,2] [A, C,]',
            ],
            [
                'A/2e/2d/2g/2^f/2a/2',
                'C,D,D,,',
            ],
            [
                'g/2b/2g/2d/2B',
                '[D,2 B,,2] z',
            ],
            [
                'cGe',
                albertiBass,
            ],
            [
                'gGG',
                'B,,/2D,/2G,/2D,/2B,,/2G,,/2',
            ],
            [
                'c/2B/2c/2e/2G/2c/2',
                '[E,2 C,2] z',
            ],
            [
                'c/2B/2c/2e/2G',
                '[E,2 C,2] z',
            ],
            [
                'B/2c/2d/2B/2A/2G/2',
                'G,,2 z',
            ],
            [
                'gf/2e/2d/2c/2',
                '[E,2 C,2] z',
            ],
            [
                'Af/2d/2A/2B/2',
                'F,2 G,',
            ],
            [
                'c/2B/2c/2G/2E/2C/2',
                '[G,2 E,2] z',
            ],
            [
                'gb/2g/2d/2B/2',
                '[D,2 B,,2] z',
            ],
            [
                'gb/2g/2b',
                '[D,2 B,,2] z',
            ],
            [
                "ec/2e/2g/2c'/2",
                '[G,2 C,2] [E, C,]',
            ],
            [
                'ecG',
                albertiBass,
            ],
            [
                'ce/2c/2G',
                '[G,2 E,2] z',
            ],
            [
                'c/2G/2e/2c/2g/2e/2',
                '[E,2 C,2] z',
            ],
            [
                'd/2^c/2d/2f/2G/2B/2',
                'F,2 G,',
            ],
            [
                '[ec][e/2c/2][f/2d/2][ge]',
                'C,2 z',
            ],
            eighthNoteCChordMeasure,
            [
                'gbd',
                '[D,2 B,,2] z',
            ],
            [
                'd/2B/2G z',
                '[G,2 G,,2] G,',
            ],
            [
                'ecG',
                albertiBass,
            ],
            [
                'gec',
                albertiBass,
            ],
            [
                'gce',
                albertiBass,
            ],
            [
                'gf/2e/2d/2c/2',
                '[E,2 C,2] z',
            ],
            [
                'ce/2c/2g',
                '[G,2 E,2] z',
            ],
            [
                'e/2c/2B/2G/2A/2^F/2',
                'C,D,D,,',
            ],
            [
                'e/2c/2B/2c/2G',
                'C,2 z',
            ],
            [
                "e/2g/2c'/2g/2e/2c/2",
                '[G,2 C,2] [G, C,]',
            ],
            //line 65
            [
                '',
                '[^F,2 D,2] z',
            ],
            [
                '^faf',
                '[A,D,][^F,D,][D,C,]',
            ],
            [
                '',
                '[E,2 C,2] [G, E,]',
            ],
            [
                '',
                'B,,2 z',
            ],
            [
                'gec',
                '[C,2 E,2] z',
            ],
            [
                '',
                'D,2 C,',
            ],
            [
                '',
                '[D,2 B,,2] [D, B,,]',
            ],
            [
                '',
                'F,2 G,',
            ],
            //line 73
            [
                'gec',
                albertiBass,
            ],
            [
                '',
                '[C,2 E,2] z',
            ],
            [
                '[^fd][fd][fd]',
                'C,C,C,',
            ],
            [
                '',
                '[E,2 C,2] [G, C,]',
            ],
            [
                '',
                '[D,2 B,,2] [G, B,,]',
            ],
            [
                '',
                'C,2 C,,',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                '',
                'C,2 z',
            ],
            //line 81
            cadentialMeasure,
            [
                '',
                '[G,2 B,,2] [D, B,,]',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                '',
                '[C,2 E,2] z',
            ],
            [
                '',
                '[G,2 E,2] z',
            ],
            [
                'ceG',
                '[G,2 B,,2] z',
            ],
            [
                'gce',
                '[E,2 C,2] [G, C,]',
            ],
            [
                '',
                '[D,2 B,,2] [D, B,,]',
            ],
            //line 89
            [
                '',
                'F,/2E,/2D,G,',
            ],
            [
                '',
                '[A,2 C,2] [A, C,]',
            ],
            cadentialMeasure,
            [
                '',
                '[G,2 G,,2] G,',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            cadentialMeasure,
            [
                'gec',
                '[C,2 E,2] z',
            ],
            [
                'ecG',
                'C,2 z',
            ],
            //line 97
            [
                '',
                '[D,2 B,,2] [G, B,,]',
            ],
            [
                'cGe',
                albertiBass,
            ],
            [
                '^fad',
                '[A,2 C,2] [A, C,]',
            ],
            cadentialMeasure,
            [
                '',
                '[G,2 C,2] [E, C,]',
            ],
            [
                '',
                '[A,2 C,2] [A, C,]',
            ],
            [
                '',
                '[G,2 E,2] z',
            ],
            [
                '',
                'C,2 z',
            ],
            //line 105
            [
                '',
                'C,2 z',
            ],
            [
                '',
                'C,D,D,,',
            ],
            cadentialMeasure,
            [
                '',
                '[G,2 C,2] [E, C,]',
            ],
            [
                '',
                '[A,2 F,2] [D G,]',
            ],
            [
                '',
                'C,D,D,,',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'ecG',
                albertiBass,
            ],
            //line 113
            [
                'fdB',
                '[B,2 G,2] z',
            ],
            [
                '[d B][d B][d B]',
                'G,G,G,',
            ],
            [
                '',
                '[E,2 C,2] z',
            ],
            [
                '',
                'F,2 G,',
            ],
            [
                '',
                '[^F,2 D,2] z',
            ],
            [
                '',
                'C,D,D,,',
            ],
            [
                '',
                '[C,2 E,2] z',
            ],
            [
                '',
                '[^F,2 D,2] [F, C,]',
            ],
            //line 121
            [
                '',
                '[G,2 B,,2] z',
            ],
            [
                '',
                '[D,B,,][D,B,,][G,B,,]',
            ],
            cadentialMeasure,
            eighthNoteCChordMeasure,
            [
                '',
                'G,G,, z',
            ],
            [
                '',
                'E,2 E,/2C,/2',
            ],
            cadentialMeasure,
            [
                'Bdg',
                'G,,2 z',
            ],
            //line 129
            [
                '',
                '[D,B,,][D,B,,][G,B,,]',
            ],
            eighthNoteCChordMeasure,
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                '',
                'G,G,, z',
            ],
            [
                '',
                '[G,2 B,,2] z',
            ],
            [
                '',
                'C,D,D,,',
            ],
            [
                '',
                '[D,C,][D,C,][D,C,]',
            ],
            [
                '',
                '[C,2 E,2] z',
            ],
            //line 137
            [
                '',
                albertiBass,
            ],
            [
                '',
                'D,,/2D,/2^C,/2D,/2C,/2D,/2',
            ],
            [
                '',
                'B,,2 z',
            ],
            [
                '',
                '[^F,C,][F,C,][A,C,]',
            ],
            [
                '',
                '[G,2 B,,2] G,,',
            ],
            [
                'cGe',
                '[C,2 E,2] z',
            ],
            [
                '',
                '[D,2 B,,2] [D, B,,]',
            ],
            [
                'gce',
                albertiBass,
            ],
            //line 145
            [
                '',
                'F,2 G,',
            ],
            [
                '',
                'C,C,C,',
            ],
            [
                '',
                'C,D,D,,',
            ],
            [
                '',
                '[E,2 C,2] z',
            ],
            [
                '',
                'F,2 G,',
            ],
            [
                '',
                'C,/2B,,/2C,/2D,/2E,/2^F,/2',
            ],
            [
                '',
                'C,G,,C,,',
            ],
            [
                '',
                '[C,2 E,2] z',
            ],
            //line 153
            [
                '',
                'C,2 z',
            ],
            [
                '',
                'C,2 z',
            ],
            [
                '',
                '[D,2 B,,2] z',
            ],
            [
                '',
                '[G,2 E,2] z',
            ],
            [
                '',
                'C,2 z',
            ],
            [
                '',
                'G,,2 z',
            ],
            [
                '',
                'C,D,D,,',
            ],
            [
                '',
                '[E,2 C,2] [E, C,]',
            ],
            //line 161
            [
                '[d^F][dF][dF]',
                'C,C,C,',
            ],
            [
                "e/2d/2e/2g/2c'/2g/2",
                '[G,2 C,2] [E, C,]',
            ],
            [
                'g/2^f/2g/2d/2B/2G/2',
                '[D,2 B,,2] z',
            ],
            [
                'd G2',
                'G,/2^F,/2G,/2D,/2B,,/2G,,/2',
            ],
            [
                'dBG',
                'B,,2 z',
            ],
            [
                "d/2b/2g/2d/2B",
                '[B,2 G,2] z',
            ],
            [
                'cc/2d/2e',
                '[C,2 E,2] z',
            ],
            [
                'gf/2e/2d/2c/2',
                '[E,2 C,2] [G, E,]',
            ],
            //line 169
            [
                'e/2g/2d/2g/2A/2^f/2',
                'C,D,D,,',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'B/2c/2d/2e/2f/2d/2',
                '[G,2 G,,2] [G, B,,]',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'f/2a/2AB/2d/2',
                'F,2 G,',
            ],
            [
                'Gce',
                albertiBass,
            ],
            [
                'e/2c/2B/2d/2g',
                'G,G,, z',
            ],
            [
                'a/2g/2b/2g/2d/2g/2',
                '[D,2 B,,2] [D, B,,]',
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
                const measure = model.measures[j+measureOffset][voice] || 'z z z';
                abc += measure + '|';
            }
        }
    }

    return abc;
}

const abc = generateAbc(mozartModel(), createRange(0, mozartModel().measures.length));
console.log(abc);

ABCJS.renderAbc('sheet-music', abc, {responsive: true, staffwidth: 1100});
ABCJS.renderMidi('midi-player', abc);