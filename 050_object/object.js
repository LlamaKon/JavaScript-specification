// オブジェクトの定義のみ先に行う方法
const human = {};

// key: name,  value: Mike
human.name = 'Mike';
// key: age, value: 20
human.age = 20;
// オブジェクトを出力
console.log(human);
// humanオブジェクトのキーnameのvalueを出力
console.log(human.name);

// オブジェクトの定義と値の代入を同時に行う方法
const person = {
    name : ['Code', 'Mafia'],
    gender : 'male',
    interests : {sports: 'soccer', music: 'piano'},

    getFullName: function() {
        console.log(this.name[0] + ' ' +  this.name[1]);
    }
};

// personオブジェクトのキーnameのvalueを出力
console.log(person.name);

// personオブジェクトのキーlistのvalueを出力
console.log(person.list);

// personオブジェクトのキーgenderのvalueを出力
console.log(person.gender);

// personオブジェクトのキーinterestsのvalueを出力
console.log(person.interests);

// personオブジェクトのキーinterestsのキーmusicのvalueを出力
console.log(person.interests.music);

// 値を追加することが可能
person.age = 12;
console.log(person.age);
console.log(person);

// personオブジェクトのgetFullNameメソッドを呼び出し
person.getFullName();


