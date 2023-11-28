import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";

import i18n from "./../translations/i18n";
import { useTranslation } from "react-i18next";

export function Dropdown({id}) {
    const { t, i18n } = useTranslation();

    function viewDocument() {
        console.log(id)
    }

    function printDocument() {
        console.log(id)
    }

    function downloadDocument() {
        console.log(id)
    }

    return (
        <CDropdown>
            <CDropdownToggle></CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem onClick={viewDocument}>{t('View')}</CDropdownItem>
                <CDropdownItem onClick={printDocument}>{t('Print')}</CDropdownItem>
                <CDropdownItem onClick={downloadDocument}>{t('Download')}</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}