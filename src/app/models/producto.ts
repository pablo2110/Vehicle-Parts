export class Producto {
    constructor(
        public ProId: number,
        public ProNombre: string,
        public ProDescripcion: string,
        public ProPrecio: number,
        public ProCosto: number,
        public ProAñovehiculo: string,
        public ProFechaCreacion: Date,
        public ProFechaActualizacion: Date,
        public CatId: number,
        public ModelId: number,
        public VendPrincipalId: number,
        public ProEstado: number,
        public ProDisponible: number,
        public ProLocation: string
    ){}

}