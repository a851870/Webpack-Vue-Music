<template>
    <div class="roll" >
		<van-swipe :autoplay="3000"  v-show="rollShow" class="vant">
            <van-swipe-item v-for="(item,index) in forSwipe" :key="index">
                <a v-bind:href="item.url">
                    <img v-bind:src="item.img" v-bind:title="item.title"/>
                </a>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
  import { swipes } from 'root/mock/mock.js'
  
  export default {
      data () {
          return { rollShow: true, forSwipe: [] }
      },
      computed: {
          getState () { return this.$store.state.rollShow }
      },
      watch: {
          getState (val) { this.rollShow = val }
      },
      mounted () {
          this.$ajax.get('http://swipe.cn').then(res => {
              this.forSwipe = res.data.swipeData
          }
          ).catch((error) => console.log(error))
      }

  }
</script>