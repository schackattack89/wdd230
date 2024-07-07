const membersUrl = 'https://schackattack89.github.io/wdd230/chamber/data/members.json';
const spotlight = document.querySelector('#spotlight');

async function getSpotlightMembers() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log("Fetched data:", data);
        displayRandomMembers(data.members);
    } catch (error) {
        console.error("Fetching error: ", error);
    }
}

const displayRandomMembers = (members) => {
    const filteredMembers = members.filter(member => 
        member.level === 'Gold' || member.level === 'Silver'
    );

    const shuffledMembers = shuffleArray(filteredMembers).slice(0, 1);

    spotlight.innerHTML = '';

    shuffledMembers.forEach(member => {
        let card = document.createElement("div"); 
        card.classList.add('spot-item'); 

        let image = document.createElement("img");
        image.setAttribute('src', member.imgurl);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '350');
        image.setAttribute('height', '350');

        let name = document.createElement("h2");
        name.textContent = member.name;

        let membership = document.createElement("h3");
        membership.textContent = member.level;

        let address = document.createElement("p");
        address.textContent = member.address;

        let phone = document.createElement("p");
        phone.textContent = member.phone;

        let website = document.createElement("a");
        website.innerHTML = member.website;

        card.append(image);
        card.append(name);
        card.append(membership);
        card.append(address);
        card.append(phone);
        card.append(website);

        spotlight.appendChild(card);
    });
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

getSpotlightMembers();
