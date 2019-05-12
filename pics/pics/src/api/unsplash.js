import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 22678c7a5f5664a178b0e37dc63ed564a7073b3fa28918de8963be7513265bf2'
    }
})