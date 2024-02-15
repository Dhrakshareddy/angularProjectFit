// src/app/user/user.model.ts
export interface User {
    userId?: number;
    name: string;
    password: string;
    dob: Date;
    email: string;
    contactNumber: number;
    role:string;
  }
  