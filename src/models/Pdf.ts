// types/pdf.ts

import { User } from "./User";

export enum PdfType {
  BOOK = 'BOOK',
  CHAPTER = 'CHAPTER',
  RESOURCE = 'RESOURCE',
  NOTE = "NOTE",
  HOMEWORK = "HOMEWORK",
  PASTEXAM = "PASTEXAM",
  EXAMRESULT = "EXAMRESULT"
}

export interface PdfDocument {
  id: number;
  name: string;
  type: PdfType;
  pdf: string; 
  date: Date;
  sender: User;

  additionalUrl: string;
  chapter: number;
}
