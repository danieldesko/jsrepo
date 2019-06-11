function createFullName() {
    this.name = "Petar";
    this.surname = "Ivanov";
}

function getName(){
	createFullName();
}
console.log(getName());