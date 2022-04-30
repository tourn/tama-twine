duration = 200;
const duck_start = [
	{
		duration: duration * 5,
		image: [
			"(⑊_/)",
			"(O_o)",
			"(> <)___ ",
			"        |~~~~~~~~~~~"
		],
		mask: [
			"hhhhh",
			"hHHHh",
			"hhhhh    ",
			"         bbbbbbbbbbb"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)",
			"(> <)___           =",
			"        |~~~~~~~~~~~"
		],
		mask: [
			"hhhhh",
			"hHHHh",
			"hhhhh              1",
			"         bbbbbbbbbbb"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)",
			"(> <)___          =(",
			"        |~~~~~~~~~~("
		],
		mask: [
			"hhhhh",
			"hHHHh",
			"hhhhh             11",
			"         bbbbbbbbbb1"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)              _",
			"(> <)___         =(.",
			"        |~~~~~~~~~(_"
		],
		mask: [
			"hhhhh",
			"hHHHh              1",
			"hhhhh            111",
			"         bbbbbbbbb11"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)             _",
			"(> <)___        =(.)",
			"        |~~~~~~~~(__"
		],
		mask: [
			"hhhhh",
			"hHHHh             1",
			"hhhhh           1111",
			"         bbbbbbbb111"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)            _",
			"(> <)___       =(.)_",
			"        |~~~~~~~(___"
		],
		mask: [
			"hhhhh",
			"hHHHh            1",
			"hhhhh          11111",
			"         bbbbbbb1111"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)           _",
			"(> <)___      =(.)__",
			"        |~~~~~~(___/"
		],
		mask: [
			"hhhhh",
			"hHHHh           1",
			"hhhhh         111111",
			"         bbbbbb11111"
		]
	},
	{
		duration: duration,
		image: [
			"(⑊_/)",
			"(O_o)          _",
			"(> <)___     =(.)__",
			"        |~~~~~(___/~"
		],
		mask: [
			"hhhhh",
			"hHHHh          1",
			"hhhhh        111111",
			"         bbbbb11111b"
		]
	},
	{
		duration: duration * 5,
		image: [
			"(⑊_/)",
			"(O_o)         _",
			"(> <)___    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhhhh",
			"hHHHh         1",
			"hhhhh       111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 3,
		image: [
			"(⑊_/)",
			"(O_o)   QUAK  _",
			"(> <)___    >(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhhhh",
			"hHHHh         1",
			"hhhhh       111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 2,
		image: [
			"(⑊_/)",
			"(O_o)         _",
			"(> <)___    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhhhh",
			"hHHHh         1",
			"hhhhh       111111",
			"         bbbb11111bb"
		]
	},
];

setup.animations.register("duck_good", [
	...duck_start,
	{
		duration: duration * 5,
		image: [
			"(⑊_/)",
			"( ^_)         _",
			"(> <)___    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhhhh",
			"hhHHh         1",
			"hhhhh       111111",
			"         bbbb11111bb"
		]
	},

]);

setup.animations.register("duck_bad", [
	...duck_start,
	{
		duration: duration * 5,
		image: [
			"(⑊_/)",
			"( O_)         _",
			"(> <)___    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhhhh",
			"hhHHh         1",
			"hhhhh       111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 2,
		image: [
			"⑊_/) ",
			" O_)          _",
			"> <)____    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhhh",
			"hHHh          1",
			"hhhh        111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 2,
		image: [
			"_/) ",
			"O_)           _",
			" <)_____    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hhh",
			"HHh           1",
			"hhh         111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 2,
		image: [
			"/) ",
			"_)            _",
			"<)______    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"hh",
			"Hh            1",
			"hh          111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 2,
		image: [
			") ",
			")             _",
			")_______    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			"h",
			"h             1",
			"h           111111",
			"         bbbb11111bb"
		]
	},
	{
		duration: duration * 5,
		image: [
			" ",
			"              _",
			"________    =(.)__",
			"        |~~~~(___/~~"
		],
		mask: [
			" ",
			"              1",
			"            111111",
			"         bbbb11111bb"
		]
	},
]);