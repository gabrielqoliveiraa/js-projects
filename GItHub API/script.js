var cont = 0

function zerar(){
    if (cont > 1){
        var Rimg = document.getElementById('img').remove();
        var Rname = document.getElementById('name').remove();
        var Rfollow = document.getElementById('followers').remove();
    }
}






function RecuperarDados(){
    var usuario = prompt('Digite o usuario: ')
    cont += 1;
    zerar();
    var xhr = new XMLHttpRequest();
    var elDiv = document.getElementById("app");

    xhr.open("GET", "https://api.github.com/users/" + usuario );
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            var res = JSON.parse(xhr.responseText);
            var name = res.name;
            var avatar = res.avatar_url;
            var followers = res.followers;

            var elImg = document.createElement("img")
            elImg.setAttribute('width', '130px');
            elImg.setAttribute('src', avatar);
            elImg.setAttribute('id', 'img')

            var elName = document.createElement("p");
            elName.innerHTML = 'Nome: '+ name;
            elName.setAttribute('id', 'name');

            var elFollowers = document.createElement("p");
            elFollowers.innerHTML = 'Followers: ' + followers
            elFollowers.setAttribute('id', 'followers');

            elDiv.appendChild(elImg)
            elDiv.appendChild(elName);
            elDiv.appendChild(elFollowers);


            
        }

    }
    
    
}