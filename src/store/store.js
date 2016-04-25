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

  setAuth(isAuth, token) {
    if(isAuth) {
      if (token) {
        localStorage.setItem("token", token);
      }
      Vue.http.options.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    } else {
      localStorage.removeItem("token");
      if(Vue.http.options.headers['Authorization']) {
        delete Vue.http.options.headers['Authorization']
      }
    }
  }

  reSendMail() {
    return Vue.http.post(`${this.domain}/api/user/reSend`);
  }

  getCaptchaToken() {
    return Vue.http.get(`${this.domain}/api/genCaptchaToken`);
  }

  findPass(email, code, token) {
    return Vue.http.post(`${this.domain}/api/findPass`,{
      email: email, code: code, token: token
     })
  }

  checkLoginAndFetch(token) {
    return Vue.http.post(`${this.domain}/api/checkLogin`, { token: token});
  }

  getUserInfos(username) {
    return Vue.http.get(`${this.domain}/api/u/${username}`)
  }

  getUserQuestions(username) {
    return Vue.http.get(`${this.domain}/api/u/${username}/questions`)
  }

  getUserAnswers(username) {
    return Vue.http.get(`${this.domain}/api/u/${username}/answers`)
  }

}
