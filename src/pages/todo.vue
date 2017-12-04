<template>
    <div class="container">
        <h1>哇哇哇是清單耶~~~</h1>
        <hr>
        <div class="row">
            <div class="input-group col-md-4">
                <input
                    type="text"
                    class="form-control"
                    placeholder="add Todo.."
                    v-model="newTodo"
                    @keyup.enter="actionAddTodo" />
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button" @click="actionAddTodo">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <h2>Todo List:</h2>
                    <!-- <li v-for="(item, index) in todoList">
                        <label>
                            <input
                                type="checkbox"
                                checked="item.done"
                                @change="toggleTodo( item.key)" />
                        {{ item.content }}
                        </label> -->
                    <ol>
                        <todo-item v-for="(item, index) in todoList" :item="item" :key="index" />
                    </ol>
                        <!--刪除按鈕
                        -->
                        <!-- <button class="btn btn-xs btn-danger" @click="deleteTodo( item.key)">
                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button> -->

            </div>
            <div class="col-md-6">
                <h2>Done List:</h2>
                <!-- <ul>
                    <li v-for="(item, index) in doneList">
                        <label>
                            <input
                            type="checkbox"
                            checked="item.done"
                            @change="toggleTodo( item.key)">
                            {{ item.content }}
                        </label>
                    </li>
                </ul> -->
                    <ol>
                         <li v-for="(item, index) in doneList">
                            <custom-checkbox :item="item" @toggleTodo="toggleTodo" />
                        </li>
                    </ol>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import todoItem from '@/components/todoItem'
import customCheckbox from '@/components/customCheckbox'
export default {
    components:{
        todoItem, //用來包裝數據
        customCheckbox
    },
    data () {
        return {
            newTodo: ''
        }
    },
    computed: mapGetters({
        todoList: 'getTodo',
        doneList: 'getDone',
    }),
    methods: {
        ...mapActions([
            // 'addTodo'//第一種方法要先引入
            'toggleTodo',
            'deleteTodo'
        ]),
        actionAddTodo () {
            //第一種方法要先引入
            // this.addTodo( this.newTodo )
            //不須引入Action就可以直接呼叫
            this.$store.dispatch('addTodo', this.newTodo);
            this.newTodo = '';
        },

    }
}
</script>