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
        
        EnergyRope : cc.ProgressBar,
        Energy1HP : cc.ProgressBar,
        Energy2HP : cc.ProgressBar,
        Energy3HP : cc.ProgressBar,
        Energy4HP : cc.ProgressBar,
        ArtilleryHP : cc.ProgressBar,
        

    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.timeDelay = 0;
        this.user_artillery_Die = false;
        // this.CurEnemy;

        this.Enemy_Die_1 = false;
        this.Enemy_Die_2 = false;
        this.Enemy_Die_3 = false;
        this.Enemy_Die_4 = false;
        this.Enemy_AllDie = false;

        this.Att_Enemy1 = true;
        this.Att_Enemy2 = false;
        this.Att_Enemy3 = false;
        this.Att_Enemy4 = false;
        //属性
        this.hp = Number(gg.getDataFormLocality("Artillery_HP_Attribute"));
        this.gj = Number(gg.getDataFormLocality("Artillery_GJ_Attribute"));
        this.fy = Number(gg.getDataFormLocality("Artillery_FY_Attribute"));
        this.gs = Number(gg.getDataFormLocality("Artillery_GS_Attribute"));
        this.sb = Number(gg.getDataFormLocality("Artillery_SB_Attribute"));
        this.mz = Number(gg.getDataFormLocality("Artillery_MZ_Attribute"));
        this.bj = Number(gg.getDataFormLocality("Artillery_BJ_Attribute"));
        this.gd = Number(gg.getDataFormLocality("Artillery_GD_Attribute"));

        this.CreatorEnemy();

        //炮台的属性
        this.user_artillery = this.node.getChildByName("Battle_bg").getChildByName("Artillery");
        this.user_artillery.hp = this.hp;
        this.user_artillery.gj = this.gj;
        this.user_artillery.fy = this.fy;
        this.user_artillery.gs = this.gs;
        this.user_artillery.sb = this.sb * 100;
        this.user_artillery.mz = this.mz * 100;
        this.user_artillery.bj = this.bj * 100;
        this.user_artillery.gd = this.gd * 100;

        this.e1 = this.node.getChildByName("Battle_bg").getChildByName("Enemy_1");
        this.e2 = this.node.getChildByName("Battle_bg").getChildByName("Enemy_2");
        this.e3 = this.node.getChildByName("Battle_bg").getChildByName("Enemy_3");
        this.e4 = this.node.getChildByName("Battle_bg").getChildByName("Enemy_4");
        this.CurEnemy = this.e1;
        this.CurEnemy.getChildByName("center_btn_normal").active = true;
        this.CurEnemyIndex = 1;
        this.MaxE1Hp = this.e1.hp;
        this.MaxE2Hp = this.e2.hp;
        this.MaxE3Hp = this.e3.hp;
        this.MaxE4Hp = this.e4.hp;

        this.E1Att = this.e1.gj;
        this.E2Att = this.e2.gj;
        this.E3Att = this.e3.gj;
        this.E4Att = this.e4.gj;

        //设置血量
        let Artillerystring = this.user_artillery.hp +"/"+ this.hp;
        this.ArtilleryHP.node.getChildByName("label").getComponent(cc.Label).string = Artillerystring;
        let enemy1string = this.e1.hp +"/"+ this.MaxE1Hp;
        this.Energy1HP.node.getChildByName("label").getComponent(cc.Label).string = enemy1string;
        let enemy2string = this.e2.hp +"/"+ this.MaxE2Hp;
        this.Energy2HP.node.getChildByName("label").getComponent(cc.Label).string = enemy2string;
        let enemy3string = this.e3.hp +"/"+ this.MaxE3Hp;
        this.Energy3HP.node.getChildByName("label").getComponent(cc.Label).string = enemy3string;
        let enemy4string = this.e4.hp +"/"+ this.MaxE4Hp;
        this.Energy4HP.node.getChildByName("label").getComponent(cc.Label).string = enemy4string;

        //战斗
        this.Enemy1Attack();
        this.Enemy2Attack();
        this.Enemy3Attack();
        this.Enemy4Attack();
        this.ArtilleryFireAnimation();
        
    },
    //选择攻击对象
    ChangeEnemyLeft : function(){
        this.CurEnemy.getChildByName("center_btn_normal").active = false;
        if(this.CurEnemyIndex == 4){
            if(!this.Enemy_Die_3){
                this.CurEnemy = this.e3;
                this.CurEnemyIndex = 3;
                this.Att_Enemy3 = true;
            }
            else if(!this.Enemy_Die_2){
                this.CurEnemy = this.e2;
                this.CurEnemyIndex = 2;
                this.Att_Enemy2 = true;
            }
            else{
                this.CurEnemy = this.e1;
                this.CurEnemyIndex = 1;
                this.Att_Enemy1 = true;
            }
        }
        else if( this.CurEnemyIndex == 3){
            if(!this.Enemy_Die_2){
                this.CurEnemy = this.e2;
                this.CurEnemyIndex = 2;
                this.Att_Enemy2 = true;
            }
            else{
                this.CurEnemy = this.e1;
                this.CurEnemyIndex = 1;
                this.Att_Enemy1 = true;
            }
        }
        else if( this.CurEnemyIndex == 2){
            if(!this.Enemy_Die_1){
                this.CurEnemy = this.e1;
                this.CurEnemyIndex = 1;
                this.Att_Enemy1 = true;
            }
        }
        console.log(this.CurEnemyIndex);
        this.CurEnemy.getChildByName("center_btn_normal").active = true;
    },

    ChangeEnemyRight : function(){
        this.CurEnemy.getChildByName("center_btn_normal").active = false;
        if(this.CurEnemyIndex == 1){
            if(!this.Enemy_Die_2){
                this.CurEnemy = this.e2;
                this.CurEnemyIndex = 2;
                this.Att_Enemy2 = true;
            }
            else if(!this.Enemy_Die_3){
                this.CurEnemy = this.e3;
                this.CurEnemyIndex = 3;
                this.Att_Enemy3 = true;
            }
            else if(!this.Enemy_Die_4){
                this.CurEnemy = this.e4;
                this.CurEnemyIndex = 4;
                this.Att_Enemy4 = true;
            }
        }
        else if( this.CurEnemyIndex == 2){
            if(!this.Enemy_Die_3){
                this.CurEnemy = this.e3;
                this.CurEnemyIndex = 3;
                this.Att_Enemy3 = true;
            }
            else if(!this.Enemy_Die_4){
                this.CurEnemy = this.e4;
                this.CurEnemyIndex = 4;
                this.Att_Enemy4 = true;
            }
        }
        else if( this.CurEnemyIndex == 3){
            if(!this.Enemy_Die_4){
                this.CurEnemy = this.e4;
                this.CurEnemyIndex = 4;
                this.Att_Enemy4 = true;
            }
        }
        console.log(this.CurEnemyIndex);
        this.CurEnemy.getChildByName("center_btn_normal").active = true;
    },
    //随机生成敌人
    CreatorEnemy(){
        for(let i = 1; i < 5; i++){
            let Enemyname = "Enemy_" + i;
            let spriteurl = "MainScene/BattleMap/"+i;
            console.log(this.node);
            let Enemy = this.node.getChildByName("Battle_bg").getChildByName(Enemyname);
            
            this.addSpritePic(Enemy.getComponent("cc.Sprite"),spriteurl);
            //添加敌人属性
            Enemy.hp = this.EnemyAddProperty(this.hp);
            Enemy.gj = this.EnemyAddProperty(this.gj);
            Enemy.fy = this.EnemyAddProperty(this.fy);
            Enemy.gs = this.EnemyAddProperty(this.gs);
            Enemy.sb = this.EnemyAddProperty(this.sb*100);
            Enemy.mz = this.EnemyAddProperty(this.mz*100);
            Enemy.bj = this.EnemyAddProperty(this.bj*100);
            Enemy.gd = this.EnemyAddProperty(this.gd*100);
            
        }
    },

    addSpritePic: function(container, addres){
        cc.loader.loadRes(addres, cc.SpriteFrame, function (err, spFrame) {
            container.spriteFrame = spFrame; 
        });
    },

    //随机属性0.3-1.3倍
    EnemyAddProperty : function(property) {
        let randnum = Math.random()+0.3;
        console.log(property);
        return Math.floor(property * randnum.toFixed(2));
    },
    //炮台发射动画
    ArtilleryFireAnimation : function() {
        let time = (300 - this.gs) / 100;
        this.schedule(this.ArtilleryKillEnemy = function() {
            if(this.user_artillery_Die) {
                console.log("失败");
                this.unschedule(this.ArtilleryKillEnemy);
            }
            else if(this.Enemy_AllDie){
                console.log("死光了");
                this.unschedule(this.ArtilleryKillEnemy);
            }
            else{
                this.ArtilleryAttack(0);
            }
        },time);
    },

    //能量炮发射动画
    EnergyArtilleryFireAnimation : function() {
        console.log("能量攻击");
        this.ArtilleryAttack(1);
        window.EnergyFillingTime = 0;
        this.EnergyRope.progress = window.EnergyFillingTime;
    },
    //太空炮攻击
    ArtilleryAttack : function(type){
        let att = this.AttackHit(this.user_artillery,this.CurEnemy);
        let isgd = Math.round(Math.random()*100);
        if(isgd < this.CurEnemy.gd) {
            att /= 2;
        }
        let reducehp;
        if(type == 0){
            reducehp = att - this.CurEnemy.fy;
        }
        else{
            reducehp = att*5 - this.CurEnemy.fy;
        }
        if(reducehp <= 0){
            this.CurEnemy.hp -= 1;
        }
        else{
            this.CurEnemy.hp -= reducehp;
        }
        this.user_artillery.gj = this.gj;
        this.HpChange(this.CurEnemyIndex);
        if(this.CurEnemy.hp <= 0) {
            this.EnemyDieAnimation();
        }
    },
    //敌人死亡动画
    EnemyDieAnimation : function() {
        this.CurEnemy.getChildByName("center_btn_normal").active = false;
        if(this.CurEnemyIndex == 1){
            this.Enemy_Die_1 = true;
            this.e1.color = cc.color(192, 192, 192);
        }
        else if(this.CurEnemyIndex == 2){
            this.Enemy_Die_2 = true;
            this.e2.color = cc.color(192, 192, 192);
        }
        else if(this.CurEnemyIndex == 3){
            this.Enemy_Die_3 = true;
            this.e3.color = cc.color(192, 192, 192);
        }
        else if(this.CurEnemyIndex == 4){
            this.Enemy_Die_4 = true;
            this.e4.color = cc.color(192, 192, 192);
        }
        this.EnemyDie();
    },
    //敌人死亡
    EnemyDie : function(){
        if(!this.Enemy_Die_1){
            this.CurEnemyIndex = 1;
            this.CurEnemy = this.e1;
            this.Att_Enemy1 = true;
        }
        else if(!this.Enemy_Die_2){
            this.CurEnemyIndex = 2;
            this.CurEnemy = this.e2;
            this.Att_Enemy2 = true;
        }
        else if(!this.Enemy_Die_3){
            this.CurEnemyIndex = 3;
            this.CurEnemy = this.e3;
            this.Att_Enemy3 = true;
        }
        else if(!this.Enemy_Die_4){
            this.CurEnemyIndex = 4;
            this.CurEnemy = this.e4;
            this.Att_Enemy4 = true;
        }
        this.CurEnemy.getChildByName("center_btn_normal").active = true;

        if(this.Enemy_Die_1 && this.Enemy_Die_2 && this.Enemy_Die_3 && this.Enemy_Die_4){
            this.CurEnemy.getChildByName("center_btn_normal").active = false;
            this.Enemy_AllDie = true;
            console.log("胜利");
        }
    },

    //能量填充
    EnergyFilling : function(dt) {
        if(!this.user_artillery_Die) {
            if(window.EnergyFillingTime < 1){
                window.EnergyFillingTime += 0.01*dt;
                this.EnergyRope.progress = window.EnergyFillingTime;
            }
        }
    },
    
    //攻击命中
    AttackHit : function(attacker,beattacked,string) {
        let violent = Math.random() * 100;//随机0~100
        if(violent < attacker.mz && violent > beattacked.sb){//命中
            if(violent < attacker.bj){
                attacker.gj *= 2;
            }
        }
        else if(violent > attacker.mz && violent > beattacked.sb){//攻击减半
            attacker.gj *= 0.5;
            if(violent < attacker.bj){
                attacker.gj *= 2;
            }
        }
        else if(violent < attacker.mz && violent < beattacked.sb){//攻击减半
            attacker.gj *= 0.5;
            if(violent < attacker.bj){
                attacker.gj *= 2;
            }
        }
        else if(violent > attacker.mz && violent < beattacked.sb){
            attacker.gj = 0;
        }
        return attacker.gj;
    },

    //敌人攻击
    Enemy1Attack : function(){
        let time = (300 - this.e1.gs) / 100;
        this.schedule(this.Enemy1 = function(){
            if(this.Att_Enemy1){
                if(!this.user_artillery_Die && !this.Enemy_Die_1) {
                    this.EnemyAttackAnimation(this.e1)
                    this.e1.gj = this.E1Att;
                }
                else{
                    this.unschedule(this.Enemy1);
                }
            }
        },time);
    },
    //敌人攻击
    Enemy2Attack : function(){
        let time = (300 - this.e2.gs) / 100;
        this.schedule(this.Enemy2 = function(){
            if(this.Att_Enemy2){
                if(!this.user_artillery_Die && !this.Enemy_Die_2){
                    this.EnemyAttackAnimation(this.e2);
                    this.e2.gj = this.E2Att;
                }
                else{
                    this.unschedule(this.Enemy2);
                }
            }
        },time);
    },
    //敌人攻击
    Enemy3Attack : function(){
        let time = (300 - this.e3.gs) / 100;
        this.schedule(this.Enemy3 = function(){
            if(this.Att_Enemy3){
                if(!this.user_artillery_Die && !this.Enemy_Die_3) {
                    this.EnemyAttackAnimation(this.e3);
                    this.e3.gj = this.E3Att;
                }
                else{
                    this.unschedule(this.Enemy3);
                }
            }
        },time);
    },
    //敌人攻击
    Enemy4Attack : function(){
        let time = (300 - this.e4.gs) / 100;
        this.schedule(this.Enemy4 = function(){
            if(this.Att_Enemy4){
                if(!this.user_artillery_Die && !this.Enemy_Die_4) {
                    this.EnemyAttackAnimation(this.e4);
                    this.e4.gj = this.E4Att;
                }
                else{
                    this.unschedule(this.Enemy4);
                }
            }
        },time);
    },
    //敌人攻击的动画
    EnemyAttackAnimation : function(attacker,string){
        let att = this.AttackHit(attacker,this.user_artillery,string);
        let isgd = Math.round(Math.random()*100);
        if(isgd < this.user_artillery.gd*100) {
            att /= 2;
        }
        let reducehp = att - this.user_artillery.fy;
        if(reducehp <= 0){
            this.user_artillery.hp -= 1;
        }
        else{
            this.user_artillery.hp -= reducehp;
        }
        this.HpChange(0);
        if(this.user_artillery.hp <= 0){
            this.ArtilleryDieAnimation();
            
            return;
        }
    },

    HpChange : function(changer){
        if(changer == 0) {
            this.Setprogress(this.ArtilleryHP,this.user_artillery.hp,this.hp);
        }
        else if(changer == 1) {
            this.Setprogress(this.Energy1HP,this.e1.hp,this.MaxE1Hp);
        }
        else if(changer == 2) {
            this.Setprogress(this.Energy2HP,this.e2.hp,this.MaxE2Hp);
        }
        else if(changer == 3) {
            this.Setprogress(this.Energy3HP,this.e3.hp,this.MaxE3Hp);
        }
        else if(changer == 4) {
            this.Setprogress(this.Energy4HP,this.e4.hp,this.MaxE4Hp);
        }
    },

    Setprogress : function(progressnode,curhp,maxhp){
        let pronum;
        let labelstring;
        pronum = curhp / maxhp;
        progressnode.progress = pronum;
        if(curhp <= 0){
            curhp = 0;
        }
        labelstring = curhp +"/"+ maxhp;
        progressnode.node.getChildByName("label").getComponent(cc.Label).string = labelstring;
    },

    ArtilleryDieAnimation : function() {
        this.user_artillery_Die = true;
        this.user_artillery.color = cc.color(0, 0, 0);
    },

    start () {

    },

    update (dt) {
        this.EnergyFilling(dt);
    },
});
