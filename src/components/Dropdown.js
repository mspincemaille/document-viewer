import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";

import i18n from "./../translations/i18n";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { fetchDocument } from "../services/services";
import { Toast } from '../components/Toast';

export function Dropdown({ id }) {
    const { t, i18n } = useTranslation();
    const [toast, setToast] = useState({});

    const ToastRef = useRef();

    function viewDocument() {
        fetchDocument(id);
    }

    function printDocument() {
        console.log(id)
    }

    function downloadDocument() {
        fetchDocument(id).subscribe({
            next: (result) => {
                const URI = URL.createObjectURL(result);
                const downloadLink = document.createElement('a');
                
                downloadLink.href = URI;
                downloadLink.download = 'image.jpg'
                downloadLink.click();
                
                setToast({type:'light', message:'Download Success'})
            },
            error: () => setToast({type:'danger', message:'Error Message'})
        });
    }

    return (
        <>
        <Toast type={toast.type} message={toast.message}></Toast>
            <CDropdown>
                <CDropdownToggle></CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={viewDocument}>{t('View')}</CDropdownItem>
                    <CDropdownItem onClick={printDocument}>{t('Print')}</CDropdownItem>
                    <CDropdownItem onClick={downloadDocument}>{t('Download')}</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
        </>
    )
}