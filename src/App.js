import { useEffect, useState } from "react";

import { CSpinner } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import i18n from "./translations/i18n";

import { Table } from './components/Table';
import { Message } from './components/Message';

import { data$ } from "./services/services";
import { concat } from "rxjs";

export default function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState({});


  useEffect(() => {
    fetchTable()
  }, []);

  const fetchTable = () => {
  
    data$.subscribe({
      next: (results) => setData(results),
      error: (error) => {
        setError({ 
          status : error?.status,
          isError: true,
        });
        setLoading(false);
      },
      complete: () => setLoading(false),
    });
  }

  return (
    <>
      {
        loading ? <CSpinner></CSpinner> : 
        error.isError ? <Message type='danger' message={error?.status}></Message> : <Table data={data}></Table>
      }
    </>
  );
}

