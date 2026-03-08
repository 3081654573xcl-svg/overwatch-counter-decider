
async function scrapeHero(heroId: string) {
  try {
    const res = await fetch("https://counterpickgg.com/heroes/" + heroId);
    const html = await res.text();
    
    const matches = [...html.matchAll(/self\.__next_f\.push\(\[1,\"(.*?)\"\]\)/g)];
    for (const match of matches) {
      const data = match[1];
      if (data.includes("countersFor")) {
        const idx = data.indexOf("countersFor");
        console.log(data.substring(idx - 20, idx + 500));
      }
    }
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("illari");
