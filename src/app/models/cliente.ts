import { Address } from "./address";

export class Cliente {
    id: number;
    name: string;
    lastname: string;
    cedula: string;
    birthdate: Date;
    createAt: string;
    email: string;
    active: boolean;

    addresses: Address[];
}
