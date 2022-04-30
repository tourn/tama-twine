duration = 100;
setup.animations.register("dead2",
	[
		{
			duration: duration,
			image: [
				"        ___",
				"       /   ⑊",
				"       |RIP|",
				"       |   |",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				"        111",
				"       1   1",
				"       12221",
				"       1   1",
				"gggggggggggggggggggg",
			]
		},
		{
			duration: duration,
			image: [
				"/ / / / /_/ / / / / ",
				"       /   ⑊",
				"       |RIP|",
				"       |   |",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				"b b b b b1b b b b b ",
				"       1   1",
				"       12221",
				"       1   1",
				"gggggggggggggggggggg",
			]
		},
		{
			duration: duration,
			image: [
				" / / / /_/_/ / / / /",
				" / / / /   ⑊ / / / /",
				"       |RIP|",
				"       |   |",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				" b b b b1b1b b b b b",
				" b b b 1   1 b b b b",
				"       12221",
				"       1   1",
				"gggggggggggggggggggg",
			]
		},
		{
			duration: duration,
			image: [
				"/ / / / /_/ / / / / ",
				"/ / / //   ⑊/ / / / ",
				"/ / /  |RIP|/ / / /",
				"       |   |",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				"b b b b b1b b b b b ",
				"b b b b1   1b b b b ",
				"b b b  12221b b b b",
				"       1   1",
				"gggggggggggggggggggg",
			]
		},
		{
			loop: 20, frames: [
				{
					duration: duration,
					image: [
						" / / / /_/_/ / / / /",
						" / / / /   ⑊ / / / /",
						" / / / |RIP| / / / /",
						" / /   |   | / / / /",
						"^^^^^^^=====^^^^^^^^"
					],
					mask: [
						" b b b b1b1b b b b b",
						" b b b 1   1 b b b b",
						" b b b 12221 b b b b",
						" b b   1   1 b b b b",
						"gggggggggggggggggggg",
					]
				},
				{
					duration: duration,
					image: [
						"/ / / / /_/ / / / / ",
						"/ / / //   ⑊/ / / / ",
						"/ / /  |RIP|/ / / / ",
						"/ / /  |   |/ / / / ",
						"^^^^^^^=====^^^^^^^^"
					],
					mask: [
						"b b b b b1b b b b b ",
						"b b b b1   1b b b b ",
						"b b b  12221b b b b ",
						"b b b  1   1b b b b ",
						"gggggggggggggggggggg",
					]
				},
			]
		},
		{
			duration: duration,
			image: [
				"        ___",
				" / / / /   ⑊ / / / /",
				" / / / |RIP| / / / /",
				" / /   |   | / / / /",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				"        111",
				" b b b 1   1 b b b b",
				" b b b 12221 b b b b",
				" b b   1   1 b b b b",
				"gggggggggggggggggggg",
			]
		},
		{
			duration: duration,
			image: [
				"        ___",
				"       /   ⑊",
				"/ / /  |RIP|/ / / /",
				"/ /    |   |/ / / /",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				"        111",
				"       1   1",
				"b b b  12221b b b b",
				"b b    1   1b b b b",
				"gggggggggggggggggggg",
			]
		},
		{
			duration: duration,
			image: [
				"        ___",
				"       /   ⑊",
				"       |RIP|",
				" / /   |   | / / / /",
				"^^^^^^^=====^^^^^^^^"
			],
			mask: [
				"        111",
				"       1   1",
				"       12221",
				" b b   1   1 b b b b",
				"gggggggggggggggggggg",
			]
		},
	]
);