// pages/index/index.js
Page({
    navitorequ:function(){
        wx.navigateTo({
          url: '../requ/requ',
        })
    },
    
    navitocomm:function(){
        wx.showToast({
          title: '已经取件!请在指定区域耐心等待!',
        })
    }
    }
)