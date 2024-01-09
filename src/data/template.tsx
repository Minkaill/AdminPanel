import { DatabaseOutlined, HomeOutlined, NotificationOutlined, PushpinOutlined, SettingOutlined, ShopOutlined, UserOutlined, WindowsOutlined } from "@ant-design/icons";
import { Columns, Data } from "./types";

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

export const columnsProducts: Columns[] = [
    {
        title: 'Название',
        dataIndex: 'name',
    },
    {
        title: 'Склад id',
        dataIndex: 'sclad_id',
    },
    {
        title: 'Категория',
        dataIndex: 'category',
    },
    {
        title: 'Бренд',
        dataIndex: 'brand',
    },
    {
        title: 'Цена',
        dataIndex: 'price',
    },
    {
        title: 'Старая цена',
        dataIndex: 'old_price',
    },
    {
        title: 'Количество',
        dataIndex: 'amount',
    },
    {
        title: 'В продаже',
        dataIndex: 'is_on_sale',
    },
];