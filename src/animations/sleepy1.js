duration = 1000;
setup.animations.register("sleepy1",
    [
        {
            duration: duration * 3,
            image: [
                "(⑊_/)",
                "(/_⑊)",
                "(> <)"
            ],
            mask: [
                "hhhhh",
                "hHHHh",
                "hhhhh"
            ]
        },
        {
            duration: duration,
            image: [
                "(⑊_/) zzz?",
                "(/_⑊)/",
                "(> <)"
            ],
            mask: [
                "hhhhh     ",
                "hHHHh ",
                "hhhhh"
            ]
        },
    ]
);