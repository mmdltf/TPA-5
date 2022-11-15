import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Onprogress = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editInput, setEditinput] = useState("");
  const [basicModal, setBasicModal] = useState(false);
  const munculPopup = () => setBasicModal(!basicModal);
  const todosdata = useSelector((state) => state.todo.data);

  const todoSelesai = (id) => {
  
  return (
      <div>

  </div>
  )

};
}
export default Onprogress;
