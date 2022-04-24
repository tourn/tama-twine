const duration = 1000;
setup.animations.register("happy", 
    [
        {
            duration: duration * 3,
            image: [
                "(⑊_/)",
                "(^_^)",
                "(> <)"
            ],
            mask: [
                "hhhhh",
                "hHHHh",
                "hhhhh"
            ],
        },
        {
            duration: duration,
            image: [
                "(⑊_/) ♥",
                "(^_^)/",
                "(> <)"
            ],
            mask: [
                "hhhhh r",
                "hHHHh ",
                "hhhhh"
            ]
        },
    ]
);