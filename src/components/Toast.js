import { CToast, CToaster, CToastBody } from "@coreui/react";
import { useState, useRef, useEffect }  from "react";

import i18n from "./../translations/i18n";
import { useTranslation } from "react-i18next";

export function Toast({ type, message }) {
    const { t, i18n } = useTranslation();
   
    const [toast, setToast] = useState(0)
    const toaster = useRef() 

    useEffect(() => {
      if(type) setToast(toastBody);
    },[type]);

    const toastBody = (
      <CToast color={type}>
        <CToastBody>{t(message)}</CToastBody>
      </CToast>
    )

    return <CToaster ref={toaster} push={toast} placement="top-end" />

}