<template>
    <div class="todo-list">
        <span class="todo-list-title">Things to do:</span>
        <div v-if="todos.length" class="todo-list-content">
            <TodoCheckbox
                v-for="todoItem in todos"
                :key="todoItem.id"
                :label="todoItem.label"
                :checked="todoItem.checked"
                @click="() => toggleCheck(todoItem.id)"
                @delete="() => handleDelete(todoItem.id)"
                @keyup="(event) => handleKeyUp(event, todoItem.id)"
            />
        </div>
        <div v-else class="no-todos">
            <p>No tasks yet</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoCheckbox from "./todo-checkbox.vue";
import { useTodos } from "../composables/useTodos";

export default defineComponent({
    name: "TodoList",

    components: { TodoCheckbox },

    setup() {
        const { todos, toggleTodo, deleteTodo } = useTodos();

        const toggleCheck = (id) => {
            toggleTodo(id);
        };

        const handleDelete = (id) => {
            deleteTodo(id);
        };

        const handleKeyUp = (e, id) => {
            if (e.keyCode === 13) {
                toggleCheck(id);
            }
        };

        return {
            todos,
            toggleCheck,
            handleDelete,
            handleKeyUp,
        };
    },
});
</script>

<style scoped>
.todo-list {
    padding: 10px 0;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
}

.todo-list-title {
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
    padding: 5px 0;
    margin-bottom: 10px;
}

.todo-list-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.no-todos {
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
    color: gray;
}
</style>
