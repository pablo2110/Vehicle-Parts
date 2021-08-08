export class PedidoDetalle {
    constructor(
        public  PedID: number,
        public  PedPosicion: number,
        public  ProID: number,
        public  UsuID: number,
        public  UsuIDOwner: number,
        public  PedCantidad: number,
        public  PedPrecio: number,
        public  PedPorcientoIImpuestos: number,
        public  PedMontoImpuestos: number,
        public  PedDescuentoPorciento: number,
        public  PedMontoDescuento: number,
        public  PedMontoSubTotal: number,
        public  PedMontoTotal: number,
        public  rowguid: string,
        public  PedFecha: Date  
    ){}

}