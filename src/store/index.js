import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);

const KERWIN_CHANGE_TITLE = "kerwinchangetitle";
const COMING_SOON_MUTATION = "comingsoonMutation";


const store = new Vuex.Store({

	state:{
		title:"卖座电影111",
		comingsoonlist:null
	},


	getters:{
		list:function(state){
			return state.comingsoonlist?state.comingsoonlist.data.films:[];
		},
		total:function(state){
			return state.comingsoonlist?state.comingsoonlist.data.page.total:0;
		}
	},


	actions:{
			getComingSoon(store,payload){
				console.log("在vuex 请求数据");

				axios.get(payload).then(res=>{
					console.log(res.data);
					store.commit("comingsoonMutation",res.data);
				})
			},

			aaa:function(){

			}
	},


	mutations:{
		[KERWIN_CHANGE_TITLE]:function(state,payload){
			console.log(payload);
			state.title= payload;
		},

		[COMING_SOON_MUTATION]:function(state,payload){
			state.comingsoonlist= payload;
		}
	}

})


export default store;


//
var name="kerwin"
var obj = {
	[name]:"1111111"
}

console.log(obj);
