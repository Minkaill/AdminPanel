import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { TableProducts } from "./components/TableProducts";
import { useGetProductsQuery } from "services";
import { columnsProducts } from "data"

import cs from "./products.module.scss"

export const Products = () => {
    const { data, isLoading } = useGetProductsQuery()

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