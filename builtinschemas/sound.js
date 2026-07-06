// A dummy extension file for the Sound category of Scratch

// Dynamic list enums holding special meaning to our compiler



class sound {
    getInfo(){
        return {
            id: "sound",
            name: "sound",
            blocks: [
                {
                    opcode: "sound_volume",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "volume",
                },
                {
                    opcode: "sound_playuntildone",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "play sound [SOUND] until done",
                    arguments: {
                        SOUND: { type: "string", menu: "sounds" }
                    }
                },
                
            ],
            menus: {
                __motion_menu__: {
                    acceptReporters: true,
                    items: __motion_menu__
                },
                __rotation_style__: {
                    acceptReporters: false,
                    items: ['left-right', "don't rotate", 'all around']
                }
            }
        }
    }
}

Scratch.extensions.register(new sound())