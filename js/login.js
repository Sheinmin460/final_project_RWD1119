const getUserName = document.getElementById('username');

const getUserPassword = document.getElementById('password');

const logInBtn = document.getElementById('logInBtn');

const logInPage = document.getElementsByClassName('log_in_page')[0];

const errorPlace = document.getElementsByClassName('error_place')[0];

let localStorageUserName = localStorage.getItem('Username');

let localStoragePassword = localStorage.getItem('Password');

let errorLogIn = false

getUserName.addEventListener("keyup",(event) =>{
    const value =event.target.value.toLowerCase();
    errorPlace.innerHTML="";
    if (value.length>8){
        const errorTitle = 'Username must be less than 8';
        const errorMessage = document.createElement('h2');
        errorMessage.innerText=errorTitle;
        errorMessage.classList.add('error')
        errorPlace.appendChild(errorMessage);
        errorLogIn = true
        logInBtn.style.display='none'
    }else{
        logInBtn.style.display='block'
    }
});

const onLoadCheck =()=> {
    for(i=0;i<userData.length;i++){
        if(localStorageUserName==userData[i].username&&localStoragePassword==userData[i].password){
            logInPage.classList.toggle('login');
            return;
        }
    }
}

onLoadCheck()




const login = () => {
    for(i=0;i<userData.length;i++){
        errorPlace.innerHTML="";
        if(getUserName.value==userData[i].username&&getUserPassword.value==userData[i].password){
            logInPage.classList.toggle('login');
            localStorage.setItem('Username',getUserName.value);
            localStorage.setItem('Password',getUserPassword.value);
            localStorage.setItem('userEmail',userData[i].email);
            localStorage.setItem('phone',userData[i].phone);
            localStorage.setItem('profileImage',userData[i].img);
            localStorage.setItem('name',userData[i].name)
            location.href = "profile.html";
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
    //it only use in profile.html page so in other pages it will up an error
    
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

onLoadCheck2()

const logOutBtn = document.getElementsByClassName('logOut')[0];

logOutBtn.addEventListener('click',()=>{
    localStorage.clear()
    window.location.href = "profile.html";
})
