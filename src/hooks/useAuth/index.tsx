import { paths } from "paths"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCurrentQuery } from "services"

interface IsAuthProps {
    children: React.ReactNode
}

export const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
    const { isLoading, data } = useCurrentQuery()
    const navigate = useNavigate()

    // requires correction
    useEffect(() => {
        if (!data) {
            const timeoutId = setTimeout(() => {
                navigate(paths.LOGIN)
            }, 500);

            return () => clearTimeout(timeoutId);
        }
    }, [isLoading, data, navigate]);

    if (isLoading) return <h1>Loading...</h1>;

    return children;
}