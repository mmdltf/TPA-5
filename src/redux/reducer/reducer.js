import { HAPUS_SEMUA, HAPUS_TODO, TAMBAHKAN_TODO, EDIT_TASK, editTask } from "../action/action";
const initialstate = {
  data: [],
};
function todoreducer(state = initialstate, action) {
  switch (action.type) {
    case TAMBAHKAN_TODO:
      return {
        data: [...state.data, action.payload],
      };
    case HAPUS_TODO:
      const todosfilter = state.data.findIndex(
        (item) => item === action.payload
      );
      const datafilter = state.data.splice(todosfilter, 1);
      return {
        data: [...state.data],
      };
    case EDIT_TASK:
      state.data[action.id] = action.payload

      // const editTaskInput = state.data((todo)=>{
      //   if(todo.id === action.id ){
      //      return {
      //       ...todo,
      //       ...editTask
      //      }
      //   }
      //   return todo;

      // })
      console.log(state.data);
      return {
        data: state.data
      }
      
     

      
    case HAPUS_SEMUA: 
      const hapusfilter = state.data.findIndex(
        (item) => item === action.payload
      )
      const hapusfilterloop = state.data.splice (hapusfilter)
      return {
        data: []
      }
    default:
      return state;
  }
}
export default todoreducer;

