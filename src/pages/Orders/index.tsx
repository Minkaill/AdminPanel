import { TableOrders } from "./components/TableOrders";
import { SearchTable } from "components";

import { useGetOrdersQuery } from "services";
import { columnsOrders } from "data"

import cs from "./orders.module.scss"
import { SearchProps } from "types";

export const Orders: React.FC<SearchProps> = ({ search }) => {
    const { data, isLoading } = useGetOrdersQuery()

    if (data === undefined) return null

    return (
        <div className={cs.wrapper}>
            {search && <SearchTable placeholder="Введите идентификатор заказа" />}

            <table className={cs.table}>
                <thead>
                    <tr >
                        {columnsOrders.map(({ title, dataIndex }) => (
                            <th key={dataIndex}>{title}</th>
                        ))}
                    </tr>
                </thead>

                <TableOrders data={data} isLoading={isLoading} />
            </table>
        </div>
    )
}