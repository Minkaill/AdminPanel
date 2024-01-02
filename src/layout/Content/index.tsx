import { useAppDispatch, useAppSelector } from "hooks/useRedux/index"
import { MenuOutlined } from "@ant-design/icons"
import { selectedIsOpen, setOpen } from 'actions';

import cs from "./content.module.scss"
interface ContentProps {
    children: React.ReactNode,
    title?: string
}

export const Content: React.FC<ContentProps> = ({ children, title }) => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(selectedIsOpen)

    const onOpen = () => {
        dispatch(setOpen())
    }

    const contentToggleLeft = {
        left: isOpen ? "-260px" : "0px",
    }

    return <div style={contentToggleLeft} className={cs.content}>
        {title && <div onClick={onOpen} className={cs.sidebar_toggle}>
            <MenuOutlined />
            <h1>{title}</h1>
        </div>}
        {children}
    </div>
}