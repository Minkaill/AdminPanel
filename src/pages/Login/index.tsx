import { Link } from "react-router-dom"
import { useState } from "react"
import { paths } from "paths"

import cs from "./login.module.scss"

export const Login = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div className={cs.wrapper}>
            <form className={cs.container}>
                <div className={cs.title}>
                    <h1>Авторизация</h1>
                    <p>У вас нет аккаунта? <Link to={paths.REGISTER}>Создайте прямо сейчас!</Link> </p>
                </div>

                <div className={cs.content}>
                    <div className={cs.field}>
                        <label>Электронная почта</label>
                        <input type="email" placeholder="Введите вашу почту" />
                    </div>

                    <div className={cs.field}>
                        <label>Пароль</label>
                        <input type="password" placeholder="Введите пароль" />
                    </div>

                    <div className={cs.support}>
                        <div className={cs.support__item}>
                            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
                            <p>Запомнить меня</p>
                        </div>

                        <Link to="/reset-password">Забыли пароль?</Link>
                    </div>
                </div>

                <button type="submit">Войти</button>
            </form>
        </div>
    )
}