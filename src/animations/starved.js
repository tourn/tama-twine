duration = 100;
setup.animations.register("starved",
    [
        {
            duration: duration * 15,
            image: [
                "  (⑊/)",
                "  (Oo)",
                "  (><)"
            ],
            mask: [
                "  hhhh",
                "  hHHh",
                "  hhhh"
            ]
        },
        {
            duration: duration * 2,
            image: [
                "   ⑊/",
                "  (Oo)",
                " /(><)⑊"
            ],
            mask: [
                "   hh",
                "  hHHh",
                " hhhhhh"
            ]
        },
        {
            duration: duration * 2,
            image: [
                "   ⑊/",
                "   Oo",
                "_/(><)⑊_"
            ],
            mask: [
                "   hh",
                "   HH",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration * 2,
            image: [
                "   ⑊/",
                "   Oo",
                "__/><⑊__"
            ],
            mask: [
                "   hh",
                "   HH",
                "hhhhhhhh"
            ]
        },
        {
            loop: 2,
            frames: [
                {
                    duration: duration * 5,
                    image: [
                        "   ⑊/",
                        "   Oo",
                        "___><___"
                    ],
                    mask: [
                        "   hh",
                        "   HH",
                        "hhhhhhhh"
                    ]
                },
                {
                    duration: duration,
                    image: [
                        "   ⑊/",
                        "   --",
                        "___><___"
                    ],
                    mask: [
                        "   hh",
                        "   HH",
                        "hhhhhhhh"
                    ]
                },
            ]
        },
        {
            duration: duration * 5,
            image: [
                "   ⑊/",
                "   Oo",
                "___><___"
            ],
            mask: [
                "   hh",
                "   HH",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration * 5,
            image: [
                "   ⑊/",
                "   Xx",
                "___><___"
            ],
            mask: [
                "   hh",
                "   HH",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration * 3,
            image: [
                "    ⑊/",
                "   Xx",
                "___><___"
            ],
            mask: [
                "    hh",
                "   HH",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration * 2,
            image: [
                "     ⑊/",
                "    Xx",
                "___><___"
            ],
            mask: [
                "     hh",
                "    HH",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration,
            image: [
                "      /",
                "    Xx-",
                "___><___"
            ],
            mask: [
                "      h",
                "    HHh",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration,
            image: [
                "       _",
                "     Xx-",
                "___><___"
            ],
            mask: [
                "       h",
                "     HHh",
                "hhhhhhhh"
            ]
        },
        {
            duration: duration * 10,
            image: [
                "",
                "       _",
                "___><Xx-"
            ],
            mask: [
                "",
                "       h",
                "hhhhhHHh"
            ]
        },
    ]
);