import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import cs from "./searchtable.module.scss"
import React from "react"

interface SearchTableProps {
    placeholder: string
}

export const SearchTable: React.FC<SearchTableProps> = ({ placeholder }) => {
    return (
        <div className={cs.header}>
            <div className={cs.live_search}>
                {/* <SearchOutlined /> */}
                <input type="text" placeholder={placeholder} />
            </div>

            <div className={cs.add}>
                <PlusOutlined />
                <button>Добавить</button>
            </div>
        </div>
    )
}