import { useEffect, useState } from "react";

import { CSpinner } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import i18n from "./translations/i18n";

import { Table } from './components/Table';
import { Message } from './components/Message';

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
      {
        loading ?
          <CSpinner></CSpinner> : error ?
            <Message type='danger' message='Error Message'></Message> : <Table config={config}></Table>
      }
    </>
  );
}

