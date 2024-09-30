import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import { log, printHeader } from './utils.js';
import {
	LEVELS_OF_DIFFICULTY,
	LEVELS_OF_DIFFICULTY_ATTEMPTS,
	MIN_RANDOM,
	MAX_RANDOM,
} from './constants.js';

printHeader();

const rl = readline.createInterface({ input: stdin, output: stdout });

const displayDifficulty = Object
	.entries(LEVELS_OF_DIFFICULTY)
	.map(([difficulty, title], i) => (
		`\n${i + 1}. ${title} (${LEVELS_OF_DIFFICULTY_ATTEMPTS[difficulty]} chances)`
	));
const difficult = await rl.question(`\nPlease select the difficulty level:${displayDifficulty}\n\nEnter your choice: `);
const difficultyAttempts = LEVELS_OF_DIFFICULTY_ATTEMPTS[difficult];
let attemptsLeft = difficultyAttempts;

// Generaating random namber from 1 to 100
const randomNumber = Math.round(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM);

while (attemptsLeft > 0) {
	const gessNumber = parseInt(await rl.question(`\nEnter your guess: `));
	attemptsLeft--;

	if (gessNumber === randomNumber) {
		log(`\n🚀 Congratulations! You guessed the correct number in ${difficultyAttempts - attemptsLeft} attempt(s).`);
		rl.close();
		process.exit(0);
	}
	
	log(`\nIncorrect! The number is ${randomNumber > gessNumber ? 'greater' : 'less'} than ${gessNumber}.\nLeft ${attemptsLeft} attempt(s).`);
}

log(`\n💀 Game over. The number was ${randomNumber}. Better luck next time!`);
rl.close();