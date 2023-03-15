const k = 3
const machine = new kNear(k)

// training - todo: meerdere voorbeelden voor cats en dogs nodig!

/*
Body length	Height	Weight	Ear length	Label
18	9.2	8.1	2	'cat'
20.1	17	15.5	5	'dog'
17	9.1	9	1.95	'cat'
23.5	20	20	6.2	'dog'
16	9.0	10	2.1	'cat'
21	16.7	16	3.3	'dog'
 */
machine.learn([11, 5, 10], 'cat')

// predicting
let prediction = machine.classify([7, 7, 7])
console.log(`I think it's a ${prediction}`)