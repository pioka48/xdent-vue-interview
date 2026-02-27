<template>
    <div class="todo-results">
        <span class="todo-results-info">
            Completed tasks:
            <span
                :class="{
                    'todo-results-count--positive': hasCompleted,
                    'todo-results-count--zero': !hasCompleted
                }"
            >
                {{ completedCount }}
            </span>
            / {{ totalCount }}
        </span>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useTodoResults } from "../composables/useTodoResults";

export default defineComponent({
    name: "TodoResults",

    setup() {
        const { completedCount, totalCount, hasCompleted } = useTodoResults()

        return {
            completedCount,
            totalCount,
            hasCompleted,
        };
    },
})
</script>

<style scoped>
.todo-results {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 16px;
}

.todo-results-info {
    display: inline-flex;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
}

.todo-results-count--positive {
    color: green;
}

.todo-results-count--zero {
    color: red;
}
</style>