//console.clear();
import { Collection } from './1.collection';
import { Vector } from './2.Vector';
import { delay, run } from './3.DelayConCallbacks';
import { chaining } from './4.api';
import { asyncAwait } from './5.apiAsync';
import { runDelay } from './6.DelayPromise';
// Punto 1 Collection
//const col = new Collection([2, 3, 4]);

// Punto 2 Vector
//console.log(new Vector(1, 2).sumar(new Vector(2, 3)));

// Punto 3 Delay con callbacks
//run();

// Punto 4 API Promise Chaining
//chaining();

// Punto 5 API Async/Await
//asyncAwait();

// Punto 6 DelayPromise
console.clear();
runDelay();
