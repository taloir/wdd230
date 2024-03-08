const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    response = await fetch();
    data= response.json();
    //console.table(data.prophets)
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        card = createElement(section)
        fullName = createElement(h2)
        fullname.innerHTML() = `${prophet.name} ${prophet.lastname}`
        portrait = createElement(img);
        portrait.setAtribute('src', prophet.imageurl);
        portrait.setAtribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAtribute('loading', 'lazy');
        portrait.setAtribute('width', '340');
        portrait.setAtribute('height', '400');

        card.appendchild(fullname);
        card.appendchild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();
