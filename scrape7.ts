import * as cheerio from "cheerio";

async function scrapeHero(heroId: string) {
  try {
    console.log("cheerio type:", typeof cheerio);
    console.log("cheerio.load type:", typeof cheerio.load);
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("illari");
