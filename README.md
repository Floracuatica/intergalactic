# 👽 Generador de Perfiles Intergalácticos

Este programa fue desarrollado como parte de un ejercicio grupal para la Agencia Espacial Universal 🚀.  
La misión: crear fichas de especies alienígenas utilizando objetos, números aleatorios y manipulación de cadenas en JavaScript.

## 🛠️ Funcionalidades

El sistema genera automáticamente un perfil alien con:

- `nombre`: Nombre del alienígena (string)
- `planeta`: Planeta de origen (string)
- `habilidades`: Lista de habilidades especiales (array de strings)
- `edad`: Número aleatorio entre 50 y 300 años (`Math.random()` + `Math.round()`)
- `estadoSalud`: Estado de salud actual (booleano)
- `presentarse()`: Método que imprime una presentación con `this`

### ⚙️ Adicionalmente se utiliza:

#### `Math`
- Para calcular edad aleatoria entre 50 y 300
- Para generar dos niveles de energía (entre 0 y 100)
- Para determinar el nivel de energía más alto (`Math.max()`)

#### `String`
- Conversión del nombre a mayúsculas
- Extracción de la primera letra
- Verificación si contiene la letra 'z'
- Comparación entre string primitivo y `new String()`

### 💡 Acceso a propiedades
- Con notación de **punto** y **corchetes**

---

## 🖥️ Ejemplo de salida en consola

===== PERFIL INTERGALÁCTICO =====
👽 Hola, soy Zorgon del planeta Nebulón V.
Tengo 275 años y mis habilidades son: Camuflaje, Telepatía, Regeneración.
¿Estoy saludable? true
Edad generada aleatoriamente: 275
Nivel de energía 1: 86
Nivel de energía 2: 22
Nivel de energía más alto: 86
Nombre en mayúsculas: ZORGON
Inicial del nombre: Z
¿Incluye la letra 'z'?: true
¿Nombre como objeto?: true
¿Nombre primitivo?: true
=================================
