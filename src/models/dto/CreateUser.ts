// models/User.ts
export interface CreateUserDTO {
  fullName: string;
  schoolNumber: string;
  department: string;
  grade: number;
  username: string;
  password: string;
  userRole: "INSTRUCTOR" | "STUDENT";
}