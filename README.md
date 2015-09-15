Test task
=========
Simple react app, showing popular instagram posts along with cute comments and likes graph.

To run with development setup (hot-reload server on :8080):

```bash
npm install
npm start
```

To use pre-compiled release code:

```bash
cd build
# port 8080 is important here, it's used in instagram auth redirect url
python -m SimpleHTTPServer 8080
```
