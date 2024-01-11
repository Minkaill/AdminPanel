import React from "react"
import { Orders } from "types"

import cs from "../../orders.module.scss"
import { declineTovar } from "hooks"

interface Tableprops {
    data: Orders
    isLoading: boolean
}

export const TableOrders: React.FC<Tableprops> = ({ data, isLoading }) => {
    return (
        <tbody>
            {data?.data.map(({ id, attributes }) => (
                <React.Fragment key={id}>
                    <tr>
                        <td>{id}</td>
                        <td title="Посмотреть товары"><span className={cs.products_td}>
                            {declineTovar(attributes.products.data.length)}
                        </span></td>
                        <td>{attributes.users_permissions_user.data.id}</td>
                        <td>{attributes.products.data.reduce((acc, current) => acc + +current.attributes.price, 0)} ₽</td>
                        <td>{attributes.payment_method}</td>
                    </tr>
                </React.Fragment>
            ))}
        </tbody>
    )
}