import * as cheerio from 'cheerio';

async function scrapeHero(heroId: string) {
  const res = await fetch(`https://counterpickgg.com/heroes/${heroId}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  console.log(`Hero: ${heroId}`);
  $('div.mb-8').each((i, el) => {
    const title = $(el).find('h2').text();
    if (title.includes('Strong Against') || title.includes('Weak Against') || title.includes('Best With') || title.includes('Worst Against')) {
      console.log(`\n--- ${title} ---`);
      $(el).find('a').each((j, a) => {
        const href = $(a).attr('href');
        if (href && href.startsWith('/heroes/')) {
          const name = $(a).find('.font-medium').text().trim();
          const score = $(a).find('.font-semibold').text().trim();
          console.log(`${href.replace('/heroes/', '')}: ${name} (${score})`);
        }
      });
    }
  });
}

scrapeHero('illari').catch(console.error);
