window.pageLevel = 0;//选关
window.shuxingType = 0;//属性类型
window.InterfaceName = 0;//界面按钮名字 取
window.leftBtnName = 0;//左边按钮名字   取
window.topBtnName = 'Debris';//顶部按钮名字    取
window.topBtnType = 0;//顶部按钮类型
window.InterfaceType = 0;//界面按钮类型
window.leftBtnType = 0;//左边按钮类型
window.bagName = 0;//包裹名字
window.AlloyUpgradeNum = 50;//合金合成数量
window.ElementUpgradeNum = 10;//元素合成数量
window.SliderNum = 0;//滑动条的数量
window.Total = 0;//拥有总数
window.COUNT = 0;//需求量
window.DisName = 0;//显示的名称
window.consumeNum = 0;//消耗的数量
window.consumeName = 0;//消耗的名称
window.obtainNum = 0;//获得的数量
window.obtainName = 0;//获得名称
window.btnTag = 0;//按钮的类型
window.MaterialName = 0;//材料名字
window.panelTag = 0;//合成板的Tag 不同场景做不同判定
window.upgradeName = 0;//升级名字
window.PopupType = 0;//窗口的类型
window.bagItemName = 0;//包裹栏名字
window.Fabtag = 0;//预制体的Tag
window.FabName = 0;
window.InterfaceBtnNum = 4;//界面按钮数量
window.LeftBtnNum = 0;//包裹顶部按钮数量
window.TopBtnNum = 0;//包裹左边按钮数量
window.ChoiceBtnName = 0;//合成选择按钮名字

window.LeftBtnType = 0;
window.TopBtnType = 0;

window.clickBtnTag = 0;//机舱合成按钮Tag
window.JCBagName = 0;

window.GloBalName = 0;//获取全局枚举名字


var hejin = require('Alloy');
var yuansu = require('Element');
var zhuangbei = require('Machine')
var pao = require('Artillery');
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        Number(gg.saveDataToLocality('Alloy_Level1',10000000000000));
    },
    selectLevel:function(event,level){//选关按钮
        pageLevel = level;
        cc.director.loadScene('map');
    },
    JCSynthesisBtn:function(){//机舱合成按钮

    },
    optionButton:function(event,Type){//界面按钮
        var ItemResidentNode = cc.find('ItemResidentNode');
        var panelJS = ItemResidentNode.getComponent('panel');
        ItemResidentNode.getComponent("ItemResidentNode").AddItemResidentNode();
        var BottomNode = ItemResidentNode.getChildByName('Mask').getChildByName('IitemBack').getChildByName('BottomScrollview').getChildByName('view').getChildByName('content');
        var TopNode = ItemResidentNode.getChildByName('Mask').getChildByName('IitemBack').getChildByName('TopScrollview').getChildByName('view').getChildByName('content');
        var LeftNode = ItemResidentNode.getChildByName('Mask').getChildByName('IitemBack').getChildByName('LeftScrollview').getChildByName('view').getChildByName('content');
        switch(Type){
            case '1':
            leftBtnName = ItemElementName[0];
            break;
            case '2':
            leftBtnName = ItemMachineName[0];
            break;
            case '3':
            leftBtnName = ItemArtilleryName[0];
            break;
            case '4':
            leftBtnName = ItemName[0];
            break;
        }
        InterfaceType = Type;
        InterfaceName = ItemName[Type-1];
        if(MainSceneBtnTag == 1){
            window.JCBagName = InterfaceName +'_'+ event.currentTarget.getParent().getParent().name +'_'+topBtnName;
        }
        panelJS.readFab(Type,BottomNode,TopNode,LeftNode);
    },
    exitBtn:function(){//返回按钮
        cc.director.loadScene('MainScene');
    },
    LeftBtnInfo:function(event,type){//左边高亮按钮函数
        var node = event.currentTarget.getChildByName('Select');
        var panelJS = cc.find('ItemResidentNode').getComponent('panel');
        panelJS.LeftBtnSelect(node);
    },
    TopBtnInfo:function(event){//顶部高亮按钮函数
        var node = event.currentTarget.getChildByName('Select');
        var panelJS = cc.find('ItemResidentNode').getComponent('panel');
        panelJS.TopBtnSelect(node);
    },
    ChoiceBtnInfo:function(event,ChoiceNum,ChoiceType){//选择栏高亮
        var node = event.currentTarget.getChildByName('Select');
        var panelJS = cc.find('ItemResidentNode').getComponent('panel');
        panelJS.ChoiceSelect(node,ChoiceNum,ChoiceType);
    },
    zhuangbeilan:function(event,type){//包裹栏函数
        var bagPrefab = 'prefab/bag';
        var name = event.currentTarget.name;
        
        clickBtnTag = event.currentTarget.getParent().getParent().tag;//机舱合成按钮的tag
        if(type != null){
            switch(type){
                case '1':
                this.optionButton(event,type);
                break;
                case '2':
                this.optionButton(event,type);
                break;
                case '3':
                this.optionButton(event,type);
                break;
                case '4':
                this.optionButton(event,type);
                break;
            }
        }
        else{ 
            var ItemResidentNode = cc.find('ItemResidentNode');
            var BottomNode = ItemResidentNode.getChildByName('Mask').getChildByName('IitemBack').getChildByName('BottomScrollview').getChildByName('view').getChildByName('content');
            var panelJS = ItemResidentNode.getComponent('panel');      
            panelJS.delBagPrefab(BottomNode);
            switch(name){
                case 'Alloy':
                leftBtnName = 'Alloy';
                bagName = InterfaceName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,hejin.hejinBagNum,hejin.hejinBagName,hejin.hejinBagType,bagName);//中
                leftBtnType = 0;
                this.LeftBtnInfo(event);
                break;
                case 'Element':
                leftBtnName = 'Element';
                bagName = leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,hejin.yuansuBagNum,hejin.yuansuBagName,yuansu.yuansuBagType,bagName);//中
                leftBtnType = 1;
                this.LeftBtnInfo(event);
                break;
                case 'HP':
                leftBtnName = 'HP';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 0;
                this.LeftBtnInfo(event);
                break;
                case 'GJ':
                leftBtnName = 'GJ';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 1;
                this.LeftBtnInfo(event);
                break;
                case 'FY':
                leftBtnName = 'FY';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 2;
                this.LeftBtnInfo(event);
                break;
                case 'GS':
                leftBtnName = 'GS';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 3;
                this.LeftBtnInfo(event);
                break;
                case 'SB':
                leftBtnName = 'SB';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 4;
                this.LeftBtnInfo(event);
                break;
                case 'MZ':
                leftBtnName = 'MZ';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 5;
                this.LeftBtnInfo(event);
                break;
                case 'BJ':
                leftBtnName = 'BJ';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 6;
                this.LeftBtnInfo(event);
                break;
                case 'GD':
                leftBtnName = 'GD';
                bagName = InterfaceName +'_'+leftBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,yuansu.yuansuBagNum,yuansu.yuansuBagName,yuansu.yuansuBagType,bagName);
                leftBtnType = 7;
                this.LeftBtnInfo(event);
                break;
                case 'Head':
                leftBtnName = 'Head';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 0;
                this.LeftBtnInfo(event);
                break;
                case 'Shoulder':
                leftBtnName = 'Shoulder';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 1;
                this.LeftBtnInfo(event);
                break;
                case 'Chest':
                leftBtnName = 'Chest';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 2;
                this.LeftBtnInfo(event);
                break;
                case 'Hand':
                leftBtnName = 'Hand';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 3;
                this.LeftBtnInfo(event);
                break;
                case 'Skirt':
                leftBtnName = 'Skirt';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 4;
                this.LeftBtnInfo(event);
                break;
                case 'Leg':
                leftBtnName = 'Leg';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 5;
                this.LeftBtnInfo(event);
                break;
                case 'Foot':
                leftBtnName = 'Foot';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                leftBtnType = 6;
                this.LeftBtnInfo(event);
                break;
                case 'Body':
                leftBtnName = 'Body';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                leftBtnType = 0;
                this.LeftBtnInfo(event);
                break;
                case 'Armor':
                leftBtnName = 'Armor';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                leftBtnType = 1;
                this.LeftBtnInfo(event);
                break;
                case 'Base':
                leftBtnName = 'Base';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                leftBtnType = 2;
                this.LeftBtnInfo(event);
                break;
                case 'Bullet':
                leftBtnName = 'Bullet';
                bagName = InterfaceName +'_'+leftBtnName+'_'+topBtnName;
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                leftBtnType = 3;
                this.LeftBtnInfo(event);
                break;

                case "Debris":
                topBtnName = "Debris";
                topBtnType = 0;

                if(leftBtnType == 0){
                   
                    if(InterfaceType == 2){
                        leftBtnName = ItemMachineName[0];
                    }
                    else if(InterfaceType == 3){
                        leftBtnName = ItemArtilleryName[0];
                    }
                }
                bagName = InterfaceName +'_'+ leftBtnName +'_'+topBtnName;
                this.disNext(InterfaceType,leftBtnType,bagName);
                this.TopBtnInfo(event);
                break;
                case "Component":
                topBtnName = "Component";
                topBtnType = 1;
                if(leftBtnType == 0){
                   
                    if(InterfaceType == 2){
                        leftBtnName = ItemMachineName[0];
                    }
                    else if(InterfaceType == 3){
                        leftBtnName = ItemArtilleryName[0];
                    }
                }
                bagName = InterfaceName +'_'+ leftBtnName +'_'+ topBtnName;
                this.disNext(InterfaceType,leftBtnType,bagName);
                this.TopBtnInfo(event);
                break;
                case "Part":
                topBtnName = "Part";
                topBtnType = 2;
                if(leftBtnType == 0){
                    
                    if(InterfaceType == 2){
                        leftBtnName = ItemMachineName[0];
                    }
                    else if(InterfaceType == 3){
                        leftBtnName = ItemArtilleryName[0];
                    }
                }
                bagName = InterfaceName +'_'+ leftBtnName +'_'+ topBtnName;
                this.disNext(InterfaceType,leftBtnType,bagName);
                this.TopBtnInfo(event);
                break;
                case "Whole":
                topBtnName = "Whole";
                topBtnType = 3;
                if(leftBtnType == 0){
                    
                    if(InterfaceType == 2){
                        leftBtnName = ItemMachineName[0];
                    }
                    else if(InterfaceType == 3){
                        leftBtnName = ItemArtilleryName[0];
                    }
                }
                bagName = InterfaceName +'_'+ leftBtnName +'_'+ topBtnName;
                this.disNext(InterfaceType,leftBtnType,bagName);
                this.TopBtnInfo(event);
                break;
            }
        }
    },
    disNext:function(InterfaceType,leftType,bagName){
        var bagPrefab = 'prefab/bag';
        var panelJS = cc.find('ItemResidentNode').getComponent('panel');
        var ItemResidentNode = cc.find('ItemResidentNode');
        var BottomNode = ItemResidentNode.getChildByName('Mask').getChildByName('IitemBack').getChildByName('BottomScrollview').getChildByName('view').getChildByName('content');         
        panelJS.delBagPrefab(BottomNode);
        if(InterfaceType == 2){
            switch(leftType){
                case 0:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
                case 1:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
                case 2:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
                case 3:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
                case 4:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
                case 5:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
                case 6:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,zhuangbei.zhuangbeiBagNum,zhuangbei.zhuangbeiBagName,zhuangbei.zhuangbeiBagType,bagName);
                break;
            }
        }
        else if(InterfaceType == 3){
            switch(leftType){
                case 0:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                break;
                case 1:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                break;
                case 2:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                break;
                case 3:
                panelJS.LoadFab(BottomNode,bagPrefab,0,95,pao.paoBagNum,pao.paoBagName,pao.paoBagType,bagName);
                break;
            }
        }
    },
    setSlider:function(){//拖动条回调函数
        var CurrentName = bagName + '_' + ItemLevel[Fabtag];//获取当前名字
        Total = Number(gg.getDataFormLocality(CurrentName));//获取数据
        var TipsName;//提示
        var sliderNode = cc.find('ItemResidentNode/panel/bg/slider');
        var prog = sliderNode.getComponent(cc.Slider).progress;
        if(InterfaceType == 1){
            COUNT = ElementUpgradeNum;
        }
        else{
            COUNT = AlloyUpgradeNum;
        }
        
        var TotalName = Total + MaterialName;
        if(btnTag == 1){//合成
            SliderNum = Math.floor(Number(Total)/Number(COUNT)*prog);
            consumeNum = SliderNum*COUNT;
            TipsName = '每' + COUNT + '个' + MaterialName + '合成1个' + DisName;
        }
        else if(btnTag == 2){//分解
            consumeNum = Math.floor(Total*prog);
            SliderNum = Math.floor(Total*prog) * COUNT/2;
            TipsName = '每1个' + MaterialName + '分解' + COUNT + '个' + DisName;
        }
        else{//升级
                SliderNum = Math.floor(Number(Total)/Number(COUNT)*prog);
                consumeNum = SliderNum*COUNT;
                TipsName = '每' + COUNT + '个' + MaterialName + '升级1个' + DisName;
        }
        consumeName =  consumeNum + MaterialName; 
        obtainNum = SliderNum;
        obtainName = obtainNum + DisName;
        
        cc.find('ItemResidentNode/panel/bg/TotalNum').getComponent(cc.Label).string = TotalName.toString();
        cc.find('ItemResidentNode/panel/bg/consumeNum').getComponent(cc.Label).string = consumeName.toString();
        cc.find('ItemResidentNode/panel/bg/obtainNum').getComponent(cc.Label).string = obtainName.toString();
        cc.find('ItemResidentNode/panel/bg/TipsNum').getComponent(cc.Label).string = TipsName.toString();
    },
     //拖动条作用          名字 需求数量 当前材料名字 升级材料名字  分解材料名字   合成材料名字
    SliderEffect:function(materialName,UpgradeName,decomposeName,synthesisName){
        
        MaterialName = materialName;
        if(btnTag == 1){
            DisName = UpgradeName;//给文字赋值
        }
        else if(btnTag == 2){
            DisName = decomposeName;//给文字赋值
        }
        else{
            DisName = synthesisName;//给文字赋值
        }
        this.setSlider();
    },
    UpgradeBtn:function(event){//升级按钮
        Fabtag = event.currentTarget.getParent().tag;
        if(Fabtag == 5){
            event.currentTarget.getComponent(cc.Button).interactable = false;
        }
        cc.find('ItemResidentNode').getChildByName('panel').getChildByName('bg').getChildByName('Popup').active = false;
        btnTag = 1;
        panelTag = 2;
        this.checkName();
        this.disHcPanel();
        cc.find('ItemResidentNode').getChildByName('panel').getChildByName('Mask').active = true;
    },
    DecomposeBtn:function(event){//分解按钮
        Fabtag = event.currentTarget.getParent().tag;
        if(Fabtag == 0){
            event.currentTarget.getComponent(cc.Button).interactable = false;
        }
        cc.find('ItemResidentNode').getChildByName('panel').getChildByName('bg').getChildByName('Popup').active = false;
        btnTag = 2;
        panelTag = 2;
        this.checkName();
        this.disHcPanel();
        cc.find('ItemResidentNode').getChildByName('panel').getChildByName('Mask').active = true;
    },
    SynthesisBtn:function(event){//合成按钮
        Fabtag = event.currentTarget.getParent().tag;
        if(Fabtag == 5){
            event.currentTarget.getComponent(cc.Button).interactable = false;
        }
        this.disHcPanel();
        this.checkName();
        var Popup = cc.find('ItemResidentNode').getChildByName('panel').getChildByName('bg').getChildByName('Popup');
        Popup.getChildByName('Node').setPosition(cc.p(2,0));
        btnTag = 3;
        PopupType = 0;
        this.changeSprite(PopupType);
        Popup.active = true;
        var panelJS = cc.find('ItemResidentNode').getComponent('panel');
        var Popupnode = Popup.getChildByName('Node').getChildByName('BoxScrollview').getChildByName('view').getChildByName('content');
        Popupnode.removeAllChildren();
        if(bagName == 'Alloy'){
            this.SliderEffect(window.Alloy[Fabtag],null,null,window.HeadMachineDebris[Fabtag]);
            panelJS.LoadChoiceFab(Popupnode,window.AlloyChoiceNum,window.AlloyChoiceName,window.AlloyChoiceType);
            window.ChoiceBtnName = 'Machine_Head_Debris_' + ItemLevel[Fabtag];
        }
        else if(bagName == 'Element'){
            this.SliderEffect(window.Element[Fabtag],null,null,window.HPElement[Fabtag]);
            panelJS.LoadChoiceFab(Popupnode,yuansu.yuansuLeftNum,yuansu.yuansuLeftName,yuansu.yuansuLeftType);
            window.ChoiceBtnName = 'Element_HP' + ItemLevel[Fabtag];
        }
    },
    BagLevel:function(event,Name){//判定包裹栏预制体等级
        var Num,SynthesisNum,FragmentName;
        var a;
        if(leftBtnType == 0){
            a = 1;
            Num = hejin.hejinBagNum;
            SynthesisNum = AlloyUpgradeNum;
            FragmentName = window.Alloy;
            this.ChoiceBtnInfo(event,window.AlloyChoiceNum,AlloyChoiceType);
            for(let i = 0; i < Num; i++){
                if(Fabtag == i){
                    this.SliderEffect(FragmentName[i],null,null,Name[i]);
                    if(event.currentTarget.tag > 6){
                        a = 2;
                    }
                    window.ChoiceBtnName = ItemName[a] + '_' + event.currentTarget.name + '_' + ItemTypeName[0] + '_' + ItemLevel[Fabtag];
                }
            }
        }
        else{
            a = 0;
            Num = hejin.yuansuBagNum;
            SynthesisNum = ElementUpgradeNum;
            FragmentName = window.Element;
            this.ChoiceBtnInfo(event,yuansu.yuansuLeftNum,yuansu.yuansuLeftType);
            for(let i = 0; i < Num; i++){
                if(Fabtag == i){
                    this.SliderEffect(FragmentName[i],null,null,Name[i]);
                    window.ChoiceBtnName = ItemName[a] + '_' + ItemElementName[i] + '_' + ItemLevel[Fabtag];
                   
                }
            }
        }
    },
    ChoiceBtn:function(event){//升级界面选择栏按钮
        switch(event.currentTarget.name){
            case 'Head' :
            this.BagLevel(event,window.HeadMachineDebris);
            break;
            case 'Shoulder':
            this.BagLevel(event,window.ShoulderMachineDebris);
            break;
            case 'Chest' :
            this.BagLevel(event,window.ChestMachineDebris);
            break;
            case 'Hand':
            this.BagLevel(event,window.HandMachineDebris);
            break;
            case 'Skirt' :
            this.BagLevel(event,window.SkirtMachineDebris);
            break;
            case 'Leg':
            this.BagLevel(event,window.LegMachineDebris);
            break;
            case 'Foot' :
            this.BagLevel(event,window.FootMachineDebris);
            break;
            case 'Body':
            this.BagLevel(event,window.BodyArtilleryDebris);
            break;
            case 'Armor' :
            this.BagLevel(event,window.ArmorArtilleryDebris);
            break;
            case 'Base':
            this.BagLevel(event,window.BaseArtilleryDebris);
            break;
            case 'Bullet' :
            this.BagLevel(event,window.BulletArtilleryDebris);
            break;
            //-------------------------
            case 'HP':
            this.BagLevel(event,window.HPElement);
            break;
            case 'GJ':
            this.BagLevel(event,window.GJElement);
            break;
            case 'FY':
            this.BagLevel(event,window.FYElement);
            break;
            case 'GS':
            this.BagLevel(event,window.GSElement);
            break;
            case 'SB':
            this.BagLevel(event,window.SBElement);
            break;
            case 'MZ':
            this.BagLevel(event,window.MZElement);
            break;
            case 'BJ':
            this.BagLevel(event,window.BJElement);
            break;
            case 'GD':
            this.BagLevel(event,window.GDElement);
            break;
        }
    },
    changeSprite:function(type){//改变精灵图片
        var PopupBtn = cc.find('ItemResidentNode/panel/bg/Popup/Node/PopupBtn').getComponent(cc.Button);
        PopupBtn.normalSprite = new cc.SpriteFrame();
        PopupBtn.pressedSprite = new cc.SpriteFrame();
        PopupBtn.hoverSprite = new cc.SpriteFrame();
        if(type == 0){
            PopupBtn.normalSprite.setTexture(cc.url.raw("resources/button/Arrow_left.png"));
            PopupBtn.pressedSprite.setTexture(cc.url.raw("resources/button/Arrow_left_click.png"));
            PopupBtn.hoverSprite.setTexture(cc.url.raw("resources/button/Arrow_left.png"));
        }
        else{
            PopupBtn.normalSprite.setTexture(cc.url.raw("resources/button/Arrow_right.png"));
            PopupBtn.pressedSprite.setTexture(cc.url.raw("resources/button/Arrow_right_click.png"));
            PopupBtn.hoverSprite.setTexture(cc.url.raw("resources/button/Arrow_right.png"));
        }
    },
    PopupMove:function(){//升级界面选择栏移动
        var PopupNode = this.node.getChildByName('Popup').getChildByName('Node');
        if(PopupType == 0){
            PopupNode.getChildByName('BoxScrollview').active = true;
            var move = cc.moveBy(0.1,cc.p(-90,0));
            PopupNode.runAction(move);
            PopupType = 1;
            this.changeSprite(PopupType);
        }
        else{
            var move = cc.moveBy(0.1,cc.p(90,0));
            PopupNode.runAction(move);
            PopupNode.getChildByName('BoxScrollview').active = false;
            PopupType = 0;
            this.changeSprite(PopupType);
        }
    },
    disHcPanel:function(){//显示合成分解面板
        var panelNode = cc.find('ItemResidentNode/panel');
        panelNode.active = true;
    },
    PanelExitBtn:function(){//面板退出按键
        if(panelTag == 1){
            cc.find('ItemResidentNode').getComponent('ItemResidentNode').removeItemResidentNode();
            var PanelNode = cc.find('ItemResidentNode/panel');
            PanelNode.active = false;
            cc.find('ItemResidentNode/panel/bg/slider').getComponent(cc.Slider).progress = 1;
        }
        else{
            var PanelNode = cc.find('ItemResidentNode/panel');
            PanelNode.active = false;
            cc.find('ItemResidentNode/panel/bg/slider').getComponent(cc.Slider).progress = 1;
        }
    },
    panelSureBtn:function(event){
        //InterfaceType 界面类型    1
        //leftBtnType   包裹左边按钮类型    2
        //topBtnType    包裹顶部按钮类型    3
        //Fabtag    包裹等级类型    4
        //btnTag    按钮类型    5
        cc.find('ItemResidentNode/panel').active = false;
        var Name1 = bagName + '_' + ItemLevel[Fabtag];
        var Name2 = bagName + '_' + ItemLevel[Fabtag+1];
        var Name3 = bagName + '_' + ItemLevel[Fabtag-1];
        var Name4 = window.ChoiceBtnName;
        
        gg.AddNum(Fabtag,Name1,Name2,Name3,Name4);
        //更改Label
        let ContentNode = cc.find('ItemResidentNode').getChildByName('Mask').getChildByName('IitemBack')
        .getChildByName('BottomScrollview').getChildByName('view').getChildByName('content');
        if(Fabtag < 5 && btnTag == 1){
            this.changelabel(ContentNode.getChildByTag(Fabtag),Number(gg.getDataFormLocality(Name1)));
            this.changelabel(ContentNode.getChildByTag(Fabtag+1),Number(gg.getDataFormLocality(Name2)));
        }
        else if(Fabtag > 0 && btnTag == 2){
            this.changelabel(ContentNode.getChildByTag(Fabtag),Number(gg.getDataFormLocality(Name1)));
            this.changelabel(ContentNode.getChildByTag(Fabtag-1),Number(gg.getDataFormLocality(Name3)));
        }
        else if(btnTag == 3){
            this.changelabel(ContentNode.getChildByTag(Fabtag),Number(gg.getDataFormLocality(Name1)));
        }
    },
    changelabel : function(node,num){
        node.getChildByName('num').getComponent(cc.Label).string = gg.NumShowType(num);
    },

    checkName:function(){//查找名字函数
        var GloBalName;
        if(bagName){
            bagItemName = bagName + '_'+ItemLevel[Fabtag];
        }
        else{
            switch(InterfaceType){
                case '1':
                bagName = InterfaceName + '_' + ItemElementName[0];
                break;
                case '2':
                bagName = InterfaceName + '_' + ItemElementName[0] + '_'  + EquipType[0];
                break;
                case '3':
                bagName = InterfaceName + '_' + ItemArtilleryName[0]+ '_'  + EquipType[0];
                break;
                case '4':
                bagName = InterfaceName;
                break;
            }
            bagItemName = bagName + '_'+ItemLevel[Fabtag];
        }
        if(InterfaceType == 1){
            GloBalName = eval(leftBtnName + InterfaceName);
        }
        else if(InterfaceType == 4){
            GloBalName = eval(InterfaceName);
        }
        else{
            GloBalName = eval(leftBtnName + InterfaceName + topBtnName);
        }
        this.SliderEffect(GloBalName[Fabtag],GloBalName[Fabtag+1],GloBalName[Fabtag-1],);
    },
});



