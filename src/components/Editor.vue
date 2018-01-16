<template>
    <div id="note-editor">
        <input v-model="$store.state.activeNote.title" placehole="这里是笔记title">
        <textarea  v-model="$store.state.activeNote.content" placeholder="这里是笔记内容"></textarea>
		<button class="btn btn-default" @click="addnote">提交</button>
    </div>
</template>
<script>
    export default{
        methods:{
            addnote(){
                this.$store.commit('AddOne');
            }
        }
    }
</script>
<style>
#note-editor{
    float: left;
    width: 65%;
    height: 758px;
    background: rgb(212, 226, 241);
		text-align: center;
}
#note-editor input{
	width: 98%;
	margin: 10px;
	height: 38px;
	font-size: 22px;
	text-align: center;
	border: 0px;
}
#note-editor textarea {
	font-size: 18px;
  width: 98%;
	height: 80%;
  border: 0;
  border-radius: 0;
}
</style>