let apiKey = `http://localhost:3000`;
document.addEventListener('DOMContentLoaded', async () => {
	let localStorage = window.localStorage;
	let firstName = localStorage.getItem('firstName');
	let lastName = localStorage.getItem('lastName');
	//let firstName = 'Ruben';
	//let lastName = 'Garcia';
	addNameToBrowser(firstName, lastName);
	let user = await axios.get(`${apiKey}/users/${firstName}/${lastName}`);
	console.log(user);
	let profilePicLink = user.data.payload.img_url;
	let user_id = user.data.payload.id;
	placeProfilePic(profilePicLink);
	loadPosts(user_id);
	loadAllAlbums(user_id);
	let albumBoard = document.querySelector('.album-list');
    albumBoard.addEventListener('click', sendToUniquePicturePage);
     let logo = document.querySelector('h1');
    logo.addEventListener('click', backToHome);
});

const backToHome = () => {
     window.location.href = "./homepage.html"; 
}

function addNameToBrowser(first, last){
	let userTag = document.querySelector('.name-of-user');
	console.log('running');
	let userString = `${first} ${last}`;
	userTag.innerText = userString; 
}

function placeProfilePic(url){
	let pictureBoard = document.querySelector('.picture-container');
	let newPic = document.createElement('img');
	newPic.src = url;
	pictureBoard.appendChild(newPic);
}

async function loadPosts(id){
	let postBoard = document.querySelector('.list-of-posts');
	let	response = await axios.get(`${apiKey}/posts/${id}`);
	console.log(response);
	for(let i = response.data.payload.length - 1; i >= 0; i--){
		let newPostDiv = document.createElement('div');
		newPostDiv.classList.add('postDiv');
		let newPara = document.createElement('p');
		newPara.innerText = response.data.payload[i].body;
		newPostDiv.appendChild(newPara);
		postBoard.appendChild(newPostDiv);
	};
}

async function loadAllAlbums(user_id){
	let albumBoard = document.querySelector('.album-list');
	let response = await axios.get(`${apiKey}/albums/${user_id}`);
	console.log(response);
	for(let i = response.data.payload.length - 1; i >= 0; i--){
		let newAlbumDiv = document.createElement('div');
		newAlbumDiv.classList.add('albumDiv');
		let newAlbum = document.createElement('button');
		newAlbum.innerText = response.data.payload[i].album_name;
		newAlbum.title = response.data.payload[i].id;
		newAlbumDiv.appendChild(newAlbum);
		albumBoard.appendChild(newAlbumDiv);
	}
}

const sendToUniquePicturePage = (event) => {
	console.log(event.target);
    let x = event.target.title;
   let user = window.localStorage;
   let album_id = x;
   user.setItem('album_id', `${album_id}`);
   window.location.href = "./picturespage.html";  
}






