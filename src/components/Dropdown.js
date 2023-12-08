import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { fetchDocument } from "../services/services";
import { Toast } from '../components/Toast';

export function Dropdown({ id }) {
    const { t } = useTranslation();
    const [toast, setToast] = useState({});

    const printDocument = () => {
        fetchDocument(id).subscribe({
            next: (URI) => {
                window.open(URI).print();
            },
            error: (error) => setToast({ type: 'danger', message: error?.status || 400 })
        });
    }

    const downloadDocument = () => {
        fetchDocument(id).subscribe({
            next: (URI) => {
                const downloadLink = document.createElement('a');

                downloadLink.href = URI;
                downloadLink.download = 'image.jpg'
                downloadLink.click();
                downloadLink.remove();

                setToast({ type: 'light', message: 200 })
            },
            error: (error) => setToast({ type: 'danger', message:  error?.status || 400 })
        });
    }

    return (
        <>
            <Toast type={toast.type} message={toast.message}></Toast>
            <CDropdown>
                <CDropdownToggle color="light"></CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={downloadDocument}>{t('Download')}</CDropdownItem>
                    <CDropdownItem onClick={printDocument}>{t('Print')}</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
        </>
    )
}