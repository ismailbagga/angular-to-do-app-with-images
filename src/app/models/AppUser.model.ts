export class AppUser {
  id?: number;
  fullName: string = '';
  username: string = '';
  email: string = '';
  bio: string = '';
  password: string = '';
  constructor(
    fullName: string,
    username: string,
    email: string,
    bio: string,
    password: string
  );
  constructor(
    fullName: string,
    username: string,
    email: string,
    bio: string,
    password: string,
    id?: number
  ) {
    this.id = id;
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.bio = bio;
    this.password = password;
  }
}
export interface IAppUser {
  id?: number;
  fullName: string;
  username: string;
  email: string;
  bio?: string;
  password: string;
}
