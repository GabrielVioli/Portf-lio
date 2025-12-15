AOS.init({
    duration: 800,
    once: true,
    offset: 50
});

const projects = [
    {
        title: "Belgare Elegancy - SaaS",
        desc: "SaaS de agendamento completo sem frameworks (PHP Puro). Router proprietário, segurança Argon2i e proteção contra Session Hijacking.",
        tags: ["PHP 8", "MVC", "MySQL", "Security"],
        repo: "https://github.com/GabrielVioli/BelgareElegancy",
        media: [
            { type: 'image', src: 'images/belgare_dashboard.png' }, 
            { type: 'image', src: 'images/belgare_login.png' },
            { type: 'image', src: 'images/belgare_home.png' },
            { type: 'image', src: 'images/belgare_register.png' },
            { type: 'image', src: 'images/belgare_agenda.png' },
        ]
    },
    {
        title: "VioliEvents - Fullstack",
        desc: "Plataforma de eventos com Laravel 11 e Tailwind CSS. Refatoração de UI/UX, gestão de permissões e relacionamentos N:N.",
        tags: ["Laravel 11", "Tailwind", "Blade", "Eloquent"],
        repo: "https://github.com/GabrielVioli/VioliEvents",
        media: [
            { type: 'image', src: 'images/events_home.png' },
            { type: 'image', src: 'images/events_register.png' },
            { type: 'image', src: 'images/events_detalhes.png' },
            { type: 'image', src: 'images/events_dashboard.png' },
            { type: 'image', src: 'images/events_create.png' }
        
        ]
    },
    {
        title: "Product Manager API",
        desc: "API RESTful construída manualmente. Container de Injeção de Dependência, Singleton e Repository Pattern.",
        tags: ["PHP", "API REST", "Design Patterns"],
        repo: "https://github.com/GabrielVioli/php-mvc-product-api",
        media: [
          {type: 'image', src: 'images/products_home.png'},
          {type: 'image', src: 'images/products_form.png'},
          {type: 'image', src: 'images/products_show.png'},
          
        ] 
    },
    {
        title: "PHP OOP Login",
        desc: "Sistema de registro e autenticação focado em POO, arquitetura limpa e segurança de dados.",
        tags: ["PHP", "POO", "MVC"],
        repo: "https://github.com/GabrielVioli/php-oop-mvc-login",
        media: []
    },
    {
        title: "ClientTasks (Spring Boot)",
        desc: "API para gestão de tarefas com autenticação, persistência em MySQL e Spring Framework.",
        tags: ["Java", "Spring Boot", "MySQL"],
        repo: "https://github.com/GabrielVioli/ClientTasks",
        media: []
    },
    {
        title: "Visão Computacional OpenCV",
        desc: "Algoritmo em C++ para análise e comparação de imagens utilizando a biblioteca OpenCV.",
        tags: ["C++", "OpenCV", "IA"],
        repo: "https://github.com/GabrielVioli/OpenCv-C-",
        media: []
    }
];

const grid = document.getElementById('projects-grid');

projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = "tilt-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col transform transition-transform duration-300 group";
    
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', Math.min(index * 100, 300)); // Limita o delay máximo para não travar
    
    card.setAttribute('data-tilt', '');
    card.setAttribute('data-tilt-max', '3');
    card.setAttribute('data-tilt-speed', '400');
    card.setAttribute('data-tilt-glare', 'true');
    card.setAttribute('data-tilt-max-glare', '0.1');

    const tagsHtml = proj.tags.map(tag => 
        `<span class="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">${tag}</span>`
    ).join('');

    const mediaBtn = proj.media.length > 0 
        ? `<button onclick="openModal(${index})" class="text-sm font-bold text-primary hover:text-secondary flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition z-20"><i class="fas fa-image"></i> Ver Telas</button>`
        : `<span class="text-xs text-gray-400 italic">Código apenas</span>`;

    card.innerHTML = `
        <div class="p-6 flex flex-col flex-1 relative z-10 h-full">
            <div class="flex justify-between items-start mb-4">
                <div class="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg text-primary text-xl">
                    <i class="fas fa-code"></i>
                </div>
                <a href="${proj.repo}" target="_blank" class="text-gray-400 hover:text-white hover:bg-black p-2 rounded-full transition z-20" title="Ver no GitHub">
                    <i class="fab fa-github text-xl"></i>
                </a>
            </div>
            
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition">${proj.title}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                ${proj.desc}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
                ${tagsHtml}
            </div>

            <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center mt-auto">
                ${mediaBtn}
                <a href="${proj.repo}" target="_blank" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition z-20 flex items-center gap-1">
                    Repositório <i class="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>
        </div>
    `;
    grid.appendChild(card);
});

VanillaTilt.init(document.querySelectorAll(".tilt-card"));

const words = ["Soluções Backend.", "APIs RESTful.", "Sistemas PHP.", "Clean Code."];
let i = 0;
let timer;

function typeWriter() {
    const heading = document.getElementById("typewriter");
    if (!heading) return;
    
    const word = words[i];
    const currentText = heading.textContent;
    
    if (heading.classList.contains("deleting")) {
        heading.textContent = word.substring(0, currentText.length - 1);
        if (heading.textContent === "") {
            heading.classList.remove("deleting");
            i = (i + 1) % words.length;
            timer = setTimeout(typeWriter, 500);
        } else {
            timer = setTimeout(typeWriter, 50);
        }
    } else {
        heading.textContent = word.substring(0, currentText.length + 1);
        if (heading.textContent === word) {
            heading.classList.add("deleting");
            timer = setTimeout(typeWriter, 2000);
        } else {
            timer = setTimeout(typeWriter, 100);
        }
    }
}
typeWriter();

// MODAL
const modal = document.getElementById('media-modal');
const modalPanel = document.getElementById('modal-panel');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

window.openModal = (index) => {
    const project = projects[index];
    modalTitle.innerText = project.title;
    modalContent.innerHTML = ''; 

    if(project.media.length === 0) return;

    project.media.forEach(item => {
        if(item.type === 'image') {
            modalContent.innerHTML += `
                <div class="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm inline-block w-full">
                    <img src="${item.src}" class="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" alt="Print do projeto" onerror="this.src='https://placehold.co/600x400?text=Imagem+Nao+Encontrada'">
                </div>`;
        } else if (item.type === 'video') {
            modalContent.innerHTML += `
                <div class="bg-black p-2 rounded-xl shadow-lg">
                    <video controls class="w-full rounded-lg">
                        <source src="${item.src}" type="video/mp4">
                    </video>
                </div>`;
        }
    });

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        modalPanel.classList.remove('scale-95');
        modalPanel.classList.add('scale-100');
    });
    document.body.style.overflow = 'hidden';
}

window.closeModal = () => {
    modal.classList.add('opacity-0');
    modalPanel.classList.remove('scale-100');
    modalPanel.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});