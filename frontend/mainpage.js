document.addEventListener('DOMContentLoaded', () => {
    
});

const loadPosts = async () => {
    const postsList = document.querySelector('#posts-list');
    postsList.innerHTML = "";
    const response = await axios.get('http://localhost:3000/posts/all');
}