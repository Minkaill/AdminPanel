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
        element: <Layout title="Вход"><Login /></Layout>
    },
    {
        path: paths.REGISTER,
        element: <Layout title="Регистрация"><Register /></Layout>
    },
    {
        path: paths.PRODUCTS,
        element: <Layout title="Продукты"><Products /></Layout>
    },
    {
        path: paths.ORDERS,
        element: <Layout title="Заказы"><Orders /></Layout>
    },
    {
        path: paths.SETTINGS,
        element: <Layout title="Настройки"><Settings /></Layout>
    },
    {
        path: paths.NOTIFICATION,
        element: <Layout title="Уведомления"><Notification /></Layout>
    },
    {
        path: paths.NOTES,
        element: <Layout title="Заметки"><Notes /></Layout>
    },
    {
        path: paths.ACTIVESESSIONS,
        element: <Layout title="Активны сеансы"><ActiveSessions /></Layout>
    },
    {
        path: paths.USERS,
        element: <Layout title="Пользователи"><Users /></Layout>
    },
])