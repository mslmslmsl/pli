const containerClass = 'cle-dialog__container' // Class for the container
const dialogClass = 'cle-dialog' // Class for the dialog
const dialogId = 'cle-dialog' // ID for the dialog
const buttonClass = 'cle-dialog__button' // Class for the button
const wait = 2000 // Delay for creating new elements after deletion

// Function to create the dialog
function createDialogIfNeeded () {
  // Check if a container already exists
  const existingContainer = document.querySelector(`.${containerClass}`)
  if (existingContainer) {
    console.log('Container already exists')
    return
  }

  // Create dialog container
  const container = document.createElement('div')
  container.className = containerClass
  const containerText = document.createElement('div')
  containerText.innerText = `.${containerClass}`
  container.appendChild(containerText)

  // Create dialog
  const dialog = document.createElement('div')
  dialog.id = dialogId
  dialog.className = dialogClass
  const dialogText = document.createElement('div')
  dialogText.innerText = `.${dialogClass} #${dialog.id}`
  dialog.appendChild(dialogText)

  // Create dialog button
  const button = document.createElement('button')
  button.className = buttonClass
  button.innerText = `.${button.className}`

  // The button should remove the container then add it back after the wait
  button.addEventListener('click', () => {
    console.log('Removing container')
    container.remove() // Removal
    console.log(`Waiting ${(wait / 1000)} seconds`)
    setTimeout(() => {
      createDialogIfNeeded()
    }, wait) // Addition after wait
  })

  // Append all elements
  console.log('Adding elements to page')
  dialog.appendChild(button)
  container.appendChild(dialog)
  document.getElementById('player').appendChild(container)
}

// Create initial container
createDialogIfNeeded()
