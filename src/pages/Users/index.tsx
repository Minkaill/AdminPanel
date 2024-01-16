import { TableUsers } from "./components/TableUsers";
import { useGetUsersQuery } from "services";
import { columnsUsers } from "data"

import cs from "./user.module.scss"
import { SearchTable } from "components";
import React from "react";
import { SearchProps } from "types";

export const Users: React.FC<SearchProps> = ({ search }) => {
    const { data, isLoading } = useGetUsersQuery()

    if (data === undefined) return null

    return (
        <div className={cs.wrapper}>
            {search && <SearchTable placeholder="Введите имя пользователя" />}

            <table className={cs.table}>
                <thead>
                    <tr >
                        {columnsUsers.map(({ title, dataIndex }) => (
                            <th key={dataIndex}>{title}</th>
                        ))}
                    </tr>
                </thead>

                <TableUsers data={data} isLoading={isLoading} />
            </table>
        </div>
    )
}