import {
  HAPUS_SEMUA,
  HAPUS_TODO,
  TAMBAHKAN_TODO,
  EDIT_TASK,
  editTask,
  COMPLETE_TASK,
} from "../action/action";
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
      const edittodo = state.data.map((item) => {
        console.log(action.payload.id);
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.value,
          };
        }
        return item;
      });
      console.log(edittodo);
      return {
        data: edittodo,
      };

    case COMPLETE_TASK:
      const completetodo = state.data.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      });
      console.log(completetodo);
      return {
        data: completetodo,
      };

    case HAPUS_SEMUA:
      const hapusfilter = state.data.findIndex(
        (item) => item === action.payload
      );
      const hapusfilterloop = state.data.splice(hapusfilter);
      return {
        data: [],
      };
    default:
      return state;
  }
}
export default todoreducer;
