import axios from 'axios'

export const register = newUser => {
    return axios
        .post('user/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
            alert("Registred Successfully")
        })
}

export const login = user => {
    return axios
        .post('user/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            console.log('token'+res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const expense = newexp => {
    return axios
        .post('user/expense', {
            createdBy: newexp.createdBy,
            withWhom:newexp.withWhom,
            expName: newexp.expName,
            expAmount: newexp.expAmount,
            expDes: newexp.expDes

        })
        .then(res => {
            console.log('Add Expense !')
        })
}
