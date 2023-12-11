const productos = [
  /////////CD'S////
  {
    id: 1,
    banda: 'Killswitch Engage',
    genero: ['Metalcore', ' / ', 'Melodic Hardcore'],
    disco: 'The End Of Heartache',
    categoria: "CD",
    precio: 12.199,
    stock: 12,
    tracklist: [
        { nombre: 'A Bid Farewell	', duracion: '3:55' },
        { nombre: 'Take This Oath', duracion: '3:46' },
        { nombre: 'When Darkness Falls', duracion: '3:52' },
        { nombre: 'Rose Of Sharyn', duracion: '3:36' },
        { nombre: 'Inhale', duracion: '1:15' },
        { nombre: 'Breathe Life', duracion: '3:18' },
        { nombre: 'The End Of Heartache', duracion: '4:58' },
        { nombre: 'Declaration', duracion: '3:01' },
        { nombre: 'World Ablaze', duracion: '4:59' },
        { nombre: 'And Embers Rise', duracion: '1:11' },
        { nombre: 'Waste Sacrifice', duracion: '4:18' },
        { nombre: 'Hope Is...', duracion: '4:19' },
   ],
    año: 2004,
    avatar: '../../src/assets/img/cds/01_kse_teoh/R-1135202-1605034793-7742.jpg',
    avatar2: '../../src/assets/img/cds/01_kse_teoh/R-1135202-1605034811-6018.jpg',
    avatar3: '../../src/assets/img/cds/01_kse_teoh/R-1135202-1194969437.jpg',
  },
   {
    id: 2,
    banda: 'Killswitch Engage',
    genero: ['Metalcore',' / ', 'Melodic Hardcore'],
    disco: 'As Daylight Dies',
    categoria: "CD",
    precio: 11.800,
    stock: 20,
   tracklist: [
        { nombre: 'Daylight Dies', duracion: '4:05' },
        { nombre: 'This Is Absolution', duracion: '3:34' },
        { nombre: 'The Arms Of Sorrow', duracion: '3:44' },
        { nombre: 'Unbroken', duracion: '3:08' },
        { nombre: 'My Curse', duracion: '4:04' },
        { nombre: 'For You', duracion: '4:03' },
        { nombre: 'Still Beats Your Name', duracion: '3:19' },
        { nombre: 'Eye Of The Storm', duracion: '3:56' },
        { nombre: 'Break The Silence', duracion: '4:32' },
        { nombre: 'Desperate Times', duracion: '4:25' },
        { nombre: 'Reject Yourself', duracion: '4:45' },
   ],
    año: 2006,
    avatar: '../../src/assets/img/cds/02_kse_add/R-883453-1698313658-2619.jpg',
    avatar2: '../../src/assets/img/cds/02_kse_add/R-883453-1698313654-7520.jpg',
    avatar3: '../../src/assets/img/cds/02_kse_add/R-883453-1698313644-9480.jpg',
  },
  {
    id: 3,
    banda: 'Killswitch Engage',
    genero: ['Metalcore', ' / ','Melodic Hardcore'],
    disco: 'Killswitch Engage',
    categoria: "CD",
    precio: 11.800,
    stock: 15,
    tracklist: [
        { nombre: 'Never Again', duracion: '3:08' },
        { nombre: 'Starting Over', duracion: '3:50' },
        { nombre: 'The Forgotten', duracion: '3:17' },
        { nombre: 'Reckoning', duracion: '2:40' },
        { nombre: 'The Return', duracion: '4:28' },
        { nombre: 'A Light In A Darkened World', duracion: '2:50' },
        { nombre: 'Take Me Away', duracion: '2:45' },
        { nombre: 'I Would Do Anything', duracion: '3:21' },
        { nombre: 'Save Me', duracion: '3:45' },
        { nombre: 'Lost', duracion: '3:44' },
        { nombre: 'This Is Goodbye', duracion: '4:17' },
   ],
    año: 2009,
    avatar: '../../src/assets/img/cds/03_kse_kse/R-15621994-1594719254-1584.jpg',
    avatar2: '../../src/assets/img/cds/03_kse_kse/R-15621994-1594719255-1485.jpg',
    avatar3: '../../src/assets/img/cds/03_kse_kse/R-15621994-1594719248-1248.jpg',

  },
  {
    id: 4,
    banda: 'Killswitch Engage',
    genero: ['Metalcore', ' / ','Melodic Hardcore'],
    disco: 'Atonement',
    categoria: "CD",
    precio: 15.500,
    stock: 18,
    plusInfo: {
      tracklist: [
        { nombre: 'Unleashed', duracion: '4:35' },
        { nombre: 'The Signal Fire', duracion: '3:05' },
        { nombre: 'Us Against The World', duracion: '3:19' },
        { nombre: 'The Crownless King', duracion: '3:10' },
        { nombre: 'I Am Broken Too', duracion: '2:39' },
        { nombre: 'As Sure As The Sun Will Rise', duracion: '2:48' },
        { nombre: 'Know Your Enemy', duracion: '3:51' },
        { nombre: 'Take Control', duracion: '3:44' },
        { nombre: 'Ravenous', duracion: '2:52' },
        { nombre: 'I Can\'t Be The Only One', duracion: '4:08' },
        { nombre: 'Bite The Hand That Feeds', duracion: '4:48' },
      ],
    },
    año: 2019,
    avatar: '../../src/assets/img/cds/04_kse_a/R-24765107-1665285663-1735.jpg',
    avatar2: '../../src/assets/img/cds/04_kse_a/R-14010361-1640694290-8464.jpg',
    avatar3: '../../src/assets/img/cds/04_kse_a/R-14010361-1612301858-6619.jpg',
  },
  {
    id: 5,
    banda: 'Architects',
    genero: ['Metalcore', ' / ','Mathcore', ' / ','Hardcore', ' / ','Post-Hardcore',' / ','Progressive Metalcore'],
    disco: 'Lost Forever / / Lost Together',
    categoria: "CD",
    precio: 11.800,
    stock: 32,
    tracklist: [
        { nombre: 'Gravedigger', duracion: '4:05' },
        { nombre: 'Naysayer', duracion: '3:25' },
        { nombre: 'Broken Cross', duracion: '3:52' },
        { nombre: 'The Devil Is Near', duracion: '3:35' },
        { nombre: 'Red Hypergiant', duracion: '4:19' },
        { nombre: 'C.A.N.C.E.R', duracion: '4:04' },
        { nombre: 'Dead Man Talking', duracion: '2:13' },
        { nombre: 'Colony Collapse', duracion: '4:31' },
        { nombre: 'Castles In The Air', duracion: '3:42' },
        { nombre: 'Youth Is Wasted On The Young', duracion: '4:23' },
        { nombre: 'The Distant Blue', duracion: '5:13' },
      ],
    año: 2014,
    avatar: '../../src/assets/img/cds/05_a_lflt/R-7219128-1586889544-2475.jpg',
    avatar2: '../../src/assets/img/cds/05_a_lflt/R-7219128-1441137156-3006.jpg',
    avatar3: '../../src/assets/img/cds/05_a_lflt/R-7219128-1441137155-6014.jpg',
  },
  {
    id: 6,
    banda: 'Architects',
    genero: ['Metalcore', ' / ','Mathcore', ' / ','Hardcore', ' / ','Post-Hardcore',' / ','Progressive Metalcore'],
    disco: 'All Our Gods Have Abandoned Us',
    categoria: "CD",
    precio: 17.000,
    stock: 27,
    tracklist: [
        { nombre: 'Nihilist', duracion: '2:51' },
        { nombre: 'Deathwish', duracion: '3:52' },
        { nombre: 'Phantom Fear', duracion: '4:06' },
        { nombre: 'Downfall', duracion: '4:04' },
        { nombre: 'Gone With The Wind', duracion: '3:45' },
        { nombre: 'The Empty Hourglass', duracion: '4:11' },
        { nombre: 'A Match Made In Heaven', duracion: '3:48' },
        { nombre: 'Gravity', duracion: '3:18' },
        { nombre: 'All Love Is Lost', duracion: '4:20' },
        { nombre: 'From The Wilderness', duracion: '3:44' },
        { nombre: 'Memento Mori', duracion: '8:12' },
    ],
    año: 2016,
    avatar: '../../src/assets/img/cds/06_a_aoghau/R-15400879-1649432427-1800.jpg',
    avatar2: '../../src/assets/img/cds/06_a_aoghau/R-15400879-1649432576-3749.jpg',
    avatar3: '../../src/assets/img/cds/06_a_aoghau/R-15400879-1649432505-9808.jpg',
  },
  {
    id: 7,
    banda: 'Architects',
    genero: ['Metalcore', ' / ','Mathcore', ' / ','Hardcore', ' / ','Post-Hardcore',' / ','Progressive Metalcore'],
    disco: 'Holy Hell',
    categoria: "CD",
    precio: 15.000,
    stock: 29,
    tracklist: [
        { nombre: 'Death Is Not Defeat', duracion: '3:45' },
        { nombre: 'Hereafter', duracion: '4:15' },
        { nombre: 'Mortal After All', duracion: '3:39' },
        { nombre: 'Holy Hell', duracion: '4:13' },
        { nombre: 'Damnation', duracion: '4:08' },
        { nombre: 'Royal Beggars', duracion: '4:01' },
        { nombre: 'Modern Misery', duracion: '4:13' },
        { nombre: 'Dying To Heal', duracion: '3:50' },
        { nombre: 'The Seventh Circle', duracion: '1:48' },
        { nombre: 'Doomsday', duracion: '4:08' },
        { nombre: 'A Wasted Hymn', duracion: '4:34' },
    ],
    año: 2018,
    avatar: '../../src/assets/img/cds/07_a_hh/R-12779856-1649432178-6173.jpg',
    avatar2: '../../src/assets/img/cds/07_a_hh/R-12779856-1649432177-1949.jpg',
    avatar3: '../../src/assets/img/cds/07_a_hh/R-12779856-1649432201-9414.jpg',
  },
  {
    id: 8,
    banda: 'Architects',
    genero: ['Metalcore', ' / ','Mathcore', ' / ','Hardcore', ' / ','Post-Hardcore',' / ','Progressive Metalcore'],
    disco: 'For Those That Wish To Exist',
    categoria: "CD",
    precio: 17.500,
    stock: 35,
    tracklist: [
        { nombre: 'Do You Dream Of Armageddon?', duracion: '1:39' },
        { nombre: 'Black Lungs', duracion: '3:51' },
        { nombre: 'Giving Blood', duracion: '3:32' },
        { nombre: 'discourse Is Dead', duracion: '3:47' },
        { nombre: 'Dead Butterflies', duracion: '4:02' },
        { nombre: 'An Ordinary Extinction', duracion: '4:08' },
        { nombre: 'Impermanence', duracion: '4:02' },
        { nombre: 'Flight Without Feathers', duracion: '3:49' },
        { nombre: 'Little Wonder', duracion: '3:48' },
        { nombre: 'Animals', duracion: '4:04' },
        { nombre: 'Libertine', duracion: '4:02' },
        { nombre: 'Goliath', duracion: '4:18' },
        { nombre: 'Demi God', duracion: '4:27' },
        { nombre: 'Meteor', duracion: '4:01' },
        { nombre: 'Dying Is Absolutely Safe', duracion: '4:59' },
    ],
    año: 2018,
    avatar: '../../src/assets/img/cds/08_a_fttwte/R-17674597-1618312739-3928.jpg',
    avatar2: '../../src/assets/img/cds/08_a_fttwte/R-17674597-1618312738-3144.jpg',
    avatar3: '../../src/assets/img/cds/08_a_fttwte/R-17674597-1618312737-5888.jpg',
  },
    
/////////SPECIAL EDITIONS - BOX SETS////

{
  id: 9,
  banda: 'Killswitch Engage',
  genero: ['Metalcore', ' / ','Melodic Hardcore'],
  disco: 'Killswitch Engage',
  categoria: "Boxset",
  precio: 20.99,
  stock: 10,
  tracklist: [

      { nombre: 'Never Again', duracion: '3:08' },
      { nombre: 'Starting Over', duracion: '3:50' },
      { nombre: 'The Forgotten', duracion: '3:17' },
      { nombre: 'Reckoning', duracion: '2:40' },
      { nombre: 'The Return', duracion: '4:28' },
      { nombre: 'A Light In A Darkened World', duracion: '2:50' },
      { nombre: 'Take Me Away', duracion: '2:45' },
      { nombre: 'I Would Do Anything', duracion: '3:21' },
      { nombre: 'Save Me', duracion: '3:45' },
      { nombre: 'Lost', duracion: '3:44' },
      { nombre: 'This Is Goodbye', duracion: '4:17' },
      { nombre: 'In A Dead World', duracion: '4:14' },
      { nombre: 'Rose Of Sharyn (Live)', duracion: '3:48' },
      { nombre: 'My Curse (Live)', duracion: '4:26' },
      { nombre: 'Holy Diver (Live)', duracion: '5:07' },


      { nombre: '"Making Of" Footafe', duracion: '' },

      { nombre: 'Interviews', duracion: '' },
    ],
  año: 2009,
  avatar: '../../src/assets/img/bs_de/72_ks_ks_se/R-5417256-1462024551-6616.jpg',
  avatar2: '../../src/assets/img/bs_de/72_ks_ks_se/R-5417256-1462024546-4713.jpg',
  avatar3: '../../src/assets/img/bs_de/72_ks_ks_se/R-5417256-1462024533-4083.jpg',
  avatar4: '../../src/assets/img/bs_de/72_ks_ks_se/R-5417256-1462024544-6875.jpg',
},

{
  id: 10,
  banda: 'Killswitch Engage',
  genero: ['Metalcore', ' / ','Melodic Hardcore'],
  disco: 'As Daylight Dies',
  categoria: "Boxset",
  precio: 20.99,
  stock: 8,
  tracklist: [

      { nombre: 'Daylight Dies', duracion: '4:05' },
      { nombre: 'This Is Absolution', duracion: '3:34' },
      { nombre: 'The Arms Of Sorrow', duracion: '3:44' },
      { nombre: 'Unbroken', duracion: '3:08' },
      { nombre: 'My Curse', duracion: '4:04' },
      { nombre: 'For You', duracion: '4:03' },
      { nombre: 'Still Beats Your Name', duracion: '3:19' },
      { nombre: 'Eye Of The Storm', duracion: '3:56' },
      { nombre: 'Break The Silence', duracion: '4:32' },
      { nombre: 'Desperate Times', duracion: '4:25' },
      { nombre: 'Reject Yourself', duracion: '4:48' },
      { nombre: 'Be One (Bonus Track)', duracion: '3:31' },
      { nombre: 'Let The Bdriges Burn (Bonus Track)', duracion: '4:29' },
      { nombre: 'This Fire (Bonus Track)', duracion: '3:09' },
      { nombre: 'Holy Diver (Bonus Track)', duracion: '4:10' },

      { nombre: 'My Curse', duracion: '4:06' },
      { nombre: 'The ARms Of Sorrow', duracion: '3:51' },
      { nombre: 'Holy Diver', duracion: '4:23' },
      { nombre: 'The Making Of "My Curse"', duracion: '19:48' },
      { nombre: 'The Making Of "The Arms Of Sorrow"', duracion: '10:20' },
    ],
  año: 2009,
  avatar: '../../src/assets/img/bs_de/73_ks_add_se/R-16997568-1611041950-2765.jpg',
  avatar2: '../../src/assets/img/bs_de/73_ks_add_se/R-16997568-1611041956-9424.jpg',
  avatar3: '../../src/assets/img/bs_de/73_ks_add_se/R-16997568-1611041962-3306.jpg',
},

{
  id: 11,
  banda: 'Architects',
  genero: ['Metalcore',' / ', 'Mathcore',' / ', 'Hardcore',' / ', 'Post-Hardcore',' / ','Progressive Metalcore'],
  disco: 'Holy Hell',
  categoria: "Boxset",
  precio: 20.99,
  stock: 12,
  tracklist: [
      { nombre: 'Death Is Not Defeat', duracion: '3:45' },
      { nombre: 'Hereafter', duracion: '4:15' },
      { nombre: 'Mortal After All', duracion: '3:39' },
      { nombre: 'Holy Hell', duracion: '4:13' },
      { nombre: 'Damnation', duracion: '4:08' },
      { nombre: 'Royal Beggars', duracion: '4:01' },
      { nombre: 'Modern Misery', duracion: '4:13' },
      { nombre: 'Dying To Heal', duracion: '3:50' },
      { nombre: 'The Seventh Circle', duracion: '1:48' },
      { nombre: 'Doomsday', duracion: '4:08' },
      { nombre: 'A Wasted Hymn', duracion: '4:34' },
    ],
  año: 2018,
  avatar: '../../src/assets/img/bs_de/74_a_hh_bs/81FHsAAD0uL._AC_SY450_.jpg',
  avatar2: '../../src/assets/img/bs_de/74_a_hh_bs/42733.jpg',
  avatar3: '../../src/assets/img/bs_de/74_a_hh_bs/R-12789609-1583985220-1012.jpg',
},

{
  id: 12,
  banda: 'Tool',
  genero: ['Progressive Metal',' / ', 'Alternative Metal'],
  disco: 'Salival',
  categoria: "Boxset",
  precio: 20.99,
  stock: 5,
  tracklist: [

      { nombre: 'Third Eye (Live)', duracion: '14:05' },
      { nombre: 'Part Of Me (Live)', duracion: '3:32' },
      { nombre: 'Pushit (Live)', duracion: '13:56' },
      { nombre: 'Message To Harry Manback II', duracion: '1:14' },
      { nombre: 'You Lied (Live)', duracion: '9:17' },
      { nombre: 'Merkaba (Live)', duracion: '9:48' },
      { nombre: 'No Quarter', duracion: '11:12' },
      { nombre: 'LAMC', duracion: '6:43' },
      { nombre: 'Maynard\'s Dick', duracion: '3:45' },

      { nombre: 'Sober', duracion: '5:05' },
      { nombre: 'Prison Sex', duracion: '4:54' },
      { nombre: 'Stinkfist', duracion: '5:13' },
      { nombre: 'Ænema', duracion: '6:45' },
      { nombre: 'Hush', duracion: '2:49' },
    ],
  año: 2000,
  avatar: '../../src/assets/img/bs_de/75_t_s_de/R-367840-1191947331.jpg',
  avatar2: '../../src/assets/img/bs_de/75_t_s_de/R-367840-1614004358-1621.jpg',
  avatar3: '../../src/assets/img/bs_de/75_t_s_de/R-367840-1614004358-6265.jpg',
  avatar4: '../../src/assets/img/bs_de/75_t_s_de/R-1594319-1230963990.jpg',
  avatar5: '../../src/assets/img/bs_de/75_t_s_de/R-1594319-1230963997.jpg',
},
{
  id: 13,
  banda: 'Jinjer',
  genero: ['Progressive Metal', ' / ','Alternative Metal',' / ', 'Groove Metal'],
  disco: 'Wallflowers',
  categoria: "Boxset",
  precio: 20.99,
  stock: 22,
  tracklist: [

      { nombre: 'Call Me A Symbol', duracion: '4:21' },
      { nombre: 'Colossus', duracion: '3:37' },
      { nombre: 'Vortex', duracion: '4:02' },
      { nombre: 'Disclosure!', duracion: '3:47' },
      { nombre: 'Copycat', duracion: '4:23' },
      { nombre: 'Pearls And Swine', duracion: '5:20' },
      { nombre: 'Sleep Of The Righteous', duracion: '4:32' },
      { nombre: 'Wallflower', duracion: '4:18' },
      { nombre: 'Dead Hands Feel No Pain', duracion: '4:09' },
      { nombre: 'As I Boil Ice', duracion: '4:22' },
      { nombre: 'Mediator', duracion: '4:30' },

      { nombre: 'Sleep Of The Righteous (Instrumental Demo Version)', duracion: '5:05' },
      { nombre: 'As I Boil Ice (Instrumental Demo Version)', duracion: '4:54' },
    ],
  año: 2021,
  avatar: '../../src/assets/img/bs_de/76_j_w_bs/R-20001028-1630681742-2230.jpg',
  avatar2: '../../src/assets/img/bs_de/76_j_w_bs/185393_859c57ace4707b2.jpg',
  avatar3: '../../src/assets/img/bs_de/76_j_w_bs/s-l1600.jpg',
  avatar4: '../../src/assets/img/bs_de/76_j_w_bs/185393.jpg',
},

{
  id: 14,
  banda: 'Veil Of Maya',
  genero: ['Djent', ' / ','Deathcore', ' / ','Hardcore',' / ','Progressive Metalcore'],
  disco: '[M]other',
  categoria: "Boxset",
  precio: 20.99,
  stock: 16,
  tracklist: [
      { nombre: 'Tokyo Chainsaw', duracion: '2:57' },
      { nombre: 'Artificial Dose', duracion: '3:25' },
      { nombre: 'Godheadk', duracion: '3:12' },
      { nombre: '[re]connect', duracion: '4:02' },
      { nombre: 'Red Fur', duracion: '3:31' },
      { nombre: 'disco Kill Party', duracion: '3:09' },
      { nombre: 'Mother Pt. 4', duracion: '5:12' },
      { nombre: 'Synthwave Vegan', duracion: '2:45' },
      { nombre: 'Lost Creator', duracion: '3:24' },
      { nombre: 'Death Runner', duracion: '3:36' },
  ],
  año: 2022,
  avatar: '../../src/assets/img/bs_de/77_vom_m_de/R-27077157-1684080599-5831.jpg',
  avatar2: '../../src/assets/img/bs_de/77_vom_m_de/R-27077157-1684080600-8164.jpg',
  avatar3: '../../src/assets/img/bs_de/77_vom_m_de/VOM-MOTHER-PACKSHOTS-CD-DIGI-CLOSED_720x.jpg',
  avatar4: '../../src/assets/img/bs_de/77_vom_m_de/VOM-MOTHER-PACKSHOTS-CD-DIGI-OPEN_720x.jpg',

},

{
  id: 15,
  banda: 'Periphery',
  genero: ['Djent', ' / ','Progressive Metal', ' / ','Math Metal', ' / ','Mathcore',' / ','Metalcore'],
  disco: 'Juggernaut • Alpha / Omega',
  categoria: "Boxset",
  precio: 20.99,
  stock: 30,
  tracklist: [

      { nombre: 'A Black Minute', duracion: '4:16' },
      { nombre: 'MK Ultra', duracion: '2:50' },
      { nombre: 'Heavy Heart', duracion: '4:22' },
      { nombre: 'The Event', duracion: '1:45' },
      { nombre: 'The Scourge', duracion: '5:36' },
      { nombre: 'Alpha', duracion: '5:31' },
      { nombre: '22 Faces', duracion: '3:52' },
      { nombre: 'Rainbow Gravity', duracion: '4:39' },
      { nombre: 'Four Lights', duracion: '2:18' },
      { nombre: 'Psychosphere', duracion: '6:16' },
 
      { nombre: 'Reprise', duracion: '1:25' },
      { nombre: 'The Bad Things', duracion: '5:54' },
      { nombre: 'Priestess', duracion: '5:04' },
      { nombre: 'Graveless', duracion: '3:56' },
      { nombre: 'Hell Below', duracion: '3:43' },
      { nombre: 'Omega', duracion: '11:44' },
      { nombre: 'Stranger Things', duracion: '7:35' },
      ],
  año: 2015,
  avatar: '../../src/assets/img/bs_de/78_p_ao_de/R-7686829-1459517647-7619.jpg',
  avatar2: '../../src/assets/img/bs_de/78_p_ao_de/R-7686829-1459517665-4303.jpg',
  avatar3: '../../src/assets/img/bs_de/78_p_ao_de/R-7686829-1459517668-2034.jpg',
  avatar4: '../../src/assets/img/bs_de/78_p_ao_de/R-7686829-1459517672-8490.jpg',
},
{
  id: 16,
  banda: 'Oceansize',
  genero: ['Alternative', ' / ','Progressive Rock', ' / ','Experimental', ' / ','Post-Hardcore'],
  disco: 'Feed To Feed',
  categoria: "Boxset",
  precio: 20.99,
  stock: 20,
  tracklist: [

      { nombre: 'Intro', duracion: '1:00' },
      { nombre: 'I Am The Morning', duracion: '3:55' },
      { nombre: 'Catalyst', duracion: '8:07' },
      { nombre: 'One Day All This Could Be Yours', duracion: '5:36' },
      { nombre: 'Massive Bereavement', duracion: '10:34' },
      { nombre: 'Rinsed', duracion: '3:31' },
      { nombre: 'You Wish', duracion: '6:31' },
      { nombre: 'Remember Where You Are', duracion: '5:58' },
      { nombre: 'Amputee', duracion: '5:33' },
      { nombre: 'Unravel', duracion: '3:49' },
      { nombre: 'Women Who Love Men Who Love Drugs', duracion: '8:32' },
      { nombre: 'Saturday Morning Breakfast Show', duracion: '10:24' },
      { nombre: 'Long Forgotten', duracion: '11:39' },
      { nombre: 'Paper CHampion', duracion: '6:18' },
      { nombre: 'One Out Of None', duracion: '7:28' },

      { nombre: 'Into', duracion: '1:15' },
      { nombre: 'The Charm Offensive', duracion: '7:41' },
      { nombre: 'Heaven Alive', duracion: '7:00' },
      { nombre: 'A Homage To A Shame', duracion: '7:01' },
      { nombre: 'Meredith', duracion: '5:49' },
      { nombre: 'Music For A Nurse', duracion: '8:46' },
      { nombre: 'New Pin', duracion: '5:35' },
      { nombre: 'No Tomorrow', duracion: '7:41' },
      { nombre: 'Mine Host', duracion: '4:29' },
      { nombre: 'You Can\'t Keep A Bad Man Down', duracion: '8:43' },
      { nombre: 'Ornament / The Last Wrongs', duracion: '10:59' }, 
      { nombre: 'Drag The \'Nal, duracion: ', duracion: '1:47' },
      { nombre: 'Dead Dogs An\' All Sorts', duracion: '4:31' },
      { nombre: 'As The Smoke Clears', duracion: '7:39' }, 

      { nombre: 'Intro', duracion: '1:32' },
      { nombre: 'Commemorative___T-Shirt', duracion: '8:28' },
      { nombre: 'Unfamiliar', duracion: '6:48' },
      { nombre: 'Trail Of Fire', duracion: '8:58' },
      { nombre: 'Savant', duracion: '8:41' },
      { nombre: 'Only Twin', duracion: '7:55' },
      { nombre: 'An Old Friend Of The Christy\'s', duracion: '10:58' },
      { nombre: 'Sleeping Dogs And Dead Lions', duracion: '8:39' },
      { nombre: 'The Frame', duracion: '12:23' },
      { nombre: 'Voorhees', duracion: '13:40' }, 
      { nombre: 'I Haven\'t Been The Claw For Ages', duracion: '7:32' }, 

      { nombre: 'I Am The Morning', duracion: '4:03' },
      { nombre: 'Catalyst', duracion: '7:40' },
      { nombre: 'One Day All This Could Be Yours', duracion: '5:42' },
      { nombre: 'Massive Bereavement', duracion: '10:12' },
      { nombre: 'Rinsed', duracion: '3:30' },
      { nombre: 'You Wish', duracion: '6:08' },
      { nombre: 'Remember Where You Are', duracion: '5:35' },
      { nombre: 'Amputee', duracion: '5:33' },
      { nombre: 'Unravel', duracion: '3:41' },
      { nombre: 'Women Who Love Men Who Love Drugs', duracion: '8:07' },
      { nombre: 'Saturday Morning Breakfast Show', duracion: '10:13' },
      { nombre: 'Long Forgotten', duracion: '9:22' },

      { nombre: 'The Charm Offensive', duracion: '8:25' },
      { nombre: 'Heaven Alive', duracion: '6:23' },
      { nombre: 'A Homage To A Shame', duracion: '7:26' },
      { nombre: 'Meredith', duracion: '5:44' },
      { nombre: 'Music For A Nurse', duracion: '8:48' },
      { nombre: 'New Pin', duracion: '5:19' },
      { nombre: 'No Tomorrow', duracion: '7:51' },
      { nombre: 'Mine Host', duracion: '4:29' },
      { nombre: 'You Can\'t Keep A Bad Man Down', duracion: '7:51' },
      { nombre: 'Ornament / The Last Wrongs', duracion: '10:53' }, 

      { nombre: 'Commemorative___T-Shirt', duracion: '8:51' },
      { nombre: 'Unfamiliar', duracion: '6:49' },
      { nombre: 'Trail Of Fire', duracion: '8:42' },
      { nombre: 'Savant', duracion: '8:23' },
      { nombre: 'Only Twin', duracion: '7:45' },
      { nombre: 'An Old Friend Of The Christy\'s', duracion: '10:55' },
      { nombre: 'Sleeping Dogs And Dead Lions', duracion: '7:38' },
      { nombre: 'The Frame', duracion: '10:05' },

      { nombre: 'Paper Champion', duracion: '6:37' },
      { nombre: 'One Out Of None', duracion: '7:02' },
      { nombre: 'Drag The \'Nal', duracion: '2:14' },
      { nombre: 'Dead Dogs An\' All Sorts', duracion: '4:44' },
      { nombre: 'As The Smoke Clears', duracion: '7:29' },
      { nombre: 'Voorhees', duracion: '10:56' },
      { nombre: 'I Haven\'t Been The Claw For Ages', duracion: '9:08' },
    ],
  año: 2009,
  avatar: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447341-1787.jpg',
  avatar1: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447341-6637.jpg',
  avatar2: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447365-3552.jpg',
  avatar3: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447365-4055.jpg',
  avatar4: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447365-7942.jpg',
  avatar5: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447440-4586.jpg',
  avatar6: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447440-7633.jpg',
  avatar7: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447440-9683.jpg',
  avatar8: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447441-5700.jpg',
  avatar9: '../../src/assets/img/bs_de/78_o_ftf_bs/R-1957475-1692447441-5846.jpg',
},
{
  id: 17,
  banda: 'Porcupine Tree',
  genero: ['Progressive Metal', ' / ','Progressive Rock', ' / ','Experimental'],
  disco: 'The Incident',
  categoria: "Boxset",
  precio: 20.99,
  stock: 16,
  tracklist: [
      { nombre: 'Occam\'s Razor', duracion: '1:55' },
      { nombre: 'The Blind House', duracion: '5:47' },
      { nombre: 'Great Expectations', duracion: '1:26' },
      { nombre: 'Kneel And disconnect', duracion: '2:03' },
      { nombre: 'Drawing The Line', duracion: '4:43' },
      { nombre: 'The Incident', duracion: '5:20' },
      { nombre: 'Your Unpleasant Family', duracion: '1:48' },
      { nombre: 'The Yellow Windows Of The Evening Train', duracion: '2:00' },
      { nombre: 'Time Flies', duracion: '11:40' },
      { nombre: 'Degree Zero Of Liberty', duracion: '1:45' },
      { nombre: 'Octane Twisted', duracion: '5:03' },
      { nombre: 'The Séance', duracion: '2:39' },
      { nombre: 'Circle Of Manias', duracion: '2:18' },
      { nombre: 'I Drive The Hearse', duracion: '6:41' },
 
      { nombre: 'Flicker', duracion: '3:42' },
      { nombre: 'Bonnie The Cat', duracion: '5:45' },
      { nombre: 'Black Dahlia', duracion: '3:40' },
      { nombre: 'Remember Me Lover', duracion: '7:28' },

      { nombre: 'Occam\'s Razor', duracion: '1:55' },
      { nombre: 'The Blind House', duracion: '5:47' },
      { nombre: 'Great Expectations', duracion: '1:26' },
      { nombre: 'Kneel And disconnect', duracion: '2:03' },
      { nombre: 'Drawing The Line', duracion: '4:43' },
      { nombre: 'The Incident', duracion: '5:20' },
      { nombre: 'Your Unpleasant Family', duracion: '1:48' },
      { nombre: 'The Yellow Windows Of The Evening Train', duracion: '2:00' },
      { nombre: 'Time Flies', duracion: '11:40' },
      { nombre: 'Degree Zero Of Liberty', duracion: '1:45' },
      { nombre: 'Octane Twisted', duracion: '5:03' },
      { nombre: 'The Séance', duracion: '2:39' },
      { nombre: 'Circle Of Manias', duracion: '2:18' },
      { nombre: 'I Drive The Hearse', duracion: '6:41' },
      { nombre: 'Flicker', duracion: '3:42' },
      { nombre: 'Bonnie The Cat', duracion: '5:45' },
      { nombre: 'Black Dahlia', duracion: '3:40' },
      { nombre: 'Remember Me Lover', duracion: '7:28' },
    ],
  año: 2009,
  avatar: '../../src/assets/img/bs_de/79_pt_ti_bs/R-1930541-1318151009.jpg',
  avatar2: '../../src/assets/img/bs_de/79_pt_ti_bs/porcupine-tree-the-incident-us-cd-album-box-set-549879c_1280x1521.jpg',
  avatar3: '../../src/assets/img/bs_de/79_pt_ti_bs/R-1929601-1593352795-1288.jpg',
  avatar4: '../../src/assets/img/bs_de/79_pt_ti_bs/R-1929601-1593352795-4311.jpg',
  avatar5: '../../src/assets/img/bs_de/79_pt_ti_bs/R-1929601-1593352795-5079.jpg',
},


///////////////////////////DVD'S//////////////////////////

{
  id: 18,
  banda: 'Killswitch Engage',
  genero: ['Metalcore',' / ', 'Melodic Hardcore'],
  disco: '(Set This) World Ablaze',
  categoria: "DVD",
  precio: 20.99,
  stock: 10,
  tracklist: [

      { nombre: 'A Bid Farewell', duracion: '4:14' },
      { nombre: 'Breathe Life	', duracion: '3:22' },
      { nombre: 'Fixation On The Darkness', duracion: '5:28' },
      { nombre: 'When Darkness Falls', duracion: '3:51' },
      { nombre: 'Self Revolution', duracion: '4:52' },
      { nombre: 'The End Of Heartache', duracion: '4:49' },
      { nombre: 'Take This Oath', duracion: '3:39' },
      { nombre: 'Numbered Days', duracion: '4:50' },
      { nombre: 'The Element Of One', duracion: '4:06' },
      { nombre: 'Prelude', duracion: '1:06' },
      { nombre: 'Hope Is...', duracion: '6:03' },
      { nombre: 'Life To Lifeless', duracion: '3:09' },
      { nombre: 'My Last Serenade', duracion: '3:54' },
      { nombre: 'Rose Of Sharyn', duracion: '6:40' },
      { nombre: 'Vide Infra', duracion: '3:56' },
      { nombre: 'Temple From The Within', duracion: '6:52' },
   
      { nombre: 'Life To Lifeless', duracion: '3:28' },
      { nombre: 'My Last Serenade', duracion: '4:15' },
      { nombre: 'Fixation On The Darkness', duracion: '3:36' },
      { nombre: 'Rose Of Sharyn', duracion: '3:51' },
      { nombre: 'The End Of Heartache (Band Version)', duracion: '4:04' },

      { nombre: 'Drum Roll...', duracion: '3:04' },
      { nombre: 'Prelude', duracion: '5:01' },
      { nombre: 'The Bedroom', duracion: '10:19' },
      { nombre: 'Exit Jesse... Enter Howard', duracion: '17:00' },
      { nombre: 'The Studio Heartache', duracion: '7:11' },
      { nombre: 'Mass Metal To The Masses', duracion: '6:12' },
      { nombre: 'Bringing The Smiles Back To Metal', duracion: '17:11' },
      { nombre: 'Freak Out Get Down', duracion: '3:59' },
      { nombre: 'Sucka Got Served	', duracion: '3:58' },
      { nombre: 'The Same Ole "Massholes"', duracion: '3:53' },
      { nombre: 'The Basement"', duracion: '8:37' },

      { nombre: 'All In The Family', duracion: '13:45' },
      { nombre: 'Scene Incest', duracion: '8:20' },
      { nombre: 'On The Side', duracion: '5:46' },
    ],
  año: 2022,
  avatar: '../../src/assets/img/dvds/82_kse_st_woa/R-1319952-1595050541-9462.jpg',
  avatar1: '../../src/assets/img/dvds/82_kse_st_woa/R-1319952-1595050541-9332.jpg',
  avatar2: '../../src/assets/img/dvds/82_kse_st_woa/R-1319952-1595050541-9462.jpg',
},

{
  id: 19,
  banda: 'Pain Of Salvation',
  genero: ['Progressive Metal', ' / ','Progressive Rock'],
  disco: 'Be - Original Stage Production',
  categoria: "DVD",
  precio: 20.99,
  stock: 14,
  tracklist: [

      { nombre: 'Animae Partus ("I Am")', duracion: '1:48' },
      { nombre: 'Deus Nova', duracion: '3:18' },
      { nombre: 'Imago (Homines Partus)', duracion: '5:11' },
      { nombre: 'Pluvius Aestivus - Of Summer Rain (Homines Fabula Initium)', duracion: '5:00' },
      { nombre: 'Lilium Cruentus (Deus Nova) - On The Loss Of Innocence', duracion: '5:28' },
      { nombre: 'Nauticus (Drifting)', duracion: '4:58' },
      { nombre: 'Dea Pecuniae', duracion: '10:09' },

      { nombre: 'Vocari Dei - Sordes Aestas - Mess Age', duracion: '3:50' },
      { nombre: 'Diffidentia (Breaching The Core) - Exitus - Drifting II', duracion: '7:36' },
      { nombre: 'Nihil Morari - (Homines Fabula Finis)', duracion: '6:21' },

      { nombre: 'Latericus Valete', duracion: '2:27' },
      { nombre: 'Omni - Permanere?', duracion: '2:37' },
      { nombre: 'Iter Impius - Martius, Son Of Mars - Obitus Diotinus', duracion: '6:21' },
      { nombre: 'Martius / Nauticus II', duracion: '6:41' },

      { nombre: 'Animae Partus II', duracion: '4:08' },
    ],
  año: 2004,
  avatar: '../../src/assets/img/dvds/83_pos_be_osp/R-2052598-1608041514-6671.jpg',
  avatar1: '../../src/assets/img/dvds/83_pos_be_osp/R-2052598-1608041517-5790.jpg',
  avatar2: '../../src/assets/img/dvds/83_pos_be_osp/R-2052598-1608041521-1094.jpg',
},

{
  id: 20,
  banda: 'Porcupine Tree',
  genero: ['Progressive Metal', ' / ','Progressive Rock',' / ', 'Experimental'],
  disco: 'Arriving Somewhere...',
  categoria: "DVD",
  precio: 20.99,
  stock: 8,
  tracklist: [
      { nombre: 'Revenant', duracion: '3:05' },
      { nombre: 'Open Car', duracion: '4:45' },
      { nombre: 'Blackest Eyes', duracion: '4:38' },
      { nombre: 'Lazarus', duracion: '4:09' },
      { nombre: 'Hatesong', duracion: '9:09' },
      { nombre: 'Don\'t Hate Me', duracion: '8:39' },
      { nombre: 'Mother And Child Divided', duracion: '5:14' },
      { nombre: 'Buying New Soul', duracion: '7:14' },
      { nombre: 'So Called Friend', duracion: '4:59' },
      { nombre: 'Arriving Somewhere But Not Here', duracion: '12:54' },
      { nombre: 'Heartattack In A Layby', duracion: '4:08' },
      { nombre: 'The Start Of Something Beautiful', duracion: '7:19' },
      { nombre: 'Halo', duracion: '6:38' },
      { nombre: 'The Sound Of Muzak', duracion: '5:22' },
      { nombre: 'Even Less', duracion: '6:20' },
      { nombre: 'Trains', duracion: '7:47' },
      { nombre: 'End Credits', duracion: '2:06' },
      { nombre: 'Gallery', duracion: '9:21' },
      { nombre: 'Lazarus (Promo Video)', duracion: '3:57' },
      { nombre: 'Halo (Live Projections)', duracion: '5:55' },
      { nombre: 'Mother & Child Divided (Live Projections)', duracion: '4:57' },
      { nombre: 'Start Of Something Beautiful (Live Projections)', duracion: '7:10' },
      { nombre: 'Futile (Rock Palast)', duracion: '6:09' },
      { nombre: 'Radioactive Toy (Rock Palast)', duracion: '5:59' },
      { nombre: 'Cymbal Song', duracion: '3:58' },
    ],
  año: 2006,
  avatar: '../../src/assets/img/dvds/84_pt_as/R-949277-1568566428-9154.jpg',
  avatar1: '../../src/assets/img/dvds/84_pt_as/R-949277-1568566489-3932.jpg',
  avatar2: '../../src/assets/img/dvds/84_pt_as/R-949277-1568564983-4390.jpg',
  avatar3: '../../src/assets/img/dvds/84_pt_as/R-949277-1568565025-8937.jpg',
},
{
  id: 21,
  banda: 'Porcupine Tree',
  genero: ['Progressive Metal', ' / ','Progressive Rock', ' / ','Experimental'],
  disco: 'Anesthetize (Live In Tilburg)',
  categoria: "DVD",
  precio: 20.99,
  stock: 5,
  tracklist: [
      { nombre: 'Intro', duracion: '2:03' },
      { nombre: 'Fear Of A Blank Planet', duracion: '7:38' },
      { nombre: 'My Ashes', duracion: '4:43' },
      { nombre: 'Anesthetize', duracion: '17:31' },
      { nombre: 'Sentimental', duracion: '5:09' },
      { nombre: 'Way Out Of Here', duracion: '7:51' },
      { nombre: 'Sleep Together', duracion: '7:56' },
      { nombre: 'What Happens Now?', duracion: '8:03' },
      { nombre: 'Normal', duracion: '7:21' },
      { nombre: 'Dark Matte', duracion: '8:54' },
      { nombre: 'Drown With Me', duracion: '5:25' },
      { nombre: 'Cheating The Polygraph', duracion: '8:09' },
      { nombre: 'Half-Light', duracion: '5:27' },
      { nombre: 'Sever', duracion: '5:37' },
      { nombre: 'Wedding Nails', duracion: '5:34' },
      { nombre: 'Strip The Soul / Dot Three', duracion: '8:26' },
      { nombre: 'Sleep Of No Dreaming', duracion: '5:31' },
      { nombre: 'Halo', duracion: '5:50' },
      { nombre: 'Outro', duracion: '2:57' },
    ],
  año: 2010,
  avatar: '../../src/assets/img/dvds/85_pt_ane/R-2306517-1318151467.jpg',
  avatar1: '../../src/assets/img/dvds/85_pt_ane/R-2306517-1318151517.jpg',
  avatar2: '../../src/assets/img/dvds/85_pt_ane/R-2306517-1318151502.jpg',
},
{
  id: 22,
  banda: 'Tool',
  genero: ['Progressive Metal', ' / ','Alternative Metal'],
  disco: 'Parabola',
  categoria: "DVD",
  precio: 20.99,
  stock: 15,
  tracklist: [
      { nombre: 'Parabola (Official Video)', duracion: '10:10' },
      { nombre: 'Parabola (Dual Commentary)', duracion: '10:10' },
      { nombre: 'Parabola (Lustmord Remix)', duracion: '11:36' },
    ],
  año: 2005,
  avatar: '../../src/assets/img/dvds/86_t_para/R-752465-1395248905-8078.jpg',
  avatar1: '../../src/assets/img/dvds/86_t_para/R-14897968-1583682523-4065.jpg',
  avatar2: '../../src/assets/img/dvds/86_t_para/R-5515097-1395355981-9077.jpg',
},
{
  id: 23,
  banda: 'Tool',
  genero: ['Progressive Metal',' / ', 'Alternative Metal'],
  disco: 'Schism',
  categoria: "DVD",
  precio: 20.99,
  stock: 15,
  tracklist: [
      { nombre: 'Schism (Official Video)', duracion: '7:29' },
      { nombre: 'Schism (Dual Commentary)', duracion: '7:29' },
      { nombre: 'Schism (Lustmord Remix)', duracion: '20:13' },
    ],
  año: 2005,
  avatar: '../../src/assets/img/dvds/88_t_sch/R-677256-1236632546.jpg',
  avatar1: '../../src/assets/img/dvds/88_t_sch/R-677256-1236632556.jpg',
  avatar2: '../../src/assets/img/dvds/88_t_sch/R-677256-1236632566.jpg',
},
{
  id: 24,
  banda: 'Tool',
  genero: ['Progressive Metal',' / ', 'Alternative Metal'],
  disco: 'Vicarious',
  categoria: "DVD",
  precio: 20.99,
  stock: 13,
  tracklist: [
      { nombre: 'Vicarious (Official Video)', duracion: '8:47' },
      { nombre: 'Brandy', duracion: '9:20' },
      { nombre: 'Mandy', duracion: '9:14' },
      { nombre: 'Documentary', duracion: '40:46' },
      { nombre: 'Storyboards', duracion: '1:17' },
      { nombre: 'CoSM', duracion: '4:09' },
      { nombre: 'Credits', duracion: '1:39' },
    ],
  año: 2007,
  avatar: '../../src/assets/img/dvds/87_t_vic/R-1174933-1395796821-8900.jpg',
  avatar1: '../../src/assets/img/dvds/87_t_vic/R-1174933-1395796821-6128.jpg',
  avatar2: '../../src/assets/img/dvds/87_t_vic/R-1174933-1395796821-1170.jpg',
},
];

export const getProducts = () =>{
  return new Promise ((resolve) =>{
      setTimeout(() => {
          resolve(productos)
      }, 2000)
  })
} 

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
      resolve(productoFiltrado)
    }, 2000)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter((prod) => prod.categoria === category)
      resolve(productosFiltrados)
    }, 2000);
  });
};
  

