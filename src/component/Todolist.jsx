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
            placeholder="apa kegiatan mu hari ini?"
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

      <div className="d-flex mx-6 my-6 px-5 flex-wrap mt-5
        ">
        {todosdata.map((item, index) => (
          <div style={{
            animation:'ease-in'
          }} >
            <MDBCard key={index} className=" d-inline-flex flex-wrap p-5    ">
          {item.status ? <del>{item.title}</del> : item.title}
          <div className="d-flex mt-5 mb-1">
            <MDBBtn
            className="fas fa-trash-alt d-flex justify-content-center"
            id="btncheck"
            color="warning"
            onClick={() => dispatch(hapuskanTodo(item))}
          ></MDBBtn>

          <MDBBtn
            className="fas fa-edit d-flex justify-content-center"
            id="btncheck"
            color="info"
            onClick={munculPopup}
          ></MDBBtn>
          <MDBBtn
            className="fas fa-check d-flex justify-content-center"
            id="btncheck"
            fas icon="check"
            color="success"
            onClick={() => dispatch(completeTask(item.id))}
          >
            
          </MDBBtn>
          </div>
          
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBBtn
                    className="btn-close "
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
          </div>
        
         ))}
      </div>
      
     
    </div>
  );
};
export default Todolist;
