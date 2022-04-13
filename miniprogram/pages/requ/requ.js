//index.js
const db = wx.cloud.database()
const goods = db.collection('goods')

Page({

  /**
   * 页面的初始数据
   */
  data: {

    goodList: []

  },

  /**
   * 自定义函数--跳转新页面显示图书详情
   */
//   showGoodIntro: function(e) {
//     // console.log(e.currentTarget.dataset.id)
//     // 获取图书id
//     let id = e.currentTarget.dataset.id
//     // 跳转新页面
//     wx.navigateTo({
//       url: '../intro/intro?id=' + id,
//     })
//   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    // 从云端读取图书信息
    goods.get({
      success: res => {
          console.log("233333333333")
          console.log(res.data)
  
        this.setData({
          goodList: res.data
        })
       
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})