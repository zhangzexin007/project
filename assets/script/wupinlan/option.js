cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        var buttonMgrJS = self.node.getChildByName('buttonMgr');
        buttonMgrJS.active = true;
    },
   
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});




