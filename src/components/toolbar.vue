<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="favorite" class="glyphicon glyphicon-star"></i>
        <i @click="remove" class="glyphicon glyphicon-remove"></i>
    </div>
</template>
<script>
export default {
  methods:{
    addNote(){
      this.$store.commit('ADD_NOTE');
    },
    remove(){
      this.$store.commit('Remove_NOTE');
    },
    favorite(){
      this.$store.commit('favorite');
    }
  }
}
</script>

<style>
#toolbar{
  float: left;
  width: 5%;
  padding: 10px;
  background: rgb(4, 133, 167);
  height:758px ;
  text-align: center;
  
}
#toolbar i{
  display: block;
  font-size: 30px;
  cursor: pointer;
    opacity: 0.8;
  transition: opacity 0.5s ease;
  padding: 18px 12px;
}
</style>
