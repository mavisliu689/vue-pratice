<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>{{ hello }}</h2> -->
    <!-- <h2>{{ hello + ' and Iroman 2017'}}</h2> -->
    <input type="text" v-model="hello"/>
    <img src="../assets/image/www.jpg">
  </div>
</template>

<script>
export default {
  name: 'pratice',
  data () {
    return {
      msg: 'Welcome to cloudybay web for pratice page XD!!',

      hello: "hello! I'm mavis.....",

      //預設checkbox 是false
      toggle: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<style lang="scss" scoped>
  .hello {
    img {
      width: 50px;
      height: 50px;
    }
  }

</style>
