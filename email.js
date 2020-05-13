// assuming the id of the 100 users are 1 - 100
const numberOfUsers = 100;
const oddArray = [];
const evenArray = [];

const sendEmail = () => {
	for (let i = 1; i <= numberOfUsers; i++) {
		if (i % 2 === 0) {
			evenArray.push(i);
		} else {
			oddArray.push(i);
		}
	}
	console.log(oddArray);
	console.log(evenArray);
};

console.log(sendEmail());
