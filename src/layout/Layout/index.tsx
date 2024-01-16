import { Sidebar, Content } from "layout"

import cs from "./layout.module.scss"
import { useAppSelector } from "hooks"
import { userState } from "actions"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { paths } from "paths"

interface LayoutProps {
    children: React.ReactNode,
    title?: string,
    text?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title, text }) => {
    const user = useAppSelector(userState)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate(paths.LOGIN)
        }
    }, [navigate, user])

    return (
        <div className={cs.wrapper}>
            <Sidebar />
            <Content text={text} title={title}>{children}</Content>
        </div>
    )
}