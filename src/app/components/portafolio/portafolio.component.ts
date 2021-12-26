import { Component } from '@angular/core';
import { Imagenes } from 'src/app/interfaces/imagenes.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  imagenes: Imagenes[] = [
    {
      nombre: "img-1",
      img: "assets/img-1.jpg"
    },
    {
      nombre: "img-2",
      img: "assets/img-2.jpg"
    },
    {
      nombre: "img-3",
      img: "assets/img-3.jpg"
    },
    {
      nombre: "img-4",
      img: "assets/img-4.jpg"
    },
    {
      nombre: "img-5",
      img: "assets/img-5.jpg"
    },
    {
      nombre: "img-6",
      img: "assets/img-6.jpg"
    },
    {
      nombre: "img-7",
      img: "assets/img-7.jpg"
    }
  ];

  modalImagen: string = '';
  modalNombre: string = ''

  modal(imagen: any) {
    this.modalImagen = imagen.img;
    this.modalNombre = imagen.nombre;
  }
}