import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();

    // get the name and family id from the form
    const data = new FormData(form);
    const bunny = { name: data.get('bunny-name'), family_id: data.get('family-id') };
    // use createBunny to create a bunny with this name and family id
    console.log(bunny);
    await createBunny(bunny);
    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const selectEl = document.getElementById('family-select');
    // console.log('helklkdfjbnskdjfbn',selectEl)
    // go get the families from supabase
    const family = await getFamilies();
    // for each family
    for (let fam of family) {
        // create an option tag
        const option = document.createElement('option');
        // set the option's value and text content
        option.value = fam.id;
        option.label = fam.name;
        // and append the option to the select
        selectEl.append(option);
    }
    return selectEl;
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
