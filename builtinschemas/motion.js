// A dummy extension file for the Motion category of Scratch

// Dynamic list enums holding special meaning to our compiler
__motion_menu__ = "MOTION_MENU"
__motion_menu_sans_mouse__ = "MOTION_MENU_SANS_MOUSE"


class motion {
    getInfo(){
        return {
            id: "motion",
            name: "motion",
            blocks: [
                {
                    opcode: "motion_movesteps",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "move [0] steps",
                    arguments: {
                        0: { type: "number", defaultValue: 10 }
                    }
                },
                {
                    opcode: "motion_turnright",
                    blockType: Scratch.BlockType.COMMAND,
                    text: ["turn cw [0] degrees","turn @turnRight [0] degrees"],
                    arguments: {
                        0: { type: "number", defaultValue: 15 }
                    }
                },
                {
                    opcode: "motion_turnleft",
                    blockType: Scratch.BlockType.COMMAND,
                    text: ["turn ccw [0] degrees","turn @turnLeft [0] degrees"],
                    arguments: {
                        0: { type: "number", defaultValue: 15 }
                    }
                },
                {
                    opcode: "motion_goto",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "go to [0]",
                    arguments: {
                        0: { type: "string", menu: "__motion_menu__" }
                    }
                },
                {
                    opcode: "motion_gotoxy",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "go to x:[0] y:[1]",
                    arguments: {
                        0: { type: "number", defaultValue: 36 },
                        1: { type: "number", defaultValue: 28 },
                    }
                },
                {
                    opcode: "motion_glideto",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "glide [0] secs to [1]",
                    arguments: {
                        0: { type: "number", defaultValue: 10 },
                        1: { type: "string", menu: "__motion_menu__" },
                    }
                },
                {
                    opcode: "motion_glidesecstoxy",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "glide [0] secs to x:[1] y:[2]",
                    arguments: {
                        0: { type: "number", defaultValue: 10 },
                        1: { type: "number", defaultValue: 36 },
                        2: { type: "number", defaultValue: 28 },
                    }
                },
                {
                    opcode: "motion_pointindirection",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "point in direction [0]",
                    arguments: {
                        0: { type: "number", defaultValue: 90 },
                    }
                },
                {
                    opcode: "motion_pointtowards",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "point towards [0]",
                    arguments: {
                        0: { type: "string", menu: "__motion_menu_sans_mouse__"},
                    }
                },
                {
                    opcode: "motion_changexby",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "change x by [0]",
                    arguments: {
                        0: { type: "number", defaultValue: 1},
                    }
                },
                {
                    opcode: "motion_setx",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set x to [0]",
                    arguments: {
                        0: { type: "number", defaultValue: 0},
                    }
                },
                {
                    opcode: "motion_changeyby",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "change y by [0]",
                    arguments: {
                        0: { type: "number", defaultValue: 1},
                    }
                },
                {
                    opcode: "motion_sety",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set y to [0]",
                    arguments: {
                        0: { type: "number", defaultValue: 0},
                    }
                },
                {
                    opcode: "motion_ifonedgebounce",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "if on edge, bounce",
                    arguments: {}
                },
                {
                    opcode: "motion_setrotationstyle",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set rotation style [0]",
                    arguments: {
                        0: { type: "string", menu: "__rotation_style__"},
                    }
                },
                {
                    opcode: "motion_xposition",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "x position",
                    arguments: {}
                },
                {
                    opcode: "motion_yposition",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "y position",
                    arguments: {}
                },
                {
                    opcode: "motion_direction",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "direction",
                    arguments: {}
                },
            ],
            menus: {
                __motion_menu__: {
                    acceptReporters: true,
                    items: __motion_menu__
                },
                __motion_menu_sans_mouse__: {
                    acceptReporters: true,
                    items: __motion_menu_sans_mouse__
                },
                __rotation_style__: {
                    acceptReporters: false,
                    items: ['left-right', "don't rotate", 'all around']
                }
            }
        }
    }
}

Scratch.extensions.register(new motion())