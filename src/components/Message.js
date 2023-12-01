import { CAlert } from "@coreui/react"
import { useTranslation } from "react-i18next";

export function Message({type, message}) {
    const { t } = useTranslation();

    return <CAlert color={type}>{t(message)}</CAlert>
}