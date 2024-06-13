const npButton = document.getElementById('nonprofit');
const bronzeButton = document.getElementById('bronze');
const silverButton = document.getElementById('silver');
const goldButton = document.getElementById('gold');

const npBox = document.getElementById('npBox');
const bronzeBox = document.getElementById('bronzeBox');
const silverBox = document.getElementById('silverBox');
const goldBox = document.getElementById('goldBox');

npButton.addEventListener('mouseover', () => {
    npBox.style.display = 'block';
});

npButton.addEventListener('mouseout', () => {
    npBox.style.display = 'none';
});

bronzeButton.addEventListener('mouseover', () => {
        bronzeBox.style.display = 'block';
});

bronzeButton.addEventListener('mouseout', () => {
    bronzeBox.style.display = 'none';
});

silverButton.addEventListener('mouseover', () => {
    silverBox.style.display = 'block';
});

silverButton.addEventListener('mouseout', () => {
    silverBox.style.display = 'none';
});

goldButton.addEventListener('mouseover', () => {
        goldBox.style.display = 'block';
});

goldButton.addEventListener('mouseout', () => {
    goldBox.style.display = 'none';
});