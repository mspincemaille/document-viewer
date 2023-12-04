import { CToast, CToaster, CToastBody } from "@coreui/react";
import { useState, useRef, useEffect }  from "react";
import { useTranslation } from "react-i18next";

export function Toast({ type, message }) {
    const { t } = useTranslation();
   
    const [toast, setToast] = useState(0)
    const toaster = useRef() 

    useEffect(() => {
      message && setToast(toastBody);
    },[message]);

    const toastBody = (
      <CToast color={type || 'light'}>
        <CToastBody>{t(message)}</CToastBody>
      </CToast>
    )

    return <CToaster ref={toaster} push={toast} placement="top-end" />

}