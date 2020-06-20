export class Employ {
  constructor(
    public nombre: string,
    public apellidos: string,
    public email: string,
    public usuario: string,
    public password: string,
    public telefono: number,
    public role: string,
    public edad: number,
    public cargo: string,
    public img?: string,
    public fecha?: Date,
    public _id?: string
  ) {}
}
