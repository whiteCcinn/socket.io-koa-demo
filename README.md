# socket.io-koa

Koa implementation socket. IO demo online debugging

## Usage

Download the project：

```
git clone https://github.com/whiteCcinn/socket.io-koa-demo.git
```

Execute the following command under the project and directory

```
docker build -t whiteCcinn/socket.io-koa-demo .
```

Wait a minute later

```
docker run --rm -v "$PWD":/www -p 3000:3000 whiteCcinn/socket.io-koa-demo
```

Open the browser and enter: `localhost:3000`，You will see a simple client page
