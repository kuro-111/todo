const main = document.querySelector('.main');


function landingPage() {
    const landPageDiv = document.createElement('div');


    landPageDiv.innerHTML = `
      <h1> "To Do!" </h1>
      <div class= "centerspace"> 

      </div>
      <div class="sidebar">
        <ul class="projects">

        </ul>
      </div>
    `

    main.appendChild(landPageDiv);
    const toDoSpace = document.querySelector('.centerspace');

    return 'landingPage';
}

export default landingPage;