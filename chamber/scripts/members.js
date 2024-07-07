const url = 'https://schackattack89.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.bizCards');
const memberTable = document.querySelector('.memberTable');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembersIcons(data.members);
    displayMembersTable(data.members);
}

const displayMembersIcons = (members) => {
    members.forEach((members) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        address.id = 'address';
        let phone = document.createElement('p');
        phone.id = 'phone';
        let website = document.createElement('a');
        website.id = 'website';
        let level = document.createElement('p');
        level.id = 'level';

        businessName.textContent = `${members.name}`;

        logo.setAttribute('src', members.imgurl);
        logo.setAttribute('alt', `Logo for ${members.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '100');

        address.textContent = `${members.address}`;
        phone.textContent = `${members.phone}`;
        website.setAttribute('href', members.website);
        website.innerHTML = members.website;
        level.textContent = `Membership Level: ${members.level}`;

        card.appendChild(businessName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
    });
}

const displayMembersTable = (members) => {
    members.forEach((members) => {
        let tableRow = document.createElement('tr');
        let businessName = document.createElement('td');
        let address = document.createElement('td');
        let phone = document.createElement('td');
        let website = document.createElement('td');
        let level = document.createElement('td');

        businessName.innerHTML = members.name;
        address.innerHTML = members.address;
        phone.innerHTML = members.phone;
        website.innerHTML = members.website;
        level.innerHTML = members.level;

        tableRow.appendChild(businessName);
        tableRow.appendChild(address);
        tableRow.appendChild(phone);
        tableRow.appendChild(website);
        tableRow.appendChild(level);

        memberTable.appendChild(tableRow);
    });
}

getMemberData();