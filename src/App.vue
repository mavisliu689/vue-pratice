<template>
  <div id="app">
    <nav class="navbar navbar-default ">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <!-- <router-link class="navbar-brand" :to="{path: '/'}">Ironman2017vue</router-link> -->
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{path: '/hello'}">嗨嗨</router-link></li>
            <li><router-link :to="{path: 'pratice'}">練習一下</router-link></li>
            <li><router-link :to="{path: 'compute'}">溫度轉換</router-link></li>
            <li><router-link :to="{path: 'learnComponent'}">使用component</router-link></li>
            <li><router-link :to="{path: 'count'}">來加減</router-link></li>
            <li><router-link :to="{path: 'todo'}"> 代辦清單 </router-link></li>
            <li><router-link :to="{name: 'shop'}"> 購物車 </router-link></li>
            <li><router-link :to="{name: 'cart'}">Cart</router-link></li>
            <li><router-link :to="{name: 'open1999'}">OpenData Demo歐歐歐</router-link></li>
            <li><router-link :to="{name: 'login'}">login</router-link></li>
            <li><router-link :to="{name: 'filter'}">過濾器</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <router-view></router-view>
    <div class="row">
      <router-view name="viewLeft" class="col-md-6 viewLeft"></router-view>
      <router-view name="viewRight" class="col-md-6 viewRight"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="scss">
  .nested-routes,
  .viewRight {
    border: solid 2px red;
  }
  .viewLeft {
    border: solid 2px blue;
  }
  .loader {

  }
</style>
