import { storeToRefs } from "pinia";
import { useTodosStore } from "../stores/todosStore";

export function useTodos() {
    const store = useTodosStore();
    const { todos } = storeToRefs(store);

    return {
        todos,
        addTodo: store.addTodo,
        toggleTodo: store.toggleTodo,
        deleteTodo: store.deleteTodo,
        setTodos: store.setTodos,
    };
}