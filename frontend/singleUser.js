let apiKey = `http://localhost:3000`;
document.addEventListener('DOMContentLoaded', async () => {
	let localStorage = window.localStorage;
	// let firstName = localStorage.getItem('firstName');
	// let lastName = localStorage.getItem('lastName');
	let firstName = 'Ruben';
	let lastName = 'Garcia';
	addNameToBrowser(firstName, lastName);
	let user = await axios.get(`${apiKey}/users/${firstName}/${lastName}`);
	console.log(user);
	let profilePicLink = user.data.payload.img_url;
	let user_id = user.data.payload.id;
	placeProfilePic(profilePicLink);
	loadPosts(user_id);


});

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






