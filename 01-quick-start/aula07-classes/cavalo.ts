import {Animal} from './animal';


export class Cavalo extends Animal{

    constructor(nome: string){
        super(nome);
    }

    public mover(distanciaEmMetros: number): void{
        console.log('Galopado...');
        super.mover(distanciaEmMetros);
    }
}