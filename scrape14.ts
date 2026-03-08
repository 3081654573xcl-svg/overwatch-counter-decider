
async function scrapeHero(heroId: string) {
  try {
    const res = await fetch("https://counterpickgg.com/heroes/" + heroId);
    const html = await res.text();
    
    const matches = [...html.matchAll(/self\.__next_f\.push\(\[1,\"(.*?)\"\]\)/g)];
    for (const match of matches) {
      const data = match[1];
      if (data.includes("counteredBy")) {
        // just look for arrays of objects with rating
        const regex = /\"([a-zA-Z]+)\":\[\{\"counterHeroId\":/g;
        let m;
        while ((m = regex.exec(data)) !== null) {
          console.log("Found array:", m[1]);
        }
      }
    }
  } catch (e) {
    console.error("Error:", e);
  }
}

scrapeHero("illari");
