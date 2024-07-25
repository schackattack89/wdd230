const url = "https://schackattack89.github.io/wdd230/scoots/data/rentals.json";
const rentalTable = document.querySelector('#tableBody');


async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.rentals);
    displayPrices(data.rentals);
}

let index = 1;

const displayPrices = (rentals) => {
    rentals.forEach((rental) => {
        const tableRow = document.createElement('tr');
        
        const photo = document.createElement('td');
        const photoImg = document.createElement('img');
        photoImg.setAttribute('src', rental.imgURL);
        photoImg.setAttribute('loading', 'lazy');
        photoImg.setAttribute('alt', rental.vehicle);
        photoImg.id = `rental-img${index}`;
        photo.appendChild(photoImg);
        tableRow.appendChild(photo);

        const vehicle = document.createElement('td');
        vehicle.textContent = rental.vehicle;
        vehicle.id = `vehicle-type${index}`;
        tableRow.appendChild(vehicle);

        const persons = document.createElement('td');
        persons.textContent = rental.maxPersons;
        tableRow.appendChild(persons);

        const halfDayRes = document.createElement('td');
        halfDayRes.textContent = rental.reservation[0].half;
        tableRow.appendChild(halfDayRes);

        const fullDayRes = document.createElement('td');
        fullDayRes.textContent = rental.reservation[0].full;
        tableRow.appendChild(fullDayRes);

        const halfDayWalk = document.createElement('td');
        halfDayWalk.textContent = rental.walkin[0].half;
        tableRow.appendChild(halfDayWalk);

        const fullDayWalk = document.createElement('td');
        fullDayWalk.textContent = rental.walkin[0].full;
        tableRow.appendChild(fullDayWalk)

        rentalTable.appendChild(tableRow);

        index++;
    });
}

getRentalData();