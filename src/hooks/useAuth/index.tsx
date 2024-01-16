import { useCurrentQuery } from "services"

interface IsAuthProps {
    children: React.ReactNode
}

export const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
    const { isLoading } = useCurrentQuery()

    if (isLoading) return <h1>Loading...</h1>;

    return children;
}