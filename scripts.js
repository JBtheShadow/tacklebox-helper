let currentBiome = 'biome-docks';

let biomesList = [
    'biome-docks',
    'biome-cliffs',
    'biome-lake',
    'biome-beach',
    'biome-river',
    'biome-reef'
];
let heaviestFishText = {
    "": "Not recorded yet",
    "biome-docks": "Docks",
    "biome-cliffs": "Cliffs",
    "biome-lake": "Lake",
    "biome-beach": "Beach",
    "biome-river": "River",
    "biome-reef": "Reef"
};

function toggleself(el) {
    if (el.classList.contains(currentBiome)) {
        el.classList.remove(currentBiome);
        return;
    }

    for (let biome of biomesList) {
        if (el.classList.contains(biome)) {
            return;
        }
    }

    el.classList.add(currentBiome);
}

function toggleVisibilityAreas() {
    const els = document.querySelectorAll('a.link');
    for (let el of els) {
        el.classList.toggle('visible');
    }
}

function changeSelectedBiome(el) {
    currentBiome = el.value;
}

function recordHeaviestFish() {
    document.querySelector('#heaviestFish').innerText = heaviestFishText[currentBiome];
}

function resetPage() {
    let res = confirm("Reset the page? This cannot be undone.");
    if (res) {
        const els = document.querySelectorAll('a.link');
        for (let el of els) {
            for (let biome of biomesList) {
                el.classList.remove(biome);
            }
        }
    }
    currentBiome = "biome-docks";
    document.querySelectorAll('input[type="radio"][name="biome"]')[0].checked = true;
    document.querySelector('#heaviestFish').innerText = heaviestFishText[''];
}
