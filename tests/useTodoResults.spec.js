import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodos } from "../src/composables/useTodos";
import { useTodoResults } from "../src/composables/useTodoResults";

describe("useTodoResults", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        const { setTodos } = useTodos();
        setTodos([]);
    });

    it("returns zero completed when no todos are completed", () => {
        const { setTodos } = useTodos();

        setTodos([
            { id: 1, label: "Task 1", checked: false },
            { id: 2, label: "Task 2", checked: false },
            { id: 3, label: "Task 3", checked: false },
        ]);

        const { completedCount, hasCompleted, totalCount } = useTodoResults();

        expect(totalCount.value).toBe(3);
        expect(completedCount.value).toBe(0);
        expect(hasCompleted.value).toBe(false);
    });

    it("counts completed todos correctly when some are completed", () => {
        const { setTodos } = useTodos();

        setTodos([
            { id: 1, label: "Task 1", checked: true },
            { id: 2, label: "Task 2", checked: false },
            { id: 3, label: "Task 3", checked: false },
        ]);

        const { completedCount, hasCompleted, totalCount } = useTodoResults();

        expect(totalCount.value).toBe(3);
        expect(completedCount.value).toBe(1);
        expect(hasCompleted.value).toBe(true);
    });
});