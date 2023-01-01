import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import { Container } from '../ComponentTodoList/Container'
import { Dropdown } from '../ComponentTodoList/Dropdown'
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../ComponentTodoList/Heading'
import { TextField } from '../ComponentTodoList/TextField'
import { Button } from '../ComponentTodoList/Button'
import { Table, Tbody, Td, Th, Thead, Tr } from '../ComponentTodoList/Table'
import { addTaskAction, changeTheme, deleteTaskAction, doneTaskAction, editTaskAction, updateTaskAction } from '../../../../redux/actions/ToDoListAction'
import { arrTheme } from '../Theme/ThemeManager'




class TodoList extends Component {
    state = {
        taskName: ''
    }
    renderTaskToDo = () => {
        return this.props.taskList.map((task, index) => {
            if (!task.done) {
                return (
                    <Tr key={index}>
                        <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
                        <Th className='text-right'>
                            <Button onClick={() => {
                                this.handleEditTask(task.id)
                            }} className='ml-1'>
                                <i className='fa fa-edit'></i>
                            </Button>
                            <Button onClick={() => {
                                this.handleDoneTask(task.id)
                            }} className='ml-1'>
                                <i className='fa fa-check'></i>
                            </Button>
                            <Button onClick={() => {
                                this.handleDeleteTask(task.id)
                            }} className='ml-1'>
                                <i className='fa fa-trash'></i>
                            </Button>
                        </Th>
                    </Tr>
                )
            }
        })
    }
    renderTaskCompleted = () => {
        return this.props.taskList.map((task, index) => {
            if (task.done) {
                return (
                    <Tr key={index}>
                        <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
                        <Th className='text-right'>
                            <Button onClick={() => {
                                this.handleDeleteTask(task.id)
                            }} className='ml-1'>
                                <i className='fa fa-trash'></i>
                            </Button>
                        </Th>
                    </Tr>
                )
            }
        })
    }
    renderThemeOption = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.name}>{theme.name}</option>
        })
    }
    handleNewTask = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }
    handleAddTask = () => {
        let { taskName } = this.state;
        let newTask = {
            id: Date.now(),
            taskName,
            done: false
        }
        this.props.dispatch(addTaskAction(newTask));
    }
    handleDoneTask = (taskId) => {
        this.props.dispatch(doneTaskAction(taskId));
    }
    handleDeleteTask = (taskId) => {
        this.props.dispatch(deleteTaskAction(taskId));
    }
    handleEditTask = (taskId) => {
        this.props.dispatch(editTaskAction(taskId));
    }
    handleUpdateTask = () => {
        let { taskName } = this.state;
        this.props.dispatch(updateTaskAction(taskName));
    }
    handleChangeTheme = (event) => {
        let { value } = event.target;
        let theme = arrTheme.find(theme => theme.name === value);
        this.props.dispatch(changeTheme(theme))
    }
    // componentWillReceiveProps = (newProps) => {
    //     this.setState({
    //         taskName: newProps.taskEdit.taskName
    //     })
    // }

    // Lifecycle tĩnh không truy xuất được con trỏ this
    // static getDerivedStateFromProps(newProps, currentState) {
    //     // new props là props mới nhận được từ redux, this.props là props cũ
    //     // currentState là state hiện tại của component

    //     // hoặc trả về state mới 
    //     let newState = {...currentState, taskName: newProps.taskEdit.taskName}
    //     return newState;

    //     // hoặc trả về null: không cập nhật state
    //     // return null;
    // }



    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown onChange={this.handleChangeTheme}>
                        {this.renderThemeOption()}
                    </Dropdown>
                    <Heading3 className='mt-2'>To do list</Heading3>
                    <TextField value={this.state.taskName} onChange={this.handleNewTask} label="Task name" className="w-50" />
                    <Button onClick={this.handleAddTask} className='ml-2'><i className='fa fa-plus mr-1'></i>Add task</Button>
                    <Button onClick={this.handleUpdateTask} className='ml-2'><i className='fa fa-upload mr-1'></i>Update task</Button>
                    <hr />
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        // So sánh props trước khi render và props sau khi render khác nhau thì mới setState
        if (this.props.taskEdit.id !== prevProps.taskEdit.id) {
            this.setState({
                taskName: this.props.taskEdit.taskName
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit,

    }
}

export default connect(mapStateToProps)(TodoList)









