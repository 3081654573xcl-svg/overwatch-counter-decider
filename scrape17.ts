
async function scrapeHero(heroId: string) {
  try {
    const res = await fetch("https://counterpickgg.com/heroes/" + heroId);
    const html = await res.text();
    
    const matches = [...html.matchAll(/self\.__next_f\.push\(\[1,\"(.*?)\"\]\)/g)];
    for (const match of matches) {
      const data = match[1];
      const idx = data.indexOf("counterHeroId");
      if (idx !== -1) {
        console.log("Found counterHeroId at", idx);
        console.log(data.substring(idx - 50, idx + 50));
      }
    }
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("pharah");
