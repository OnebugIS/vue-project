<template>
   <div>
   	  <swipe class="my-swipe">
		  <swipe-item v-for="data in looplist">
		  	<img :src="data.imageUrl"/>
		  </swipe-item>
		  
		</swipe>

		<div class="nowplaying">
			<ul>
				<li v-for="data in datalist">
					<img :src="data.cover.origin"/>
					<h3>{{data.name}}</h3>
					<p>{{data.intro}}</p>
				</li>
			</ul>
		</div>
   </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css"; //css 模块化 导入
import { Swipe, SwipeItem } from 'vue-swipe';
import { Indicator } from 'mint-ui';

export default {

  name: 'home',

  data () {
    return {
    	looplist:[],
    	datalist:[]
    }
  },

  mounted(){
    Indicator.open('Loading...');


  	fetch("/v4/api/billboard/home?__t=1510282324021").then(res=>res.json()).then(res=>{
  		// console.log(res);
  		this.looplist = res.data.billboards;

      Indicator.close();

  	})

 
  	fetch("/v4/api/film/now-playing?__t=1510282324084&page=1&count=5").then(res=>res.json()).then(res=>{
  		console.log(res);
  		this.datalist  =res.data.films
  	})

    //Promise.all([]).then(res=>{
    //})
  },

  components:{
  	swipe:Swipe,
  	"swipe-item":SwipeItem
  }
}
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 200px;
  img{
  	width: 100%;
  }
}
.nowplaying{
	li{
		list-style: none;
		padding:10px;
		img{
			width:100%;
		}
	}
}
</style>