function getpartecipants() {
    fetch('https://randomuser.me/api?results=9')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            for (let i = 0; i < data.results.length; i++) {
                let name = data
                    .results[i]
                    .name
                    .first;
                let surname = data
                    .results[i]
                    .name
                    .last;
                let email = data
                    .results[i]
                    .email;
                let picture = data
                    .results[i]
                    .picture
                    .large;

                let div = document.createElement('div');
                div.setAttribute('class', 'partecipant');
                div.innerHTML = '<img src="' + picture + '"><h3>' + name + ' ' + surname + '</h' +
                        '3><p>' + email + '</p>';
                document
                    .querySelector('.partecipants')
                    .appendChild(div);
            }
        });
}

getpartecipants();
