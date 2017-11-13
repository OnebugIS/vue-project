import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home"; //@ 是 src 文件夹的绝对路径 ，在webpack.base.conf.js
import Film from "@/components/film";
import Card from "@/components/card";
import Detail from "@/components/detail";

import Nowplaying from "@/components/nowplaying";
import Comingsoon from "@/components/comingsoon";
Vue.use(Router) //安装路由功能

export default new Router({
  mode: "hash", // mode 支持两个值 一个hash ，一个history
  routes: [
    {
    	path:"/home",
    	component:Home
    },
    {
    	path:"/film",
    	component:Film,
        children:[
            {
                path:"nowplaying", // /film/nowplaying    
                component:Nowplaying
            },
            {
                path:"comingsoon",// /film/comingsoon  
                component:Comingsoon
            },
            {
                path:"/",
                redirect:"/film/nowplaying"
            }
        ]
    },
    {
    	path:"/card",
    	component:Card
    },

    // {
    //     path:"/detail",
    //     component:Detail
    // }, //第一种路由配置
    {
        path:"/detail/:kerwinid", //动态路由匹配
        component:Detail,
        name:"detail"
    }, // 第二种 路由配置的写法


    {
    	path:"*",  //任何路径都会匹配到/home 组件中
    	redirect:"/home"
    }

  ]
})
