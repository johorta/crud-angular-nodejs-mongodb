export class Empleado {

constructor( _id = '', nombre = '', posicion = '' , oficina = '', sueldo = 0 ){
   this._id = _id;
   this.nombre = nombre;
   this.posicion = posicion;
   this.oficina = oficina;
   this.sueldo = sueldo;
}

  _id: string;
  nombre: string;
  posicion: string;
  oficina: string;
  sueldo: number;
}
