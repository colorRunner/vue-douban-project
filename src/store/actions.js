import axios from 'axios'
import * as types from './mutation-types.js'


export default {
  getSliders({commit,state}) {
    axios.get('../../static/home/sliders.json').then((response)=>{
      if(response.data.list){
        commit(types.GET_SLIDERS,response.data.list);
      }
    });
  },
  getHotProducts({commit,state}){
    axios.get('../../static/products/products.json').then((response)=>{
      let result = response.data.list;
      if(result){
        commit(types.GET_HOT_PRODUCTS,result.slice(0,6));
      }
    });
  },
  getHotShops({commit,state}){
    state.busy = true;
    axios.get('../../static/home/hot_shop.json').then((response)=>{
      let result = response.data.list.slice(state.num-5,state.num);

      if(result.length !== 0){
        commit(types.GET_HOT_SHOPS,result);
        state.num+=5;
        state.busy = false;
      }
    });
  }
}
