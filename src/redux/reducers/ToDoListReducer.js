import { ToDoListDarkTheme } from '../../FormValidation/JSS_StyledComponents/BaiTapToDoList/Theme/ToDoListDarkTheme';
import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from '../types/ToDoListType';


const satateDefault = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: '1', taskName: 'Task 1', done: false },
        { id: '2', taskName: 'Task 2', done: true },
        { id: '3', taskName: 'Task 3', done: false },
        { id: '4', taskName: 'Task 4', done: true },
        { id: '5', taskName: 'Task 5', done: false },
    ],
    taskEdit: { id: '', taskName: '', done: false },

}

const ToDoListReducer = (state = satateDefault, action) => {
    switch (action.type) {
        case change_theme: {
            state.themeToDoList = action.theme.theme;
            return { ...state };
        }
        case add_task: {
            state.taskList = [...state.taskList, action.newTask];
            return { ...state };
        }
        case done_task: {
            state.taskList = [...state.taskList.map(task => {
                if (task.id === action.taskId) {
                    return { ...task, done: true };
                }
                return { ...task };
            })];
            return { ...state };
        }
        case delete_task: {
            state.taskList = [...state.taskList.filter(task => task.id !== action.taskId)];

            return { ...state };
        }
        case edit_task: {
            state.taskEdit = { ...state.taskList.find(task => task.id === action.taskId)};

            return { ...state };
        }
        case update_task: {
            state.taskEdit = { ...state.taskEdit, taskName: action.taskName };
            state.taskList = [...state.taskList.map(task => {
                if (task.id === state.taskEdit.id) {
                    return { ...task, taskName: action.taskName };
                }
                return { ...task };
            })];

            return { ...state };
        }
        default:
            return { ...state };
    }
}

export default ToDoListReducer;










