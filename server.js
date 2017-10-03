const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
const fs = require('fs');

// Twilio Credentials
var accountSid = 'ACCOUNTSID_HERE';
var authToken = 'AUTH_TOKEN_HERE';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "<YOUR_PHONE_NUMBER_HERE>",
    from: "TWILIO_PHONE_NUMBER_HERE",
    body: "Hello Jeron, please indicate your vote for the 2020 presidential election",
}, function(err, message) {
    console.log(message.sid);
});


app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
<<<<<<< HEAD
  var str1 = 'Your vote has been recorded. Your country thanks you for voting! Your block is: ';
  var str2 = tx[Math.floor(Math.random() * 100)];
  fs.writeFile('html/message.txt', str2, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
=======
  var str1 = 'Your vote has been recorded. Your country thanks you for voting! Your transaction ID is: ';
  var str2 = potentials[Math.floor(Math.random() * 100)];
  fs.writeFile('message.txt', str2, (err) => {
  if (err) throw err;
    console.log('The file has been saved!');
  });
>>>>>>> 71aacd0a1387beb9f91ac4f56f8e73ab7f7b7d7e
  var banana = str1.concat(str2);
  twiml.message(banana);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

<<<<<<< HEAD
var tx = [
  "0d75273fbae32797590a577acfdaf8fe022b12a8abf4a3549cc9a208cbc99d42",
  "46ffad093e5604c13e55675e5f89eb575769b3ffa664e041d20bf9630940d546",
  "6cdbc190498ce4594c6946010edb21197a02b0004174b44e23e71439a4203d0f",
  "1865459e3632fcce0bb3a71d35f28bb7611a9796f26c106ba80311f0957e7af8",
  "32ffd144c110853ed355613700db532db56b4cfbe23fe17f212f3405dc758d8c",
  "4ed07e14dd09bdad2f86cf2e640361822edc1b8b6bf47c15f61bc50af700fac3",
  "6b5a765ec8bb6122e1bd5cb33e277c216c3af76fff75fe6854999328389842c9",
  "0393b26556ce946fe5cbc28dd9ac98b67cd076102a2bbc3ebfbbfd5925b14935",
  "42332bd6f5354af9e7a8cb8490bab7bda7a807c4b883a9c5be2215496b6105a7",
  "70dcaf447ad45d2b4a2419930f121dd8fb23b95f82a100412dfb62eb451456f6",
  "127e8fd2a2b05bab153ea2c72a395f429fcc6ac1fb54876e2ae81efd0038f4d0",
  "2e0af9a8db6c9b64062ec3d4555e73d1e329fe00f2e64714a5a3399768c40ccd",
  "2fdda297dfc2e92d5116048ae0d8ad607fd9437463e04c2d734c9fb5e8669c11",
  "21572e72a081f1eedf7c2f2d73ccc1752f7a8b800f3ba5929ea8c25b5611242b",
  "6921b02e21e492207d2e97ee315a6cd4512a50819ca4d10aea05512057c148ab",
  "6a1114978a3ac96fde236def400405896267f8a43ade3136f181c470248cc2b2",
  "112bef4560e093f7d8f134e3ed87e246b435318c3ec484918f067499f3e1a098",
  "6caf70e4074538908d48da77ae42f5bc5e6a16805e6f328134ec09f51efe3c85",
  "3dacf412e5b96e1b0c13dd1fd439593289deb2cb0a90ae49842554bbc44375c3",
  "220ef1a19095eec5e357e4c29bd67c2ff965bea739307094212ad6dd4c51120e",
  "76ed1eb4f75181dbeadf12094a15354cfc4ef98eeacc5cad4c29c0624166b932",
  "684e9df52ba4586545920b38bb8cb0a39fd79cf6e90879d629d0038128bcc2d9",
  "3a3be7bd0c4ceeb059f70e02f6f054becaec2733a8a69f47ae1b3df9657bfdce",
  "626f1565f4fcb5daa21fd2315ba12dcae47f0be5cedf0306c3d87dd988f96c7f",
  "149a06ef696f57a08edd3f8d64519c6a72b19cf7a1292e1f76f39737e45ab016",
  "0320d514f4ce1ea4141dc27e85d0a42f07c515cfb1ecec619d0f31e82cf3fa90",
  "4f7a757e5b914949137b27da996c25f104eb38d99084de0ba31d009586c24d40",
  "04fb62e4551035722431c0b96e04f8678c17a7eac0ce00cc1c2b9c311d6fe7e4",
  "5afe06c86bbe45b85e71a96636eb168c00c328bd0fef6d098a6cfe2b01e56b85",
  "317e841ce6e41b282bbd756c8232054c788aa55fe902b067bdde9825a5e099df",
  "4023a0455950f11deffe4ebac6e894c6068f890bc9fa330014e10372af5e5dd5",
  "26c7f067be12557d17e24aa234123cff76282868d8b2932def5f8d02b654c5ec",
  "7dea28375b09d25cae51904661dae069e92acae70b84ccb9b022ef1cab797dd3",
  "57da7d00a93111938e6ff935f59d0fd391b9f9140cf7f75ca98837799fe63fd9",
  "19e262893849174d3d95c9897162234f5abd9c7ffc59fc86308611cfc1452908",
  "0dc2710c94cac60e73ea7b7d5e8cc7641b7ef6332e81e9bbfb78d3eeb0da2bef",
  "5b1efe2c6f01223c597ba2762d4cb99e1ef8f01015f9e14a073057db6e999996",
  "5f35af23dfd1319a7042004d53a92f5a5045d67ddc5d5b5357bc23be094b049d",
  "0d2b2b9aaa468ce08acdf227a24f55fdbecacd5c9615cb058d03fc13aaa5e169",
  "23e1465a3d0b9e1e9ce09a0c8ee1b06b8f364f695834b198b783726720561e6c",
  "03642e0dcb22a7c734b5e1c8f5b6bf08f4d322db5f368f22a555723509bf4e86",
  "3f681031ee1676b6a3a521ebb203192744631ace287ed93f21d8998566a47563",
  "3b3f4dd8a358a1d13b2b8dbb17d462a5a08aadd60de03f0e20b6fc240c52a5a5",
  "300db0dbcd525aef5c77a20423f549df6a90bf31cb6c2bd1f8f459ed9b458db6",
  "7b782a5ecc6a1003b77d59b0e4df567c2ae70b103ed5d8ecf3a02ec638ff72f5",
  "6767f07330686cd1e7fa9e01324cfbdf86abc21620b9f534d2133ddc42ca0fef",
  "62c443a4b8734cd123d6bb5108555614899528e1e20363737f98361dcdc2aef4",
  "0a707e33501ab9b49a87aa4986f5d446e5891e816431cc23f29eca1ebbcf51c4",
  "4ab0ffa9bf9a4c890955fcfb0f31ab5161d48e0e18d9b81a8e4a94c858d004e8",
  "02c8b1430b2a5ec44b418f5941f1cccd19f67a860f421f6aa6933269469f125a",
  "3f50839c8d915be84dcb686beab2e726496e53c579d3249dd3181ce952df8a93",
  "3f491259e8f8c40aea1fb439d5031d5f2cca9798637caff1f452ecddcd803215",
  "37da87dac34995ae0e1bb0a21be89310d4e97d2738401ca6ae1dc952a832c58d",
  "67e4886d779d8f1c6213e730fc1b996d3995f8f621ac6b76c62039faedda51b7",
  "2bff11f547a15c49d7b1cf9088760917450ef80e37c2f6ee66479ab4fecd0ace",
  "22526077fd19aa3c4cc1babb29e7687b7e62b50808a60fcdf21cd9f900b4e743",
  "07c7daa047a359f9654b3a347930f1ed669da10e80166c7633c2d26cfdf09ebe",
  "653571e0f996517c9416d3217f1aee4aad3174cdf63c6d7cc118c112e826537d",
  "28c1e30a1197989d7ce2a77def0ada80ead20858117dcf0e4e025009bcd96a3b",
  "57e99384b59c6e9142be0ff971d9f66d536c83156018b867e037123f2e86f82b",
  "33667d09b3bfc600d9438bc9063a22f22821fd2bc59ebccdfda9185e81813646",
  "0a93603285251a61d38551f726f20413fcbeea0cce0f4735949f4bcd9460525b",
  "1037713639c80aff837227d761239753c629493b324061219e76f2017d8284e5",
  "5fe228dd985b33cc1d39aa837a43c84bd30dda47cef445a47fb5986e877dfb34",
  "48998c9b4282a04a8df8dd27d75ad43f5920e6146816f78786864ebeb1ce9410",
  "695711ceb7b06807245a8b7b9a248b8acee3ac72ecc1bf9c30818c0448c0a1eb",
  "3a59a064ec50c396e33c2dc54345c41c4c968ef6b903df27c18b72461014e776",
  "17de8f7b2b943071492123663e0cb4e0f9f053de3175339b8b38ab4d18991ad1",
  "05057e43744a745c464c0ddd65a83c3182912a9aa36ecc282a388da5c6ec56f3",
  "38144762e650d651d596729b0dfccbb85325db77faf90cc87c583914225bb266",
  "483d946583037741709ae77b0ab93bfce73dff7c2d43735ce4ae2f9a913d3a20",
  "62f49451cc5bc63844dc55f5d355796597e6aabc70fb4488a42b761522869760",
  "223dca71057965b556bc2f3f0699ab0db34812611f29cddc794f7d9afabb2259",
  "33da10a419daf569398bd0440eb678d863acd4d893343074e5961b81d7bdc513",
  "4eb868608e13de2f3b66a7b55fef6ed7bbfa79775c1efc23ef75de2db3ac8b86",
  "524f4f39d351abbf9b6a2164587956e4e8cac05c7715d5a254aeb16b336af8ae",
  "5ffb15a13910f7d2ff8c5474ef00e0c961b00b326f26abe0aa61bd8ebb4a9622",
  "07801d8ba430caa84174d11e5513bb55b17b667e3a0e4a90c07db7a2dac63b7f",
  "01cfb5f2fbaad0c3db1faaef97631b98876c6f5537547409752f5351ef11a91b",
  "1e7849cb117341cb375fb84cda6b76203d0371cf41186ef89bd9e29e29ba91a3",
  "279a2663639faaae3c775fd8256b75d52dc724a9903399e0f33a4f086fa8dda2",
  "6f413d586596defeab9714c5a0eb25a0343c2560773e68b330e3c19a726f3545",
  "5b127cf6e48b505fe3deec95fc82fceed9d64af33044e80b95ca53f6954c9980",
  "15970c5a22d262abccdbe686920dbc29b80b3a9df631ae078213d6a30bd23e47",
  "6e3a27aa4940b2922da847f6e85b8b440d482752188807f96cc6229d50e7bc33",
  "13d0bc01d2b25ec9dfafc71d0b2411645aa3f49b7bf30df273b0d6c9987f7f5d",
  "74c5a47b74e9553b615c8cdf27aea6d975bddd7d926172014dc5addc90375595",
  "5d6f75f6a7948203683478866797d5e13822c3c59ed3542af08e85df78a29bcc",
  "67c67056581c1601c5a73857a8f97232906feb1ab1059579f9910d88bca46a49",
  "154812eaa05980f0a4a28d22c0ecbd27130f368e66177093f83db4ae4b444884",
  "2a927b7c174dcf96b35e8b56cf375354032ecfa9ab3dad2fbfe3b8738cd28b30",
  "20a037dbb9884933d7165fe4ee426bbce110a2355e58b4d72e30b92f8cdfb037",
  "5c2bcf4c6f7e29d26ea0a69c742bcb54fdea9698b14c48f0a20d5b1eb844d8d9",
  "22e9a033deced58a7e81544f0f5ecae6e6c397e37a54bc4b6e5a1502976bd5da",
  "551af0e9ed79d89d183a544f5f3c1b42a08954eccb700743939886d110168322",
  "10bbe4ce5e282b77d88627b5c7ff9c0b523eee5180cfe626e1acc0874d7524b9",
  "7ef6383b431ba39612f29d0334f076351e098aff4b42859058ccc5e87cab7336",
  "1f0b43ba5d1bff31ac5894ff5c0fbe146304b2b06e85e67bfd41911bc2e9e9ef",
  "2f9fedd5d38e7d54fab98b6ceb88480eab417dc848ae070fa187059c185c0846",
  "156e760d0f6e3c060156cfddbc116e98210f14c4f50c9ae2b1f3f3d2d35fa082"
=======
var potentials = [
  "2df4ad95a559ccd9da28fef9daea2b5e8f28c263736f4e38dcba0ee5464045c5",
  "1db68f628f9dd0914a8e840b3c33de216c0042dd0b0878663eaf675b8baa1bcc",
  "1cd8fb487294ac4cdbff38d78f4d57e0b17221dba0f3daecb21a6ee8f1e3cc1b",
  "4d640aa70004384189f129933c748f229f1c62570dfdd8cc534b889f25fa4f21",
  "1a4f3b2729845d38a51736da03defeb8f9392bc44d7a7558ce076387a85bb412",
  "299b4588ff356a50fb24a1f695a07dc5e32d49c80d939620e790a5fa1e97ae67",
  "339e850e43b15a4505fac19846772d2951f301cf1f5e53f50da1150f66e74ea0",
  "4fc12e6194438a0258db2a6e607bc7be08ca14a02af16473c56c935f5a7ac057",
  "2fb27c3ec77e7b4871186c8c5d1aab9c0387aa8a7156b43d4c8bf630b70d9571",
  "18106af18b82e0fb20dbc97b150e8eac9509161e485587190b599cb9cf811ff3",
  "4a112062d2245f4d47c14a8f2508278ebc464d92e9e7fa48cf48fa6bdca78442",
  "23a62019c523e34697d6e06c897741ffdb9acbbd978834298017aa12f2d7c65d",
  "7b9a420bf4f7d6e2f05580b10a76f359b1fc76c895fea500f2b8545d4acba0d9",
  "5059f33b7dec9ed1019dbb52091409e18d9c2731363277f5135d52168708305f",
  "5ad48853793730ccae6f4dfc756a2f253dde5a5f8108545415a1762279e4a903",
  "5624486fe5dbf64a196d20b84937e5c7c779febf20638e12c462aad6254250a0",
  "43c4bcacd5672e44adb8e341ed1aa041b647fe180d18cc23077399982340f52f",
  "1abf06a33dfc2a2611458f652b09eb04093d7115200da27ce9db64b89b000c69",
  "404cf9b5f7b7d2be5e1a02d1cad0717ef3ca81cfd0d3a9646b6e9638e14038aa",
  "3c0fd50ac722df692a5db6b7b6703d95ce4c6e241daa4df24ab9727a1e916ed9",
  "01c9e9aa99753f70a54366f5021a84889465433c7ab5a73d4351fb7942cd3eb0",
  "7713a2f531408bf27d74e1124377dd542d248bec195ea2d0b975d7fe164503c8",
  "414d08626c6ffee20562956086ab562880030b53d767dd859d4c1d4b1dc915d3",
  "7fadd999cc99e817362cc40202136eb68ea31758dfe669ad2417c16d758eca56",
  "1856014b1885e1b32429b0a390d5e891e248ca62817362937b2ce553f63650a4",
  "40ec7b1fefe973c4cecb626891a908f6e2d7075c61151aee359c65912223c379",
  "376fa6075666c34cdea8aaccb4328f0ffb3aae4a4492a0dd1edd1b99b5848892",
  "7287572239f3abd36ab27f6089c8c69a6a8fd2fdf701c5b32ce399067283b18b",
  "60bd17a9855eaf6f8bfc34aeff9b69803ecdedaa3a2e38dbdb08851afe6b18b7",
  "422c71fe0ab774200e9eee1f60196e877ed3edb03cfca7fdb4e1f94865365e96",
  "3dd0df55eaccf58982f1d31b4737af0989773c45bd086b77742ca849cb7fa67c",
  "7b4f35eff3e4820387ec60e32d2a549c30e5bf44fa7883af831529ac1e82a3b4",
  "00c20c183423e38f61eb3e5a56e4c2f0b91ab0102a06ceb594a5f9c63084c331",
  "43bbd93f36ed77a470ca96336f0186bf9f689bd289ece99bf2bf3d9591a068dc",
  "0f05bdabc6a74cd97823aa6d48dfbac58e209ba916c2b2b446a665d0c67f8a0a",
  "3fc4fe30981a0889f38a7b57a87d31d081cfcde2b8106af226976a4dac361277",
  "59948c90df57cc311ac49a0681c658103ec55927dbff9bcb12c6cd6aac0bc2f1",
  "4e4536c654097c7b0ae26dfb31c7c9cdc2e3a81ec0f0f3c72f8a11d4a8318ed6",
  "19045932f435506a2e108e0bfb72f88d8f11ce558cdfc5a459dc9dd9f76e4218",
  "031d3d1a8efc1382d6eb80e322ed4f1fe70c2047d354e45bdda50412db3f4990",
  "4db4e4c9e3474692c1ae3e6faef1312c0e80d548145ba3b63adfa48c8b0a927d",
  "3d56babc4a0c64c4c3e407d1f27d91736081087856a79b70fce795ba858c6748",
  "744c3f1c48e724c89a86a3be3223a66bcbb2c67f77dfe2d8ea018d3bfa5c8815",
  "2b6f074a0ff77f8470a2d51c4af0d6a6e4e9e3215e6abbef2c99a0b2dd5b850f",
  "14997e0bad9c0bd5d94cc0da397d91f526be482b4d44eec46f873ddb3402393b",
  "674b5205acfa4d9f6cc492a325b98b96231308827dc8529e53418d92b3bdcda7",
  "5c8d4189ff09dbdf632658acf90af07c6cc43bc25b0cee0f00a0055cf1925d2e",
  "0e0e574c49389fc1b7f1f6959af6640c78ee00bcd806fb695df11596c632643d",
  "474c6366e9be6c8b593d49114da65ff369211d4fcb088602abb2618f584575c3",
  "62325cc64d6e0e946c226b34c3a33cf2b05ed8dd61f5526a6e4646cba934cf94",
  "5953707f847a7b1c5182e8a5c456ed42f834833bc2d83e46c81d39eb4e93c1c8",
  "4c799511b652f093b83e901697da11d10e9c1f2e7c69bea6cb70f61998386bb7",
  "529acea758577aa4eb2830f03a2bf861cc53a1f1897d330d9eeeffc010d6e3a6",
  "4390f83d818382d15f32b5790a7ae20fede2b72766efe04adb9166bf922c7c28",
  "1e3d46ae81d1a20b88c20a41fcf5d032283b0fef6a0d29a35ce66fcd8b6048fc",
  "3fe35cdba640651b5a0c20e82ce8668ac860a25072ffa8a1ddd1b832667667cc",
  "3fb21caf3f233f5bf4fa4eb255c5cf5bcc676e16df41dc2f8521e8eedf6b8463",
  "07ccf5a2d6d2abb3fb9c2ab22c433e861247cc02ac4cb995e0f84aee031a4265",
  "36cd6bd07f3a269cdd1ffccb91d8d969bb8d7fe228762d127abbd5da5ab17e92",
  "16970086eaeea30e48522d079a03df502e6cf18a76b9c2f9a2fab1d5af24bc88",
  "213eca71102546675654d1404f985bf7e11654d38645de3bba24dd0006202b30",
  "071bf90169464b1cd7660c5904157abbaf06864a2f73ea18e9df433f31648e7d",
  "4f07fb6f34225cf88605d83b81821d80802008c067bf58bde2689b28f8f97e7c",
  "4adfd9007b8fae6805e4b78acd64312ad68d38338b878c87fabfcf1200e8818a",
  "41a2657c67ec3bce70817571414ad8d8ca071d8d3f8e827261f70c5b66d27ecf",
  "6939419d971dc358a4ddaa09306798176b059c4fe0ba655fe6f1159daba5da59",
  "11252b7980e185bfd500d0e2c1ed5607ae27024de3aaaf2144e1995fcc378024",
  "3d80afc7591eee2cb5c9336d0a15812d1ebc475df8dcb6df9ffda3346228f96d",
  "68fb9da0acc60c24115939a98585d1a9f23ef3aca32f79d4f9418cbb07bfb936",
  "62d23a148e9f95f018acaed440999e0a3226c670010d2e80d67c673c85508972",
  "1553725940a89ced84bb643eeff9f202481b08e9b59428dab85ab296d435faff",
  "4b26af5c16590b42bd61bc488b386c747b240bdeaf021d5f7fc278d714ce27b4",
  "085b82ee58280d6b39628b42cc1667390a587dca081c80c51a26f83097478df6",
  "05bf118ae377ae9ea09a8a34732e8e165d269c854c5e8469c097836aead900a7",
  "458f8db84d64e54de04d27a0e2abce38eb72cbc91d62837c65d310c31fb424f7",
  "08896a22ec521cc2df146f7c46d9a85046b54bf49a3084120132f002ee138476",
  "4884f12e7482c88d0c12530098d8db13bf55d0024af8f421ae31d44429396eb8",
  "1473b591aa539e603f9581a01c3401502650ad9b0a0eb3fefd217d28ae621fc7",
  "56cb3237f274af37e5340657d463b111dc527dcc95a0132de35b464a83224572",
  "36ff79e2709b7269f816779db5a3a373fca63f51d45bd311158e74c181ceb3d7",
  "4474da68d73505e67c6f6880f8a55b5c345f99cb96cb859c0cc88d2855bbf78d",
  "527e81620b4369206762fb05b3823c81e95a02b125dcaa867f785c085a8f8231",
  "4fded23fedc1861beb655c78c0e7a93d2c7c56eea9736a452e1010282d359813",
  "12bd37791e168634d4fb498e1373658b8c1f588bbf2691a874fd62ae5a386d08",
  "4d4d9c18cf05cfe0e3225fb436665ecef939167f43ad9a5d7fe9d6a4dbdfe012",
  "5f3cddcdb080cd363735b80d55166bad0963d865237d02b4c6295f29bf6f7fa9",
  "6bf7b2ed68ed0f803b076c1874f90cf6a1b02d1199c224f1c563e7503e9cfc12",
  "151637bf15cbcbd1fc608a3991c67e49c3648e0a723999049849f05adfdd3bff",
  "3664da2b0876acf005d91de0545f193c3061ba2d62a5484a7771deb5c5868885",
  "5d5e04c3f18da0ee27a0e3f122eb62017cf06428402a619915f2ab8b6c9c1e6f",
  "266190631e937ebc76d6ea2d2424a8e4dcac4b9eaf952e4fa77b7477ed400948",
  "254c77d4c51498bc62c2e7bb1d48b94c4beee4395dd61ff6e9e5093b4cc020fd",
  "300b8771a7719892674fb2fe137a9d2a334b49b8b4b368d5a4a87baf2d67b888",
  "1aaa4b195e9ab391f2733e90c1f28baa33d347af6ce09347982732083eb6d470",
  "320451c5d0ffd22abf78a677ec2b0daceb761f013200a5753b462027588de0d8",
  "6bd8cd081a777d839758318cbee8ecb3761940ca2ab30e26b6fe7a229bc40bf6",
  "7d025327ae43e291381511da677f363e0dfbbb29537b1a2add63a7cca0dcce72",
  "09bbd4a25279f2c5d17f65c81c154c16005152e3641012c531ec87fa8098cb75",
  "655f910fd7097c81903ba074908a8bfbe6d498c6ea68d2fae7532c4083fd1f63",
  "4034986d93001b47599e57f6d70ae97f2ad3cf7c94e95ed227b4a888035ab33a"
>>>>>>> 71aacd0a1387beb9f91ac4f56f8e73ab7f7b7d7e
]
