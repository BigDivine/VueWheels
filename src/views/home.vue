<template>
  <div>
    <y-header
      :show-back="true"
      :custom-back="true"
      title="标题"
      back-text="返回"
      @back-click="backClick"
    >
      <div slot="right">更多</div>
    </y-header>
    <div>
      <li v-for="i in 100" :key="i">{{i}}</li>
    </div>
  </div>
</template>
<script>
export default {
	methods: {
		backClick() {
			console.log('aaa');
		},
	},
};
</script>
<style lang="less" scoped>
</style>
