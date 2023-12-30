import { Sidebar, Content } from "layout"
import cs from "./layout.module.scss"

interface LayoutProps {
    children: React.ReactNode,
    title: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div className={cs.wrapper}>
            <Sidebar />
            <Content title={title}>{children}</Content>
        </div>
    )
}