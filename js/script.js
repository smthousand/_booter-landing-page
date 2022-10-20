const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach(tab => {
        tab.children[0].classList.remove(
            'border-btBk', 
            'border-b-2'
        )
    })

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // Activate a new tab and panel based on th target
    e.target.classList.add('border-btBk', 'border-b-2')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}



// const submitForm = document.querySelector('#submit-form')
// const submitInput = document.querySelector('#submit-form input');
// const submitButton = document.querySelector('#submit-form button');

// function submitEmailEvent() {
//   console.log(submitInput.value)
// }



// submitForm.addEventListener('submit', submitEmailEvent);