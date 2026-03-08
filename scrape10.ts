
async function scrapeHero(heroId: string) {
  try {
    const res = await fetch("https://counterpickgg.com/heroes/" + heroId);
    const html = await res.text();
    
    const matches = [...html.matchAll(/self\.__next_f\.push\(\[1,\"(.*?)\"\]\)/g)];
    for (const match of matches) {
      const data = match[1];
      if (data.includes("counters")) {
        console.log("Found counters in payload!");
        const idx = data.indexOf("counters");
        console.log(data.substring(idx - 50, idx + 100));
      }
    }
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("illari");
