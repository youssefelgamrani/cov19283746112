import {User} from './User';
import { City } from './City';

export class Annonce {
      public prix : number;
      public commentaire : string;
      public createur : User;
      public cityDepart : string; 
      public cityDestination: string; 
      public escales : string ; 
      public dateDepart : string; 
      public dateArrivee : string;
      public places : number;
      public typeRoute : string;
      public typeVoyage : string;
      public cities :City[];

      constructor(){
        this.cities = [
          {
              "id": 1,
              "ville": "Aïn Harrouda",
              "region": 1
          },
          {
              "id": 2,
              "ville": "Ben Yakhlef",
              "region": 1
          },
          {
              "id": 3,
              "ville": "Bouskoura",
              "region": 1
          },
          {
              "id": 4,
              "ville": "Casablanca",
              "region": 1
          },
          {
              "id": 5,
              "ville": "Médiouna",
              "region": 1
          },
          {
              "id": 6,
              "ville": "Mohammédia",
              "region": 1
          },
          {
              "id": 7,
              "ville": "Tit Mellil",
              "region": 1
          },
          {
              "id": 8,
              "ville": "Ben Yakhlef",
              "region": 2
          },
          {
              "id": 9,
              "ville": "Bejaâd",
              "region": 2
          },
          {
              "id": 10,
              "ville": "Ben Ahmed",
              "region": 2
          },
          {
              "id": 11,
              "ville": "Benslimane",
              "region": 2
          },
          {
              "id": 12,
              "ville": "Berrechid",
              "region": 2
          },
          {
              "id": 13,
              "ville": "Boujniba",
              "region": 2
          },
          {
              "id": 14,
              "ville": "Boulanouare",
              "region": 2
          },
          {
              "id": 15,
              "ville": "Bouznika",
              "region": 2
          },
          {
              "id": 16,
              "ville": "Deroua",
              "region": 2
          },
          {
              "id": 17,
              "ville": "El Borouj",
              "region": 2
          },
          {
              "id": 18,
              "ville": "El Gara",
              "region": 2
          },
          {
              "id": 19,
              "ville": "Guisser",
              "region": 2
          },
          {
              "id": 20,
              "ville": "Hattane",
              "region": 2
          },
          {
              "id": 21,
              "ville": "Khouribga",
              "region": 2
          },
          {
              "id": 22,
              "ville": "Loulad",
              "region": 2
          },
          {
              "id": 23,
              "ville": "Oued Zem",
              "region": 2
          },
          {
              "id": 24,
              "ville": "Oulad Abbou",
              "region": 2
          },
          {
              "id": 25,
              "ville": "Oulad H'Riz Sahel",
              "region": 2
          },
          {
              "id": 26,
              "ville": "Oulad M'rah",
              "region": 2
          },
          {
              "id": 27,
              "ville": "Oulad Saïd",
              "region": 2
          },
          {
              "id": 28,
              "ville": "Oulad Sidi Ben Daoud",
              "region": 2
          },
          {
              "id": 29,
              "ville": "Ras El Aïn",
              "region": 2
          },
          {
              "id": 30,
              "ville": "Settat",
              "region": 2
          },
          {
              "id": 31,
              "ville": "Sidi Rahhal Chataï",
              "region": 2
          },
          {
              "id": 32,
              "ville": "Soualem",
              "region": 2
          },
          {
              "id": 33,
              "ville": "Azemmour",
              "region": 3
          },
          {
              "id": 34,
              "ville": "Bir Jdid",
              "region": 3
          },
          {
              "id": 35,
              "ville": "Bouguedra",
              "region": 3
          },
          {
              "id": 36,
              "ville": "Echemmaia",
              "region": 3
          },
          {
              "id": 37,
              "ville": "El Jadida",
              "region": 3
          },
          {
              "id": 38,
              "ville": "Hrara",
              "region": 3
          },
          {
              "id": 39,
              "ville": "Ighoud",
              "region": 3
          },
          {
              "id": 40,
              "ville": "Jamâat Shaim",
              "region": 3
          },
          {
              "id": 41,
              "ville": "Jorf Lasfar",
              "region": 3
          },
          {
              "id": 42,
              "ville": "Khemis Zemamra",
              "region": 3
          },
          {
              "id": 43,
              "ville": "Laaounate",
              "region": 3
          },
          {
              "id": 44,
              "ville": "Moulay Abdallah",
              "region": 3
          },
          {
              "id": 45,
              "ville": "Oualidia",
              "region": 3
          },
          {
              "id": 46,
              "ville": "Oulad Amrane",
              "region": 3
          },
          {
              "id": 47,
              "ville": "Oulad Frej",
              "region": 3
          },
          {
              "id": 48,
              "ville": "Oulad Ghadbane",
              "region": 3
          },
          {
              "id": 49,
              "ville": "Safi",
              "region": 3
          },
          {
              "id": 50,
              "ville": "Sebt El Maârif",
              "region": 3
          },
          {
              "id": 51,
              "ville": "Sebt Gzoula",
              "region": 3
          },
          {
              "id": 52,
              "ville": "Sidi Ahmed",
              "region": 3
          },
          {
              "id": 53,
              "ville": "Sidi Ali Ban Hamdouche",
              "region": 3
          },
          {
              "id": 54,
              "ville": "Sidi Bennour",
              "region": 3
          },
          {
              "id": 55,
              "ville": "Sidi Bouzid",
              "region": 3
          },
          {
              "id": 56,
              "ville": "Sidi Smaïl",
              "region": 3
          },
          {
              "id": 57,
              "ville": "Youssoufia",
              "region": 3
          },
          {
              "id": 58,
              "ville": "Fès",
              "region": 4
          },
          {
              "id": 59,
              "ville": "Aïn Cheggag",
              "region": 4
          },
          {
              "id": 60,
              "ville": "Bhalil",
              "region": 4
          },
          {
              "id": 61,
              "ville": "Boulemane",
              "region": 4
          },
          {
              "id": 62,
              "ville": "El Menzel",
              "region": 4
          },
          {
              "id": 63,
              "ville": "Guigou",
              "region": 4
          },
          {
              "id": 64,
              "ville": "Imouzzer Kandar",
              "region": 4
          },
          {
              "id": 65,
              "ville": "Imouzzer Marmoucha",
              "region": 4
          },
          {
              "id": 66,
              "ville": "Missour",
              "region": 4
          },
          {
              "id": 67,
              "ville": "Moulay Yaâcoub",
              "region": 4
          },
          {
              "id": 68,
              "ville": "Ouled Tayeb",
              "region": 4
          },
          {
              "id": 69,
              "ville": "Outat El Haj",
              "region": 4
          },
          {
              "id": 70,
              "ville": "Ribate El Kheir",
              "region": 4
          },
          {
              "id": 71,
              "ville": "Séfrou",
              "region": 4
          },
          {
              "id": 72,
              "ville": "Skhinate",
              "region": 4
          },
          {
              "id": 73,
              "ville": "Tafajight",
              "region": 4
          },
          {
              "id": 74,
              "ville": "Arbaoua",
              "region": 5
          },
          {
              "id": 75,
              "ville": "Aïn Dorij",
              "region": 5
          },
          {
              "id": 76,
              "ville": "Dar Gueddari",
              "region": 5
          },
          {
              "id": 77,
              "ville": "Had Kourt",
              "region": 5
          },
          {
              "id": 78,
              "ville": "Jorf El Melha",
              "region": 5
          },
          {
              "id": 79,
              "ville": "Kénitra",
              "region": 5
          },
          {
              "id": 80,
              "ville": "Khenichet",
              "region": 5
          },
          {
              "id": 81,
              "ville": "Lalla Mimouna",
              "region": 5
          },
          {
              "id": 82,
              "ville": "Mechra Bel Ksiri",
              "region": 5
          },
          {
              "id": 83,
              "ville": "Mehdia",
              "region": 5
          },
          {
              "id": 84,
              "ville": "Moulay Bousselham",
              "region": 5
          },
          {
              "id": 85,
              "ville": "Sidi Allal Tazi",
              "region": 5
          },
          {
              "id": 86,
              "ville": "Sidi Kacem",
              "region": 5
          },
          {
              "id": 87,
              "ville": "Sidi Slimane",
              "region": 5
          },
          {
              "id": 88,
              "ville": "Sidi Taibi",
              "region": 5
          },
          {
              "id": 89,
              "ville": "Sidi Yahya El Gharb",
              "region": 5
          },
          {
              "id": 90,
              "ville": "Souk El Arbaa",
              "region": 5
          },
          {
              "id": 91,
              "ville": "Akka",
              "region": 6
          },
          {
              "id": 92,
              "ville": "Assa",
              "region": 6
          },
          {
              "id": 93,
              "ville": "Bouizakarne",
              "region": 6
          },
          {
              "id": 94,
              "ville": "El Ouatia",
              "region": 6
          },
          {
              "id": 95,
              "ville": "Es-Semara",
              "region": 6
          },
          {
              "id": 96,
              "ville": "Fam El Hisn",
              "region": 6
          },
          {
              "id": 97,
              "ville": "Foum Zguid",
              "region": 6
          },
          {
              "id": 98,
              "ville": "Guelmim",
              "region": 6
          },
          {
              "id": 99,
              "ville": "Taghjijt",
              "region": 6
          },
          {
              "id": 100,
              "ville": "Tan-Tan",
              "region": 6
          },
          {
              "id": 101,
              "ville": "Tata",
              "region": 6
          },
          {
              "id": 102,
              "ville": "Zag",
              "region": 6
          },
          {
              "id": 103,
              "ville": "Marrakech",
              "region": 7
          },
          {
              "id": 104,
              "ville": "Ait Daoud",
              "region": 7
          },
          {
              "id": 115,
              "ville": "Amizmiz",
              "region": 7
          },
          {
              "id": 116,
              "ville": "Assahrij",
              "region": 7
          },
          {
              "id": 117,
              "ville": "Aït Ourir",
              "region": 7
          },
          {
              "id": 118,
              "ville": "Ben Guerir",
              "region": 7
          },
          {
              "id": 119,
              "ville": "Chichaoua",
              "region": 7
          },
          {
              "id": 120,
              "ville": "El Hanchane",
              "region": 7
          },
          {
              "id": 121,
              "ville": "El Kelaâ des Sraghna",
              "region": 7
          },
          {
              "id": 122,
              "ville": "Essaouira",
              "region": 7
          },
          {
              "id": 123,
              "ville": "Fraïta",
              "region": 7
          },
          {
              "id": 124,
              "ville": "Ghmate",
              "region": 7
          },
          {
              "id": 125,
              "ville": "Ighounane",
              "region": 7
          },
          {
              "id": 126,
              "ville": "Imintanoute",
              "region": 7
          },
          {
              "id": 127,
              "ville": "Kattara",
              "region": 7
          },
          {
              "id": 128,
              "ville": "Lalla Takerkoust",
              "region": 7
          },
          {
              "id": 129,
              "ville": "Loudaya",
              "region": 7
          },
          {
              "id": 130,
              "ville": "Lâattaouia",
              "region": 7
          },
          {
              "id": 131,
              "ville": "Moulay Brahim",
              "region": 7
          },
          {
              "id": 132,
              "ville": "Mzouda",
              "region": 7
          },
          {
              "id": 133,
              "ville": "Ounagha",
              "region": 7
          },
          {
              "id": 134,
              "ville": "Sid L'Mokhtar",
              "region": 7
          },
          {
              "id": 135,
              "ville": "Sid Zouin",
              "region": 7
          },
          {
              "id": 136,
              "ville": "Sidi Abdallah Ghiat",
              "region": 7
          },
          {
              "id": 137,
              "ville": "Sidi Bou Othmane",
              "region": 7
          },
          {
              "id": 138,
              "ville": "Sidi Rahhal",
              "region": 7
          },
          {
              "id": 139,
              "ville": "Skhour Rehamna",
              "region": 7
          },
          {
              "id": 140,
              "ville": "Smimou",
              "region": 7
          },
          {
              "id": 141,
              "ville": "Tafetachte",
              "region": 7
          },
          {
              "id": 142,
              "ville": "Tahannaout",
              "region": 7
          },
          {
              "id": 143,
              "ville": "Talmest",
              "region": 7
          },
          {
              "id": 144,
              "ville": "Tamallalt",
              "region": 7
          },
          {
              "id": 145,
              "ville": "Tamanar",
              "region": 7
          },
          {
              "id": 146,
              "ville": "Tamansourt",
              "region": 7
          },
          {
              "id": 147,
              "ville": "Tameslouht",
              "region": 7
          },
          {
              "id": 148,
              "ville": "Tanalt",
              "region": 7
          },
          {
              "id": 149,
              "ville": "Zeubelemok",
              "region": 7
          },
          {
              "id": 150,
              "ville": "Meknès\u200e",
              "region": 8
          },
          {
              "id": 151,
              "ville": "Khénifra",
              "region": 8
          },
          {
              "id": 152,
              "ville": "Agourai",
              "region": 8
          },
          {
              "id": 153,
              "ville": "Ain Taoujdate",
              "region": 8
          },
          {
              "id": 154,
              "ville": "MyAliCherif",
              "region": 8
          },
          {
              "id": 155,
              "ville": "Rissani",
              "region": 8
          },
          {
              "id": 156,
              "ville": "Amalou Ighriben",
              "region": 8
          },
          {
              "id": 157,
              "ville": "Aoufous",
              "region": 8
          },
          {
              "id": 158,
              "ville": "Arfoud",
              "region": 8
          },
          {
              "id": 159,
              "ville": "Azrou",
              "region": 8
          },
          {
              "id": 160,
              "ville": "Aïn Jemaa",
              "region": 8
          },
          {
              "id": 161,
              "ville": "Aïn Karma",
              "region": 8
          },
          {
              "id": 162,
              "ville": "Aïn Leuh",
              "region": 8
          },
          {
              "id": 163,
              "ville": "Aït Boubidmane",
              "region": 8
          },
          {
              "id": 164,
              "ville": "Aït Ishaq",
              "region": 8
          },
          {
              "id": 165,
              "ville": "Boudnib",
              "region": 8
          },
          {
              "id": 166,
              "ville": "Boufakrane",
              "region": 8
          },
          {
              "id": 167,
              "ville": "Boumia",
              "region": 8
          },
          {
              "id": 168,
              "ville": "El Hajeb",
              "region": 8
          },
          {
              "id": 169,
              "ville": "Elkbab",
              "region": 8
          },
          {
              "id": 170,
              "ville": "Er-Rich",
              "region": 8
          },
          {
              "id": 171,
              "ville": "Errachidia",
              "region": 8
          },
          {
              "id": 172,
              "ville": "Gardmit",
              "region": 8
          },
          {
              "id": 173,
              "ville": "Goulmima",
              "region": 8
          },
          {
              "id": 174,
              "ville": "Gourrama",
              "region": 8
          },
          {
              "id": 175,
              "ville": "Had Bouhssoussen",
              "region": 8
          },
          {
              "id": 176,
              "ville": "Haj Kaddour",
              "region": 8
          },
          {
              "id": 177,
              "ville": "Ifrane",
              "region": 8
          },
          {
              "id": 178,
              "ville": "Itzer",
              "region": 8
          },
          {
              "id": 179,
              "ville": "Jorf",
              "region": 8
          },
          {
              "id": 180,
              "ville": "Kehf Nsour",
              "region": 8
          },
          {
              "id": 181,
              "ville": "Kerrouchen",
              "region": 8
          },
          {
              "id": 182,
              "ville": "M'haya",
              "region": 8
          },
          {
              "id": 183,
              "ville": "M'rirt",
              "region": 8
          },
          {
              "id": 184,
              "ville": "Midelt",
              "region": 8
          },
          {
              "id": 185,
              "ville": "Moulay Ali Cherif",
              "region": 8
          },
          {
              "id": 186,
              "ville": "Moulay Bouazza",
              "region": 8
          },
          {
              "id": 187,
              "ville": "Moulay Idriss Zerhoun",
              "region": 8
          },
          {
              "id": 188,
              "ville": "Moussaoua",
              "region": 8
          },
          {
              "id": 189,
              "ville": "N'Zalat Bni Amar",
              "region": 8
          },
          {
              "id": 190,
              "ville": "Ouaoumana",
              "region": 8
          },
          {
              "id": 191,
              "ville": "Oued Ifrane",
              "region": 8
          },
          {
              "id": 192,
              "ville": "Sabaa Aiyoun",
              "region": 8
          },
          {
              "id": 193,
              "ville": "Sebt Jahjouh",
              "region": 8
          },
          {
              "id": 194,
              "ville": "Sidi Addi",
              "region": 8
          },
          {
              "id": 195,
              "ville": "Tichoute",
              "region": 8
          },
          {
              "id": 196,
              "ville": "Tighassaline",
              "region": 8
          },
          {
              "id": 197,
              "ville": "Tighza",
              "region": 8
          },
          {
              "id": 198,
              "ville": "Timahdite",
              "region": 8
          },
          {
              "id": 199,
              "ville": "Tinejdad",
              "region": 8
          },
          {
              "id": 200,
              "ville": "Tizguite",
              "region": 8
          },
          {
              "id": 201,
              "ville": "Toulal",
              "region": 8
          },
          {
              "id": 202,
              "ville": "Tounfite",
              "region": 8
          },
          {
              "id": 203,
              "ville": "Zaouia d'Ifrane",
              "region": 8
          },
          {
              "id": 204,
              "ville": "Zaïda",
              "region": 8
          },
          {
              "id": 205,
              "ville": "Ahfir",
              "region": 9
          },
          {
              "id": 206,
              "ville": "Aklim",
              "region": 9
          },
          {
              "id": 207,
              "ville": "Al Aroui",
              "region": 9
          },
          {
              "id": 208,
              "ville": "Aïn Bni Mathar",
              "region": 9
          },
          {
              "id": 209,
              "ville": "Aïn Erreggada",
              "region": 9
          },
          {
              "id": 210,
              "ville": "Ben Taïeb",
              "region": 9
          },
          {
              "id": 211,
              "ville": "Berkane",
              "region": 9
          },
          {
              "id": 212,
              "ville": "Bni Ansar",
              "region": 9
          },
          {
              "id": 213,
              "ville": "Bni Chiker",
              "region": 9
          },
          {
              "id": 214,
              "ville": "Bni Drar",
              "region": 9
          },
          {
              "id": 215,
              "ville": "Bni Tadjite",
              "region": 9
          },
          {
              "id": 216,
              "ville": "Bouanane",
              "region": 9
          },
          {
              "id": 217,
              "ville": "Bouarfa",
              "region": 9
          },
          {
              "id": 218,
              "ville": "Bouhdila",
              "region": 9
          },
          {
              "id": 219,
              "ville": "Dar El Kebdani",
              "region": 9
          },
          {
              "id": 220,
              "ville": "Debdou",
              "region": 9
          },
          {
              "id": 221,
              "ville": "Douar Kannine",
              "region": 9
          },
          {
              "id": 222,
              "ville": "Driouch",
              "region": 9
          },
          {
              "id": 223,
              "ville": "El Aïoun Sidi Mellouk",
              "region": 9
          },
          {
              "id": 224,
              "ville": "Farkhana",
              "region": 9
          },
          {
              "id": 225,
              "ville": "Figuig",
              "region": 9
          },
          {
              "id": 226,
              "ville": "Ihddaden",
              "region": 9
          },
          {
              "id": 227,
              "ville": "Jaâdar",
              "region": 9
          },
          {
              "id": 228,
              "ville": "Jerada",
              "region": 9
          },
          {
              "id": 229,
              "ville": "Kariat Arekmane",
              "region": 9
          },
          {
              "id": 230,
              "ville": "Kassita",
              "region": 9
          },
          {
              "id": 231,
              "ville": "Kerouna",
              "region": 9
          },
          {
              "id": 232,
              "ville": "Laâtamna",
              "region": 9
          },
          {
              "id": 233,
              "ville": "Madagh",
              "region": 9
          },
          {
              "id": 234,
              "ville": "Midar",
              "region": 9
          },
          {
              "id": 235,
              "ville": "Nador",
              "region": 9
          },
          {
              "id": 236,
              "ville": "Naima",
              "region": 9
          },
          {
              "id": 237,
              "ville": "Oued Heimer",
              "region": 9
          },
          {
              "id": 238,
              "ville": "Oujda",
              "region": 9
          },
          {
              "id": 239,
              "ville": "Ras El Ma",
              "region": 9
          },
          {
              "id": 240,
              "ville": "Saïdia",
              "region": 9
          },
          {
              "id": 241,
              "ville": "Selouane",
              "region": 9
          },
          {
              "id": 242,
              "ville": "Sidi Boubker",
              "region": 9
          },
          {
              "id": 243,
              "ville": "Sidi Slimane Echcharaa",
              "region": 9
          },
          {
              "id": 244,
              "ville": "Talsint",
              "region": 9
          },
          {
              "id": 245,
              "ville": "Taourirt",
              "region": 9
          },
          {
              "id": 246,
              "ville": "Tendrara",
              "region": 9
          },
          {
              "id": 247,
              "ville": "Tiztoutine",
              "region": 9
          },
          {
              "id": 248,
              "ville": "Touima",
              "region": 9
          },
          {
              "id": 249,
              "ville": "Touissit",
              "region": 9
          },
          {
              "id": 250,
              "ville": "Zaïo",
              "region": 9
          },
          {
              "id": 251,
              "ville": "Zeghanghane",
              "region": 9
          },
          {
              "id": 252,
              "ville": "Rabat",
              "region": 10
          },
          {
              "id": 253,
              "ville": "Salé",
              "region": 10
          },
          {
              "id": 254,
              "ville": "Ain El Aouda",
              "region": 10
          },
          {
              "id": 255,
              "ville": "Harhoura",
              "region": 10
          },
          {
              "id": 256,
              "ville": "Khémisset",
              "region": 10
          },
          {
              "id": 257,
              "ville": "Oulmès",
              "region": 10
          },
          {
              "id": 258,
              "ville": "Rommani",
              "region": 10
          },
          {
              "id": 259,
              "ville": "Sidi Allal El Bahraoui",
              "region": 10
          },
          {
              "id": 260,
              "ville": "Sidi Bouknadel",
              "region": 10
          },
          {
              "id": 261,
              "ville": "Skhirat",
              "region": 10
          },
          {
              "id": 262,
              "ville": "Tamesna",
              "region": 10
          },
          {
              "id": 263,
              "ville": "Témara",
              "region": 10
          },
          {
              "id": 264,
              "ville": "Tiddas",
              "region": 10
          },
          {
              "id": 265,
              "ville": "Tiflet",
              "region": 10
          },
          {
              "id": 266,
              "ville": "Touarga",
              "region": 10
          },
          {
              "id": 267,
              "ville": "Agadir",
              "region": 11
          },
          {
              "id": 268,
              "ville": "Agdz",
              "region": 11
          },
          {
              "id": 269,
              "ville": "Agni Izimmer",
              "region": 11
          },
          {
              "id": 270,
              "ville": "Aït Melloul",
              "region": 11
          },
          {
              "id": 271,
              "ville": "Alnif",
              "region": 11
          },
          {
              "id": 272,
              "ville": "Anzi",
              "region": 11
          },
          {
              "id": 273,
              "ville": "Aoulouz",
              "region": 11
          },
          {
              "id": 274,
              "ville": "Aourir",
              "region": 11
          },
          {
              "id": 275,
              "ville": "Arazane",
              "region": 11
          },
          {
              "id": 276,
              "ville": "Aït Baha",
              "region": 11
          },
          {
              "id": 277,
              "ville": "Aït Iaâza",
              "region": 11
          },
          {
              "id": 278,
              "ville": "Aït Yalla",
              "region": 11
          },
          {
              "id": 279,
              "ville": "Ben Sergao",
              "region": 11
          },
          {
              "id": 280,
              "ville": "Biougra",
              "region": 11
          },
          {
              "id": 281,
              "ville": "Boumalne-Dadès",
              "region": 11
          },
          {
              "id": 282,
              "ville": "Dcheira El Jihadia",
              "region": 11
          },
          {
              "id": 283,
              "ville": "Drargua",
              "region": 11
          },
          {
              "id": 284,
              "ville": "El Guerdane",
              "region": 11
          },
          {
              "id": 285,
              "ville": "Harte Lyamine",
              "region": 11
          },
          {
              "id": 286,
              "ville": "Ida Ougnidif",
              "region": 11
          },
          {
              "id": 287,
              "ville": "Ifri",
              "region": 11
          },
          {
              "id": 288,
              "ville": "Igdamen",
              "region": 11
          },
          {
              "id": 289,
              "ville": "Ighil n'Oumgoun",
              "region": 11
          },
          {
              "id": 290,
              "ville": "Imassine",
              "region": 11
          },
          {
              "id": 291,
              "ville": "Inezgane",
              "region": 11
          },
          {
              "id": 292,
              "ville": "Irherm",
              "region": 11
          },
          {
              "id": 293,
              "ville": "Kelaat-M'Gouna",
              "region": 11
          },
          {
              "id": 294,
              "ville": "Lakhsas",
              "region": 11
          },
          {
              "id": 295,
              "ville": "Lakhsass",
              "region": 11
          },
          {
              "id": 296,
              "ville": "Lqliâa",
              "region": 11
          },
          {
              "id": 297,
              "ville": "M'semrir",
              "region": 11
          },
          {
              "id": 298,
              "ville": "Massa (Maroc)",
              "region": 11
          },
          {
              "id": 299,
              "ville": "Megousse",
              "region": 11
          },
          {
              "id": 300,
              "ville": "Ouarzazate",
              "region": 11
          },
          {
              "id": 301,
              "ville": "Oulad Berhil",
              "region": 11
          },
          {
              "id": 302,
              "ville": "Oulad Teïma",
              "region": 11
          },
          {
              "id": 303,
              "ville": "Sarghine",
              "region": 11
          },
          {
              "id": 304,
              "ville": "Sidi Ifni",
              "region": 11
          },
          {
              "id": 305,
              "ville": "Skoura",
              "region": 11
          },
          {
              "id": 306,
              "ville": "Tabounte",
              "region": 11
          },
          {
              "id": 307,
              "ville": "Tafraout",
              "region": 11
          },
          {
              "id": 308,
              "ville": "Taghzout",
              "region": 11
          },
          {
              "id": 309,
              "ville": "Tagzen",
              "region": 11
          },
          {
              "id": 310,
              "ville": "Taliouine",
              "region": 11
          },
          {
              "id": 311,
              "ville": "Tamegroute",
              "region": 11
          },
          {
              "id": 312,
              "ville": "Tamraght",
              "region": 11
          },
          {
              "id": 313,
              "ville": "Tanoumrite Nkob Zagora",
              "region": 11
          },
          {
              "id": 314,
              "ville": "Taourirt ait zaghar",
              "region": 11
          },
          {
              "id": 315,
              "ville": "Taroudant",
              "region": 11
          },
          {
              "id": 316,
              "ville": "Temsia",
              "region": 11
          },
          {
              "id": 317,
              "ville": "Tifnit",
              "region": 11
          },
          {
              "id": 318,
              "ville": "Tisgdal",
              "region": 11
          },
          {
              "id": 319,
              "ville": "Tiznit",
              "region": 11
          },
          {
              "id": 320,
              "ville": "Toundoute",
              "region": 11
          },
          {
              "id": 321,
              "ville": "Zagora",
              "region": 11
          },
          {
              "id": 322,
              "ville": "Afourar",
              "region": 12
          },
          {
              "id": 323,
              "ville": "Aghbala",
              "region": 12
          },
          {
              "id": 324,
              "ville": "Azilal",
              "region": 12
          },
          {
              "id": 325,
              "ville": "Aït Majden",
              "region": 12
          },
          {
              "id": 326,
              "ville": "Beni Ayat",
              "region": 12
          },
          {
              "id": 327,
              "ville": "Béni Mellal",
              "region": 12
          },
          {
              "id": 328,
              "ville": "Bin elouidane",
              "region": 12
          },
          {
              "id": 329,
              "ville": "Bradia",
              "region": 12
          },
          {
              "id": 330,
              "ville": "Bzou",
              "region": 12
          },
          {
              "id": 331,
              "ville": "Dar Oulad Zidouh",
              "region": 12
          },
          {
              "id": 332,
              "ville": "Demnate",
              "region": 12
          },
          {
              "id": 333,
              "ville": "Dra'a",
              "region": 12
          },
          {
              "id": 334,
              "ville": "El Ksiba",
              "region": 12
          },
          {
              "id": 335,
              "ville": "Foum Jamaa",
              "region": 12
          },
          {
              "id": 336,
              "ville": "Fquih Ben Salah",
              "region": 12
          },
          {
              "id": 337,
              "ville": "Kasba Tadla",
              "region": 12
          },
          {
              "id": 338,
              "ville": "Ouaouizeght",
              "region": 12
          },
          {
              "id": 339,
              "ville": "Oulad Ayad",
              "region": 12
          },
          {
              "id": 340,
              "ville": "Oulad M'Barek",
              "region": 12
          },
          {
              "id": 341,
              "ville": "Oulad Yaich",
              "region": 12
          },
          {
              "id": 342,
              "ville": "Sidi Jaber",
              "region": 12
          },
          {
              "id": 343,
              "ville": "Souk Sebt Oulad Nemma",
              "region": 12
          },
          {
              "id": 344,
              "ville": "Zaouïat Cheikh",
              "region": 12
          },
          {
              "id": 345,
              "ville": "Tanger\u200e",
              "region": 13
          },
          {
              "id": 346,
              "ville": "Tétouan\u200e",
              "region": 13
          },
          {
              "id": 347,
              "ville": "Akchour",
              "region": 13
          },
          {
              "id": 348,
              "ville": "Assilah",
              "region": 13
          },
          {
              "id": 349,
              "ville": "Bab Berred",
              "region": 13
          },
          {
              "id": 350,
              "ville": "Bab Taza",
              "region": 13
          },
          {
              "id": 351,
              "ville": "Brikcha",
              "region": 13
          },
          {
              "id": 352,
              "ville": "Chefchaouen",
              "region": 13
          },
          {
              "id": 353,
              "ville": "Dar Bni Karrich",
              "region": 13
          },
          {
              "id": 354,
              "ville": "Dar Chaoui",
              "region": 13
          },
          {
              "id": 355,
              "ville": "Fnideq",
              "region": 13
          },
          {
              "id": 356,
              "ville": "Gueznaia",
              "region": 13
          },
          {
              "id": 357,
              "ville": "Jebha",
              "region": 13
          },
          {
              "id": 358,
              "ville": "Karia",
              "region": 13
          },
          {
              "id": 359,
              "ville": "Khémis Sahel",
              "region": 13
          },
          {
              "id": 360,
              "ville": "Ksar El Kébir",
              "region": 13
          },
          {
              "id": 361,
              "ville": "Larache",
              "region": 13
          },
          {
              "id": 362,
              "ville": "M'diq",
              "region": 13
          },
          {
              "id": 363,
              "ville": "Martil",
              "region": 13
          },
          {
              "id": 364,
              "ville": "Moqrisset",
              "region": 13
          },
          {
              "id": 365,
              "ville": "Oued Laou",
              "region": 13
          },
          {
              "id": 366,
              "ville": "Oued Rmel",
              "region": 13
          },
          {
              "id": 367,
              "ville": "Ouezzane",
              "region": 13
          },
          {
              "id": 368,
              "ville": "Point Cires",
              "region": 13
          },
          {
              "id": 369,
              "ville": "Sidi Lyamani",
              "region": 13
          },
          {
              "id": 370,
              "ville": "Sidi Mohamed ben Abdallah el-Raisuni",
              "region": 13
          },
          {
              "id": 371,
              "ville": "Zinat",
              "region": 13
          },
          {
              "id": 372,
              "ville": "Ajdir\u200e",
              "region": 14
          },
          {
              "id": 373,
              "ville": "Aknoul\u200e",
              "region": 14
          },
          {
              "id": 374,
              "ville": "Al Hoceïma\u200e",
              "region": 14
          },
          {
              "id": 375,
              "ville": "Aït Hichem\u200e",
              "region": 14
          },
          {
              "id": 376,
              "ville": "Bni Bouayach\u200e",
              "region": 14
          },
          {
              "id": 377,
              "ville": "Bni Hadifa\u200e",
              "region": 14
          },
          {
              "id": 378,
              "ville": "Ghafsai\u200e",
              "region": 14
          },
          {
              "id": 379,
              "ville": "Guercif\u200e",
              "region": 14
          },
          {
              "id": 380,
              "ville": "Imzouren\u200e",
              "region": 14
          },
          {
              "id": 381,
              "ville": "Inahnahen\u200e",
              "region": 14
          },
          {
              "id": 382,
              "ville": "Issaguen (Ketama)\u200e",
              "region": 14
          },
          {
              "id": 383,
              "ville": "Karia (El Jadida)\u200e",
              "region": 14
          },
          {
              "id": 384,
              "ville": "Karia Ba Mohamed\u200e",
              "region": 14
          },
          {
              "id": 385,
              "ville": "Oued Amlil\u200e",
              "region": 14
          },
          {
              "id": 386,
              "ville": "Oulad Zbair\u200e",
              "region": 14
          },
          {
              "id": 387,
              "ville": "Tahla\u200e",
              "region": 14
          },
          {
              "id": 388,
              "ville": "Tala Tazegwaght\u200e",
              "region": 14
          },
          {
              "id": 389,
              "ville": "Tamassint\u200e",
              "region": 14
          },
          {
              "id": 390,
              "ville": "Taounate\u200e",
              "region": 14
          },
          {
              "id": 391,
              "ville": "Targuist\u200e",
              "region": 14
          },
          {
              "id": 392,
              "ville": "Taza\u200e",
              "region": 14
          },
          {
              "id": 393,
              "ville": "Taïnaste\u200e",
              "region": 14
          },
          {
              "id": 394,
              "ville": "Thar Es-Souk\u200e",
              "region": 14
          },
          {
              "id": 395,
              "ville": "Tissa\u200e",
              "region": 14
          },
          {
              "id": 396,
              "ville": "Tizi Ouasli\u200e",
              "region": 14
          },
          {
              "id": 397,
              "ville": "Laayoune\u200e",
              "region": 15
          },
          {
              "id": 398,
              "ville": "El Marsa\u200e",
              "region": 15
          },
          {
              "id": 399,
              "ville": "Tarfaya\u200e",
              "region": 15
          },
          {
              "id": 400,
              "ville": "Boujdour\u200e",
              "region": 15
          },
          {
              "id": 401,
              "ville": "Awsard",
              "region": 16
          },
          {
              "id": 402,
              "ville": "Oued-Eddahab ",
              "region": 16
          },
          {
              "id": 403,
              "ville": "Stehat",
              "region": 13
          },
          {
              "id": 404,
              "ville": "Aït Attab",
              "region": 12
          }
      ];
      }
    }