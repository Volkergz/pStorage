import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServicedbService {
  //Variables del servicios
  //Conexión
  public database!: SQLiteObject;

  //Crear Tabla Noticia
  tablaNoticia: string = "CREATE TABLE IF NOT EXISTS noticias (id_noticia INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(100) NOT NULL), descripcion TEXT;"

  constructor() { }
}
