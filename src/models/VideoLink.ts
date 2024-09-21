import { User } from "./User";

export enum VideoLinkType {
    RESOURCE = 'RESOURCE',
    LECTURE = 'LECTURE',
    // Diğer türleri ekleyebilirsiniz
  }
  
  export interface VideoLink {
    id: number;
    name: string;
    videoType: VideoLinkType;
    url: string; 
    date: Date;
    sender: User;
  }