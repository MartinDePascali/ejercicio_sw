if (navigator.serviceWorker) {
    console.log(`I can use Service Worker!`);
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log(`I can't use Service Worker, please update me...`);
}

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(({data}) => {
        const content = document.querySelector('.content');
        let table = `<table class="table table-striped table-dark table-border table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Avatar</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>`;

        data.forEach(user => {
            table += 
            `<tr> 
                <th scope='row'>${user.id}</th>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td><img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" class="img-thumbnail"></td>
                <td>${user.email}</td>
            </tr>`
        });

        table += '</tbody></table>';
        content.innerHTML = table;
    });