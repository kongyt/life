

// 创建游戏实例
GM.instance().logI("Create game instance!");
var game:LifeGame  = new LifeGame(800, 480, true);

// 注册游戏到管理类
GM.instance().logI("Register game to manager!");
GM.instance().setGame(game);

// // 显示性能信息
// GM.instance().logI("Show game stat!");
// game.showGameStat(0,0);

// 启动游戏
GM.instance().logI("Start game");
GM.instance().getGame().start();