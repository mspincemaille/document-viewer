import { useEffect, useState } from "react";

import { CAlert, CTable, CSpinner, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'


import { config$, data$ } from "./services/services";
import { concat } from "rxjs";

export default function App() {

  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTable()

  }, []);

  function fetchTable() {
    const data = concat(config$, data$);

    data.subscribe({
      next: (results) => {
        setConfig(currentData => {
          return ({ ...currentData, ...results })
        });
      },
      error: () => {
        setError(true); 
        setLoading(false);
      },
      complete: () => setLoading(false),
    });

  }

  return (
    <>
      {loading ? <CSpinner></CSpinner> :
        error ? <CAlert color="danger">An error occured while searching for data</CAlert> : 
        <CTable>
        <CTableHead>
          <CTableRow> 
            { config.columns.map(header => {
                return <CTableHeaderCell key={ crypto.randomUUID() } scope="col">{ header.label }</CTableHeaderCell>
              })
            }
          </CTableRow>
        </CTableHead>
        <CTableBody>
         {
          config.items.map( row => {
            return ( <CTableRow key={ row.id }>
              <CTableHeaderCell>{ row.id }</CTableHeaderCell>
              <CTableDataCell>{ row.class }</CTableDataCell>
              <CTableDataCell>{ row.heading_1 }</CTableDataCell>
              <CTableDataCell>{ row.heading_2 }</CTableDataCell>
            </CTableRow>)
          })
         }
        </CTableBody>
      </CTable>}
    </>
  );
}

