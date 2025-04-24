export class SignUp{   
    constructor(
        public name: string = "",
        public email: string = "",
        public password: string = "",
    ){}
}

export class LoginDto {
    constructor(
      public email: string = "",
      public password: string = ""
    ){}
}

export type User = {
    id: number,
    email: string,
    name: string,
}

export type LoggedUser = {
    accessToken: string,
    user: User
}
