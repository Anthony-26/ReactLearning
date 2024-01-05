import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todo.module.css';

import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

export const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
