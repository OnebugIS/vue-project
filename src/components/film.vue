<template>
   <div>
   	
   	  <div class="header">
   	  	<ul>
   	  	    <!-- 声明式跳转 -->
   	  		<router-link tag="li" to="/film/nowplaying" activeClass="active">正在热映</router-link>
   	  		<router-link tag="li" to="/film/comingsoon" activeClass="active">即将上映</router-link>
   	  	</ul>
   	  </div>
   	  <router-view></router-view>
   </div>
</template>

<script>
export default {


  data () {
    return {

    }
  },

  mounted(){
  	 this.$store.commit("kerwinchangetitle","卖座电影");
  }
}
</script>

<style lang="scss" scoped>
	.header{
		ul{
			display: flex;

			li{
				list-style: none;
				flex:1;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
		}
	}

	.active{
		background: red;
	}
</style>