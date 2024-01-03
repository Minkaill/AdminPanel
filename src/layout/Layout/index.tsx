import { Sidebar, Content } from "layout"
import { Toaster } from "react-hot-toast"
import { IsAuth } from "hooks/useAuth"

import cs from "./layout.module.scss"

interface LayoutProps {
    children: React.ReactNode,
    title: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div className={cs.wrapper}>
            <Sidebar />
            <IsAuth>
                <Content title={title}>{children}</Content>
            </IsAuth>
        </div>
    )
}