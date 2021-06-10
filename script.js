let skills = [
	{skillName: "HTML", level: 60, cssClass: "skill-html"},
	{skillName: "JS", level: 30, cssClass: "skill-js"},
	{skillName: "C++", level: 70, cssClass: "skill-cpp"},
	{skillName: "Math", level: 80, cssClass: "skill-math"},
	{skillName: "Python", level: 50, cssClass: "skill-python"},
	{skillName: "SQL", level: 50, cssClass: "skill-sql"}
];

skillBar = document.querySelector('.skills-list');

skills.forEach(function(item, i, skills){
	let dtElem = document.createElement('dt');
	dtElem.setAttribute('class', item.cssClass);
	dtElem.textContent = item.skillName;
	skillBar.append(dtElem);
	ddElem = document.createElement('dd');
	ddElem.setAttribute('class', 'level');
	let divElem = document.createElement('div');
    divElem.setAttribute('style', `width: ${item.level}%;`);
    divElem.textContent = item.level;
	ddElem.appendChild(divElem);
	skillBar.append(ddElem);
	
});

