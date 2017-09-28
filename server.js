const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 7788;

app.prepare().then(_ => {
	const server = express();
  // guarda el token en una cookie
  server.use((req,res,next)=>{
    if(req.query.token){
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"></script>
          <script>
            Cookies.set('token', '${req.query.token}');
            setTimeout(function(){
              location.href = location.href.replace(location.search,'');
            },300);
          </script>
        </head>
        <body>
          <h1>
            ... inform the googles
          </h1>
        </body>
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
