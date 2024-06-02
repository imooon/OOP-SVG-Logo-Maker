const { Circle, Square, Triangle } = require('./lib/shapes');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function createLogo() {
    console.log('Welcome to SVG Logo Maker!');

    // Get user input for logo characters
    const characters = await prompt('Enter up to 3 characters for your logo: ');

    // Get user input for text color
    const textColor = await prompt('Enter text color (e.g., red, green, blue): ');

    // Get user input for shape choice
    const shapeChoice = await prompt('Choose a shape (circle, square, triangle): ');

    let shape;
    switch (shapeChoice.toLowerCase()) {
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        default:
            console.log('Invalid shape choice.');
            rl.close();
            return;
    }

    // Get user input for shape color
    const shapeColor = await prompt('Enter shape color (e.g., red, green, blue): ');

    // Set colors for text and shape
    shape.setColor(shapeColor);

    // Generate SVG content
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    ${shape.render()}
    <!-- Adjust text position to be in the center -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${characters}</text>
</svg>`;

    // Write SVG content to file
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
            rl.close();
            return;
        }
        console.log('SVG logo saved to logo.svg');
        rl.close();
    });
}

createLogo();
