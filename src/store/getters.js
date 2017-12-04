// export const getCount = state => { return state.count }

// export const getTodos = state => state.todos;


// //實作已完成未完成
// export const getDone = state => {
//     return state.todos.filter((item) => {
//         return item.done;
//     })
// }

// export const getTodo = state => {
//     return state.todos.filter((item) => {
//         return !item.done;
//     })
// }

export const getCountandTodo = state => {
    return {
      count: state.count.count,
      todo: state.todo.todos,
    }
  }

  // just return all state
export const getAllstate = state => state

// loading state
export const getLoading = state => state.loading

// Language
export const getLanguage = state => state.lang