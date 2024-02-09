function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount(value) {
    try { 
        return parseCount(value);
    } catch (error) {
        return error;
    };
}


class Triangle {
    constructor(aSide, bSide, cSide) {
        if (aSide + bSide < cSide || cSide + bSide < aSide || aSide + cSide < bSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.aSide = aSide;
        this.bSide = bSide;
        this.cSide = cSide;
    }

    get perimeter() {
        return (this.aSide + this.bSide + this.cSide);
    }

    get area() {
        const halfPerimeter = 0.5 * this.perimeter;
        const square = Math.sqrt(halfPerimeter * (halfPerimeter - this.aSide) * (halfPerimeter - this.bSide) * (halfPerimeter - this.cSide));
        return +square.toFixed(3);
    }
}

function getTriangle(aSide, bSide, cSide) {
    try {
        return new Triangle (aSide, bSide, cSide);
    } catch (error) {
        return {
            get perimeter() {
                return  "Ошибка! Треугольник не существует";
            },
            get area() {
                return  "Ошибка! Треугольник не существует";
            }
        }       
    }
}