function Volume(radius=null, height=null) {
    this.radius = radius;
    this.height = height;
}

const Cylinder = new Volume(radius=2,height=2)
Cylinder.getVolume = function () {
    return this.height * Math.PI * Math.pow(this.radius, 2);
};

const Sphere = new Volume(radius=2)
Sphere.getVolume = function () {
    return (4/3) * Math.PI * Math.pow(this.radius, 3);
};

const Cone = new Volume(radius=2, height=2)
Cone.getVolume = function () {
    return Math.PI * Math.pow(this.radius, 2) * (this.height/3);
};

console.log('Cylinder =', Cylinder.getVolume().toFixed(4));
console.log('Sphere =', Sphere.getVolume().toFixed(4));
console.log('Cone =', Cone.getVolume().toFixed(4));


