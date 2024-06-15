(() => {
  let running = false // Flag to prevent multiple concurrent executions
  const frequency = 10 // How many times per second to check for dialog

  // Function to handle the dialog element
  const handleDialog = () => {
    // Check for a visible dialog
    const dialog = document.querySelector('.cle-dialog__container')
    if (!dialog || dialog.style.visibility === 'hidden') return

    // Check for a button inside the dialog
    const button = dialog.querySelector('.cle-dialog__button')
    if (!button) return

    // Set running to true to prevent re-entry
    running = true

    // Hide the dialog
    console.log('Hiding the dialog')
    dialog.style.visibility = 'hidden'

    // Calculate random wait time between 1 and 10 seconds
    const wait = 1000 + (9000 * Math.random())
    console.log(`Waiting ${(wait / 1000).toFixed(2)} seconds`)

    // Click the button after the wait and reset running flag
    setTimeout(() => {
      console.log('Clicking button')
      button.click()
      running = false
    }, wait)
  }

  // Run the dialog function on a loop if not already running
  setInterval(() => {
    if (!running) handleDialog()
  }, (1000 / frequency))
})()
