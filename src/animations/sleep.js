duration = 300;
setup.animations.register("sleep",
    [
        {
            loop: 8,
            frames: [
                {
                    duration: duration,
                    image: [
                        "(⑊_/) Z",
                        "(-_-)z",
                        "(> <)"
                    ],
                    mask: [
                        "hhhhh 2",
                        "hHHHh1",
                        "hhhhh"
                    ]
                },
                {
                    duration: duration,
                    image: [
                        "(⑊_/) z",
                        "(-_-)Z",
                        "(> <)"
                    ],
                    mask: [
                        "hhhhh 1",
                        "hHHHh2",
                        "hhhhh"
                    ]
                },
            ]
        },
    ]
);