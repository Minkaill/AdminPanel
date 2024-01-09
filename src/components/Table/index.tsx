import { PlusOutlined, SearchOutlined } from "@ant-design/icons"

import cs from "./table.module.scss"
import { Columns } from "data"
import React from "react"

interface TableProps<T extends object> {
    data: T[] | undefined,
    columns: Columns[]
}

export const Table = <T extends object>({ data, columns }: TableProps<T>) => {

    const tableColumns = () => {
        return (
            data && data.map(({ id, attributes }) => (
                <React.Fragment key={id}>
                    <tr>
                        <td>{attributes.name}</td>
                        <td>PT2004</td>
                        <td>{attributes.categories?.data.map(({ attributes }) => (
                            <>{attributes.name}</>
                        ))}</td>
                        <td>Nike</td>
                        <td>{attributes.price} ₽</td>
                        <td>{attributes.old_price} ₽</td>
                        <td>{attributes.amount}</td>
                        <td>{attributes.is_on_sale ? "Да" : "Нет"}</td>
                    </tr>
                </React.Fragment>
            ))
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
                        {columns.map((column) => (
                            <th key={column.dataIndex}>{column.title}</th>
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