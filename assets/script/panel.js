window.InitLeftBtnType = 0;
window.InitTopBtnType = 0;
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
    },
    delBagPrefab:function(node){//删除包裹栏预制体
        if(node.getChildren().length > 0){
            node.removeAllChildren();
        }
    },
    readFab:function(type,BottomNode,TopNode,LeftNode){//读取预制体 
        var self = this;
        var newBag = 'prefab/bag';
        var newBtnTop = 'prefab/btnTop';
        var newBtnLeft = 'prefab/btnLeft';
        var bagNum,bagName,bagType;
        var TopName;
        var LeftName;
        switch(type){
            case '1':
            bagNum = window.ItemLevelNum;
            TopBtnNum = 0;
            TopName = null;
            InitTopBtnType = null;
            LeftBtnNum = window.Element_Type_Num;
            LeftName = window.ElementLeftName;
            InitLeftBtnType = ItemElementName;
            break;
            case '2':
            bagNum = window.ItemLevelNum;
            TopBtnNum = window.EquipTypeNum;
            TopName = window.EquipName;
            InitTopBtnType = window.EquipType;
            LeftBtnNum = window.Machine_Equip_Num;
            LeftName = window.ItemType;
            InitLeftBtnType = window.ItemBtnType;
            break;
            case '3':
            bagNum = window.ItemLevelNum;
            TopBtnNum = window.EquipTypeNum;
            TopName = window.EquipName;
            InitTopBtnType = window.EquipType;
            LeftBtnNum = window.Artillery_Equip_Num;
            LeftName = window.ArtilleryLeftName;
            InitLeftBtnType = ItemArtilleryName;
            break;
            case '4':
            bagNum = window.ItemLevelNum;
            TopBtnNum = 0;
            TopName = null;
            InitTopBtnType = null;
            LeftBtnNum = window.FragmentLeftNum;
            LeftName = window.FragmentLeftName;
            InitLeftBtnType = window.FragmentLeftType;
            break;
        }
        if(MainSceneBtnTag == 0){
            self.LoadFab(BottomNode,newBag,0,95,bagNum,null,null,null);//中
        }
        else{
            self.LoadFab(BottomNode,newBag,0,95,bagNum,bagName,bagType,window.JCBagName);//中
        }
        
        self.LoadFab(TopNode,newBtnTop,90,-5,TopBtnNum,TopName,InitTopBtnType,null);//左
        self.LoadFab(LeftNode,newBtnLeft,0,61,LeftBtnNum,LeftName,InitLeftBtnType,null);//上
    },                                      
    LoadLightFab:function(node,Num,posX,posY,sizeHeight){
        var newLight = null;
        var lightFab = 'prefab/light';
        cc.loader.loadRes(lightFab, function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) {
                cc.log( '载入预制资源失败, 原因:' + errorMessage ); 
                return;
            }
            if( !( loadedResource instanceof cc.Prefab ) ) { 
                cc.log( '你载入的不是预制资源!' ); 
                return; 
            } 
        //var a = 0;
        newLight = cc.instantiate(loadedResource);
        var POSX = posX/2;
        var pos = cc.p(POSX-30,-Num*posY-sizeHeight);
        newLight.setPosition(pos);
        node.addChild(newLight);
    })
    },
    LoadFab:function(node,PrefabUrl,Posx,Posy,Num,NameList,TypeList,FabbagName){
        var Box;
        var self = this;
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
            for(var i = Num; i > 0; i--){
                Box = cc.instantiate(loadedResource);
                var size = Box.getContentSize();
                if(Box.getChildByName("Label") != null){
                    var label = Box.getChildByName("Label");
                    label.getComponent("cc.Label").string = NameList[a];
                    if(Posx == 0){
                        var pos = cc.p(Posx,-a*Posy - size.height/2);
                        node.setContentSize(cc.size(size.width,(Num + 1)*size.height));
                        if(MainSceneBtnTag == 0){
                            if(a == 0){//高亮按钮初始化
                                Box.getChildByName('Select').active = true;
                            }
                        }
                        else{
                            if(a == clickBtnTag){//高亮按钮初始化
                                Box.getChildByName('Select').active = true;
                            }
                        }
                    }
                    else{
                        var pos = cc.p(a*Posx+(size.width + 36)/2,Posy);
                        node.setContentSize(cc.size((Num + 1)*size.width,size.height));
                        if(a == 0){//高亮按钮初始化
                            Box.getChildByName('Select').active = true;
                        }
                    }

                    Box.setPosition(pos);
                    Box.name = TypeList[a];
                }
                else{
                    if(FabbagName == null){
                        switch(InterfaceType){
                            case '1':
                            bagName = InterfaceName+'_'+ItemElementName[0];
                            break;
                            case '2':
                            bagName = InterfaceName+'_'+ItemMachineName[0]+'_'+window.EquipType[0];
                            break;
                            case '3':
                            bagName = InterfaceName+'_'+ItemArtilleryName[0]+'_'+window.EquipType[0];
                            break;
                            case '4':
                            bagName = InterfaceName;
                            break;
                        }
                    }
                    else{
                        bagName = FabbagName;
                    }
                    if(FabbagName == 'Element' || a == 5){
                        Box.getChildByName('Upgrade').getComponent(cc.Button).interactable = false; 
                    }
                    if(a == 0){
                        Box.getChildByName('Decompose').getComponent(cc.Button).interactable = false; 
                    }
                    var LevelName = bagName+'_'+ItemLevel[a];
                    console.log('等级',LevelName);
                    if(InterfaceType == 4){
                        Box.getChildByName('Synthesis').tag = a;
                        Box.getChildByName('Synthesis').active = true;
                    }
                    else{
                        Box.getChildByName('Synthesis').active = false;
                    }
                    var LevelNum = gg.NumShowType( Number(gg.getDataFormLocality(LevelName)));//根据名字获取数量
                    Box.getChildByName("num").getComponent("cc.Label").string =  LevelNum;
                    //Box.getChildByName("Upgrade").name = TypeList[a];
                    var pos = cc.p(Posx,-a*Posy - size.height/2);
                    Box.setPosition(pos);
                    node.setContentSize(cc.size(size.width,(Num + 1)*size.height));
                    self.LoadLightFab(node,a,size.width,Posy,0);
                    Box.name = LevelName;
                }   
                //将预制资源添加到父节点
                Box.tag = a;
                a += 1;
                node.addChild(Box);
                
            }
        });
    },
    LoadChoiceFab:function(node,Num,NameList,TypeList) {
        var ChoiceBox;
        var PrefabUrl = "prefab/Choice";
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
            for(var i = Num; i > 0; i--){
                ChoiceBox = cc.instantiate(loadedResource);
                var size = ChoiceBox.getContentSize();
                var label = ChoiceBox.getChildByName("Label");
                label.getComponent("cc.Label").string = NameList[a];
                //将预制资源添加到父节点
                var pos = cc.p(0,-a*40 - size.height);
                node.setContentSize(cc.size(size.width,(Num + 1)*size.height));
                ChoiceBox.setPosition(pos);
                ChoiceBox.name =TypeList[a];
                if(a == 0){//高亮按钮初始化
                    ChoiceBox.getChildByName('Select').active = true;
                }
                ChoiceBox.tag = a;
                a += 1;
                node.addChild(ChoiceBox);
            }
        });
    },
    LeftBtnSelect:function(node){//左边高亮按钮
        for(let i = 0; i < LeftBtnNum; i++){
            let LeftSelect = cc.find('ItemResidentNode/Mask/IitemBack/LeftScrollview/view/content').getChildByName(InitLeftBtnType[i]).getChildByName("Select");
            if(LeftSelect.active) {
                LeftSelect.active = false;
            }
        }
        node.active = true;
    },
    TopBtnSelect:function(node){//顶部高亮按钮
        for(let i = 0; i < TopBtnNum; i++){
            let TopSelect = cc.find('ItemResidentNode/Mask/IitemBack/TopScrollview/view/content').getChildByName(InitTopBtnType[i]).getChildByName("Select");
            if(TopSelect.active) {
                TopSelect.active = false;
            }
        }
        node.active = true;
    },
    ChoiceSelect:function(node,Num,Type){
        for(let i = 0; i < Num; i++){
            let ChoiceSelect = cc.find('ItemResidentNode/panel/bg/Popup/Node/BoxScrollview/view/content').getChildByName(Type[i]).getChildByName("Select");
            if(ChoiceSelect.active) {
                ChoiceSelect.active = false;
            }
        }
        node.active = true;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
