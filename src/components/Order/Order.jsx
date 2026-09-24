import { orders } from "./OrderData"



export default function Order() {
    return (
        <div>
            {
                orders.map((orderlist) => {
                    return (
                        <ul>
                            <li>{orderlist.id}</li>
                            <li>{orderlist.product}</li>
                            <li>{orderlist.qty}</li>
                            <li>{orderlist.total}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
