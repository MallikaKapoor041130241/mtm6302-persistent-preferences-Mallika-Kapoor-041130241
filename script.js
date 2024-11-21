const themeSelect = document.getElementById('theme');
const listStyleSelect = document.getElementById('list-style');
const itemList = document.getElementById('item-list');

const items = ['Mango', 'Orange', 'Watermelon', 'Pineapple', 'Peach'];

function createList() {
    itemList.innerHTML = '';  
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedListStyle = localStorage.getItem('list-style') || 'bullet';
    document.body.className = `${savedTheme}-theme`;

    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;

    itemList.className = savedListStyle;

    // dark theme, text is visible (white)
    if (savedTheme === 'dark') {
        itemList.style.color = 'white';
    } else {
        itemList.style.color = ''; 
    }
}
function savePreferences() {
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('list-style', listStyleSelect.value);

    document.body.className = `${themeSelect.value}-theme`;
    itemList.className = listStyleSelect.value;

    if (themeSelect.value === 'dark') {
        itemList.style.color = 'white';
    } else {
        itemList.style.color = ''; 
    }
}

themeSelect.addEventListener('change', savePreferences);
listStyleSelect.addEventListener('change', savePreferences);

createList(); 
loadPreferences(); 
