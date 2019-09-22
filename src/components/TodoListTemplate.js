import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children,clock}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        Badal_To_Do_List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate