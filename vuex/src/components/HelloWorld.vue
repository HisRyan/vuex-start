<template>
  <div class="hello">
   <button @click="addCount()">点击增加</button>
    <button @click="reduceCount()">点击减少</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      find: {
        add() {
          console.log(123)
        },
        ads() {
          console.log(456)
        }
      }
    }
  },
  methods: {
    addCount() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      this.find.add()
    },
    reduceCount() {
      this.$store.commit('reduce')
      console.log(this.$store.state.count)
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
