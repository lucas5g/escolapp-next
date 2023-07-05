import jwtDecode from "jwt-decode";
// import { UserInterface } from "../interfaces";

export function storageLogged(){
  return {
    profile: 'admin',
    email: 'lucas@mail.com',
    name: 'lucas de sousa'
  }
  // const accessToken = localStorage.getItem('accessToken') 
  // const logged:UserInterface = jwtDecode(accessToken ?? '')

  // return logged

}  


