import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(process.argv[2] || '.');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.xml': 'application/xml', '.txt': 'text/plain' };
http.createServer(async (req, res) => {
    try {
        let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        if (pathname.endsWith('/')) pathname += 'index.html';
        const file = resolve(root, '.' + pathname);
        if (!file.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
        const content = await readFile(file);
        res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' }); res.end(content);
    } catch { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Página não encontrada.'); }
}).listen(4173, '0.0.0.0', () => console.log('Portfólio: http://localhost:4173'));
