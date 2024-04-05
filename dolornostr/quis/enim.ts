// Define a type for string literals representing programming languages
type LanguageType = 'TypeScript' | 'JavaScript' | 'Python' | 'Java';

// Declare a variable with the type LanguageType
let language: LanguageType = 'TypeScript';

// Function to log the language to the console
function logLanguage(lang: LanguageType): void {
  console.log(`The selected language is: ${lang}`);
}

// Call the function with the 'language' variable
logLanguage(language);
