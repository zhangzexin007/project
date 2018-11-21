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

        TouchBtnMusic : cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.addPersistRootNode(this.node);

        //每五秒存一次时间戳，记录离线时间，误差五秒左右
        this.schedule(function(){
            var Time = Date.now();
            gg.saveDataToLocality("GameTime",Time);
        },5);

        //每一分钟存一次挖取资源矿的数量
        this.schedule(function(){
            this.MineResObtain();
        },60);
    },

    MineResObtain : function() {
        let Gold_Level = Number(gg.getDataFormLocality(window.MineLevel[0]));
        let Energy_Level = Number(gg.getDataFormLocality(window.MineLevel[1]));
        let Alloy_Level = Number(gg.getDataFormLocality(window.MineLevel[2]));
        let Element_Level = Number(gg.getDataFormLocality(window.MineLevel[3]));

        let Gold_Work_Num = Number(gg.getDataFormLocality(window.MineNameWork[0]));
        let Energy_Work_Num = Number(gg.getDataFormLocality(window.MineNameWork[1]));
        let Alloy_Work_Num = Number(gg.getDataFormLocality(window.MineNameWork[2]));
        let Element_Work_Num = Number(gg.getDataFormLocality(window.MineNameWork[3]));

        let Mine_Gold_Num =  Number(gg.getDataFormLocality(gg_define.Key_Gold)) + Gold_Work_Num * Number(window.EnergyAndGoldPro[Gold_Level]);
        let Mine_Energy_Num = Number(gg.getDataFormLocality(gg_define.Key_Energy)) + Energy_Work_Num * Number(window.EnergyAndGoldPro[Energy_Level]);
        let Mine_Alloy_Num = Number(gg.getDataFormLocality(gg_define.Key_Alloy)) +Alloy_Work_Num * Number(window.AlloyPro[Alloy_Level]);
        let Mine_Element_Num = Number(gg.getDataFormLocality(gg_define.Key_Element)) + Element_Work_Num * Number(window.ElementPro[Element_Level]);

        gg.saveDataToLocality(gg_define.Key_Gold,Mine_Gold_Num.toFixed(0));
        gg.saveDataToLocality(gg_define.Key_Energy,Mine_Energy_Num.toFixed(0));
        gg.saveDataToLocality(gg_define.Key_Alloy,Mine_Alloy_Num.toFixed(0));
        gg.saveDataToLocality(gg_define.Key_Element,Mine_Element_Num.toFixed(2));

        console.log(Number(gg.getDataFormLocality(gg_define.Key_Gold)));
        console.log(Number(gg.getDataFormLocality(gg_define.Key_Energy)));
        console.log(Number(gg.getDataFormLocality(gg_define.Key_Alloy)));
        console.log(Number(gg.getDataFormLocality(gg_define.Key_Element)));


    },

    //物品合成
    ItemCompose : function(ItemNum,ItemComNum) {
        if(ItemNum >= ItemComNum) {
            console.log("物品合成");
        }
        else{
            console.log("合成按钮是禁用状态");
        }
    },

    //物品升级
    ItemUpGrade : function(ItemType, ItemLevel, ItemNum) {

    },

    //物品提纯
    ItemPurify : function(ItemType, ItemLevel, ItemNum) {

    },


    //返回按钮点击音效
    GetTouchBtnMusic : function() {
        return this.TouchBtnMusic;
    },


    LoadFab:function(node,num,Posx,Posy,PrefabUrl,IconUrl,FabType,MineType) {
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
            for(var i = num; i > 0; i--){
                var TipBox = cc.instantiate(loadedResource);
                var size = TipBox.getContentSize();
                // var label = TipBox.getChildByName("Label");
                var Leftbtn = TipBox.getChildByName("Mine_Left_Btn");
                var Rightbtn = TipBox.getChildByName("Mine_Right_Btn");
                let icon = TipBox.getChildByName("Item_Icon");
                let mine_num = TipBox.getChildByName("Bar_Label");
                let Item_Info = TipBox.getChildByName("Item_Info");

                //将预制资源添加到父节点
                var pos;
                if(Posx == 0) {
                    pos = cc.p(Posx ,-a*Posy - TipBox.getContentSize().height*0.7);
                    node.setContentSize(cc.size(size.width,(num + 1)*size.height));
                }
                else{
                    pos = cc.p(a*Posx - TipBox.getContentSize().width,Posy);
                    node.setContentSize(cc.size((num + 1)*size.width,size.height*0.7));
                }
                TipBox.setPosition(pos);
                TipBox.tag = a;
                if(FabType == 1){
                    TipBox.name = window.MineName[a];
                    if(Leftbtn != null && Rightbtn != null) {
                        Leftbtn.name = window.MineLeftBtnName[a];
                        Rightbtn.name = window.MineRightBtnName[a];
                    }
                    
                    if(icon != null) {
                        let url = IconUrl+a;
                        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
                            icon.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        });
                    }
    
                    if(Item_Info != null) {
                        let Numstring;
                        let Worknum;
                        Worknum = Number(gg.getDataFormLocality(window.MineNameWork[a]));
                        Numstring = gg.LabelChange(Worknum,a,window.MineLevel[a]);
                        
                        Item_Info.getComponent("cc.Label").string = Numstring;
                    }
                    // if( label!= null) {
                    //     label.getComponent("cc.Label").string = window.ItemType[a];
                    // }
                    if( mine_num!= null) {
                        let num = gg.getDataFormLocality(window.MineNameWork[a]);
                        mine_num.getComponent("cc.Label").string = num;
                    }
                }
                else if(FabType == 2){
                    if( Item_Info!= null) {
                        Item_Info.setContentSize.width = 350;
                        if(MineType == 1){
                            Item_Info.getComponent("cc.Label").string = window.gg_Gold[a+1];
                        }
                        if(MineType == 2){
                            Item_Info.getComponent("cc.Label").string = window.gg_Energy[a+1];
                        }
                        if(MineType == 3){
                            Item_Info.getComponent("cc.Label").string = window.gg_Alloy[a+1];
                        }
                        if(MineType == 4){
                            Item_Info.getComponent("cc.Label").string = window.gg_Element[a+1];
                        }
                    }
                    if( mine_num!= null) {
                        // mine_num.setContentSize.width = 300;
                        mine_num.getComponent("cc.Label").string = window.gg_LevelUp[a+1];
                    }
                    Leftbtn.active = false;
                    Rightbtn.active = false;
                    icon.active = false;
                    mine_num.setPosition(cc.p(120,5));
                    Item_Info.setPosition(cc.p(-90,0));
                    console.log(mine_num.getPosition());
                }
                var panelJS = cc.find('ResidentNode').getComponent('panel');
                panelJS.LoadLightFab(node,a,size.width,Posy,size.height*0.2);
                a += 1;
                node.addChild(TipBox);
            }
        });
    },
    
    start () {

    },

    // update (dt) {},
});
