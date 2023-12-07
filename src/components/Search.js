import { CFormInput,} from "@coreui/react";

export function Search({setSearch}) {
    return <CFormInput className="search" type="text" onChange={(e) => setSearch(e.target.value)}/>
}