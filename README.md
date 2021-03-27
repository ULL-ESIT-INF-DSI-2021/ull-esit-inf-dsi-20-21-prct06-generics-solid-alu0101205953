[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101205953/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101205953?branch=master)

## Desarrollo de Sistemas Informáticos. Universidad de la Laguna

***
# Práctica 6: Clases e interfaces genéricas. Principios SOLID

## **Índice de contenidos:**

* Introducción
* Objetivos
* Tareas previas
* Ejercicios:
    * Ejercicio 1: El combate definitivo
    * Ejercicio 2: Conversor de unidades
    * Ejercicio 3: DSIflix
* Pruebas
* Documentación
* Cubrimiento
* Problemas e incidencias encontrados

### **Introducción**

En esta práctica aprenderemos a utilizar más en profundidad algunos tipos de datos en Typescript realizando ejercicios.

### **Objetivos**

El objetivo de esta práctica es aprender a manejar clases re interfaces genéricas, además de desplegar documentación del código con la herramienta Typedoc y testear las funciones haciendo uso de la metodología [TDD/BDD](https://www.paradigmadigital.com/techbiz/tdd-una-metodologia-gobernarlos-todos/#:~:text=TDD%20son%20las%20siglas%20de,c%C3%B3digo%20que%20tenemos%20que%20implementar.) y las herramientas mocha y chai. Por último configuraremos las herramientas Instanbul y Coveralls para generar informes sobre el cubrimiento del código fuente por pruebas.

### **Tareas previas**

Antes de comenzar la realización de la práctica ha sido necesario consultar la documentación acerca de las herramientas que generan informes de cubrimiento de código y los [principios SOLID](https://samueleresca.net/solid-principles-using-typescript/) que aplicaremos a partir de ahora en todas las prácticas.

### **Ejercicios**

#### **Ejercicio 1: El combate definitivo**

![Combate](http://cdn.lowgif.com/small/2a6901aaf9434a33-.gif)

En primer lugar se ha creado una clase abstracta que permite representar distintos tipos de luchadores. Esta clase contiene los atributos que tenía la clase Pokemon creada anteriormente, además de algunos nuevos atributos como una frase característica del personaje, el universo al que pertenece y dos atributos que facilitan el cálculo del daño que puede causar cada personaje. Estos atributos son arrays de cadenas que contienen los nombres de los universos contra los que ese personaje es igual de fuerte o más fuerte. Más adelante se explica la utilidad de estos atributos.
Por último, esta clase contiene métodos que permiten acceder a cada uno de sus atributos.

~~~typescript
export abstract class Fighter {
    constructor(private readonly name: string, private readonly weight: number, private readonly height: number, private readonly stats: statistics, private readonly phrase: string, private readonly strongerThan: string[], private readonly equalStrong: string[]) { }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    getHeight() {
        return this.height;
    }

    getStats() {
        return this.stats;
    }

    getPhrase() {
        return this.phrase;
    }

    getStrongerThan() {
        return this.strongerThan;
    }

    getEqualStrong() {
        return this.equalStrong;
    }

    abstract getUniverse(): string;
}

~~~

A continuación se ha creado una clase por cada universo del que se ha querido representar un luchador. Estas clases permiten instanciar objetos con unos atributos definidos como el nombre del luchador, los stats, una frase característica, etc. También contiene un método que permite saber a qué universo pertenece. Por ejemplo, la clase correspondiente a los personajes del universo Marvel sería la siguiente:

~~~typescript
export class Marvel extends Fighter {
    constructor(name: string, weight: number, height: number, stats: statistics, phrase: string, strongerThan: string[], equalStrong: string[], private readonly universe: string = "Marvel") {
        super(name, weight, height, stats, phrase, strongerThan, equalStrong);
    }

    getUniverse() {
        return this.universe;
    }
}
~~~

La clase que permite recrear combates entre dos personajes se ha creado a partir de la creada en la práctica anterior, modificando la función que calcula el daño, de modo que la efectividad del ataque se mide en función de que el contrincante pertenezca a un universo que se encuentre definido en los arrays _strongerThan_ o _equalStrong_, y esta variará en función de en qué array se encuentre. De esta forma se simplifica la función, dado que anteriormente se utilizaba una estructura _switch case_ para ello.
También se ha modificado la simulación de combates para que cada vez que un luchador ataque, se muestre por pantalla una frase característica del mismo.

~~~typescript
export class Combat {
    constructor(public readonly fighter1: Fighter, public readonly fighter2: Fighter) { }

     damage(fighter1: Fighter, fighter2: Fighter) {
        let effectiveness: number;
        if (fighter1.getStrongerThan().includes(fighter2.getUniverse())) effectiveness = 2;
        else if ((fighter1.getEqualStrong().includes(fighter2.getUniverse())) || (fighter1.getUniverse() == fighter2.getUniverse())) effectiveness = 1;
        else effectiveness = 0.5;
        return (50 * (fighter1.getStats().attack/fighter2.getStats().defense) * effectiveness);
    }

     start() {
        let HP1: number = this.fighter1.getStats().HP;
        let HP2: number = this.fighter2.getStats().HP;

        while ((HP1 > 0) && (HP2 > 0)) {
            console.log(`${this.fighter1.getPhrase()}`); // Catching phrase WARNING
            HP2 -= this.damage(this.fighter1, this.fighter2);
            if (HP2 > 0) {
                console.log(`${this.fighter2.getPhrase()}`);
                HP1 -= this.damage(this.fighter2, this.fighter1);
            }

            if ((HP1 > 0) && (HP2 > 0)) {
                console.log(`${this.fighter1.getName()} HP = ${HP1}\n${this.fighter2.getName()} HP = ${HP2}`);
            }
        }

        if (HP1 <= 0) {
            return (`${this.fighter2.getName()} wins!`);
        } else {
            return (`${this.fighter1.getName()} wins!`);
        }
    }
}
~~~

Por último se ha modificado la clase Pokédex para permitir almacenar luchadores provenientes de todos lo universos:

~~~typescript
export class Encyclopedia {
    constructor(public allFighters: Fighter[]) {
    }

    print() {
        let str: string = '';
        for (let i: number = 0; i < this.allFighters.length; i++) {
            console.log(`Name: ${this.allFighters[i].getName()}`);
            str = str + this.allFighters[i].getName() + ', ';
        }
        str = str.substring(0, str.length - 2);
        return str;
    }
}
~~~

#### **Ejercicio 2: Conversor de unidades**

Para este ejercicio en primer lugar se ha creado, como pide el enunciado, una interfaz genérica que contiene un método para realizar conversiones entre sistemas de medición, de esta manera:

~~~typescript
export interface isConvertible<T> {
    units: [string, number][];
    convert(first: T, second: string): T;
}
~~~

A continuación se ha creado una clase por cada una de las magnitudes físicas que se piden:

* Velocidad
* Masa
* Longitud
* Tiempo
* Temperatura
* Fuerza
* Volumen

Cada una de las clases implementa la interfaz diseñada anteriormente, donde se fijan valores equivalentes para las unidades entre las que se va a permitir hacer conversiones. El método que realiza las conversiones se implementa en cada clase puesto que no todas las magnitudes realizan los cambios de la misma manera, como es el ejemplo de la temperatura. De tal manera que en primer lugar se comprueba que las magnitudes que se piden convertir están entre las unidades que se han definido, y a continuación se realizan los cálculos necesarios. En caso de que no se reconozcan los sistemas que se solicitan, se retorna un mensaje de error. Dado que todas las clases son similares, se ejemplifica con una de ellas:

~~~typescript
export class Length implements isConvertible<[string, number]> {
    units: [string, number][];

    constructor() {
        this.units = [['meters', 1], ['miles', 0.000621371], ['yards', 1.09361]];
    }

    convert(first: [string, number], second: string): [string, number] {
        if((this.units.filter((x) => (x[0] == first[0])).length > 0) && (this.units.filter((x) => (x[0] == second)).length > 0)) {
            let conv1: [string, number][] = this.units.filter((x) => (x[0] == first[0]));
            let conv2: [string, number][] = this.units.filter((x) => (x[0] == second));
            let result: [string, number] = [second, Number(((first[1] * conv2[0][1]) / conv1[0][1]).toFixed(1))];
            return result;
        } else return ['Unit not found', 0];
    }
}
~~~

#### **Ejercicio 3: DSIflix**

En este último ejercicio se ha creado como solicita el enunciado una interfaz genérica `Streamable` que contiene algunos métodos con los que debe contar una colección de emisiones, como por ejemplo agregar un elemento a la colección, obtener el número de elementos de la colección o los propios elementos.

~~~typescript
export interface Streamable<T> {
    addItem(newItem: T): void;
    getItems(): T[];
    getNumberOfItems(): number;
}
~~~

A continuación se ha creado otra interfaz que contiene un método de búsqueda, que extiende a la anterior, ya que se ha intentado aplica el principio SOLID _Interface Segregation_. Este método permite especificar el parámetro por el que se desea buscar y el valor del mismo. Por ejemplo: searchBy(‘title’, ‘Money Heist’).

~~~typescript
export interface StreamableSearchable<T> extends Streamable<T> {
    searchBy(param: string, value: string): T[];
}
~~~

Lo siguiente que se ha hecho es crear una clase abstracta que permite definir una colección de objetos Streamable, donde se definen algunos de los métodos incluidos en las interfaces.

~~~typescript
export abstract class BasicStreamableCollection<T> implements StreamableSearchable<T> {
    constructor(protected items: T[]) {
    }
    abstract searchBy(param: string, value: string): T[];

    addItem(newItem: T) {
        this.items.push(newItem);
    }

    abstract getItems(): T[];

    getNumberOfItems() {
        return this.items.length;
    }
}
~~~
Por último se han creado tres clases, que representan colecciones de series, películas y documentales. En ellas se definen los métodos que seguían siendo abstractos en la clase anterior. Todas ellas se definen de manera similar, así que se ejemplifica mostrando sólo una de ellas:

~~~typescript
export type film = {
    title: string;
    year: number;
    duration: number;
    genre: string;
}

export class Films extends BasicStreamableCollection<film> {
    constructor(protected items: film[]) {
        super(items);
      }

    searchBy(param: string, value: string) {
        let result: film[] = [];
        switch (param) {
            case ('title'):
                result = this.getItems().filter((x) => (x.title == value));
                return result;
                break;
            case ('year'):
                result = this.getItems().filter((x) => (x.year.toString() == value));
                return result;
                break;
            case ('duration'):
                result = this.getItems().filter((x) => (x.duration.toString() == value));
                return result;
                break;
            case ('genre'):
                result = this.getItems().filter((x) => (x.genre == value));
                return result;
                break;
            default:
                return [];
                break;
        }
    }

    getItems() {
        return this.items;
    }
}
~~~
### **Pruebas**

Como bien indica la metodología TDD, la forma correcta de realizar las pruebas ajustándose a dicha metodología es escribiéndolas en primera instancia y a continuación escribiendo la mínima porción de código que permite pasar la prueba en cuestión.

Para ello, en primer lugar debemos importar los módulos `mocha` y expect, perteneciente a `chai`, además de las funciones que vamos a utilizar en las pruebas desde el fichero correspondiente. 

~~~
import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../ejercicio-1';
~~~

Para escribir las pruebas, en primer lugar escribimos una descripción del bloque de pruebas en general. A continuación, escribimos una descripción de la prueba en cuestión, seguida de una función anónima, donde haremos una llamada a la función que queremos probar, precedida de la palabra reservada `expect`. Esta llamada va seguida de las palabras reservadas to y be, y añadimos la palabra equal, ya que queremos asegurar que el resultado de la función es igual al que especificamos en la función equal.
Por ejemplo, las pruebas del ejercicio 1 son las siguientes: 

~~~typescript
let Pikachu = new Pokemon('Pikachu', 6, 0.4, 'eléctrico', {total: 320, HP: 350, attack: 55, defense: 40, spatk: 50, spdef: 50, speed: 90}, "Pika pika!", ["Dragon Ball"], ["DC", "Star Wars"]);
let Saiyan = new DragonBall('Goku', 62, 175, {total: 390, HP: 370, attack: 58, defense: 60, spatk: 50, spdef: 50, speed: 90}, "Kaio-Ken!", ["DC"], ["Marvel", "Pokemon"]);
let Chewbacca = new StarWars('Chewbacca', 150, 200, {total: 340, HP: 350, attack: 54, defense: 45, spatk: 50, spdef: 50, speed: 90}, "Grrrr...", ["Dragon Ball"], ["Marvel", "Pokemon"]);
let IronMan = new Marvel('Iron Man', 72, 172, {total: 350, HP: 320, attack: 57, defense: 47, spatk: 50, spdef: 50, speed: 90}, "Yo soy Iron Man!", ["DC"], ["Pokemon", "Star Wars"]);
let Batman = new DC('Batman', 84, 194, {total: 365, HP: 345, attack: 53, defense: 41, spatk: 50, spdef: 50, speed: 90}, "Soy Batman!", ["Star Wars"], ["Dragon Ball", "Pokemon"]);
let Saiyan2 = new DragonBall('Vegeta', 65, 170, {total: 390, HP: 320, attack: 58, defense: 60, spatk: 50, spdef: 50, speed: 90}, "Kakaroto...", ["DC"], ["Marvel", "Pokemon"]);

let Combat1 = new Combat(Pikachu, Saiyan);
let Combat2 = new Combat(Chewbacca, IronMan);
let Combat3 = new Combat(Batman, IronMan);
let Combat4 = new Combat(Saiyan, Chewbacca);
let Combat5 = new Combat(Saiyan, Saiyan2);
let encyclopedia = new Encyclopedia([Pikachu, Saiyan, Chewbacca, IronMan, Batman]);

describe('Exercise 1 tests', () => {
    it('Combat between Pikachu and Goku --> Pikachu wins!', () => {
       expect(Combat1.start()).to.be.equal('Pikachu wins!');
    });
    it('Combat between Chewbacca and Iron Man --> Chewbacca wins!', () => {
        expect(Combat2.start()).to.be.equal('Chewbacca wins!');
     });
    it('Combat between Batman and Iron Man --> Iron Man wins!', () => {
        expect(Combat3.start()).to.be.equal('Iron Man wins!');
     });
    it('Combat between Goku and Chewbacca --> Chewbacca wins!', () => {
        expect(Combat4.start()).to.be.equal('Chewbacca wins!');
     });
    it('Combat between two Saiyans --> Goku wins!', () => {
        expect(Combat5.start()).to.be.equal('Goku wins!');
     });
     it('Creating encyclopedia', () => {
        expect(encyclopedia.print()).to.be.equal('Pikachu, Goku, Chewbacca, Iron Man, Batman');
     });
     it('Pikachu type = electric', () => {
        expect(Pikachu.getType()).to.be.equal('eléctrico');
     });
     it('Pikachu weight = 6', () => {
        expect(Pikachu.getWeight()).to.be.equal(6);
     });
     it('Pikachu height = 0.4', () => {
        expect(Pikachu.getHeight()).to.be.equal(0.4);
     });
});
~~~

Todas estas pruebas deberán estar alojadas en el directorio tests. Además, para ejecutarlas más fácilmente se ha modificado el fichero package.json, y se ha añadido en el apartado de scripts lo siguiente:

~~~
"test": "mocha"
~~~

De esta forma podemos ejecutar las pruebas con el comando `npm run test`.

### **Documentación**

Para documentar el código de cada función, se deberá hacer uso de las etiquetas disponibles en [este enlace](https://typedoc.org/guides/doccomments/#supported-tags). Todo el texto se deberá englobar entre los símbolos /** */. Una gran ventaja del IDE Visual Studio Code es que al escribir los primeros caracteres para añadir comentarios, detecta automáticamente que se pretende incluir documentación, y al presionar enter, crea la estructura con las etiquetas correspondientes, donde sólo deberemos completar los espacios donde se corresponde con la descripción de los atributos y de la función.

![Autofill de comentario](https://i.imgur.com/GvWlIdQ.png)

Ejemplo de documentación del ejercicio 1:

~~~typescript
/**
 * Class that represents a DragonBall character
 */
 export class DragonBall extends Fighter {
    /**
     * Creates a new DragonBall character instance
     * @param name Name of a DragonBall character
     * @param weight Weight of a DragonBall character
     * @param height Height of a DragonBall character
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a DragonBall character such as HP, Attack, etc. defined on a type
     * @param strongerThan Universes the character is strong against
     * @param equalStrong Universes against which the character is just as strong
     * @param universe Universe from which it comes
     */
    constructor(name: string, weight: number, height: number, stats: statistics, phrase: string, strongerThan: string[], equalStrong: string[], private readonly universe: string = "Dragon Ball") {
        super(name, weight, height, stats, phrase, strongerThan, equalStrong);
    }

    /**
     * Obtains the universe from which the character comes
     * @returns Universe
     */
    getUniverse() {
        return this.universe;
    }
}
~~~

Para poder generar la documentación, como anteriormente se ha creado un fichero typedoc.json en el que se anota el nombre de todos los ficheros de los que se quiere desplegar la documentación y se ha añadido al apartado de scripts del fichero package.json esta línea:

~~~
"doc": "typedoc"
~~~

Ahora se puede generar la documentación a partir del comando `npm run doc`. Se generará un documento html que contiene una página con la documentación de las funciones que hemos escrito.

### **Cubrimiento**

Para poder generar informes de cubrimiento ha sido preciso descargar las dependencias `nyc`y `coveralls`, y añadir esta línea al apartado de scripts del fichero _package.json_:

~~~typescript
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
~~~

Para generar los informes es necesario que el repositorio sea público. Además, desde la web de [coveralls](https://coveralls.io/) seleccionando el repositorio al que queremos hacer seguimiento, deberemos obtener el token y colocarlo en un fichero _.coveralls.yml_. De esta manera, al ejecutar

~~~
npm run coverage
~~~

podremos ver qué porcentaje del código está cubierto por pruebas y qué líneas de cada fichero no lo están.
![coverage](https://i.imgur.com/qNJdhDd.png)

De esta forma podremos obtener un badge que colocaremos en el README.md, que indicará dicho porcentaje.

### **Problemas e incidencias encontrados**

En su mayoría todas las incidencias ocurridas durante el desarrollo de la práctica vienen dadas por la falta de práctica con clases e interfaces genéricas, ya que no habíamos tenido la oportunidad de trabajar con ellas hasta el momento. Por ello y debido al desconocimiento acerca de como utilizar las misma, ha sido algo difícil realizar los ejercicios propuestos, tanto en la práctica como en la modificación.
