import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from "@coreui/react";
import { Dropdown } from "./Dropdown";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Search } from "./Search";

export function Table({ data }) {
    const { t } = useTranslation();
    const [search, setSearch] = useState('')
    const [topic, setTopic] = useState('class')

    return (
        <div className="table-wrapper">
            <Search setSearch={setSearch}></Search>
            <CTable small bordered borderColor="light">
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell>{t('id')}</CTableHeaderCell>
                        <CTableHeaderCell>{t('Firstname')}</CTableHeaderCell>
                        <CTableHeaderCell>{t('Lastname')}</CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {data.filter((item) => {
                        return item[topic].toLowerCase().includes(search)
                    }).map(row => {
                        return <CTableRow key={row.id}>
                            <CTableHeaderCell>{row.id}</CTableHeaderCell>
                            <CTableDataCell>{row.class}</CTableDataCell>
                            <CTableDataCell>{row.heading_1}</CTableDataCell>
                            <CTableDataCell>
                                <Dropdown id={row.id}></Dropdown>
                            </CTableDataCell>
                        </CTableRow>
                    })}
                </CTableBody>
            </CTable>
        </div>
    )
}