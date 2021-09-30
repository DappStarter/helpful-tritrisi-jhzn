require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth spike essay inner nation fresh spoil'; 
let testAccounts = [
"0x5379c2945621dd94f5ace07fcb9fdd8c532a7d76851dee77fc2a4c263ebb8bd3",
"0x30edf57acdf0b4812b31546f03e6424d694f86bf7a224ca4375dd48144e2a165",
"0x4720f97be5b440fc7dd99c5d8ba75b36b9c00bca1138c75f66dddc26de9ed3c8",
"0xe769724c55c5427f0453bca6d439b290ad26fe1bc1ac6f34a7f852d47cf6d70f",
"0x176b499dcc98e9daa092e1338ebe55b02bc0045d433111c4f7911cb281e20cb5",
"0x9d8ede1d0111cd973f7423ea5693606ff0f922e6d93655b536e90d3dcc2d7352",
"0xe70eb2de2cdeaf2d2a71c417364c69429d1e2d865f17b73c87f1aa377566b8a2",
"0xc2b633ba1a1314a636a21aab1f9e5e484142b5c31770213f271f23e0e4435e8c",
"0xf921ab8a4ab3dffd9da334615ee5d567322e275596dbcf9c794ec4a0673880f4",
"0x43467b34e9b39ff7c7aae2c1a4983aa63630aae82c183d0bcb16ad2e7a68b7c5"
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
            version: '^0.8.0'
        }
    }
};

