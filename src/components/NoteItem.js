import React, { useState } from "react";
import { ButtonGroup, Button, TextField } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function NoteItem({ index, item, moveUp, moveDown, removeTodo, editTodo }) {
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
        // background: "rgb(240,240,240)",
        // boxShadow: "5px 5px 10px 2px rgba(0,0,0,.1)",
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

      {!editable && <h4 style={{ width: "100% " }}>{item}</h4>}
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
              editTodo(1, index, editInput);
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

export default NoteItem;
