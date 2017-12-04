
<template>
<div>
  <!--這邊需要去改一下設定才可以run-->
  <div class="col-md-4" v-for="item in list">
      <h2>{{ item.title }}</h2>
      <p>{{ item.info }}</p>
      <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
  </div>
</div>

</template>
<script>
export default {
  // vue option 當中有 props 開發區域
  props: {
    // attribute name: Type
    list: Array
  },
}
</script>