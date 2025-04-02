import { Animal } from "./Animal.js";
import { Cobra } from "./Cobra.js";
import { Leao } from "./Leao.js";

const Animal1 = new Animal("Animal", "Raca", 10, 5);
const Cobra1 = new Cobra("Cobra", "Raca", 10, 5, "Verde")
const Leao1 = new Leao("Leao", 10, 5, "Albino")

console.log(Cobra1);

// Comando o package.json é npm init -y