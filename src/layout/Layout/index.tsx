import { Sidebar, Content } from "layout"
import { IsAuth } from "hooks/useAuth"

import cs from "./layout.module.scss"

interface LayoutProps {
    children: React.ReactNode,
    title?: string,
    text?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title, text }) => {
    return (
        <div className={cs.wrapper}>
            <Sidebar />
            <IsAuth>
                <Content text={text} title={title}>{children}</Content>
            </IsAuth>
        </div>
    )
}