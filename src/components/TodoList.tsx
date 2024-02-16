import { useAppSelector } from "../store";

export function TodoList() {
  const store = useAppSelector((store) => {
    return store.todo;
  });

  return (
    <ul>
      {store.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
}
