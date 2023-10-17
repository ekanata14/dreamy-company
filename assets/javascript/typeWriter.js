// Function for typewriter Effect
const typeWriterEffect = () => {
    
    // Declaring Variables
    const words = ["Friends",  "Assistant", "Teacher"];
    
    let wordCount = 0;
    let letterCount = 0;

    let currentText = "";
    let currentWord = "";

    let timeOut = 400;

    let isDeleting = false;

    // Type Effect
    function type(){
        if(wordCount === words.length){
            wordCount = 0;
        }

        currentWord = words[wordCount];

        if(isDeleting){
            currentText = currentWord.slice(0, --letterCount);
        } else{
            currentText = currentWord.slice(0, ++letterCount)
        }

        document.querySelector('.typewriter').textContent = currentText;

        timeOut = isDeleting ? 200 : 400;

        if(!isDeleting && currentText.length === currentWord.length){
            timeOut = 100;
            isDeleting = true;
        } else if(isDeleting && currentText.length === 0){
            timeOut = 100;
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type, timeOut);
    }
    type();
}

typeWriterEffect();