/**
 * @param word string
 * @returns {string} Capitalized string
 * @example
 * 'kiGALi'; // => Kigali
 */
export function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * @param name string
 * @returns {string} normalized input
 * @example
 * 'kiGALi'; // => Kigali
 * 'RANGO a'; // => Rango A
 */
export function format_input(name: string): string {
	if (!name) return "";

	const words = name.split(" ");
	if (words.length === 1) {
		return capitalize(name);
	} else if (words.length === 2) {
		return `${capitalize(words[0])} ${words[1].toUpperCase()}`;
	} else {
		return name; // No formatting for more than two words
	}
}
