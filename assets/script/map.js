cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var self =this;
        var sprite = self.getComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame();
        if(pageLevel>5){pageLevel = 5};
        var string = 'resources/Map/'+'map_0'+pageLevel+'.png'
        sprite.spriteFrame.setTexture(cc.url.raw(string));
    },

    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
