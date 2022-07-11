const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')

const toggleColors = document.getElementById('toggle-colors')

//Localizamos las variables que tenemos en nuestro CSS...
const rootStyles = document.documentElement.style

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (toggleIcon.classList.contains('fa-moon')) {
    toggleIcon.classList.replace('fa-moon', 'fa-sun')
    toggleText.textContent = 'Light Mode'
    toggleIcon.src = 'assets/icons/sun.svg'
  } else {
    toggleIcon.classList.replace('fa-sun', 'fa-moon')
    toggleText.textContent = 'Dark Mode'
    toggleIcon.src = 'assets/icons/moon.svg'
  }
})

// toggleTheme.addEventListener('click', () => {
//   document.body.classList.toggle('dark')
//   if (toggleIcon.src.includes('moon.svg')) {
//     toggleText.textContent = 'Light Mode'
//     toggleIcon.src = 'assets/icons/sun.svg'
//   } else {
//     toggleText.textContent = 'Dark Mode'
//     toggleIcon.src = 'assets/icons/moon.svg'
//   }
// })

toggleColors.addEventListener('click', (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color)
  console.log(e.target.dataset.color)
})
