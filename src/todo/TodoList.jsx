export default function TodoList({ todos, deleteTodo, toggleTodo }) {

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" className="mr-2" onChange={() => toggleTodo(index)} />
                    {todo.completed ? <s>{todo.text} {index}</s> : <span>{todo.text} {index}</span>}
                    <button className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                        onClick={() => deleteTodo(index)}>Del</button>
                </li>
            ))}
        </ul>
    )
}