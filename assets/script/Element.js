var ItemInfo = {
    yuansuLeftName : cc.Enum({
        '血量' : 0,
        '攻击' : 1,
        '防御' : 2,
        '攻速' : 3,
        '闪避' : 4,
        '命中' : 5,
        '暴击' : 6,
        '格挡' : 7,
    }),
    yuansuLeftType : cc.Enum({
        HP : 0,
        GJ : 1,
        FY : 2,
        GS : 3,
        SB : 4,
        MZ : 5,
        BJ : 6,
        GD : 7,
    }),
    yuansuLeftNum : 8,
    
    yuansuTopName : null,
    yuansuTopType : null,
    yuansuTopNum : 0,

    yuansuBagName : cc.Enum({
        '一级':0,
        '二级':1,
        '三级':2,
        '四级':3,
        '五级':4,
        '六级':5,
    }),
    yuansuBagType : cc.Enum({
        yiji : 0,
        erji : 1,
        sanji : 2,
        siji : 3,
        wuji : 4,
        liuji : 5,
    }),
    yuansuBagNum : 6,
}

module.exports = ItemInfo;
