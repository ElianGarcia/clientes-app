import { environment } from "src/environments/environment";

export const Endpoints = {
    GET_CLIENTES: `${environment.apiUrl}clientes`,
    GET_CLIENTE_BY_ID: `${environment.apiUrl}clientes`,
    REGISTER_CLIENTES: `${environment.apiUrl}clientes`,
    UPDATE_CLIENTES: `${environment.apiUrl}clientes`,
    DELETE_CLIENTES: `${environment.apiUrl}clientes`,

    GET_ADDRESS: `${environment.apiUrl}addresses`,
    REGISTER_ADDRESS: `${environment.apiUrl}addresses`,
    UPDATE_ADDRESS: `${environment.apiUrl}addresses`,
    DELETE_ADDRESS: `${environment.apiUrl}addresses`,

    GET_DASHBOARD: `${environment.apiUrl}dashboard`,
}
