import React from "react";

import { TableProducts } from "./components/TableProducts";
import { useGetProductsQuery } from "services";
import { SearchTable } from "components";
import { columnsProducts } from "data"
import { SearchProps } from "types";

import cs from "./products.module.scss"

export const Products: React.FC<SearchProps> = ({ search }) => {
    const { data, isLoading } = useGetProductsQuery()

    if (data === undefined) return null

    return (
        <div className={cs.wrapper}>
            {search && <SearchTable placeholder="Введите название товара" />}

            <table className={cs.table}>
                <thead>
                    <tr >
                        {columnsProducts.map(({ title, dataIndex }) => (
                            <th key={dataIndex}>{title}</th>
                        ))}
                    </tr>
                </thead>

                <TableProducts data={data} isLoading={isLoading} />
            </table>
        </div>
    )
}