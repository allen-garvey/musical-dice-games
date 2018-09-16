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
                'd/2A/2d^f',
                '[^F,2 D,2] z',
            ],
            [
                '^faf',
                '[A,D,][^F,D,][D,C,]',
            ],
            [
                'c/2B/2c/2e/2G/2c/2',
                '[E,2 C,2] [G, E,]',
            ],
            [
                'gb/2g/2d/2g/2',
                'B,,2 z',
            ],
            [
                'gec',
                '[C,2 E,2] z',
            ],
            [
                '^fa/2f/2d/2f/2',
                'D,2 C,',
            ],
            [
                "g/2b/2d'/2b/2g",
                '[D,2 B,,2] [D, B,,]',
            ],
            [
                'f/2e/2d/2c/2B/2d/2',
                'F,2 G,',
            ],
            //line 73
            [
                'gec',
                albertiBass,
            ],
            [
                "c'/2b/2c'/2g/2e/2c/2",
                '[C,2 E,2] z',
            ],
            [
                '[^fd][fd][fd]',
                'C,C,C,',
            ],
            [
                "c'/2b/2c'/2g/2e/2c/2",
                '[E,2 C,2] [G, C,]',
            ],
            [
                'g/2b/2g d',
                '[D,2 B,,2] [G, B,,]',
            ],
            [
                'cC z',
                'C,2 C,,',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'd!turn!A^f',
                'C,2 z',
            ],
            //line 81
            cadentialMeasure,
            [
                'd/2B/2G g',
                '[G,2 B,,2] [D, B,,]',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'c/2G/2e/2c/2g/2e/2',
                '[C,2 E,2] z',
            ],
            [
                'ceG',
                '[G,2 E,2] z',
            ],
            [
                'dd/2g/2b',
                '[G,2 B,,2] z',
            ],
            [
                'gce',
                '[E,2 C,2] [G, C,]',
            ],
            [
                'g/2d/2g/2b/2g/2d/2',
                '[D,2 B,,2] [D, B,,]',
            ],
            //line 89
            [
                'f/2e/2dg',
                'F,/2E,/2D,G,',
            ],
            [
                "^f/2a/2d'/2a/2f/2a/2",
                '[A,2 C,2] [A, C,]',
            ],
            cadentialMeasure,
            [
                '[dB]g/2b/2 d',
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
                'g/2^f/2g/2d/2B/2G/2',
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
                "e/2d/2e/2g/2c'/2g/2",
                '[G,2 C,2] [E, C,]',
            ],
            [
                '^f/2d/2A f',
                '[A,2 C,2] [A, C,]',
            ],
            [
                'c/2e/2c/2G/2E',
                '[G,2 E,2] z',
            ],
            [
                "e/2d/2e/2g/2c'/2g/2",
                'C,2 z',
            ],
            //line 105
            [
                '^fa/2f/2d/2f/2',
                'C,2 z',
            ],
            [
                'Ad/2c/2B/2A/2',
                'C,D,D,,',
            ],
            cadentialMeasure,
            [
                "egc'",
                '[G,2 C,2] [E, C,]',
            ],
            [
                'd/2f/2d/2f/2B/2d/2',
                '[A,2 F,2] [D G,]',
            ],
            [
                '[d/2B/2][c/2A/2][c/2A/2][B/2G/2][B/2G/2][A/2^F/2]',
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
                '[dB][dB][dB]',
                'G,G,G,',
            ],
            [
                'c/2G/2e/2c/2g/2e/2',
                '[E,2 C,2] z',
            ],
            [
                'd/2f/2a/2f/2d/2B/2',
                'F,2 G,',
            ],
            [
                'd/2A/2d/2^f/2a/2f/2',
                '[^F,2 D,2] z',
            ],
            [
                'e/2a/2g/2b/2^f/2a/2',
                'C,D,D,,',
            ],
            [
                "e/2c/2g/2e/2c'/2g/2",
                '[C,2 E,2] z',
            ],
            [
                "d'a/2^f/2d/2A/2",
                '[^F,2 D,2] [F, C,]',
            ],
            //line 121
            [
                'db/2g/2d',
                '[G,2 B,,2] z',
            ],
            [
                'g/2^f/2g/2b/2d',
                '[D,B,,][D,B,,][G,B,,]',
            ],
            cadentialMeasure,
            eighthNoteCChordMeasure,
            [
                'g/2e/2d/2B/2 G',
                'G,G,, z',
            ],
            [
                'c/2G/2c/2e/2g/2[e/2c/2]',
                'E,2 E,/2C,/2',
            ],
            cadentialMeasure,
            [
                'Bdg',
                'G,,2 z',
            ],
            //line 129
            [
                'a/2g/2^f/2g/2d',
                '[D,B,,][D,B,,][G,B,,]',
            ],
            eighthNoteCChordMeasure,
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                '[ec][d/2B/2][B/2G/2]G',
                'G,G,, z',
            ],
            [
                'dg/2d/2B/2d/2',
                '[G,2 B,,2] z',
            ],
            [
                'A/2d/2[d/2B/2][c/2A/2][B/2G/2][A/2^F/2]',
                'C,D,D,,',
            ],
            [
                '^ff/2d/2a',
                '[D,C,][D,C,][D,C,]',
            ],
            [
                "c'/2b/2c'/2g/2e/2c/2",
                '[C,2 E,2] z',
            ],
            //line 137
            [
                'cGe',
                albertiBass,
            ],
            [
                '[^fdA] Tf2',
                'D,,/2D,/2^C,/2D,/2C,/2D,/2',
            ],
            [
                'g/2b/2g/2b/2d',
                'B,,2 z',
            ],
            [
                'AA/2d/2^f',
                '[^F,C,][F,C,][A,C,]',
            ],
            [
                'd/2e/2f/2d/2c/2B/2',
                '[G,2 B,,2] G,,',
            ],
            [
                'cGe',
                '[C,2 E,2] z',
            ],
            [
                'gd/2B/2G',
                '[D,2 B,,2] [D, B,,]',
            ],
            [
                'gce',
                albertiBass,
            ],
            //line 145
            [
                'd/2f/2A/2d/2B/2d/2',
                'F,2 G,',
            ],
            [
                '[d^F][^fd][af]',
                'C,C,C,',
            ],
            [
                "g/2c'/2b/2g/2a/2^f/2",
                'C,D,D,,',
            ],
            [
                "c'/2b/2c'/2g/2e/2c/2",
                '[E,2 C,2] z',
            ],
            [
                'f/2d/2A B',
                'F,2 G,',
            ],
            [
                '[ecG] Te2',
                'C,/2B,,/2C,/2D,/2E,/2^F,/2',
            ],
            [
                'c2 z',
                'C,G,,C,,',
            ],
            [
                'gf/2e/2d/2c/2',
                '[C,2 E,2] z',
            ],
            //line 153
            [
                'd/2A/2^f/2d/2a/2f/2',
                'C,2 z',
            ],
            [
                'd/2^c/2d/2^f/2a/2f/2',
                'C,2 z',
            ],
            [
                'g/2b/2g/2d/2B/2G/2',
                '[D,2 B,,2] z',
            ],
            [
                'c/2G/2e/2c/2 g',
                '[G,2 E,2] z',
            ],
            [
                "e/2d/2e/2g/2c'/2g/2",
                'C,2 z',
            ],
            [
                'Bd/2B/2A/2G/2',
                'G,,2 z',
            ],
            [
                'e/2g/2d/2c/2B/2A/2',
                'C,D,D,,',
            ],
            [
                'c/2B/2c/2e/2G/2c/2',
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
        combinations: [
            [95, 31, 68, 39, 147, 103, 151, 118, 97, 2,],
            [21, 5, 94, 16, 73, 156, 59, 83, 141, 86,],
            [140, 127, 157, 112, 162, 26, 170, 113, 41, 164,],
            [40, 62, 12, 84, 44, 166, 52, 49, 155, 60,],
            [104, 145, 152, 160, 79, 153, 98, 139, 74, 134,],
            [121, 45, 54, 1, 96, 67, 132, 85, 128, 46,],
            [10, 133, 109, 158, 35, 117, 20, 168, 61, 146,],
            [29, 80, 23, 99, 106, 90, 126, 93, 122, 32,],
            //section 2
            [69, 116, 65, 89, 24, 137, 15, 119, 64, 101, 34,],
            [120, 38, 138, 175, 142, 70, 154, 87, 76, 3, 19,],
            [25, 125, 14, 6, 63, 149, 56, 47, 18, 30, 107,],
            [8, 55, 131, 33, 124, 28, 174, 165, 81, 163, 91,],
            [111, 173, 72, 66, 75, 100, 42, 50, 136, 143, 11,],
            [48, 17, 57, 159, 135, 162, 167, 114, 37, 58, 123,],
            [108, 115, 144, 51, 0, 22, 88, 71, 148, 172, 43,],
            [13, 82, 78, 169, 92, 150, 171, 110, 7, 77, 130,],
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
                const measure = model.measures[measureArray[j+measureOffset]][voice] || 'z z z';
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