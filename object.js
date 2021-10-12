const person = {
    name : 'Code Mafia',
    list : ['code', 'mafia'],
    gender : 'male',
    interests : {sports: 'soccer', music: 'piano'},
    getFullName: function() {
        console.log(this.list[0] + this.list[1]);
    }
};

console.log(person.name);
console.log(person.list);
console.log(person.gender);
console.log(person.interests);
console.log(person.interests.music);

person.age = 12;
console.log(person.age);
console.log(person);

person.getFullName();

