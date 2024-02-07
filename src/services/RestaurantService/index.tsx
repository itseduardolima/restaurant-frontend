import { api } from "../../hooks/api";
import { IRestaurant } from "./IRestaurant";

export async function getRestaurant() {
    const request = await api.get("restaurant");
    return request.data as IRestaurant;
}