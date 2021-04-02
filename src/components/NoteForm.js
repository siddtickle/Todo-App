import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import NoteItem from "./NoteItem";

function TodoForm() {
  const [input, setInput] = useState("");
  const [noteItems, setNoteItems] = useState([]);

  const moveUp = (index) => {
    if (index !== 0 && noteItems.length > 1) {
      const tempArr = [...noteItems];
      let temp = tempArr[index - 1];
      tempArr[index - 1] = tempArr[index];
      tempArr[index] = temp;
      setNoteItems(tempArr);
    }
  };

  const moveDown = (index) => {
    if (index !== noteItems.length - 1 && noteItems.length > 1) {
      const tempArr = [...noteItems];
      let temp = tempArr[index + 1];
      tempArr[index + 1] = tempArr[index];
      tempArr[index] = temp;
      setNoteItems(tempArr);
    }
  };

  const removeTodo = (index) => {
    const tempArr = [...noteItems];
    tempArr.splice(index, 1);
    setNoteItems(tempArr);
  };

  const editTodo = (index, value) => {
    const tempArr = [...noteItems];
    tempArr[index] = value;
    setNoteItems(tempArr);
  };

  const formChanged = (event) => {
    setInput(event.target.value);
  };

  //adding item to an array
  //https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
  const addToList = () => {
    if (input) {
      setNoteItems([...noteItems, input]);
      console.log(noteItems);
      setInput("");
    }
  };

  return (
    <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     width: 800,
    //     border: "4px dotted red",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     paddingTop: 15,
    //     paddingBottom: 15,
    //     position: "sticky",
    //   }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          placeholder="enter a note"
          variant="outlined"
          multiline={true}
          value={input}
          // type="text"
          style={{ width: "100%" }}
          onChange={formChanged}
          //when press enter -> do some function
          //Credit: https://stackoverflow.com/questions/43384039/how-to-get-input-textfield-values-when-enter-key-is-pressed-in-react-js
          //   onKeyPress={(ev) => {
          //     console.log(`Pressed keyCode ${ev.key}`);
          //     if (ev.key === "Enter") {
          //       // Do code here
          //       console.log("ENTER key pressed");
          //       ev.preventDefault();
          //     }
          //   }}
        />
        {/* <div
        style={{
          display: "flex",
          alignContent: "center",
          border: "4px dotted red",
        }}
      > */}
        <Button variant="contained" onClick={addToList}>
          Add Note
        </Button>
      </div>
      {/* </div> */}
      <div>
        {noteItems.map((val, index) => {
          return (
            <NoteItem
              index={index}
              item={val}
              moveUp={moveUp}
              moveDown={moveDown}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoForm;
