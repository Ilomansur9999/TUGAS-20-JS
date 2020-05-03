function mat(){
	var isi = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";
	console.log(isi.match("are"));
	console.log(isi.match('word'));

}

mat();



// C:\Users\USER\Documents\JS\javascript>node tugas20.js
// [
//   'are',
//   index: 6,
//   input: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//   groups: undefined
// ]
// [
//   'word',
//   index: 154,
//   input: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//   groups: undefined
// ]

// C:\Users\USER\Documents\JS\javascript>