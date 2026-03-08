import * as cheerio from "cheerio";

async function scrapeHero(heroId: string) {
  try {
    const res = await fetch("https://counterpickgg.com/heroes/" + heroId);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    console.log("Hero:", heroId);
    $("div.mb-8").each((i, el) => {
      const title = $(el).find("h2").text();
      console.log("Found title:", title);
    });
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("illari");
