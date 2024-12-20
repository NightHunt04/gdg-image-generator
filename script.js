document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('img')
    const generateButton = document.querySelector('.generate-button')

    generateButton.addEventListener('click', function(e) {
        const inputPrompt = document.querySelector('.prompt-input').value

        if (inputPrompt != '') {
            let encodedPrompt = encodeURI(inputPrompt)
            image.src = `https://image.pollinations.ai/prompt/${encodedPrompt}?enhance=true&nologo=true`
        } else {
            alert('Enter the prompt')
        }
    })
})