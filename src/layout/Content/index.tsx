import cs from "./content.module.scss"
interface ContentProps {
    children: React.ReactNode,
    title?: string,
    text?: string
}

export const Content: React.FC<ContentProps> = ({ children, title, text }) => {
    return <div className={cs.content}>
        {title && <div className={cs.sidebar_toggle}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>}
        {children}
    </div>
}