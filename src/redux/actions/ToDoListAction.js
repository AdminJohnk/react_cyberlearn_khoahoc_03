import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListType";

export const changeTheme = (theme) => ({
    type: change_theme,
    theme
})
export const addTaskAction = (newTask) => ({
    type: add_task,
    newTask
})
export const deleteTaskAction = (taskId) => ({
    type: delete_task,
    taskId
})
export const doneTaskAction = (taskId) => ({
    type: done_task,
    taskId
})
export const editTaskAction = (taskId) => ({
    type: edit_task,
    taskId
})
export const updateTaskAction = (taskName) => ({
    type: update_task,
    taskName
})









