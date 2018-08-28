// components/postItem.js
let utils = require('../../utils/utils.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toThreadDetail(e) {
      utils.toThreadDetail(e);
    }
  }
})