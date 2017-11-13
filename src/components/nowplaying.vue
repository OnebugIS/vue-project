<template>
	<div>
		<ul
    v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
  infinite-scroll-immediate-check ="false"
    >
			<li v-for="data in datalist" @click="handleClick(data.id)">
				<img :src="data.poster.origin"/>
				<div>
					<h3>{{data.name}}</h3>
					<p>{{data.intro}}</p>
				</div>
			</li>
		</ul>

    <div>{{text}}</div>
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {

  name: 'nowplaying',

  data () {
    return {
    	datalist:[],
      loading:false, //控制无限滚动组件 是否禁用
      current:1,  //表示第几页数据
      total:0,
      text:"正在加载数据中..."
    }
  },

  mounted(){
  		// axios 是一个http 请求的库， 基于promsie 封装的
  		axios.get("/v4/api/film/now-playing",{
  			params:{
  				page:this.currrent,
  				count:7
  			}
  		}).then(res=>{
  			console.log(res.data);
  			this.datalist = res.data.data.films;
        this.total = res.data.data.page.total;
  		})

  		// axios.post("/",{
  		// 	name:"kerwin",
  		// 	age:100
  		// }).then(res=>{
  		// 	console.log(res)
  		// })
  },

  methods:{
  	handleClick(id){
  		//编程式跳转
  		// console.log(id);
  		//第一种方式 类似于 get 请求传参
  		// router.push(`/detail?id=${id}`);
  		// 第二种方式 
  		//router.push(`/detail/${id}`); // /detail/3928
  		router.push({name:"detail",params:{kerwinid:id}});
  	},

    loadMore(){
      console.log("到底部");

      this.current++;

      if(this.current>this.total){
        this.loading = true; //禁用滚动加载功能
        this.text="没有数据了";
        return ;
      }

      axios.get("/v4/api/film/now-playing",{
        params:{
          page:this.current,
          count:7
        }
      }).then(res=>{
        console.log(res.data);
        //es6 的数组展开与合并
        this.datalist = [...this.datalist,...res.data.data.films];
      })
    }
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