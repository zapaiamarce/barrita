const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();
const cookie = require('cookie');

const PORT = process.env.PORT || 7788;

app.prepare().then(_ => {
	const server = express();
  // guarda el token en una cookie
  server.use((req,res,next)=>{
    if(req.query.token){
      var cookies = cookie.parse(req.headers.cookie || '');

      res.setHeader('Set-Cookie', cookie.serialize('token', String(req.query.token), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 // 1 week
      }));
      res.send(`
        <html>
          <script>location.href = location.href.replace(location.search,'')</script>
        </html>
      `)
    }else{
      next();
    }
  })

	// serve service worker
	server.get('/sw.js', (req, res) =>
		res.sendFile(path.resolve('./.next/sw.js'))
	);

	server.get('*', (req, res) => handle(req, res));

	server.listen(PORT, err => {
		if (err) throw err;

		console.log(`> App running on port ${PORT}`);
	});
});
