//Importar as dependências
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Definir a rede
const network = bitcoin.networks.testnet

//Derivação de wallet HD
const path = `m/49'/1'/0'/0`

//Criar o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//Criar a raiz da wallet HD
let root = bip32.fromSeed(seed, network)

//Criar uma conta com as chaves pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed: ", mnemonic)