export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    constructor(id:number, name:string, username:string, email:string, phone:string){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}