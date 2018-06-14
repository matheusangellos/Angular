import { Animal } from "./../aula07-classes/animal";
import { Cavalo } from "./../aula07-classes/cavalo";
import { Dao } from "./dao";


let dao: Dao<Cavalo> = new Dao<Cavalo>();

let animal: Animal = new Animal('Rex');
let cavalo: Cavalo = new Cavalo('Titã');

dao.insert(cavalo);