// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
window.BtnNode = null;
window.MainSceneBtnTag = 0;
cc.Class({
    extends: cc.Component,

    properties: {
        BTN:{
            default:null,
            type:cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.itemnode = this.node.getParent().getChildByName("ItemHouse");
        
        this.ItemNodeOpen = false;
        this.ItemNodeClose = true;

        this.MineInfoOpen = false;
        this.MineInfoClose = true;
        this.InfoNode;

        this.ResidentNode = cc.find('ResidentNode').getComponent('ResidentNode');
        this.TouchBtnMusic = this.ResidentNode.GetTouchBtnMusic();

        this.ItemResidentNode = cc.find('ItemResidentNode');
        BtnNode = this.BTN;
    },

    Get3Parent : function(node){
        var Parent = node.getParent().getParent().getParent();
        return Parent;
    },

    disBtn:function(event,tag){
        var node = event.currentTarget.getChildByName('btnMgr');
        let eng_js = event.currentTarget.getParent().getComponent("EngineScene");
        eng_js.JiCangBtnSelect(node);
    },
    MineInfo : function(event,tag,type){
        //this.ItemResidentNode.getComponent("ItemResidentNode").AddItemResidentNode();
        console.log('节点',event.currentTarget)
       
        let node = this.Get3Parent(event.currentTarget.getParent());
        console.log(node);
        let resnode = node.getComponent('MineScene').GetBottomContent();
        node.getComponent("MineScene").CreatorMineInfo(resnode,type);
        node.getChildByName('Main_bg').getChildByName("SrafingFrame").active = true;

    },
    PanelInfo : function(event,tag){
        panelTag = 1;
        this.ItemResidentNode.getComponent("ItemResidentNode").AddItemResidentNode();
        this.scheduleOnce(function(){
            this.ItemResidentNode.getComponent("ItemResidentNode").disPanel();
        },2.0);
        this.ItemResidentNode.getChildByName('panel').getChildByName('Mask').active = false;
    },
    CallBack : function(event, custonEventData) {
        var name = event.currentTarget.name;
        var tag = event.currentTarget.tag;
        console.log('名字',name);
        gg.playAudioEffect(this.TouchBtnMusic);

        let Gold = Number(gg.getDataFormLocality(gg_define.Key_Gold));
        let Energy = Number(gg.getDataFormLocality(gg_define.Key_Energy));
        let Alloy = Number(gg.getDataFormLocality(gg_define.Key_Alloy));
        switch(name){
            //登陆界面按钮----------------------------------
            case "StartGameBtn":
                cc.director.loadScene("MainScene");
            break;
            //预制体返回按钮--------------------------------
            case "exit":
                this.ItemResidentNode.getComponent("ItemResidentNode").removeItemResidentNode();
                if(panelTag == 1){
                    this.ItemResidentNode.getChildByName('panel').active = false; 
                }
            break;
            //太空炮按钮------------------------------------
            case "Body":
            //this.MineInfo(event,tag);
            break;
            case "Armor":
            //this.MineInfo(event,tag);
            break;
            case "Base":
            //this.MineInfo(event,tag);
            break;
            case "Bullet":
            //this.MineInfo(event,tag);
            break;
            //主界面按钮------------------------------------
            case "Battle_btn":
                this.Battle();
                break;
            case "Arsenal_Btn":
                this.Arsenal();
                break;
            case "JiCang_btn":
                 MainSceneBtnTag = custonEventData;
                this.JiCang();
                break;
            case "Material_Btn":
                MainSceneBtnTag = custonEventData;
                this.Material();
                break;
            case "Shop_Btn":
                this.Shop();
                break;
            case "Liaison_btn":
                this.Liaison();
                break;
            case "Activity_btn":
                this.Activity();
                break;
            case "Helmsman_btn":
                this.Helmsman();
                break;
            //机舱界面按钮----------------------------------
            case "Head":
            console.log(event.currentTarget.tag);
                this.disBtn(event,tag);
                break;
            case "Shoulder":
                this.disBtn(event,tag);
                break;
            case "Chest":
                this.disBtn(event,tag);
                break;
            case "Hand":
                this.disBtn(event,tag);
                break;
            case "Skirt":
                this.disBtn(event,tag);
                break;
            case "Leg":
                this.disBtn(event,tag);
                break;
            case "Foot":
                this.disBtn(event,tag);
                break;
            // case "Shield":
            //     this.disBtn(event,tag);
            //     break;
            // case "WeaponBtn1":
            //     this.disBtn(event,tag);
            //     break;
            // case "WeaponBtn2":
            //     this.disBtn(event,tag);
            //     break;
            //机舱界面功能按钮
            case "Synthesis"://合成
                //this.PanelInfo(event,tag);
                //接机甲界面预制体
                break;
            case "Strengthen"://强化
                this.PanelInfo(event,tag);
                break;
            case "Quenching"://淬炼
                this.PanelInfo(event,tag);
                break;
            case "EngineBack":
                cc.director.loadScene("MainScene");
                break;
            //飞船外部按钮----------------------------------------------    
            case "Laser_Btn":
            console.log('jinlai')
                let battlescene = event.currentTarget.getParent().getParent().getComponent("BattleScene");
                if(window.EnergyFillingTime >= 1){
                    battlescene.EnergyArtilleryFireAnimation();
                }
                break;
            case "BattleBack":
                cc.director.loadScene("MainScene");
                break;
            case "Left_Btn":
                let battlescene_L = event.currentTarget.getParent().getParent().getComponent("BattleScene");
                console.log('jinlai',event.currentTarget)
                battlescene_L.ChangeEnemyLeft();
                break;
            case "Right_Btn":
            console.log('jinlai')
                let battlescene_R = event.currentTarget.getParent().getParent().getComponent("BattleScene");
                battlescene_R.ChangeEnemyRight();
                break;
            //商店按钮--------------------------------------------------
            case "Gold":
                console.log("Gold");
                break;
            case "ShopBack":
                cc.director.loadScene("MainScene");
                break;
            case "Diamonds":
                console.log("Diamonds");
                break;
            case "Prop":
                console.log("Prop");
                break;
            case "Gold_1":
                console.log("Gold_1");
                break;
            case "Diamonds_2":
                console.log("Diamonds_2");
                break;
            case "Prop_3":
                console.log("Prop_3");
                break;
            //矿区按钮--------------------------------------------------
            case "Gold_mine":
                if(event.currentTarget.getChildByName("Gold").active) {
                    event.currentTarget.getChildByName("Gold").active = false;
                }
                else {
                    event.currentTarget.getChildByName("Gold").active = true;
                }
                break;
            case "Gold_Info":
                this.MineInfo(event,tag,1);

                break;
            case "Gold_Up":
                var Gold_level = Number(gg.getDataFormLocality(window.MineLevel[0]));
                
                if(gg.MineCanUpLevel(Gold,Energy,Alloy,Gold_level)) {
                    Gold -= window.MineLevelUp_Gold[Gold_level];
                    Energy -= window.MineLevelUp_Energy[Gold_level];
                    Alloy -= window.MineLevelUp_Alloy[Gold_level];

                    gg.saveDataToLocality(gg_define.Key_Gold,Gold);
                    gg.saveDataToLocality(gg_define.Key_Energy,Energy);
                    gg.saveDataToLocality(gg_define.Key_Alloy,Alloy);

                    gg.MineUpLevel(window.MineLevel[0]);
                }
                break;
            case "MineBack":
                cc.director.loadScene("MainScene");
                break;
            case "Energy_mine":
                if(event.currentTarget.getChildByName("Energy").active) {
                    event.currentTarget.getChildByName("Energy").active = false;
                }
                else {
                    event.currentTarget.getChildByName("Energy").active = true;
                }
                break;
            case "Energy_Info":
                this.MineInfo(event,tag,2);
                break;
            case "Energy_Up":
                var Energy_level = Number(gg.getDataFormLocality(window.MineLevel[1]));
                if(gg.MineCanUpLevel(Gold,Energy,Alloy,Energy_level)) {
                    Gold -= window.MineLevelUp_Gold[Energy_level];
                    Energy -= window.MineLevelUp_Energy[Energy_level];
                    Alloy -= window.MineLevelUp_Alloy[Energy_level];

                    gg.saveDataToLocality(gg_define.Key_Gold,Gold);
                    gg.saveDataToLocality(gg_define.Key_Energy,Energy);
                    gg.saveDataToLocality(gg_define.Key_Alloy,Alloy);

                    gg.MineUpLevel(window.MineLevel[1]);
                }
                break;
            case "Alloy_mine":
                if(event.currentTarget.getChildByName("Alloy").active) {
                    event.currentTarget.getChildByName("Alloy").active = false;
                }
                else{
                    event.currentTarget.getChildByName("Alloy").active = true;
                }
                break;
            case "Alloy_Info":
                this.MineInfo(event,tag,3);
                break;
            case "Alloy_Up":
                var Alloy_level = Number(gg.getDataFormLocality(window.MineLevel[2]));
                if(gg.MineCanUpLevel(Gold,Energy,Alloy,Alloy_level)) {
                    Gold -= window.MineLevelUp_Gold[Alloy_level];
                    Energy -= window.MineLevelUp_Energy[Alloy_level];
                    Alloy -= window.MineLevelUp_Alloy[Alloy_level];

                    gg.saveDataToLocality(gg_define.Key_Gold,Gold);
                    gg.saveDataToLocality(gg_define.Key_Energy,Energy);
                    gg.saveDataToLocality(gg_define.Key_Alloy,Alloy);

                    gg.MineUpLevel(window.MineLevel[2]);
                }
                break;
            case "Element_mine":
                if(event.currentTarget.getChildByName("Element").active) {
                    event.currentTarget.getChildByName("Element").active = false;
                }
                else{
                    event.currentTarget.getChildByName("Element").active = true;
                }
                break;
            case "Element_Info":
                this.MineInfo(event,tag,4);
                break;
            case "Element_Up":
                var Element_level = Number(gg.getDataFormLocality(window.MineLevel[3]));
                if(gg.MineCanUpLevel(Gold,Energy,Alloy,Element_level)) {
                    Gold -= window.MineLevelUp_Gold[Element_level];
                    Energy -= window.MineLevelUp_Energy[Element_level];
                    Alloy -= window.MineLevelUp_Alloy[Element_level];

                    gg.saveDataToLocality(gg_define.Key_Gold,Gold);
                    gg.saveDataToLocality(gg_define.Key_Energy,Energy);
                    gg.saveDataToLocality(gg_define.Key_Alloy,Alloy);

                    gg.MineUpLevel(window.MineLevel[3]);
                }
                break;
            case "Staffing_mine":
                event.currentTarget.getParent().getChildByName("SrafingFrame").active = true;
                event.currentTarget.getParent().getParent().getComponent("MineScene").CreatConfig();
                break;
            case "StafingBackBtn":
                event.currentTarget.getParent().active = false;
                var node = this.Get3Parent(event.currentTarget);
                node.getComponent("MineScene").RemoveChilden();
                break;
            case "Mine_Gold_Left":
            
                this.MineNumReduce(window.MineNameWork[0],event.currentTarget,0,window.MineLevel[0]);
                break;
            case "Mine_Energy_Left":
                this.MineNumReduce(window.MineNameWork[1],event.currentTarget,1,window.MineLevel[1]);
                break;
            case "Mine_Alloy_Left":
                this.MineNumReduce(window.MineNameWork[2],event.currentTarget,2,window.MineLevel[2]);
                break;
            case "Mine_Element_Left":
                this.MineNumReduce(window.MineNameWork[3],event.currentTarget,3,window.MineLevel[3]);
                break;
            case "Mine_Gold_Right":
                this.MineNumAdd(window.MineNameWork[0],event.currentTarget,0,window.MineLevel[0]);
                break;
            case "Mine_Energy_Right":
                this.MineNumAdd(window.MineNameWork[1],event.currentTarget,1,window.MineLevel[1]);
                break;
            case "Mine_Alloy_Right":
                this.MineNumAdd(window.MineNameWork[2],event.currentTarget,2,window.MineLevel[2]);
                break;
            case "Mine_Element_Right":
                this.MineNumAdd(window.MineNameWork[3],event.currentTarget,3,window.MineLevel[3]);
                break;
                case "DiscardedBtn":
                if(window.DiscardedType == 1){
                    console.log("获得1000材料");
                    
                }
                else if(window.DiscardedType == 2) {
                    console.log("获得2000材料");
                }
                else if(window.DiscardedType == 3){
                    console.log("获得5000材料");
                }
                event.currentTarget.active = false;
                window.DiscardedActive = false;
                event.currentTarget.getParent().getComponent(cc.Sprite).spriteFrame = null;;
                break;
            default:
		        break;
        }
    },

    MineNumReduce : function(name,node,mingtype,MineLevel) {
        var GoldNumReduce = Number(gg.getDataFormLocality(name));
        GoldNumReduce -= 1;
        if(GoldNumReduce <= 0) {
            GoldNumReduce = 0;
        }
        node.getParent().getChildByName("Bar_Label").getComponent(cc.Label).string = GoldNumReduce;
        gg.saveDataToLocality(name,GoldNumReduce);

        var Production = gg.LabelChange(GoldNumReduce,mingtype,MineLevel);
        node.getParent().getChildByName("Item_Info").getComponent(cc.Label).string = Production;
    },

    MineNumAdd : function(name,node,mingtype,MineLevel) {
        var GoldNumAdd = Number(gg.getDataFormLocality(name));
        GoldNumAdd += 1;
        node.getParent().getChildByName("Bar_Label").getComponent(cc.Label).string = GoldNumAdd;
        gg.saveDataToLocality(name,GoldNumAdd);

        var Production = gg.LabelChange(GoldNumAdd,mingtype,MineLevel);
        node.getParent().getChildByName("Item_Info").getComponent(cc.Label).string = Production;
    },

    Battle:function() {
        cc.director.loadScene("BattleScene");
    },

    Arsenal:function() {
        cc.director.loadScene('ArtilleryScene');
    },

    JiCang:function() {
        cc.director.loadScene("EngineScene");
    },

    Material:function() {
        cc.director.loadScene('option');
    },

    Shop:function() {
        cc.director.loadScene("ShopScene");
    },

    Liaison:function() {
        console.log("Liaison_btn");
    },

    Activity:function() {
        cc.director.loadScene("MineScene");
    },

    Helmsman:function() {
        console.log("Helmsman_btn");
    },

    start () {

    },

    // update (dt) {},
});
