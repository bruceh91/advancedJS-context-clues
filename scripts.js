var FRIEND_NAME = ["Andy", "Sari", "Ernest", "Travis", "Dante"];
var WEAPON_NAME = ["axe", "spoon", "look", "chair", "car", "can", "bottle", "knife", "cup", "doll", "wheel", "fire", "gun", "arrow", "bow", "x-rays", "rock", "chainsaw", "hammer", "tree" ];
var LOCATION_NAME = ["bedroom", "basement", "kitchen", "living room", "dinning room", "garage", "yard", "hall", "pool", "bathroom"];
var accArray = []; // array of random combinations


showAcc();

function showAcc() { // makes all of the h3s on the screen and gives each a unique id
    for (var i = 1; i <= 101; i++) {
        $('body').append('<h3 id="' + i + '">Accusation ' + i + '</h3>');
        makeAcc(i);
        alertAcc(i);
    }

}

function makeAcc(i) { // generates array of random combos
    var alertNum = i-1
    var friendNum = generateRandom(FRIEND_NAME.length);
    var weaponNum = generateRandom(WEAPON_NAME.length);
    var locationNum = generateRandom(LOCATION_NAME.length);
    accArray.push('Accusation ' + alertNum + ': I accuse ' + FRIEND_NAME[friendNum] + ', with the ' + WEAPON_NAME[weaponNum] + ' in the ' + LOCATION_NAME[locationNum] + '!');
}

function alertAcc(i) {  // alerts random combo corresponding to id number when clicked
    $('#'+i).click(function(){
        alert (accArray[i])
    })
$('#101').hide();
}

function generateRandom (x){  // random number generation number
    return Math.floor(Math.random() * x);
}

console.log(WEAPON_NAME);

