import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import TodoItem from "./TodoItem";

function TodoForm() {
  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const moveUp = (index) => {
    if (index !== 0 && todoItems.length > 1) {
      const tempArr = [...todoItems];
      let temp = tempArr[index - 1];
      tempArr[index - 1] = tempArr[index];
      tempArr[index] = temp;
      setTodoItems(tempArr);
    }
  };

  const moveDown = (index) => {
    if (index !== todoItems.length - 1 && todoItems.length > 1) {
      const tempArr = [...todoItems];
      let temp = tempArr[index + 1];
      tempArr[index + 1] = tempArr[index];
      tempArr[index] = temp;
      setTodoItems(tempArr);
    }
  };

  const removeTodo = (index) => {
    const tempArr = [...todoItems];
    tempArr.splice(index, 1);
    setTodoItems(tempArr);
  };

  const editTodo = (index, value) => {
    const tempArr = [...todoItems];
    tempArr[index] = value;
    setTodoItems(tempArr);
  };

  const markComplete = (index) => {
    const tempArr = [...todoItems];
    //tempArr[index] = tempArr[index].strike();
    tempArr[index] = "Done!";
    setTodoItems(tempArr);
  };

  const formChanged = (event) => {
    setInput(event.target.value);
  };

  //adding item to an array
  //https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
  const addToList = () => {
    if (input) {
      setTodoItems([...todoItems, input]);
      console.log(todoItems);
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
      <TextField
        placeholder="enter something"
        variant="outlined"
        multiline={true}
        value={input}
        // type="text"
        fullWidth
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
        Add Todo Item
      </Button>
      <Button variant="contained">Add Note</Button>
      {/* </div> */}
      <div>
        {todoItems.map((val, index) => {
          return (
            <TodoItem
              index={index}
              item={val}
              moveUp={moveUp}
              moveDown={moveDown}
              markComplete={markComplete}
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
