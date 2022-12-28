import React, { Component } from 'react'
import Swal from 'sweetalert2'
import './UserProfile.css'

export default class UserProfile extends Component {

    state = {
        value: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        error: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleChangeValue = (event) => {
        let { value, name } = event.target;

        let newValue = { ...this.state.value, [name]: value };
        let newError = { ...this.state.error, [name]: value.trim() === '' ? name + ' is required' : '' };


        if (name === 'email') {
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regexEmail.test(value.trim())) {
                newError[name] = '';
            } else {
                newError[name] = name + ' is not valid';
            }
        }

        if (name === 'passwordConfirm') {
            if (value.trim() !== this.state.value.password) {
                newError[name] = name + ' is not valid';
            } else {
                newError[name] = '';
            }
        }

        this.setState({
            value: newValue,
            error: newError
        })
    }

    handleSubmit = (event) => {
        // Chặn sự kiện submit load lại trang
        event.preventDefault();

        let { value, error } = this.state;
        let valid = true;
        let profileContent = '';
        let errorContent = '';

        for (let key in value) {
            if (value[key].trim() === '') {
                valid = false;
                errorContent += `<p class="text-left"><b class="text-danger">${key} is invalid!</b></p>`
            } else {
                profileContent += `<p class="text-left"><b>${key}:</b> ${value[key]}</p>`
            }
        }

        for (let key in error) {
            if (error[key].trim() !== '') {
                valid = false;
                errorContent += `<p class="text-left"><b class="text-danger">${key} is invalid!</b></p>`
            }
        }

        if (!valid) {
            Swal.fire({
                title: 'Your profile',
                icon: 'error', // success, error, warning, info, question
                html: errorContent,
                confirmButtonText: 'OK'
            })
            return;

        } else{
            Swal.fire({
                title: 'Your profile',
                icon: 'success', // success, error, warning, info, question
                html: profileContent,
                confirmButtonText: 'OK'
            })
        }
    }

    render() {
        return (
            <div className='container-fluid text-center' style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#EEEEEE' }}>
                <form onSubmit={this.handleSubmit} className='w-50 bg-white p-5 m-5'>
                    <h1 className='text-center' style={{ fontSize: '35px' }}>User Profile</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="group">
                                <input type="text" name="firstName" value={this.state.value.firstName}  onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>First name</label>
                                <span className='text text-danger'>{this.state.error.firstName}</span>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="group">
                                <input type="text" name="lastName" value={this.state.value.lastName}  onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Last name</label>
                                <span className='text text-danger'>{this.state.error.lastName}</span>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="group">
                                <input type="text" name="userName" value={this.state.value.userName}  onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Username</label>
                                <span className='text text-danger'>{this.state.error.userName}</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="group">
                                <input type="text" name="email" value={this.state.value.email}  onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <span className='text text-danger'>{this.state.error.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="group">
                                <input type="password" name="password" value={this.state.value.password}  onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <span className='text text-danger'>{this.state.error.password}</span>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="group">
                                <input type="password" name="passwordConfirm" value={this.state.value.passwordConfirm}  onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
                                <span className='text text-danger'>{this.state.error.passwordConfirm}</span>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <button className='btn btn-success w-100 bg-dark text-white' style={{ fontSize: '20px' }}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
