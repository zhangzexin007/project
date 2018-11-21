//-------------------------------------------------------
window.ItemBtnType = cc.Enum({
    Head : 0,        //头部
    Shoulder : 1,    //肩部
    Chest : 2,       //胸部
    Hand : 3,        //手部
    Skirt : 4,       //裙甲
    Leg : 5,         //腿部
    Foot : 6,        //脚部
    // Shield : 7,      //盾牌
    // Weapon1 : 8,      //武器1
    // Weapon2 : 9,      //武器2
});

window.ItemType = cc.Enum({
    "头部" : 0,
    "肩部" : 1,
    "胸部" : 2,
    "手部" : 3,
    "裙甲" : 4,
    "腿部" : 5,
    "脚部" : 6,
    // "盾牌" : 7,
    // "武器1" : 8,
    // "武器2" : 9,
});
//----------------------------------------------
window.AlloyChoiceName = cc.Enum({
    "头部" : 0,
    "肩部" : 1,
    "胸部" : 2,
    "手部" : 3,
    "裙甲" : 4,
    "腿部" : 5,
    "脚部" : 6,
    "炮身" : 7,
    "炮架" : 8,
    "底座" : 9,
    "炮弹" : 10,
});
window.AlloyChoiceType = cc.Enum({
    Head : 0,        //头部
    Shoulder : 1,    //肩部
    Chest : 2,       //胸部
    Hand : 3,        //手部
    Skirt : 4,       //裙甲
    Leg : 5,         //腿部
    Foot : 6,        //脚部
    Body : 7,         //炮身
    Armor : 8,        //装甲
    Base : 9,         //底座
    Bullet : 10,       //炮弹
});
window.AlloyChoiceNum = 11;

window.ItemNum = 15;//物品数量

window.MachineNum = 4;//机甲数量

window.ShopListNum = 10;//商品列表数量

window.ShopListName = cc.Enum({
    "金币" : 0,
    "钻石" : 1,
    "道具" : 2,
});

window.ShopListBtnType = cc.Enum({
    Gold : 0,
    Diamonds : 1,
    Prop : 2,
});

window.ShopItemNum = 3;//商品数量

window.ShopItemName = cc.Enum({
    "100金币" : 0,
    "100钻石" : 1,
    "100道具" : 2,
});

window.ShopItemBtnType = cc.Enum({
    Gold_1 : 0,
    Diamonds_2 : 1,
    Prop_3 : 2,
});

window.ItemTypeNum = 5;//合成物品类型的数量

window.ItemTypeName = cc.Enum({
    "Debris" : 0,           //碎片
    "Component" : 1,        //零件
    "Parts" : 2,            //部件
    "Whole" : 3,            //整体
});

window.MineTypeName = cc.Enum({
    "金币矿" : 1,
    "能量矿" : 2,
    "合金矿" : 3,
    "元素矿" : 4,
});

window.MineName = cc.Enum({
    Mine_Gold : 0,
    Mine_Energy : 1,
    Mine_Alloy : 2,
    Mine_Element : 3,
});

window.MineLeftBtnName = cc.Enum({
    Mine_Gold_Left : 0,
    Mine_Energy_Left : 1,
    Mine_Alloy_Left : 2,
    Mine_Element_Left : 3,
});

window.MineRightBtnName = cc.Enum({
    Mine_Gold_Right : 0,
    Mine_Energy_Right : 1,
    Mine_Alloy_Right : 2,
    Mine_Element_Right : 3,
});

window.ItemNum = 3;//物品种类的数量的数量 
window.Machine_Equip_Num = 7//机甲部位的数量 
window.Artillery_Equip_Num = 4;//炮台部位的数量 
window.Element_Type_Num = 8;//元素类型的数量 
window.EquipTypeNum = 4;//装备、炮台装备的类型的数量 
window.ItemLevelNum = 6;//总共有多少个等级
window.MineNum = 4;//矿区数量

//物品名字
window.ItemName = cc.Enum({
    "Element" : 0,      //元素
    "Machine" : 1,      //机甲
    "Artillery" :2,     //炮台
    "Alloy" : 3,        //合金
});

//炮台部位的名字
window.ItemArtilleryName = cc.Enum({
    "Body" : 0,         //炮身
    "Armor" : 1,        //装甲
    "Base" : 2,         //底座
    "Bullet" : 3,       //炮弹
});

//机甲部位的名字
window.ItemMachineName = cc.Enum({
    "Head" : 0,
    "Shoulder" : 1,
    "Chest" : 2,
    "Hand" : 3,
    "Skirt" : 4,
    "Leg" : 5,
    "Foot" : 6,
});

//元素的名字
window.ItemElementName = cc.Enum({
    "HP" : 0,
    "GJ" : 1,
    "FY" : 2,
    "GS" : 3,
    "SB" : 4,
    "MZ" : 5,
    "BJ" : 6,
    "GD" : 7,
});
//等级
window.ItemLevel = cc.Enum({
    "Level1" : 0,
    "Level2" : 1,
    "Level3" : 2,
    "Level4" : 3,
    "Level5" : 4,
    "Level6" : 5,
});

//装备部位类型
window.EquipType = cc.Enum({
    "Debris" : 0,
    "Component" : 1,
    "Part" : 2,
    "Whole" : 3,
});

//各矿区的工作人数
window.MineNameWork = cc.Enum({
    "Mine_Gold_Work" : 0,
    "Mine_Energy_Work" : 1,
    "Mine_Alloy_Work" :2,
    "Mine_Element_Work" :3,
});

//矿区等级
window.MineLevel = cc.Enum({
    "Gold_Level" : 0,
    "Energy_Level" : 1,
    "Alloy_Level" :2,
    "Element_Level" :3,
});

//能量矿跟金币矿生产数量
window.EnergyAndGoldPro = cc.Enum({
    "0.5" : 0,
    "1.0" : 1,
    "1.5" : 2,
    "2.0" : 3,
    "2.5" :4,
    "3.0" : 5,
    "4.0" : 6,
    "5.0" : 7,
    "6.0" : 8,
    "7.0" : 9,
    "10.0" : 10,
});

//合金矿生产数量
window.AlloyPro = cc.Enum({
    "0.5" : 0,
    "3.0" : 1,
    "6.0" : 2,
    "9.0" : 3,
    "12.0" : 4,
    "15.0" : 5,
    "20.0" : 6,
    "25.0" : 7,
    "30.0" : 8,
    "35.0" : 9,
    "50.0" : 10,
});

//元素矿生产数量
window.ElementPro = cc.Enum({
    "0.5" : 0,
    "0.1" : 1,
    "0.15" : 2,
    "0.2" : 3,
    "0.25" : 4,
    "0.3" : 5,
    "0.4" : 6,
    "0.5" : 7,
    "0.6" : 8,
    "0.7" : 9,
    "1.0" : 10,
});

//矿区升级需要的金币
window.MineLevelUp_Gold = cc.Enum({
    10000 : 0,
    10000 : 1,
    50000 : 2,
    100000 : 3,
    300000 : 4,
    500000 : 5,
    1000000 : 6,
    3000000 : 7,
    5000000 : 8,
    10000000 : 9,
    20000000 : 10,
});
//矿区升级需要的合金
window.MineLevelUp_Alloy = cc.Enum({
    10000 : 0,
    10000 : 1,
    50000 : 2,
    100000 : 3,
    300000 : 4,
    500000 : 5,
    1000000 : 6,
    3000000 : 7,
    5000000 : 8,
    10000000 : 9,
    20000000 : 10,
});
//矿区升级需要的能量
window.MineLevelUp_Energy = cc.Enum({
    10000 : 0,
    10000 : 1,
    50000 : 2,
    100000 : 3,
    300000 : 4,
    500000 : 5,
    1000000 : 6,
    3000000 : 7,
    5000000 : 8,
    10000000 : 9,
    20000000 : 10,
});
//机甲头部属性
window.EquipHeadProperty = cc.Enum({
    200:0,
    400:1,
    600:2,
    800:3,
    1000:4,
    2000:5,
});
//机甲肩甲属性
window.EquipShoulderProperty = cc.Enum({
    200:0,
    400:1,
    600:2,
    800:3,
    1000:4,
    2000:5,
});
//机甲胸甲属性
window.EquipChestProperty = cc.Enum({
    200:0,
    400:1,
    600:2,
    800:3,
    1000:4,
    2000:5,
});
//机甲手部属性
window.EquipHandProperty = cc.Enum({
    500:0,
    1000:1,
    1500:2,
    2000:3,
    3000:4,
    5000:5,
});
//机甲裙甲属性
window.EquipSkirtProperty = cc.Enum({
    200:0,
    400:1,
    600:2,
    800:3,
    1000:4,
    2000:5,
});
//机甲腿甲属性
window.EquipLegProperty = cc.Enum({
    100:0,
    200:1,
    300:2,
    400:3,
    5000:4,
    1000:5,
});
//机甲脚部属性
window.EquipFootProperty = cc.Enum({
    100:0,
    200:1,
    300:2,
    400:3,
    5000:4,
    1000:5,
});
//金币矿升级信息
window.gg_Gold = cc.Enum({
    "1金币/人/分钟":1,
    "1.5金币/人/分钟":2,
    "2金币/人/分钟":3,
    "2.5金币/人/分钟":4,
    "3金币/人/分钟":5,
    "4金币/人/分钟":6,
    "5金币/人/分钟":7,
    "6金币/人/分钟":8,
    "7金币/人/分钟":9,
    "10金币/人/分钟":10,
});
//能量矿升级信息
window.gg_Energy = cc.Enum({
    "1能量/人/分钟":1,
    "1.5能量/人/分钟":2,
    "2能量/人/分钟":3,
    "2.5能量/人/分钟":4,
    "3能量/人/分钟":5,
    "4能量/人/分钟":6,
    "5能量/人/分钟":7,
    "6能量/人/分钟":8,
    "7能量/人/分钟":9,
    "10能量/人/分钟":10,
});
//合金矿升级信息
window.gg_Alloy = cc.Enum({
    "3合金碎片/人/分钟":1,
    "6合金碎片/人/分钟":2,
    "9合金碎片/人/分钟":3,
    "12合金碎片/人/分钟":4,
    "15合金碎片/人/分钟":5,
    "20合金碎片/人/分钟":6,
    "25合金碎片/人/分钟":7,
    "30合金碎片/人/分钟":8,
    "35合金碎片/人/分钟":9,
    "50合金碎片/人/分钟":10,
});
//元素矿升级信息
window.gg_Element = cc.Enum({
    "0.1元素碎片/人/分钟":1,
    "0.15元素碎片/人/分钟":2,
    "0.2元素碎片/人/分钟":3,
    "0.25元素碎片/人/分钟":4,
    "0.3元素碎片/人/分钟":5,
    "0.4元素碎片/人/分钟":6,
    "0.5元素碎片/人/分钟":7,
    "0.6元素碎片/人/分钟":8,
    "0.7元素碎片/人/分钟":9,
    "1元素碎片/人/分钟":10,
});
//矿升级需要的资源
window.gg_LevelUp = cc.Enum({
    "1W金币":1,
    "            5W金币            5W合金碎片":2,
    "         10W金币              10W合金碎片     10W能量":3,
    "         30W金币              30W合金碎片     30W能量":4,
    "         50W金币              50W合金碎片     50W能量":5,
    "     100W金币     100W合金碎片  100W能量":6,
    "     300W金币     300W合金碎片  300W能量":7,
    "     500W金币     500W合金碎片  500W能量":8,
    "    1000W金币    1000W合金碎片1000W能量":9,
    "    2000W金币    2000W合金碎片2000W能量":10,
});
//矿区废弃物类型
window.DiscardedType = 0;
window.DiscardedActive = true;
//太空跑能量填充时间
window.EnergyFillingTime = 0;
//太空炮攻击类型
window.BattleType = cc.Enum({
    "Common_attack":0,
    "Energy_attack":1,
});
//--------------------------------------------------------------
window.IsLeave = true;//是否离线

window.gg_define = {
    //本地宏定义

    key_UserPower : "UserPower" , //战斗力

    key_isMust : "isMust" , //是否静音
    Key_Gold : "Gold",      //金币数量
    Key_Energy : "Energy",  //能量矿数量
    Key_Alloy : "Alloy",    //合金碎片数量
    Key_Element : "Element",//元素碎片数量

    //玩家信息
    Key_UserData : "UserData",      //机甲属性
    Key_Artillery : "Artillery",        //炮台
    Key_Equip_Level : "Equip_Level",//装备等级
    Key_Append: "Append",           //装备追加
    Key_Attribute : "Attribute",    //属性
    
    Key_MineUpRes : "MineUpRes",    //矿区升级资源
    Key_MineWorkNum : "MineWorkNum",    //矿区工作的总人数
};




window.gg = ({
    //存数据到本地      储存名字  值 
    saveDataToLocality (key,Value,isJson = false){
        if(isJson){
            cc.sys.localStorage.setItem(key, JSON.stringify(Value));
        }else{
            cc.sys.localStorage.setItem(key, Value);
        }
    },
    //获得本地数据
    getDataFormLocality (key,isJson = false) {
        if(isJson){
            let data = cc.sys.localStorage.getItem(key);
            if(!data && data != 0){
                return [];
            }else if(typeof(data) == "string" && data.length <= 0){
                return [];
            }
            return JSON.parse(data)
        }else{
            return cc.sys.localStorage.getItem(key);
        }
    },

    //播放音效
    playAudioEffect(path){
        //是否静音
        var key_isMust = Number(this.getDataFormLocality(gg_define.key_isMust))
        if(key_isMust == 1){return;}
        //播放音效
        cc.audioEngine.play(path,false,0.5);
    },

    //物品数量、属性、等级提升
    NumAdd : function (num, name) {
        var ItemNum = Number(num) + Number(gg.getDataFormLocality(name));
        console.log(num,ItemNum);
        return ItemNum;
    },
                        //生产人数，矿区类型，资源矿等级
    LabelChange : function (PeopleNum,minetype,minelevel) {
        let Throughput;
        let level = Number(gg.getDataFormLocality(minelevel));
        if(minetype == 2) {
            Throughput = Number(window.AlloyPro[level]);
        }
        else if(minetype == 3) {
            Throughput = Number(window.ElementPro[level]);
        }
        else {
            Throughput = Number(window.EnergyAndGoldPro[level]);
        }
        var num = PeopleNum * Throughput;
        if(minetype == 3){
            return num.toFixed(2);
        }
        else{
            return num;
        }
    },

    //判断矿区能否升级
    MineCanUpLevel : function (goldnum, energynum, alloynum,level) {
        if(goldnum >= window.MineLevelUp_Gold[level] 
            && energynum >= window.MineLevelUp_Energy[level]
            && alloynum >= window.MineLevelUp_Alloy[level]) {
                return true;
        }
        else{
            console.log("资源不足");
            return false;
        }
    },

    //矿区升级              矿区类型    
    MineUpLevel : function (minetype) {
        let level = Number(gg.getDataFormLocality(minetype));
        level += 1;
        gg.saveDataToLocality(minetype,level);
    },

    //保留小数点后几位
    FloatNum:function (num,n){
        return parseInt(num*Math.pow(10,n)+0.5,10)/Math.pow(10,n);
    },
    //每10点战斗力增加一名矿工
    IsMinerUp : function(){
        let mineworknum = Number(gg.getDataFormLocality(gg_define.Key_MineWorkNum));
        let userpower = Number(gg.getDataFormLocality(gg_define.key_UserPower));
        if(mineworknum >= 100 ){
            return;
        }
        else{
            if(userpower >= mineworknum * 10) {
                console.log("增加一名矿工");

                let power = Math.floor(userpower / 10000) - mineworknum;
                gg.saveDataToLocality(gg_define.Key_MineWorkNum,power);
            }
        }
    },
    NumShowType : function(num){
        let Num;
        let numstring;
        if(num / 10000 >= 1) {
            if(num / 100000000 >= 1){
                Num = num / 100000000;
                numstring = Num.toFixed(1) + "E";
                return numstring;
            }
            Num = num / 10000;
            numstring = Num.toFixed(1) + "W";
            return numstring;
        }
        return num;
    },
    //AddNum("Alloy_Level2",50,"Alloy_Level3",1);
    //合成分解           当前名字 升级名字 分解名字 合成名字  
    AddNum : function(tag,name1,name2,name3,name4){
        if(btnTag == 1){
            if(tag < 5){
                let Num1 = Number(gg.getDataFormLocality(name1));
                Num1 += -consumeNum;
                Number(gg.saveDataToLocality(name1,Num1));
    
                let Num2 = Number(gg.getDataFormLocality(name2));
                Num2 += obtainNum;
                Number(gg.saveDataToLocality(name2,Num2));
            };
            return;
        }
        else if(btnTag == 2){
            if(tag >0){
                let Num1 = Number(gg.getDataFormLocality(name1));
                Num1 += -consumeNum;
                gg.saveDataToLocality(name1,Num1);
    
                let Num3 = Number(gg.getDataFormLocality(name3));
                Num3+= obtainNum;
                Number(gg.saveDataToLocality(name3,Num3));
            };
            return;
        }
        else if(btnTag == 3){
            let Num1 = Number(gg.getDataFormLocality(name1));
            Num1 += -consumeNum;
            Number(gg.saveDataToLocality(name1,Num1));

            let Num2 = Number(gg.getDataFormLocality(name4));
            Num2 += obtainNum;
            Number(gg.saveDataToLocality(name4,Num2));
        }
    }
});

//--------------------界面类型---------------------------
window.Interface = cc.Enum({
    'Alloy' : 0,
    'Element' : 1,
    'Machine' : 2,
    'Artillery' : 3,
});
//--------------------合金碎片---------------------------
window.Alloy = cc.Enum({
    '白色合金碎片' : 0,
    '绿色合金碎片' : 1,
    '蓝色合金碎片' : 2,
    '紫色合金碎片' : 3,
    '黄色合金碎片' : 4,
    '红色合金碎片' : 5,
});
window.Element = cc.Enum({
    '元素碎片' : 0,
})
//----------------------元素-----------------------------
window.HPElement = cc.Enum({
    '白色血量元素' : 0,
    '绿色血量元素' : 1,
    '蓝色血量元素' : 2,
    '紫色血量元素' : 3,
    '黄色血量元素' : 4,
    '红色血量元素' : 5,
});
window.GJElement = cc.Enum({
    '白色攻击元素' : 0,
    '绿色攻击元素' : 1,
    '蓝色攻击元素' : 2,
    '紫色攻击元素' : 3,
    '黄色攻击元素' : 4,
    '红色攻击元素' : 5,
});
window.FYElement = cc.Enum({
    '白色防御元素' : 0,
    '绿色防御元素' : 1,
    '蓝色防御元素' : 2,
    '紫色防御元素' : 3,
    '黄色防御元素' : 4,
    '红色防御元素' : 5,
});
window.GSElement = cc.Enum({
    '白色攻速元素' : 0,
    '绿色攻速元素' : 1,
    '蓝色攻速元素' : 2,
    '紫色攻速元素' : 3,
    '黄色攻速元素' : 4,
    '红色攻速元素' : 5,
});
window.SBElement = cc.Enum({
    '白色闪避元素' : 0,
    '绿色闪避元素' : 1,
    '蓝色闪避元素' : 2,
    '紫色闪避元素' : 3,
    '黄色闪避元素' : 4,
    '红色闪避元素' : 5,
});
window.MZElement = cc.Enum({
    '白色命中元素' : 0,
    '绿色命中元素' : 1,
    '蓝色命中元素' : 2,
    '紫色命中元素' : 3,
    '黄色命中元素' : 4,
    '红色命中元素' : 5,
});
window.BJElement = cc.Enum({
    '白色暴击元素' : 0,
    '绿色暴击元素' : 1,
    '蓝色暴击元素' : 2,
    '紫色暴击元素' : 3,
    '黄色暴击元素' : 4,
    '红色暴击元素' : 5,
});
window.GDElement = cc.Enum({
    '白色格挡元素' : 0,
    '绿色格挡元素' : 1,
    '蓝色格挡元素' : 2,
    '紫色格挡元素' : 3,
    '黄色格挡元素' : 4,
    '红色格挡元素' : 5,
});
//----------------------机甲-----------------------------
//头部
window.HeadMachineDebris = cc.Enum({
    '白色头部碎片' : 0,
    '绿色头部碎片' : 1,
    '蓝色头部碎片' : 2,
    '紫色头部碎片' : 3,
    '黄色头部碎片' : 4,
    '红色头部碎片' : 5,
});
window.HeadMachineComponent = cc.Enum({
    '白色头部零件' : 0,
    '绿色头部零件' : 1,
    '蓝色头部零件' : 2,
    '紫色头部零件' : 3,
    '黄色头部零件' : 4,
    '红色头部零件' : 5,
});
window.HeadMachinePart = cc.Enum({
    '白色头部部件' : 0,
    '绿色头部部件' : 1,
    '蓝色头部部件' : 2,
    '紫色头部部件' : 3,
    '黄色头部部件' : 4,
    '红色头部部件' : 5,
});
window.HeadMachineWhole = cc.Enum({
    '白色头部装甲' : 0,
    '绿色头部装甲' : 1,
    '蓝色头部装甲' : 2,
    '紫色头部装甲' : 3,
    '黄色头部装甲' : 4,
    '红色头部装甲' : 5,
});
//肩甲
window.ShoulderMachineDebris = cc.Enum({
    '白色肩甲碎片' : 0,
    '绿色肩甲碎片' : 1,
    '蓝色肩甲碎片' : 2,
    '紫色肩甲碎片' : 3,
    '黄色肩甲碎片' : 4,
    '红色肩甲碎片' : 5,
});
window.ShoulderMachineComponent = cc.Enum({
    '白色肩甲零件' : 0,
    '绿色肩甲零件' : 1,
    '蓝色肩甲零件' : 2,
    '紫色肩甲零件' : 3,
    '黄色肩甲零件' : 4,
    '红色肩甲零件' : 5,
});
window.ShoulderMachinePart = cc.Enum({
    '白色肩甲部件' : 0,
    '绿色肩甲部件' : 1,
    '蓝色肩甲部件' : 2,
    '紫色肩甲部件' : 3,
    '黄色肩甲部件' : 4,
    '红色肩甲部件' : 5,
});
window.ShoulderMachineWhole = cc.Enum({
    '白色肩甲装甲' : 0,
    '绿色肩甲装甲' : 1,
    '蓝色肩甲装甲' : 2,
    '紫色肩甲装甲' : 3,
    '黄色肩甲装甲' : 4,
    '红色肩甲装甲' : 5,
});
//胸甲
window.ChestMachineDebris = cc.Enum({
    '白色胸甲碎片' : 0,
    '绿色胸甲碎片' : 1,
    '蓝色胸甲碎片' : 2,
    '紫色胸甲碎片' : 3,
    '黄色胸甲碎片' : 4,
    '红色胸甲碎片' : 5,
});
window.ChestMachineComponent = cc.Enum({
    '白色胸甲零件' : 0,
    '绿色胸甲零件' : 1,
    '蓝色胸甲零件' : 2,
    '紫色胸甲零件' : 3,
    '黄色胸甲零件' : 4,
    '红色胸甲零件' : 5,
});
window.ChestMachinePart = cc.Enum({
    '白色胸甲部件' : 0,
    '绿色胸甲部件' : 1,
    '蓝色胸甲部件' : 2,
    '紫色胸甲部件' : 3,
    '黄色胸甲部件' : 4,
    '红色胸甲部件' : 5,
});
window.ChestMachineWhole = cc.Enum({
    '白色手部装甲' : 0,
    '绿色手部装甲' : 1,
    '蓝色手部装甲' : 2,
    '紫色手部装甲' : 3,
    '黄色手部装甲' : 4,
    '红色手部装甲' : 5,
});
//手部
window.HandMachineDebris = cc.Enum({
    '白色手部碎片' : 0,
    '绿色手部碎片' : 1,
    '蓝色手部碎片' : 2,
    '紫色手部碎片' : 3,
    '黄色手部碎片' : 4,
    '红色手部碎片' : 5,
});
window.HandMachineComponent = cc.Enum({
    '白色手部零件' : 0,
    '绿色手部零件' : 1,
    '蓝色手部零件' : 2,
    '紫色手部零件' : 3,
    '黄色手部零件' : 4,
    '红色手部零件' : 5,
});
window.HandMachinePart = cc.Enum({
    '白色手部部件' : 0,
    '绿色手部部件' : 1,
    '蓝色手部部件' : 2,
    '紫色手部部件' : 3,
    '黄色手部部件' : 4,
    '红色手部部件' : 5,
});
window.HandMachineWhole = cc.Enum({
    '白色手部装甲' : 0,
    '绿色手部装甲' : 1,
    '蓝色手部装甲' : 2,
    '紫色手部装甲' : 3,
    '黄色手部装甲' : 4,
    '红色手部装甲' : 5,
});
//裙甲
window.SkirtMachineDebris = cc.Enum({
    '白色裙甲碎片' : 0,
    '绿色裙甲碎片' : 1,
    '蓝色裙甲碎片' : 2,
    '紫色裙甲碎片' : 3,
    '黄色裙甲碎片' : 4,
    '红色裙甲碎片' : 5,
});
window.SkirtMachineComponent = cc.Enum({
    '白色裙甲零件' : 0,
    '绿色裙甲零件' : 1,
    '蓝色裙甲零件' : 2,
    '紫色裙甲零件' : 3,
    '黄色裙甲零件' : 4,
    '红色裙甲零件' : 5,
});
window.SkirtMachinePart = cc.Enum({
    '白色裙甲部件' : 0,
    '绿色裙甲部件' : 1,
    '蓝色裙甲部件' : 2,
    '紫色裙甲部件' : 3,
    '黄色裙甲部件' : 4,
    '红色裙甲部件' : 5,
});
window.SkirtMachineWhole = cc.Enum({
    '白色裙甲装甲' : 0,
    '绿色裙甲装甲' : 1,
    '蓝色裙甲装甲' : 2,
    '紫色裙甲装甲' : 3,
    '黄色裙甲装甲' : 4,
    '红色裙甲装甲' : 5,
});
//腿部
window.LegMachineDebris = cc.Enum({
    '白色腿部碎片' : 0,
    '绿色腿部碎片' : 1,
    '蓝色腿部碎片' : 2,
    '紫色腿部碎片' : 3,
    '黄色腿部碎片' : 4,
    '红色腿部碎片' : 5,
});
window.LegMachineComponent = cc.Enum({
    '白色腿部零件' : 0,
    '绿色腿部零件' : 1,
    '蓝色腿部零件' : 2,
    '紫色腿部零件' : 3,
    '黄色腿部零件' : 4,
    '红色腿部零件' : 5,
});
window.LegMachinePart = cc.Enum({
    '白色腿部部件' : 0,
    '绿色腿部部件' : 1,
    '蓝色腿部部件' : 2,
    '紫色腿部部件' : 3,
    '黄色腿部部件' : 4,
    '红色腿部部件' : 5,
});
window.LegMachineWhole = cc.Enum({
    '白色脚部装甲' : 0,
    '绿色脚部装甲' : 1,
    '蓝色脚部装甲' : 2,
    '紫色脚部装甲' : 3,
    '黄色脚部装甲' : 4,
    '红色脚部装甲' : 5,
});
//脚部
window.FootMachineDebris = cc.Enum({
    '白色脚部碎片' : 0,
    '绿色脚部碎片' : 1,
    '蓝色脚部碎片' : 2,
    '紫色脚部碎片' : 3,
    '黄色脚部碎片' : 4,
    '红色脚部碎片' : 5,
});
window.FootMachineComponent = cc.Enum({
    '白色脚部零件' : 0,
    '绿色脚部零件' : 1,
    '蓝色脚部零件' : 2,
    '紫色脚部零件' : 3,
    '黄色脚部零件' : 4,
    '红色脚部零件' : 5,
});
window.FootMachinePart = cc.Enum({
    '白色脚部部件' : 0,
    '绿色脚部部件' : 1,
    '蓝色脚部部件' : 2,
    '紫色脚部部件' : 3,
    '黄色脚部部件' : 4,
    '红色脚部部件' : 5,
});
window.FootMachineWhole = cc.Enum({
    '白色脚部装甲' : 0,
    '绿色脚部装甲' : 1,
    '蓝色脚部装甲' : 2,
    '紫色脚部装甲' : 3,
    '黄色脚部装甲' : 4,
    '红色脚部装甲' : 5,
});
//----------------------太空炮-----------------------------
//炮身
window.BodyArtilleryDebris = cc.Enum({
    '白色炮身碎片' : 0,
    '绿色炮身碎片' : 1,
    '蓝色炮身碎片' : 2,
    '紫色炮身碎片' : 3,
    '黄色炮身碎片' : 4,
    '红色炮身碎片' : 5,
});
window.BodyArtilleryComponent = cc.Enum({
    '白色炮身零件' : 0,
    '绿色炮身零件' : 1,
    '蓝色炮身零件' : 2,
    '紫色炮身零件' : 3,
    '黄色炮身零件' : 4,
    '红色炮身零件' : 5,
});
window.BodyArtilleryPart = cc.Enum({
    '白色炮身部件' : 0,
    '绿色炮身部件' : 1,
    '蓝色炮身部件' : 2,
    '紫色炮身部件' : 3,
    '黄色炮身部件' : 4,
    '红色炮身部件' : 5,
});
window.BodyArtilleryWhole = cc.Enum({
    '白色炮身装甲' : 0,
    '绿色炮身装甲' : 1,
    '蓝色炮身装甲' : 2,
    '紫色炮身装甲' : 3,
    '黄色炮身装甲' : 4,
    '红色炮身装甲' : 5,
});
//炮架
window.ArmorArtilleryDebris = cc.Enum({
    '白色炮架碎片' : 0,
    '绿色炮架碎片' : 1,
    '蓝色炮架碎片' : 2,
    '紫色炮架碎片' : 3,
    '黄色炮架碎片' : 4,
    '红色炮架碎片' : 5,
});
window.ArmorArtilleryComponent = cc.Enum({
    '白色炮架零件' : 0,
    '绿色炮架零件' : 1,
    '蓝色炮架零件' : 2,
    '紫色炮架零件' : 3,
    '黄色炮架零件' : 4,
    '红色炮架零件' : 5,
});
window.ArmorArtilleryPart = cc.Enum({
    '白色炮架部件' : 0,
    '绿色炮架部件' : 1,
    '蓝色炮架部件' : 2,
    '紫色炮架部件' : 3,
    '黄色炮架部件' : 4,
    '红色炮架部件' : 5,
});
window.ArmorArtilleryWhole = cc.Enum({
    '白色炮架装甲' : 0,
    '绿色炮架装甲' : 1,
    '蓝色炮架装甲' : 2,
    '紫色炮架装甲' : 3,
    '黄色炮架装甲' : 4,
    '红色炮架装甲' : 5,
});
//底座
window.BaseArtilleryDebris = cc.Enum({
    '白色底座碎片' : 0,
    '绿色底座碎片' : 1,
    '蓝色底座碎片' : 2,
    '紫色底座碎片' : 3,
    '黄色底座碎片' : 4,
    '红色底座碎片' : 5,
});
window.BaseArtilleryComponent = cc.Enum({
    '白色底座零件' : 0,
    '绿色底座零件' : 1,
    '蓝色底座零件' : 2,
    '紫色底座零件' : 3,
    '黄色底座零件' : 4,
    '红色底座零件' : 5,
});
window.BaseArtilleryPart = cc.Enum({
    '白色底座部件' : 0,
    '绿色底座部件' : 1,
    '蓝色底座部件' : 2,
    '紫色底座部件' : 3,
    '黄色底座部件' : 4,
    '红色底座部件' : 5,
});
window.BaseArtilleryWhole = cc.Enum({
    '白色底座装甲' : 0,
    '绿色底座装甲' : 1,
    '蓝色底座装甲' : 2,
    '紫色底座装甲' : 3,
    '黄色底座装甲' : 4,
    '红色底座装甲' : 5,
});
//炮弹
window.BulletArtilleryDebris = cc.Enum({
    '白色炮弹碎片' : 0,
    '绿色炮弹碎片' : 1,
    '蓝色炮弹碎片' : 2,
    '紫色炮弹碎片' : 3,
    '黄色炮弹碎片' : 4,
    '红色炮弹碎片' : 5,
});
window.BulletArtilleryComponent = cc.Enum({
    '白色炮弹零件' : 0,
    '绿色炮弹零件' : 1,
    '蓝色炮弹零件' : 2,
    '紫色炮弹零件' : 3,
    '黄色炮弹零件' : 4,
    '红色炮弹零件' : 5,
});
window.BulletArtilleryPart = cc.Enum({
    '白色炮弹部件' : 0,
    '绿色炮弹部件' : 1,
    '蓝色炮弹部件' : 2,
    '紫色炮弹部件' : 3,
    '黄色炮弹部件' : 4,
    '红色炮弹部件' : 5,
});
window.BulletArtilleryWhole = cc.Enum({
    '白色炮弹装甲' : 0,
    '绿色炮弹装甲' : 1,
    '蓝色炮弹装甲' : 2,
    '紫色炮弹装甲' : 3,
    '黄色炮弹装甲' : 4,
    '红色炮弹装甲' : 5,
});

