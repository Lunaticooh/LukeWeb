const reveals = document.querySelectorAll(".reveal");
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(el => observer.observe(el));

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.setProperty("--delay", `${index * 0.08}s`);
});


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
