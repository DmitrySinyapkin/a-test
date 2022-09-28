import users from './users.json'

export const loginUser = (login, password) => {
    return new Promise((resolve, reject) => {
        const user = users.find(item => item.login === login && item.password === password)
        if (user) {
            resolve(user)
        } else {
            reject({ message: 'Неверный логин или пароль' })
        }
    })
}
