/** ******* CHANGE LANAGUAGE ********/

import profile_es from '../db/johnsinapsis-es.json' assert { type: "json" };
import profile_en from '../db/johnsinapsis-en.json' assert { type: "json" };


function changeLanguage (lang = 'es') {

  const languages = document.querySelectorAll('.change-lang')

  languages.forEach(language => {
    language.classList.remove('lang-active')
  })

  document.querySelector(`#lang-${lang}`).classList.add('lang-active')

  // seleccionamos la data según el idioma
  const profile =  lang === 'es' ? profile_es : profile_en;

  /* Nav */
  document.getElementById('nav-profile-fullname').innerHTML = profile.full_name;
  document.getElementById('nav-option-home').innerHTML = profile.site.nav.home;
  document.getElementById('nav-option-about').innerHTML = profile.site.nav.about;
  document.getElementById('nav-option-skills').innerHTML = profile.site.nav.skills;
  document.getElementById('nav-option-experience').innerHTML = profile.site.nav.experience;
  document.getElementById('nav-option-testimonials').innerHTML = profile.site.nav.testimonials;
  document.getElementById('nav-option-contact').innerHTML = profile.site.nav.contact;

  /* Home */
  document.getElementById('home-greeting').innerHTML = profile.site.home.greeting;
  document.getElementById('profile-name').innerHTML = profile.name;
  document.getElementById('profile-role').innerHTML = profile.role;
  document.getElementById('profile-description').innerHTML = profile.description;
  document.getElementById('home-btn-contact').innerHTML = profile.site.home.btncontact;
  document.getElementById('home-linkedin').href = profile.linkedin;
  document.getElementById('home-gitlab').href = profile.gitlab;

  /* About */
  document.getElementById('about-title').innerHTML = profile.site.about.title
  document.getElementById('about-subtitle').innerHTML = profile.site.about.subtitle
  document.getElementById('about-description').innerHTML = profile.professionalProfile
  document.getElementById('about-download-cv').innerHTML = profile.site.about.download
  document.getElementById('download-cv').href = profile.downloadcv

  /* Skills */
  document.getElementById('skills-title').innerHTML = profile.site.skills.title
  document.getElementById('skills-subtitle').innerHTML = profile.site.skills.subtitle

  const frontendSkills = profile.skills_indicators.frontend;
  const backendSkills = profile.skills_indicators.backend;

  document.getElementById('skills-frontend-title').innerHTML = frontendSkills.title
  document.getElementById('skills-frontend-subtitle').innerHTML = frontendSkills.experience
  document.getElementById('skills-backend-title').innerHTML = backendSkills.title
  document.getElementById('skills-backend-subtitle').innerHTML = backendSkills.experience


  // creamos los elementos html para los skills del frontend
  let skillsFrontendList = '';

  frontendSkills.skills.forEach((skill) => {
    skillsFrontendList += `<div class="skills__data">
      <div class="skills__titles">
        <h3 class="skills__name">${skill.name}</h3>
        <span class="skills__number">${skill.number}%</span>
      </div>
      <div class="skills__bar">
        <span class="skills__percentage skills__${skill.name.toLowerCase()}"></span>
      </div>
    </div>`;
  });

  document.getElementById('skills-frontend-list').innerHTML = skillsFrontendList

  // creamos los elementos html para los skills del backend
  let skillsbackendList = '';

  backendSkills.skills.forEach((skill) => {
    skillsbackendList += `<div class="skills__data">
      <div class="skills__titles">
        <h3 class="skills__name">${skill.name}</h3>
        <span class="skills__number">${skill.number}%</span>
      </div>
      <div class="skills__bar">
        <span class="skills__percentage skills__${skill.name.toLowerCase()}"></span>
      </div>
    </div>`;
  });

  document.getElementById('skills-backend-list').innerHTML = skillsbackendList


  /* Experience */
  document.getElementById('qualification-title').innerHTML = profile.site.experience.title
  document.getElementById('qualification-subtitle').innerHTML = profile.site.experience.subtitle
  document.getElementById('qualification-work').innerHTML = profile.site.experience.work
  document.getElementById('qualification-education').innerHTML = profile.site.experience.education


  // creamos los elementos html para la experiencia laboral
  let workList = '';
  let totalWorks = profile.workExperience.length;

  profile.workExperience.forEach((work, index) => {

    if (index%2) {
      workList += `<div class="qualification__data">
          <div></div>
          <div>
            <span class="qualification__rounder"></span>
            ${ ( index == (totalWorks - 1) ) ? '' : '<span class="qualification__line"></span>' }
          </div>
          <div>
            <h3 class="qualification__title">${work.position}</h3>
            <span class="qualification__subtitle">${work.company}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${work.dateStart} - ${work.dateEnd}
            </div>
          </div>
        </div>`;
    } else {
      workList += `<div class="qualification__data">
          <div>
            <h3 class="qualification__title">${work.position}</h3>
            <span class="qualification__subtitle">${work.company}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${work.dateStart} - ${work.dateEnd}
            </div>
          </div>

          <div>
            <span class="qualification__rounder"></span>
            ${ ( index == (totalWorks - 1) ) ? '' : '<span class="qualification__line"></span>' }
          </div>
        </div>`;
    }

  });

  document.getElementById('work').innerHTML = workList


  // creamos los elementos html para la educación
  let educationList = '';
  let totalEducations = profile.academics.length;

  profile.academics.forEach((education, index) => {

    if (index%2) {
      educationList += `<div class="qualification__data">
          <div></div>
          <div>
            <span class="qualification__rounder"></span>
            ${ ( index == (totalEducations - 1) ) ? '' : '<span class="qualification__line"></span>' }
          </div>
          <div>
            <h3 class="qualification__title">${education.title}</h3>
            <span class="qualification__subtitle">${education.institute}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${education.dateStart} - ${education.dateEnd}
            </div>
          </div>
        </div>`;
    } else {
      educationList += `<div class="qualification__data">
          <div>
            <h3 class="qualification__title">${education.title}</h3>
            <span class="qualification__subtitle">${education.institute}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${education.dateStart} - ${education.dateEnd}
            </div>
          </div>

          <div>
            <span class="qualification__rounder"></span>
            ${ ( index == (totalEducations - 1) ) ? '' : '<span class="qualification__line"></span>' }
          </div>
        </div>`;
    }

  });

  document.getElementById('education').innerHTML = educationList





  /* Testimonials */
  document.getElementById('testimonials-title').innerHTML = profile.site.testimonials.title
  document.getElementById('testimonials-subtitle').innerHTML = profile.site.testimonials.subtitle
  document.getElementById('testimonial-url-img').href = profile.testimonials.url
  document.getElementById('testimonial-img').src = profile.testimonials.photo
  document.getElementById('testimonial-url').href = profile.testimonials.url
  document.getElementById('testimonial-url').innerHTML = profile.testimonials.person
  document.getElementById('testimonial-comment').innerHTML = profile.testimonials.comment

  /* Contact */
  document.getElementById('contact-title').innerHTML = profile.site.contact.title
  document.getElementById('contact-subtitle').innerHTML = profile.site.contact.subtitle
  document.getElementById('contact-email-title').innerHTML = profile.site.contact.email
  document.getElementById('contact-phone-title').innerHTML = profile.site.contact.phone
  document.getElementById('contact-location-title').innerHTML = profile.site.contact.location
  document.getElementById('contact-email').innerHTML = profile.email
  document.getElementById('contact-phone').innerHTML = profile.phone
  document.getElementById('contact-location').innerHTML = profile.location

  /* Footer */
  document.getElementById('footer-title').innerHTML = profile.site.social.title
  document.getElementById('footer-linkedin').href = profile.linkedin;
  document.getElementById('footer-gitlab').href = profile.gitlab;
  document.getElementById('footer-twitter').href = profile.twitter;
  document.getElementById('footer-copy').innerHTML = profile.site.copy.title;

  localStorage.setItem('selected-lang', lang);

}

const selectedLang = localStorage.getItem('selected-lang');

if (selectedLang) {
  changeLanguage(selectedLang);
} else {
  changeLanguage('es');
}



const languages = document.querySelectorAll('.change-lang')

languages.forEach(n => n.addEventListener('click', (event) => {
  const lang = event.target.id.split('-')
  changeLanguage (lang[1])
}))
