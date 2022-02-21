import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';
import { renderBunny, renderFamily } from '../render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();
    // clear out the familiesEl
    familiesEl.textContent = '';
    // console.log(families);
    for (let family of families) {
        const bunniesEl = renderFamily(family);

        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = renderBunny(bunny);
            //    add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
            bunnyEl.addEventListener('click', async () => {
                // console.log(bunny);
                await deleteBunny(bunny.id);
                displayFamilies();
            });
            bunniesEl.append(bunnyEl);
        }
        // })
        familiesEl.append(bunniesEl);
    }
    // append the bunniesEl and nameEl to the familyEl
    // append the familyEl to the familiesEl
    return familiesEl;
}
await displayFamilies();

window.addEventListener('load', async () => {
    const families = await getFamilies();

    displayFamilies(families);
});
