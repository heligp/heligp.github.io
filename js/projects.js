// Projects data and management - English version
const projectsData = {
    agentes: [
        {
            id: 'personal-agent',
            title: 'Personal Professional Agent',
            description: 'An intelligent conversational agent that allows people to learn about my professional and personal background through natural language interaction. Send me your name and email if you want to know more about me',
            thumbnail: 'assets/images/projects/personal-agent-thumbnail.jpg',
            tech: ['OpenAI', 'Gradio', 'Python', 'GCP'],
            links: {
                repo: 'https://github.com/heligp/agente_linkedin',
                demo: 'https://gradio-app-131208823571.us-central1.run.app/' // Replace with your actual demo URL
            },
            metrics: {
                availability: '24/7',
                languages: 'English/Spanish',
                uptime: 'On demand'
            }
        }
    ],
    coming_soon: [
        {
            id: 'coming-soon-1',
            title: 'More Projects Coming Soon',
            description: 'I\'m currently working on exciting new projects in ML, LLMs, and automation. Stay tuned for updates!',
            thumbnail: '',
            tech: ['Coming Soon'],
            links: {},
            metrics: {
                status: 'In Development',
                eta: 'Q4 2025'
            },
            isComingSoon: true
        }
    ]
};

// Function to render project cards
function renderProjectCards(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    let projectsToRender = [];

    if (category === 'all') {
        Object.entries(projectsData).forEach(([cat, categoryProjects]) => {
            categoryProjects.forEach(project => {
                projectsToRender.push({ ...project, category: cat });
            });
        });
    } else if (projectsData[category]) {
        projectsToRender = projectsData[category].map(project => ({ ...project, category }));
    }

    projectsGrid.innerHTML = projectsToRender.map(project => `
        <div class="project-card ${project.isComingSoon ? 'coming-soon' : ''}" data-category="${project.category}" data-project-id="${project.id}">
            <div class="project-thumbnail" style="background-image: url('${project.thumbnail}')">
                ${!project.thumbnail ? (project.isComingSoon ? '🚀' : '📊') : ''}
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag ${project.isComingSoon ? 'coming-soon-tag' : ''}">${tech}</span>`).join('')}
            </div>
            ${!project.isComingSoon ? `
                <div class="project-links">
                    ${Object.entries(project.links).map(([type, url]) => 
                        `<a href="${url}" class="project-link" target="_blank" rel="noopener">${getLinkText(type)}</a>`
                    ).join('')}
                </div>
            ` : ''}
            ${project.metrics ? `
                <div class="project-metrics">
                    ${Object.entries(project.metrics).map(([key, value]) => 
                        `<span class="metric">${key}: ${value}</span>`
                    ).join(' | ')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Helper function to get link text
function getLinkText(type) {
    const linkTexts = {
        repo: 'GitHub',
        demo: 'Try Agent',
        case: 'Case PDF',
        hf_space: 'HF Space',
        docs: 'Docs'
    };
    return linkTexts[type] || type;
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProjectCards('all');
});