(function() {
	function getAudioAssets(audioFiles) {
		var assets = {};
		audioFiles.forEach(function(audioFile) {
			assets[audioFile] = [
			  'aprilfools-2015/media/sfx/' + audioFile + '.mp3',
				'aprilfools-2015/media/sfx/' + audioFile + '.ogg',
				'aprilfools-2015/media/sfx/' + audioFile + '.wav'
			];
		});

		return assets;
	}

	Crafty.scene('loading', function() {
		var audioFiles = [
			'bounce',
			'brickDeath',
			'countdownBlip',
			'levelComplete',
			'powerdown',
			'powerup',
			'recover'
		];

		var assets = {
			images: {
				tiles: 'aprilfools-2015/media/tiles.png',
				logo: 'aprilfools-2015/media/logo.png'
			},
			audio: getAudioAssets(audioFiles)
		};

		Crafty.load(assets, function() {
			Crafty.scene('menu');
		});

		Crafty.background('#000');
		Crafty.e('2D, DOM, Text').attr({
			w: Crafty.stage.elem.clientWidth,
			h: 20,
			x: 0,
			y: 120
		}).text('Loading').css({
			'text-align': 'center'
		})
		.textColor('#ffffff')
		.textFont({size: '30px', weight: 'bold'});
	});
})();
