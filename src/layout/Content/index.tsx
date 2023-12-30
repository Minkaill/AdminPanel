import { useAppDispatch, useAppSelector } from "hooks/reduxHelper"
import { MenuOutlined } from "@ant-design/icons"
import { selectedIsOpen, setOpen } from 'actions';

import cs from "./content.module.scss"
interface ContentProps {
    children: React.ReactNode,
    title: string
}

export const Content: React.FC<ContentProps> = ({ children, title }) => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(selectedIsOpen)

    const onOpen = () => {
        dispatch(setOpen())
    }

    const sidebarOpenStyle = {
        left: isOpen ? "-260px" : "0px",
    }

    return <div style={sidebarOpenStyle} className={cs.content}>
        <div onClick={onOpen} className={cs.sidebar_toggle}>
            <MenuOutlined />
            <h1>{title}</h1>
        </div>
        {children}
    </div>
}