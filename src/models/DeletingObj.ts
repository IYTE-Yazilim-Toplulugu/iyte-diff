export enum Datatypes {
    PDF = "PDF",
    VIDEOLINK = "VIDEOLINK",
    USER = "USER"
}

export interface DeletingObj {
    id: number;
    type: Datatypes
}