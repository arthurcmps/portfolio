import { mkdir, cp, rm, readFile, writeFile } from 'node:fs/promises';
const routes = ['index.html', 'projetos/okan.html', 'projetos/voz-amiga.html', 'projetos/ecommerce.html'];
await rm('dist', {recursive: true, force: true});
await mkdir('dist', {recursive: true});
for (const entry of ['index.html','projetos','css','js','assets','favicon.svg','robots.txt','sitemap.xml']) await cp(entry, `dist/${entry}`, {recursive:true});
await writeFile('dist/.nojekyll','');
const site = process.env.SITE_URL;
if (site) {
 const base = new URL(site.endsWith('/') ? site : site + '/');
 if (!['https:','http:'].includes(base.protocol)) throw new Error('SITE_URL deve usar HTTP ou HTTPS.');
 const esc = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 const urls = routes.map(route => new URL(route === 'index.html' ? '' : route, base).href);
 await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${esc(url)}</loc></url>`).join('')}</urlset>`);
 await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml',base).href}\n`);
 for (const [i, route] of routes.entries()) {
  const path = `dist/${route}`;
  await writeFile(path, (await readFile(path,'utf8')).replace('</head>', `<link rel="canonical" href="${esc(urls[i])}"><meta property="og:url" content="${esc(urls[i])}"></head>`));
 }
} else console.warn('TODO: SITE_URL ausente. Sitemap e canonical aguardam o endereço publicado.');
console.log('Build concluído: dist/');
