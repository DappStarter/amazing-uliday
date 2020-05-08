require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note stick minor good armed equal gentle'; 
let testAccounts = [
"0x75ace9b78aaab9727de4ba0f2eeb9e2c37a4e01fd1719c0d6221aba5a594cb76",
"0x1ea835b80414fa210b9973cd30255be59b52844edfc04e8bc45e1a52edddefd6",
"0xd8878da1ce74c47736d7d42e7cf8338739698e19b5eca8aa7534e82b57884750",
"0x9c3c416ab3cc538818e914ca3082ed658510b9feb1ab27239dcc1c5a761df9e8",
"0x2e4b48364db83463c5916a28f1f5f285f46baa3001402d945e1adc07806fcf24",
"0x9888430528be9b1d3097ec8b8349c32e8525aabbfbc40f814f81794a3b81574e",
"0x24bac60f84ffb10a123d3bcad02b6ac0831270ff5a43d703fb87a8e4535988f5",
"0x871b94ec53696f73c8b78e87789b133b14229052bff2b4fb01a7f61fa105845a",
"0x91a35764f8c665ddcff7e3504301bcfded1c48a3b19a9b43db0799acb5cd41fb",
"0x294bd562f2ac9295f049cb2ec85e897b03fdfa52d527aa3d39aabaf7b6a84874"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
