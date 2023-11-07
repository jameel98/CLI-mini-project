import axios from "axios";
import { Command } from "./command";

export class nationalize extends Command {
  name = "NATIONALIZE";

  async execute(firstName: string): Promise<void> {
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

      console.log(`${countryName} ${probabilityPercentage}%`);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
