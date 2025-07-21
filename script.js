
const subjects = {};
const subjectData = SUBJECT_DATA;

function saveProgress() {
    localStorage.setItem("approvedSubjects", JSON.stringify(Object.keys(subjects).filter(k => subjects[k].approved)));
}

function loadProgress() {
    const approved = JSON.parse(localStorage.getItem("approvedSubjects") || "[]");
    approved.forEach(key => {
        if (subjects[key]) {
            subjects[key].approved = true;
        }
    });
}

function render() {
    const container = document.getElementById("grid");
    container.innerHTML = "";

    Object.entries(subjects).forEach(([key, subj]) => {
        const div = document.createElement("div");
        div.className = "subject";

        if (subj.approved) {
            div.classList.add("completed");
        } else if (subj.prerequisites.every(p => subjects[p]?.approved)) {
            div.classList.add("unlocked");
        } else {
            div.classList.add("blocked");
        }

        div.innerText = subj.name;
        div.onclick = () => {
            if (subj.prerequisites.every(p => subjects[p]?.approved)) {
                subj.approved = !subj.approved;
                saveProgress();
                render();
            }
        };

        container.appendChild(div);
    });
}

function resetProgress() {
    Object.values(subjects).forEach(s => s.approved = false);
    saveProgress();
    render();
}

function init() {
    subjectData.forEach(item => {
        subjects[item.id] = {...item, approved: false};
    });
    loadProgress();
    render();
}

init();
