import { Orders, Products, Users } from "pages"

import cs from "./home.module.scss"

export const HomePage = () => {
    return (
        <div className={cs.wrapper}>
            <Products search={false} />
            <Orders search={false} />
            <Users search={false} />
        </div>
    )
}