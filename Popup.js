import wepy from 'wepy';

export default class Popup extends wepy.component {
  props = {
    isShow: {
      type: Boolean,
      value: true
    },
    width: {
      type: Number,
      value: 0
    },
    height: {
      type: Number,
      value: 0
    }
  }

  methods = {
    hide() {
      this.$emit('hide')
    },

    catchForNotHide() {
      console.log("do nothing")
    }
  }
}