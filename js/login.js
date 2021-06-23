let userData = [
    {
        username : 'admin1',
        name : 'Shein Min Htet 1',
        password : '12345678',
        email : 'admin1@gmail.com',
        phone : +959123456789,
        img : "image/common/user (1).png",
    },
    {
        username : 'admin2',
        name : 'Shein Min Htet 2',
        password : '12345678',
        email : 'admin2@yandex.com',
        phone : +959364234567,
        img : "image/common/user (2).png",
    },
    {
        username : 'admin3',
        name : 'Shein Min Htet 3',
        password : '12345678',
        email : 'admin3@gmail.com',
        phone : +959786548764,
        img : "image/common/user (3).png",
    },
]

const getUserName = document.getElementById('username');

const getUserPassword = document.getElementById('password');

const logInBtn = document.getElementById('logInBtn');

const logInPage = document.getElementsByClassName('log_in_page')[0];

const errorPlace = document.getElementsByClassName('error_place')[0];

let localStorageUserName = window.localStorage.getItem('Username');

let localStoragePassword = window.localStorage.getItem('Password');


const onLoadCheck =()=> {
    for(i=0;i<userData.length;i++){
        if(localStorageUserName==userData[i].username&&localStoragePassword==userData[i].password){
            logInPage.classList.toggle('login');
            return;
        }
    }
}

onLoadCheck()

const onLoadCheck2 = () =>{
    const profilePictureContainer = document.getElementsByClassName('profile_img_container')[0];

    const profileInfoContainer = document.getElementsByClassName('information')[0];

    let localName = window.localStorage.getItem('name');

    let localEmail = window.localStorage.getItem('userEmail');

    let localPhoneNumber = window.localStorage.getItem('phone');

    let localProfileImage = window.localStorage.getItem('profileImage');

    const profilePicture = document.createElement('img');
    profilePicture.src = localProfileImage;
    profilePicture.classList.add("profile_img");
    profilePictureContainer.appendChild(profilePicture);

    
    const profileName = document.createElement('h3');
    profileName.innerText=localName;
    profileName.classList.add('profile_name');
    profileInfoContainer.appendChild(profileName);

    const profileEmail = document.createElement('p');
    profileEmail.innerText=`Email:${localEmail}`;
    profileEmail.classList.add('profile_info');
    profileInfoContainer.appendChild(profileEmail);

    const profilePhone = document.createElement('p');
    profilePhone.innerText=`Phone:+${localPhoneNumber}`;
    profilePhone.classList.add('profile_info');
    profileInfoContainer.appendChild(profilePhone);
}


const login = () => {
    for(i=0;i<userData.length;i++){
        errorPlace.innerHTML="";
        if(getUserName.value==userData[i].username&&getUserPassword.value==userData[i].password){
            logInPage.classList.toggle('login');
            window.localStorage.setItem('Username',getUserName.value);
            window.localStorage.setItem('Password',getUserPassword.value);
            window.localStorage.setItem('userEmail',userData[i].email);
            window.localStorage.setItem('phone',userData[i].phone);
            window.localStorage.setItem('profileImage',userData[i].img);
            window.localStorage.setItem('name',userData[i].name)
            return;
        }else{
            const errorTitle = 'Username or Password is Incorrect';
            const errorMessage = document.createElement('h2');
            errorMessage.innerText=errorTitle;
            errorMessage.classList.add('error')
            errorPlace.appendChild(errorMessage);
        }
    }
    
    getUserName.value="";
    getUserPassword.value="";
    
}

logInBtn.addEventListener('click',login);


onLoadCheck2()