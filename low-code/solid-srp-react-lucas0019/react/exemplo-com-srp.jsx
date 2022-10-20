const APIWrapper = ({children}) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
      async function getTodos() {
          const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
          const firstTen = data.slice(0, 10);
          setTodos(firstTen);
      };
      getTodos();
  }, []);

  const todoListWithTodos = React.Children.map(
    children,
    (child) => {
      return React.cloneElement(child, { todos: todos })
    }
  )
  
  return (
    <div>
      {todos.length > 0 ? todoListWithTodos : null}
    </div>
  )
}

const TodosList = ({todos}) => {

  const renderTodos = () => {
      return todos.map(todo => {
          return <Todoitem id={todo.id} title={todo.title} />
      });
  };

  return <ul>{renderTodos()}</ul>;
}

const TodoItem = ({id, title}) => {
  return <li>{`ID: ${id}, Title: ${title}`}</li>
}

const TodosPage = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <APIWrapper>
        <TodosList />
      </APIWrapper>
    </div>
  )
}

