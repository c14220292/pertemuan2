import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [todoText, setTodoText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // panggil fungsi addTodo dari props
        addTodo(todoText);
        // kosongkan input
        setTodoText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="border border-black p-2 m-2"
                value={todoText}
                onChange={e => setTodoText(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded">
                Add Todo
            </button>
        </form>
    )
}