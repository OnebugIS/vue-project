<template>
	<div>
		<ul
    >
			<li v-for="data in list" >
				<img :src="data.poster.origin"/>
				<div>
					<h3>{{data.name}}</h3>
					<p>{{data.intro}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters } from "vuex";
export default {

  name: 'comingsoon',

  data () {
    return {

    }
  },

  mounted(){
  	//dispath 消息 给action 
    
    if(!this.$store.state.comingsoonlist){
      this.$store.dispatch("getComingSoon","/v4/api/film/coming-soon?page=1&count=7");
    }
  	
  },

  computed:{
  	// comingsoonList:function(){
  	// 	return this.$store.state.comingsoonlist?this.$store.state.comingsoonlist.data.films:[]
  	// },
   //      total:function(){
   //    return this.$store.state.comingsoonlist?this.$store.state.comingsoonlist.data.films:
   //  }
    ...mapGetters(["list","total"])
  }
}
</script>

<style lang="scss" scoped>
  ul{
    li{
      list-style: none;
      padding:10px;
      overflow:hidden;
      img{
        float:left;
        width: 100px;
      }

      div{
        // float:left;
      }
    }
  }
</style>