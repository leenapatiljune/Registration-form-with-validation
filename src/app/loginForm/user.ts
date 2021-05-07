export class User{

    constructor(
        public fname:string,
        public lname:string,
        public email: string,
        public mobile: number,
        public dob:string,
        public address:string,
        public city:string,
        public state:string,
        public password: any,
        public confirmPassword: any
    ){}
}