// A dummy extension file for the Looks category of Scratch

// Dynamic list enums holding special meaning to our compiler

__costumes_menu__ = "__costumes_menu__"
__bg_menu__ = "__bg_menu__"


class looks {
    getInfo() {
        return {
            id: "looks",
            name: "Looks",
            blocks: [
                {
                    opcode: "looks_say",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "say [MESSAGE]",
                    arguments: {
                        MESSAGE: { type: "string", defaultValue: "Hello!" }
                    }
                },
                {
                    opcode: "looks_sayforsecs",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "say [MESSAGE] for [SECS] seconds",
                    arguments: {
                        MESSAGE: { type: "string", defaultValue: "Hello!" },
                        SECS: { type: "number", defaultValue: 2 }
                    }
                },
                {
                    opcode: "looks_think",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "think [MESSAGE]",
                    arguments: {
                        MESSAGE: { type: "string", defaultValue: "Hmm..." }
                    }
                },
                {
                    opcode: "looks_thinkforsecs",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "think [MESSAGE] for [SECS] seconds",
                    arguments: {
                        MESSAGE: { type: "string", defaultValue: "Hmm..." },
                        SECS: { type: "number", defaultValue: 2 }
                    }
                },
                {
                    opcode: "looks_show",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "show"
                },
                {
                    opcode: "looks_hide",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "hide"
                },
                {
                    opcode: "looks_switchcostumeto",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "switch costume to [COSTUME]",
                    arguments: {
                        COSTUME: { type: "string", menu: "costumes", defaultValue: "costume1" }
                    }
                },
                {
                    opcode: "looks_nextcostume",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "next costume"
                },
                {
                    opcode: "looks_switchbackdropto",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "switch backdrop to [BACKDROP]",
                    arguments: {
                        BACKDROP: { type: "string", menu:"bg", defaultValue: "backdrop1" }
                    }
                },
                {
                    opcode: "looks_nextbackdrop",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "next backdrop"
                },
                {
                    opcode: "looks_changeeffectby",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "change [EFFECT] effect by [CHANGE]",
                    arguments: {
                        EFFECT: { type: "string", menu: "effects", defaultValue: "COLOR" },
                        CHANGE: { type: "number", defaultValue: 10 }
                    }
                },
                {
                    opcode: "looks_seteffectto",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set [EFFECT] effect to [VALUE]",
                    arguments: {
                        EFFECT: { type: "string", menu: "effects", defaultValue: "COLOR" },
                        VALUE: { type: "number", defaultValue: 0 }
                    }
                },
                {
                    opcode: "looks_cleargraphiceffects",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "clear graphic effects"
                },
                {
                    opcode: "looks_changesizeby",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "change size by [CHANGE]",
                    arguments: {
                        CHANGE: { type: "number", defaultValue: 10 }
                    }
                },
                {
                    opcode: "looks_setsizeto",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set size to [SIZE]%",
                    arguments: {
                        SIZE: { type: "number", defaultValue: 100 }
                    }
                },
                {
                    opcode: "looks_costumenumbername",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "costume [NUMBERNAME]",
                    arguments: {
                        NUMBERNAME: { type: "string", menu: "costumenumbername", defaultValue: "number" }
                    }
                },
                {
                    opcode: "looks_backdropnumbername",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "backdrop [NUMBERNAME]",
                    arguments: {
                        NUMBERNAME: { type: "string", menu: "backdropnumbername", defaultValue: "number" }
                    }
                },
                {
                    opcode: "looks_size",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "size"
                },
                {
                    opcode: "looks_gotofrontback",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "go to [LAYER] layer",
                    arguments: {
                        LAYER: { type: "string", menu: "frontBack", defaultValue: "front" }
                    }
                },
                {
                    opcode: "looks_goforwardbackwardlayers",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "go [DIRECTION] [NUM] layers",
                    arguments: {
                        DIRECTION: { type: "string", menu: "forwardBackward", defaultValue: "forward" },
                        NUM: { type: "number", defaultValue: 1 }
                    }
                },
                {
                    opcode: "looks_switchbackdroptoandwait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "switch backdrop to [BACKDROP] and wait",
                    arguments:{
                        BACKDROP: { type: "string", menu: "bg",defaultValue: "backdrop1" }  
                    }
                }
            ],
            menus: {
                effects: {
                    acceptReporters: false,
                    items: ["color", "fisheye", "whirl", "pixelate", "mosaic", "brightness", "ghost"]
                },
                rotationStyle: {
                    acceptReporters: false,
                    items: ["all around", "left-right", "don't rotate"]
                },
                costumenumbername: {
                    acceptReporters: false,
                    items: ["number", "name"]
                },
                backdropnumbername: {
                    acceptReporters: false,
                    items: ["number", "name"]
                },
                costumes: {
                    acceptReporters: true,
                    items: __costumes_menu__
                },
                bg: {
                    acceptReporters: true,
                    items: __bg_menu__
                }
            }
        }
    }
}


Scratch.extensions.register(new looks())