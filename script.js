
const skillBar = document.querySelector('.skills-list');

fetch('db/skills.json')
  .then(data => data.json())
  .then(skills => { 
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
  })
  .catch(() => console.error("Error"));





