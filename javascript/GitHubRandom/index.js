const langSelect = document.getElementById("lang-select");
const discoverBtn = document.getElementById("discover-btn");
const repoCard = document.getElementById("repo-card");
const repoTop = document.getElementById("repo-top");
const repoStats = document.getElementById("stats");

// Select existing elements to update
const repoNameEl = repoCard.querySelector('.repo-name');
const repoStatusEl = repoCard.querySelector('.status');
const repoDescEl = repoCard.querySelector('.description');
const statElements = repoCard.querySelectorAll('.stat p');
const refreshBtn = document.getElementById('refresh-btn')

// Hide repo content on initial load
repoTop.classList.add('hidden');
repoStats.classList.add('hidden');



function uneselectedState() {
    // Remove unselected state if already exists
    const existing = repoCard.querySelector('.unselected-state');
    if (existing) existing.remove();
    
    // Hide repo content divs
    repoTop.classList.add('hidden');
    repoStats.classList.add('hidden');
    
    // Show unselected message
    let p = document.createElement("p");
    p.className = "unselected-state";
    p.innerText = "Please select a language";
    repoCard.append(p);
}
uneselectedState()
async function fetchAndDisplayRepo(lang) {
    // Remove unselected state if exists
    const existing = repoCard.querySelector('.unselected-state');
    if (existing) existing.remove();
    
    // Show repo content divs
    repoTop.classList.remove('hidden');
    repoStats.classList.remove('hidden');
    
    try {
        // Fetch from GitHub API
        const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&per_page=30`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) return;
        
        // Pick random repo
        const randomIdx = Math.floor(Math.random() * data.items.length);
        const repo = data.items[randomIdx];
        
        // Save to params and update DOM
        const repoParams = {
            name: repo.full_name,
            status: repo.archived ? 'Archived' : 'Active',
            description: repo.description || 'No description',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            issues: repo.open_issues_count,
            language: repo.language || 'Unknown'
        };
        
        // Update existing elements with params
        repoNameEl.innerText = repoParams.name;
        repoStatusEl.innerText = repoParams.status;
        repoDescEl.innerText = repoParams.description;
        
        if (statElements.length >= 4) {
            statElements[0].innerText = repoParams.stars.toLocaleString();
            statElements[1].innerText = repoParams.forks.toLocaleString();
            statElements[2].innerText = repoParams.issues.toLocaleString();
            statElements[3].innerText = repoParams.language;
        }
    } catch (error) {
        console.log(error);
    }
}

discoverBtn.addEventListener("click", () => {
    const lang = langSelect.value;

    if (lang === "") {
        uneselectedState();
    } else {
        fetchAndDisplayRepo(lang);
    }
});

refreshBtn.addEventListener("click", () => {
    const lang = langSelect.value;

    if (lang === "") {
        uneselectedState();
    } else {
        fetchAndDisplayRepo(lang);
    }
});