import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import { Login, Register, Products, Orders, Settings, Notification, Notes, ActiveSessions, Users, HomePage } from "pages";
import { Layout } from "layout/Layout";

export const router = createBrowserRouter([
    {
        path: paths.HOME,
        element: <Layout><HomePage /></Layout>
    },
    {
        path: paths.LOGIN,
        element: <Layout><Login /></Layout>
    },
    {
        path: paths.REGISTER,
        element: <Layout><Register /></Layout>
    },
    {
        path: paths.PRODUCTS,
        element: <Layout><Products /></Layout>
    },
    {
        path: paths.ORDERS,
        element: <Layout><Orders /></Layout>
    },
    {
        path: paths.SETTINGS,
        element: <Layout><Settings /></Layout>
    },
    {
        path: paths.NOTIFICATION,
        element: <Layout><Notification /></Layout>
    },
    {
        path: paths.NOTES,
        element: <Layout><Notes /></Layout>
    },
    {
        path: paths.ACTIVESESSIONS,
        element: <Layout><ActiveSessions /></Layout>
    },
    {
        path: paths.USERS,
        element: <Layout><Users /></Layout>
    },
])