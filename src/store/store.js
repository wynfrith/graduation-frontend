export default class Store {
  constructor(){
    this.domain = 'http://127.0.0.1:3000'
    // this.domain = ''
  }

  getList(options) {
      return Vue.http.get(`${this.domain}/api/q/list`, options)
  }

  getRecommendList() {
    return Vue.http.get(`${this.domain}/api/q/recommends`)
  }

  getQuestion(qid) {
    return Vue.http.get(`${this.domain}/api/question/${qid}`)
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

  getUserInfosByToken() {
    return Vue.http.get(`${this.domain}/api/user/infos`);
  }

  getUserQuestions(username,query) {
    return Vue.http.get(`${this.domain}/api/u/${username}/questions`,query)
  }

  getUserAnswers(username,query) {
    return Vue.http.get(`${this.domain}/api/u/${username}/answers`,query)
  }

  getUserNews(username) {
    return Vue.http.get(`${this.domain}/api/u/${username}/news`)
  }

  changeProfile(infos) {
    return Vue.http.post(`${this.domain}/api/user/changeProfile`);
  }

  preAvatarUpload(infos) {
    return Vue.http.post(`${this.domain}/api/user/avatarPreUpload`, {
      x: infos.x, y: infos.y, width: infos.width, height: infos.height
    })
  }

  uploadToUpYun(formData) {
    return new Promise(function (resolve, reject){
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('post','http://v0.api.upyun.com/graduation');
        xhr.send(formData);
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status <= 300) {
              resolve(xhr.responseText)
            } else {
              resolve(xhr.responseText)
            }
          }
        }
      } catch (err) {
        console.error(err);
        reject(err);
      }
    }).then(JSON.parse)
  }

  saveAvatar(url) {
    return Vue.http.post(`${this.domain}/api/user/avatarUpload`, { url: url })
  }

  changeProfile(model) {
    return Vue.http.post(`${this.domain}/api/user/changeProfile`, model);
  }

  changePass(model) {
    return Vue.http.post(`${this.domain}/api/user/changePass`, model);
  }

  doSearch(search) {
    // const datas = { text: text, type: type, page: page, limit: limit}
    return Vue.http.get(`${this.domain}/api/search`, search);
  }

  postComment(content, qaId) {
    return Vue.http.post(`${this.domain}/api/user/reply`, {
      content: content,
      id: qaId
    });
  }

  postQuestion(title, content, tagStr) {
    return Vue.http.post(`${this.domain}/api/user/question`, {
      content: content,
      title: title,
      tagStr: tagStr
    });
  }

  postAnswer(content, id) {
    return Vue.http.post(`${this.domain}/api/user/answer`, {
      answer: { content: content },
      qid: id
    })
  }

  getTags() {
    return Vue.http.get(`${this.domain}/api/tags`)
  }

  getTagByName(name){
    if (name) {
      return Vue.http.get(`${this.domain}/api/tagByName`,{
        name: name
      })
    } else {
      return Promise.resolve({ data: {}});
    }
  }

  vote(qaId, isLike){
    return Vue.http.post(`${this.domain}/api/user/vote`, {
      qaId: qaId,
      isLike: isLike
    })
  }

  pullNotify() {
    return Vue.http.post(`${this.domain}/api/user/pullNotify`)
  }

  getNotifies() {
    return Vue.http.get(`${this.domain}/api/user/notifies`)
  }

  readNotify(nid) {
    return Vue.http.post(`${this.domain}/api/user/notifies/read`, {nid: nid})
  }

  readAllNotify() {
    return Vue.http.post(`${this.domain}/api/user/notifies/readAll`)
  }

}
