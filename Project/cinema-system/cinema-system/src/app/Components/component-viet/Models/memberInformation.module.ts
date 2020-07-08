export class MemberInformationModule {
  id:number;
  fullName:string;
  birthday:string;
  gender:string;
  idCard:string;
  email:string;
  phone:string;
  address:string;
  user: User;
}
export interface User {
  id: number,
  password: string,
  username: string,
  status: boolean,
  roles: []

}
