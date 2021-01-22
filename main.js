var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/3.png");

ASSET_MANAGER.downloadAll(function () {
	//PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	//PARAMS.CANVAS_WIDTH = canvas.width;

	gameEngine.init(ctx);

	gameEngine.addEntity(new Player(gameEngine, 50, 50, ASSET_MANAGER.getAsset("./sprites/3.png")));

	gameEngine.start();
});
