export default class Store {
  constructor(){
    this.domain = 'http://127.0.0.1:3000'
  }

  login(username, password) {
    return Vue.http.post(`${this.domain}/api/login`, {
      username: username, password: password
    });
  }

  register(username, email, password) {
    return Vue.http.post(`${this.domain}/api/register`, {
      username: username, email: email, password: password
    })
  }

}
