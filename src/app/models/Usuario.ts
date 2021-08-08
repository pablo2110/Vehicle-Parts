export class Usuario {
    constructor(
        public  UsuId: number,
        public  UsuSesion: string,
        public  UsuPass: string,
        public  UsuNombres: string,
        public  UsuApellidos: string,
        public  UsuDireccion: string,
        public  UsuTelefono: string,
        public  UsuEmail: string,
        public  UsuEstatus: number,
        public  UsuPrincipal: number,
        public  RolId: number,
        public  UsuProvincia: number,
        public  UsuCodePass: string
    ){}

}