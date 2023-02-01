const getWeather = (city, onSuccess) => {
    const settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3bd24f13cecf13f96cfdc182bc8d4e8&units=metric`,
        "method": "GET",
        "timeout": 0,
        "error":(e)=>{
            console.log(e);
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        // callback call
        onSuccess(response);
    });
}
const getPosts = (onSuccess) => {
    const settings = {
        "url": "https://jsonplaceholder.typicode.com/posts",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        onSuccess(response.map((postJSON)=>
            new Post(
                postJSON.userId,
                postJSON.id,
                postJSON.title,
                postJSON.body
            )
        ));
    });
}
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
const getComments = (onSuccess) => {
    fetch(commentsUrl)
        .then(response => response.json())
        .then(comments => {
            onSuccess(comments.map(commentJSON =>
                new Comment(
                    commentJSON.postId,
                    commentJSON.id,
                    commentJSON.name,
                    commentJSON.email,
                    commentJSON.body
                )
            ));
        });
}
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
const getAlbums = (onSuccess) => {
    fetch(albumsUrl)
        .then(response => response.json())
        .then(albums => {
            onSuccess(albums.map(albumsJson => {
                return new Albums(
                    albumsJson.userId,
                    albumsJson.id,
                    albumsJson.title
                );
            }));
        })
        .catch(error => {
            console.error(error);
        })
}
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';
const getPhotos = (onSuccess) => {
    fetch(photosUrl)
        .then(response => response.json())
        .then(photos => {
            onSuccess(photos.map(photoJson =>{
                return new Photos(
                    photoJson.albumId,
                    photoJson.id,
                    photoJson.title,
                    photoJson.url,
                    photoJson.thumbnailUrl
                );
            }));
        })
        .catch(error => {
            console.error(error);
        });
};
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
const getTodos = (onSuccess) => {
    fetch(todosUrl)
        .then(response => response.json())
        .then(todos => {
            onSuccess(todos.map(todosJson => {
                return new Todos(
                    todosJson.userId,
                    todosJson.id,
                    todosJson.title,
                    todosJson.completed
                );
            }));
        });
}
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const getUsers = (onSuccess) => {
    fetch(usersUrl)
        .then((response) => response.json())
        .then((users) => {
            onSuccess(users.map((userJson) => {
                return new Users(
                    userJson.id,
                    userJson.name,
                    userJson.username,
                    userJson.email,
                    userJson.address,
                    userJson.phone
                );
            }));
        });
};