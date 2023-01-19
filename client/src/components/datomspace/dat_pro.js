const Dat = require('@peopledata/dat')

const beam = new Dat('neznr3z3j44l7q7sgynbzpdrdlpausurbpcmqvwupmuoidolbopa')

process.stdin.pipe(Dat).pipe(process.stdout)

