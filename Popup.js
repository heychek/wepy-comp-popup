import wepy from 'wepy';

export default class Popup extends wepy.component {
  props = {
    isShow: {
      type: Boolean,
      value: true
    },
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
