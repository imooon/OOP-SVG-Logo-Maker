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
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}"></circle>`; 
    }
}

// Rendering a square SVG element with the specified color
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="200" width="200" fill="${this.color}"></rect>`; 
    }
}

// Rendering a triangle SVG element with the specified color
class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 250,250 50,250" fill="${this.color}"></polygon>`; 
    }
}

// Exporting the Circle, Square, and Triangle classes
module.exports = { Circle, Square, Triangle }; 
