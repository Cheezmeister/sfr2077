import { Application } from "@hotwired/stimulus"
// import { greetings } from './sfr2077'

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

console.log('hello, world')

export { application }
