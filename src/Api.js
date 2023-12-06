import axios from 'axios';

const API_URL = 'http://localhost:8001'; // This is the FastAPI server URL

export const startChat = () => {
    return axios.get(`${API_URL}/start-chat`);
};

export const sendMessage = (message) => {
     return axios.post(`${API_URL}/send-message`, { message: message }); 
};

export const deleteMessage = (message) => {
    return axios.delete(`${API_URL}/delete-message`, { data: { message: message } });
};