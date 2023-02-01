$('#getWeather').on('click',()=>{
    const cityName = $('#cityName').val();

    getWeather(cityName, (response)=>{
        $('#content').text(JSON.stringify(response));
    });

    $('#cityName').val('');
});

$('#sideNav').on('click',(event)=>{
    const tabName = event.target.getAttribute('data-name');
    switch (tabName) {
        case 'Posts':{
            getPosts((data)=>{
                $('#content').html(`
                    ${data.map((post)=>{
                        return `
                            <div class="card">
                                <h2>${post.id}</h2>
                                <h3 class="title">${post.userId}</h3>
                                <h3 class="sub-title">${post.title}</h3>
                                <h4 class="price">${post.body}</h4>
                            </div>
                        `
                    }).join('')}
                    `
                )
            })
            break;
        }
        case 'Comments': {
            getComments((data) => {
                $('#content').html(`
            ${data.map((comment) => {
                    return `
                    <div class="card">
                        <h2>${comment.id}</h2>
                        <h3 class="title">${comment.postId}</h3>
                        <h3 class="sub-title">${comment.name}</h3>
                        <h4 class="price">${comment.email}</h4>
                        <p>${comment.body}</p>
                    </div>
                `
                }).join('')}
        `)
            })
            break;
        }
        case 'Albums':{
            getAlbums((data) => {
                $('#content').html(`
            ${data.map((album) => {
                    return `
                <div class="card">
                    <h2>${album.id}</h2>
                    <h3 class="title">${album.userId}</h3>
                    <h3 class="sub-title">${album.title}</h3>
                </div>
            `;
                }).join('')}
        `)
            })
            break;
        }
        case 'Photos':{
            getPhotos((data) => {
                $('#content').html(`
                ${data.map((photo) => {
                    return `
                        <div class="card">
                            <h2>${photo.id}</h2>
                            <h3 class="sub-title">${photo.albumId}</h3>
                            <h3 class="title">${photo.title}</h3>
                            <img src="${photo.url}" alt="${photo.title}" />
                            <img src="${photo.thumbnailUrl}" alt="${photo.title}" />
                        </div>
                    `;
                }).join('')}
            `);
            });
            break;
        }
        case 'Todos': {
            getTodos((data) => {
                $('#content').html(`
        ${data.map((todo) => {
                    return `
            <div class="card">
              <h2>${todo.id}</h2>
              <h3 class="title">${todo.title}</h3>
              <h3 class="sub-title">User ID: ${todo.userId}</h3>
              <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
            </div>
          `
                }).join('')}
      `);
            });
            break;
        }
        case 'Users':
            getUsers((data) => {
                $('#content').html(`
        ${data.map((user) => {
                    return `
            <div class="card">
              <h2>${user.id}</h2>
              <h3 class="title">${user.name}</h3>
              <h3 class="sub-title">${user.username}</h3>
              <h4 class="price">${user.email}</h4>
              <p>${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}</p>
              <p>Phone: ${user.phone}</p>
            </div>
          `;
                }).join('')}
      `);
            });
            break;
    }

});

const navLinks = document.querySelectorAll('li');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));

        e.currentTarget.classList.add('active');
    });
});
