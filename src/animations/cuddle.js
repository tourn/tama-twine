duration = 300;
setup.animations.register("cuddle",
    [
        {
            loop: 7,
            frames: [
                {
                    duration: 300,
                    image: [
                        " (⑊_/)",
                        " (^-^)",
                        " (> <)"
                    ],
                    mask: [
                        " hhhhh",
                        " hHHHh",
                        " hhhhh"
                    ]
                },
                {
                    duration: 300,
                    image: [
                        "     ",
                        " (⑊_/)",
                        "((^-^))",
                    ],
                    mask: [
                        "     ",
                        " hhhhh",
                        "hhHHHhh",
                    ],
                },
            ]
        },
    ]
);