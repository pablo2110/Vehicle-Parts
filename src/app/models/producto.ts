export class Producto {
    constructor(
        public proId: number,
        public proNombre: string,
        public proDescripcion: string,
        public proPrecio: number,
        public proCosto: number,
        public proAñovehiculo: string,
        public proFechaCreacion: string,
        public proFechaActualizacion: string,
        public catId: number,
        public modelId: number,
        public vendPrincipalId: number,
        public proEstado: number,
        public proDisponible: number,
        public proLocation: string
    ){}

}