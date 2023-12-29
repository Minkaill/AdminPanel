import { DatabaseOutlined, HomeOutlined, NotificationOutlined, PushpinOutlined, SettingOutlined, ShopOutlined, UserOutlined, WindowsOutlined } from "@ant-design/icons";
import { Data } from "./types";

export const navigationLinks: Data[] = [
    { path: "/", title: "Главная", icon: <HomeOutlined /> },
    { path: "/products", title: "Продукты", icon: <DatabaseOutlined /> },
    { path: "/orders", title: "Заказы", icon: <ShopOutlined /> },
    { path: "/users", title: "Пользователи", icon: <UserOutlined /> },
    { path: "/settings", title: "Настройки", icon: <SettingOutlined /> },
    { path: "/notification", title: "Уведомления", icon: <NotificationOutlined /> },
    { path: "/notes", title: "Заметки", icon: <PushpinOutlined /> },
    { path: "/active-sessions", title: "Активные сеансы", icon: <WindowsOutlined /> },
]
