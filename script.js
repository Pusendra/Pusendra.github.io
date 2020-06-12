fetch("https://api.github.com/users/pusendra")
    .then(response => response.json())
    .then(function (data) {

        let reposotory = data['repos_url'];
        console.log(reposotory[0]["name"])
        let followersCount = data['followers']
        let projectsCount = data['public_repos'];
        let followersInfo = `I have been followed by ${followersCount} awesome people in github.`;
        document.getElementById('profileImage').src = data['avatar_url'];
        document.getElementById('fullName').textContent = data['name'];
        document.getElementById('bio').textContent = data['bio'];
        document.getElementById('followersInformation').textContent = followersInfo;
        document.getElementById('githubLink').href = data['html_url'];
        document.getElementById('projectCount').textContent= ''+ projectsCount;
        fetch(reposotory)
            .then(response => response.json())
            .then(function (data1) {

                for(i=0;i<data1.length;i++){
                    let li = document.createElement('LI');
                    let a = document.createElement('a');
                    document.getElementById('projects-list').appendChild(li).appendChild(a).href = data1[i]['html_url'];
                    document.getElementById('projects-list').appendChild(li).appendChild(a).innerText = data1[i]['name'];
                }
            })
        document.getElementById('main-container').hidden =false;
        document.getElementById('loading').hidden =true;
    })

