// Initializing the color property of the shape
class Shape {
    constructor() {
        this.color = ''; 
    }

// Setting the color of the shape    
    setColor(color) {
        this.color = color; 
    }
}

// Rendering a circle SVG element with the specified color
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`; 
    }
}

// Rendering a square SVG element with the specified color
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`; 
    }
}

// Rendering a triangle SVG element with the specified color
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`; 
    }
}

// Exporting the Circle, Square, and Triangle classes
module.exports = { Circle, Square, Triangle }; 
