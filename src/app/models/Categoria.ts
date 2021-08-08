export class Categoria {
    constructor(
        public catId: number,
        public CatDescripcion: string,
        public CatEstatus: number,
        public CatFechaUltimaActualizacion: Date,
        public UsuInicioSesion: string
    ){}

}