// COLOUR NAME ARRAY TO PICK FROM
const colourNames = [
	'Aqua',
	'Aquamarine',
	'Blue',
	'BlueViolet',
	'Brown',
	'BurlyWood',
	'CadetBlue',
	'Chartreuse',
	'Chocolate',
	'Coral',
	'CornflowerBlue',
	'Crimson',
	'Cyan',
	'DarkBlue',
	'DarkCyan',
	'DarkGoldenRod',
	'DarkGreen',
	'DarkMagenta',
	'DarkOliveGreen',
	'DarkOrange',
	'DarkOrchid',
	'DarkRed',
	'DarkSalmon',
	'DarkSlateBlue',
	'DarkTurquoise',
	'DarkViolet',
	'DeepPink',
	'DeepSkyBlue',
	'DodgerBlue',
	'FireBrick',
	'ForestGreen',
	'Fuchsia',
	'Gold',
	'GoldenRod',
	'Green',
	'GreenYellow',
	'HotPink',
	'IndianRed',
	'Indigo',
	'Lavender',
	'LawnGreen',
	'Lime',
	'LimeGreen',
	'Magenta',
	'Maroon',
	'MediumAquaMarine',
	'MediumBlue',
	'MediumOrchid',
	'MediumPurple',
	'MediumSeaGreen',
	'MediumSlateBlue',
	'MediumSpringGreen',
	'MediumTurquoise',
	'MediumVioletRed',
	'MidnightBlue',
	'NavajoWhite',
	'Navy',
	'Olive',
	'OliveDrab',
	'Orange',
	'OrangeRed',
	'Orchid',
	'PaleGreen',
	'PaleTurquoise',
	'PaleVioletRed',
	'PeachPuff',
	'Peru',
	'Pink',
	'Plum',
	'Purple',
	'RebeccaPurple',
	'Red',
	'RosyBrown',
	'RoyalBlue',
	'SaddleBrown',
	'Salmon',
	'SandyBrown',
	'SeaGreen',
	'Sienna',
	'SkyBlue',
	'SlateBlue',
	'SlateGray',
	'SlateGrey',
	'SpringGreen',
	'SteelBlue',
	'Tan',
	'Teal',
	'Thistle',
	'Tomato',
	'Turquoise',
	'Violet',
	'Wheat',
	'Yellow',
];

const container = document.getElementById('container')
const template = document.getElementById('template--js');
const templateContent = template.content;
const root = document.documentElement;


// GENERATE GRID BETWEEN 10 - 200
let cols = randomNumber(10, 200);
let rows = randomNumber(10, 200);
let numberOfDivs = (cols * rows)

function setCSSVars(cols, rows){
    root.style.setProperty('--cols', cols)
    root.style.setProperty('--rows', rows)
}

setCSSVars(cols, rows)

for (let i = 0; i < numberOfDivs; i++) {
    container.appendChild(templateContent.cloneNode(true))
}

let squares = [];

// WAIT UNTIL DOCUMENT HAS LOADED BEFORE COLLECTING SQUARE ELMEENTS

setTimeout(function() {
	console.log('run');
	squares = [...document.getElementsByClassName('square')]
},0);

setTimeout(function(){
    squares.forEach((sq) => {
    sq.style.backgroundColor = randomColour();
})
},0)

// Returns a random positive whole number between two values (min, max)
// Used throughout to select random array elements
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Return random colour name from colourNames array using randomNumber()
function randomColour() {
	return colourNames[randomNumber(0, colourNames.length - 1)];
}

