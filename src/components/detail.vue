<template>
	<div v-if="filminfo">
		<img :src="filminfo.cover.origin"/>
		<h2>{{filminfo.name}}</h2>
		<p>{{filminfo.synopsis}}</p>
	</div>
</template>

<script>
import axios from "axios";
export default {

  name: 'detail',

  data () {
    return {
    	filminfo:null
    }
  },
  mounted(){
  	//获取id 值
  	//第一种 获取id 的方式
  	//console.log(this.$route.query.id);

  	//第二种 获取id 方法
  		console.log(this.$route.params.kerwinid);

  	 axios.get(`/v4/api/film/${this.$route.params.kerwinid}?__t=1510297476746`).then(res=>{
  	 	console.log(res.data);
  	 	this.filminfo = res.data.data.film

        // 提交数据到mution 中
        this.$store.commit("kerwinchangetitle",this.filminfo.name);
  	 })
  }
}
</script>

<style lang="scss" scoped>

  div{
  	img{
  		width: 100%;
  	}
  }
</style>