export const log = (message, endWithNewLine = true) => endWithNewLine
	? console.log(message)
	: process.stdout.write(message);

export const printHeader = () => {
	log(`#${'-'.repeat(45)}#`);
	log(`|${' '.repeat(45)}|`);
	log('|    Welcome to the Number Guessing Game!     |');
	log('| I\'m thinking of a number between 1 and 100. |');
	log(`|${' '.repeat(45)}|`);
	log(`#${'-'.repeat(45)}#`);
};