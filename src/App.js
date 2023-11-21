import { useEffect, useState } from "react";

import { CTable, CSpinner } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'


import { fetchData, fetchConfig } from "./services/services";
import { concat } from "rxjs";

export default function App() {

  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({});

  useEffect(() => {
    const data = concat(fetchData(), fetchConfig());
    
    data.subscribe((results) => {
      setConfig(currentData => {
        return ({ ...currentData, ...results })
      });
      setTimeout(() => {setLoading(false) }, 3000);
    }); 

  },[])

  

  return (
    <>
      { loading ? <CSpinner></CSpinner> : <CTable columns={config.columns} items={config.items} hover></CTable> }
    </>
  );
}

