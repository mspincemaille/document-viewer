import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from "@coreui/react";

export function Table({config}) {
    return (
        <CTable>
            <CTableHead>
                <CTableRow>
                    {config.columns.map(header => {
                        return <CTableHeaderCell key={crypto.randomUUID()} scope="col">{header.label}</CTableHeaderCell>
                    })
                    }
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {
                    config.items.map(row => {
                        return (<CTableRow key={row.id}>
                            <CTableHeaderCell>{row.id}</CTableHeaderCell>
                            <CTableDataCell>{row.class}</CTableDataCell>
                            <CTableDataCell>{row.heading_1}</CTableDataCell>
                            <CTableDataCell>{row.heading_2}</CTableDataCell>
                        </CTableRow>)
                    })
                }
            </CTableBody>
        </CTable>
    )
}