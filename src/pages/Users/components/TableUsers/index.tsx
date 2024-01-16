import { Users } from 'types';
import React from "react"
import { useRoles } from 'hooks';

interface Tableprops {
    data: Users
    isLoading: boolean
}

export const TableUsers: React.FC<Tableprops> = ({ data, isLoading }) => {
    return (
        <tbody>
            {data.map((user) => (
                <React.Fragment key={user.id}>
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{useRoles(user.role.name)}</td>
                        <td>{user.confirmed ? "Подтвержден" : "Не подтвержден"}</td>
                        <td>{user.id}</td>
                    </tr>
                </React.Fragment>
            ))}</tbody>
    )
}