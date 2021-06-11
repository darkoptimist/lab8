const skills = [
	{skillName: "HTML", level: 60, cssClass: "skill-html"},
	{skillName: "JS", level: 30, cssClass: "skill-js"},
	{skillName: "C++", level: 70, cssClass: "skill-cpp"},
	{skillName: "Math", level: 80, cssClass: "skill-math"},
	{skillName: "Python", level: 50, cssClass: "skill-python"},
	{skillName: "SQL", level: 50, cssClass: "skill-sql"}
];

const skillBar = document.querySelector('.skills-list');

skills.forEach(item => {
	const dtElem = document.createElement('dt');
	dtElem.classList.add(item.cssClass);
	dtElem.textContent = item.skillName;
	skillBar.append(dtElem);
	const ddElem = document.createElement('dd');
	ddElem.classList.add('level');
	const divElem = document.createElement('div');
    divElem.style.cssText = `width: ${item.level}%;`;
    divElem.textContent = item.level;
	ddElem.appendChild(divElem);
	skillBar.append(ddElem);
	
});

