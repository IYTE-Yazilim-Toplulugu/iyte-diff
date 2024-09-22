// models/User.ts
export interface User {
  id: number;
  name: string;
  schoolNumber: string;
  department: string;
  grade: number;
  username: string;
  password: string;
  userRole: "INSTRUCTOR" | "STUDENT";
}

export enum Role {
    STUDENT, INSTRUCTOR
}


