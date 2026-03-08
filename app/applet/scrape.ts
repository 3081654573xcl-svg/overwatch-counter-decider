import * as cheerio from 'cheerio';

async function scrapeHero(heroId: string) {
  try {
    console.log('Before fetch');
    const res = await fetch(`https://counterpickgg.com/heroes/${heroId}`);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    console.log(`Hero: ${heroId}`);
    console.log('Status:', res.status);
    console.log('HTML length:', html.length);
    console.log('Done');
  } catch (e) {
    console.error('Error:', e);
  }
}

await scrapeHero('illari');
