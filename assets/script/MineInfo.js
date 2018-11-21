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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.AddInfoBox();
    },

    AddInfoBox : function(name){
        var node = this.node.getChildByName("scrollview").getChildByName("view").getChildByName("content");
        this.node.getChildByName("MineName").string = name;
        this.AddSprite(node,"MainScene/main_bg");
    },

    AddSprite: function(node, addres) {
        cc.loader.loadRes(addres, cc.SpriteFrame, function (err, spriteFrame) {
            if(err){
                cc.log( err ); 
            }
            var node1 = new cc.Node('myNode');
            node1.setAnchorPoint(0,1);
            var sprite = node1.addComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame;
            node1.setPosition(cc.p(-160,240));
            node.addChild(node1);
        });
    },

    start () {

    },

    // update (dt) {},
});
