const meetList = document.querySelector('.meet-list')
const svgClose = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"><path fill="#012F34" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/></svg>'
const svgCross = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/></svg>'
const quote = {
    Nikita: {
        speak: "“It always amazes me how much talent there is in every corner of the globe.”",
        role: "Founder & CEO"
    },
    Christian: {
        speak: "“Distributed teams required unique processes. You need to approach work in a new way.”",
        role: "Co-Founder & COO"
    },
    Cruz: {
        speak: "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
        role: "Co-Founder & CTO"
    },
    Drake: {
        speak: "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
        role: "Business Development Lead"
    },
    Griffin: {
        speak: "“Unique perspectives shape unique products, which is what you need to survive these days.”",
        role: "Lead Marketin"
    },
    Aden: {
        speak: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
        role: "Head of Talent"
    },
}

meetList.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    const li = e.target.closest('li')
    let nameOfTheDirector = '';
    if (!button) {
        return
    }
    if(+button.dataset.active) {
        nameOfTheDirector = li.children[0].textContent.split(' ')
        li.innerHTML = `
            <img src="./images/avatar-${nameOfTheDirector[0].toLowerCase() === "nikita" ? "christian" : nameOfTheDirector[0].toLowerCase()}.jpg" alt="Avatar of ${nameOfTheDirector[0]}">
            <h3>${nameOfTheDirector.join(' ')}</h3>
            <em>${quote[nameOfTheDirector[0]].role}</em>
            <button type="button" data-active="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/></svg>
            </button>
        `
        return;
    }
    nameOfTheDirector = li.children[1].textContent.split(' ')
    li.innerHTML = `
        <h3>${nameOfTheDirector.join(' ')}</h3>
        <p>${quote[nameOfTheDirector[0]].speak}</p>
        <ul class="social-media-profil">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/></svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
            </a>
          </li>
        </ul>
        <button type="button" data-active="1" class="is-active">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"><path fill="#012F34" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/></svg>
        </button>
    `
})