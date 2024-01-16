import { useAppSelector } from "hooks"
import cs from "./content.module.scss"
import { selectedIsOpen } from "actions"
interface ContentProps {
    children: React.ReactNode,
    title?: string,
    text?: string
}

export const Content: React.FC<ContentProps> = ({ children, title, text }) => {
    const isOpen = useAppSelector(selectedIsOpen)

    const onSidebarOpen = {
        opacity: "20%"
    }

    return <div style={isOpen ? onSidebarOpen : {}} className={cs.content}>
        {title && <div className={cs.sidebar_toggle}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>}
        {children}
    </div>
}