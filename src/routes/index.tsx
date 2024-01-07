import { createBrowserRouter } from "react-router-dom";
import { paths } from "paths";
import { Login, Register, Products, Orders, Settings, Notification, Notes, ActiveSessions, Users, HomePage } from "pages";
import { Layout } from "layout/Layout";

export const router = createBrowserRouter([
    {
        path: paths.HOME,
        element: <Layout title="Главная"><HomePage /></Layout>
    },
    {
        path: paths.LOGIN,
        element: <Login />
    },
    {
        path: paths.REGISTER,
        element: <Register />
    },
    {
        path: paths.PRODUCTS,
        element: <Layout text="Управляйте своими продуктами" title="Продукты"><Products /></Layout>
    },
    {
        path: paths.ORDERS,
        element: <Layout text="Управляйте своими заказами" title="Заказы"><Orders /></Layout>
    },
    {
        path: paths.SETTINGS,
        element: <Layout text="Настраивайте свой профиль и настройки" title="Настройки"><Settings /></Layout>
    },
    {
        path: paths.NOTIFICATION,
        element: <Layout text="Регулируйте свои уведомления" title="Уведомления"><Notification /></Layout>
    },
    {
        path: paths.NOTES,
        element: <Layout text="Управляйте своими заметками" title="Заметки"><Notes /></Layout>
    },
    {
        path: paths.ACTIVESESSIONS,
        element: <Layout text="Будьте в курсе активных сеансов вашего аккаунта" title="Активны сеансы"><ActiveSessions /></Layout>
    },
    {
        path: paths.USERS,
        element: <Layout text="Ваши клиенты" title="Пользователи"><Users /></Layout>
    },
])