// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
const db = cloud.database()
exports.main = async (event, context) => {
    await db.collection('user').where({
        userId:"2"
    }).remove().then(res=>{
        console.log("删除了2")
    })
}