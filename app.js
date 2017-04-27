//Modules and Ports
let express = require('express'),
	app = express(),
	PORT = 3000;

// Routes & endpoints
app.get('/:operator/:num1?/:num2?', (req,res) => {
	let operator = req.params.operator;
	let num1 = parseInt(req.params.num1);
	let num2 = parseInt(req.params.num2);
	let result;

	// if the first endpoint is ....
	switch(operator) {
		case 'add':
			result = num1 + num2;
			break;
		case 'subtract':
			result = num1 - num2;
			break;
		case 'multiply':
			result = num1 * num2;
			break;
		case 'divide':
			result = num1 / num2;
			break;
	}
		//Response with the result in a string format
		res.send(result.toString());
});

// Listener
let listen = () => {console.log('Listening to Port' , PORT);};
app.listen(PORT,listen);