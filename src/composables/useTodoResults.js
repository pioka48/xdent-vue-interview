import { computed, ref } from "vue";
import { useTodos } from "./useTodos";

export function useTodoResults() {
    const { todos } = useTodos();
    const completedCount = computed(
        () => todos.value.filter((todo) => todo.checked).length
    );

    const totalCount = computed(() => todos.value.length);

    const hasCompleted = computed(() => completedCount.value > 0);

    return {
        completedCount,
        totalCount,
        hasCompleted,
    };
}