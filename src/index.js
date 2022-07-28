import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ) );
//Es lo mismo
//todoList.todos.forEach( crearTodoHtml );


//const newTodo = new Todo('Aprender Javascript');

//todoList.nuevoTodo( newTodo );
//todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();

//console.log( 'todos',todoList.todos )




//const tarea = new Todo('Aprender Javascript!!');
//todoList.nuevoTodo( tarea );

//console.log( todoList );


//crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'abc');

// setTimeout( () => {
//     localStorage.removeItem('mi-key');
// }, 500 );

