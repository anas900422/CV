document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skills ul li');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});
