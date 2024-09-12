const projectsListMain = document.getElementById('projects-list-main');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const projectFrame = document.getElementById('projectFrame');
const projectContainer = document.getElementById('project-container');
const projectTitle = document.querySelector('.project-tile');
const respWebFieldset = document.getElementById('resp-web-fieldset');
const jsAlgoDsaFieldset = document.getElementById('js-algo-dsa-fieldset');
const respWebNavMenu = document.getElementById('resp-web-nav-menu');
const jsAlgoDsaNavMenu = document.getElementById('js-algo-dsa-nav-menu');
const navElement = document.querySelector('nav');
const mainElement = document.querySelector('main');
const themeDiv = document.getElementById('theme');  // Assuming there's a div for the icon
let themeIcon = document.getElementById('theme-icon');

const currentTheme = localStorage.getItem('theme');

navElement.classList.add('disable-transitions');
mainElement.classList.add('disable-transitions');

window.addEventListener('load', () => {
  setTimeout(() => {
      navElement.classList.remove('disable-transitions');
      mainElement.classList.remove('disable-transitions');
  }, 100);
});

if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
  themeIcon.setAttribute('title', 'Light theme');
} else {
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
  themeIcon.setAttribute('title', 'Dark theme');
}

themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);

  // Update icon based on the new theme
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.setAttribute('title', 'Light theme');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.setAttribute('title', 'Dark theme');
  }
});





async function loadProject(url) {
  projectContainer.style.display = 'block';
  nav.style.filter = 'blur(5px)';
  main.style.filter = 'blur(5px)';
  footer.style.filter = 'blur(5px)';

  projectContainer.innerHTML = "";
  projectContainer.innerHTML = `
    <img id="close-icon" src="images/x.png" alt="close-img" title="Close" onclick="closeProjectContainer()">
    <iframe id="projectFrame" src="${url}"></iframe>
  `;
} 

function closeProjectContainer() {
  projectContainer.style.display = 'none';
  nav.style.filter = 'none';
  main.style.filter = 'none';
  footer.style.filter = 'none';
}

async function showCode(htmlUrl, cssUrl, jsUrl) {
  nav.style.filter = 'blur(5px)';
  main.style.filter = 'blur(5px)';
  footer.style.filter = 'blur(5px)';

  projectContainer.style.display = "block";
  projectContainer.innerHTML = "";

  projectContainer.innerHTML = `
    <img id="close-icon" src="images/x.png" alt="close-img" title="Close" onclick="closeProjectContainer()">
    <pre id="codeDisplay" style="display: none; white-space: pre-wrap; word-wrap: break-word;"></pre>
  `;

  const htmlCode = await fetchFile(htmlUrl);
  const cssCode = await fetchFile(cssUrl);

  let jsCode = '';
  if (jsUrl) { 
    jsCode = await fetchFile(jsUrl);
  } else {
    jsCode = 'No JavaScript file available.';
  }

  const codeDisplay = document.getElementById('codeDisplay');
  codeDisplay.textContent = `HTML Code:\n${htmlCode}\n\n\nCSS Code:\n${cssCode}\n\n\nJavaScript Code:\n${jsCode}`;
  codeDisplay.style.display = 'block';
}

async function fetchFile(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    } else {
      return 'Error fetching file.';
    }
  } catch (error) {
    return 'Error fetching file.';
  }
}







const projectsRespWebDesign = [
  {
    id: "survey-form",
    projectName: "Survey Form",
    websitePath: "Responsive Web Design/Survey Form/index.html",
    htmlUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Survey%20Form/index.html",
    cssUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Survey%20Form/styles.css"
  },
  {
    id: "tribute-page",
    projectName: "Tribute Page",
    websitePath: "Responsive Web Design/Tribute Page/index.html",
    htmlUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Tribute%20Page/index.html",
    cssUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Tribute%20Page/styles.css"
  },
  {
    id: "technical-documentation",
    projectName: "Technical Documentation",
    websitePath: "Responsive Web Design/Technical Documentation/index.html",
    htmlUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Technical%20Documentation/index.html",
    cssUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Technical%20Documentation/styles.css"
  },
  {
    id: "product-landing-page",
    projectName: "Product Landing Page",
    websitePath: "Responsive Web Design/Product Landing Page/index.html",
    htmlUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Product%20Landing%20Page/index.html",
    cssUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Product%20Landing%20Page/styles.css"
  },
  {
    id: "personal-portfolio-webpage",
    projectName: "Personal Portfolio Webpage",
    websitePath: "Responsive Web Design/Personal Portfolio Webpage/index.html",
    htmlUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Personal%20Portfolio%20Webpage/index.html",
    cssUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Responsive%20Web%20Design/Personal%20Portfolio%20Webpage/styles.css"
  },
];


const projectsJsAlgoDsa = [
  {
    id: "palindrome-checker",
    projectName: "Palindrome Checker",
    websitePath: "Javascript Algorithms and Data Structures/Palindrome Checker/index.html",
    htmlUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Javascript%20Algorithms%20and%20Data%20Structures/Palindrome%20Checker/index.html",
    cssUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Javascript%20Algorithms%20and%20Data%20Structures/Palindrome%20Checker/styles.css",
    jsUrl: "https://raw.githubusercontent.com/GauravJagtap04/freeCodeCamp-projects/main/Javascript%20Algorithms%20and%20Data%20Structures/Palindrome%20Checker/script.js",
  }
];


const loadProjectTiles = () => {
  respWebFieldset.innerHTML = "";
  jsAlgoDsaFieldset.innerHTML = "";

  respWebNavMenu.innerHTML = "";
  jsAlgoDsaNavMenu.innerHTML = "";

  projectsRespWebDesign.forEach(({id, projectName, websitePath, htmlUrl, cssUrl}) => {
    respWebFieldset.innerHTML += `
      <div id="${id}" class="project-tile">
        <div class="project-title">
          ${projectName}
        </div>
        <div class="preview">
          <iframe class = "preview-frame" src="${websitePath}"></iframe class = "preview-frame" class = "preview-frame">
          <span onclick="loadProject('${websitePath}')">Show in full screen</span>
        </div>
        <div class="info">
            <div class="show-code-att" onclick="showCode('${htmlUrl}', '${cssUrl}')">Show code</div>
        </div>
      </div>
    `;

    respWebNavMenu.innerHTML += `
      <li><a class="nav-submenu" href="#${id}">${projectName}</a></li>
    `;
  }); 

  projectsJsAlgoDsa.forEach(({id, projectName, websitePath, htmlUrl, cssUrl, jsUrl}) => {
    jsAlgoDsaFieldset.innerHTML += `
      <div id="${id}" class="project-tile">
        <div class="project-title">
          ${projectName}
        </div>
        <div class="preview">
          <iframe class = "preview-frame" src="${websitePath}"></iframe class = "preview-frame" class = "preview-frame">
          <span onclick="loadProject('${websitePath}')">Show in full screen</span>
        </div>
        <div class="info">
            <div class="show-code-att" onclick="showCode('${htmlUrl}', '${cssUrl}', '${jsUrl}')">Show code</div>
        </div>
      </div>
    `;

    jsAlgoDsaNavMenu.innerHTML += `
      <li><a class="nav-submenu" href="#${id}">${projectName}</a></li>
    `;
  }); 
};

loadProjectTiles();