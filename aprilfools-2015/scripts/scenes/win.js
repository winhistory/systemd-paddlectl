Crafty.scene('win', function() {
	breakout.createBackground();

	breakout.logo();

	Crafty.sprite(2, 'aprilfools-2015/media/winrar.png', {
		winrarisyou: [0, 0, 136, 152]
	});

	Crafty.e('2D, DOM, winrarisyou')
		.attr({
			x: Crafty.stage.elem.clientWidth / 2 - 136 / 2,
			y: Crafty.stage.elem.clientHeight - 162
		});

	/*Crafty.e('2D, DOM, Text')
		.attr({
			x: 0,
			y: Crafty.stage.elem.clientHeight / 2 + 60,
			w: Crafty.stage.elem.clientWidth,
			h: 30
		})
		.text('you are the master!')
		.textFont({size: '20px'})
		.textColor('#ffffff')
		.css('text-align', 'center');*/

	Crafty.e('2D, Canvas, Mouse, Keyboard, Text')
		.attr({
			x: 0,
			y: 0,
			w: 320,
			h: 480
		})
		.bind('MouseDown', function(e) {
			Crafty.scene('menu');
		});

	setTimeout(function() {
		Crafty.scene('menu');
	}, 4000);
});
