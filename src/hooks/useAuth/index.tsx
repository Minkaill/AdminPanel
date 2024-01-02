import { paths } from "paths"
import { Navigate } from "react-router-dom"
import { useCurrentQuery } from "services"

interface IsAuthProps {
    children: React.ReactNode
}

export const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
    const { isLoading, data } = useCurrentQuery()

    if (isLoading) return <h1>Loading...</h1>

    return !data ? <Navigate to={paths.LOGIN} /> : children
}