import * as cheerio from "cheerio";

async function scrapeHero(heroId: string) {
  try {
    const res = await fetch("https://counterpickgg.com/heroes/" + heroId);
    const html = await res.text();
    console.log("HTML length:", html.length);
    console.log(html.substring(0, 100));
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("illari");
