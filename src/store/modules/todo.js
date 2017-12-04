/*
    把types 物件取代matutaions_type的內容
*/

const types = {
    ADD_TODO :'todo/ADD_TODO',
    DELETE_TODO : 'todo/DELETE_TODO',
    TOGGLE_TODO : 'todo/TOGGLE_TODO',
    UPDATE_TODO : 'todo/UPDATE_TODO'
}


const state = {
    todos: [
        { key:0, content: '吃pizza', done: true },
        { key:1, content: '完創世紀', done: true },
        { key:2, content: '學vue', done: true },
        { key:3, content: '學vuex', done: false },
        { key:4, content: '學vue component extend', done: false },
    ]
}

let todoKey = state.todos.length;
const getters = {

    getDone: state => {
        return state.todos.filter((item) => {
            return item.done;
        })
    },
    getTodo: state => {
        return state.todos.filter((item) => {
            return !item.done;
        })
    }
}

const actions = {
    addTodo( { commit }, newTodo ) {
        commit(types.ADD_TODO, newTodo);
    },

    toggleTodo({ commit }, key ) {
        commit(types.TOGGLE_TODO, key);
    },

    deleteTodo({ commit }, key) {
        commit(types.DELETE_TODO, key);
    },

    updateTodo({ commit }, obj) {
        console.log('updateTodo', obj);
        commit(type.UPDATE_TODO, obj);
    }
}


const mutations = {
    [types.ADD_TODO] (state, newTodo) {
        state.todos.push({
            key: todoKey,
            content: newTodo,
            done: false
        });


        todoKey++;
    },
    [types.TOGGLE_TODO] (state, obj) {
        for (var i in state.todos){
            var item = state.todos[i];
            if (item.key === obj.key){
                item.done = obj.checked;
                console.log('TOGGLE_TODO', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
                break;
            }
        }
    },
    [types.DELETE_TODO] (state, key) {
        for (var i in state.todos){
            var item = state.todos[i];
            if (item.key === key){
                item.done = item.done;
                console.log('DELETE_TODO', item.content, 'index?', i);
                break;
            }
        }
    },
    [types.UPDATE_TODO] (state, obj) {
        //跟鐵人內容不一樣 比較快速寫法
        var item = state.todos.find(item => obj.key === key)
        item.done = obj.checked
        item.content = obj.change;
        console.log('UPDATE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }