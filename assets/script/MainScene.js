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
        //是否第一次进入游戏
        var FirstOpen = gg.getDataFormLocality("FirstOpen");
        if(!FirstOpen){
            gg.saveDataToLocality("FirstOpen",1);
            
            this.userData();
        }
        //this.userData();
        gg.saveDataToLocality(gg_define.key_UserPower,10000000000000); 
        gg.saveDataToLocality("Artillery_HP_Attribute",100);
        gg.saveDataToLocality("Artillery_GJ_Attribute",100);
        gg.saveDataToLocality("Artillery_FY_Attribute",100);
        
        //添加离线后挂机获取的资源
        if(window.IsLeave) {
            window.IsLeave = false;
            this.IsLeaveTime();
        }
        //玩家战斗力
        this.UserInfo();
        //gg.saveDataToLocality('Element_HP_Level1',10000000000000000);   //合金

    },
    UserInfo : function () {
        var userpower = gg.getDataFormLocality(gg_define.key_UserPower);
        let aaaaa = gg.NumShowType(userpower);
        var PowerNode = this.node.getChildByName("Main_bg").getChildByName("user_info_bg")
        .getChildByName("User_Power").getChildByName("Power_Num").getComponent("cc.Label");
        PowerNode.string = aaaaa;
    },

    IsLeaveTime : function() {
        var GameTime = gg.getDataFormLocality("GameTime");
        var Time = Date.now();
        var leaveTime = (Time - GameTime) / 60000;
        var Gold_Level = gg.getDataFormLocality(window.MineLevel[0]);
        var Energy_Level = gg.getDataFormLocality(window.MineLevel[1]);
        var Alloy_Level = gg.getDataFormLocality(window.MineLevel[2]);
        var Element_Level = gg.getDataFormLocality(window.MineLevel[3]);
        
        var Mine_Gold_Num = Math.floor(leaveTime) * Number(window.EnergyAndGoldPro[Gold_Level]);
        var Mine_Energy_Num = Math.floor(leaveTime) * Number(window.EnergyAndGoldPro[Energy_Level]);
        var Mine_Alloy_Num = Math.floor(leaveTime) * Number(window.AlloyPro[Alloy_Level]);
        var Mine_Element_Num = Math.floor(leaveTime) * Number(window.ElementPro[Element_Level]);
        
        console.log("离线时间：" + leaveTime);
        console.log("离线金币：" + Mine_Gold_Num);
        console.log("离线能量：" + Mine_Energy_Num);
        console.log("离线合金：" + Mine_Alloy_Num);
        console.log("离线元素：" + Mine_Element_Num);

        if(Mine_Gold_Num.toFixed() >= 1) {
            let Goldnum = gg.NumAdd(Mine_Gold_Num.toFixed(),gg_define.Key_Gold);
            gg.saveDataToLocality(gg_define.Key_Gold,Goldnum);
        }
        if(Mine_Energy_Num.toFixed() >= 1) {
            let Energynum = gg.NumAdd(Mine_Energy_Num.toFixed(),gg_define.Key_Energy);
            gg.saveDataToLocality(gg_define.Key_Energy,Energynum);
        }
        if(Mine_Alloy_Num.toFixed() >= 1) {
            let Alloynum = gg.NumAdd(Mine_Alloy_Num.toFixed(),gg_define.Key_Alloy);
            gg.saveDataToLocality(gg_define.Key_Alloy,Alloynum);
        }
        if(Mine_Element_Num.toFixed(2) >= 0.1) {
            let Elementnum = gg.NumAdd(Mine_Element_Num.toFixed(2),gg_define.Key_Element);
            gg.saveDataToLocality(gg_define.Key_Element,Elementnum);
        }
    },

    userData : function() {
        //资源存储
        gg.saveDataToLocality(gg_define.Key_Gold,0);    //金币
        gg.saveDataToLocality(gg_define.Key_Energy,0);  //能量
        gg.saveDataToLocality(gg_define.Key_Alloy,0);   //合金
        gg.saveDataToLocality(gg_define.Key_Element,0); //元素
        //战斗力
        gg.saveDataToLocality(gg_define.key_UserPower,0); 
        //资源矿等级
        for(let i = 0; i < window.MineNum; i++) {
            gg.saveDataToLocality(window.MineLevel[i],1);
        }
        //矿区人员
        for(let i = 0; i < window.MineNum; i++) {
            gg.saveDataToLocality(window.MineNameWork[i],0);
        }
        gg.saveDataToLocality(gg_define.Key_MineWorkNum,0);//矿区工作的工人数

        // 玩家信息
        //     机甲装备等级
        this.FirstAdd(gg_define.Key_UserData, 
                        window.Machine_Equip_Num,window.ItemMachineName,
                        null,null,
                        gg_define.Key_Equip_Level,
                        null,null,);
            //装备追加
        this.FirstAdd(gg_define.Key_UserData, 
                        window.Machine_Equip_Num,window.ItemMachineName,
                        null,null,
                        gg_define.Key_Append,
                        null,null,);

            //机甲属性
        this.FirstAdd(gg_define.Key_UserData, 
                        window.Element_Type_Num,window.ItemElementName,
                        null,null,
                        gg_define.Key_Attribute,
                        null,null,);

        //炮台装备等级
        this.FirstAdd(gg_define.Key_Artillery, 
                        window.Artillery_Equip_Num,window.ItemArtilleryName,
                        null,null,
                        gg_define.Key_Equip_Level,
                        null,null,);
        
        //炮台追加
        this.FirstAdd(gg_define.Key_Artillery, 
                        window.Artillery_Equip_Num,window.ItemArtilleryName,
                        null,null,
                        gg_define.Key_Append,
                        null,null,);

        //炮台属性
        this.FirstAdd(gg_define.Key_Artillery, 
                        window.Element_Type_Num,window.ItemElementName,
                        null,null,
                        gg_define.Key_Attribute,
                        null,null,);

        //炮台初始属性             
        gg.saveDataToLocality("Artillery_HP_Attribute",100);
        gg.saveDataToLocality("Artillery_GJ_Attribute",100);
        gg.saveDataToLocality("Artillery_FY_Attribute",100);

        //元素的数量
        this.FirstAdd(window.ItemName[0], 
                        window.Element_Type_Num,window.ItemElementName,
                        window.ItemLevelNum,window.ItemLevel,
                        null,null,null,);

        //炮台零部件的数量
        this.FirstAdd(window.ItemName[2], 
                        window.Artillery_Equip_Num,window.ItemArtilleryName,
                        window.ItemLevelNum,window.ItemLevel,
                        null,
                        window.EquipTypeNum,window.EquipType);

        //机甲零部件的数量
        this.FirstAdd(window.ItemName[1], 
                        window.Machine_Equip_Num,window.ItemMachineName,
                        window.ItemLevelNum,window.ItemLevel,
                        null,
                        window.EquipTypeNum,window.EquipType);

        //合金数量
        this.AddAlloy(window.ItemName[3], window.ItemLevelNum,window.ItemLevel);//合金碎片数量
        //元素碎片数量
    },
            //物品种类名字，物品数量，物品名字，等级数量，等级，追加，装备类型的种类数量，装备类型的种类
    FirstAdd : function(TypeName,PartsNum,PartsName,LevelNum,Level,Append,EquipTypeNum,EquipType) {
        let name;
        for(let a = 0; a < PartsNum; a++) {
            if(Append == null) {
                for(let i = 0; i < LevelNum; i++) {
                    if(EquipTypeNum == null) {
                        name = TypeName +"_"+ PartsName[a] +"_"+ Level[i];
                        gg.saveDataToLocality(name,0);
                    }
                    else{
                        for(let j = 0; j < EquipTypeNum; j++) {
                            name = TypeName +"_"+ PartsName[a] +"_"+ EquipType[j] +"_"+ Level[i];
                            gg.saveDataToLocality(name,0);
                        }
                    }
                }
            }
            else{
                name = TypeName +"_"+ PartsName[a] +"_"+ Append;
                gg.saveDataToLocality(name,0);
            }
        }
    },

    AddAlloy : function(TypeName,LevelNum,Level) {
        for(let i = 0; i < LevelNum; i++) {
            let Alloyname = TypeName + "_" + Level[i];
            gg.saveDataToLocality(Alloyname,0);
        }
    },
    
    start () {

    },

    // update (dt) {},
});
