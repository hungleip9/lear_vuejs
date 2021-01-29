<template>
 <div>
   <div class="todoDetail" v-for="(todo,index) in todos" :key="todo.id">
     <div class="todoCheck">
       <input type="checkbox" @click="todo.status = !todo.status" :checked="todo.status">
     </div>
     <div class="todoText" :class="{todoSuccess : todo.status}">
       {{todo.name}}
     </div>
     <div class="deleteTodos" v-if="todo.status">
       <input type="button" value="Xóa" @click="deleteTodos(index)">
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  
  name: "TodoItem",
  methods:{
    ...mapMutations([
         'deleteTodo'
      ]),
    deleteTodos(index){
        this.deleteTodo(index)
      }
  },
  computed:{
    
      ...mapGetters([
        'todos',
      ]),
  },
}
</script>

<style scoped lang="scss">
.todoDetail {
  display: flex;
  width: 94%;
  margin-left: 30px;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #ddd;

  .todoCheck {
    margin: 0 15px;
  }

  .todoText {
    width: 70%;
    text-align: left;
  }

  .todoSuccess{
    text-decoration-line: line-through;
  }

  .deleteTodo {
    width: 10%;

    input {
      width: 100%;
      height: 35px;
      border-radius: 3px;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      background-color: #dd1a00;
    }

  }
}
</style>