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
        stafingcontent : cc.Node,
        Discarded : cc.Sprite,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.ResidentNode = cc.find('ResidentNode').getComponent('ResidentNode');
        this.panelJS = cc.find('ResidentNode').getComponent('panel');

        var node = this.node.getChildByName("Main_bg");
        var GoldInfoBtn = node.getChildByName("Gold_mine").getChildByName("Gold").getChildByName("Gold_Info");
        GoldInfoBtn.tag = 1;
        var EnergyInfoBtn = node.getChildByName("Energy_mine").getChildByName("Energy").getChildByName("Energy_Info");
        EnergyInfoBtn.tag = 2;
        var AlloyInfoBtn = node.getChildByName("Alloy_mine").getChildByName("Alloy").getChildByName("Alloy_Info");
        AlloyInfoBtn.tag = 3;
        var ElementInfoBtn = node.getChildByName("Element_mine").getChildByName("Element").getChildByName("Element_Info");
        ElementInfoBtn.tag = 4;

        this.schedule(function(){
            this.SetDiscarded();
            this.DiscardedMove();
        },15);

    },

    CreatConfig : function() {
        this.node.active = true;
        var url = "ShopViewBar";
        var lightFab = 'prefab/light';
        var iconurl = "MainScene/Img/1100";
        let node = this.node.getChildByName("Main_bg").getChildByName("SrafingFrame").getChildByName("ItemHouse_Mask").getChildByName("scrollview").getChildByName("view").getChildByName("content");
        this.ResidentNode.LoadFab(node,window.MineNum,0,100,url,iconurl,1);
    },

    RemoveChilden : function() {
        let node = this.node.getChildByName("Main_bg").getChildByName("SrafingFrame").getChildByName("ItemHouse_Mask").getChildByName("scrollview").getChildByName("view").getChildByName("content");
        node.removeAllChildren();
    },
    SetDiscarded : function(){
        let url;
        let type = Math.random() * 3;
        if(type.toFixed() == 1){
            window.DiscardedType = 1;
            url = "MainScene/Mine/taoshengcang";
        }
        else if(type.toFixed() == 2){
            window.DiscardedType = 2;
            url = "MainScene/Mine/feichuan";
        }
        else if(type.toFixed() == 3 || type.toFixed() == 0){
            window.DiscardedType = 3;
            url = "MainScene/Mine/kongjianzhan";
        }
        let self = this;
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            self.Discarded.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    },

    DiscardedMove : function(){
        let self = this;
        if(!window.DiscardedActive){
            window.DiscardedActive = true;
            this.Discarded.node.getChildByName("DiscardedBtn").active = true;
            this.Discarded.node.setPosition(cc.p(530,330));

            this.unschedule(this.DiscardedMove);
        }

        let action = cc.sequence(cc.moveTo(15, cc.p(-640,-300)),
            cc.callFunc(function(){
                self.Discarded.node.setPosition(cc.p(530,330));
            })
        );
        this.Discarded.node.runAction(action);
    },
    
    CreatorMineInfo : function(node,MineType) {
        let url = "ShopViewBar";
        this.ResidentNode.LoadFab(node,10,0,100,url,null,2,MineType);
    },
    GetBottomContent : function() {
        return this.stafingcontent;
    },
    start () {

    },

    // update (dt) {},
});
