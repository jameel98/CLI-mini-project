"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNationalityProbability = exports.isDigits = exports.isArmstrongNumber = exports.isLower = exports.isPalindrome = void 0;
const axios_1 = __importDefault(require("axios"));
function isPalindrome(str) {
    // Function to check if a string is a palindrome
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters and make it lowercase
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
exports.isPalindrome = isPalindrome;
function isLower(str) {
    return /^[a-z]+$/.test(str);
}
exports.isLower = isLower;
function isArmstrongNumber(input) {
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
exports.isArmstrongNumber = isArmstrongNumber;
function isDigits(str) {
    return /^[0-9]+$/.test(str);
}
exports.isDigits = isDigits;
function getNationalityProbability(firstName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch nationality data from Nationalize API
            const response = yield axios_1.default.get(`https://api.nationalize.io?name=${firstName}`);
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
            const countryDataResponse = yield axios_1.default.get("https://elitenight-lauraatlas.codio.io/.guides/data/countryISO2Name.json");
            const countryData = countryDataResponse.data;
            // Find the country name based on the country code
            const countryName = countryData[countryCode] || "Unknown";
            // Get the probability percentage
            const probabilityPercentage = (mostProbableNationality.probability * 100).toFixed(1);
            // Print the result
            console.log(`${countryName} ${probabilityPercentage}%`);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
exports.getNationalityProbability = getNationalityProbability;
