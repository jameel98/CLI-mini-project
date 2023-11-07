import axios from "axios";

export function isPalindrome(str: string): boolean {
  // Function to check if a string is a palindrome
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters and make it lowercase
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
export function isLower(str: string): boolean {
  return /^[a-z]+$/.test(str);
}

export function isArmstrongNumber(input: string): boolean {
  const num = parseInt(input);
  if (isNaN(num) || num < 0) {
    return false; // Invalid input or negative number cannot be an Armstrong number
  }

  const numStr = num.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return num === sum;
}

export function isDigits(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

export async function getNationalityProbability(
  firstName: string
): Promise<void> {
  try {
    // Fetch nationality data from Nationalize API
    const response = await axios.get(
      `https://api.nationalize.io?name=${firstName}`
    );
    const data = response.data;

    // Check if the API returned a result
    if (data.country.length === 0) {
      console.log(`No nationality data found for "${firstName}"`);
      return;
    }

    // Get the most probable nationality
    const mostProbableNationality = data.country[0];
    const countryCode = mostProbableNationality.country_id;

    // Fetch country name from the provided JSON file
    const countryDataResponse = await axios.get(
      "https://elitenight-lauraatlas.codio.io/.guides/data/countryISO2Name.json"
    );
    const countryData = countryDataResponse.data;

    // Find the country name based on the country code
    const countryName = countryData[countryCode] || "Unknown";

    // Get the probability percentage
    const probabilityPercentage = (
      mostProbableNationality.probability * 100
    ).toFixed(1);

    // Print the result
    console.log(`${countryName} ${probabilityPercentage}%`);
  } catch (error) {
    console.error("Error:", error);
  }
}
