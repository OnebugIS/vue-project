<template>
   <div>
   	
   	 <el-radio v-model="radio" label="1">备选项1</el-radio>
  	 <el-radio v-model="radio" label="2">备选项2</el-radio>

  	 <el-switch
	  v-model="value2"
	  active-color="#13ce66"
	  inactive-color="#ff4949">
	</el-switch>

	<el-carousel :interval="4000" type="card" height="200px">
	    <el-carousel-item v-for="item in 6" :key="item">
	      <h3>{{ item }}</h3>
	    </el-carousel-item>
  	</el-carousel>


    <mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>

   </div>
</template>

<script>
export default {


  data () {
    return {
    	radio:"2",
    	value2: false
    }
  }
}
</script>

<style lang="css" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>