<template>
    <div class="root">
        <TodoList />
        <TodoForm />
        <TodoResults />
    </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useTodos } from "./composables/useTodos";

import TodoForm from "./components/todo-form.vue";
import TodoList from "./components/todo-list.vue";
import TodoResults from "./components/todo-results.vue"


export default defineComponent({
    name: "App",

    components: {
        TodoList,
        TodoForm,
        TodoResults
    },

    setup() {
        const { todos, loadTodos } = useTodos()

        onMounted(() => {
            if (!todos.value.length) {
                void loadTodos();
            }
        });

        return {};
    },
});
</script>

<style>
body {
    margin: 20px 0 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.root {
    width: 600px;
    margin: auto;
}
</style>
