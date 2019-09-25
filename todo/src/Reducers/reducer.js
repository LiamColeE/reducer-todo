export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let todos = state.todos;
            todos.push({
                item: action.payload,
                completed: false,
                id: new Date()
            });
            return {...state, todos};

        case 'REMOVE_TODO':
            let removeArr = state.todos;

            removeArr = removeArr.filter(obj => obj.completed === false);

            return {...state, todos:removeArr};

        case 'TOGGLE_COMPLETE':
            let toggleArr = state.todos;

            toggleArr.find((element) => {
                return element.id === action.payload
            }).completed = !toggleArr.find((element) => {
                return element.id === action.payload
            }).completed;

            return {...state, todos:toggleArr};

        default:
            return state;
    }
}

export const defaultState = {
    todos:
    [
    {
      item: "stuff1",
      id: "1",
      completed: false
    },
    {
      item: "stuff2",
      id: "2",
      completed: false
    },
    {
      item: "stuff3",
      id: "3",
      completed: false
    }
  ]};