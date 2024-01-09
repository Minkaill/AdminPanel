import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import cs from "./searchtable.module.scss"

export const SearchTable = () => {
    return (
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
    )
}