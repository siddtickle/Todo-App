import "./App.css";
import TodoForm from "./components/TodoForm";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <TodoForm />
      <NoteForm
        style={{
          border: "4px dotted red",
        }}
      />
    </div>
  );
}

export default App;
