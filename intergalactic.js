// Edad aleatoria entre 50 y 300
let edadAleatoria = Math.round(Math.random() * (300 - 50) + 50);

// Niveles de energía aleatorios entre 0 y 100
let energia1 = Math.round(Math.random() * 100);
let energia2 = Math.round(Math.random() * 100);
let energiaMaxima = Math.max(energia1, energia2);

// Objeto alien
const alien = {
  nombre: "Zorgon",
  planeta: "Nebulón V",
  habilidades: ["Camuflaje", "Telepatía", "Regeneración"],
  edad: edadAleatoria,
  estadoSalud: true,
  presentarse: function() {
    console.log(`👽 Hola, soy ${this.nombre} del planeta ${this.planeta}.`);
    console.log(`Tengo ${this.edad} años y mis habilidades son: ${this.habilidades.join(", ")}.`);
    console.log(`¿Estoy saludable? ${this.estadoSalud}`);
  }
};

// Acceso con notación de punto y corchetes
console.log("Nombre (punto):", alien.nombre);
console.log("Planeta (corchetes):", alien["planeta"]);

// Usar objeto String
let nombreMayus = alien.nombre.toUpperCase();
let inicial = alien.nombre.charAt(0);
let incluyeZ = alien.nombre.includes("z") || alien.nombre.includes("Z");

let nombrePrimitivo = alien.nombre;
let nombreObjeto = new String(alien.nombre);

// Mostrar toda la información
console.log("===== PERFIL INTERGALÁCTICO =====");
alien.presentarse();
console.log("Edad generada aleatoriamente:", alien.edad);
console.log("Nivel de energía 1:", energia1);
console.log("Nivel de energía 2:", energia2);
console.log("Nivel de energía más alto:", energiaMaxima);
console.log("Nombre en mayúsculas:", nombreMayus);
console.log("Inicial del nombre:", inicial);
console.log("¿Incluye la letra 'z'?:", incluyeZ);
console.log("¿Nombre como objeto?:", nombreObjeto instanceof String);
console.log("¿Nombre primitivo?:", typeof nombrePrimitivo === "string");
console.log("=================================");
