function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}

const ul = document.getElementById('images');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        let photos = data;

        return photos.map(function(photo) {
            let li = createNode('li')
                span = createNode('span');
                img = createNode('img')

            li.innerHTML = photo.title;
            span.innerHTML = photo.id;
            img.src = photo.thumbnailUrl

            append(span, img)
            append(li, span);
            append(ul, li);

        });
    })