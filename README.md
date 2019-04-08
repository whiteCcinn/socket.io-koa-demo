# socket.io-koa

Koa implementation socket. IO demo online debugging

## Online Debug

```
Onlinde Debug: http://socket-io-koa-demo.crazylaw.cn
```

## Usage-1

Download the project：

```
git clone https://github.com/whiteCcinn/socket.io-koa-demo.git
```

Execute the following command under the project and directory

```
docker build -t ccinn/socket.io-koa-demo .
```

Wait a minute later

```
docker run --rm --name my-socket.io-koa-demo -p 3000:3000 ccinn/socket.io-koa-demo
```

Open the browser and enter: `localhost:3000`，You will see a simple client page

## Usage-2

> NPM dependencies are already installed locally

Execute the following command under the project and directory

```
docker run --rm --name my-socket.io-koa-demo -v "$(pwd)/src":/www -p 3000:3000 ccinn/socket.io-koa-demo
```

## Kill

If running in the foreground, execute the following command in the new terminal window

```
docker kill my-socket.io-koa-demo
```
