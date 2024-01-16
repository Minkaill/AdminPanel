import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { UserLG } from "types"
import { paths } from "paths"

import { SubmitHandler, useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

import cs from "./login.module.scss"
import { useLoginMutation } from "services"
import toast from "react-hot-toast"

export const Login = () => {
    const [checked, setChecked] = useState(false)
    const [onLogin] = useLoginMutation()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserLG>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<UserLG> = (data) => {
        toast.promise(onLogin(data).then((dt) => {
            if (dt) {
                navigate(paths.HOME)
            }
            reset()
        }), {
            loading: 'Авторизация...',
            success: "Вы успешно авторизовались!",
            error: "Произошла ошибка :(",
        })
    }

    return (
        <div className={cs.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={cs.container}>
                <div className={cs.title}>
                    <h1>Авторизация</h1>
                    <p>У вас нет аккаунта? <Link to={paths.REGISTER}>Создайте прямо сейчас!</Link> </p>
                </div>

                <div className={cs.content}>
                    <div className={cs.field}>
                        <label>Электронная почта</label>
                        <input {...(register("identifier", { required: "Поле обязательно к заполнению!", pattern: { value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, message: "Пожалуйста введите валидный email!" } }))} type="text" placeholder="Введите вашу почту" />
                        <ErrorMessage errors={errors} name="identifier" render={({ message }) => <p className={cs.error}>{message}</p>} />
                    </div>

                    <div className={cs.field}>
                        <label>Пароль</label>
                        <input  {...(register("password", { required: "Поле обязательно к заполнению!" }))} type="password" placeholder="Введите пароль" />
                        <ErrorMessage errors={errors} name="password" render={({ message }) => <p className={cs.error}>{message}</p>} />
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