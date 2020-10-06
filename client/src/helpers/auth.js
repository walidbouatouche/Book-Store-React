
//Class for authentication, token monitoring, and member identification
//Design pattern SingletonClass
class _Auth {

    constructor() {
        this._userId = localStorage.getItem('userId') || ""
        this._token = localStorage.getItem('token') || ""
        this._role = localStorage.getItem('role') || ""
        this._imgUrl = localStorage.getItem('imgUrl') || ""
    }
    setToken(token) {
        localStorage.setItem('token', token)
        this._token = token
    }
    setUserId(userId) {
        localStorage.setItem('userId', userId);
        this._userId = userId;
    }
    setRole(role) {
        localStorage.setItem('role', role);
        this._role = role;
    }
    setImgUrl(imgUrl) {
        localStorage.setItem('imgUrl', imgUrl);
        this._imgUrl= imgUrl;
    }
    getToken() {
        return this._token;
    }
    getUserId() {
        return this._userId;
    }
    getRole() {
        return this._role;
    }
    getUserId() {
        return this._userId;
    }
    getImgUrl() {
        return this._imgUrl;
    }


    clearAll() {
        // remove user from local storage to log user out

        this._token = "";
        localStorage.clear()
        window.location.reload();
    }

    isAuth() {

        return Boolean(this._token)
    }




}

export default new _Auth()
