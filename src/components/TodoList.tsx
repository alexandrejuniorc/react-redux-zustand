import { useSelector } from "react-redux";
export function TodoList() {
  const store = useSelector((store) => {
    return store.todo;
  });

  console.log(store);

  return (
    <ul>
      {store.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
}
