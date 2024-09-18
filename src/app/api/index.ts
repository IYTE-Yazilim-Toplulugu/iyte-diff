import { User } from "@/models/User";
import axios from "axios";



const baseUrl = "http://localhost:8080"
export const getAllUsers : User[] | any = async () => {
    const res = await axios.get(`${baseUrl}/user/getAllUsers`);
    return res.data;
}