const membersUrl = 'https://schackattack89.github.io/wdd230/chamber/data/members.json';

async function displaySpotlights() {
        const response = await fetch(membersUrl);
        const data = await response.json();
        displayTopTier(data.members);
}

const displayTopTier = (members) => {
    const silverGoldMembers = members.filter(member => 
        member.level === 'Gold' || member.level === 'Silver'
    );

    let randomMembers = selectRandomBusiness(silverGoldMembers, 3);


    let index = 1;

    randomMembers.forEach(member => {
        let currentPane = "#spotlight" + index;
        let spotlight = document.querySelector(currentPane)
        let card = document.createElement("div"); 
        card.classList.add('spot-item'); 

        let image = document.createElement("img");
        image.setAttribute('src', member.imgurl);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');

        let name = document.createElement("h2");
        name.textContent = member.name;

        let membership = document.createElement("h3");
        membership.textContent = `(${member.level} Member)`;

        let address = document.createElement("p");
        address.textContent = member.address;

        let phone = document.createElement("p");
        phone.textContent = member.phone;

        let website = document.createElement("a");
        website.setAttribute('href', member.website);
        website.innerHTML = member.website;

        card.append(image);
        card.append(name);
        card.append(membership);
        card.append(address);
        card.append(phone);
        card.append(website);

        spotlight.appendChild(card);

        index++;
    });
}

function selectRandomBusiness(arr, numItems) {
    let result = [];
    for (let i = 0; i < numItems; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return result;
}

displaySpotlights();
