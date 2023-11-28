import { CAlert } from "@coreui/react"

import i18n from "./../translations/i18n";
import { useTranslation } from "react-i18next";

export function Message({type, message}) {
    const { t, i18n } = useTranslation();

    return <CAlert color={type}>{t(message)}</CAlert>
}