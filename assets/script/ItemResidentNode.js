// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        anim : cc.Animation,
        OpenBagBG : cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    
    onLoad () {
        cc.game.addPersistRootNode(this.node);
        this.BottomScrollview = this.node.getChildByName("Mask").getChildByName("IitemBack").getChildByName("BottomScrollview");
        this.LeftScrollview = this.node.getChildByName("Mask").getChildByName("IitemBack").getChildByName("LeftScrollview");
        this.TopNode = this.node.getChildByName("Mask").getChildByName("IitemBack").getChildByName("TopScrollview").getChildByName("view").getChildByName("content");
        this.LeftNode = this.LeftScrollview.getChildByName("view").getChildByName("content");
        this.BottomNode = this.BottomScrollview.getChildByName("view").getChildByName("content");
        this.node.getChildByName("panel").active = false;

    },
    AddItemResidentNode : function () {
        gg.playAudioEffect(this.OpenBagBG);

        this.node.setPosition(cc.p(320,480));
        this.scheduleOnce(function(){
            this.ItemMoveTo();
        });

        this.scheduleOnce(function(){
            this.ExitMoveTo();
        },0.5);

        this.scheduleOnce(function(){
            this.ItemInfoAction();
        },1.5);
    },

    ItemMoveTo:function(){//投影移动（大+小+条）
        var TouYing = this.node.getChildByName('TouYing');
        var TouYingAction = cc.moveBy(0.5,cc.p(100,0));
        TouYing.runAction(TouYingAction);
    },
    ExitMoveTo:function(){//推荐按钮移动（小+条）
        var bar = this.node.getChildByName('TouYing').getChildByName('bar');
        var barAction = cc.moveTo(1.0,cc.p(304,310));
        var change = cc.callFunc(function(){
            this.ItemMovechange();
            this.ExitMoveChange();
        }.bind(this));
        bar.runAction(cc.sequence(barAction,change));
    },
    ItemMovechange:function(){//块改变图片（大）
        var changeBlack = this.node.getChildByName('TouYing').getChildByName('black').getComponent(cc.Sprite);
        changeBlack.spriteFrame = new cc.SpriteFrame();
        changeBlack.spriteFrame.setTexture(cc.url.raw("resources/MainScene/ItemHouse/ItemHouseAction/blackLeft.png"));
    },
    ExitMoveChange:function(){//退出按钮改变图片（小）
        var changeExit = this.node.getChildByName('TouYing').getChildByName('bar').getChildByName('exit').getChildByName('Sprite').getComponent(cc.Sprite);
        changeExit.spriteFrame = new cc.SpriteFrame();
        changeExit.spriteFrame.setTexture(cc.url.raw('resources/MainScene/ItemHouse/ItemHouseAction/exit_red_normal.png'));
    },
    ExitBackChange:function(){//退出按钮返回改变图片（小）
        var changeExit = this.node.getChildByName('TouYing').getChildByName('bar').getChildByName('exit').getChildByName('Sprite').getComponent(cc.Sprite);
        changeExit.spriteFrame = new cc.SpriteFrame();
        changeExit.spriteFrame.setTexture(cc.url.raw('resources/MainScene/ItemHouse/ItemHouseAction/exitLeft.png'));
    },
    ItemBackChange:function(){//投影改变图片（大+小）
        var changeBlack = this.node.getChildByName('TouYing').getChildByName('black').getComponent(cc.Sprite);
        changeBlack.spriteFrame = new cc.SpriteFrame();
        changeBlack.spriteFrame.setTexture(cc.url.raw("resources/MainScene/ItemHouse/ItemHouseAction/blackRight.png"));
        var changeExit = this.node.getChildByName('TouYing').getChildByName('bar').getChildByName('exit').getChildByName('Sprite').getComponent(cc.Sprite);
        changeExit.spriteFrame = new cc.SpriteFrame();
        changeExit.spriteFrame.setTexture(cc.url.raw('resources/MainScene/ItemHouse/ItemHouseAction/exitRight.png'));
    },
    ExitMoveBack:function(){//退出按钮返回移动（小+条）
        var bar = this.node.getChildByName('TouYing').getChildByName('bar');
        var barAction = cc.moveTo(1.0,cc.p(-243,310));
        var change = cc.callFunc(function(){
            this.ExitBackChange();
        }.bind(this));
        bar.runAction(cc.sequence(change,barAction));
    },
    ItemMoveBack:function(){//投影返回移动（大+小+条）
        var TouYing = this.node.getChildByName('TouYing');
        var TouYingAction = cc.moveBy(0.5,cc.p(-100,0));
        var change = cc.callFunc(function(){
            this.ItemBackChange();
        }.bind(this));
        TouYing.runAction(cc.sequence(TouYingAction,change));
    },
    ItemInfoAction : function() {//包裹栏显示
        var node = this.node.getChildByName("Mask").getChildByName("IitemBack");
        var action = cc.moveTo(0.5, cc.p(20,20));
        node.runAction(action);
    },
    disPanel:function(){//显示合成板
        this.node.getChildByName("panel").active = true;
    },

    removeItemResidentNode : function () {
        this.scheduleOnce(function(){
            this.ItemBackAction();
        });

        this.scheduleOnce(function(){
            this.ExitMoveBack();
        },0.5);

        this.scheduleOnce(function(){
            this.ItemMoveBack();
        },1.5);

        this.scheduleOnce(function(){
            this.node.setPosition(cc.p(-500,480));

            this.TopNode.removeAllChildren();
            this.LeftNode.removeAllChildren();
            this.BottomNode.removeAllChildren();
            // this.BottomScrollview.setPositionY(-50);
            // this.LeftScrollview.setPositionY(-70);//设置包裹面板复位
        },2.0);
        
    },
    ItemBackAction : function() {//包裹栏返回
        var node = this.node.getChildByName("Mask").getChildByName("IitemBack");
        var action = cc.moveTo(0.5, cc.p(20,900));
        node.runAction(action);
    },
    start () {

    },

    // update (dt) {},
});
