// Replace with your own Moralis info
const serverUrl = "****************";
const appId = "***************";
Moralis.start({ serverUrl, appId });


/* Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;



/* Menu slider*/
const
    arrowDown = Array.from(document.getElementsByClassName('arrow__down')),
    menuItems = Array.from(document.getElementsByClassName('menu__item')),
    menuChildren = Array.from(document.querySelectorAll('#nav li')),
    menuSlider = document.getElementById('arrow__left'),
    nav = document.getElementById('nav');

menuChildren.forEach(function (menuItem) {
    menuItem.onclick = function () {
        if (this.querySelector('ul')) {
            this.querySelector('ul').classList.toggle('open')
        }
    }
});

arrowDown.forEach(function (arrow__Down) {
    arrow__Down.onclick = function (e) {
        e.stopPropagation();
        this.parentElement.querySelector('ul').classList.toggle('open')
    }
});

menuItems.forEach(function (dropDown) {
    dropDown.onclick = function () {
        this.nextElementSibling.classList.toggle('open')
    }
});

menuItems.forEach(function (menuItem) {
    menuItem.onclick = function () {
        menuItems.forEach(function (menuItem) {
            if(menuItem.classList.contains('active')) {
                menuItem.classList.remove('active')
            }
        });
        this.classList.add('active');
    }
})

menuSlider.onclick = function () {
    nav.classList.toggle('nav__close')
}
