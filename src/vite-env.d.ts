/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_BU_COURSE_SEARCH_ENDPOINT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}