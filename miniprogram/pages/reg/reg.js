Page({
    data:{ 
        userId:'',
        password:''
    },
    create_user:function(e){
        const db=wx.cloud.database()
        
        var thiz=this

        var flag1=0
        var flag2=0
        var flag3=0
        if(e.password1!=e.password2){
            flag1=1
        }
        
        db.collection('user').where({userId:e.detail.value.username}).get({
            success:function(res){
               
                console.log(res)
                if(res.data.length!=0){
                    flag2=1
                }
                if(flag2===1){
                    wx.showToast({
                        title: '用户名已被注册',
                        icon: 'none',
                        duration: 2000//持续的时间
                      })
                      flag3=1
                }
                if(flag1===1){
                    wx.showToast({
                        title: '两次密码输入不同',
                        icon: 'none',
                        duration: 2000//持续的时间
                      })
                      flag3=1
                }
                if(flag3===1){
                    thiz.setData({
                        username:"",
                        password1:"",
                        password2:""
                    })
                }
                if(flag3===0){
        
                    db.collection('user').add({
                    data:{
                    userId:e.detail.value.username,
                    password:e.detail.value.password1,
                    }
                    })
                    wx.showToast({
                        title: '注册成功!\n页面将在3秒后跳转',
                        icon: 'none',
                        duration: 2000//持续的时间
                      }).then(
                        setTimeout(function () {
                            wx.reLaunch({
                            url: '../login/login'
                            })
                            }, 3000)
                        )
                }

            }})
                      
                   
                

            
            
        
        // .then(res=>{console.log(res.data.length) 
        //     if(res.data.length===0)flag2=1}).then(console.log(flag2))



        
            // .then(res=>{
            //     console.log(res)
            // })     
}}
)