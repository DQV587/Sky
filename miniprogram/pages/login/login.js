// pages/login/login.js
Page({
  create_login: function (e) {
    var flag1 = 1 //查找userId
    var flag2 = 1
    var thiz = this
    
    const db = wx.cloud.database()

    db.collection("user").where({
      userId: e.detail.value.username
    }).get({
      success: function (res) {
        
        if (res.data.length === 0) {
          flag1 = 0 //未找到
        }
        
        setTimeout(function () {
          if (flag1 === 1) {
            if (res.data[0].password !== e.detail.value.password) {
              flag2 = 0
            }
          }
          
          if (flag2 === 1) {
            wx.showToast({
              title: '登陆成功!\n页面将在3秒后跳转',
              icon: 'none',
              duration: 2000 //持续的时间
            }).then(()=>{
              setTimeout(function () {
                wx.navigateTo({
                  url: '../index/index'
                })
              }, 3000)
            }
            )
          } else if (flag2 === 0) {
            wx.showToast({
              title: '密码错误!',
              icon: 'none',
              duration: 3000 //持续的时间
            }).then(function () {
              thiz.setData({
                password: ""
              })
            })
          } else if (flag1 === 0) {
            wx.showToast({
              title: '该用户名未被注册!',
              icon: 'none',
              duration: 3000 //持续的时间
            })
          }
        }, 200)
      }
    })
  },
  navitoreg: function () {
    wx.navigateTo({
      url: '../reg/reg',
    })
  },
  navitoupdate: function () {
    wx.navigateTo({
      url: '../update/update',
    })
  },
  navitoindex: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  }
})