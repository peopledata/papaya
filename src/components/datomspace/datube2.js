const DHT = require('@peopledata/datube')

const node = new DHT()
const key = 'e9e3fff20250a6e147761ae6eed4f7ec62cf16c8384f173f706af9d00028f43e'
const priKey = Buffer.from(key,'hex')

async function main() {

    
    // create a server to listen for secure connections

    const socket = node.connect(key)

    socket.on('open',function() {
    console.log('connected!')
    }).catch(function() {
        console.log('Promise Rejected!');
    })

    process.on('UnhandledRejection',(reason,p) => {
        console.log('Unhandled Rejection at',p, 'reason:', reason);
    })

    //process.stdin.pipe(socket).pipe(process.stdout)



}

main()

