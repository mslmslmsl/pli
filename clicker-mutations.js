(() => {
  let running = false // Flag to prevent multiple concurrent executions

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

  // Function to handle the mutations
  const handleMutations = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1 &&
              node.classList.contains('cle-dialog__container')) {
            if (!running) handleDialog()
          }
        })
      }
    }
  }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(handleMutations)

  // Start observing the 'player' div for child list changes
  const targetNode = document.getElementById('player')
  if (targetNode) {
    // Run once to account for a present dialog without mutations
    handleDialog()
    observer.observe(targetNode, { subtree: true, childList: true })
  } else {
    console.warn("Element with id 'player' not found")
  }
})()
