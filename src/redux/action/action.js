export const TAMBAHKAN_TODO = "TAMBAHKAN_TODO";
export const HAPUS_TODO = "HAPUS_TODO";
export const FILTER_TODO = "FILTER_TODO";
export const HAPUS_SEMUA = "HAPUS_SEMUA";
export const EDIT_TASK = "EDIT_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const COMPLETE_PROGRESS = "COMPLETE_PROGRESS"
export const tambahkanTodo = (todo) => {
  return {
    type: TAMBAHKAN_TODO,
    payload: todo,
  };
};

export const hapuskanTodo = (payload) => {
  return {
    type: HAPUS_TODO,
    payload,
  };
};
export const hapusSemua = (payload) => {
  return {
    type: HAPUS_SEMUA,
    payload,
  };
};

export const editTask = (id, payload) => {
  return {
    type: EDIT_TASK,
    payload: {
      id: id,
      value: payload,
    },
  };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};


// export const completeProgress = (payload) = {
//     return {
//         type : COMPLETE_PROGRESS,
//         payload: id
//     }
// }