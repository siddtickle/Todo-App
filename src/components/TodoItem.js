import React, { useState } from "react";
import { ButtonGroup, Button, TextField } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem({
  index,
  item,
  moveUp,
  moveDown,
  markComplete,
  removeTodo,
  editTodo,
}) {
  //let isEdit = false;

  const [editInput, setEditInput] = useState("");

  const formChanged = (event) => {
    setEditInput(event.target.value);
  };

  const [editable, setEditable] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: 800,
        //border: "4px dotted red",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 15,
        alignItems: "center",
      }}
    >
      <ButtonGroup orientation="vertical">
        <Button onClick={() => moveUp(index)}>
          <ArrowUpwardIcon />
        </Button>
        <Button onClick={() => moveDown(index)}>
          <ArrowDownwardIcon />
        </Button>
      </ButtonGroup>
      <Button>
        <CheckIcon onClick={() => markComplete(index)} />
      </Button>

      {!editable && <h2 style={{ width: "100% " }}>{item}</h2>}
      {editable && (
        <TextField
          style={{
            margin: 8,
            borderColor: "transparent !important",
          }}
          value={editInput}
          helperText="Type to edit, click the pencil you're done!"
          fullWidth
          margin="normal"
          onChange={formChanged}
          //variant="outlined"
        />
      )}

      <ButtonGroup>
        <Button
          onClick={() => {
            if (editInput) {
              editTodo(index, editInput);
              setEditInput("");
            }
            setEditable(!editable);
          }}
        >
          <EditIcon />
        </Button>
        <Button
          onClick={() => {
            removeTodo(index);
          }}
        >
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default TodoItem;
