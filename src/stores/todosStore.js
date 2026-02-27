import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [],
    }),
    actions: {
        addTodo(label) {
            if (!label) return;

            const newId =
                this.todos.length > 0
                    ? Math.max(...this.todos.map((todo) => todo.id)) + 1
                    : 1;

            this.todos.push({
                id: newId,
                label,
                checked: false,
            });
        },
        toggleTodo(id) {
            this.todos = this.todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            );
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
        setTodos(newTodos) {
            this.todos = Array.isArray(newTodos) ? newTodos : [];
        }
    }
});