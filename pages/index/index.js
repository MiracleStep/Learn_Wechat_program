//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    counter: 10
  },
  add(){

    this.setData({
      counter :this.data.counter + 1
    })
  }
})
