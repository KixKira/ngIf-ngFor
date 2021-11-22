import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Los comunistas son una bazofia.',
        autor: 'Simón Bolívar'
    };

    personajes: string[] = ['Batman', 'Wolverine', 'Frijolito']
}