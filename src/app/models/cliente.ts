import { Address } from "./address";

export class Cliente {
    clienteId: number;
    name: string;
    lastName: string;
    cedula: string;
    birthDate: Date;
    createAt: string;
    email: string;
    active: boolean;

    addresses: Address[];
}
