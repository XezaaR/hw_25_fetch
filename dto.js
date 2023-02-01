class Post{
    #userId
    #id
    #title
    #body
    
    get id(){
        return this.#id
    }
    get userId(){
        return this.#userId
    }
    get title(){
        return this.#title
    }
    get body(){
        return this.#body
    }
    constructor(userId, id, title, body) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#body = body;
    }
}
class Comment{
    #postId
    #id
    #name
    #email
    #body

    get postId() {
        return this.#postId;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get body() {
        return this.#body;
    }

    constructor(postId, id, name, email, body) {
        this.#postId = postId;
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#body = body;
    }
}
class Albums{
    #userId
    #id
    #title

    get userId() {
        return this.#userId;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    constructor(userId, id, title) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
    }
}
class Photos{
    #albumId
    #id
    #title
    #url
    #thumbnailUrl

    get albumId() {
        return this.#albumId;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get url() {
        return this.#url;
    }

    get thumbnailUrl() {
        return this.#thumbnailUrl;
    }

    constructor(albumId, id, title, url, thumbnailUrl) {
        this.#albumId = albumId;
        this.#id = id;
        this.#title = title;
        this.#url = url;
        this.#thumbnailUrl = thumbnailUrl;
    }
}
class Todos{
    #userId
    #id
    #title
    #completed

    get userId() {
        return this.#userId;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get completed() {
        return this.#completed;
    }

    constructor(userId, id, title, completed) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#completed = completed;
    }
}
class Users{
    #id
    #name
    #username
    #email
    #address
    #phone

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get address() {
        return this.#address;
    }

    get phone() {
        return this.#phone;
    }

    constructor(id, name, username, email, address, phone) {
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#email = email;
        this.#address = address;
        this.#phone = phone;
    }
}