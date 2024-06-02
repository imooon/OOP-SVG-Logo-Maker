# Object-oriented Programming Challenge: SVG Logo Maker

![Screenshot 2024-06-02 123249](https://github.com/imooon/OOP-SVG-Logo-Maker/assets/110244046/9b71511d-4733-464e-828c-b184ddf5e0c2)
![Screenshot 2024-06-02 123155](https://github.com/imooon/OOP-SVG-Logo-Maker/assets/110244046/2d9f76b6-23d6-460f-b586-b561cbcd5a1b)
![Screenshot 2024-06-02 123229](https://github.com/imooon/OOP-SVG-Logo-Maker/assets/110244046/b5dadd11-b08d-4bd3-a12a-997c6aa17197)

## Description

#### This Node.js command-line application, the SVG Logo Maker, empowers users to create customized logos effortlessly. It features a selection of Triangle, Circle, and Square shapes, with a parent Shape class for shared functionality. Users choose colors and input text, generating SVG logos saved as .svg files for versatile usage.

## Implementation:

#### Implemented in Node.js, the SVG Logo Maker employs readline for user input and Jest for shape class testing. By offering a simple yet powerful tool for logo creation, it enables users to unleash their creativity in branding, marketing, or personal projects, simplifying the logo design process into a streamlined command-line experience.

## User Story

#### AS a freelance web developer
#### I WANT to generate a simple logo for my projects
#### SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

#### GIVEN a command-line application that accepts user input
#### WHEN I am prompted for text
#### THEN I can enter up to three characters
#### WHEN I am prompted for the text color
#### THEN I can enter a color keyword (OR a hexadecimal number)
#### WHEN I am prompted for a shape
#### THEN I am presented with a list of shapes to choose from: circle, triangle, and square
#### WHEN I am prompted for the shape's color
#### THEN I can enter a color keyword (OR a hexadecimal number)
#### WHEN I have entered input for all the prompts
#### THEN an SVG file is created named `logo.svg`
#### AND the output text "Generated logo.svg" is printed in the command line
#### WHEN I open the `logo.svg` file in a browser
#### THEN I am shown a 300x200 pixel image that matches the criteria I entered
