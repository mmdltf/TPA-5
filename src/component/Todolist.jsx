import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editTask, tambahkanTodo } from "../redux/action/action";
import { hapuskanTodo } from "../redux/action/action";
import { hapusSemua } from "../redux/action/action";
import { MDBBtn, MDBCard } from "mdb-react-ui-kit";

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBInput,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Todolist = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const munculPopup = () => setBasicModal(!basicModal);
  const todosdata = useSelector((state) => state.todo.data);

  const Tambah = (e) => {
    e.preventDefault();
    dispatch(tambahkanTodo(input));
    console.log(input);
  };
  const Ubahdata = (e) => {
    setInput(e.target.value);
  };

  const Editdata = (id, item) => {
    setIsEdit(!isEdit);
    const dataBaru = todosdata.map((item) => {
      if (item === id) {
        item.isEdit = !item.isEdit;
      }
      return item;
    });
    return { todosdata: dataBaru };
  };
  console.log(todosdata);
  return (
    <div className="Formdata text-center">
      <div className="d-flex"></div>
      <form onSubmit={Tambah} className="Formdatalengkap text-center">
        <input value={input} onChange={Ubahdata} type="text" name="inputtodo" />

        <br></br>
        <MDBBtn className="me-1 fas fa-plus " color="warning">
          
        </MDBBtn>
      </form>

      <MDBBtn
        className="me-1 far fa-trash-alt "
        color="warning"
        onClick={() => dispatch(hapusSemua())}
      >
        {" "}
        
      </MDBBtn>
      {/* <button onClick={()=> dispatch(editTask()) }>edit</button>  */}
      {todosdata?.map((item, index) => (
        <MDBCard key={index} className="mx-5 d-flex flex-wrap">
          {item}
          <MDBBtn className="fas fa-trash-alt" onClick={() => dispatch(hapuskanTodo(item))}></MDBBtn>

          <MDBBtn className="fas fa-edit" onClick={munculPopup}></MDBBtn>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={munculPopup}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBInput></MDBInput>
                <MDBModalFooter>

                  <MDBBtn color="warning"   onClick={munculPopup} >Edit todo</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCard>
      ))}
    </div>
  );
};
export default Todolist;
