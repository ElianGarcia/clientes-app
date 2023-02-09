export class Dashboard {
    totalClientesActivos: number;
    totalClientesInactivos: number;
    totalDirecciones: number;

    /// <summary>
    /// store the list of Clientes that have more than 1 address
    /// </summary>
    totalClientesMasDirecciones: number;

    constructor() {
        this.totalClientesActivos = 0;
        this.totalClientesInactivos = 0;
        this.totalDirecciones = 0;
        this.totalClientesMasDirecciones = 0;
    }
}
