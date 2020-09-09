export class User {
  login?: string;
  password?: string;
  token?: string;

  constructor(args: User = {}) {
    this.login = args.login;
    this.password = args.password;
    this.token = args.token;
  }
}
