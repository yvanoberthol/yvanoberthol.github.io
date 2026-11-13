
const translations = {
    fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.experience": "Parcours",
    "nav.contact": "Contact",
    "nav.hire": "Me Recruter",
    "hero.badge": "Disponible pour Projets & Formations",
    "hero.greeting": "Bonjour, je suis",
    "hero.description": "Spécialiste en ingénierie logicielle et transmission du savoir. J'accompagne les entreprises et apprenants dans la conception d'architectures solides, le développement multiplateforme (Web, Flutter, Power BI) et la mise en œuvre de pratiques DevOps modernisées.",
    "hero.btnProjects": "Explorer mes projets",
    "hero.card1.title": "Analyse & Architecture",
    "hero.card1.desc": "Merise, UML, Optimisation SQL",
    "hero.card1.train": "Formateur IT",
    "hero.card1.traindesc": "Transmission & Pédagogie active",
    "about.title": "À Propos de Moi",
    "about.subtitle": "Analyste Concepteur | Développeur Full-Stack & Mobile | Formateur IT",
    "about.text1": "Doté d'une triple expertise en ingénierie logicielle, conception de systèmes d'information et formation professionnelle, j'interviens sur l'ensemble du cycle de vie des projets informatiques.",
    "about.text2": "De la modélisation conceptuelle (Merise, UML) à la mise en production sécurisée (Docker, CI/CD), en passant par le développement mobile multiplateforme (Flutter) et l'analyse décisionnelle (Power BI), mon objectif est de concevoir des solutions efficientes tout en partageant les meilleures pratiques.",
    "about.area1.title": "Analyse & Modélisation de Données",
    "about.area1.desc": "Conception Merise (MCD/MLD), UML, optimisation de procédures stockées et déclencheurs (MySQL / MariaDB).",
    "about.area2.title": "Développement Web & Mobile Multiplateforme",
    "about.area2.desc": "Applications robustes avec Symfony (PHP), Java/Spring Boot, Flutter et interfaces dynamiques Bootstrap/JS.",
    "about.area3.title": "DevOps & Business Intelligence (Power BI)",
    "about.area3.desc": "Conteneurisation Docker, pipelines CI/CD et tableaux de bord décisionnels interactifs Power BI.",
    "about.area4.title": "Pédagogie & Formation IT",
    "about.area4.desc": "Ingénierie pédagogique, animation d'ateliers techniques et mentorat d'étudiants/développeurs.",
    "skills.title": "Matrice de Compétences Détaillée",
    "skills.subtitle": "Savoir-faire technique, analytique, décisionnel et pédagogique",
    "skills.filter.all": "Toutes",
    "skills.filter.analysis": "Analyse & Architecture",
    "skills.filter.backend": "Back-End & Systèmes",
    "skills.filter.mobile": "Mobile & Front-End",
    "skills.filter.devops": "DevOps & Power BI",
    "skills.filter.pedagogy": "Pédagogie & Formation",
    "projects.title": "Projets & Réalisations",
    "projects.subtitle": "Aperçu de systèmes d'information, applications et outils d'apprentissage",
    "contact.title": "Démarrons un Projet ensemble",
    "contact.subtitle": "Développement, Conseil en Architecture ou Formations sur-mesure",
    "contact.name": "Nom complet",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer le message"
},
    en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me",
    "hero.badge": "Available for Projects & Training",
    "hero.greeting": "Hello, I am",
    "hero.description": "Software Engineering and Pedagogy Specialist. I help companies and learners build robust architectures, cross-platform apps (Web, Flutter, Power BI), and modern DevOps practices.",
    "hero.btnProjects": "Explore My Projects",
    "hero.card1.title": "Analysis & Architecture",
    "hero.card1.desc": "Merise, UML, SQL Optimization",
    "hero.card1.train": "IT Instructor",
    "hero.card1.traindesc": "Active Learning & Mentoring",
    "about.title": "About Me",
    "about.subtitle": "Software Analyst | Full-Stack & Mobile Developer | IT Trainer",
    "about.text1": "With triple expertise in software engineering, information system design, and professional training, I work across the entire lifecycle of IT projects.",
    "about.text2": "From conceptual modeling (Merise, UML) to secure production deployment (Docker, CI/CD), cross-platform mobile apps (Flutter), and Business Intelligence (Power BI), my goal is to design efficient solutions while sharing best practices.",
    "about.area1.title": "Data Analysis & Modeling",
    "about.area1.desc": "Merise conceptual models (MCD/MLD), UML, stored procedure & trigger optimization (MySQL/MariaDB).",
    "about.area2.title": "Web & Cross-Platform Mobile Development",
    "about.area2.desc": "Robust apps with Symfony (PHP), Java/Spring Boot, Flutter, and dynamic Bootstrap/JS interfaces.",
    "about.area3.title": "DevOps & Business Intelligence (Power BI)",
    "about.area3.desc": "Docker containerization, CI/CD pipelines, and interactive Power BI decision dashboards.",
    "about.area4.title": "IT Pedagogy & Training",
    "about.area4.desc": "Curriculum engineering, technical workshop facilitation, and student/developer mentoring.",
    "skills.title": "Detailed Skills Matrix",
    "skills.subtitle": "Technical, analytical, decision-making, and pedagogical expertise",
    "skills.filter.all": "All",
    "skills.filter.analysis": "Analysis & Architecture",
    "skills.filter.backend": "Back-End & Systems",
    "skills.filter.mobile": "Mobile & Front-End",
    "skills.filter.devops": "DevOps & Power BI",
    "skills.filter.pedagogy": "Pedagogy & Training",
    "projects.title": "Featured Projects",
    "projects.subtitle": "Overview of information systems, apps, and learning tools",
    "contact.title": "Let's Start a Project Together",
    "contact.subtitle": "Development, Architecture Consulting or Custom Training",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.message": "Message",
    "contact.send": "Send Message"
}
};

    let currentLang = 'fr';

    // DETAILED SKILLS MATRIX DATA
    const skillsDetailed = [
    // 1. Analyse & Architecture
    { name: "Modélisation Merise (MCD, MLD, MPD)", category: "analysis", level: 95, desc_fr: "Structure de données relationnelles complexes.", desc_en: "Complex relational data modeling." },
    { name: "UML (Use Cases, Séquences, Classes)", category: "analysis", level: 90, desc_fr: "Spécification d'architecture logicielle.", desc_en: "Software architecture specification." },
    { name: "SGBD (MySQL / MariaDB)", category: "analysis", level: 92, desc_fr: "Optimisation de jointures, indexation et requêtes.", desc_en: "Join optimization, indexing, and queries." },
    { name: "Procédures Stockées & Triggers", category: "analysis", level: 90, desc_fr: "Automatisation et garanties d'intégrité SQL.", desc_en: "SQL automation and data integrity triggers." },

    // 2. Back-End & Systèmes
    { name: "PHP & Symfony (Doctrine, Twig)", category: "backend", level: 92, desc_fr: "Développement d'applications Web métier.", desc_en: "Enterprise web application development." },
    { name: "Symfony Messenger (Asynchrone)", category: "backend", level: 88, desc_fr: "Traitement par lots et files d'attente.", desc_en: "Queue workers & asynchronous batching." },
    { name: "Java & Spring Boot", category: "backend", level: 82, desc_fr: "Services RESTful, POO et couche de persistance.", desc_en: "RESTful services, OOP, and persistence layer." },
    { name: "Integrations IA (LLM / RAG)", category: "backend", level: 85, desc_fr: "APIs LLM, bases vectorielles et RAG.", desc_en: "LLM APIs, vector search, and RAG architectures." },

    // 3. Mobile & Front-End
    { name: "Flutter & Dart", category: "mobile", level: 88, desc_fr: "Applications mobiles iOS/Android multiplateformes.", desc_en: "Cross-platform mobile apps for iOS/Android." },
    { name: "Android Native (Java/Compose)", category: "mobile", level: 80, desc_fr: "Cycle de vie Android et composants natifs.", desc_en: "Android lifecycle & native components." },
    { name: "JavaScript / jQuery / Bootstrap 5", category: "mobile", level: 88, desc_fr: "Interfaces réactives et dynamiques.", desc_en: "Dynamic and responsive UI design." },

    // 4. DevOps & Power BI
    { name: "Power BI & Analytics", category: "devops", level: 85, desc_fr: "Tableaux de bord interactifs et requêtes DAX.", desc_en: "Interactive dashboards & DAX analytics." },
    { name: "DevOps (Docker, CI/CD, Git)", category: "devops", level: 80, desc_fr: "Conteneurisation et pipelines de déploiement.", desc_en: "Containerization and automated pipelines." },

    // 5. Pédagogie & Formation
    { name: "Ingénierie Pédagogique", category: "pedagogy", level: 90, desc_fr: "Conception de programmes de cours et TP.", desc_en: "Course syllabus design and practical labs." },
    { name: "Vulgarisation & Animation IT", category: "pedagogy", level: 95, desc_fr: "Animation d'ateliers et accompagnement d'apprenants.", desc_en: "Facilitating tech workshops and mentoring." }
    ];

    const rolesFr = [
    "Analyste Concepteur de Logiciels",
    "Développeur Full-Stack (Symfony & Spring)",
    "Développeur Mobile (Flutter)",
    "Expert Power BI & DevOps",
    "Formateur & Enseignant IT"
    ];

    const rolesEn = [
    "Software Analyst & Architect",
    "Full-Stack Developer (Symfony & Spring)",
    "Mobile Developer (Flutter)",
    "Power BI & DevOps Specialist",
    "IT Instructor & Tech Trainer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
    const currentRoles = currentLang === 'fr' ? rolesFr : rolesEn;
    const currentRole = currentRoles[roleIndex % currentRoles.length];
    const typedTextElement = document.getElementById("typed-text");

    if (isDeleting) {
    typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
} else {
    typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
}

    if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
} else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % currentRoles.length;
    setTimeout(typeEffect, 500);
} else {
    setTimeout(typeEffect, isDeleting ? 40 : 80);
}
}

    function renderSkills(filter = 'all') {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    const filtered = filter === 'all' ? skillsDetailed : skillsDetailed.filter(s => s.category === filter);

    filtered.forEach(skill => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
                    <div class="card h-100 p-3 skill-card shadow-sm border-0 bg-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="fw-bold fs-7">${skill.name}</span>
                            <span class="badge bg-primary-subtle text-primary code-font">${skill.level}%</span>
                        </div>
                        <div class="progress mb-2" style="height: 6px;">
                            <div class="progress-bar bg-primary" style="width: ${skill.level}%"></div>
                        </div>
                        <small class="text-body-secondary fs-8">${currentLang === 'fr' ? skill.desc_fr : skill.desc_en}</small>
                    </div>
                `;
    container.appendChild(col);
});
}

    // Skill Filters
    document.querySelectorAll('#skill-filters button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('#skill-filters button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderSkills(e.target.getAttribute('data-filter'));
    });
});

    function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    document.getElementById('lang-text').textContent = currentLang === 'fr' ? 'EN' : 'FR';

    document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
    el.textContent = translations[currentLang][key];
}
});
    const activeFilter = document.querySelector('#skill-filters button.active').getAttribute('data-filter');
    renderSkills(activeFilter);
}

    function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    if (html.getAttribute('data-bs-theme') === 'dark') {
    html.setAttribute('data-bs-theme', 'light');
    themeIcon.className = 'bi bi-sun-fill';
} else {
    html.setAttribute('data-bs-theme', 'dark');
    themeIcon.className = 'bi bi-moon-stars';
}
}

    function handleFormSubmit(e) {
    e.preventDefault();
    alert(currentLang === 'fr' ? "Message envoyé avec succès !" : "Message sent successfully!");
    e.target.reset();
}

    document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    renderSkills();
});