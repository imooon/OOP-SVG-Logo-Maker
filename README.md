# Object-oriented Programming Challenge: SVG Logo Maker

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