<template>

	<nav>
		<div class="left">
			<slot></slot>
			<span>{{title}}</span>
		</div>
		<div class="right">
			<span>杭州</span>
			<i class="iconfont icon-account"></i>
		</div>		
	</nav>
</template>

<script>
import { mapState } from "vuex";
export default {

  name: 'navbar',

  data () {
    return {

    }
  },

  computed:{

    // title(){
    //   return this.$store.state.title
    // }
    ...mapState(["title"]),

    getKerwinName:function(){
      return ""
    }
  }

}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

   nav{
   	background-color: #282828;
   	position: fixed;
   	top:0px;
   	left:0px;
   	width: 100%;
   	height: 50px;
   	line-height: 50px;
   	color:white;
    z-index:2;
   		.left{
   			float: left;
   		}

   		.right{
   			float: right
   		}

   }
</style>