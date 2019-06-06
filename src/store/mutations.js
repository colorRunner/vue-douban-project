import {
  GET_SLIDERS,
  GET_HOT_PRODUCTS,
  GET_HOT_SHOPS,
  IS_SHOW_LOADING_TIPS,
  IS_SHOW_LOADED_TIPS
} from './mutation-types.js'


export default {
  [GET_SLIDERS](state,list){
    state.sliders = list;
  },
  [GET_HOT_PRODUCTS](state,list){
    state.hotProducts = list;
  },
  [GET_HOT_SHOPS](state,list){
    state.hotShops = state.hotShops.concat(list);
  },
  [IS_SHOW_LOADING_TIPS](state,bool){
    state.isShowLoadingTips = bool;
  },
  [IS_SHOW_LOADED_TIPS](state,bool){
    state.isShowLoadedTips = bool;
  }
}
