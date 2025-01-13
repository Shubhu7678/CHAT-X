const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authEndPoints = {

    SIGN_UP_API : BASE_URL + '/api/v1/user/signup',
    LOGIN_API : BASE_URL + '/api/v1/user/login'
}

export const userEndPoints = {

    GET_ALL_USERS_API : BASE_URL + '/api/v1/user/getAllUsers'
}

export const messagesEndPoints = {

    GET_MESSAGES_API: BASE_URL + '/api/v1/message/getMessages',
    SEND_MESSAGE_API: BASE_URL + '/api/v1/message/sendMessage',
    
}