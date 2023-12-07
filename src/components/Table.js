import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from "@coreui/react";
import { Dropdown } from "./Dropdown";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Search } from "./Search";

export function Table({ data }) {
    const { t } = useTranslation();
    const [search, setSearch] = useState('')

    return (
        <>
            <Search setSearch={setSearch}></Search>
            <CTable>
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
                        return search.toLowerCase() === ''
                        ? item
                        : item.class.includes(search)
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
        </>
    )
}