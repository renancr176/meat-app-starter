class OrderModel 
{
    public id: number;

    constructor(public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public items: Array<OrderItemModel> = []) { }
}

class OrderItemModel 
{
    constructor(public quantity: number,
        public menuId: string) { }
}

export { OrderModel, OrderItemModel }