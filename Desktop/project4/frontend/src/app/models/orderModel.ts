

export interface Order{
    _id:string;
    clientId:string;
    cartId:string;
    sum:number;
    city:string;
    street:string;
    arrival_date:Date;
    order_date:Date;
    last_fourCC:number;
}

