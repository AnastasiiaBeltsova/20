function GetId() {
    const input = document.querySelector('.js--input');
    const btn = document.querySelector('.js--submit');

    btn.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            
                .then(response => response.json())
                .then(response => {
                    document.body.insertAdjacentHTML('beforeend', `
                    <div>${response.map(n => `
                        <div class="item">
                        <div>UserId: ${n.userId}</div>
                        <div>Id: ${n.id}</div>
                        <div>Title: ${n.title}</div>
                        <div>Body: ${n.body}</div>
                        </div>`).join('')}
                    </div> `);

                    // console.log(response);
                });
                // if (input.value <= 100) {

                //     console.log(input.value);
                // }
        
            })
    
}

const getId = new GetId();



// const input = document.querySelector('.js--input');
// const btn = document.querySelector('.js--submit');
// const block = document.querySelector('.js--block');

// const getId = (post) => {
//     const numb = post.find((id) => {
//         return id.cc === input.value
//     })
// }
