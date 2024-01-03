import { navigationLinks } from "data/template"
import cs from "./sidebar.module.scss"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks/useRedux/index"
import { selectedIsOpen, setOpen } from "actions"
import { CloseOutlined, LogoutOutlined } from "@ant-design/icons"

export const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(selectedIsOpen)

    const onOpen = () => {
        dispatch(setOpen())
    }

    return <div className={`${cs.wrapper} ${isOpen ? cs.wrapper_mb : ""}`}>
        <div className={cs.profile}></div>
        <div className={cs.nav_links}>
            {navigationLinks.map((nav, idx) => (
                <div key={idx} onClick={() => navigate(nav.path)} className={cs.nav_element}>
                    {nav.icon}
                    <p>{nav.title}</p>
                </div>
            ))}
        </div>

        <div className={cs.footer}>
            <div className={cs.logout}>
                <LogoutOutlined />
                <button>Выйти</button>
            </div>
        </div>

        <div onClick={onOpen} className={cs.sidebar_toggle}>
            <CloseOutlined />
        </div>
    </div>
}