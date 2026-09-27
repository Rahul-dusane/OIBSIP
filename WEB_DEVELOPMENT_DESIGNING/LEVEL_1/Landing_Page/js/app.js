async function loadComponent(id, fileName) {
    const response = await fetch(`components/${fileName}`);
    const component = await response.text();

    document.getElementById(id).innerHTML = component;
}

async function loadWebsite() {
    await loadComponent("navbar", "navbar.html");
    await loadComponent("hero", "hero.html");
    await loadComponent("features", "features.html");
    await loadComponent("about", "about.html");
    await loadComponent("cta", "cta.html");
    await loadComponent("footer", "footer.html");
}

loadWebsite();