import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {
  torneos = [
    {
      nombre: 'Torneo de Pesca Deportiva - Guatapé',
      fecha: '15 de Mayo 2024',
      lugar: 'Embalse de Guatapé',
      modalidad: 'Pesca desde embarcación'
    },
    {
      nombre: 'Campeonato Regional - San Rafael',
      fecha: '20 de Junio 2024',
      lugar: 'Río Guatapé',
      modalidad: 'Pesca con mosca'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
} 