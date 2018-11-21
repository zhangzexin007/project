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
        
        backMusic : cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //播放音乐
        gg.playAudioEffect(this.backMusic);

        this.LoadFab(this.node);
    },

    onDestroy: function () {
        // cc.audioEngine.stop(this.current);
    },

    LoadFab:function(node) {
        var TipBox;
        var PrefabUrl = "MainScene/EngineMap/Btn";
        cc.loader.loadRes(PrefabUrl, function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { 
                cc.log( '载入预制资源失败, 原因:' + errorMessage ); 
                return;
            }
            if( !( loadedResource instanceof cc.Prefab ) ) { 
                cc.log( '你载入的不是预制资源!' ); 
                return; 
            } 
            //开始实例化预制资源
            var a = 0;
            for(var i = Machine_Equip_Num; i > 0; i--){
                TipBox = cc.instantiate(loadedResource);
                var label = TipBox.getChildByName("Label");
                label.getComponent("cc.Label").string = window.ItemType[a];
                //将预制资源添加到父节点
                var pos = cc.p(-250,i*80 - 200);
                TipBox.setPosition(pos);
                TipBox.getChildByName('btnMgr').active = false;
                TipBox.tag = a;
                TipBox.name = window.ItemBtnType[a];
                a += 1;
                node.addChild(TipBox);
            }
        });
    },


    JiCangBtnSelect:function(event){
        for(let i = 0; i < Machine_Equip_Num; i++){
            let btnMgr = this.node.getChildByName(window.ItemBtnType[i]).getChildByName("btnMgr");
            if(btnMgr.active) {
                btnMgr.active = false;
            }
        }
        event.active = true;
    },
    start () {
        
    },

    // update (dt) {},
});
