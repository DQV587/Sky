
const app=getApp()
Page({onAdd:function(){
  wx.cloud.callFunction({
    name:"deleUser",
    success(res){
        console.log("删除成功",res)
    }
})


}})


// // pages/databaseGuide/databaseGuide.js

// const app = getApp()

// Page({

//   data: {
//     step: 1,
//     counterId: '',
//     openid: '',
//     count: null,
//     queryResult: '',
//   },

//   onLoad: function (options) {
//     if (app.globalData.openid) {
//       this.setData({
//         openid: app.globalData.openid
//       })
//     }
//   },

//   onAdd: function () {
//     const db = wx.cloud.database()
//     db.collection('goods').add({
//       data: {
//         count: 1
//       },
//       success: res => {
//         // 在返回结果中会包含新创建的记录的 _id
//         this.setData({
//           counterId: res._id,
//           count: 1
//         })
//         wx.showToast({
//           title: '新增记录成功',
//         })
//         console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
//       },
//       fail: err => {
//         wx.showToast({
//           icon: 'none',
//           title: '新增记录失败'
//         })
//         console.error('[数据库] [新增记录] 失败：', err)
//       }
//     })
//   },
// })