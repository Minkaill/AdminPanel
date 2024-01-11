import { TableProducts } from "./components/TableProducts";
import { useGetProductsQuery } from "services";
import { columnsProducts } from "data"

import cs from "./products.module.scss"
import { SearchTable } from "components";

export const Products = () => {
    const { data, isLoading } = useGetProductsQuery()

    if (data === undefined) return null

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