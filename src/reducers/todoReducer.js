const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTASK':
      return [...state, action.data]
  
    case 'DELETETASK':
      return state.filter(item => item.id !== action.id)

    default:
      return state;
  }
}

export default todoReducer;