<!-------------------------------------------------------------------
- Author        : yangzelong
- Email         : yangzelong@jiuqi.com.cn
- Create Date   : 2020-06-1
- Filename      : 头部bar
- Description   :
- Arguments     :
--------------------------------------------------------------------->
<template>
  <div
    :class="isIphoneX ? 'paddingTop' : ''"
    class="YHeader"
    style="
      background-color: #2dc6d5;
      display: flex;
      height: 45px;
      line-height: 45px;
      width: 100%;
      position: fixed;
      color:#ffffff;
    "
  >
    <div style="position:absolute;display: flex; width: 100%">
      <div
        v-show="showBack || backText"
        style="display: flex; flex: 1; align-items: center"
        @click="goBack"
      >
        <img
          v-show="showBack"
          src="@/assets/phone/ic_arrow_left.png"
          style="margin: 0px 10px 0px 16px; width: 10px; height: 20px"
        />
        {{ backText }}
      </div>
      <div style="flex: 1; text-align: center">
        {{ title }}
      </div>
      <div style="display: flex; flex: 1; justify-content: flex-end">
        <div style="margin: 0px 16px 0px 10px">
          <slot style="margin: 0px 16px 0px 10px" name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'YHeader',
	props: {
		showBack: {
			// 是否显示返回按钮
			type: [Boolean, String],
			default: true,
		},
		customBack: {
			// 是否自定义返回方法
			type: Boolean,
			default: false,
		},
		backText: {
			// 返回文字
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			isIphoneX: false,
		};
	},
	created() {},
	mounted() {
		this.isIphoneX = this.PhoneOS === 'iOS-iPhoneX';
	},
	methods: {
		goBack() {
			if (this.customBack) {
				this.$emit('back-click');
			} else {
				this.$router.go(-1);
			}
		},
	},
};
</script>

<style lang="less" scoped>
.YHeader {
  .fixHeader {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 50px;
    font-size: 17px;
    color: #fff;
    padding-top: 10px;
    line-height: 50px;
    text-align: center;
    .headerContent {
      font-size: 18px;
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .leftBack {
        width: 150px;
        font-size: 16px;
        text-align: left;
        height: 50px;
        display: flex;
        align-items: center;
        .returnIcon {
          width: 11px;
          height: 20px;
          vertical-align: middle;
        }
        .returnIcon:active {
          opacity: 0.7;
        }
      }
      .rightFun {
        height: 50px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .paddingTop {
    padding-top: 22px;
  }
}
</style>

