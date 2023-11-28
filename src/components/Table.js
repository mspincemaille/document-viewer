import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from "@coreui/react";
import { Dropdown } from "./Dropdown";

export function Table({ config }) {
    return (
        <CTable>
            <CTableHead>
                <CTableRow>
                    {
                        config.columns.map(header => {
                            return <CTableHeaderCell key={crypto.randomUUID()} scope="col">{header.label}</CTableHeaderCell>
                        })
                    }
                    <CTableDataCell></CTableDataCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {
                    config.items.map(row => {
                        return <CTableRow key={row.id}>
                            <CTableHeaderCell>{row.id}</CTableHeaderCell>
                            <CTableDataCell>{row.class}</CTableDataCell>
                            <CTableDataCell>{row.heading_1}</CTableDataCell>
                            <CTableDataCell>{row.heading_2}</CTableDataCell>
                            <CTableDataCell>
                                <Dropdown id={row.id}></Dropdown>
                            </CTableDataCell>
                        </CTableRow>
                    })
                }
            </CTableBody>
        </CTable>
    )
}