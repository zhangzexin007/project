var ItemInfo = {
    hejinLeftName : cc.Enum({
        '合金' : 0,
        '元素' : 1,
    }),
    hejinLeftType : cc.Enum({
        Alloy : 0,
        Element : 1,
    }),
    hejinLeftNum : 2,
    
    hejinTopName : null,
    hejinTopType : null,
    hejinTopNum : 0,

    hejinBagName : cc.Enum({
        '一级':0,
        '二级':1,
        '三级':2,
        '四级':3,
        '五级':4,
        '六级':5,
    }),
    hejinBagType : cc.Enum({
        yiji : 0,
        erji : 1,
        sanji : 2,
        siji : 3,
        wuji : 4,
        liuji : 5,
    }),
    hejinBagNum : 6,
    yuansuBagName : null,
    yuansuBagType : null,
    yuansuBagNum : 1,
}

module.exports = ItemInfo;