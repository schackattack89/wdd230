const baseURL = "https://schackattack89.github.io/wdd230";
const linksURL = "https://schackattack89.github.io/wdd230/data/links.json";

const ulLinks = document.querySelector('.learningActivities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data =await response.json();
    console.log(data);
    displayLinks(data.lessons)
}

const displayLinks = (lessons) => {
    lessons.forEach((week) => {
        let weekNumber = document.createElement('li');

        weekNumber.innerHTML = `${week.lesson}`;

        if(week.links.length == 1){
            let firstActivity = document.createElement('a');
            firstActivity.setAttribute('href', week.links[0].url);
            firstActivity.innerHTML = `${week.links[0].title}`;
            weekNumber.appendChild(firstActivity);
        }
        else if(week.links.length == 2){
            let firstActivity = document.createElement('a');
            let secondActivity = document.createElement('a');
            firstActivity.setAttribute('href', week.links[0].url);
            firstActivity.innerHTML = `${week.links[0].title} | `;
            weekNumber.appendChild(firstActivity);
            secondActivity.setAttribute('href', week.links[1].url);
            secondActivity.innerHTML = `${week.links[1].title}`;
            weekNumber.appendChild(secondActivity);
        }
        else if(week.links.length == 3){
            let firstActivity = document.createElement('a');
            let secondActivity = document.createElement('a');
            let thirdActivity = document.createElement('a');

            firstActivity.setAttribute('href', week.links[0].url);
            firstActivity.innerHTML = `${week.links[0].title} | `;
            weekNumber.appendChild(firstActivity);

            secondActivity.setAttribute('href', week.links[1].url);
            secondActivity.innerHTML = `${week.links[1].title} | `;
            weekNumber.appendChild(secondActivity);

            thirdActivity.setAttribute('href', week.links[2].url);
            thirdActivity.innerHTML = `${week.links[2].title}`;
            weekNumber.appendChild(thirdActivity);
            
        }

        // links.forEach((link) => {
        //     let activity = document.createElement('a');
        //     activity.setAttribute('href', link[i].url);
        //     activity.innerHTML = `${link[i].title} | `;
        //     weekNumber.appendChild(activity);
        //     i++;
        // });

        ulLinks.appendChild(weekNumber);

    });
}

getLinks();