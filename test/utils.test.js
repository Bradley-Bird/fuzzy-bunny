import { renderFamily, renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('Should return div with p class family-name', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="family"><h3>The Zhang Family</h3></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderFamily({
        name: 'The Zhang Family',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Should return p class bunny-name', (expect) => {
    
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="bunnies"><p class="bunny">Braum the Brute</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderBunny({
        name: 'Braum the Brute',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});