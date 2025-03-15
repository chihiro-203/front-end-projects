const APIURL = 'https://api.github.com/users/';

let card = document.getElementById("card");
const form = document.getElementById("profile-input");
const search = document.getElementById("profile-search");

function createProfileCard(user)    {
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';    
    const cardHTML = `
    <div class="profile-card" id="profile-card">    
        <div class="cat-frame">
            <div class="avatar"></div>
        </div>
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userID}</h2>
            <p>${userBio}</p>
            <ul>
                <li>${user.followers}<strong>followers</strong></li>
                <li>${user.following}<strong>following</strong></li>
                <li>${user.public_repos}<strong>repositories</strong></li>
            </ul>
            <div id="repo"></div>
        </div>
    </div>`;
    card.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
    <div class="profile-card">
        <h2>${msg}</h2>
    </div>`;
    card.innerHTML = cardHTML;
}

async function getUser(username)    {
    try{
        const {data} = await axios(APIURL + username);
        createProfileCard(data);
        getRepos(username);
    } catch(err)  {
        if (err.response.status == 404) {
            createErrorCard("No profile with username '" + username + "'");
        }
    }
}

async function getRepos(username)   {
    try{
        const {data} = await axios(APIURL + username + "/repos?sort=created");
        addReposToCard(data);
    } catch(err)  {
        createErrorCard("Problem fetching repositories");
    }
}

function addReposToCard(repos)  {
    const reposEl = document.getElementById("repo");
    repos.slice(0, 5).forEach(repo => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");
            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    if (user)   {
        getUser(user);
        search.value = "";
        checkInput(user);
    }
});

function checkInput(user)   {
    search.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        if (val.length > 2) {
            card.innerHTML = `<img id="wait" src="./resources/wait.gif" alt="Wait to input">`;
        }
        else {
            getUser(user);
        }
    });
}


