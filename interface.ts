interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): string;
}

interface WorkerHuman {
    firstName: string;
    lastName: string;
    age: number;
}

function printWorker(worker: WorkerHuman) {
    console.log(`${worker.firstName} ${worker.lastName} (${worker.age})`);
  }

const worker1 : WorkerHuman = {
    firstName: 'Johnathan',
    lastName: 'Jpol',
    age: 25
}
printWorker(worker1);

const worker3  = {
    firstName: 'Joh',
    lastName: 'Jol',
    age: 27
}
printWorker(worker3);

const worker2 = {
    firstName: 'Johnathan',
    lastName: 'Jpol',
}
//  Property 'age' is missing in type '{ firstName: string; lastName: string; }' but required in type 'WorkerHuman'
// printWorker(worker2);

