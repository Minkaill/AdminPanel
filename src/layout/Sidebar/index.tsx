import { navigationLinks } from "data/template"
import cs from "./sidebar.module.scss"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
    const navigate = useNavigate()

    return <div className={cs.wrapper}>
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

        </div>
    </div>
}