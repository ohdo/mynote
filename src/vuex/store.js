import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        //在mainjs中对state数据进行获取
        notedata:{},
        name:"NoteList",
        username:"",
        items:[],
        activeNote:'noactiveNote',
    },
    getters:{
        name:state=> state.name,
        username: state => state.username,
        items:state => state.items,
        favorite(state){
            return state.notedata.item.filter(itemtpm=>{
                return itemtpm.favorite;
            })
        }
    },
    mutations:{
        ADD_NOTE:state=>{
            let id=++(state.notedata.idmax);
            const newNote = {
                "id": id,
                "title": "请输入笔记title",
                "content": '请输入笔记内容',
                "favorite":false
            };
            state.items.push(newNote);
            state.activeNote=newNote;
        },
        Remove_NOTE:state=>{
            if((!state.activeNote)||state.activeNote=='noactiveNote'){
                return 0;
            }else{
                const activenoteIndex = state.items.findIndex(item => {
                    return state.activeNote == item;
                })
                state.notedata.item.splice(activenoteIndex, 1);
                state.activeNote=state.notedata.item[state.notedata.item.length-1];
            }
            
        },
        favorite:state=>{
            if((!state.activeNote)||state.activeNote=='noactiveNote'){
                return 0;
            }else{
                const activenoteIndex = state.items.findIndex(item => {
                    return state.activeNote == item;
                })
                state.notedata.item[activenoteIndex].favorite=!(state.notedata.item[activenoteIndex].favorite);
                alert("OK");
            }
        },
        updateactivenote:(state,notes)=>{
            state.activeNote=notes;
        },
        AddOne:state=>{
            axios.post('/api/addnote',state.notedata)
              .then(function (response) {
                console.log("成功更新笔记信息");
              })
        }

    }
})