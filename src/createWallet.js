//Importar as dependências
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Definir a rede
const network = bitcoin.networks.testnet

//Derivação de wallet HD
const path = `'m/49'/1'/0'/0`

//Criar o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//Criar a raiz da wallet HD
let root = bip32.fromSeed(seed, network)
