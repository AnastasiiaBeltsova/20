function GetId() {
    const input = document.querySelector('.js--input');
    const btn = document.querySelector('.js--submit');

    btn.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => {
                const idFromInput = input.value;
                if (idFromInput > 100) {
                    alert('Ошибка! Введите значение от 1 до 100')
                }
                const foundById = response && response.find(u => +u.id === +idFromInput);

                if (foundById) {
                    document.body.insertAdjacentHTML('beforeend', `
                    <div>${[foundById].map(n => `
                        <div class="item">
                        <div>UserId: ${n.userId}</div>
                        <div>Id: ${n.id}</div>
                        <div>Title: ${n.title}</div>
                        <div>Body: ${n.body}</div>
                        </div>`).join('')}
                    </div>`);

                    fetch('https://jsonplaceholder.typicode.com/comments')
                        .then(response => response.json())
                        .then(response => {
                            const foundComment = response && response.filter(r => +r.postId === +foundById.id);
                            if (foundComment) {
                                document.body.insertAdjacentHTML('afterend', `
                                <p>____________</p>
                                <div>${foundComment.map(n => `
                                    <div class="item">
                                    <div>PostId: ${n.postId}</div>
                                    <div>Id: ${n.id}</div>
                                    <div>Name: ${n.name}</div>
                                    <div>Email: ${n.email}</div>
                                    <div>Body: ${n.body}</div>
                                    </div>`).join('')}
                                </div>`);
                            }
                        })
                }

            });
    })
}

const getId = new GetId();

