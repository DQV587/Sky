Page({
    navitologin:function(){
        wx.navigateTo({
          url: '../login/login',
        })
    },
    navitoreg:function(){
        wx.navigateTo({
          url: '../reg/reg',
        })
    },
    navitoabout:function(){
        wx.navigateTo({
          url: '../about/about',
        })
    },
})