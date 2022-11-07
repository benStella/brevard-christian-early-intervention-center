// employment application
const applicantInfoDiv = document.getElementById('applicant-info-div')
const educationDiv = document.getElementById('education-div')
const referencesDiv = document.getElementById('references-div')
const previousEmploymentDiv = document.getElementById('prvious-employment-div')
const militaryServiceDiv = document.getElementById('military-service-div')
const disclaimerSignatureDiv = document.getElementById('disclamer-signature-div')

const convictedOfFelonyYesRadio = document.getElementById('convicted-of-felony-yes')
const convictedOfFelonyNoRadio = document.getElementById('convicted-of-felony-no')
const ifAuthorizedToWorkNoRadio = document.getElementById('ifAuthorizedToWorkNo')
const ifAuthorizedToWorkYesRadio = document.getElementById('ifAuthorizedToWorkYes')

convictedOfFelonyYesRadio.addEventListener('click', function() {
    document.getElementById('explain-felony').setAttribute('required', '')
})

convictedOfFelonyNoRadio.addEventListener('click', function() {
    document.getElementById('explain-felony').removeAttribute('required')
    ifAuthorizedToWorkNoRadio.setAttribute('required', '')
    ifAuthorizedToWorkYesRadio.setAttribute('required', '')

})

ifAuthorizedToWorkNoRadio.addEventListener('click', () => {
    document.getElementById('if-yes-textarea').removeAttribute('required')
})