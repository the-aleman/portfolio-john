(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const h="John Jairo",f="John Jairo González",y="foto.png",v="Ingeniero de Desarrollo Backend/Frontend/Fullstack",S="Ingeniero de sistemas con experiencia de 12 años en el desarrollo de software con PHP, JavaScript, ES6, TypeScript, Node.js, Nestjs, Vue.js, Java, Java EE, Spring Boot, Arquitecturas limpias, Principios SOLID, Clean Code, AWS.",b="+573134876547",E="johnsinapsis@gmail.com",k="Ibagué Colombia",I="https://www.linkedin.com/in/johnsinapsis",_="https://gitlab.com/johnsinapsis",T="https://twitter.com/johnsinapsis",L="Soy un apasionado por la tecnología, interesado en aprender nuevas tecnologías y participar en diferentes proyectos, siempre buscando generar el mayor impacto en estos. Tengo una amplia experiencia trabajando en diferentes campos y cargos de forma muy dinámica en equipo, aportando gracias a mi experiencia y liderazgo ideas que ayudan a resolver diferentes retos generando excelentes resultados en equipo.",j="./assets/pdf/John_Jairo_Gonzalez_Rodriguez_CV_es.pdf",A=[{company:"ORBIS DATA",dateStart:"11/2022",dateEnd:"Actualmente",position:"Ingeniero de desarrollo Fullstack",chief:"Fernando del Rio",chiefPosition:"Teach leader Peru",tools:"javascript, node.js, Nestjs, typescript, Postgres, Docker, docker composer, Git, Next, React, Spring boot"},{company:"NARANJAX",dateStart:"11/2022",dateEnd:"Actualmente",position:"Ingeniero de desarrollo Backend migration",chief:"Federico Ramirez",chiefPosition:"Teach leader",tools:"javascript, node.js, AWS lambda, typescript, Oracle, Git"},{company:"INVERSIONES ACASA S.A.S.",dateStart:"04/2022",dateEnd:"10/2022",position:"Ingeniero de desarrollo Semisenior backend node.js / Typescript",chief:"Diana Leon",chiefPosition:"Teach of lead",tools:"javascript, node.js AWS, Nestjs, typescript, Postgres, Docker, docker composer, Git, Next, React, bit.dev, Api gateway, Unit Test"},{company:"MASIVIAN S.A.S",dateStart:"11/2021",dateEnd:" 04/2022",position:"Ingeniero de desarrollo Semisenior backend node.js",chief:"Edwin Andrey Palacios",chiefPosition:"Líder técnico célula Automation",tools:"javascript, node.js AWS, Athena, typescript, DynamoDB, Docker, SQS, Git"},{company:"NOVATEC SOLUTIONS",dateStart:"02/2021",dateEnd:"11/2021",position:"Ingeniero de desarrollo backend node.js - typescript microservicios",chief:"John Alexander Sanchez",chiefPosition:"Director proyecto Claro Inspira",tools:"javascript, java EE, node.js, typescript, Oracle, Docker, Clean Architecture, Git"},{company:"FREELANCE Sore Sas",dateStart:"01/2016",dateEnd:"12/2020",position:"Ingeniero de software - desarrollador",chief:"Sandra Posada",chiefPosition:"Gerente Administrativa",tools:"javascript, node.js, typescript, socket.io, mariaDB, Clean Architecture, Laravel, PHP, Git, CSS, Bootstrap, Vue.js"},{company:"SUPERVISA S.A",dateStart:"09/2018",dateEnd:"03/2020",position:"Coordinador de soporte y producción de software",chief:"David Florez",chiefPosition:"Coordinador de Software",tools:"PHP, Phyton, Java, javascript, linux bash, Node.js, Mysql, MariaDB, Vue"},{company:"MEDICADIZ S.A.S",dateStart:"11/2006",dateEnd:"10/2014",position:"Coordinador de Sistemas",chief:"Tatiana del Pilar Rivera",chiefPosition:"Coordinadora Administrativa",tools:"PHP, javascript, SQL Server, arquitectura MVC, Virtualización de servidores, Jquery, Clean Architecture"}],B=[{institute:"Universidad del Tolima",title:"Ingeniero de sistemas",description:"Estructuración de las bases de las IT, lógica de programación, Bases de datos relacionales, levantamiento de requerimientos, POO",dateStart:"2004",dateEnd:"2010"},{institute:"Universidad del Tolima",title:"Diplomado CISCO CCNA",description:"Cisco CCNA forma al estudiante para el entendimiento general de las redes IPV4 y manejo de todas las capas del modelo OSI, distribución y análisis de la segmentación de subredes y manejo de dispositivos de enrutamiento capa 2 y 3",dateStart:"2009",dateEnd:"2010"}],M=[{icon:"./icons/nodejs.png",name:"Node.js"},{icon:"./icons/typescript.png",name:"Typescript"},{icon:"./icons/reactjs.png",name:"React"},{icon:"./icons/nestjs.png",name:"Nestjs"},{icon:"./icons/nextjs.png",name:"Nextjs"},{icon:"./icons/postgres.png",name:"PostgreSQL"},{icon:"./icons/mariadb.png",name:"MariaDB"},{icon:"./icons/oracle.png",name:"Oracle"},{icon:"./icons/mongodb.png",name:"MongoDB"},{icon:"./icons/docker.png",name:"Docker"},{icon:"./icons/sass.png",name:"Sass"},{icon:"./icons/english.png",name:"Inglés intermedio"}],P={frontend:{title:"Frontend developer",experience:"Más de 2 años",skills:[{name:"HTML",number:90},{name:"CSS",number:60},{name:"JavaScript",number:80},{name:"TypeScript",number:70},{name:"React",number:85},{name:"NextJS",number:80}]},backend:{title:"Backend developer",experience:"Más de 12 años",skills:[{name:"JavaScript",number:80},{name:"TypeScript",number:70},{name:"NodeJS",number:80},{name:"NestJS",number:75},{name:"PHP",number:75},{name:"Laravel",number:85},{name:"SQL",number:90}]}},w={person:"Uriel Londoño",url:"https://www.linkedin.com/in/uriel-londono/",photo:"./assets/img/testimonial_person_1.jpg",comment:"He tenido el placer de trabajar con John Jairo en varios proyectos, es un desarrollador altamente habilidoso con un gran conocimiento en diversas tecnologías y lo diferencia su capacidad para entender y resolver problemas complejos de manera efectiva."},C={nav:{home:"Inicio",about:"Sobre mi",skills:"Habilidades",experience:"Experiencia",testimonials:"Testimonios",contact:"Contactar"},home:{greeting:"Hola, soy",btncontact:"Contactar"},about:{title:"Sobre mi",subtitle:"Mi introducción",download:"Descargar CV"},skills:{title:"Habilidades",subtitle:"Mi stack tecnológico"},experience:{title:"Experiencia",subtitle:"Mi trayectoria",work:"Trabajo",education:"Educación"},testimonials:{title:"Testimonios",subtitle:"Lo que dicen de mi"},contact:{title:"Contactar",subtitle:"Mi información de contacto",email:"Email",phone:"Teléfono",location:"Ubicación"},social:{title:"Redes Sociales"},copy:{title:"© John Jairo González. Todos los derechos reservados"}},H={name:h,full_name:f,photo:y,role:v,description:S,phone:b,email:E,location:k,linkedin:I,gitlab:_,twitter:T,professionalProfile:L,downloadcv:j,workExperience:A,academics:B,skills:M,skills_indicators:P,testimonials:w,site:C},N="John Jairo",D="John Jairo González",x="foto.png",$="Development Engineer Backend/Frontend/Fullstack",q="Systems engineer with 12 years of experience in software development with PHP, JavaScript, ES6, TypeScript, Node.js, Nestjs, Vue.js, Java, Java EE, Spring Boot, Clean Architectures, SOLID Principles, Clean Code, AWS.",J="+573134876547",O="johnsinapsis@gmail.com",R="Ibagué Colombia",z="https://www.linkedin.com/in/johnsinapsis",V="https://gitlab.com/johnsinapsis",G="https://twitter.com/johnsinapsis",F="I am passionate about technology and interested in learning new technologies and participating in different projects, always seeking to generate the greatest impact in them. I have extensive experience working in different fields and positions in a very dynamic team environment, contributing with my experience and leadership ideas that help solve different challenges, generating excellent team results.",U="./assets/pdf/John_Jairo_Gonzalez_Rodriguez_CV_en.pdf",W=[{company:"ORBIS DATA",dateStart:"11/2022",dateEnd:"Current",position:"Development engineer Fullstack",chief:"Fernando del Rio",chiefPosition:"Teach leader Peru",tools:"javascript, node.js, Nestjs, typescript, Postgres, Docker, docker composer, Git, Next, React, Spring boot"},{company:"NARANJAX",dateStart:"11/2022",dateEnd:"Current",position:"Development engineer Backend migration",chief:"Federico Ramirez",chiefPosition:"Teach leader",tools:"javascript, node.js, AWS lambda, typescript, Oracle, Git"},{company:"INVERSIONES ACASA S.A.S.",dateStart:"04/2022",dateEnd:"10/2022",position:"Development engineer Semisenior backend node.js / Typescript",chief:"Diana Leon",chiefPosition:"Teach of lead",tools:"javascript, node.js AWS, Nestjs, typescript, Postgres, Docker, docker composer, Git, Next, React, bit.dev, Api gateway, Unit Test"},{company:"MASIVIAN S.A.S",dateStart:"11/2021",dateEnd:" 04/2022",position:"Development engineer Semisenior backend node.js",chief:"Edwin Andrey Palacios",chiefPosition:"Líder técnico célula Automation",tools:"javascript, node.js AWS, Athena, typescript, DynamoDB, Docker, SQS, Git"},{company:"NOVATEC SOLUTIONS",dateStart:"02/2021",dateEnd:"11/2021",position:"Development engineer backend node.js - Typescript microservices",chief:"John Alexander Sanchez",chiefPosition:"Director proyecto Claro Inspira",tools:"javascript, java EE, node.js, typescript, Oracle, Docker, Clean Architecture, Git"},{company:"FREELANCE Sore Sas",dateStart:"01/2016",dateEnd:"12/2020",position:"Software engineer - development",chief:"Sandra Posada",chiefPosition:"Administrative chief",tools:"javascript, node.js, typescript, socket.io, mariaDB, Clean Architecture, Laravel, PHP, Git, CSS, Bootstrap, Vue.js"},{company:"SUPERVISA S.A",dateStart:"09/2018",dateEnd:"03/2020",position:"Support engineer and production",chief:"David Florez",chiefPosition:"Software Coordinator",tools:"PHP, Phyton, Java, javascript, linux bash, Node.js, Mysql, MariaDB, Vue"},{company:"MEDICADIZ S.A.S",dateStart:"11/2006",dateEnd:"10/2014",position:"Chief of IT",chief:"Tatiana del Pilar Rivera",chiefPosition:"Administrative coordinator",tools:"PHP, javascript, SQL Server, MVC architecture, server virtualization, Jquery, Clean Architecture"}],Q=[{institute:"University of Tolima",title:"Systems Engineer",description:"Structuring of the bases of IT, programmation logic, relational databases, survey of requirements, POO",dateStart:"2004",dateEnd:"2010"},{institute:"University of Tolima",title:"Diplomaed CISCO CCNA",description:"Cisco CCNA trains the student for the general understanding of IPV4 networks and management of all the layers of the OSI model, distribution and analysis of subnet segmentation and management of layer 2 and 3 routing devices.",dateStart:"2009",dateEnd:"2010"}],X=[{icon:"./icons/nodejs.png",name:"Node.js"},{icon:"./icons/typescript.png",name:"Typescript"},{icon:"./icons/reactjs.png",name:"React"},{icon:"./icons/nestjs.png",name:"Nestjs"},{icon:"./icons/nextjs.png",name:"Nextjs"},{icon:"./icons/postgres.png",name:"PostgreSQL"},{icon:"./icons/mariadb.png",name:"MariaDB"},{icon:"./icons/oracle.png",name:"Oracle"},{icon:"./icons/mongodb.png",name:"MongoDB"},{icon:"./icons/docker.png",name:"Docker"},{icon:"./icons/sass.png",name:"Sass"},{icon:"./icons/english.png",name:"intermediate English"}],Z={frontend:{title:"Frontend developer",experience:"More than 2 years",skills:[{name:"HTML",number:90},{name:"CSS",number:60},{name:"JavaScript",number:80},{name:"TypeScript",number:70},{name:"React",number:85},{name:"NextJS",number:80}]},backend:{title:"Backend developer",experience:"More than 12 years",skills:[{name:"JavaScript",number:80},{name:"TypeScript",number:70},{name:"NodeJS",number:80},{name:"NestJS",number:75},{name:"PHP",number:75},{name:"Laravel",number:85},{name:"SQL",number:90}]}},K={person:"Uriel Londoño",url:"https://www.linkedin.com/in/uriel-londono/",photo:"./assets/img/testimonial_person_1.jpg",comment:"I have had the pleasure of working with John Jairo on several projects. He is a highly skilled developer with great knowledge in various technologies, and what sets him apart is his ability to understand and effectively solve complex problems."},Y={nav:{home:"Home",about:"About",skills:"Skills",experience:"experience",testimonials:"Testimonials",contact:"Contactme"},home:{greeting:"Hi, i'm",btncontact:"Contact Me"},about:{title:"About me",subtitle:"My introduction",download:"Download CV"},skills:{title:"Skills",subtitle:"My tech stack"},experience:{title:"Experience",subtitle:"My personal journey",work:"Work",education:"Education"},testimonials:{title:"Testimonials",subtitle:"What they say about me"},contact:{title:"Contact me",subtitle:"My contact information",email:"Email",phone:"Phone",location:"Location"},social:{title:"Social Networks"},copy:{title:"© John Jairo González. All rights reserved"}},ee={name:N,full_name:D,photo:x,role:$,description:q,phone:J,email:O,location:R,linkedin:z,gitlab:V,twitter:G,professionalProfile:F,downloadcv:U,workExperience:W,academics:Q,skills:X,skills_indicators:Z,testimonials:K,site:Y};function m(a="es"){document.querySelectorAll(".change-lang").forEach(t=>{t.classList.remove("lang-active")}),document.querySelector(`#lang-${a}`).classList.add("lang-active");const e=a==="es"?H:ee;document.getElementById("nav-profile-fullname").innerHTML=e.full_name,document.getElementById("nav-option-home").innerHTML=e.site.nav.home,document.getElementById("nav-option-about").innerHTML=e.site.nav.about,document.getElementById("nav-option-skills").innerHTML=e.site.nav.skills,document.getElementById("nav-option-experience").innerHTML=e.site.nav.experience,document.getElementById("nav-option-testimonials").innerHTML=e.site.nav.testimonials,document.getElementById("nav-option-contact").innerHTML=e.site.nav.contact,document.getElementById("home-greeting").innerHTML=e.site.home.greeting,document.getElementById("profile-name").innerHTML=e.name,document.getElementById("profile-role").innerHTML=e.role,document.getElementById("profile-description").innerHTML=e.description,document.getElementById("home-btn-contact").innerHTML=e.site.home.btncontact,document.getElementById("home-linkedin").href=e.linkedin,document.getElementById("home-gitlab").href=e.gitlab,document.getElementById("about-title").innerHTML=e.site.about.title,document.getElementById("about-subtitle").innerHTML=e.site.about.subtitle,document.getElementById("about-description").innerHTML=e.professionalProfile,document.getElementById("about-download-cv").innerHTML=e.site.about.download,document.getElementById("download-cv").href=e.downloadcv,document.getElementById("skills-title").innerHTML=e.site.skills.title,document.getElementById("skills-subtitle").innerHTML=e.site.skills.subtitle;const l=e.skills_indicators.frontend,n=e.skills_indicators.backend;document.getElementById("skills-frontend-title").innerHTML=l.title,document.getElementById("skills-frontend-subtitle").innerHTML=l.experience,document.getElementById("skills-backend-title").innerHTML=n.title,document.getElementById("skills-backend-subtitle").innerHTML=n.experience;let i="";l.skills.forEach(t=>{i+=`<div class="skills__data">
      <div class="skills__titles">
        <h3 class="skills__name">${t.name}</h3>
        <span class="skills__number">${t.number}%</span>
      </div>
      <div class="skills__bar">
        <span class="skills__percentage skills__${t.name.toLowerCase()}"></span>
      </div>
    </div>`}),document.getElementById("skills-frontend-list").innerHTML=i;let c="";n.skills.forEach(t=>{c+=`<div class="skills__data">
      <div class="skills__titles">
        <h3 class="skills__name">${t.name}</h3>
        <span class="skills__number">${t.number}%</span>
      </div>
      <div class="skills__bar">
        <span class="skills__percentage skills__${t.name.toLowerCase()}"></span>
      </div>
    </div>`}),document.getElementById("skills-backend-list").innerHTML=c,document.getElementById("qualification-title").innerHTML=e.site.experience.title,document.getElementById("qualification-subtitle").innerHTML=e.site.experience.subtitle,document.getElementById("qualification-work").innerHTML=e.site.experience.work,document.getElementById("qualification-education").innerHTML=e.site.experience.education;let r="",p=e.workExperience.length;e.workExperience.forEach((t,o)=>{o%2?r+=`<div class="qualification__data">
          <div></div>
          <div>
            <span class="qualification__rounder"></span>
            ${o==p-1?"":'<span class="qualification__line"></span>'}
          </div>
          <div>
            <h3 class="qualification__title">${t.position}</h3>
            <span class="qualification__subtitle">${t.company}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${t.dateStart} - ${t.dateEnd}
            </div>
          </div>
        </div>`:r+=`<div class="qualification__data">
          <div>
            <h3 class="qualification__title">${t.position}</h3>
            <span class="qualification__subtitle">${t.company}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${t.dateStart} - ${t.dateEnd}
            </div>
          </div>

          <div>
            <span class="qualification__rounder"></span>
            ${o==p-1?"":'<span class="qualification__line"></span>'}
          </div>
        </div>`}),document.getElementById("work").innerHTML=r;let d="",u=e.academics.length;e.academics.forEach((t,o)=>{o%2?d+=`<div class="qualification__data">
          <div></div>
          <div>
            <span class="qualification__rounder"></span>
            ${o==u-1?"":'<span class="qualification__line"></span>'}
          </div>
          <div>
            <h3 class="qualification__title">${t.title}</h3>
            <span class="qualification__subtitle">${t.institute}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${t.dateStart} - ${t.dateEnd}
            </div>
          </div>
        </div>`:d+=`<div class="qualification__data">
          <div>
            <h3 class="qualification__title">${t.title}</h3>
            <span class="qualification__subtitle">${t.institute}</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i>
              ${t.dateStart} - ${t.dateEnd}
            </div>
          </div>

          <div>
            <span class="qualification__rounder"></span>
            ${o==u-1?"":'<span class="qualification__line"></span>'}
          </div>
        </div>`}),document.getElementById("education").innerHTML=d,document.getElementById("testimonials-title").innerHTML=e.site.testimonials.title,document.getElementById("testimonials-subtitle").innerHTML=e.site.testimonials.subtitle,document.getElementById("testimonial-url-img").href=e.testimonials.url,document.getElementById("testimonial-img").src=e.testimonials.photo,document.getElementById("testimonial-url").href=e.testimonials.url,document.getElementById("testimonial-url").innerHTML=e.testimonials.person,document.getElementById("testimonial-comment").innerHTML=e.testimonials.comment,document.getElementById("contact-title").innerHTML=e.site.contact.title,document.getElementById("contact-subtitle").innerHTML=e.site.contact.subtitle,document.getElementById("contact-email-title").innerHTML=e.site.contact.email,document.getElementById("contact-phone-title").innerHTML=e.site.contact.phone,document.getElementById("contact-location-title").innerHTML=e.site.contact.location,document.getElementById("contact-email").innerHTML=e.email,document.getElementById("contact-phone").innerHTML=e.phone,document.getElementById("contact-location").innerHTML=e.location,document.getElementById("footer-title").innerHTML=e.site.social.title,document.getElementById("footer-linkedin").href=e.linkedin,document.getElementById("footer-gitlab").href=e.gitlab,document.getElementById("footer-twitter").href=e.twitter,document.getElementById("footer-copy").innerHTML=e.site.copy.title,localStorage.setItem("selected-lang",a)}const g=localStorage.getItem("selected-lang");m(g||"es");const te=document.querySelectorAll(".change-lang");te.forEach(a=>a.addEventListener("click",s=>{const e=s.target.id.split("-");m(e[1])}));
