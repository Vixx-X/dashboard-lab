declare interface User {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}

declare type DepartamentEnum = typeof Departament[keyof typeof Departament];
