import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 5VYMc1h69An7dYQA320279wSyy1dEpXPQ8MCxB7_UX8",
    },
});
