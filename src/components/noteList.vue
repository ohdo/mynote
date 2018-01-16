<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>{{name}}|{{username}}</h2>
            <div class="btn-group">
                <button type="button" class="btn" :class="{'btn-info':showall,'btn-default':!showall}" @click="showall=true">所有笔记</button>
                <button type="button" class="btn" :class="{'btn-default':showall,'btn-info':!showall}" @click="showall=false">喜欢的</button>
            </div>
        </div>
        <div class="container">
            <ul class="list-group">
                <template v-if="showall">
                    <li class="list-group-item" v-for="item in items" :class="{active: $store.state.activeNote=== item}" @click="updateactive(item)">{{item.title}}</li class="list-group-item" >
                </template>
                <template v-else>
                    <li class="list-group-item" v-for="item in favorite" :class="{active: $store.state.activeNote=== item}" @click="updateactive(item)">{{item.title}}</li class="list-group-item" >
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                showall:true
                }
        },
        computed :{
            //getters
            name(){
                return this.$store.getters.name;
            },
            username(){
                return this.$store.getters.username;
            },
            items(){
                return this.$store.getters.items;
            },
            favorite(){
                return this.$store.getters.favorite;
            }
        },
        methods:{
            updateactive(item){
                this.$store.commit('updateactivenote',item);
            }
        }
    }
</script>
<style scoped>
#notes-list{
    float: left;
    width: 30%;
    height: 758px;
    text-align: center;
    background-color: azure;
}
#notes-list .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
    width: 100%;
    padding: 0;
}
button{
    width: 200px;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
</style>