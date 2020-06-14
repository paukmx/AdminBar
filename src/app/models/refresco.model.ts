export class Refresco {
    constructor(
        public nombre: string,
        public categoria: string,
        public subCategoria: string,
        public precioCompra: number,
        public precioVenta: number,
        public stock: string,
        public img?: string,
        public _id?: string
    ){}
}