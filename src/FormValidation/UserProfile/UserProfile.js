import React, { Component } from 'react'
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

        
        if(name==='email'){
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regexEmail.test(value.trim())){
                newError[name] = '';
            }else{
                newError[name] = name + ' is not valid';
            }
        }

        if(name==='passwordConfirm'){
            if(value.trim() !== this.state.value.password){
                newError[name] = name + ' is not valid';
            }else{
                newError[name] = '';
            }
        }

        this.setState({
            value: newValue,
            error: newError
        })
    }

    render() {
        return (
            <div className='container-fluid text-center' style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#EEEEEE' }}>
                <form className='w-50 bg-white p-5 m-5'>
                    <h1 className='text-center' style={{ fontSize: '35px' }}>User Profile</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="group">
                                <input type="text" name="firstName" value={this.state.value.firstName} required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>First name</label>
                                <span className='text text-danger'>{this.state.error.firstName}</span>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="group">
                                <input type="text" name="lastName" value={this.state.value.lastName} required onChange={this.handleChangeValue} />
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
                                <input type="text" name="userName" value={this.state.value.userName} required onChange={this.handleChangeValue} />
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
                                <input type="text" name="email" value={this.state.value.email} required onChange={this.handleChangeValue} />
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
                                <input type="password" name="password" value={this.state.value.password} required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <span className='text text-danger'>{this.state.error.password}</span>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="group">
                                <input type="password" name="passwordConfirm" value={this.state.value.passwordConfirm} required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
                                <span className='text text-danger'>{this.state.error.passwordConfirm}</span>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
