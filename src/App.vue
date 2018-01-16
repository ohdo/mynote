<template>
  <div id="app">
    <toolbar></toolbar>
    <notelist></notelist>
    <editor></editor>
    <div style="clear:both"></div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import notelist from './components/notelist.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components:{
    Toolbar,
    notelist,
    Editor,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
