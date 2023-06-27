import Axios from "axios";

const axios = Axios.create(
    { 
        baseURL: "http://localhost:9000",
        headers:{Auth:"Simple AUTH"},
        timeout:3000,
    }
); 

export default axios;
