const dqsa = (target) => document.querySelectorAll(target);
const dqs = (target) => document.querySelector(target);

document.addEventListener('DOMContentLoaded', function() {
    const decorativeImages = dqsa('.decorativeImage');
    const animateImage = dqs('.animatedImage');
    const fixedImage = dqs('.fixedImage');
    
    decorativeImages.forEach((image, index) => {
        setTimeout(()=>{
            image.style.opacity = 1;
            image.style.transform = 'translateY(0)';
        }, index*350);
    });

    setTimeout(()=>{
        fixedImage.style.opacity = 1;
        fixedImage.style.transform = 'translateX(0)';
        animateImage.style.opacity = 1;
    }, 500);
});

const getRandomRotation = () => {return Math.floor(Math.random() * 180) -90};

const createTriangle = () => {
    const triangle = document.createElement('div');
    triangle.classList.add('triangle');
    triangle.style.backgroundImage = 'url("assets/img/page_12.png")';
    triangle.style.transform = `rotate(${getRandomRotation()}deg)`;
    return triangle;
};

const generateTriangles = (ntriangles) => {
    const triangleContainer = dqs('.triangles');

    for(let i=0; i<ntriangles; i++) {
        const triangle = createTriangle();

        const x = Math.random() * (triangleContainer.clientWidth - 50);
        const y = Math.random() * (triangleContainer.clientHeight - 50);

        triangle.style.left = `${x}px`;
        triangle.style.top = `${y}px`;
        triangle.style.animationDelay = `${i * 0.5}s`;

        triangleContainer.appendChild(triangle);
    }
};

generateTriangles(8);

const updateHeightBanner = () => {
    let windowHeight = window.innerHeight;
    let headerHeight = dqs('header').offsetHeight;
    let footerHeight = dqs('footer').offsetHeight;
    let banner = dqs('.hero');
    let newHeightHero = windowHeight - headerHeight - footerHeight;
    banner.style.height = `${newHeightHero}px`;
}

window.onload = updateHeightBanner
window.onresize = updateHeightBanner