import { CToast, CToastHeader, CToaster, CToastBody } from "@coreui/react";
import { useState, useRef, useEffect }  from "react";

import i18n from "./../translations/i18n";
import { useTranslation } from "react-i18next";

export function Toast({ type, message }) {
    const { t, i18n } = useTranslation();
   
    const [toast, addToast] = useState(0)
    const toaster = useRef() 

    useEffect(() => {
      if(type) callToast();
    },[type]);

    const callToast = () => {
        addToast(exampleToast)
    }

    const exampleToast = (
      <CToast color={type}>
        <CToastBody>{t(message)}</CToastBody>
      </CToast>
    )
    return (
      <>
        {/* <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton> */}
        <CToaster ref={toaster} push={toast} placement="top-end" />
      </>
    )
}