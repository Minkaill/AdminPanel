import { Products } from "models"
import React from "react"

interface Tableprops {
    data: Products
    isLoading: boolean
}

export const TableProducts: React.FC<Tableprops> = ({ data, isLoading }) => {
    return (
        <tbody>
            {data.data.map(({ id, attributes }) => (
                <React.Fragment key={id}>
                    <tr>
                        <td>{attributes.name}</td>
                        <td>PT2004</td>
                        <td>{attributes.categories.data.map(({ id, attributes }) => (
                            <React.Fragment key={id}>{attributes.name}</React.Fragment>
                        ))}</td>
                        <td>{attributes.brend.data.attributes.name}</td>
                        <td>{attributes.price} ₽</td>
                        <td>{attributes.old_price} ₽</td>
                        <td>{attributes.amount}</td>
                        <td>{attributes.is_on_sale ? "Да" : "Нет"}</td>
                    </tr>
                </React.Fragment>
            ))}</tbody>
    )
}