
const navs = document.querySelectorAll('.nav_list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume_list');
const resumeBoxes = document.querySelectorAll('.resume_box');


const viewMoreBtn = document.querySelector('.view-more'); 



//Navbar actions and all sections action along with cube rotation when navbar is clicked

navs.forEach((nav, idx)=>{
    nav.addEventListener('click',() => {
        document.querySelector('.nav_list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        
        document.querySelector('.section.sactive').classList.remove('sactive');
        sections[idx].classList.add('sactive');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);

        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('sactive')){
                sections[4].classList.add('action_contact')
            }
        });

        if(sections[0].classList.contains('sactive')){
            sections[4].classList.remove('action_contact')
        }

    });
});




// Resume section when clicking on tab lists

resumeLists.forEach((lists, idx)=>{
    lists.addEventListener('click',() => {
        document.querySelector('.resume_list.active').classList.remove('active');
        lists.classList.add('active');

        document.querySelector('.resume_box.pactive').classList.remove('pactive');
        resumeBoxes[idx].classList.add('pactive');
    });

    
});



// View more button 


viewMoreBtn.addEventListener('click', () => {
    // Transform the cube
    cube.style.transform = 'rotateY(-180deg)';

    // Get the currently active nav item
    const activeNav = document.querySelector('.nav_list li.active');
    
    if (activeNav) {
        const nextNav = activeNav.nextElementSibling; 
        if (nextNav) {
            activeNav.classList.remove('active'); 
            nextNav.classList.add('active'); 
        }
    }
});



function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Disha_Resume.pdf'; // Update with the correct path
    link.download = 'Disha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}










 