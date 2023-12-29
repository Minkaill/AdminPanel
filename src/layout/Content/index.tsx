interface ContentProps {
    children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
    return <div style={{ background: "red" }}>{children}</div>
}