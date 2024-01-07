import React from "react";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { useGetProductsQuery } from "services";
import { columns } from "./data";

import cs from "./products.module.scss"

export const Products = () => {
    const { data, isLoading } = useGetProductsQuery()

    if (isLoading) return <p>Loading...</p>

    const tableColumns = () => {
        return (
            <>
                {data?.data.map(({ id, attributes }) => (
                    <React.Fragment key={id}>
                        <tr>
                            <td>{attributes.name}</td>
                            <td>PT2004</td>
                            <td>{attributes.categories.data.map(({ attributes }) => (
                                <>{attributes.name}</>
                            ))}</td>
                            <td>Nike</td>
                            <td>{attributes.price} ₽</td>
                            <td>{attributes.old_price} ₽</td>
                            <td>{attributes.amount}</td>
                            <td>{attributes.is_on_sale ? "Да" : "Нет"}</td>
                        </tr>
                    </React.Fragment>
                ))}</>
        )
    }

    return (
        <div className={cs.wrapper}>
            <div className={cs.header}>
                <div className={cs.live_search}>
                    <SearchOutlined />
                    <input type="text" />
                </div>

                <div className={cs.add}>
                    <PlusOutlined />
                    <button>Добавить</button>
                </div>
            </div>

            <table className={cs.table}>
                <thead>
                    <tr >
                        {columns.map(({ title, dataIndex }) => (
                            <th key={dataIndex}>{title}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {tableColumns()}
                </tbody>
            </table>
        </div>
    )
}