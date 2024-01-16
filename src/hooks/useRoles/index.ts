export const useRoles = (role: string) => {
    if (role === "SuperPuperAdmin") {
        return "Администратор"
    }
    return "Пользователь"
}
