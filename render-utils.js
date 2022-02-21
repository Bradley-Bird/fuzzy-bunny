export function renderFamily(family) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    div.classList.add('family');
    // h3.classList.add('family-name');
    h3.textContent = family.name;

    div.append(h3);
    return div;
}

export function renderBunny(bunny) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('bunnies');
    p.classList.add('bunny');
    p.textContent = bunny.name;
    div.append(p);
    return div;
}
