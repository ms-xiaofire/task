var param = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*education: [
      {id: 0, name: '博士'},
      {id: 1, name: '硕士'},
      {id: 2, name: '本科'},
      {id: 3, name: '大专'},
      {id: 4, name: '高中'},
      {id: 5, name: '初中以下'}
    ],*/
    education: ['博士','硕士','本科','大专','高中','初中以下'],
    sex: ['男', '女'],
    age: ['18岁以下', '19~24岁', '25~29岁', '30岁以上'],
    base: ['零基础', '1年以下基础', '2~3年基础', '3~5年基础', '5年以上基础'],
    pro: ['理工科', '文科'],
    logic: ['普通','很强','非常强'],
  },
  //普通选择器
  educationChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  sexChange: function(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  ageChange: function(e) {
    this.setData({
      ageIndex: e.detail.value
    })
  },
  baseChange: function(e){
    this.setData({
      baseIndex: e.detail.value
    })
  },
  proChange: function(e) {
    this.setData({
      proIndex: e.detail.value
    })
  },
  logicChange: function(e){
    this.setData({
      logicIndex: e.detail.value
    })
  },
  //跳转职业页面
  checkTap: function(index,sexIndex) {
    wx.navigateTo({
      url: '../profession/profession',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})