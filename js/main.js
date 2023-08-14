const btnDarkMode = document.querySelector(".dark-mode-btn");


/* Проверка тт на уровне системных настроек пользователя */

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && 
localStorage.getItem('UserDarkMode') != 'light') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
    localStorage.setItem('DarkMode', 'dark');
}


/* Проверка темной темы в localStorage */

 if (localStorage.getItem('DarkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} 


/* если меняеютя сис-настройки (Можно впринципе не добавлять)*/

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newcolorScheme = event.matches ? 'dark': 'light';

    if (newcolorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add('dark');
        localStorage.setItem('DarkMode', 'dark')
    }
    else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove('dark');
        localStorage.setItem('DarkMode', 'light')
    }

});


/* Переключение ночного режима по кнопке */

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('DarkMode', 'dark');
        localStorage.setItem('UserDarkMode', 'dark')
    }
    else {
        localStorage.setItem('DarkMode', 'light');
        localStorage.setItem('UserDarkMode', 'light')
    }

}
