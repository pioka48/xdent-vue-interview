import { defineStore } from "pinia";
import axios from "axios";

const mapApiTodos = (apiTodos) =>
    apiTodos.map((todo) => ({
        id: todo.id,
        label: todo.title,
        checked: todo.completed,
    }));

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [],
        pending: false,
        loadError: null,
    }),
    actions: {
        async loadTodos() {
            if (this.pending) return;

            this.pending = true
            this.loadError = null;

            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos",
                    {
                        params: {
                            _limit: 5,
                        },
                    }
                );

                this.todos = mapApiTodos(response.data);
            } catch (error) {
                this.loadError = error.message ?? String(error);
                this.todos = [];
            } finally {
                this.pending = false;
            }
        },
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