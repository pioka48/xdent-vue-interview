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
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "TodoResults",

    props: ["todos"],

    setup(props) {

        const totalCount = computed(() => {
            return props.todos.length
        })

        const completedCount = computed(() => {
            if (!props.todos.length) return 0
            return props.todos.filter(t => t.checked).length
        })

        const hasCompleted = computed(() => {
            return completedCount.value > 0
        })

        return {
            totalCount,
            completedCount,
            hasCompleted
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