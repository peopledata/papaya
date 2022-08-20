const DHT = require('@peopledata/datube')

const node = DHT.bootstrapper(49737, '118.195.143.126')
const key = '9965b3d0ee27e2ed30f71e695198ff3627cb0eac2dbabe4f4667750a2fdc41fe'

async function main() {
  
// create a server to listen for secure connections

const socket = node.connect(key)

socket.on('open',function() {
 console.log('connected!')
})

//process.stdin.pipe(socket).pipe(process.stdout)



}

main()

