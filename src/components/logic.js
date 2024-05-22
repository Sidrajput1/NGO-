// menuLogic.js

// Your JavaScript logic for handling menu interactions
const menuLogic = () => {
    // Get all menu items and submenus
    const menuItems = document.querySelectorAll('.menu-item');
    const subMenus = document.querySelectorAll('.sub__menus');

    // Function to hide all submenus
    const hideAllSubMenus = () => {
        subMenus.forEach(subMenu => {
            subMenu.classList.remove('show');
        });
    };

    // Event listener for menu item clicks
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            // Hide all submenus
            hideAllSubMenus();

            // Show the submenu corresponding to the clicked menu item
            const submenuId = menuItem.getAttribute('data-submenu');
            const submenu = document.querySelector(`#${submenuId}`);
            if (submenu) {
                submenu.classList.add('show');
            }
        });
    });
};

export default menuLogic;
