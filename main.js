const crypto = require('./crypto')
console.log(crypto)

const PrivateKey = Buffer.from('bb571b9b871ee63644d688885fb3e9ef7df791c364e39384ad5e7aae2e85753c', 'hex')

const logonTimestamp = '1234554321123'
const serializedMessage = Buffer.from(logonTimestamp, 'hex')

const signature = crypto.ecSignData(serializedMessage, PrivateKey)
console.log(`Signature: ${signature.v} ${signature.r.toString('hex')} ${signature.s.toString('hex')}`)

