
const navBar = () => {

    var toggleOpen = document.getElementById('toggleOpen');
  var toggleClose = document.getElementById('toggleClose');
  var collapseMenu = document.getElementById('collapseMenu');

  function handleClick() {
    if (collapseMenu.style.display === 'block') {
      collapseMenu.style.display = 'none';
    } else {
      collapseMenu.style.display = 'block';
    }
  }

  function handleSubMenuClick() {
    collapseMenu.style.display = 'none'
  }

  toggleOpen.addEventListener('click', handleClick);
  toggleClose.addEventListener('click', handleClick);

  var menuBtn = document.querySelectorAll('#submenu')
  menuBtn.forEach(button=>{
    button.addEventListener('click',handleSubMenuClick)
  });

}

export default navBar
