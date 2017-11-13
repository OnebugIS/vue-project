<template>
  <div id="app" >
      <navbar>
        <i class="iconfont icon-category" @click="isShow= !isShow"></i>
      </navbar>
      <sidebar v-model="isShow"></sidebar>

     <!--  <a href="#/film">film</a>
            <a href="#/card">card</a>
 -->
      <section>
        <router-view></router-view>
      </section>
      <!-- 路由容器 -->
  </div>
</template>

<script>
import navbar from "@/components/common/navbar";
import sidebar from "@/components/common/sidebar";

export default {
  data(){
    return { 
      datalist:[],
      isShow:false
    }
  },
  mounted(){

  },

  components:{
    navbar,
    sidebar
  },

  methods:{
    handleClick(value){
      this.isShow = value
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0px;
  padding:0px;
}

html,body{
  width:100%;
  height: 100%;
} 

section{
  position: relative;
  margin-top: 50px;
}

</style>
