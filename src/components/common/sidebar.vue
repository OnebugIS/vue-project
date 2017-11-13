<template>
  <transition name="bounce" >
	<aside v-show="value">
		<ul @click="handleClick()">
			<router-link to="/home" tag="li" activeClass="kerwinactive">home</router-link>
      		<router-link to="/film" tag="li" activeClass="kerwinactive">film</router-link>

      		<router-link to="/card" tag="li" activeClass="kerwinactive">card</router-link>
		</ul>
	</aside>
  </transition>
</template>

<script>
export default {

  name: 'sidebar',

  data () {
    return {

    }
  },
  props:["value"], 

  methods:{
  	handleClick(){
  		this.$emit("input",false);
  	}
  }
}
</script>

<style lang="scss" scoped>

   aside{
   		position:fixed;
   		left:0px;
   		top:50px;
   		width: 50%;
   		height: 100%;
   		background-color: #282828;
   		color:white;
      z-index:23;
   		ul{
   			li{
   				list-style: none;
   				padding: 10px;
   			}
   		}
   }

    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0%{
        transform: translateX(-100%);
        opacity: 0;
      }

      100%{
        transform: translateX(0px);
        opacity: 1;
      }
    }

    .kerwinactive{
      background-color:red;
    }
</style>