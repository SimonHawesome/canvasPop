export class Order {

    constructor(
        public id: number,
        public orderedBy: string,
        public flavour: number,
        public shouldSubscribe: boolean,
      ) {  }
}