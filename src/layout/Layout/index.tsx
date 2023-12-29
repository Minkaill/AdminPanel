import { Sidebar, Content } from "layout"
import cs from "./layout.module.scss"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={cs.wrapper}>
            <Sidebar />
            <Content>{children}</Content>
        </div>
    )
}