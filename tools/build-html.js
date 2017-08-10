import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console*/
fs.readFile('src/index.html', 'utf-8', (err, markup) => {
  if(err) return console.log(err);

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="style.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf-8', console.log);
});
