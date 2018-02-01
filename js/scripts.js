var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCorrected = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textCorrected.slice(0,textCorrected.length/2));