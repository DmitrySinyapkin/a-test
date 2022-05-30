export const validateLogin = (value, callback, messages) => {
    if (!value) {
        callback(messages.empty)
        return false
    }

    if (/^[\w.@+-]+$/.test(value)) {
        callback('')
        return true
    }
    
    callback(messages.fail)
    return false
}

export const validatePassword = (value, callback, messages) => {
    if (!value) {
        callback(messages.empty)
        return false
    }

    if (value.length < 8) {
        callback(messages.short)
        return false
    }

    if (/^[\w.@+-]+$/.test(value)) {
        callback('')
        return true
    }
    
    callback(messages.fail)
    return false
}
