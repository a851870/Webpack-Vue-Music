<template>
	<nav class="nav">
		<van-tabs @click="handleTabClick" :active="active">
  			<van-tab v-for="index in 4" :title="title[index-1]" :key="index">
  			</van-tab>
		</van-tabs>

	</nav>
</template>

<script>
export default {
    data () {
        return {
            active: 0,
            title: ['我的', '推荐', '歌单', '排行']
        }
    },
    computed: {
        getStateNum () {
            return this.$store.state.navNum
        }
    },
    watch: {
        getStateNum (val) {
            this.active = val
        }
    },
    methods: {
        handleTabClick (index) {
            this.$store.state.navNum = index
        }
    }
}
</script>
