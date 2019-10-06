export class Chef {
    name: String;
    email: String;

    constructor({name= '', email= ''}) {
      this.name = name;
      this.email = email;
    }
}
