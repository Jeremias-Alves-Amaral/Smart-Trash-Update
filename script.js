// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks
    x = document.getElementsByClassName('menu')
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tablink')
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' w3-dark-grey', '')
    }
    document.getElementById(menuName).style.display = 'block'
    evt.currentTarget.firstElementChild.className += ' w3-dark-grey'
  }
  document.getElementById('myLink').click()
  
  // Script to open and close sidebar
  function w3_open() {
    document.getElementById('mySidebar').style.display = 'block'
    document.getElementById('myOverlay').style.display = 'block'
  }
  
  function w3_close() {
    document.getElementById('mySidebar').style.display = 'none'
    document.getElementById('myOverlay').style.display = 'none'
  }

  // mensagem 
const checkoutBtn = document.getElementById('checkout-btn')

checkoutBtn.addEventListener('click', function () {
    Toastify({
      text: 'Agradecemos pela sua sugestão!',
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        background: '#54c67a'
      }
    }).showToast()

    return
  })

const openModalButton1 = document.querySelector("#open-modal1");
const openModalButton2 = document.querySelector("#open-modal2");
const openModalButton3 = document.querySelector("#open-modal3");
const closeModalButton1 = document.querySelector("#close-modal1");
const closeModalButton2 = document.querySelector("#close-modal2");
const closeModalButton3 = document.querySelector("#close-modal3");
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");
const fade = document.querySelector("#fade");

const toggleModal1 = () => {
  modal1.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton1, closeModalButton1, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal1());
});

// 2
const toggleModal2 = () => {
  modal2.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton2, closeModalButton2, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal2());
});

// 3
const toggleModal3 = () => {
  modal3.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton3, closeModalButton3, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal3());
});