var ItemInfo = {
    paoLeftName : cc.Enum({
        '炮身' : 0,
        '炮架' : 1,
        '底座' : 2,
        '炮弹' : 3,
    }),
    paoLeftType : cc.Enum({
        paoshen : 0,
        paojia : 1,
        dizuo : 2,
        paodan : 3,
    }),
    paoLeftNum : 4,
    
    paoTopName : cc.Enum({
        '碎片' : 0,
        '零件' : 1,
        '部件' : 2,
        '整体' : 3,
    }),
    paoTopType : cc.Enum({
        suipian : 0,
        lingjian : 1,
        bujian : 2,
        zhengti : 3,
    }),
    paoTopNum : 4,

    paoBagName : cc.Enum({
        '一级':0,
        '二级':1,
        '三级':2,
        '四级':3,
        '五级':4,
        '六级':5,
    }),
    paoBagType : cc.Enum({
        yiji : 0,
        erji : 1,
        sanji : 2,
        siji : 3,
        wuji : 4,
        liuji : 5,
    }),
    paoBagNum : 6,
}

module.exports = ItemInfo;
