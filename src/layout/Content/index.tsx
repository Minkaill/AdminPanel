import { MenuOutlined } from "@ant-design/icons"
import cs from "./content.module.scss"

interface ContentProps {
    children: React.ReactNode,
    title: string
}

export const Content: React.FC<ContentProps> = ({ children, title }) => {
    return <div className={cs.content}>
        <div className={cs.sidebar_toggle}>
            <MenuOutlined />
            <h1>{title}</h1>
        </div>
        {children}
    </div>
}