export class Pedido {
    constructor(
        public PedID: number,
        public UsuID: number,
        public PedFecha: Date,
        public PedEstatus: number,
        public PedTotal: number,
        public PedTotalDescuento: number,
        public PedSubTotal: number,
        public PedTotalItbis: number,
        public rowguid: string,
        public PedTipoPedido: number    
    ){}

}