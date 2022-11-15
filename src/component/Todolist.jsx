import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completeTask, editTask, tambahkanTodo } from "../redux/action/action";
import { hapuskanTodo } from "../redux/action/action";
import { hapusSemua } from "../redux/action/action";
import { MDBBtn, MDBCard } from "mdb-react-ui-kit";

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Todolist = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editInput, setEditinput] = useState("");
  const [basicModal, setBasicModal] = useState(false);
  const munculPopup = () => setBasicModal(!basicModal);
  const todosdata = useSelector((state) => state.todo.data);

  const Tambah = (e) => {
    e.preventDefault();
    dispatch(
      tambahkanTodo({
        id: Math.floor(Math.random() * 1000),
        title: input,
        status: false,
      })
    );
    console.log(input);
  };
  const EditData = (e, id, payload) => {
    console.log("tes");
    e.preventDefault();
    dispatch(editTask(id, payload));
  };
  const Ubahdata = (e) => {
    setInput(e.target.value);
  };

  console.log(todosdata);
  return (
    <div className="Formdata  ">
      <div className="d-flex justify-content-center">
        <form onSubmit={Tambah} className="Formdatalengkap ">
          <input
            value={input}
            className="mx-3 "
            onChange={Ubahdata}
            type="text"
            name="inputtodo"
          />

          {/* button tambah */}
          <MDBBtn
            className="me-1 fas fa-plus "
            size="lg"
            color="warning"
          ></MDBBtn>
        </form>
        {/* button hapus */}
        <MDBBtn
          className="me-1 far fa-trash-alt mx-1  "
          color="warning"
          size="sm"
          onClick={() => dispatch(hapusSemua())}
        >
          {" "}
        </MDBBtn>
      </div>

      <div className="d-flex justify-content-center flex-wrap mt-5 mb-5 pb-5">
        {todosdata.map((item, index) => (
        <MDBCard key={index} className="mx-5 d-inline-flex p-4   ">
          {item.status ? <del>{item.title}</del> : item.title}

          <MDBBtn
            className="fas fa-trash-alt"
            onClick={() => dispatch(hapuskanTodo(item))}
          ></MDBBtn>

          <MDBBtn
            className="fas fa-edit"
            size="sm"
            onClick={munculPopup}
          ></MDBBtn>
          <MDBBtn
            className=""
            size="sm"
            onClick={() => dispatch(completeTask(item.id))}
          >
            Complete
          </MDBBtn>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    size="sm"
                    onClick={munculPopup}
                  ></MDBBtn>
                </MDBModalHeader>

                <form
                  onSubmit={(e) => EditData(e, item.id)}
                  className="Formdatalengkap text-center"
                >
                  <input
                    value={editInput}
                    onChange={(e) => setEditinput(e.target.value)}
                    type="text"
                    name="inputtodo"
                  />

                  <br></br>
                </form>
                <MDBModalFooter>
                  <MDBBtn
                    color="warning"
                    size="sm"
                    onClick={(e) => EditData(e, item.id, editInput)}
                  >
                    Edit todo
                  </MDBBtn>
                  <MDBBtn color="warning" onClick={munculPopup} size="sm">
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCard>
         ))}
      </div>
      
     
    </div>
  );
};
export default Todolist;
