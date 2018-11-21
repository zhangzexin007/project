var ItemInfo = {
    zhuangbeiLeftName : cc.Enum({
        '头部' : 0,
        '肩甲' : 1,
        '胸甲' : 2,
        '手部' : 3,
        '裙甲' : 4,
        '腿部' : 5,
        '脚部' : 6,
    }),
    zhuangbeiLeftType : cc.Enum({
        toubu : 0,
        jianjia : 1,
        xiongjia : 2,
        shoubu : 3,
        qunjia : 4,
        tuibu : 5,
        jiaobu : 6,
    }),
    zhuangbeiLeftNum : 7,
    
    zhuangbeiTopName : cc.Enum({
        '碎片' : 0,
        '零件' : 1,
        '部件' : 2,
        '整体' : 3,
    }),
    zhuangbeiTopType : cc.Enum({
        suipian : 0,
        lingjian : 1,
        bujian : 2,
        zhengti : 3,
    }),
    zhuangbeiTopNum : 4,

    zhuangbeiBagName : cc.Enum({
        '一级':0,
        '二级':1,
        '三级':2,
        '四级':3,
        '五级':4,
        '六级':5,
    }),
    zhuangbeiBagType : cc.Enum({
        yiji : 0,
        erji : 1,
        sanji : 2,
        siji : 3,
        wuji : 4,
        liuji : 5,
    }),
    zhuangbeiBagNum : 6,
}


module.exports = ItemInfo;
