const linksSocialMedia = {
    name: 'APACHE-0002',
    github: 'APACHE-0002',
    youtube: 'churrasco',
    facebook: 'churrasco',
    instagram: 'churrasco',
    twitter: 'churrasco'
}


function changeSocialMediaLinks(){
    //const userName = document.getElementById('userName'); ou 
    //userName.textContent  
    //for ira fazer um map dentro das lis contidas no ul socialLinks     
    for(let li of socialLinks.children){
        //no loop ira pegar o li em questao, e verificar a class que esta nele
        const social = li.getAttribute('class');
        userName.textContent = linksSocialMedia.name
        //em cada li, pega o children[0], filho na primeira posiçao, 
        //que no caso é um link <a>, ira pegar seu href
        //li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }

}

changeSocialMediaLinks();



function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        bio.textContent = data.bio;
        userLink.href = data.html_url;
        userPic.src = data.avatar_url;
        userLogin.textContent = data.login;
    })
}

getGithubProfileInfos()