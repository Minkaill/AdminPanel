import { navigationLinks } from "data/template"
import cs from "./sidebar.module.scss"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks/useRedux/index"
import { logout, selectedIsOpen, setOpen } from "actions"
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons"

export const Sidebar = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(selectedIsOpen)

    const onLogout = () => {
        dispatch(logout())
        window.location.reload()
    }

    const onOpen = () => {
        dispatch(setOpen())
    }

    const onOpenSidebar = {
        left: "0",
    }

    const onCloseSidebar = {
        left: "-260px"
    }

    return <div style={isOpen ? onOpenSidebar : onCloseSidebar} className={cs.wrapper}>
        <div className={cs.profile}></div>
        <div className={cs.nav_links}>
            {navigationLinks.map((nav, idx) => (
                <NavLink to={nav.path} key={idx}
                    className={({ isActive, isPending }) =>
                        isPending ? cs.nav_element : isActive ? cs.nav_element_active : cs.nav_element}>
                    {nav.icon}
                    <p>{nav.title}</p>
                </NavLink>
            ))}
        </div>

        <div className={cs.footer}>
            <div onClick={onLogout} className={cs.logout}>
                <LogoutOutlined />
                <button>Выйти</button>
            </div>
        </div>

        <div onClick={onOpen} className={cs.sidebar_toggle}>
            <MenuOutlined />
        </div>
    </div>
}