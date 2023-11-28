import { useEffect, useState } from "react";

import { CAlert, CSpinner } from "@coreui/react";
import { Table } from '../src/components/Table';
import '@coreui/coreui/dist/css/coreui.min.css'


import { config$, data$ } from "./services/services";
import { concat } from "rxjs";
import i18n from "./translations/i18n";
import { useTranslation } from "react-i18next";


export default function App() {

  const { t, i18n } = useTranslation();
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
      { loading ? <CSpinner></CSpinner> : error ? <CAlert color="danger">{t('Error Message')}</CAlert> : <Table config={config}></Table>}
    </>
  );
}

