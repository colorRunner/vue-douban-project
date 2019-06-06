<template>
    <div class="db_header">
      <div class="db_header_main">

        <div class="db_logo_box">
          <div class="db_logo_text">豆瓣市集</div>
          <div class="db_search_icon"><i class="fa fa-search"></i></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
  .db_header .db_header_main{
    position: relative;
    z-index: 110;
    overflow: hidden;
    background-color: #68cb78;
  }
  /* logo盒子css */
  .db_header .db_logo_box{
    height: 50px;
    line-height: 50px;
  }
  .db_header .db_logo_text{
    display: inline-block;
    color: #fff;
    font-size: .8rem;
    font-weight: 600;
    margin: 0 .5rem;
  }
  .db_header .db_search_icon{
    float: right;
    padding: 0 20px;
    cursor: pointer;
  }
  .db_header .db_search_icon i{
    color: #fff;
    font-size: .7rem;
    vertical-align: sub;
  }
  /* search盒子css */
  .db_header .db_search_box{
    position: relative;
    height: 30px;
    margin:20px 30px;
    padding: 0 20px;
    border: 1px solid #fff;
    border-radius: 30px;
  }
  .db_header .ipt_search{
    width: 100%;
    line-height: 30px;
    border: none;
    color: #fff;
    background-color: transparent;
  }
  .db_header .btn_search{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: block;
    line-height: 30px;
    padding: 0 15px;
    color: #fff;
    font-size: .5rem;
  }
  .db_header .db_mask{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
