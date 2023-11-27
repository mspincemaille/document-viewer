import { useEffect, useState } from "react";

import { CAlert, CSpinner } from "@coreui/react";
import { Table } from '../src/components/Table';
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
      {loading ? <CSpinner></CSpinner> : error ? <CAlert color="danger">An error occured while searching for data</CAlert> : <Table config={config}></Table>}
    </>
  );
}

