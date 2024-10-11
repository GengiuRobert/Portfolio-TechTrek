const portfolioDiv = document.getElementById('C2');

fetch('myprojects.json').then(response => response.json()).then(data => {

    data.projects.forEach(project => {

        let newDivProjectCard = document.createElement('div');
        newDivProjectCard.classList.add('project-card');

        portfolioDiv.appendChild(newDivProjectCard);

        let newImgOfProjectCard = document.createElement('img');
        newImgOfProjectCard.src = project.imagePath;
        newDivProjectCard.appendChild(newImgOfProjectCard);

        let newDivContainer = document.createElement('div');
        newDivContainer.classList.add('container');

        newDivProjectCard.appendChild(newDivContainer)

        let titleh3Card = document.createElement('h3');
        let strongForTitleCard = document.createElement('strong');
        strongForTitleCard.textContent = project.title;
        titleh3Card.appendChild(strongForTitleCard);
        newDivContainer.appendChild(titleh3Card);

        let newUl = document.createElement('ul');
        newUl.classList.add('buttons');

        let newLi1 = document.createElement('li');
        let newA1 = document.createElement('a');
        newA1.href = project.viewSource.href;
        newA1.textContent = project.viewSource.text;
        newLi1.appendChild(newA1);

        let newLi2 = document.createElement('li');
        let newA2 = document.createElement('a');
        newA2.href = project.tryItLive.href;
        newA2.textContent = project.tryItLive.text;
        newLi2.appendChild(newA2);

        newUl.appendChild(newLi1);
        newUl.appendChild(newLi2);

        newDivContainer.appendChild(newUl);

    });
}).catch(error => console.error('error loading JSON:', error));