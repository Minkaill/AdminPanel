import { useGetProductsQuery } from "services";
import { columnsProducts } from "data"

import cs from "./orders.module.scss"
import { SearchTable } from "components/SearchTable";
import { TableProducts } from "./components/TableOrders";

export const Orders = () => {
    const { data, isLoading } = useGetProductsQuery()

    return (
        <div className={cs.wrapper}>
            <SearchTable />

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