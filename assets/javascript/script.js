// Variable for getting all element with featureImg id
const targets = document.querySelectorAll('#featureImg');

// Lazy Load function to load the image when the image is viewed
const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('element-ease-in-transition');

                observer.disconnect();
            }
        });
    });
    io.observe(target);
}

// Make the function run on foreach lazyload
targets.forEach(lazyLoad);

