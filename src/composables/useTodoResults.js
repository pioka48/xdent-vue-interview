import { computed, ref } from "vue";

export function useTodoResults(todosRef) {

    const completedCount = computed(
        () => todosRef.value.filter((todo) => todo.checked).length
    );

    const totalCount = computed(() => todosRef.value.length);

    const hasCompleted = computed(() => completedCount.value > 0);

    return {
        completedCount,
        totalCount,
        hasCompleted,
    };
}