const projectsListMain = document.getElementById('projects-list-main');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const projectFrame = document.getElementById('projectFrame');
const projectContainer = document.getElementById('project-container');
const projectTitle = document.querySelector('.project-tile');

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
  codeDisplay.textContent = `HTML Code:\n${htmlCode}\n\nCSS Code:\n${cssCode}\n\nJavaScript Code:\n${jsCode}`;
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

