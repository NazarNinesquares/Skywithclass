var $ = jQuery;
window.airports = [{text: "Anaa", id: "AAA",}, {text: "El Arish", id: "AAC",}, {
    text: "Annaba",
    id: "AAE",
}, {text: "Apalachicola", id: "AAF",}, {text: "Aachen", id: "AAH",}, {text: "Awaradam", id: "AAJ",}, {
    text: "Aranuka",
    id: "AAK",
}, {text: "Aalborg", id: "AAL",}, {text: "Mala Mala", id: "AAM",}, {text: "Al Ain", id: "AAN",}, {
    text: "Anaco",
    id: "AAO",
}, {text: "Anapa", id: "AAQ",}, {text: "Aarhus", id: "AAR",}, {text: "Altay", id: "AAT",}, {
    text: "Asau",
    id: "AAU",
}, {text: "Araxa", id: "AAX",}, {text: "Al Ghaydah", id: "AAY",}, {text: "Quetzaltenango", id: "AAZ",}, {
    text: "Abakan",
    id: "ABA",
}, {text: "Abadan", id: "ABD",}, {text: "Allentown", id: "ABE",}, {text: "Abaiang", id: "ABF",}, {
    text: "Abilene",
    id: "ABI",
}, {text: "Abidjan", country: "Cote d'Ivoire", id: "ABJ",}, {text: "Kebri Dehar", id: "ABK",}, {
    text: "Ambler",
    id: "ABL",
}, {text: "Bamaga", id: "ABM",}, {text: "Albina", id: "ABN",}, {text: "Albuquerque", id: "ABQ",}, {
    text: "Aberdeen",
    id: "ABR",
}, {text: "Abu Simbel", id: "ABS",}, {text: "Al Baha", id: "ABT",}, {text: "Abuja", id: "ABV",}, {
    text: "Albury",
    id: "ABX",
}, {text: "Albany", id: "ABY",}, {text: "Aberdeen", id: "ABZ",}, {text: "Acapulco", id: "ACA",}, {
    text: "Accra",
    id: "ACC",
}, {text: "Acandi", id: "ACD",}, {text: "Lanzarote", id: "ACE",}, {text: "Altenrhein", id: "ACH",}, {
    text: "Alderney",
    id: "ACI",
}, {text: "Anuradhapura", id: "ACJ",}, {text: "Nantucket", id: "ACK",}, {
    text: "Sahand",
    id: "ACP",
}, {text: "Araracuara", id: "ACR",}, {text: "Waco", id: "ACT",}, {text: "Achutupo", id: "ACU",}, {
    text: "Arcata",
    id: "ACV",
}, {text: "Xingyi", id: "ACX",}, {text: "Atlantic text", id: "ACY",}, {text: "Adana", id: "ADA",}, {
    text: "Izmir",
    id: "ADB",
}, {text: "Addis Ababa", id: "ADD",}, {text: "Aden", id: "ADE",}, {text: "Adiyaman", id: "ADF",}, {
    text: "Aldan",
    id: "ADH",
}, {text: "Amman", id: "ADJ",}, {text: "Adak Island", id: "ADK",}, {text: "Adelaide", id: "ADL",}, {
    text: "Ardmore",
    id: "ADM",
}, {text: "Kodiak", id: "ADQ",}, {text: "Dallas", id: "ADS",}, {text: "Ardabil", id: "ADU",}, {
    text: "Camp Springs",
    id: "ADW",
}, {text: "St Andrews", id: "ADX",}, {text: "Alldays", id: "ADY",}, {
    text: "San Andres Island",
    id: "ADZ",
}, {text: "Abemama", id: "AEA",}, {text: "Baise", id: "AEB",}, {text: "Abeche", id: "AEH",}, {
    text: "Buenos Aires",
    id: "AEP",
}, {text: "Sochi", id: "AER",}, {text: "Aalesund", id: "AES",}, {text: "Allakaket", id: "AET",}, {
    text: "Alexandria",
    id: "AEX",
}, {text: "Akureyri", id: "AEY",}, {text: "San Rafael", id: "AFA",}, {
    text: "Alta Floresta",
    id: "AFL",
}, {text: "Zarafshan", id: "AFS",}, {text: "Afutara", id: "AFT",}, {text: "Fort Worth", id: "AFW",}, {
    text: "Afyon",
    id: "AFY",
}, {text: "Sabzevar", id: "AFZ",}, {text: "Agadir", id: "AGA",}, {text: "Munich", id: "AGB",}, {
    text: "Pittsburgh",
    id: "AGC",
}, {text: "Wangerooge", id: "AGE",}, {text: "Agen", id: "AGF",}, {
    text: "Angelholm/Helsingborg",
    id: "AGH",
}, {text: "Wageningen", id: "AGI",}, {text: "Aguni", id: "AGJ",}, {text: "Wanigela", id: "AGL",}, {
    text: "Tasiilaq",
    id: "AGM",
}, {text: "Angoon", id: "AGN",}, {text: "Malaga", id: "AGP",}, {text: "Agrinion", id: "AGQ",}, {
    text: "Agra",
    id: "AGR",
}, {text: "Augusta", id: "AGS",}, {text: "Ciudad del Este", id: "AGT",}, {
    text: "Aguascalientes",
    id: "AGU",
}, {text: "Acarigua", id: "AGV",}, {text: "Agatti Island", id: "AGX",}, {text: "Aggeneys", id: "AGZ",}, {
    text: "Abha",
    id: "AHB",
}, {text: "Ahe", id: "AHE",}, {text: "Athens", id: "AHN",}, {text: "Alghero", id: "AHO",}, {
    text: "Ahuas",
    id: "AHS",
}, {text: "Al Hoceima", id: "AHU",}, {text: "Alliance", id: "AIA",}, {text: "Airok", id: "AIC",}, {
    text: "Aiome",
    id: "AIE",
}, {text: "Aiken", id: "AIK",}, {text: "Ailuk Island", id: "AIM",}, {text: "Wainwright", id: "AIN",}, {
    text: "Arorae",
    id: "AIS",
}, {text: "Aitutaki Island", id: "AIT",}, {text: "Atiu Island", id: "AIU",}, {
    text: "Kaiser/Lake Ozark",
    id: "AIZ",
}, {text: "Ajaccio", id: "AJA",}, {text: "Jouf", id: "AJF",}, {text: "Agri", id: "AJI",}, {
    text: "Aizawl",
    id: "AJL",
}, {text: "Anjouan", id: "AJN",}, {text: "Arvidsjaur", id: "AJR",}, {text: "Aracaju", id: "AJU",}, {
    text: "Agadez",
    id: "AJY",
}, {text: "Ankang", id: "AKA",}, {text: "Atka", id: "AKB",}, {text: "Akron/Canton", id: "AKC",}, {
    text: "Akola",
    id: "AKD",
}, {text: "Kufra", id: "AKF",}, {text: "Akiak", id: "AKI",}, {text: "Asahikawa", id: "AKJ",}, {
    text: "Akhiok",
    id: "AKK",
}, {text: "Auckland", id: "AKL",}, {text: "King Salmon", id: "AKN",}, {text: "Anaktuvuk", id: "AKP",}, {
    text: "Akure",
    id: "AKR",
}, {text: "Auki", id: "AKS",}, {text: "Akrotiri", id: "AKT",}, {text: "Aksu", id: "AKU",}, {
    text: "Akulivik",
    id: "AKV",
}, {text: "Aktobe", id: "AKX",}, {text: "Sittwe", id: "AKY",}, {text: "Almaty", id: "ALA",}, {
    text: "Albany",
    id: "ALB",
}, {text: "Alicante", id: "ALC",}, {text: "Alta", id: "ALF",}, {text: "Algiers", id: "ALG",}, {
    text: "Albany",
    id: "ALH",
}, {text: "Alice", id: "ALI",}, {text: "Alexander Bay", id: "ALJ",}, {text: "Albenga", id: "ALL",}, {
    text: "Alamogordo",
    id: "ALM",
}, {text: "Waterloo", id: "ALO",}, {text: "Aleppo", id: "ALP",}, {text: "Alexandra", id: "ALR",}, {
    text: "Alamosa",
    id: "ALS",
}, {text: "Alula", id: "ALU",}, {text: "Walla Walla", id: "ALW",}, {
    text: "Alexander text",
    id: "ALX",
}, {text: "Alexandria", id: "ALY",}, {text: "Alitak", id: "ALZ",}, {text: "Amarillo", id: "AMA",}, {
    text: "Ambilobe",
    id: "AMB",
}, {text: "Am Timan", id: "AMC",}, {text: "Ahmedabad", id: "AMD",}, {text: "Arba Minch", id: "AMH",}, {
    text: "Mataram",
    id: "AMI",
}, {text: "Amman", id: "AMM",}, {text: "Ambon", id: "AMQ",}, {text: "Amsterdam", id: "AMS",}, {
    text: "Amderma",
    id: "AMV",
}, {text: "Ambatomainty", id: "AMY",}, {text: "Ardmore", id: "AMZ",}, {
    text: "Anniston",
    id: "ANB",
}, {text: "Anchorage", id: "ANC",}, {text: "Anderson", id: "AND",}, {text: "Angers", id: "ANE",}, {
    text: "Antofagasta",
    id: "ANF",
}, {text: "Angouleme", id: "ANG",}, {text: "Aniak", id: "ANI",}, {text: "Ankara", id: "ANK",}, {
    text: "Antalaha",
    id: "ANM",
}, {text: "Annette Island", id: "ANN",}, {text: "Annapolis", id: "ANP",}, {
    text: "Angola",
    id: "ANQ",
}, {text: "Antwerp", id: "ANR",}, {text: "Andahuaylas", id: "ANS",}, {text: "Antigua", id: "ANU",}, {
    text: "Anvik",
    id: "ANV",
}, {text: "Andenes", id: "ANX",}, {text: "Altenburg", id: "AOC",}, {text: "Eskisehir", id: "AOE",}, {
    text: "Lima",
    id: "AOH",
}, {text: "Ancona", id: "AOI",}, {text: "Aomori", id: "AOJ",}, {
    text: "Karpathos",
    id: "AOK",
}, {text: "Paso de los Libres", id: "AOL",}, {text: "Altoona", id: "AOO",}, {
    text: "Alor Setar",
    id: "AOR",
}, {text: "Amook", id: "AOS",}, {text: "Aosta", id: "AOT",}, {text: "Denver", id: "APA",}, {
    text: "Napa",
    id: "APC",
}, {text: "Naples", id: "APF",}, {text: "Aberdeen", id: "APG",}, {text: "Apataki", id: "APK",}, {
    text: "Nampula",
    id: "APL",
}, {text: "Alpena", id: "APN",}, {text: "Apartado", id: "APO",}, {text: "Apia", id: "APW",}, {
    text: "Zapala",
    id: "APZ",
}, {text: "Araraquara", id: "AQA",}, {text: "Quiche", id: "AQB",}, {text: "Anqing", id: "AQG",}, {
    text: "Qaisumah",
    id: "AQI",
}, {text: "Aqaba", id: "AQJ",}, {text: "Arequipa", id: "AQP",}, {text: "New Iberia", id: "ARA",}, {
    text: "Ann Arbor",
    id: "ARB",
}, {text: "Arctic Village", id: "ARC",}, {text: "Alor", id: "ARD",}, {
    text: "Arecibo",
    id: "ARE",
}, {text: "Arkhangelsk", id: "ARH",}, {text: "Arica", id: "ARI",}, {text: "Arusha", id: "ARK",}, {
    text: "Armidale",
    id: "ARM",
}, {text: "Stockholm", id: "ARN",}, {text: "Alto Rio Senguerr", id: "ARR",}, {
    text: "Watertown",
    id: "ART",
}, {text: "Aracatuba", id: "ARU",}, {text: "Minocqua", id: "ARV",}, {text: "Arad", id: "ARW",}, {
    text: "Assab",
    id: "ASA",
}, {text: "Ashgabat", id: "ASB",}, {text: "Andros Town", id: "ASD",}, {text: "Aspen", id: "ASE",}, {
    text: "Astrakhan",
    id: "ASF",
}, {text: "Nashua", id: "ASH",}, {text: "Ascension Island", id: "ASI",}, {
    text: "Amami",
    id: "ASJ",
}, {text: "Yamoussoukro", country: "Cote d'Ivoire", id: "ASK",}, {text: "Asmara", id: "ASM",}, {
    text: "Asosa",
    id: "ASO",
}, {text: "Alice Springs", id: "ASP",}, {text: "Kayseri", id: "ASR",}, {text: "Astoria", id: "AST",}, {
    text: "Asuncion",
    id: "ASU",
}, {text: "Amboseli", id: "ASV",}, {text: "Aswan", id: "ASW",}, {text: "Anta", id: "ATA",}, {
    text: "Atbara",
    id: "ATB",
}, {text: "Arthur's Town", id: "ATC",}, {text: "Atoifi", id: "ATD",}, {text: "Ambato", id: "ATF",}, {
    text: "Athens",
    id: "ATH",
}, {text: "Antsirabe", id: "ATJ",}, {text: "Atqasuk", id: "ATK",}, {text: "Atlanta", id: "ATL",}, {
    text: "Altamira",
    id: "ATM",
}, {text: "Aitape", id: "ATP",}, {text: "Amritsar", id: "ATQ",}, {text: "Atar", id: "ATR",}, {
    text: "Atmautluak",
    id: "ATT",
}, {text: "Appleton", id: "ATW",}, {text: "Watertown", id: "ATY",}, {text: "Asyut", id: "ATZ",}, {
    text: "Aruba",
    id: "AUA",
}, {text: "Itauba", id: "AUB",}, {text: "Arauca", id: "AUC",}, {text: "Auxerre", id: "AUF",}, {
    text: "Augusta",
    id: "AUG",
}, {text: "Abu Dhabi", id: "AUH",}, {text: "Ambunti", id: "AUJ",}, {text: "Alakanuk", id: "AUK",}, {
    text: "Aur Island",
    id: "AUL",
}, {text: "Auburn", id: "AUO",}, {text: "Hiva Oa", id: "AUQ",}, {text: "Aurillac", id: "AUR",}, {
    text: "Austin",
    id: "AUS",
}, {text: "Aurukun", id: "AUU",}, {text: "Wausau", id: "AUW",}, {text: "Araguaina", id: "AUX",}, {
    text: "Anatom Island",
    id: "AUY",
}, {text: "Aviano", id: "AVB",}, {text: "Ciego de Avila", id: "AVI",}, {
    text: "Arvaikheer",
    id: "AVK",
}, {text: "Asheville", id: "AVL",}, {text: "Avignon", id: "AVN",}, {
    text: "Avon Park",
    id: "AVO",
}, {text: "Wilkes-Barre", id: "AVP",}, {text: "Melbourne", id: "AVV",}, {
    text: "Tucson",
    id: "AVW",
}, {text: "Catalina Island", id: "AVX",}, {text: "Awasa", id: "AWA",}, {
    text: "Awaba",
    id: "AWB",
}, {text: "Aniwa Island", id: "AWD",}, {text: "Wake Island", id: "AWK",}, {
    text: "Ahwaz",
    id: "AWZ",
}, {text: "Anguilla", id: "AXA",}, {text: "Alexandroupolis", id: "AXD",}, {text: "Amakusa", id: "AXJ",}, {
    text: "Ataq",
    id: "AXK",
}, {text: "Armenia", id: "AXM",}, {text: "Spring Point", id: "AXP",}, {text: "Arutua", id: "AXR",}, {
    text: "Akita",
    id: "AXT",
}, {text: "Axum", id: "AXU",}, {text: "Arkalyk", id: "AYK",}, {text: "Ayacucho", id: "AYP",}, {
    text: "Ayers Rock",
    id: "AYQ",
}, {text: "Antalya", id: "AYT",}, {text: "Phoenix", id: "AZA",}, {text: "Yazd", id: "AZD",}, {
    text: "Abu Dhabi",
    id: "AZI",
}, {text: "Andizhan", id: "AZN",}, {text: "Kalamazoo", id: "AZO",}, {text: "Adrar", id: "AZR",}, {
    text: "Samana",
    id: "AZS",
}, {text: "Marysville", id: "BAB",}, {text: "Shreveport", id: "BAD",}, {text: "Westfield", id: "BAF",}, {
    text: "Baguio",
    id: "BAG",
}, {text: "Bahrain", id: "BAH",}, {text: "Baku", id: "BAK",}, {text: "Batman", id: "BAL",}, {
    text: "Battle Mountain",
    id: "BAM",
}, {text: "Barranquilla", id: "BAQ",}, {text: "Balalae", id: "BAS",}, {text: "Baotou", id: "BAV",}, {
    text: "Barnaul",
    id: "BAX",
}, {text: "Baia Mare", id: "BAY",}, {text: "Barbelos", id: "BAZ",}, {
    text: "Balmaceda",
    id: "BBA",
}, {text: "Butaritari", id: "BBG",}, {text: "Stralsund", id: "BBH",}, {
    text: "Bhubaneshwar",
    id: "BBI",
}, {text: "Bitburg", id: "BBJ",}, {text: "Kasane", id: "BBK",}, {text: "Battambang", id: "BBM",}, {
    text: "Bario",
    id: "BBN",
}, {text: "Berbera", id: "BBO",}, {text: "Bembridge", id: "BBP",}, {text: "Barbuda", id: "BBQ",}, {
    text: "Basse Terre",
    id: "BBR",
}, {text: "Blackbush", id: "BBS",}, {text: "Berberati", id: "BBT",}, {
    text: "Bucharest",
    id: "BBU",
}, {text: "Blue Bell", id: "BBX",}, {text: "Baracoa", id: "BCA",}, {text: "Bacolod", id: "BCD",}, {
    text: "Bryce",
    id: "BCE",
}, {text: "Barcaldine", id: "BCI",}, {text: "Barra del Colorado", id: "BCL",}, {
    text: "Bacau",
    id: "BCM",
}, {text: "Barcelona", id: "BCN",}, {text: "Jinka", id: "BCO",}, {text: "Boca Raton", id: "BCT",}, {
    text: "Belmopan",
    id: "BCV",
}, {text: "Benguera Island", id: "BCW",}, {text: "Bermuda", id: "BDA",}, {
    text: "Bundaberg",
    id: "BDB",
}, {text: "Badu Island", id: "BDD",}, {text: "Baudette", id: "BDE",}, {
    text: "Bandar Lengeh",
    id: "BDH",
}, {text: "Bird Island", id: "BDI",}, {text: "Banjarmasin", id: "BDJ",}, {
    text: "Hartford",
    id: "BDL",
}, {text: "Bandirma", id: "BDM",}, {text: "Badin", id: "BDN",}, {text: "Bandung", id: "BDO",}, {
    text: "Bhadrapur",
    id: "BDP",
}, {text: "Vadodara", id: "BDQ",}, {text: "Bridgeport", id: "BDR",}, {text: "Brindisi", id: "BDS",}, {
    text: "Gbadolite",
    country: "Congo (Kinshasa)",
    id: "BDT",
}, {text: "Bardufoss", id: "BDU",}, {text: "Benbecula", id: "BEB",}, {
    text: "Wichita",
    id: "BEC",
}, {text: "Bedford/Hanscom", id: "BED",}, {text: "Bluefields", id: "BEF",}, {
    text: "Belgrade",
    id: "BEG",
}, {text: "Benton Harbor", id: "BEH",}, {text: "Beica", id: "BEI",}, {
    text: "Tanjung Redeb",
    id: "BEJ",
}, {text: "Belem", id: "BEL",}, {text: "Benghazi", id: "BEN",}, {text: "Newcastle", id: "BEO",}, {
    text: "Bellary",
    id: "BEP",
}, {text: "Bury St. Edmunds", id: "BEQ",}, {text: "Berlin", id: "BER",}, {text: "Brest", id: "BES",}, {
    text: "Bethel",
    id: "BET",
}, {text: "Bedourie", id: "BEU",}, {text: "Beersheba", id: "BEV",}, {text: "Beira", id: "BEW",}, {
    text: "Beirut",
    id: "BEY",
}, {text: "Beru", id: "BEZ",}, {text: "Bradford", id: "BFD",}, {text: "Scottsbluff", id: "BFF",}, {
    text: "Curitiba",
    id: "BFH",
}, {text: "Seattle", id: "BFI",}, {text: "Bijie", id: "BFJ",}, {text: "Bakersfield", id: "BFL",}, {
    text: "Mobile",
    id: "BFM",
}, {text: "Bloemfontein", id: "BFN",}, {text: "Chiredzi", id: "BFO",}, {
    text: "Beaver Falls",
    id: "BFP",
}, {text: "Bahia Pinas", id: "BFQ",}, {text: "Belfast", id: "BFS",}, {text: "Beaufort", id: "BFT",}, {
    text: "Buri Ram",
    id: "BFV",
}, {text: "Bafoussam", id: "BFX",}, {text: "Bucaramanga", id: "BGA",}, {
    text: "Braganca",
    id: "BGC",
}, {text: "Bainbridge", id: "BGE",}, {text: "Bangui", id: "BGF",}, {text: "Bingol", id: "BGG",}, {
    text: "Bridgetown",
    id: "BGI",
}, {text: "Big Creek", id: "BGK",}, {text: "Binghamton", id: "BGM",}, {text: "Bergen", id: "BGO",}, {
    text: "Bangor",
    id: "BGR",
}, {text: "Baghdad", id: "BGW",}, {text: "Bage", id: "BGX",}, {text: "Milan", id: "BGY",}, {
    text: "Bar Harbor",
    id: "BHB",
}, {text: "Belfast", id: "BHD",}, {text: "Blenheim", id: "BHE",}, {
    text: "Bahia Cupica",
    id: "BHF",
}, {text: "Brus Laguna", id: "BHG",}, {text: "Bisha", id: "BHH",}, {text: "Bahia Blanca", id: "BHI",}, {
    text: "Bhuj",
    id: "BHJ",
}, {text: "Bukhara", id: "BHK",}, {text: "Birmingham", id: "BHM",}, {text: "Beihan", id: "BHN",}, {
    text: "Bhopal",
    id: "BHO",
}, {text: "Bhojpur", id: "BHP",}, {text: "Broken Hill", id: "BHQ",}, {text: "Bharatpur", id: "BHR",}, {
    text: "Bathurst",
    id: "BHS",
}, {text: "Bhavnagar", id: "BHU",}, {text: "Bahawalpur", id: "BHV",}, {text: "Birmingham", id: "BHX",}, {
    text: "Beihai",
    id: "BHY",
}, {text: "Belo Horizonte", id: "BHZ",}, {text: "Bastia", id: "BIA",}, {
    text: "Block Island",
    id: "BID",
}, {text: "Beatrice", id: "BIE",}, {text: "El Paso", id: "BIF",}, {
    text: "Big Delta",
    id: "BIG",
}, {text: "Bikini Atoll", id: "BII",}, {text: "Biak", id: "BIK",}, {text: "Billings", id: "BIL",}, {
    text: "Bimini",
    id: "BIM",
}, {text: "Bamyan", id: "BIN",}, {text: "Bilbao", id: "BIO",}, {text: "Biarritz", id: "BIQ",}, {
    text: "Biratnagar",
    id: "BIR",
}, {text: "Bismarck", id: "BIS",}, {text: "Bildudalur", id: "BIU",}, {text: "Bria", id: "BIV",}, {
    text: "Biloxi",
    id: "BIX",
}, {text: "Bhisho", id: "BIY",}, {text: "Bejaia", id: "BJA",}, {text: "Bojnurd", id: "BJB",}, {
    text: "Broomfield",
    id: "BJC",
}, {text: "Batsfjord", id: "BJF",}, {text: "Bajhang", id: "BJH",}, {text: "Bemidji", id: "BJI",}, {
    text: "Banjul",
    id: "BJL",
}, {text: "Bujumbura", id: "BJM",}, {text: "Bermejo", id: "BJO",}, {
    text: "Braganca Paulista",
    id: "BJP",
}, {text: "Bahar Dar", id: "BJR",}, {all: !0, text: "Beijing", id: "BJS",}, {
    text: "Bentota River",
    id: "BJT",
}, {text: "Bajura", id: "BJU",}, {text: "Bodrum", id: "BJV",}, {text: "Del Bajio", id: "BJX",}, {
    text: "Badajoz",
    id: "BJZ",
}, {text: "Moscow", id: "BKA",}, {text: "Buckland", id: "BKC",}, {
    text: "Breckenridge",
    id: "BKD",
}, {text: "Brooks Lake", id: "BKF",}, {text: "Branson", id: "BKG",}, {
    text: "Kekaha",
    id: "BKH",
}, {text: "Kota Kinabalu", id: "BKI",}, {text: "Bangkok", id: "BKK",}, {
    text: "Cleveland",
    id: "BKL",
}, {text: "Bakelalan", id: "BKM",}, {text: "Balkabanat", id: "BKN",}, {text: "Bamako", id: "BKO",}, {
    text: "Blackall",
    id: "BKQ",
}, {text: "Bengkulu", id: "BKS",}, {text: "Beckley", id: "BKW",}, {text: "Brookings", id: "BKX",}, {
    text: "Bukavu",
    country: "Congo (Kinshasa)",
    id: "BKY",
}, {text: "Bukoba", id: "BKZ",}, {text: "Barcelona", id: "BLA",}, {
    text: "Las Vegas",
    id: "BLD",
}, {text: "Borlange/Falun", id: "BLE",}, {text: "Bluefield", id: "BLF",}, {text: "Belaga", id: "BLG",}, {
    text: "Blythe",
    id: "BLH",
}, {text: "Bellingham", id: "BLI",}, {text: "Batna", id: "BLJ",}, {text: "Blackpool", id: "BLK",}, {
    text: "Billund",
    id: "BLL",
}, {text: "Bologna", id: "BLQ",}, {text: "Bengaluru", id: "BLR",}, {
    text: "Blackwater",
    id: "BLT",
}, {text: "Belleville", id: "BLV",}, {text: "Blantyre", id: "BLZ",}, {
    text: "Stockholm",
    id: "BMA",
}, {text: "Brigham text", id: "BMC",}, {text: "Belo Tsiribihina", id: "BMD",}, {
    text: "Broome",
    id: "BME",
}, {text: "Bloomington", id: "BMG",}, {text: "Bloomington-Normal", id: "BMI",}, {
    text: "Borkum",
    id: "BMK",
}, {text: "Bitam", id: "BMM",}, {text: "Bhamo", id: "BMO",}, {text: "Brampton Island", id: "BMP",}, {
    text: "Bamburi",
    id: "BMQ",
}, {text: "Beaumont", id: "BMT",}, {text: "Bima", id: "BMU",}, {
    text: "Buon Ma Thuot",
    id: "BMV",
}, {text: "Bordj Badji Mokhtar", id: "BMW",}, {text: "Big Mountain", id: "BMX",}, {
    text: "Ile Art",
    id: "BMY",
}, {text: "Nashville", id: "BNA",}, {text: "Bandar Abbas", id: "BND",}, {
    text: "Brisbane",
    id: "BNE",
}, {text: "Benin text", id: "BNI",}, {text: "Ballina", id: "BNK",}, {text: "Bronnoysund", id: "BNN",}, {
    text: "Bannu",
    id: "BNP",
}, {text: "Barinas", id: "BNS",}, {text: "Blumenau", id: "BNU",}, {text: "Banja Luka", id: "BNX",}, {
    text: "Bellona",
    id: "BNY",
}, {text: "Boma", country: "Congo (Kinshasa)", id: "BOA",}, {text: "Bora Bora", id: "BOB",}, {
    text: "Bocas Del Toro",
    id: "BOC",
}, {text: "Bordeaux", id: "BOD",}, {text: "Bogota", id: "BOG",}, {text: "Bournemouth", id: "BOH",}, {
    text: "Boise",
    id: "BOI",
}, {text: "Burgas", id: "BOJ",}, {text: "Mumbai", id: "BOM",}, {text: "Bonaire", id: "BON",}, {
    text: "Bodo",
    id: "BOO",
}, {text: "Belfort", id: "BOR",}, {text: "Boston", id: "BOS",}, {text: "Boset", id: "BOT",}, {
    text: "Bourges",
    id: "BOU",
}, {text: "Bartow", id: "BOW",}, {text: "Borroloola", id: "BOX",}, {
    text: "Bobo Dioulasso",
    id: "BOY",
}, {text: "Bamenda", id: "BPC",}, {text: "Qinhuangdao", id: "BPE",}, {text: "Batuna", id: "BPF",}, {
    text: "Hyderabad",
    id: "BPM",
}, {text: "Balikpapan", id: "BPN",}, {text: "Bristol", id: "BPR",}, {
    text: "Porto Seguro",
    id: "BPS",
}, {text: "Beaumont", id: "BPT",}, {text: "Beppu", id: "BPU",}, {text: "Bangda", id: "BPX",}, {
    text: "Besalampy",
    id: "BPY",
}, {text: "Bussellton", id: "BQB",}, {text: "London", id: "BQH",}, {text: "Brunswick", id: "BQK",}, {
    text: "Boulia",
    id: "BQL",
}, {text: "Aguadilla", id: "BQN",}, {text: "Blagoveschensk", id: "BQS",}, {
    text: "Brest",
    id: "BQT",
}, {text: "Port Elizabeth", id: "BQU",}, {text: "Barreiras", id: "BRA",}, {
    text: "San Carlos de Bariloche",
    id: "BRC",
}, {text: "Brainerd", id: "BRD",}, {text: "Bremen", id: "BRE",}, {text: "Bari", id: "BRI",}, {
    text: "Bourke",
    id: "BRK",
}, {text: "Burlington", id: "BRL",}, {text: "Barquisimeto", id: "BRM",}, {
    text: "Bern",
    id: "BRN",
}, {text: "Brownsville", id: "BRO",}, {text: "Brno", id: "BRQ",}, {text: "Barra", id: "BRR",}, {
    text: "Bristol",
    id: "BRS",
}, {text: "Bathurst Island", id: "BRT",}, {text: "Brussels", id: "BRU",}, {
    text: "Bremerhaven",
    id: "BRV",
}, {text: "Barrow", id: "BRW",}, {text: "Barahona", id: "BRX",}, {text: "Bosaso", id: "BSA",}, {
    text: "Brasilia",
    id: "BSB",
}, {text: "Bahia Solano", id: "BSC",}, {text: "Baoshan", id: "BSD",}, {text: "Pohakuloa", id: "BSF",}, {
    text: "Bata",
    id: "BSG",
}, {text: "Bairnsdale", id: "BSJ",}, {text: "Biskra", id: "BSK",}, {text: "Basel/Mulhouse", id: "BSL",}, {
    text: "Basco",
    id: "BSO",
}, {text: "Basrah", id: "BSR",}, {text: "Lashkar Gah", id: "BST",}, {
    text: "Basankusu",
    country: "Congo (Kinshasa)",
    id: "BSU",
}, {text: "Pathein", id: "BSX",}, {text: "Bonthe", id: "BTE",}, {text: "Batam", id: "BTH",}, {
    text: "Barter Island",
    id: "BTI",
}, {text: "Banda Aceh", id: "BTJ",}, {text: "Bratsk", id: "BTK",}, {text: "Butte", id: "BTM",}, {
    text: "Botopasie",
    id: "BTO",
}, {text: "Baton Rouge", id: "BTR",}, {text: "Bratislava", id: "BTS",}, {text: "Bettles", id: "BTT",}, {
    text: "Bintulu",
    id: "BTU",
}, {text: "Burlington", id: "BTV",}, {text: "Buka", id: "BUA",}, {text: "Burketown", id: "BUC",}, {
    text: "Budapest",
    id: "BUD",
}, {text: "Buenos Aires", id: "BUE",}, {text: "Buffalo", id: "BUF",}, {
    text: "Benguela",
    id: "BUG",
}, {text: "Bucharest", id: "BUH",}, {text: "Bokondini", id: "BUI",}, {text: "Buenaventura", id: "BUN",}, {
    text: "Burao",
    id: "BUO",
}, {text: "Bulawayo", id: "BUQ",}, {text: "Burbank", id: "BUR",}, {text: "Batumi", id: "BUS",}, {
    text: "Bunia",
    country: "Congo (Kinshasa)",
    id: "BUX",
}, {text: "Bunbury", id: "BUY",}, {text: "Bushehr", id: "BUZ",}, {text: "Paris", id: "BVA",}, {
    text: "Boa Vista",
    id: "BVB",
}, {text: "Boa Vista Island", id: "BVC",}, {text: "Brive-La-Gaillarde", id: "BVE",}, {
    text: "Berlevag",
    id: "BVG",
}, {text: "Vilhena", id: "BVH",}, {text: "Birdsville", id: "BVI",}, {text: "Breves", id: "BVS",}, {
    text: "Kuril'skiy",
    id: "BVV",
}, {text: "Beverly", id: "BVY",}, {text: "Bhairahawa", id: "BWA",}, {
    text: "Barrow Island",
    id: "BWB",
}, {text: "Brownwood", id: "BWD",}, {text: "Braunschweig/Wolfsburg", id: "BWE",}, {
    text: "Barrow-in-Furness",
    id: "BWF",
}, {text: "Bowling Green", id: "BWG",}, {text: "Baltimore", id: "BWI",}, {
    text: "Brac",
    id: "BWK",
}, {text: "Bandar Seri Begawan", id: "BWN",}, {text: "Balakovo", id: "BWO",}, {
    text: "Burnie",
    id: "BWT",
}, {text: "Sydney", id: "BWU",}, {text: "Irarutu", id: "BXB",}, {text: "Bakel", id: "BXE",}, {
    text: "Balhash",
    id: "BXH",
}, {text: "Buckeye", id: "BXK",}, {text: "Bodrum", id: "BXN",}, {text: "Buochs", id: "BXO",}, {
    text: "Bam",
    id: "BXR",
}, {text: "Borrego Springs", id: "BXS",}, {text: "Butuan", id: "BXU",}, {text: "Borama", id: "BXX",}, {
    text: "Yacuiba",
    id: "BYC",
}, {text: "Blytheville", id: "BYH",}, {text: "Bouake", country: "Cote d'Ivoire", id: "BYK",}, {
    text: "Bayamo",
    id: "BYM",
}, {text: "Bayankhongor", id: "BYN",}, {text: "Bonito", id: "BYO",}, {text: "Fort Irwin", id: "BYS",}, {
    text: "Bantry",
    id: "BYT",
}, {text: "Bayreuth", id: "BYU",}, {text: "Blakely Island", id: "BYW",}, {
    text: "Bonanza",
    id: "BZA",
}, {text: "Bazaruto Island", id: "BZB",}, {text: "Belize text", id: "BZE",}, {
    text: "Bydgoszcz",
    id: "BZG",
}, {text: "Balikesir", id: "BZI",}, {text: "Bryansk", id: "BZK",}, {text: "Barisal", id: "BZL",}, {
    text: "Bozeman",
    id: "BZN",
}, {text: "Bolzano/Bozen", id: "BZO",}, {text: "Beziers", id: "BZR",}, {
    text: "Brazzaville",
    country: "Congo (Brazzaville)",
    id: "BZV",
}, {text: "Beltsy", id: "BZY",}, {text: "Brize Norton", id: "BZZ",}, {text: "Cabinda", id: "CAB",}, {
    text: "Cascavel",
    id: "CAC",
}, {text: "Columbia", id: "CAE",}, {text: "Carauari", id: "CAF",}, {text: "Cagliari", id: "CAG",}, {
    text: "Ca Mau",
    id: "CAH",
}, {text: "Cairo", id: "CAI",}, {text: "Canaima", id: "CAJ",}, {text: "Akron/Canton", id: "CAK",}, {
    text: "Campbeltown",
    id: "CAL",
}, {text: "Guangzhou", id: "CAN",}, {text: "Cap Haitien", id: "CAP",}, {text: "Caucasia", id: "CAQ",}, {
    text: "Caribou",
    id: "CAR",
}, {text: "Caruaru", id: "CAU",}, {text: "Campos", id: "CAW",}, {text: "Carlisle", id: "CAX",}, {
    text: "Cayenne",
    id: "CAY",
}, {text: "Cobar", id: "CAZ",}, {text: "Cochabamba", id: "CBB",}, {text: "Cumberland", id: "CBE",}, {
    text: "Cambridge",
    id: "CBG",
}, {text: "Bechar", id: "CBH",}, {text: "Ciudad Bolivar", id: "CBL",}, {text: "Columbus", id: "CBM",}, {
    text: "Cirebon",
    id: "CBN",
}, {text: "Cotabato", id: "CBO",}, {text: "Calabar", id: "CBQ",}, {text: "Canberra", id: "CBR",}, {
    text: "Catumbela",
    id: "CBT",
}, {text: "Coban", id: "CBV",}, {text: "Upland", id: "CCB",}, {text: "Cayo Coco", id: "CCC",}, {
    text: "Carcassonne",
    id: "CCF",
}, {text: "Chile Chico", id: "CCH",}, {text: "Concordia", id: "CCI",}, {
    text: "Kozhikode",
    id: "CCJ",
}, {text: "Cocos Islands", country: "Cocos (Keeling) Islands", id: "CCK",}, {
    text: "Chinchilla",
    id: "CCL",
}, {text: "Criciuma", id: "CCM",}, {text: "Chaghcharan", id: "CCN",}, {
    text: "Carimagua",
    id: "CCO",
}, {text: "Concepcion", id: "CCP",}, {text: "Concord", id: "CCR",}, {text: "Caracas", id: "CCS",}, {
    text: "Kolkata",
    id: "CCU",
}, {text: "Craig Cove", id: "CCV",}, {text: "Chub Cay", id: "CCZ",}, {text: "Cooinda", id: "CDA",}, {
    text: "Cold Bay",
    id: "CDB",
}, {text: "Cedar text", id: "CDC",}, {text: "Paris", id: "CDG",}, {
    text: "Cachoeiro de Itapemirim",
    id: "CDI",
}, {text: "Conceicao Do Araguaia", id: "CDJ",}, {text: "Cedar Key", id: "CDK",}, {
    text: "Camden",
    id: "CDN",
}, {text: "Cuddapah", id: "CDP",}, {text: "Chadron", id: "CDR",}, {text: "Childress", id: "CDS",}, {
    text: "Camden",
    id: "CDU",
}, {text: "Cordova", id: "CDV",}, {text: "Caldwell", id: "CDW",}, {text: "Cebu", id: "CEB",}, {
    text: "Crescent text",
    id: "CEC",
}, {text: "Ceduna", id: "CED",}, {text: "Cherepovets", id: "CEE",}, {text: "Springfield", id: "CEF",}, {
    text: "Chester",
    id: "CEG",
}, {text: "Chiang Rai", id: "CEI",}, {text: "Cuenca", id: "CEJ",}, {text: "Chelyabinsk", id: "CEK",}, {
    text: "Central",
    id: "CEM",
}, {text: "Ciudad Obregon", id: "CEN",}, {text: "Cannes", id: "CEQ",}, {
    text: "Cherbourg",
    id: "CER",
}, {text: "Cessnock", id: "CES",}, {text: "Cholet", id: "CET",}, {text: "Clemson", id: "CEU",}, {
    text: "Crestview",
    id: "CEW",
}, {text: "Cortez", id: "CEZ",}, {text: "Cabo Frio", id: "CFB",}, {text: "Cacador", id: "CFC",}, {
    text: "Bryan",
    id: "CFD",
}, {text: "Clermont-Ferrand", id: "CFE",}, {text: "Cienfuegos", id: "CFG",}, {
    text: "Donegal",
    id: "CFN",
}, {text: "Confreza", id: "CFO",}, {text: "Caen", id: "CFR",}, {text: "Coffs Harbour", id: "CFS",}, {
    text: "Kerkyra",
    id: "CFU",
}, {text: "Craig", id: "CGA",}, {text: "Cuiaba", id: "CGB",}, {text: "Cape Gloucester", id: "CGC",}, {
    text: "Changde",
    id: "CGD",
}, {text: "Cleveland", id: "CGF",}, {text: "Sao Paulo", id: "CGH",}, {
    text: "Cape Girardeau",
    id: "CGI",
}, {text: "Jakarta", id: "CGK",}, {text: "Camiguin", id: "CGM",}, {
    text: "Cologne/Bonn",
    id: "CGN",
}, {text: "Zhengzhou", id: "CGO",}, {text: "Chittagong", id: "CGP",}, {
    text: "Changchun",
    id: "CGQ",
}, {text: "Campo Grande", id: "CGR",}, {text: "Cagayan de Oro", id: "CGY",}, {
    text: "Casa Grande",
    id: "CGZ",
}, {text: "Chattanooga", id: "CHA",}, {text: "Christchurch", id: "CHC",}, {
    text: "Caherciveen",
    id: "CHE",
}, {text: "Chaoyang", id: "CHG",}, {text: "Chachapoyas", id: "CHH",}, {
    all: !0,
    text: "Chicago",
    id: "CHI",
}, {text: "Chimbote", id: "CHM",}, {text: "Charlottesville", id: "CHO",}, {
    text: "Chania",
    id: "CHQ",
}, {text: "Chateauroux", id: "CHR",}, {text: "Charleston", id: "CHS",}, {
    text: "Chatham Island",
    id: "CHT",
}, {text: "Chuathbaluk", id: "CHU",}, {text: "Changuinola", id: "CHX",}, {
    text: "Choiseul Bay",
    id: "CHY",
}, {text: "Rome", id: "CIA",}, {text: "Chico", id: "CIC",}, {text: "Cedar Rapids", id: "CID",}, {
    text: "Chifeng",
    id: "CIF",
}, {text: "Changzhi", id: "CIH",}, {text: "Cobija", id: "CIJ",}, {text: "Chalkyitsik", id: "CIK",}, {
    text: "Council",
    id: "CIL",
}, {text: "Concepcion", id: "CIO",}, {text: "Chipata", id: "CIP",}, {
    text: "Canton Island",
    id: "CIS",
}, {text: "Shymkent", id: "CIT",}, {text: "Sault Ste. Marie", id: "CIU",}, {
    text: "Canouan Island",
    id: "CIW",
}, {text: "Chiclayo", id: "CIX",}, {text: "Comiso", id: "CIY",}, {text: "Coari", id: "CIZ",}, {
    text: "Cajamarca",
    id: "CJA",
}, {text: "Coimbatore", id: "CJB",}, {text: "Calama", id: "CJC",}, {text: "Cheongju", id: "CJJ",}, {
    text: "Chitral",
    id: "CJL",
}, {text: "Chumphon", id: "CJM",}, {text: "Ciudad Juarez", id: "CJS",}, {text: "Jeju", id: "CJU",}, {
    text: "Clarksburg",
    id: "CKB",
}, {text: "Cherkasy", id: "CKC",}, {text: "Crooked Creek", id: "CKD",}, {
    text: "Chongqing",
    id: "CKG",
}, {text: "Chokurdakh", id: "CKH",}, {text: "Chkalovsky", id: "CKL",}, {
    text: "Carajas",
    id: "CKS",
}, {text: "Clarksville", id: "CKV",}, {text: "Conakry", id: "CKY",}, {
    text: "Canakkale",
    id: "CKZ",
}, {text: "San Diego", id: "CLD",}, {text: "Cleveland", id: "CLE",}, {
    text: "Cluj",
    id: "CLJ",
}, {text: "College Station", id: "CLL",}, {text: "Port Angeles", id: "CLM",}, {
    text: "Carolina",
    id: "CLN",
}, {text: "Cali", id: "CLO",}, {text: "Colima", id: "CLQ",}, {text: "Chehalis", id: "CLS",}, {
    text: "Charlotte",
    id: "CLT",
}, {text: "Caldas Novas", id: "CLV",}, {text: "Clearwater", id: "CLW",}, {
    text: "Calvi",
    id: "CLY",
}, {text: "Cunnamulla", id: "CMA",}, {text: "Colombo", id: "CMB",}, {
    text: "Ciudad Del Carmen",
    id: "CME",
}, {text: "Chambery", id: "CMF",}, {text: "Corumba", id: "CMG",}, {text: "Columbus", id: "CMH",}, {
    text: "Champaign",
    id: "CMI",
}, {text: "Qimei", id: "CMJ",}, {text: "Club Makokola", id: "CMK",}, {
    text: "Casablanca",
    id: "CMN",
}, {text: "Santana Do Araguaia", id: "CMP",}, {text: "Colmar", id: "CMR",}, {
    text: "Kundiawa",
    id: "CMU",
}, {text: "Camaguey", id: "CMW",}, {text: "Hancock", id: "CMX",}, {
    text: "Coonamble",
    id: "CNB",
}, {text: "Coconut Island", id: "CNC",}, {text: "Constanta", id: "CND",}, {
    text: "Belo Horizonte",
    id: "CNF",
}, {text: "Cognac", id: "CNG",}, {text: "Changhai", id: "CNI",}, {text: "Cloncurry", id: "CNJ",}, {
    text: "Sindal",
    id: "CNL",
}, {text: "Carlsbad", id: "CNM",}, {text: "Neerlerit Inaat", id: "CNP",}, {
    text: "Corrientes",
    id: "CNQ",
}, {text: "Cairns", id: "CNS",}, {text: "Waco", id: "CNW",}, {text: "Chiang Mai", id: "CNX",}, {
    text: "Moab",
    id: "CNY",
}, {text: "Concordia", id: "COC",}, {text: "Cody", id: "COD",}, {text: "Coeur D'Alene", id: "COE",}, {
    text: "Cocoa",
    id: "COF",
}, {text: "Condoto", id: "COG",}, {text: "Cooch Behar", id: "COH",}, {
    text: "Cocoa",
    id: "COI",
}, {text: "Coonabarabran", id: "COJ",}, {text: "Kochi", id: "COK",}, {
    text: "Coll Island",
    id: "COL",
}, {text: "Concord", id: "CON",}, {text: "Cotonou", id: "COO",}, {text: "Choibalsan", id: "COQ",}, {
    text: "Cordoba",
    id: "COR",
}, {text: "Colorado Springs", id: "COS",}, {text: "Cotulla", id: "COT",}, {
    text: "Columbia",
    id: "COU",
}, {text: "Constanza", id: "COZ",}, {text: "Harper", id: "CPA",}, {
    text: "Capurgana",
    id: "CPB",
}, {text: "San Martin De Los Andes", id: "CPC",}, {text: "Coober Pedy", id: "CPD",}, {
    text: "Campeche",
    id: "CPE",
}, {text: "Copenhagen", id: "CPH",}, {text: "Copiapo", id: "CPO",}, {text: "Casper", id: "CPR",}, {
    text: "St Louis",
    id: "CPS",
}, {text: "Cape Town", id: "CPT",}, {text: "Campina Grande", id: "CPV",}, {
    text: "Culebra",
    id: "CPX",
}, {text: "Shahre-Kord", id: "CQD",}, {text: "Calais/Dunkerque", id: "CQF",}, {
    text: "Ciudad Real",
    id: "CQM",
}, {text: "Craiova", id: "CRA",}, {text: "Cartago", id: "CRC",}, {
    text: "Comodoro Rivadavia",
    id: "CRD",
}, {text: "Myrtle Beach", id: "CRE",}, {text: "Crooked Island", id: "CRI",}, {
    text: "Angeles/Mabalacat",
    id: "CRK",
}, {text: "Brussels", id: "CRL",}, {text: "Catarman", id: "CRM",}, {
    text: "Corpus Christi",
    id: "CRP",
}, {text: "Caravelas", id: "CRQ",}, {text: "Carriacou Island", id: "CRU",}, {
    text: "Crotone",
    id: "CRV",
}, {text: "Charleston", id: "CRW",}, {text: "Turkmenabat", id: "CRZ",}, {
    text: "Colonsay Island",
    id: "CSA",
}, {text: "Caransebes", id: "CSB",}, {text: "Canas", id: "CSC",}, {text: "Creil", id: "CSF",}, {
    text: "Columbus",
    id: "CSG",
}, {text: "Solovetsky", id: "CSH",}, {text: "Cap Skiring", id: "CSK",}, {
    text: "Magdeburg",
    id: "CSO",
}, {text: "Changsha", id: "CSX",}, {text: "Cheboksary", id: "CSY",}, {text: "Catania", id: "CTA",}, {
    text: "Cut Bank",
    id: "CTB",
}, {text: "Catamarca", id: "CTC",}, {text: "Chitre", id: "CTD",}, {text: "Cartagena", id: "CTG",}, {
    text: "Coatesville",
    id: "CTH",
}, {text: "Charleville", id: "CTL",}, {text: "Chetumal", id: "CTM",}, {text: "Cooktown", id: "CTN",}, {
    text: "Sapporo",
    id: "CTS",
}, {text: "Le Castellet", id: "CTT",}, {text: "Chengdu", id: "CTU",}, {
    text: "Cross text",
    id: "CTY",
}, {text: "Ciudad Constitucion", id: "CUA",}, {text: "Cucuta", id: "CUC",}, {
    text: "Cuenca",
    id: "CUE",
}, {text: "Cuneo", id: "CUF",}, {text: "Caye Caulker", id: "CUK",}, {text: "Culiacan", id: "CUL",}, {
    text: "Cumana",
    id: "CUM",
}, {text: "Cancun", id: "CUN",}, {text: "Carupano", id: "CUP",}, {text: "Coen", id: "CUQ",}, {
    text: "Curacao",
    id: "CUR",
}, {text: "Chihuahua", id: "CUU",}, {text: "Cuzco", id: "CUZ",}, {text: "Courchevel", id: "CVF",}, {
    text: "Cincinnati",
    id: "CVG",
}, {text: "Caleta Olivia", id: "CVI",}, {text: "Cuernavaca", id: "CVJ",}, {
    text: "Ciudad Victoria",
    id: "CVM",
}, {text: "Clovis", id: "CVN",}, {text: "Albany", id: "CVO",}, {text: "Carnarvon", id: "CVQ",}, {
    text: "Clovis",
    id: "CVS",
}, {text: "Coventry", id: "CVT",}, {text: "Corvo Island (Azores)", id: "CVU",}, {
    text: "Wausau",
    id: "CWA",
}, {text: "Curitiba", id: "CWB",}, {text: "Chernivtsi", id: "CWC",}, {text: "Clinton", id: "CWI",}, {
    text: "Cardiff",
    id: "CWL",
}, {text: "Cowra", id: "CWT",}, {text: "Coxs Bazar", id: "CXB",}, {text: "Coldfoot", id: "CXF",}, {
    text: "Vancouver",
    id: "CXH",
}, {text: "Kiritimati", id: "CXI",}, {text: "Caxias Do Sul", id: "CXJ",}, {
    text: "Calexico",
    id: "CXL",
}, {text: "Conroe", id: "CXO",}, {text: "Cilacap", id: "CXP",}, {text: "Nha Trang", id: "CXR",}, {
    text: "Cat Cays",
    id: "CXY",
}, {text: "Cayman Brac", id: "CYB",}, {text: "Caye Chapel", id: "CYC",}, {
    text: "Chefornak",
    id: "CYF",
}, {text: "Chiayi", id: "CYI",}, {text: "Chatham", id: "CYM",}, {
    text: "Cayo Largo del Sur",
    id: "CYO",
}, {text: "Calbayog", id: "CYP",}, {text: "Colonia del Sacramento", id: "CYR",}, {
    text: "Cheyenne",
    id: "CYS",
}, {text: "Yakataga", id: "CYT",}, {text: "Cuyo", id: "CYU",}, {text: "Celaya", id: "CYW",}, {
    text: "Chersky",
    id: "CYX",
}, {text: "Cauayan", id: "CYZ",}, {text: "Coro", id: "CZE",}, {text: "Cape Romanzof", id: "CZF",}, {
    text: "Corozal",
    id: "CZH",
}, {text: "Constantine", id: "CZL",}, {text: "Cozumel", id: "CZM",}, {
    text: "Chisana",
    id: "CZN",
}, {text: "Cruzeiro Do Sul", id: "CZS",}, {text: "Corozal", id: "CZU",}, {
    text: "Czestochowa",
    id: "CZW",
}, {text: "Changzhou", id: "CZX",}, {text: "Daytona Beach", id: "DAB",}, {text: "Dhaka", id: "DAC",}, {
    text: "Da Nang",
    id: "DAD",
}, {text: "Dallas", id: "DAL",}, {text: "Damascus", id: "DAM",}, {text: "Dar Es Salaam", id: "DAR",}, {
    text: "Datong",
    id: "DAT",
}, {text: "Daru", id: "DAU",}, {text: "David", id: "DAV",}, {text: "Dazhou", id: "DAX",}, {
    text: "Dayton",
    id: "DAY",
}, {text: "Dalbandin", id: "DBA",}, {text: "Dabaa text", id: "DBB",}, {
    text: "Dhanbad",
    id: "DBD",
}, {text: "Debre Marcos", id: "DBM",}, {text: "Dublin", id: "DBN",}, {text: "Dubbo", id: "DBO",}, {
    text: "Dubuque",
    id: "DBQ",
}, {text: "Debre Tabor", id: "DBT",}, {text: "Dubrovnik", id: "DBV",}, {
    text: "Washington",
    id: "DCA",
}, {text: "Dominica", id: "DCF",}, {text: "Decimomannu", id: "DCI",}, {text: "Castres", id: "DCM",}, {
    text: "Daocheng",
    id: "DCY",
}, {text: "Dodge text", id: "DDC",}, {text: "Dandong", id: "DDG",}, {
    text: "Dera Ghazi Khan",
    id: "DEA",
}, {text: "Debrecen", id: "DEB",}, {text: "Decatur", id: "DEC",}, {
    text: "Dehra Dun",
    id: "DED",
}, {text: "Yuzhno-Kuril'sk", id: "DEE",}, {text: "Delhi", id: "DEL",}, {
    text: "Dembi Dolo",
    id: "DEM",
}, {text: "Denver", id: "DEN",}, {text: "Desroches Island", id: "DES",}, {
    text: "Detroit",
    id: "DET",
}, {text: "Deir ez Zor", id: "DEZ",}, {text: "Dallas", id: "DFW",}, {text: "Dangriga", id: "DGA",}, {
    text: "Mudgee",
    id: "DGE",
}, {text: "Douglas", id: "DGL",}, {text: "Durango", id: "DGO",}, {text: "Dumaguete", id: "DGT",}, {
    text: "Dhahran",
    id: "DHA",
}, {text: "Deer Harbor", id: "DHB",}, {text: "Dhangarhi", id: "DHI",}, {
    text: "Dharamsala",
    id: "DHM",
}, {text: "Dothan", id: "DHN",}, {text: "Den Helder", id: "DHR",}, {text: "Dalhart", id: "DHT",}, {
    text: "Dibrugarh",
    id: "DIB",
}, {text: "Antsiranana", id: "DIE",}, {text: "Diqing", id: "DIG",}, {text: "Dijon", id: "DIJ",}, {
    text: "Dickinson",
    id: "DIK",
}, {text: "Dili", id: "DIL",}, {text: "Dien Bien Phu", id: "DIN",}, {text: "Dire Dawa", id: "DIR",}, {
    text: "Dolisie",
    country: "Congo (Brazzaville)",
    id: "DIS",
}, {text: "Diu", id: "DIU",}, {text: "Dickwella", id: "DIW",}, {text: "Diyarbakir", id: "DIY",}, {
    text: "Jambi",
    id: "DJB",
}, {text: "Djerba", id: "DJE",}, {text: "Djanet", id: "DJG",}, {text: "Jayapura", id: "DJJ",}, {
    text: "Daloa",
    country: "Cote d'Ivoire",
    id: "DJO",
}, {text: "Dunk Island", id: "DKI",}, {text: "Dunkirk", id: "DKK",}, {text: "Dakar", id: "DKR",}, {
    text: "Dikson",
    id: "DKS",
}, {text: "Douala", id: "DLA",}, {text: "Dalian", id: "DLC",}, {text: "Dole", id: "DLE",}, {
    text: "Del Rio",
    id: "DLF",
}, {text: "Dillingham", id: "DLG",}, {text: "Duluth", id: "DLH",}, {text: "Da Lat", id: "DLI",}, {
    text: "Dillon",
    id: "DLL",
}, {text: "Dalaman", id: "DLM",}, {text: "Dali text", id: "DLU",}, {
    text: "Dillon's Bay",
    id: "DLY",
}, {text: "Dalanzadgad", id: "DLZ",}, {text: "Tucson", id: "DMA",}, {text: "Taraz", id: "DMB",}, {
    text: "Doomadgee",
    id: "DMD",
}, {text: "Moscow", id: "DME",}, {text: "Bangkok", id: "DMK",}, {text: "Dammam", id: "DMM",}, {
    text: "Diamantino",
    id: "DMT",
}, {text: "Dimapur", id: "DMU",}, {text: "Okinawa", id: "DNA",}, {text: "Dundee", id: "DND",}, {
    text: "Dunhuang",
    id: "DNH",
}, {text: "Dnipropetrovsk", id: "DNK",}, {text: "Augusta", id: "DNL",}, {text: "Dalton", id: "DNN",}, {
    text: "Dang",
    id: "DNP",
}, {text: "Dinard", id: "DNR",}, {text: "Danville", id: "DNV",}, {text: "Denizli", id: "DNZ",}, {
    text: "Dodoma",
    id: "DOD",
}, {text: "Djoemoe", id: "DOE",}, {text: "Dongola", id: "DOG",}, {text: "Doha", id: "DOH",}, {
    text: "Donetsk",
    id: "DOK",
}, {text: "Deauville", id: "DOL",}, {text: "Dominica", id: "DOM",}, {text: "Dolpa", id: "DOP",}, {
    text: "Dourados",
    id: "DOU",
}, {text: "Dover-Cheswold", id: "DOV",}, {text: "Dongying", id: "DOY",}, {
    text: "Chicago",
    id: "DPA",
}, {text: "Dipolog", id: "DPL",}, {text: "Devonport", id: "DPO",}, {text: "Denpasar-Bali", id: "DPS",}, {
    text: "Derby",
    id: "DRB",
}, {text: "Deering", id: "DRG",}, {text: "De Ridder", id: "DRI",}, {
    text: "Drietabbetje",
    id: "DRJ",
}, {text: "Drake Bay", id: "DRK",}, {text: "Drama", id: "DRM",}, {text: "Durango", id: "DRO",}, {
    text: "Dresden",
    id: "DRS",
}, {text: "Del Rio", id: "DRT",}, {text: "Darwin", id: "DRW",}, {text: "Doncaster", id: "DSA",}, {
    text: "La Desirade",
    id: "DSD",
}, {text: "Dessie", id: "DSE",}, {text: "Dera Ismail Khan", id: "DSK",}, {
    text: "Des Moines",
    id: "DSM",
}, {text: "Ordos", id: "DSN",}, {text: "Sondok", id: "DSO",}, {text: "Ndiass", id: "DSS",}, {
    text: "Delta",
    id: "DTA",
}, {text: "Datadawai", id: "DTD",}, {text: "Diamantina", id: "DTI",}, {text: "Dortmund", id: "DTM",}, {
    text: "Detroit",
    id: "DTT",
}, {text: "Detroit", id: "DTW",}, {text: "Dublin", id: "DUB",}, {text: "Duncan", id: "DUC",}, {
    text: "Dunedin",
    id: "DUD",
}, {text: "Dundo", id: "DUE",}, {text: "Douglas", id: "DUG",}, {text: "Dubois", id: "DUJ",}, {
    text: "Dumai",
    id: "DUM",
}, {text: "Durban", id: "DUR",}, {text: "Duesseldorf", id: "DUS",}, {text: "Dutch Harbor", id: "DUT",}, {
    text: "Deva",
    id: "DVA",
}, {text: "Andavadoaka", id: "DVD",}, {text: "Devils Lake", id: "DVL",}, {text: "Davao", id: "DVO",}, {
    text: "Phoenix",
    id: "DVT",
}, {text: "Dwamawa", id: "DWA",}, {text: "Soalala", id: "DWB",}, {text: "Dubai", id: "DWC",}, {
    text: "Dawadmi",
    id: "DWD",
}, {text: "Houston", id: "DWH",}, {text: "Dubai", id: "DXB",}, {text: "Danbury", id: "DXR",}, {
    text: "Dayong",
    id: "DYG",
}, {text: "Anadyr", id: "DYR",}, {text: "Abilene", id: "DYS",}, {text: "Dushanbe", id: "DYU",}, {
    text: "Dzaoudzi",
    id: "DZA",
}, {text: "Zhezkazgan", id: "DZN",}, {text: "Eagle", id: "EAA",}, {
    text: "Emae Island",
    id: "EAE",
}, {text: "Kwajalein Atoll", id: "EAL",}, {text: "Nejran", id: "EAM",}, {
    text: "Mulhouse",
    id: "EAP",
}, {text: "Kearney", id: "EAR",}, {text: "San Sebastian", id: "EAS",}, {
    text: "Wenatchee",
    id: "EAT",
}, {text: "Eau Claire", id: "EAU",}, {text: "Elba Island", id: "EBA",}, {
    text: "Entebbe",
    id: "EBB",
}, {text: "El Obeid", id: "EBD",}, {text: "El Bagre", id: "EBG",}, {text: "Esbjerg", id: "EBJ",}, {
    text: "Erbil",
    id: "EBL",
}, {text: "El Borma", id: "EBM",}, {text: "Ebon Island", id: "EBO",}, {
    text: "Saint Etienne",
    id: "EBU",
}, {text: "East Tawas", id: "ECA",}, {text: "Elizabeth text", id: "ECG",}, {
    text: "Ercan",
    id: "ECN",
}, {text: "Panama text", id: "ECP",}, {text: "Anchorage", id: "EDF",}, {
    text: "Edinburgh",
    id: "EDI",
}, {text: "Eldoret", id: "EDL",}, {text: "La Roche", id: "EDM",}, {text: "Edremit", id: "EDO",}, {
    text: "Pormpuraaw",
    id: "EDR",
}, {text: "Edwards Air Force Base", id: "EDW",}, {text: "Eek", id: "EEK",}, {
    text: "Keene",
    id: "EEN",
}, {text: "Houston", id: "EFD",}, {text: "Kefallinia", id: "EFL",}, {text: "Engati", id: "EGA",}, {
    text: "Bergerac",
    id: "EGC",
}, {text: "Vail/Eagle", id: "EGE",}, {text: "Seghe", id: "EGM",}, {text: "Geneina", id: "EGN",}, {
    text: "Belgorod",
    id: "EGO",
}, {text: "Egilsstadir", id: "EGS",}, {text: "Eagle River", id: "EGV",}, {
    text: "Egegik",
    id: "EGX",
}, {text: "El Bolson", id: "EHL",}, {text: "Cape Newenham", id: "EHM",}, {text: "Eia", id: "EIA",}, {
    text: "Eniseysk",
    id: "EIE",
}, {text: "Fairbanks", id: "EIL",}, {text: "Eindhoven", id: "EIN",}, {
    text: "Beef Island",
    id: "EIS",
}, {text: "Barrancabermeja", id: "EJA",}, {text: "Wedjh", id: "EJH",}, {
    text: "Mili Atoll",
    id: "EJT",
}, {text: "Elkhart", id: "EKI",}, {text: "Elkins", id: "EKN",}, {text: "Elko", id: "EKO",}, {
    text: "Eagle Lake",
    id: "ELA",
}, {text: "Elcho Island", id: "ELC",}, {text: "El Dorado", id: "ELD",}, {
    text: "El Real",
    id: "ELE",
}, {text: "El Fasher", id: "ELF",}, {text: "El Golea", id: "ELG",}, {
    text: "North Eleuthera",
    id: "ELH",
}, {text: "Elim", id: "ELI",}, {text: "Ellisras", id: "ELL",}, {text: "Elmira", id: "ELM",}, {
    text: "El Paso",
    id: "ELP",
}, {text: "Gassim", id: "ELQ",}, {text: "East London", id: "ELS",}, {text: "El-Tor", id: "ELT",}, {
    text: "El Oued",
    id: "ELU",
}, {text: "Elfin Cove", id: "ELV",}, {text: "El Tigre", id: "ELX",}, {text: "Ely", id: "ELY",}, {
    text: "Nottingham",
    id: "EMA",
}, {text: "Emerald", id: "EMD",}, {text: "Emden", id: "EME",}, {text: "Emmonak", id: "EMK",}, {
    text: "Nema",
    id: "EMN",
}, {text: "Emporia", id: "EMP",}, {text: "Kenai", id: "ENA",}, {text: "Metz/Nancy", id: "ENC",}, {
    text: "Enid",
    id: "END",
}, {text: "Ende", id: "ENE",}, {text: "Enontekio", id: "ENF",}, {text: "Enshi", id: "ENH",}, {
    text: "El Nido",
    id: "ENI",
}, {text: "Enniskillen", id: "ENK",}, {text: "Enschede", id: "ENS",}, {
    text: "Enewetak Island",
    id: "ENT",
}, {text: "Enugu", id: "ENU",}, {text: "Wendover", id: "ENV",}, {text: "Kenosha", id: "ENW",}, {
    text: "Yan'an",
    id: "ENY",
}, {text: "Medellin", id: "EOH",}, {text: "Eday", id: "EOI",}, {text: "Keokuk", id: "EOK",}, {
    text: "Epinal",
    id: "EPL",
}, {text: "Esperance", id: "EPR",}, {text: "El Portillo/Samana", id: "EPS",}, {
    text: "Parnu",
    id: "EPU",
}, {text: "Esquel", id: "EQS",}, {text: "Erzincan", id: "ERC",}, {text: "Erfurt", id: "ERF",}, {
    text: "Errachidia",
    id: "ERH",
}, {text: "Erie", id: "ERI",}, {text: "Erechim", id: "ERM",}, {text: "Eirunepe", id: "ERN",}, {
    text: "Windhoek",
    id: "ERS",
}, {text: "Kerrville", id: "ERV",}, {text: "Newberry", id: "ERY",}, {text: "Erzurum", id: "ERZ",}, {
    text: "Ankara",
    id: "ESB",
}, {text: "Escanaba", id: "ESC",}, {text: "Eastsound", id: "ESD",}, {text: "Ensenada", id: "ESE",}, {
    text: "Alexandria",
    id: "ESF",
}, {text: "Shoreham By Sea", id: "ESH",}, {text: "Eskisehir", id: "ESK",}, {
    text: "Elista",
    id: "ESL",
}, {text: "Esmeraldas", id: "ESM",}, {text: "Easton", id: "ESN",}, {text: "El Salvador", id: "ESR",}, {
    text: "Essen",
    id: "ESS",
}, {text: "Essaouira", id: "ESU",}, {text: "Eilat", id: "ETH",}, {text: "Metz/Nancy", id: "ETZ",}, {
    text: "Eua",
    id: "EUA",
}, {text: "Eufaula", id: "EUF",}, {text: "Eugene", id: "EUG",}, {text: "Neumuenster", id: "EUM",}, {
    text: "Laayoune",
    id: "EUN",
}, {text: "St Eustatius", id: "EUX",}, {text: "Harstad-Narvik", id: "EVE",}, {
    text: "Sveg",
    id: "EVG",
}, {text: "Yerevan", id: "EVN",}, {text: "Evansville", id: "EVV",}, {
    text: "Evanston",
    id: "EVW",
}, {text: "New Bedford", id: "EWB",}, {text: "Newton", id: "EWK",}, {text: "New Bern", id: "EWN",}, {
    text: "New Jersey",
    id: "EWR",
}, {text: "Excursion Inlet", id: "EXI",}, {text: "Exmouth", id: "EXM",}, {
    text: "Exeter",
    id: "EXT",
}, {text: "Beloyarsky", id: "EYK",}, {text: "El Yopal", id: "EYP",}, {
    text: "Key West",
    id: "EYW",
}, {text: "Buenos Aires", id: "EZE",}, {text: "Elazig", id: "EZS",}, {
    text: "Faranah",
    id: "FAA",
}, {text: "Farnborough", id: "FAB",}, {text: "Faroe Islands", id: "FAE",}, {
    text: "Fort Eustis",
    id: "FAF",
}, {text: "Fairbanks", id: "FAI",}, {text: "Fajardo", id: "FAJ",}, {text: "Farsund", id: "FAN",}, {
    text: "Faro",
    id: "FAO",
}, {text: "Fargo", id: "FAR",}, {text: "Fresno", id: "FAT",}, {text: "Fakarava", id: "FAV",}, {
    text: "Fayetteville",
    id: "FAY",
}, {text: "Fonte Boa", id: "FBA",}, {text: "Faizabad", id: "FBD",}, {
    text: "Francisco Beltrao",
    id: "FBE",
}, {text: "Fort Bragg", id: "FBG",}, {text: "Fairbanks", id: "FBK",}, {
    text: "Lubumbashi",
    country: "Congo (Kinshasa)",
    id: "FBM",
}, {text: "Fort Bridger", id: "FBR",}, {text: "Friday Harbor", id: "FBS",}, {
    text: "Kalispell",
    id: "FCA",
}, {text: "Minneapolis", id: "FCM",}, {text: "Rome", id: "FCO",}, {
    text: "Colorado Springs",
    id: "FCS",
}, {text: "Forde", id: "FDE",}, {text: "Fort De France", id: "FDF",}, {
    text: "Friedrichshafen",
    id: "FDH",
}, {text: "Bandundu", country: "Congo (Kinshasa)", id: "FDU",}, {text: "Findlay", id: "FDY",}, {
    text: "Fergana",
    id: "FEG",
}, {text: "Fuerstenfeldbruck", id: "FEL",}, {text: "Fernando De Noronha", id: "FEN",}, {
    text: "Fes",
    id: "FEZ",
}, {text: "Kill Devil Hills", id: "FFA",}, {text: "Fairford", id: "FFD",}, {
    text: "Dayton",
    id: "FFO",
}, {text: "Frankfort", id: "FFT",}, {text: "Apia", id: "FGI",}, {
    text: "Fox Glacier",
    id: "FGL",
}, {text: "Fort Huachuca/Sierra Vista", id: "FHU",}, {text: "Fair Isle", id: "FIE",}, {
    text: "Fria",
    id: "FIG",
}, {text: "Kinshasa", country: "Congo (Kinshasa)", id: "FIH",}, {
    text: "Fitzroy Crossing",
    id: "FIZ",
}, {text: "Fujairah", id: "FJR",}, {text: "Karlsruhe/Baden-Baden", id: "FKB",}, {
    text: "Kisangani",
    country: "Congo (Kinshasa)",
    id: "FKI",
}, {text: "Franklin", id: "FKL",}, {text: "Fak Fak", id: "FKQ",}, {text: "Fukushima", id: "FKS",}, {
    text: "Florencia",
    id: "FLA",
}, {text: "Fond Du Lac", id: "FLD",}, {text: "Flensburg", id: "FLF",}, {
    text: "Grand Canyon",
    id: "FLG",
}, {text: "Fort Lauderdale", id: "FLL",}, {text: "Florianopolis", id: "FLN",}, {
    text: "Florence",
    id: "FLO",
}, {text: "Florence", id: "FLR",}, {text: "Flinders Island", id: "FLS",}, {
    text: "Fort Leavenworth",
    id: "FLV",
}, {text: "Flores Island (Azores)", id: "FLW",}, {text: "Formosa", id: "FMA",}, {
    text: "Fort Meade",
    id: "FME",
}, {text: "Falmouth", id: "FMH",}, {text: "Kalemie", country: "Congo (Kinshasa)", id: "FMI",}, {
    text: "Memmingen",
    id: "FMM",
}, {text: "Farmington", id: "FMN",}, {text: "Muenster/Osnabrueck", id: "FMO",}, {
    text: "Fort Myers",
    id: "FMY",
}, {text: "Freetown", id: "FNA",}, {text: "Madeira", id: "FNC",}, {text: "Fane", id: "FNE",}, {
    text: "Nimes",
    id: "FNI",
}, {text: "Pyongyang", id: "FNJ",}, {text: "Fort Collins/Loveland", id: "FNL",}, {
    text: "Funter Bay",
    id: "FNR",
}, {text: "Flint", id: "FNT",}, {text: "Oristano", id: "FNU",}, {text: "Foula", id: "FOA",}, {
    text: "Fuzhou",
    id: "FOC",
}, {text: "Fort Dodge", id: "FOD",}, {text: "Topeka", id: "FOE",}, {text: "Foggia", id: "FOG",}, {
    text: "Westhampton",
    id: "FOK",
}, {text: "Foumban", id: "FOM",}, {text: "Fortuna", id: "FON",}, {text: "Fortaleza", id: "FOR",}, {
    text: "Freeport",
    id: "FPO",
}, {text: "Frankfurt", id: "FRA",}, {text: "Franca", id: "FRC",}, {
    text: "Friday Harbor",
    id: "FRD",
}, {text: "Fera Island", id: "FRE",}, {text: "Fort Riley", id: "FRI",}, {text: "Frejus", id: "FRJ",}, {
    text: "Forli",
    id: "FRL",
}, {text: "Fort Richardson", id: "FRN",}, {text: "Floro", id: "FRO",}, {text: "Flores", id: "FRS",}, {
    text: "Bishkek",
    id: "FRU",
}, {text: "Francistown", id: "FRW",}, {text: "Figari", id: "FSC",}, {
    text: "Sioux Falls",
    id: "FSD",
}, {text: "Fort Sill", id: "FSI",}, {text: "Fort Smith", id: "FSM",}, {
    text: "St Pierre",
    id: "FSP",
}, {text: "Fort Stockton", id: "FST",}, {text: "Shizuoka", id: "FSZ",}, {
    text: "Futuna Island",
    id: "FTA",
}, {text: "El Calafate", id: "FTE",}, {text: "Fituita", id: "FTI",}, {text: "Fort Knox", id: "FTK",}, {
    text: "Tolanaro",
    id: "FTU",
}, {text: "Fort Worth", id: "FTW",}, {text: "Owando", country: "Congo (Kinshasa)", id: "FTX",}, {
    text: "Atlanta",
    id: "FTY",
}, {text: "Fuerteventura", id: "FUE",}, {text: "Fuyang", id: "FUG",}, {text: "Fukue", id: "FUJ",}, {
    text: "Fukuoka",
    id: "FUK",
}, {text: "Fullerton", id: "FUL",}, {text: "Funafuti", id: "FUN",}, {
    text: "Foshan",
    id: "FUO",
}, {text: "Futuna Island", id: "FUT",}, {text: "Fort Wayne", id: "FWA",}, {
    text: "Fort Lauderdale",
    id: "FXE",
}, {text: "Cuamba", id: "FXO",}, {text: "Faya-Largeau", id: "FYT",}, {
    text: "Fort Yukon",
    id: "FYU",
}, {text: "Fayetteville", id: "FYV",}, {text: "Filton", id: "FZO",}, {text: "Gadsden", id: "GAD",}, {
    text: "Gabes",
    id: "GAE",
}, {text: "Gafsa", id: "GAF",}, {text: "Gayndah", id: "GAH",}, {text: "Gaithersburg", id: "GAI",}, {
    text: "Yamagata",
    id: "GAJ",
}, {text: "Galena", id: "GAL",}, {text: "Gambell", id: "GAM",}, {text: "Gan Island", id: "GAN",}, {
    text: "Guantanamo",
    id: "GAO",
}, {text: "Gao", id: "GAQ",}, {text: "Garissa", id: "GAS",}, {text: "Guwahati", id: "GAU",}, {
    text: "Gamba",
    id: "GAX",
}, {text: "Gaya", id: "GAY",}, {text: "Gara-Djebilet", id: "GBB",}, {
    text: "Gaborone",
    id: "GBE",
}, {text: "Marie Galante", id: "GBJ",}, {text: "Gbangbatok", id: "GBK",}, {
    text: "San Giovanni Rotondo",
    id: "GBN",
}, {text: "Gorgon", id: "GBT",}, {text: "Great Barrier Island", id: "GBZ",}, {
    text: "Gillette",
    id: "GCC",
}, {text: "Guernsey", id: "GCI",}, {text: "Johannesburg", id: "GCJ",}, {
    text: "Garden text",
    id: "GCK",
}, {text: "Grand Cayman", id: "GCM",}, {text: "Grand Canyon", id: "GCN",}, {
    text: "Grand Canyon West",
    id: "GCW",
}, {text: "Gounda", id: "GDA",}, {text: "Gode", id: "GDE",}, {text: "Guadalajara", id: "GDL",}, {
    text: "Gdansk",
    id: "GDN",
}, {text: "Gonder", id: "GDQ",}, {text: "Grand Turk", id: "GDT",}, {text: "Glendive", id: "GDV",}, {
    text: "Gladwin",
    id: "GDW",
}, {text: "Magadan", id: "GDX",}, {text: "Gelendzhik", id: "GDZ",}, {text: "Noumea", id: "GEA",}, {
    text: "Georgetown",
    id: "GED",
}, {text: "Spokane", id: "GEG",}, {text: "Santo Angelo", id: "GEL",}, {
    text: "Georgetown",
    id: "GEO",
}, {text: "Nueva Gerona", id: "GER",}, {text: "General Santos", id: "GES",}, {
    text: "Geraldton",
    id: "GET",
}, {text: "Gallivare", id: "GEV",}, {text: "Geelong", id: "GEX",}, {text: "Griffith", id: "GFF",}, {
    text: "Grand Forks",
    id: "GFK",
}, {text: "Glens Falls", id: "GFL",}, {text: "Grafton", id: "GFN",}, {
    text: "Granville",
    id: "GFR",
}, {text: "Grootfontein", id: "GFY",}, {text: "Georgetown", id: "GGE",}, {
    text: "Longview",
    id: "GGG",
}, {text: "Garowe", id: "GGR",}, {text: "Gobernador Gregores", id: "GGS",}, {
    text: "George Town",
    id: "GGT",
}, {text: "Glasgow", id: "GGW",}, {text: "Ghardaia", id: "GHA",}, {
    text: "Governor's Harbour",
    id: "GHB",
}, {text: "Garachine", id: "GHE",}, {text: "Giebelstadt", id: "GHF",}, {
    text: "Ghat",
    id: "GHT",
}, {text: "Gualeguaychu", id: "GHU",}, {text: "Gibraltar", id: "GIB",}, {
    text: "Boigu Island",
    id: "GIC",
}, {text: "Winter Haven", id: "GIF",}, {text: "Rio De Janeiro", id: "GIG",}, {
    text: "Gilgit",
    id: "GIL",
}, {text: "Gisborne", id: "GIS",}, {text: "Sigiriya", id: "GIU",}, {text: "Jazan", id: "GIZ",}, {
    text: "Guanaja",
    id: "GJA",
}, {text: "Jijel", id: "GJL",}, {text: "Gjogur", id: "GJR",}, {
    text: "Grand Junction",
    id: "GJT",
}, {text: "Geilenkirchen", id: "GKE",}, {text: "Kooddoo Island", id: "GKK",}, {
    text: "Great Keppel Island",
    id: "GKL",
}, {text: "Gulkana", id: "GKN",}, {text: "Glasgow", id: "GLA",}, {text: "Goodland", id: "GLD",}, {
    text: "Golfito",
    id: "GLF",
}, {text: "Greenville", id: "GLH",}, {text: "Glen Innes", id: "GLI",}, {
    text: "Galcaio",
    id: "GLK",
}, {text: "Gloucester/Cheltenham", id: "GLO",}, {text: "Galveston", id: "GLS",}, {
    text: "Gladstone",
    id: "GLT",
}, {text: "Golovin", id: "GLV",}, {text: "Gemena", country: "Congo (Kinshasa)", id: "GMA",}, {
    text: "Gambela",
    id: "GMB",
}, {text: "Gomel", id: "GME",}, {text: "Gasmata", id: "GMI",}, {text: "Seoul", id: "GMP",}, {
    text: "Totegegie",
    id: "GMR",
}, {text: "San Sebastian/Gomera", id: "GMZ",}, {text: "Grodno", id: "GNA",}, {
    text: "Lyon",
    id: "GNB",
}, {text: "Grenada", id: "GND",}, {text: "Lyudao (Green Island)", id: "GNI",}, {
    text: "Guanambi",
    id: "GNM",
}, {text: "Gunungsitoli", id: "GNS",}, {text: "Grants", id: "GNT",}, {
    text: "Goodnews Bay",
    id: "GNU",
}, {text: "Gainesville", id: "GNV",}, {text: "Sanliurfa", id: "GNY",}, {text: "Ghanzi", id: "GNZ",}, {
    text: "Genoa",
    id: "GOA",
}, {text: "Goba", id: "GOB",}, {text: "Nuuk", id: "GOH",}, {text: "Goa", id: "GOI",}, {
    text: "Nizhny Novgorod",
    id: "GOJ",
}, {text: "Goma", country: "Congo (Kinshasa)", id: "GOM",}, {text: "New London", id: "GON",}, {
    text: "Gorakhpur",
    id: "GOP",
}, {text: "Golmud", id: "GOQ",}, {text: "Gore", id: "GOR",}, {text: "Gothenburg", id: "GOT",}, {
    text: "Garoua",
    id: "GOU",
}, {text: "Nhulunbuy", id: "GOV",}, {text: "Gorna Oryahovitsa", id: "GOZ",}, {
    text: "Patrai",
    id: "GPA",
}, {text: "Guarapuava", id: "GPB",}, {text: "Guapi", id: "GPI",}, {
    text: "Baltra Island",
    id: "GPS",
}, {text: "Gulfport", id: "GPT",}, {text: "Grand Rapids", id: "GPZ",}, {text: "Galion", id: "GQQ",}, {
    text: "Green Bay",
    id: "GRB",
}, {text: "Tacoma", id: "GRF",}, {text: "Grand Island", id: "GRI",}, {text: "George", id: "GRJ",}, {
    text: "Killeen",
    id: "GRK",
}, {text: "Grand Marais", id: "GRM",}, {text: "Girona", id: "GRO",}, {text: "Gurupi", id: "GRP",}, {
    text: "Groningen",
    id: "GRQ",
}, {text: "Grand Rapids", id: "GRR",}, {text: "Grosseto", id: "GRS",}, {text: "Sao Paulo", id: "GRU",}, {
    text: "Grozny",
    id: "GRV",
}, {text: "Graciosa Island (Azores)", id: "GRW",}, {text: "Granada", id: "GRX",}, {
    text: "Grimsey",
    id: "GRY",
}, {text: "Graz", id: "GRZ",}, {text: "Goldsboro", id: "GSB",}, {text: "Gothenburg", id: "GSE",}, {
    text: "Gheshm",
    id: "GSM",
}, {text: "Greensboro/High Point", id: "GSO",}, {text: "Greenville", id: "GSP",}, {
    text: "Shark el-Owainat",
    id: "GSQ",
}, {text: "Sabi Sabi", id: "GSS",}, {text: "Gustavus", id: "GST",}, {
    text: "Gatokae",
    id: "GTA",
}, {text: "Groote Eylandt", id: "GTE",}, {text: "Great Falls", id: "GTF",}, {
    text: "Guettin",
    id: "GTI",
}, {text: "Mount Cook", id: "GTN",}, {text: "Gorontalo", id: "GTO",}, {
    text: "Columbus",
    id: "GTR",
}, {text: "Guatemala text", id: "GUA",}, {text: "Guerrero Negro", id: "GUB",}, {
    text: "Gunnison",
    id: "GUC",
}, {text: "Guiria", id: "GUI",}, {text: "Goulburn", id: "GUL",}, {text: "Guam", id: "GUM",}, {
    text: "Gallup",
    id: "GUP",
}, {text: "Guanare", id: "GUQ",}, {text: "Alotau", id: "GUR",}, {text: "Peru", id: "GUS",}, {
    text: "Guetersloh",
    id: "GUT",
}, {text: "Atyrau", id: "GUW",}, {text: "Geneva", id: "GVA",}, {
    text: "Gainesville",
    id: "GVL",
}, {text: "Governador Valadares", id: "GVR",}, {text: "Greenville", id: "GVT",}, {
    text: "Gavle",
    id: "GVX",
}, {text: "Gwadar", id: "GWD",}, {text: "Gweru", id: "GWE",}, {text: "Gwalior", id: "GWL",}, {
    text: "Greenwood",
    id: "GWO",
}, {text: "Westerland", id: "GWT",}, {text: "Galway", id: "GWY",}, {text: "Sayun", id: "GXF",}, {
    text: "Negage",
    id: "GXG",
}, {text: "Xiahe", id: "GXH",}, {text: "Coyhaique", id: "GXQ",}, {text: "Guayaramerin", id: "GYA",}, {
    text: "Baku",
    id: "GYD",
}, {text: "Guayaquil", id: "GYE",}, {text: "Gisenyi", id: "GYI",}, {text: "Argyle", id: "GYL",}, {
    text: "Guaymas",
    id: "GYM",
}, {text: "Goiania", id: "GYN",}, {text: "Guang Yuan", id: "GYS",}, {text: "Guyuan Shi", id: "GYU",}, {
    text: "Gary",
    id: "GYY",
}, {text: "Gaza text", id: "GZA",}, {text: "Gozo", id: "GZM",}, {text: "Gizo", id: "GZO",}, {
    text: "Gazipasa",
    id: "GZP",
}, {text: "Gaziantep", id: "GZT",}, {text: "Hasvik", id: "HAA",}, {text: "Hachijojima", id: "HAC",}, {
    text: "Halmstad",
    id: "HAD",
}, {text: "Havasupai", id: "HAE",}, {text: "Moroni", id: "HAH",}, {text: "Hannover", id: "HAJ",}, {
    text: "Haikou",
    id: "HAK",
}, {text: "Hamburg", id: "HAM",}, {text: "Hanoi", id: "HAN",}, {text: "Hanimaadhoo Island", id: "HAQ",}, {
    text: "Hail",
    id: "HAS",
}, {text: "Haugesund", id: "HAU",}, {text: "Havana", id: "HAV",}, {text: "Hobart", id: "HBA",}, {
    text: "Alexandria",
    id: "HBE",
}, {text: "Hattiesburg", id: "HBG",}, {text: "Hobart", id: "HBR",}, {text: "Hambantota", id: "HBT",}, {
    text: "Hubli",
    id: "HBX",
}, {text: "Hudson", id: "HCC",}, {text: "Hengchun", id: "HCN",}, {text: "Halls Creek", id: "HCQ",}, {
    text: "Holy Cross",
    id: "HCR",
}, {text: "Heidelberg", id: "HDB",}, {text: "Hyderabad", id: "HDD",}, {
    text: "Heringsdorf",
    id: "HDF",
}, {text: "Handan", id: "HDG",}, {text: "Oahu", id: "HDH",}, {text: "Hamadan", id: "HDM",}, {
    text: "Hayden",
    id: "HDN",
}, {text: "Hoedspruit", id: "HDS",}, {text: "Hat Yai", id: "HDY",}, {text: "Herat", id: "HEA",}, {
    text: "Heho",
    id: "HEH",
}, {text: "Heide-Buesum", id: "HEI",}, {text: "Heihe", id: "HEK",}, {text: "Helsinki", id: "HEL",}, {
    text: "Helsinki",
    id: "HEM",
}, {text: "Hendon", id: "HEN",}, {text: "Irakleion", id: "HER",}, {text: "Hohhot", id: "HET",}, {
    text: "Haifa",
    id: "HFA",
}, {text: "Hartford", id: "HFD",}, {text: "Hefei", id: "HFE",}, {text: "Hornafjordur", id: "HFN",}, {
    text: "Hagfors",
    id: "HFS",
}, {text: "Hammerfest", id: "HFT",}, {text: "Hargeisa", id: "HGA",}, {text: "Hughenden", id: "HGD",}, {
    text: "Hangzhou",
    id: "HGH",
}, {text: "Helgoland", id: "HGL",}, {text: "Mae Hong Son", id: "HGN",}, {
    text: "Korhogo",
    country: "Cote d'Ivoire",
    id: "HGO",
}, {text: "Hagerstown", id: "HGR",}, {text: "Freetown", id: "HGS",}, {
    text: "Mount Hagen",
    id: "HGU",
}, {text: "Hilton Head", id: "HHH",}, {text: "Wahiawa", id: "HHI",}, {text: "Frankfurt", id: "HHN",}, {
    text: "Hua Hin",
    id: "HHQ",
}, {text: "Hawthorne", id: "HHR",}, {text: "Huai'an", id: "HIA",}, {text: "Hibbing", id: "HIB",}, {
    text: "Horn Island",
    id: "HID",
}, {text: "Ogden", id: "HIF",}, {text: "Lake Havasu text", id: "HII",}, {
    text: "Hiroshima",
    id: "HIJ",
}, {text: "Shillavo", id: "HIL",}, {text: "Jinju", id: "HIN",}, {text: "Hillsboro", id: "HIO",}, {
    text: "Honiara",
    id: "HIR",
}, {text: "Hayman Island", id: "HIS",}, {text: "Hiroshima", id: "HIW",}, {
    text: "Huai Hua",
    id: "HJJ",
}, {text: "Khajuraho", id: "HJR",}, {text: "Healy Lake", id: "HKB",}, {
    text: "Hakodate",
    id: "HKD",
}, {text: "Hong Kong", id: "HKG",}, {text: "Hokitika", id: "HKK",}, {text: "Hoskins", id: "HKN",}, {
    text: "Phuket",
    id: "HKT",
}, {text: "Haskovo", id: "HKV",}, {text: "Hickory", id: "HKY",}, {text: "Johannesburg", id: "HLA",}, {
    text: "Hailar",
    id: "HLD",
}, {text: "Hultsfred", id: "HLF",}, {text: "Wheeling", id: "HLG",}, {text: "Ulanhot", id: "HLH",}, {
    text: "Helena",
    id: "HLN",
}, {text: "Jakarta", id: "HLP",}, {text: "Killeen", id: "HLR",}, {text: "Hamilton", id: "HLT",}, {
    text: "Hamilton",
    id: "HLZ",
}, {text: "KHANTY-MANSIYSK", id: "HMA",}, {text: "Sohag", id: "HMB",}, {
    text: "Hassi Messaoud",
    id: "HME",
}, {text: "Hami", id: "HMI",}, {text: "Khmelnytskyi", id: "HMJ",}, {
    text: "Alamogordo",
    id: "HMN",
}, {text: "Hermosillo", id: "HMO",}, {text: "Hamar", id: "HMR",}, {text: "Hemavan", id: "HMV",}, {
    text: "Hanamaki",
    id: "HNA",
}, {text: "Tokyo", id: "HND",}, {text: "Hoonah", id: "HNH",}, {text: "Honolulu", id: "HNL",}, {
    text: "Hana",
    id: "HNM",
}, {text: "Haines", id: "HNS",}, {text: "Hola", id: "HOA",}, {text: "Hobbs", id: "HOB",}, {
    text: "Hodeidah",
    id: "HOD",
}, {text: "Hofuf", id: "HOF",}, {text: "Holguin", id: "HOG",}, {text: "Hao", id: "HOI",}, {
    text: "Lajamanu",
    id: "HOK",
}, {text: "Homer", id: "HOM",}, {text: "Huron", id: "HON",}, {text: "Hopkinsville", id: "HOP",}, {
    text: "Hof",
    id: "HOQ",
}, {text: "Horta (Azores)", id: "HOR",}, {text: "Hot Springs", id: "HOT",}, {
    text: "Houston",
    id: "HOU",
}, {text: "Orsta-Volda", id: "HOV",}, {text: "Ha'apai", id: "HPA",}, {
    text: "Hooper Bay",
    id: "HPB",
}, {text: "Haiphong", id: "HPH",}, {text: "Westchester County", id: "HPN",}, {
    text: "Hoquiam",
    id: "HQM",
}, {text: "Harbin", id: "HRB",}, {text: "Harare", id: "HRE",}, {text: "Hurghada", id: "HRG",}, {
    text: "Hambantota",
    id: "HRI",
}, {text: "Kharkiv", id: "HRK",}, {text: "Harlingen", id: "HRL",}, {
    text: "Hassi R'Mel",
    id: "HRM",
}, {text: "Heron Island", id: "HRN",}, {text: "Harrison", id: "HRO",}, {text: "Harrogate", id: "HRT",}, {
    text: "Saga",
    id: "HSG",
}, {text: "Las Vegas", id: "HSH",}, {text: "Huesca", id: "HSK",}, {text: "Huslia", id: "HSL",}, {
    text: "Zhoushan",
    id: "HSN",
}, {text: "Homestead", id: "HST",}, {text: "Huntsville", id: "HSV",}, {text: "Chita", id: "HTA",}, {
    text: "Hatanga",
    id: "HTG",
}, {text: "Hamilton Island", id: "HTI",}, {text: "Houghton", id: "HTL",}, {
    text: "Hotan",
    id: "HTN",
}, {text: "Huntington", id: "HTS",}, {text: "Hatay", id: "HTY",}, {text: "Huntsville", id: "HUA",}, {
    text: "Humera",
    id: "HUE",
}, {text: "Terre Haute", id: "HUF",}, {text: "Huahine", id: "HUH",}, {text: "Hue", id: "HUI",}, {
    text: "Houlton",
    id: "HUL",
}, {text: "Hualien", id: "HUN",}, {text: "Hughes", id: "HUS",}, {text: "Hutchinson", id: "HUT",}, {
    text: "Huanuco",
    id: "HUU",
}, {text: "Hudiksvall", id: "HUV",}, {text: "Humaita", id: "HUW",}, {text: "Huatulco", id: "HUX",}, {
    text: "Humberside",
    id: "HUY",
}, {text: "Huizhou", id: "HUZ",}, {text: "Analalava", id: "HVA",}, {text: "Hervey Bay", id: "HVB",}, {
    text: "Khovd",
    id: "HVD",
}, {text: "Honningsvag", id: "HVG",}, {text: "New Haven", id: "HVN",}, {text: "Havre", id: "HVR",}, {
    text: "Hayward",
    id: "HWD",
}, {text: "Hollywood", id: "HWO",}, {text: "Delingha", id: "HXD",}, {text: "Hyannis", id: "HYA",}, {
    text: "Hyderabad",
    id: "HYD",
}, {text: "Hydaburg", id: "HYG",}, {text: "Hollis", id: "HYL",}, {text: "Huangyan", id: "HYN",}, {
    text: "Hays",
    id: "HYS",
}, {text: "Hyvinkaa", id: "HYV",}, {text: "Hanzhong", id: "HZG",}, {text: "Liping text", id: "HZH",}, {
    text: "Husavik",
    id: "HZK",
}, {text: "Hazleton", id: "HZL",}, {text: "Igarka", id: "IAA",}, {text: "Wichita", id: "IAB",}, {
    text: "Washington",
    id: "IAD",
}, {text: "Niagara Falls", id: "IAG",}, {text: "Houston", id: "IAH",}, {text: "In Amenas", id: "IAM",}, {
    text: "Kiana",
    id: "IAN",
}, {text: "Del Carmen", id: "IAO",}, {text: "Yaroslavl", id: "IAR",}, {text: "Iasi", id: "IAS",}, {
    text: "Ibadan",
    id: "IBA",
}, {text: "Ibague", id: "IBE",}, {text: "Indigo Bay Lodge", id: "IBL",}, {text: "Ibaraki", id: "IBR",}, {
    text: "Ibiza",
    id: "IBZ",
}, {text: "Cicia Island", id: "ICI",}, {text: "Nieuw Nickerie", id: "ICK",}, {
    text: "Seoul",
    id: "ICN",
}, {text: "Wichita", id: "ICT",}, {text: "Icy Bay", id: "ICY",}, {text: "Idaho Falls", id: "IDA",}, {
    text: "Indore",
    id: "IDR",
}, {text: "Ile 'd' Yeu", id: "IDY",}, {text: "Zielona Gora", id: "IEG",}, {
    text: "Kiev",
    id: "IEV",
}, {text: "Isafjordur", id: "IFJ",}, {text: "Innisfail", id: "IFL",}, {
    text: "Esfahan",
    id: "IFN",
}, {text: "Ivano-FrankIvsk", id: "IFO",}, {text: "Bullhead text", id: "IFP",}, {
    text: "Inagua",
    id: "IGA",
}, {text: "Ingeniero Jacobacci", id: "IGB",}, {text: "Igdir", id: "IGD",}, {
    text: "Igiugig",
    id: "IGG",
}, {text: "Izmir", id: "IGL",}, {text: "Kingman", id: "IGM",}, {text: "Iguazu", id: "IGR",}, {
    text: "Ingolstadt",
    id: "IGS",
}, {text: "Foz do Iguacu", id: "IGU",}, {text: "Ihu", id: "IHU",}, {text: "Inishmaan", id: "IIA",}, {
    text: "Ilaam",
    id: "IIL",
}, {text: "Nissan Island", id: "IIS",}, {text: "Izhevsk", id: "IJK",}, {text: "Tehran", id: "IKA",}, {
    text: "Iki",
    id: "IKI",
}, {text: "Kankakee", id: "IKK",}, {text: "Nikolski", id: "IKO",}, {text: "Tiksi", id: "IKS",}, {
    text: "Irkutsk",
    id: "IKT",
}, {text: "Lleida", id: "ILD",}, {text: "Ilford", id: "ILF",}, {text: "Wilmington", id: "ILG",}, {
    text: "Iliamna",
    id: "ILI",
}, {text: "Wilmington", id: "ILM",}, {text: "Wilmington", id: "ILN",}, {
    text: "Iloilo",
    id: "ILO",
}, {text: "Ile des Pins", id: "ILP",}, {text: "Ilorin", id: "ILR",}, {text: "Kilaguni", id: "ILU",}, {
    text: "Islay",
    id: "ILY",
}, {text: "Zilina", id: "ILZ",}, {text: "Imbaimadai", id: "IMB",}, {text: "Imphal", id: "IMF",}, {
    text: "Ine Island",
    id: "IMI",
}, {text: "Simikot", id: "IMK",}, {text: "Immokalee", id: "IMM",}, {
    text: "Imperatriz",
    id: "IMP",
}, {text: "Iron Mountain", id: "IMT",}, {text: "Yinchuan", id: "INC",}, {
    text: "Indianapolis",
    id: "IND",
}, {text: "Inhambane", id: "INH",}, {text: "Nis", id: "INI",}, {text: "Injune", id: "INJ",}, {
    text: "Wink",
    id: "INK",
}, {text: "International Falls", id: "INL",}, {text: "Innsbruck", id: "INN",}, {
    text: "Inongo",
    country: "Congo (Kinshasa)",
    id: "INO",
}, {text: "Inisheer", id: "INQ",}, {text: "Indian Springs", id: "INS",}, {
    text: "Winston-Salem",
    id: "INT",
}, {text: "Nauru Island", id: "INU",}, {text: "Inverness", id: "INV",}, {text: "Winslow", id: "INW",}, {
    text: "Inyati",
    id: "INY",
}, {text: "In Salah", id: "INZ",}, {text: "Ioannina", id: "IOA",}, {
    text: "Isle Of Man",
    id: "IOM",
}, {text: "Inishmore", id: "IOR",}, {text: "Ilheus", id: "IOS",}, {text: "Iowa text", id: "IOW",}, {
    text: "Ipota",
    id: "IPA",
}, {text: "Easter Island", id: "IPC",}, {text: "Ipoh", id: "IPH",}, {text: "Ipiales", id: "IPI",}, {
    text: "El Centro",
    id: "IPL",
}, {text: "Ipatinga", id: "IPN",}, {text: "Williamsport", id: "IPT",}, {text: "Qiemo", id: "IQM",}, {
    text: "Qingyang",
    id: "IQN",
}, {text: "Iquique", id: "IQQ",}, {text: "Iquitos", id: "IQT",}, {text: "Kirakira", id: "IRA",}, {
    text: "Circle",
    id: "IRC",
}, {text: "Ishurdi", id: "IRD",}, {text: "Lockhart River", id: "IRG",}, {text: "Iringa", id: "IRI",}, {
    text: "La Rioja",
    id: "IRJ",
}, {text: "Kirksville", id: "IRK",}, {text: "Isiro", country: "Congo (Kinshasa)", id: "IRP",}, {
    text: "Iranamadu",
    id: "IRU",
}, {text: "Santa Isabel Rio Negro", id: "IRZ",}, {text: "Mount Isa", id: "ISA",}, {
    text: "Islamabad",
    id: "ISB",
}, {text: "Isles Of Scilly", id: "ISC",}, {text: "Isparta", id: "ISE",}, {
    text: "Ishigaki",
    id: "ISG",
}, {text: "Isla Mujeres", id: "ISJ",}, {text: "Nasik", id: "ISK",}, {text: "Kissimmee", id: "ISM",}, {
    text: "Williston",
    id: "ISN",
}, {text: "Kinston", id: "ISO",}, {text: "Islip", id: "ISP",}, {text: "Istanbul", id: "IST",}, {
    text: "Sulaymaniyah",
    id: "ISU",
}, {text: "Wisconsin Rapids", id: "ISW",}, {text: "Itaituba", id: "ITB",}, {
    text: "Ithaca",
    id: "ITH",
}, {text: "Itokama", id: "ITK",}, {text: "Osaka", id: "ITM",}, {text: "Hilo", id: "ITO",}, {
    text: "Niue Island",
    id: "IUE",
}, {text: "Ambanja", id: "IVA",}, {text: "Invercargill", id: "IVC",}, {text: "Ivalo", id: "IVL",}, {
    text: "Inverell",
    id: "IVR",
}, {text: "Ivanovo", id: "IWA",}, {text: "Ironwood", id: "IWD",}, {
    text: "Masuda",
    id: "IWJ",
}, {text: "Iwoto (Iwo Jima)", id: "IWO",}, {text: "Houston", id: "IWS",}, {
    text: "Agartala",
    id: "IXA",
}, {text: "Bagdogra", id: "IXB",}, {text: "Chandigarh", id: "IXC",}, {
    text: "Allahabad",
    id: "IXD",
}, {text: "Mangalore", id: "IXE",}, {text: "Belgaum", id: "IXG",}, {text: "Kailashahar", id: "IXH",}, {
    text: "Lilabari",
    id: "IXI",
}, {text: "Jammu", id: "IXJ",}, {text: "Keshod", id: "IXK",}, {text: "Leh", id: "IXL",}, {
    text: "Madurai",
    id: "IXM",
}, {text: "Pathankot", id: "IXP",}, {text: "Ranchi", id: "IXR",}, {text: "Silchar", id: "IXS",}, {
    text: "Aurangabad",
    id: "IXU",
}, {text: "Jamshedpur", id: "IXW",}, {text: "Kandla", id: "IXY",}, {text: "Port Blair", id: "IXZ",}, {
    text: "Inyokern",
    id: "IYK",
}, {text: "Juiz De Fora", id: "IZA",}, {text: "Izumo", id: "IZO",}, {text: "Jalalabad", id: "JAA",}, {
    text: "Jabiru",
    id: "JAB",
}, {text: "Jackson", id: "JAC",}, {text: "Perth", id: "JAD",}, {text: "Jaffna", id: "JAF",}, {
    text: "Jaipur",
    id: "JAI",
}, {text: "Jalapa", id: "JAL",}, {text: "Jackson", id: "JAN",}, {
    text: "Jacquinot Bay",
    id: "JAQ",
}, {text: "Jabot Island", id: "JAT",}, {text: "Ilulissat", id: "JAV",}, {
    text: "Jacksonville",
    id: "JAX",
}, {text: "Higuero", id: "JBQ",}, {text: "Jonesboro", id: "JBR",}, {text: "Cannes", id: "JCA",}, {
    text: "Joacaba",
    id: "JCB",
}, {text: "Qasigiannguit", id: "JCH",}, {text: "Kansas text", id: "JCI",}, {
    text: "Julia Creek",
    id: "JCK",
}, {text: "Comino", id: "JCO",}, {text: "Ceuta", id: "JCU",}, {text: "Juiz De Fora", id: "JDF",}, {
    text: "Jodhpur",
    id: "JDH",
}, {text: "Juazeiro Do Norte", id: "JDO",}, {text: "Sao Joao Del Rei", id: "JDR",}, {
    text: "Jingdezhen",
    id: "JDZ",
}, {text: "Jeddah", id: "JED",}, {text: "Jeremie", id: "JEE",}, {text: "Jefferson text", id: "JEF",}, {
    text: "Aasiaat",
    id: "JEG",
}, {text: "Jeh Island", id: "JEJ",}, {text: "Jersey", id: "JER",}, {text: "New York", id: "JFK",}, {
    text: "Paamiut",
    id: "JFR",
}, {text: "Jamnagar", id: "JGA",}, {text: "Jia Ge Da Qi", id: "JGD",}, {
    text: "Jiayuguan",
    id: "JGN",
}, {text: "Qeqertarsuaq", id: "JGO",}, {text: "Kangilinnguit", id: "JGR",}, {
    text: "Ji An",
    id: "JGS",
}, {text: "Johor Bahru", id: "JHB",}, {text: "Angelholm/Helsingborg", id: "JHE",}, {
    text: "Jinghong",
    id: "JHG",
}, {text: "Fort Mackay", id: "JHL",}, {text: "Kapalua", id: "JHM",}, {text: "Sisimiut", id: "JHS",}, {
    text: "Jamestown",
    id: "JHW",
}, {text: "Djibouti", id: "JIB",}, {text: "Jijiga", id: "JIJ",}, {text: "Ikaria Island", id: "JIK",}, {
    text: "Jimma",
    id: "JIM",
}, {text: "Qianjiang Shi", id: "JIQ",}, {text: "Jiujiang", id: "JIU",}, {text: "Jiwani", id: "JIW",}, {
    text: "Juanjui",
    id: "JJI",
}, {text: "Jinjiang", id: "JJN",}, {text: "Qaqortoq", id: "JJU",}, {text: "Jonkoping", id: "JKG",}, {
    text: "Chios",
    id: "JKH",
}, {text: "Kalymnos Island", id: "JKL",}, {all: !0, text: "Jakarta", id: "JKT",}, {
    text: "Landskrona",
    id: "JLD",
}, {text: "Joplin", id: "JLN",}, {text: "Jabalpur", id: "JLR",}, {text: "Mykonos", id: "JMK",}, {
    text: "Jomsom",
    id: "JMO",
}, {text: "Jamestown", id: "JMS",}, {text: "Jiamusi", id: "JMU",}, {
    text: "Freetown",
    id: "JMY",
}, {text: "Johannesburg", id: "JNB",}, {text: "Jining", id: "JNG",}, {text: "Nanortalik", id: "JNN",}, {
    text: "Narsaq",
    id: "JNS",
}, {text: "Juneau", id: "JNU",}, {text: "Naxos", id: "JNX",}, {text: "Jinzhou", id: "JNZ",}, {
    text: "Joensuu",
    id: "JOE",
}, {text: "Yogyakarta", id: "JOG",}, {text: "Joinville", id: "JOI",}, {text: "Yoshkar-Ola", id: "JOK",}, {
    text: "Jolo",
    id: "JOL",
}, {text: "Jos", id: "JOS",}, {text: "Joliet", id: "JOT",}, {text: "Joao Pessoa", id: "JPA",}, {
    text: "Ji-Parana",
    id: "JPR",
}, {text: "Paris", id: "JPU",}, {text: "Qaarsut", id: "JQA",}, {text: "Jaque", id: "JQE",}, {
    text: "New York",
    id: "JRA",
}, {text: "New York", id: "JRB",}, {text: "Jorhat", id: "JRH",}, {text: "Kilimanjaro", id: "JRO",}, {
    text: "Jaisalmer",
    id: "JSA",
}, {text: "Siteia", id: "JSH",}, {text: "Skiathos", id: "JSI",}, {
    text: "Jose San de Martin",
    id: "JSM",
}, {text: "Jessore", id: "JSR",}, {text: "Johnstown", id: "JST",}, {
    text: "Maniitsoq",
    id: "JSU",
}, {text: "Syros Island", id: "JSY",}, {text: "Bauru", id: "JTC",}, {
    text: "Thira",
    id: "JTR",
}, {text: "Astypalaia Island", id: "JTY",}, {text: "Juba", id: "JUB",}, {text: "Juist", id: "JUI",}, {
    text: "Jujuy",
    id: "JUJ",
}, {text: "Juliaca", id: "JUL",}, {text: "Jumla", id: "JUM",}, {text: "Upernavik", id: "JUV",}, {
    text: "Quzhou",
    id: "JUZ",
}, {text: "Ankavandra", id: "JVA",}, {text: "Janesville", id: "JVL",}, {text: "Jwaneng", id: "JWA",}, {
    text: "Jixi Shi",
    id: "JXA",
}, {text: "Jackson", id: "JXN",}, {text: "Jyvaskyla", id: "JYV",}, {text: "Song Pan", id: "JZH",}, {
    text: "Kariba",
    id: "KAB",
}, {text: "Kamishly", id: "KAC",}, {text: "Kaduna", id: "KAD",}, {text: "Kake", id: "KAE",}, {
    text: "Gangneung",
    id: "KAG",
}, {text: "Kaieteur", id: "KAI",}, {text: "Kajaani", id: "KAJ",}, {text: "Kaltag", id: "KAL",}, {
    text: "Kano",
    id: "KAN",
}, {text: "Kuusamo", id: "KAO",}, {text: "Kamarang", id: "KAR",}, {text: "Kaitaia", id: "KAT",}, {
    text: "Kauhava",
    id: "KAU",
}, {text: "Kawthaung", id: "KAW",}, {text: "Kalbarri", id: "KAX",}, {text: "Birch Creek", id: "KBC",}, {
    text: "Kabul",
    id: "KBL",
}, {text: "Kiev", id: "KBP",}, {text: "Kota Bharu", id: "KBR",}, {text: "Bo", id: "KBS",}, {
    text: "Kaben",
    id: "KBT",
}, {text: "Kotabaru", id: "KBU",}, {text: "Krabi", id: "KBV",}, {text: "Chignik", id: "KBW",}, {
    text: "Streaky Bay",
    id: "KBY",
}, {text: "Kaikoura", id: "KBZ",}, {text: "Kuqa", id: "KCA",}, {text: "Coffman Cove", id: "KCC",}, {
    text: "Kuching",
    id: "KCH",
}, {text: "Chignik", id: "KCL",}, {text: "Kahramanmaras", id: "KCM",}, {text: "Chignik", id: "KCQ",}, {
    text: "Koggala",
    id: "KCT",
}, {text: "Kochi", id: "KCZ",}, {text: "Khuzdar", id: "KDD",}, {text: "Kandahar", id: "KDH",}, {
    text: "Kendari",
    id: "KDI",
}, {text: "Kardla", id: "KDL",}, {text: "Kaadedhdhoo", id: "KDM",}, {
    text: "Kadhdhoo Island",
    id: "KDO",
}, {text: "Kandrian", id: "KDR",}, {text: "Skardu", id: "KDU",}, {
    text: "Kadavu Island",
    id: "KDV",
}, {text: "Katugastota", id: "KDZ",}, {text: "Kaedi", id: "KED",}, {
    text: "Reykjavik",
    id: "KEF",
}, {text: "Kenmore Air Harbor", id: "KEH",}, {text: "Kemerovo", id: "KEJ",}, {text: "Ekwok", id: "KEK",}, {
    text: "Kiel",
    id: "KEL",
}, {text: "Kemi/Tornio", id: "KEM",}, {text: "Kenema", id: "KEN",}, {text: "Nepalganj", id: "KEP",}, {
    text: "Kerman",
    id: "KER",
}, {text: "Kentung", id: "KET",}, {text: "Kuorevesi", id: "KEV",}, {text: "Keewaywin", id: "KEW",}, {
    text: "Kanabea",
    id: "KEX",
}, {text: "Kericho", id: "KEY",}, {text: "Kelaniya", id: "KEZ",}, {text: "Kiffa", id: "KFA",}, {
    text: "Cloudbreak",
    id: "KFE",
}, {text: "Kalkgurung", id: "KFG",}, {text: "False Pass", id: "KFP",}, {
    text: "Kastamonu",
    id: "KFS",
}, {text: "Kananga", country: "Congo (Kinshasa)", id: "KGA",}, {text: "Kingscote", id: "KGC",}, {
    text: "Kaliningrad",
    id: "KGD",
}, {text: "Kagau", id: "KGE",}, {text: "Karaganda", id: "KGF",}, {
    text: "Kedougou",
    id: "KGG",
}, {text: "Kalgoorlie-Boulder", id: "KGI",}, {text: "Karonga", id: "KGJ",}, {
    text: "New Koliganek",
    id: "KGK",
}, {text: "Kigali", id: "KGL",}, {text: "Kasongo Lunda", country: "Congo (Kinshasa)", id: "KGN",}, {
    text: "Kirovohrad",
    id: "KGO",
}, {text: "Kogalym", id: "KGP",}, {text: "Kos", id: "KGS",}, {text: "Kangding", id: "KGT",}, {
    text: "Grayling",
    id: "KGX",
}, {text: "Kerch", id: "KHC",}, {text: "Khorramabad", id: "KHD",}, {text: "Kherson", id: "KHE",}, {
    text: "Kashi",
    id: "KHG",
}, {text: "Kaohsiung", id: "KHH",}, {text: "Karachi", id: "KHI",}, {text: "Khamtis", id: "KHM",}, {
    text: "Nanchang",
    id: "KHN",
}, {text: "Khasab", id: "KHS",}, {text: "Khost", id: "KHT",}, {
    text: "Khabarovsk",
    id: "KHV",
}, {text: "Khwai River Lodge", id: "KHW",}, {text: "Kaiapit", id: "KIA",}, {
    text: "Kristianstad",
    id: "KID",
}, {text: "Kieta", id: "KIE",}, {text: "Kingfisher Lake", id: "KIF",}, {
    text: "Kish Island",
    id: "KIH",
}, {text: "Niigata", id: "KIJ",}, {text: "Kirkuk", id: "KIK",}, {text: "Kimberley", id: "KIM",}, {
    text: "Kingston",
    id: "KIN",
}, {text: "Kili Island", id: "KIO",}, {text: "Wichita Falls", id: "KIP",}, {text: "Kerry", id: "KIR",}, {
    text: "Kisumu",
    id: "KIS",
}, {text: "Kythira", id: "KIT",}, {text: "Chisinau", id: "KIV",}, {text: "Kitwe", id: "KIW",}, {
    text: "Osaka",
    id: "KIX",
}, {text: "Krasnoyarsk", id: "KJA",}, {text: "Buerjin text", id: "KJI",}, {text: "Kerama", id: "KJP",}, {
    text: "Koyuk",
    id: "KKA",
}, {text: "Kitui Bay", id: "KKB",}, {text: "Khon Kaen", id: "KKC",}, {text: "Kokoda", id: "KKD",}, {
    text: "Kerikeri",
    id: "KKE",
}, {text: "Kongiganak", id: "KKH",}, {text: "Kitakyushu", id: "KKJ",}, {text: "Kirkenes", id: "KKN",}, {
    text: "Kaukura",
    id: "KKR",
}, {text: "Kikwit", country: "Congo (Kinshasa)", id: "KKW",}, {text: "Kikai", id: "KKX",}, {
    text: "Kaolack",
    id: "KLC",
}, {text: "Tver", id: "KLD",}, {text: "Kaluga", id: "KLF",}, {text: "Kalskag", id: "KLG",}, {
    text: "Kolhapur",
    id: "KLH",
}, {text: "Kalokol", id: "KLK",}, {text: "Levelock", id: "KLL",}, {text: "Larsen Bay", id: "KLN",}, {
    text: "Kalibo",
    id: "KLO",
}, {text: "Kalmar", id: "KLR",}, {text: "Kelso", id: "KLS",}, {text: "Klagenfurt", id: "KLU",}, {
    text: "Karlovy Vary",
    id: "KLV",
}, {text: "Klawock", id: "KLW",}, {text: "Kalamata", id: "KLX",}, {text: "Kleinsee", id: "KLZ",}, {
    text: "Kerema",
    id: "KMA",
}, {text: "Cyangugu", id: "KME",}, {text: "Kunming", id: "KMG",}, {text: "Miyazaki", id: "KMI",}, {
    text: "Kumamoto",
    id: "KMJ",
}, {text: "Kamina", country: "Congo (Kinshasa)", id: "KMN",}, {text: "Manokotak", id: "KMO",}, {
    text: "Keetmanshoop",
    id: "KMP",
}, {text: "Komatsu", id: "KMQ",}, {text: "Kumasi", id: "KMS",}, {text: "Kisimayu", id: "KMU",}, {
    text: "Kalemyo",
    id: "KMV",
}, {text: "Kostroma", id: "KMW",}, {text: "Moser Bay", id: "KMY",}, {
    text: "Kindu",
    country: "Congo (Kinshasa)",
    id: "KND",
}, {text: "Kings Lynn", id: "KNF",}, {text: "Utarom", id: "KNG",}, {text: "Kinmen", id: "KNH",}, {
    text: "Kankan",
    id: "KNN",
}, {text: "Medan", id: "KNO",}, {text: "Capanda", id: "KNP",}, {text: "Kone", id: "KNQ",}, {
    text: "King Island",
    id: "KNS",
}, {text: "Kanpur", id: "KNU",}, {text: "New Stuyahok", id: "KNW",}, {text: "Kununurra", id: "KNX",}, {
    text: "Kona",
    id: "KOA",
}, {text: "Koumac", id: "KOC",}, {text: "Kupang", id: "KOE",}, {text: "Kirkwall", id: "KOI",}, {
    text: "Kagoshima",
    id: "KOJ",
}, {text: "Kokkola/Pietarsaari", id: "KOK",}, {text: "Kon Tum", id: "KON",}, {
    text: "Nakhon Phanom",
    id: "KOP",
}, {text: "Sihanoukville", id: "KOS",}, {text: "Kotlik", id: "KOT",}, {
    text: "Koulamoutou",
    id: "KOU",
}, {text: "Kokshetau", id: "KOV",}, {text: "Ganzhou", id: "KOW",}, {text: "Kokonao", id: "KOX",}, {
    text: "Olga Bay",
    id: "KOY",
}, {text: "Ouzinkie", id: "KOZ",}, {text: "Point Baker", id: "KPB",}, {
    text: "Port Clarence",
    id: "KPC",
}, {text: "Kipnuk", id: "KPN",}, {text: "Pohang", id: "KPO",}, {text: "Port Williams", id: "KPR",}, {
    text: "Perryville",
    id: "KPV",
}, {text: "Port Bailey", id: "KPY",}, {text: "Akutan", id: "KQA",}, {text: "Karumba", id: "KRB",}, {
    text: "Kramfors",
    id: "KRF",
}, {text: "Redhill", id: "KRH",}, {text: "Kikori", id: "KRI",}, {text: "Krakow", id: "KRK",}, {
    text: "Korla",
    id: "KRL",
}, {text: "Kiruna", id: "KRN",}, {text: "Kurgan", id: "KRO",}, {text: "Karup", id: "KRP",}, {
    text: "Krasnodar",
    id: "KRR",
}, {text: "Kristiansand", id: "KRS",}, {text: "Khartoum", id: "KRT",}, {
    text: "Kerio Valley",
    id: "KRV",
}, {text: "Turkmenbashi", id: "KRW",}, {text: "Karamay", id: "KRY",}, {
    text: "Kiri",
    country: "Congo (Kinshasa)",
    id: "KRZ",
}, {text: "Kosrae", id: "KSA",}, {text: "Kosice", id: "KSC",}, {text: "Karlstad", id: "KSD",}, {
    text: "Kassel",
    id: "KSF",
}, {text: "Kermanshah", id: "KSH",}, {text: "Kissidougou", id: "KSI",}, {
    text: "Kasos Island",
    id: "KSJ",
}, {text: "Karlskoga", id: "KSK",}, {text: "Kassala", id: "KSL",}, {
    text: "Saint Marys Airport",
    id: "KSM",
}, {text: "Kostanay", id: "KSN",}, {text: "Kastoria", id: "KSO",}, {text: "Karshi", id: "KSQ",}, {
    text: "Kristiansund",
    id: "KSU",
}, {text: "Kars", id: "KSY",}, {text: "Kotlas", id: "KSZ",}, {text: "Karratha", id: "KTA",}, {
    text: "Thorne Bay",
    id: "KTB",
}, {text: "Kitadaito", id: "KTD",}, {text: "Kerteh", id: "KTE",}, {text: "Takaka", id: "KTF",}, {
    text: "Ketapang",
    id: "KTG",
}, {text: "Kratie", id: "KTI",}, {text: "Kitale", id: "KTL",}, {text: "Kathmandu", id: "KTM",}, {
    text: "Ketchikan",
    id: "KTN",
}, {text: "Kingston", id: "KTP",}, {text: "Katherine", id: "KTR",}, {
    text: "Teller Mission",
    id: "KTS",
}, {text: "Kittila", id: "KTT",}, {text: "Kota", id: "KTU",}, {text: "Katowice", id: "KTW",}, {
    text: "Kuantan",
    id: "KUA",
}, {text: "Kuria", id: "KUC",}, {text: "Kudat", id: "KUD",}, {text: "Samara", id: "KUF",}, {
    text: "Kubin",
    id: "KUG",
}, {text: "Kushiro", id: "KUH",}, {text: "Kasigluk", id: "KUK",}, {
    text: "Kuala Lumpur",
    id: "KUL",
}, {text: "Yakushima", id: "KUM",}, {text: "Kaunas", id: "KUN",}, {text: "Kuopio", id: "KUO",}, {
    text: "Kulusuk",
    id: "KUS",
}, {text: "Kutaisi", id: "KUT",}, {text: "Kullu", id: "KUU",}, {text: "Gunsan", id: "KUV",}, {
    text: "Kamusi",
    id: "KUY",
}, {text: "Kavala", id: "KVA",}, {text: "Skovde", id: "KVB",}, {text: "King Cove", id: "KVC",}, {
    text: "Ganja",
    id: "KVD",
}, {text: "Kavieng", id: "KVG",}, {text: "Kirovsk/Apatity", id: "KVK",}, {
    text: "Kivalina",
    id: "KVL",
}, {text: "Markovo", id: "KVM",}, {text: "Kirov", id: "KVX",}, {text: "Kwajalein Island", id: "KWA",}, {
    text: "Guiyang",
    id: "KWE",
}, {text: "Krivyi Rih", id: "KWG",}, {text: "Kuwait", id: "KWI",}, {text: "Gwangju", id: "KWJ",}, {
    text: "Kwigillingok",
    id: "KWK",
}, {text: "Guilin", id: "KWL",}, {text: "Kowanyama", id: "KWM",}, {text: "Quinhagak", id: "KWN",}, {
    text: "West Point",
    id: "KWP",
}, {text: "Kwethluk", id: "KWT",}, {text: "Kiwayu", id: "KWY",}, {
    text: "Kolwezi",
    country: "Congo (Kinshasa)",
    id: "KWZ",
}, {text: "Koro", id: "KXF",}, {text: "Komsomolsk-an-Amure", id: "KXK",}, {
    text: "Konya",
    id: "KYA",
}, {text: "Lanyu (Orchid Island)", id: "KYD",}, {text: "Karluk", id: "KYK",}, {
    text: "Kyaukpyu",
    id: "KYP",
}, {text: "Kayes", id: "KYS",}, {text: "Koyukuk", id: "KYU",}, {text: "Kyzyl", id: "KYZ",}, {
    text: "Zachar Bay",
    id: "KZB",
}, {text: "Kozani", id: "KZI",}, {text: "Kazan", id: "KZN",}, {text: "Kzyl-Orda", id: "KZO",}, {
    text: "Kutahya",
    id: "KZR",
}, {text: "Megisti", id: "KZS",}, {text: "Lamar", id: "LAA",}, {
    text: "Layang-Layang Island",
    id: "LAC",
}, {text: "Luanda", id: "LAD",}, {text: "Lae", id: "LAE",}, {text: "Lafayette", id: "LAF",}, {
    text: "Lannion",
    id: "LAI",
}, {text: "Aklavik", id: "LAK",}, {text: "Lakeland", id: "LAL",}, {text: "Los Alamos", id: "LAM",}, {
    text: "Lansing",
    id: "LAN",
}, {text: "Laoag", id: "LAO",}, {text: "La Paz", id: "LAP",}, {text: "Beida", id: "LAQ",}, {
    text: "Laramie",
    id: "LAR",
}, {text: "Las Vegas", id: "LAS",}, {text: "Lamu", id: "LAU",}, {text: "Lawton", id: "LAW",}, {
    text: "Los Angeles",
    id: "LAX",
}, {text: "Ladysmith", id: "LAY",}, {text: "Bom Jesus Da Lapa", id: "LAZ",}, {
    text: "Leeds/Bradford",
    id: "LBA",
}, {text: "Lubbock", id: "LBB",}, {text: "Hamburg", id: "LBC",}, {text: "Khujand", id: "LBD",}, {
    text: "Latrobe",
    id: "LBE",
}, {text: "North Platte", id: "LBF",}, {text: "Paris", id: "LBG",}, {text: "Albi", id: "LBI",}, {
    text: "Labuan Bajo",
    id: "LBJ",
}, {text: "Liberal", id: "LBL",}, {text: "Long Banga", id: "LBP",}, {text: "Lambarene", id: "LBQ",}, {
    text: "Labrea",
    id: "LBR",
}, {text: "Labasa", id: "LBS",}, {text: "Lumberton", id: "LBT",}, {text: "Labuan", id: "LBU",}, {
    text: "Libreville",
    id: "LBV",
}, {text: "Long Bawan", id: "LBW",}, {text: "Lubang", id: "LBX",}, {text: "Lukapa", id: "LBZ",}, {
    text: "Larnaca",
    id: "LCA",
}, {text: "Lecce", id: "LCC",}, {text: "La Ceiba", id: "LCE",}, {text: "A Coruna", id: "LCG",}, {
    text: "Lake Charles",
    id: "LCH",
}, {text: "Lodz", id: "LCJ",}, {text: "Columbus", id: "LCK",}, {text: "Pinar del Rio", id: "LCL",}, {
    text: "Lake text",
    id: "LCQ",
}, {text: "La Chorrera", id: "LCR",}, {text: "Longyan", id: "LCX",}, {text: "London", id: "LCY",}, {
    text: "Londrina",
    id: "LDB",
}, {text: "Lourdes", id: "LDE",}, {text: "Leshukonskoye", id: "LDG",}, {
    text: "Lord Howe Island",
    id: "LDH",
}, {text: "Lindi", id: "LDI",}, {text: "Linden", id: "LDJ",}, {text: "Lidkoping", id: "LDK",}, {
    text: "Lamidanda",
    id: "LDN",
}, {text: "Ladouanie", id: "LDO",}, {text: "Lahad Datu", id: "LDU",}, {
    text: "Saint Laurent du Maroni",
    id: "LDX",
}, {text: "Derry", id: "LDY",}, {text: "Londolozi", id: "LDZ",}, {text: "Learmonth", id: "LEA",}, {
    text: "Lebanon",
    id: "LEB",
}, {text: "Lencois", id: "LEC",}, {text: "St Petersburg", id: "LED",}, {text: "Le Havre", id: "LEH",}, {
    text: "Almeria",
    id: "LEI",
}, {text: "Leipzig/Halle", id: "LEJ",}, {text: "Labe", id: "LEK",}, {text: "Gapuwiyak", id: "LEL",}, {
    text: "Leon",
    id: "LEN",
}, {text: "Lands End", id: "LEQ",}, {text: "Leinster", id: "LER",}, {text: "Lesobeng", id: "LES",}, {
    text: "Leticia",
    id: "LET",
}, {text: "Seo De Urgel", id: "LEU",}, {text: "Levuka", id: "LEV",}, {text: "Auburn", id: "LEW",}, {
    text: "Lexington",
    id: "LEX",
}, {text: "Lelystad", id: "LEY",}, {text: "Hampton", id: "LFI",}, {text: "Nacogdoches", id: "LFK",}, {
    text: "La Fria",
    id: "LFR",
}, {text: "Lafayette", id: "LFT",}, {text: "Lome", id: "LFW",}, {text: "New York", id: "LGA",}, {
    text: "Long Beach",
    id: "LGB",
}, {text: "La Grange", id: "LGC",}, {text: "Liege", id: "LGG",}, {text: "Deadmans Cay", id: "LGI",}, {
    text: "Langkawi",
    id: "LGK",
}, {text: "Long Lellang", id: "LGL",}, {text: "Langeoog", id: "LGO",}, {
    text: "Legaspi",
    id: "LGP",
}, {text: "Lago Agrio", id: "LGQ",}, {text: "Malargue", id: "LGS",}, {text: "Logan", id: "LGU",}, {
    text: "London",
    id: "LGW",
}, {text: "Lahr", id: "LHA",}, {text: "Linhai", id: "LHC",}, {text: "Lahore", id: "LHE",}, {
    text: "Lightning Ridge",
    id: "LHG",
}, {text: "London", id: "LHR",}, {text: "Las Heras", id: "LHS",}, {text: "Lock Haven", id: "LHV",}, {
    text: "Lanzhou",
    id: "LHW",
}, {text: "Lifou", id: "LIF",}, {text: "Limoges", id: "LIG",}, {text: "Kauai Island", id: "LIH",}, {
    text: "Likiep",
    id: "LIK",
}, {text: "Lille", id: "LIL",}, {text: "Lima", id: "LIM",}, {text: "Milan", id: "LIN",}, {
    text: "Limon",
    id: "LIO",
}, {text: "Lins", id: "LIP",}, {text: "Lisala", country: "Congo (Kinshasa)", id: "LIQ",}, {
    text: "Liberia",
    id: "LIR",
}, {text: "Lisbon", id: "LIS",}, {text: "Little Rock", id: "LIT",}, {text: "Livengood", id: "LIV",}, {
    text: "Loikaw",
    id: "LIW",
}, {text: "Likoma Island", id: "LIX",}, {text: "Lodja", country: "Congo (Kinshasa)", id: "LJA",}, {
    text: "Lijiang",
    id: "LJG",
}, {text: "Ljubljana", id: "LJU",}, {text: "Lakeba Island", id: "LKB",}, {
    text: "Seattle",
    id: "LKE",
}, {text: "Lokichoggio", id: "LKG",}, {text: "Long Akah", id: "LKH",}, {
    text: "Kulik Lake",
    id: "LKK",
}, {text: "Lakselv", id: "LKL",}, {text: "Leknes", id: "LKN",}, {text: "Lucknow", id: "LKO",}, {
    text: "Lake Placid",
    id: "LKP",
}, {text: "Lake Manyara", id: "LKY",}, {text: "Lulea", id: "LLA",}, {text: "Ling Ling", id: "LLF",}, {
    text: "Lalibela",
    id: "LLI",
}, {text: "Lankaran", id: "LLK",}, {text: "Alluitsup Paa", id: "LLU",}, {
    text: "Luliang",
    id: "LLV",
}, {text: "Lilongwe", id: "LLW",}, {text: "Lamacarena", id: "LMC",}, {text: "Le Mans", id: "LME",}, {
    text: "Lae",
    id: "LML",
}, {text: "Los Mochis", id: "LMM",}, {text: "Limbang", id: "LMN",}, {
    text: "Lossiemouth",
    id: "LMO",
}, {text: "Lampedusa", id: "LMP",}, {text: "Klamath Falls", id: "LMT",}, {
    text: "Lake Murray",
    id: "LMY",
}, {text: "West Palm Beach", id: "LNA",}, {text: "Lamen Bay", id: "LNB",}, {
    text: "Lander",
    id: "LND",
}, {text: "Lonorore", id: "LNE",}, {text: "Lincang", id: "LNJ",}, {text: "Lincoln", id: "LNK",}, {
    text: "Willoughby",
    id: "LNN",
}, {text: "Leonora", id: "LNO",}, {text: "Lone Rock", id: "LNR",}, {
    text: "Lancaster",
    id: "LNS",
}, {text: "Lihir Island", id: "LNV",}, {text: "Lanai", id: "LNY",}, {text: "Linz", id: "LNZ",}, {
    text: "Longana",
    id: "LOD",
}, {text: "Loei", id: "LOE",}, {text: "Loja", id: "LOH",}, {text: "Lodwar", id: "LOK",}, {
    all: !0,
    text: "London",
    id: "LON",
}, {text: "Laghouat", id: "LOO",}, {text: "Praya", id: "LOP",}, {text: "Lagos", id: "LOS",}, {
    text: "Lockport",
    id: "LOT",
}, {text: "Louisville", id: "LOU",}, {text: "Monclova", id: "LOV",}, {
    text: "London",
    id: "LOZ",
}, {text: "Gran Canaria", id: "LPA",}, {text: "La Paz", id: "LPB",}, {text: "Lompoc", id: "LPC",}, {
    text: "La Pedrera",
    id: "LPD",
}, {text: "La Plata", id: "LPG",}, {text: "Linkoping", id: "LPI",}, {text: "Lipetsk", id: "LPK",}, {
    text: "Liverpool",
    id: "LPL",
}, {text: "Lamap", id: "LPM",}, {text: "Lappeenranta", id: "LPP",}, {
    text: "Luang Prabang",
    id: "LPQ",
}, {text: "Lopez Island", id: "LPS",}, {text: "Lampang", id: "LPT",}, {
    text: "Long Apung",
    id: "LPU",
}, {text: "Liepaya", id: "LPX",}, {text: "Le Puy", id: "LPY",}, {text: "Puerto Leguizamo", id: "LQM",}, {
    text: "Larisa",
    id: "LRA",
}, {text: "Laredo", id: "LRD",}, {text: "Longreach", id: "LRE",}, {
    text: "Jacksonville",
    id: "LRF",
}, {text: "La Rochelle", id: "LRH",}, {text: "Niamtougou", id: "LRL",}, {text: "La Romana", id: "LRM",}, {
    text: "Lar",
    id: "LRR",
}, {text: "Leros", id: "LRS",}, {text: "Lorient", id: "LRT",}, {text: "Las Cruces", id: "LRU",}, {
    text: "Los Roques",
    id: "LRV",
}, {text: "Kiriwina Island", id: "LSA",}, {text: "La Serena", id: "LSC",}, {
    text: "La Crosse",
    id: "LSE",
}, {text: "Fort Benning", id: "LSF",}, {text: "Lashio", id: "LSH",}, {
    text: "Shetland Islands",
    id: "LSI",
}, {text: "Las Piedras", id: "LSP",}, {text: "Los Angeles", id: "LSQ",}, {
    text: "Terre-de-Haut",
    id: "LSS",
}, {text: "Launceston", id: "LST",}, {text: "Las Vegas", id: "LSV",}, {
    text: "Lhoksumawe",
    id: "LSW",
}, {text: "Lismore", id: "LSY",}, {text: "Mali Losinj", id: "LSZ",}, {text: "Tzaneen", id: "LTA",}, {
    text: "Ghadames",
    id: "LTD",
}, {text: "Altai", id: "LTI",}, {text: "Latakia", id: "LTK",}, {text: "Lethem", id: "LTM",}, {
    text: "London",
    id: "LTN",
}, {text: "Loreto", id: "LTO",}, {text: "Le Touquet", id: "LTQ",}, {text: "Altus", id: "LTS",}, {
    text: "Saint Tropez",
    id: "LTT",
}, {text: "Latur", id: "LTU",}, {text: "Latacunga", id: "LTX",}, {text: "Lukla", id: "LUA",}, {
    text: "Luderitz",
    id: "LUD",
}, {text: "Phoenix", id: "LUF",}, {text: "Lugano", id: "LUG",}, {text: "Ludhiana", id: "LUH",}, {
    text: "Cincinnati",
    id: "LUK",
}, {text: "Mangshi", id: "LUM",}, {text: "Lusaka", id: "LUN",}, {text: "Luena", id: "LUO",}, {
    text: "Kalaupapa",
    id: "LUP",
}, {text: "San Luis", id: "LUQ",}, {text: "Cape Lisburne", id: "LUR",}, {text: "Langgur", id: "LUV",}, {
    text: "Luwuk",
    id: "LUW",
}, {text: "Luxembourg", id: "LUX",}, {text: "Lushan", id: "LUZ",}, {text: "Laval", id: "LVA",}, {
    text: "Livingstone",
    id: "LVI",
}, {text: "Livermore", id: "LVK",}, {text: "Livingston", id: "LVM",}, {
    text: "Laverton",
    id: "LVO",
}, {text: "Lucas Do Rio Verde", id: "LVR",}, {text: "Las Vegas", id: "LVS",}, {
    text: "Lwbak",
    id: "LWA",
}, {text: "Lewisburg", id: "LWB",}, {text: "Lawrence", id: "LWC",}, {
    text: "Shetland Islands",
    id: "LWK",
}, {text: "Lawrence", id: "LWM",}, {text: "Gyoumri", id: "LWN",}, {text: "Lviv", id: "LWO",}, {
    text: "Leeuwarden",
    id: "LWR",
}, {text: "Lewiston", id: "LWS",}, {text: "Lewistown", id: "LWT",}, {text: "Lawas", id: "LWY",}, {
    text: "Lhasa/Lasa",
    id: "LXA",
}, {text: "Luang Namtha", id: "LXG",}, {text: "Luxor", id: "LXR",}, {text: "Limnos", id: "LXS",}, {
    text: "Luoyang",
    id: "LYA",
}, {text: "Little Cayman", id: "LYB",}, {text: "Lycksele", id: "LYC",}, {
    text: "Lyneham",
    id: "LYE",
}, {text: "Lianyungang", id: "LYG",}, {text: "Lynchburg", id: "LYH",}, {text: "Linyi", id: "LYI",}, {
    text: "Lyon",
    id: "LYN",
}, {text: "Faisalabad", id: "LYP",}, {text: "Longyearbyen", id: "LYR",}, {
    text: "Lyon",
    id: "LYS",
}, {text: "Lady Elliot Island", id: "LYT",}, {text: "Ely", id: "LYU",}, {
    text: "Lydd",
    id: "LYX",
}, {text: "Lazaro Cardenas", id: "LZC",}, {text: "Liuzhou", id: "LZH",}, {text: "Nangan", id: "LZN",}, {
    text: "Luzhou",
    id: "LZO",
}, {text: "Lizard Island", id: "LZR",}, {text: "Lawrenceville", id: "LZU",}, {
    text: "Lin Zhi",
    id: "LZY",
}, {text: "Chennai", id: "MAA",}, {text: "Maraba", id: "MAB",}, {text: "Madrid", id: "MAD",}, {
    text: "Madera",
    id: "MAE",
}, {text: "Midland", id: "MAF",}, {text: "Madang", id: "MAG",}, {text: "Menorca", id: "MAH",}, {
    text: "Majuro",
    id: "MAJ",
}, {text: "Malakal", id: "MAK",}, {text: "Matamoros", id: "MAM",}, {text: "Manchester", id: "MAN",}, {
    text: "Manaus",
    id: "MAO",
}, {text: "Mae Sot", id: "MAQ",}, {text: "Maracaibo", id: "MAR",}, {text: "Manus Island", id: "MAS",}, {
    text: "Matadi",
    country: "Congo (Kinshasa)",
    id: "MAT",
}, {text: "Maupiti", id: "MAU",}, {text: "Maloelap Atoll", id: "MAV",}, {text: "Matam", id: "MAX",}, {
    text: "Mayaguez",
    id: "MAZ",
}, {text: "Mombasa", id: "MBA",}, {text: "Mmabatho/Mafikeng", id: "MBD",}, {
    text: "Monbetsu",
    id: "MBE",
}, {text: "Maryborough", id: "MBH",}, {text: "Montego Bay", id: "MBJ",}, {
    text: "Manistee",
    id: "MBL",
}, {text: "Saginaw", id: "MBS",}, {text: "Masbate", id: "MBT",}, {text: "Mbambanakira", id: "MBU",}, {
    text: "Melbourne",
    id: "MBW",
}, {text: "Maribor", id: "MBX",}, {text: "Maues", id: "MBZ",}, {
    text: "Sacramento",
    id: "MCC",
}, {text: "Mackinac Island", id: "MCD",}, {text: "Merced", id: "MCE",}, {text: "Tampa", id: "MCF",}, {
    text: "McGrath",
    id: "MCG",
}, {text: "Machala", id: "MCH",}, {text: "Kansas text", id: "MCI",}, {
    text: "McCook",
    id: "MCK",
}, {text: "Mount McKinley", id: "MCL",}, {text: "Monte Carlo", id: "MCM",}, {
    text: "Macon",
    id: "MCN",
}, {text: "Orlando", id: "MCO",}, {text: "Macapa", id: "MCP",}, {text: "Muscat", id: "MCT",}, {
    text: "Montlucon",
    id: "MCU",
}, {text: "Mcarthur River Mine", id: "MCV",}, {text: "Mason text", id: "MCW",}, {
    text: "Makhachkala",
    id: "MCX",
}, {text: "Sunshine Coast", id: "MCY",}, {text: "Maceio", id: "MCZ",}, {text: "Manado", id: "MDC",}, {
    text: "Medellin",
    id: "MDE",
}, {text: "Mudanjiang", id: "MDG",}, {text: "Makurdi", id: "MDI",}, {
    text: "Mbandaka",
    country: "Congo (Kinshasa)",
    id: "MDK",
}, {text: "Mandalay", id: "MDL",}, {text: "Middleton Island", id: "MDO",}, {
    text: "Mar Del Plata",
    id: "MDQ",
}, {text: "Middle Caicos", id: "MDS",}, {text: "Harrisburg", id: "MDT",}, {text: "Mendi", id: "MDU",}, {
    text: "Chicago",
    id: "MDW",
}, {text: "Sand Island", id: "MDY",}, {text: "Mendoza", id: "MDZ",}, {text: "Macae", id: "MEA",}, {
    text: "Melbourne",
    id: "MEB",
}, {text: "Manta", id: "MEC",}, {text: "Madinah", id: "MED",}, {text: "Mare", id: "MEE",}, {
    text: "Malanje",
    id: "MEG",
}, {text: "Mehamn", id: "MEH",}, {text: "Meridian", id: "MEI",}, {text: "Meknes", id: "MEK",}, {
    text: "Melbourne",
    id: "MEL",
}, {text: "Memphis", id: "MEM",}, {text: "Mende", id: "MEN",}, {text: "Merced", id: "MER",}, {
    text: "Medan",
    id: "MES",
}, {text: "Mexico text", id: "MEX",}, {text: "Meghauli", id: "MEY",}, {text: "Messina", id: "MEZ",}, {
    text: "Mafia",
    id: "MFA",
}, {text: "Mansfield", id: "MFD",}, {text: "McAllen", id: "MFE",}, {
    text: "Muzaffarabad",
    id: "MFG",
}, {text: "Marshfield", id: "MFI",}, {text: "Moala Island", id: "MFJ",}, {
    text: "Matsu (Beigan)",
    id: "MFK",
}, {text: "Macau", id: "MFM",}, {text: "Milford Sound", id: "MFN",}, {text: "Maradi", id: "MFQ",}, {
    text: "Medford",
    id: "MFR",
}, {text: "Machu Picchu", id: "MFT",}, {text: "Mfuwe", id: "MFU",}, {text: "Meribel", id: "MFX",}, {
    text: "Managua",
    id: "MGA",
}, {text: "Mount Gambier", id: "MGB",}, {text: "Michigan text", id: "MGC",}, {
    text: "Marietta",
    id: "MGE",
}, {text: "Maringa", id: "MGF",}, {text: "Margate", id: "MGH",}, {text: "Montgomery", id: "MGJ",}, {
    text: "Duesseldorf",
    id: "MGL",
}, {text: "Montgomery", id: "MGM",}, {text: "Magangue", id: "MGN",}, {text: "Mogadishu", id: "MGQ",}, {
    text: "Moultrie",
    id: "MGR",
}, {text: "Mangaia Island", id: "MGS",}, {text: "Milingimbi Island", id: "MGT",}, {
    text: "Morgantown",
    id: "MGW",
}, {text: "Dayton", id: "MGY",}, {text: "Myeik", id: "MGZ",}, {text: "Mahdia", id: "MHA",}, {
    text: "Mashhad",
    id: "MHD",
}, {text: "Mannheim", id: "MHG",}, {text: "Marsh Harbour", id: "MHH",}, {text: "Manhattan", id: "MHK",}, {
    text: "Minsk",
    id: "MHP",
}, {text: "Mariehamn", id: "MHQ",}, {text: "Sacramento", id: "MHR",}, {
    text: "Manchester",
    id: "MHT",
}, {text: "Mount Hotham", id: "MHU",}, {text: "Mojave", id: "MHV",}, {
    text: "Manihiki Atoll",
    id: "MHX",
}, {text: "Mildenhall", id: "MHZ",}, {text: "Miami", id: "MIA",}, {text: "Minot", id: "MIB",}, {
    text: "Minneapolis",
    id: "MIC",
}, {text: "Merida", id: "MID",}, {text: "Muncie", id: "MIE",}, {text: "Mian Yang", id: "MIG",}, {
    text: "Marilia",
    id: "MII",
}, {text: "Mili Island", id: "MIJ",}, {text: "Mikkeli", id: "MIK",}, {
    all: !0,
    text: "Milan",
    id: "MIL",
}, {text: "Merimbula", id: "MIM",}, {text: "Monastir", id: "MIR",}, {
    text: "Misima Island",
    id: "MIS",
}, {text: "Maiduguri", id: "MIU",}, {text: "Millville", id: "MIV",}, {text: "Manja", id: "MJA",}, {
    text: "Mejit Island",
    id: "MJB",
}, {text: "Man", country: "Cote d'Ivoire", id: "MJC",}, {text: "Mohenjo Daro", id: "MJD",}, {
    text: "Majkin",
    id: "MJE",
}, {text: "Mosjoen", id: "MJF",}, {text: "Tripoli", id: "MJI",}, {text: "Monkey Mia", id: "MJK",}, {
    text: "Mouila",
    id: "MJL",
}, {text: "Mbuji-Mayi", country: "Congo (Kinshasa)", id: "MJM",}, {text: "Mahajanga", id: "MJN",}, {
    text: "Mytilini",
    id: "MJT",
}, {text: "Mamuju", id: "MJU",}, {text: "Murcia", id: "MJV",}, {text: "Mirny", id: "MJZ",}, {
    text: "Kansas text",
    id: "MKC",
}, {text: "Milwaukee", id: "MKE",}, {text: "Muskegon", id: "MKG",}, {text: "Hoolehua", id: "MKK",}, {
    text: "Jackson",
    id: "MKL",
}, {text: "Mukah", id: "MKM",}, {text: "Muskogee", id: "MKO",}, {text: "Makemo", id: "MKP",}, {
    text: "Merauke",
    id: "MKQ",
}, {text: "Meekatharra", id: "MKR",}, {text: "Mekane Selam", id: "MKS",}, {
    text: "Makokou",
    id: "MKU",
}, {text: "Manokwari", id: "MKW",}, {text: "Mackay", id: "MKY",}, {text: "Malacca", id: "MKZ",}, {
    text: "Malta",
    id: "MLA",
}, {text: "Melbourne", id: "MLB",}, {text: "Mc Alester", id: "MLC",}, {text: "Malad text", id: "MLD",}, {
    text: "Male",
    id: "MLE",
}, {text: "Malang", id: "MLG",}, {text: "Mulhouse/Basel", id: "MLH",}, {
    text: "Moline",
    id: "MLI",
}, {text: "Milledgeville", id: "MLJ",}, {text: "Marshall", id: "MLL",}, {text: "Morelia", id: "MLM",}, {
    text: "Melilla",
    id: "MLN",
}, {text: "Milos", id: "MLO",}, {text: "Miles text", id: "MLS",}, {text: "Millinocket", id: "MLT",}, {
    text: "Monroe",
    id: "MLU",
}, {text: "Monrovia", id: "MLW",}, {text: "Malatya", id: "MLX",}, {
    text: "Manley Hot Springs",
    id: "MLY",
}, {text: "Memanbetsu", id: "MMB",}, {text: "Minamidaito", id: "MMD",}, {
    text: "Durham",
    id: "MME",
}, {text: "Mount Magnet", id: "MMG",}, {text: "Mammoth Lakes", id: "MMH",}, {
    text: "Athens",
    id: "MMI",
}, {text: "Matsumoto", id: "MMJ",}, {text: "Murmansk", id: "MMK",}, {
    text: "Maio Island",
    id: "MMO",
}, {text: "Morristown", id: "MMU",}, {text: "Mal Island", id: "MMV",}, {text: "Malmo", id: "MMX",}, {
    text: "Miyako",
    id: "MMY",
}, {text: "Maimanah", id: "MMZ",}, {text: "Muanda", country: "Congo (Kinshasa)", id: "MNB",}, {
    text: "Nacala",
    id: "MNC",
}, {text: "Mana Island", id: "MNF",}, {text: "Maningrida", id: "MNG",}, {
    text: "Montserrat",
    id: "MNI",
}, {text: "Mananjary", id: "MNJ",}, {text: "Maiana", id: "MNK",}, {text: "Manila", id: "MNL",}, {
    text: "Menominee",
    id: "MNM",
}, {text: "Minto", id: "MNT",}, {text: "Mawlamyine", id: "MNU",}, {text: "Manicore", id: "MNX",}, {
    text: "Mono Island",
    id: "MNY",
}, {text: "Manassas", id: "MNZ",}, {text: "Moa", id: "MOA",}, {text: "Mobile", id: "MOB",}, {
    text: "Montes Claros",
    id: "MOC",
}, {text: "Modesto", id: "MOD",}, {text: "Maumere", id: "MOF",}, {
    text: "Mong Hsat",
    id: "MOG",
}, {text: "Mitiaro Island", id: "MOI",}, {text: "Molde", id: "MOL",}, {text: "Mount Cook", id: "MON",}, {
    text: "Moomba",
    id: "MOO",
}, {text: "Morondava", id: "MOQ",}, {text: "Moses Point", id: "MOS",}, {
    text: "Minot",
    id: "MOT",
}, {text: "Mountain Village", id: "MOU",}, {text: "Moranbah", id: "MOV",}, {
    text: "Moscow",
    id: "MOW",
}, {text: "Moorea", id: "MOZ",}, {text: "Katima Mulilo", id: "MPA",}, {text: "Miami", id: "MPB",}, {
    text: "Caticlan",
    id: "MPH",
}, {text: "Mamitupo", id: "MPI",}, {text: "Montpellier", id: "MPL",}, {
    text: "Maputo",
    id: "MPM",
}, {text: "Mount Pleasant", id: "MPN",}, {text: "Mulatupo", id: "MPP",}, {
    text: "Mabua",
    id: "MPU",
}, {text: "Montpelier", id: "MPV",}, {text: "Mariupol", id: "MPW",}, {text: "Maripasoula", id: "MPY",}, {
    text: "Macomb",
    id: "MQB",
}, {text: "Miquelon", id: "MQC",}, {text: "Magnitogorsk", id: "MQF",}, {text: "Minacu", id: "MQH",}, {
    text: "Mildura",
    id: "MQL",
}, {text: "Mardin", id: "MQM",}, {text: "Mo I Rana", id: "MQN",}, {text: "Nelspruit", id: "MQP",}, {
    text: "Moundou",
    id: "MQQ",
}, {text: "Mustique Island", id: "MQS",}, {text: "Marquette", id: "MQT",}, {
    text: "Mekele",
    id: "MQX",
}, {text: "Misurata", id: "MRA",}, {text: "Martinsburg", id: "MRB",}, {text: "Merida", id: "MRD",}, {
    text: "Masai Mara",
    id: "MRE",
}, {text: "Anchorage", id: "MRI",}, {text: "Marco Island", id: "MRK",}, {
    text: "Morganton",
    id: "MRN",
}, {text: "Masterton", id: "MRO",}, {text: "Marinduque", id: "MRQ",}, {
    text: "Marseille",
    id: "MRS",
}, {text: "Mauritius", id: "MRU",}, {text: "Mineralnye Vody", id: "MRV",}, {
    text: "Bandar Mahshahr",
    id: "MRX",
}, {text: "Monterey", id: "MRY",}, {text: "Moree", id: "MRZ",}, {
    text: "Muskrat Dam",
    id: "MSA",
}, {text: "Manston-Kent", id: "MSE",}, {text: "Masirah", id: "MSH",}, {text: "Masalembo", id: "MSI",}, {
    text: "Misawa",
    id: "MSJ",
}, {text: "Muscle Shoals", id: "MSL",}, {text: "Madison", id: "MSN",}, {
    text: "Missoula",
    id: "MSO",
}, {text: "Minneapolis", id: "MSP",}, {text: "Minsk", id: "MSQ",}, {text: "Mus", id: "MSR",}, {
    text: "Massena",
    id: "MSS",
}, {text: "Maastricht", id: "MST",}, {text: "Maseru", id: "MSU",}, {text: "Massawa", id: "MSW",}, {
    text: "New Orleans",
    id: "MSY",
}, {text: "Namibe", id: "MSZ",}, {text: "Mount Clemens", id: "MTC",}, {
    text: "Mizan Teferi",
    id: "MTF",
}, {text: "Marathon", id: "MTH",}, {text: "Montrose", id: "MTJ",}, {text: "Makin", id: "MTK",}, {
    text: "Maitland",
    id: "MTL",
}, {text: "Metlakatla", id: "MTM",}, {text: "Baltimore", id: "MTN",}, {text: "Monteria", id: "MTR",}, {
    text: "Manzini",
    id: "MTS",
}, {text: "Minatitlan", id: "MTT",}, {text: "Mota Lava Island", id: "MTV",}, {
    text: "Monterrey",
    id: "MTY",
}, {text: "Munda", id: "MUA",}, {text: "Maun", id: "MUB",}, {text: "Munich", id: "MUC",}, {
    text: "Kamuela",
    id: "MUE",
}, {text: "Mersa Matruh", id: "MUH",}, {text: "Fort Indiantown Gap", id: "MUI",}, {
    text: "Mauke Island",
    id: "MUK",
}, {text: "Maturin", id: "MUN",}, {text: "Mountain Home", id: "MUO",}, {
    text: "Muccan Station",
    id: "MUQ",
}, {text: "Marudi", id: "MUR",}, {text: "Mascara", id: "MUW",}, {text: "Multan", id: "MUX",}, {
    text: "Musoma",
    id: "MUZ",
}, {text: "Myvatn", id: "MVA",}, {text: "Franceville", id: "MVB",}, {text: "Montevideo", id: "MVD",}, {
    text: "Mossoro",
    id: "MVF",
}, {text: "Stowe", id: "MVL",}, {text: "Mitu", id: "MVP",}, {text: "Mogilev", id: "MVQ",}, {
    text: "Maroua",
    id: "MVR",
}, {text: "Mucuri", id: "MVS",}, {text: "Mataiva", id: "MVT",}, {
    text: "Megeve",
    id: "MVV",
}, {text: "Martha's Vineyard", id: "MVY",}, {text: "Masvingo", id: "MVZ",}, {
    text: "Marion",
    id: "MWA",
}, {text: "Morawa", id: "MWB",}, {text: "Milwaukee", id: "MWC",}, {
    text: "Maewo Island",
    id: "MWF",
}, {text: "Moses Lake", id: "MWH",}, {text: "Matak", id: "MWK",}, {text: "Mineral Wells", id: "MWL",}, {
    text: "Windom",
    id: "MWM",
}, {text: "Mountain Scenic", id: "MWP",}, {text: "Magway", id: "MWQ",}, {text: "Muan", id: "MWX",}, {
    text: "Mwanza",
    id: "MWZ",
}, {text: "Montgomery", id: "MXF",}, {text: "Moro", id: "MXH",}, {text: "Minna", id: "MXJ",}, {
    text: "Mexicali",
    id: "MXL",
}, {text: "Morombe", id: "MXM",}, {text: "Morlaix", id: "MXN",}, {text: "Milan", id: "MXP",}, {
    text: "Maota",
    id: "MXS",
}, {text: "Maintirano", id: "MXT",}, {text: "Moron", id: "MXV",}, {text: "Mora", id: "MXX",}, {
    text: "McCarthy",
    id: "MXY",
}, {text: "Mei Xian", id: "MXZ",}, {text: "Moruya", id: "MYA",}, {text: "Mayumba", id: "MYB",}, {
    text: "Maracay",
    id: "MYC",
}, {text: "Malindi", id: "MYD",}, {text: "Miyakejima", id: "MYE",}, {text: "San Diego", id: "MYF",}, {
    text: "Mayaguana",
    id: "MYG",
}, {text: "Murray Island", id: "MYI",}, {text: "Matsuyama", id: "MYJ",}, {text: "Mc Call", id: "MYL",}, {
    text: "Mary",
    id: "MYP",
}, {text: "Mysore", id: "MYQ",}, {text: "Myrtle Beach", id: "MYR",}, {text: "Myitkyina", id: "MYT",}, {
    text: "Mekoryuk",
    id: "MYU",
}, {text: "Marysville", id: "MYV",}, {text: "Mtwara", id: "MYW",}, {
    text: "Miri",
    id: "MYY",
}, {text: "Mocimboa da Praia", id: "MZB",}, {text: "Magong", id: "MZG",}, {text: "Amasya", id: "MZH",}, {
    text: "Mopti",
    id: "MZI",
}, {text: "Marana", id: "MZJ",}, {text: "Marakei", id: "MZK",}, {text: "Manizales", id: "MZL",}, {
    text: "Metz/Nancy",
    id: "MZM",
}, {text: "Manzanillo", id: "MZO",}, {text: "Motueka", id: "MZP",}, {
    text: "Mazar-e Sharif",
    id: "MZR",
}, {text: "Mazatlan", id: "MZT",}, {text: "Mulu", id: "MZV",}, {text: "Narrabri", id: "NAA",}, {
    text: "Nagpur",
    id: "NAG",
}, {text: "Tahuna", id: "NAH",}, {text: "Annai", id: "NAI",}, {
    text: "Nakhichevan",
    id: "NAJ",
}, {text: "Nakhon Ratchasima", id: "NAK",}, {text: "Nalchik", id: "NAL",}, {
    text: "Nadi",
    id: "NAN",
}, {text: "Nanchong", id: "NAO",}, {text: "Naples", id: "NAP",}, {text: "Qaanaaq", id: "NAQ",}, {
    text: "Nassau",
    id: "NAS",
}, {text: "Natal", id: "NAT",}, {text: "Nevsehir", id: "NAV",}, {text: "Narathiwat", id: "NAW",}, {
    text: "Beijing",
    id: "NAY",
}, {text: "Barrancominas", id: "NBB",}, {text: "Nizhnekamsk", id: "NBC",}, {
    text: "Enfidha",
    id: "NBE",
}, {text: "New Orleans", id: "NBG",}, {text: "Nairobi", id: "NBO",}, {text: "Baishan", id: "NBS",}, {
    text: "Nabire",
    id: "NBX",
}, {text: "North Caicos", id: "NCA",}, {text: "Nice", id: "NCE",}, {
    text: "Newcastle",
    id: "NCL",
}, {text: "New Chenega", id: "NCN",}, {text: "Newcastle", id: "NCS",}, {text: "Nukus", id: "NCU",}, {
    text: "Annecy",
    id: "NCY",
}, {text: "Banda Island", id: "NDA",}, {text: "Nouadhibou", id: "NDB",}, {text: "Nanded", id: "NDC",}, {
    text: "Qiqihar",
    id: "NDG",
}, {text: "N'Djamena", id: "NDJ",}, {text: "Namdrik Island", id: "NDK",}, {text: "Nador", id: "NDR",}, {
    text: "Rundu",
    id: "NDU",
}, {text: "Sanday", id: "NDY",}, {text: "Necochea", id: "NEC",}, {text: "Negril", id: "NEG",}, {
    text: "Lakehurst",
    id: "NEL",
}, {text: "Nevis", id: "NEV",}, {text: "New Orleans", id: "NEW",}, {text: "Nefteyugansk", id: "NFG",}, {
    text: "Fallon",
    id: "NFL",
}, {text: "Niuafo'ou", id: "NFO",}, {text: "Ningbo", id: "NGB",}, {
    text: "Ngaoundere",
    id: "NGE",
}, {text: "Kaneohe Bay", id: "NGF",}, {text: "Gau Island", id: "NGI",}, {
    text: "Nagoya",
    id: "NGO",
}, {text: "Corpus Christi", id: "NGP",}, {text: "Shi Quan He", id: "NGQ",}, {
    text: "Nagasaki",
    id: "NGS",
}, {text: "Norfolk", id: "NGU",}, {text: "Manang", id: "NGX",}, {text: "Nha Trang", id: "NHA",}, {
    text: "Minhad",
    id: "NHD",
}, {text: "Patuxent River", id: "NHK",}, {text: "Northolt", id: "NHT",}, {
    text: "Nuku Hiva",
    id: "NHV",
}, {text: "Nikolai", id: "NIB",}, {text: "Nicosia", id: "NIC",}, {text: "Nikunau", id: "NIG",}, {
    text: "Niamey",
    id: "NIM",
}, {text: "Nioki", country: "Congo (Kinshasa)", id: "NIO",}, {text: "Jacksonville", id: "NIP",}, {
    text: "Niort",
    id: "NIT",
}, {text: "Niau", id: "NIU",}, {text: "Nizhnevartovsk", id: "NJC",}, {text: "Najaf", id: "NJF",}, {
    text: "El Centro",
    id: "NJK",
}, {text: "Nouakchott", id: "NKC",}, {text: "Nanjing", id: "NKG",}, {text: "Nagoya", id: "NKM",}, {
    text: "Sirnak",
    id: "NKT",
}, {text: "San Diego", id: "NKX",}, {text: "Ndola", id: "NLA",}, {text: "Lemoore", id: "NLC",}, {
    text: "Nuevo Laredo",
    id: "NLD",
}, {text: "Darnley Island", id: "NLF",}, {text: "Nelson Lagoon", id: "NLG",}, {
    text: "Norfolk Island",
    id: "NLK",
}, {text: "Kinshasa", country: "Congo (Kinshasa)", id: "NLO",}, {text: "Nelspruit", id: "NLP",}, {
    text: "Xinyuan text",
    id: "NLT",
}, {text: "Mykolaiv", id: "NLV",}, {text: "Namangan", id: "NMA",}, {text: "Daman", id: "NMB",}, {
    text: "Nightmute",
    id: "NME",
}, {text: "Mildred Lake", id: "NML",}, {text: "Kenitra", id: "NNA",}, {
    text: "Santa Ana Island",
    id: "NNB",
}, {text: "Nanning", id: "NNG",}, {text: "Nondalton", id: "NNL",}, {text: "Naryan-Mar", id: "NNM",}, {
    text: "Spiddal",
    id: "NNR",
}, {text: "Nan", id: "NNT",}, {text: "Nunukan", id: "NNX",}, {text: "Nanyang", id: "NNY",}, {
    text: "Nowra",
    id: "NOA",
}, {text: "Nosara", id: "NOB",}, {text: "Knock", id: "NOC",}, {text: "Nogales", id: "NOG",}, {
    text: "Novorossiysk",
    id: "NOI",
}, {text: "Noyabrsk", id: "NOJ",}, {text: "Nonouti", id: "NON",}, {text: "Nordfjordur", id: "NOR",}, {
    text: "Nosy-Be",
    id: "NOS",
}, {text: "Noumea", id: "NOU",}, {text: "Huambo", id: "NOV",}, {text: "Novokuznetsk", id: "NOZ",}, {
    text: "Pensacola",
    id: "NPA",
}, {text: "Napier/Hastings", id: "NPE",}, {text: "New Plymouth", id: "NPL",}, {
    text: "Memphis",
    id: "NQA",
}, {text: "Kingsville", id: "NQI",}, {text: "Neuquen", id: "NQN",}, {text: "Nottingham", id: "NQT",}, {
    text: "Nuqui",
    id: "NQU",
}, {text: "Key West", id: "NQX",}, {text: "Newquay", id: "NQY",}, {text: "Narrandera", id: "NRA",}, {
    text: "Norderney",
    id: "NRD",
}, {text: "Norrkoping", id: "NRK",}, {text: "North Ronaldsay", id: "NRL",}, {text: "Weeze", id: "NRN",}, {
    text: "Tokyo",
    id: "NRT",
}, {text: "Bimini", id: "NSB",}, {text: "Milton", id: "NSE",}, {text: "Now Shahr", id: "NSH",}, {
    text: "Yaounde",
    id: "NSI",
}, {text: "Norilsk", id: "NSK",}, {text: "Nelson", id: "NSN",}, {
    text: "Scone",
    id: "NSO",
}, {text: "Nakhon Si Thammarat", id: "NST",}, {text: "Sigonella", id: "NSY",}, {
    text: "Notodden",
    id: "NTB",
}, {text: "Port Hueneme", id: "NTD",}, {text: "Nantes", id: "NTE",}, {text: "Nantong", id: "NTG",}, {
    text: "Newcastle",
    id: "NTL",
}, {text: "Normanton", id: "NTN",}, {text: "Wajima", id: "NTQ",}, {
    text: "Monterrey",
    id: "NTR",
}, {text: "Niuatoputapu", id: "NTT",}, {text: "Oceana", id: "NTU",}, {
    text: "Natuna Ranai",
    id: "NTX",
}, {text: "Sun text", id: "NTY",}, {text: "Nuremberg", id: "NUE",}, {text: "Nuiqsut", id: "NUI",}, {
    text: "Nulato",
    id: "NUL",
}, {text: "Nunapitchuk", id: "NUP",}, {text: "Mountain View", id: "NUQ",}, {
    text: "Nullarbor",
    id: "NUR",
}, {text: "Norsup", id: "NUS",}, {text: "Whidbey Island", id: "NUW",}, {
    text: "Novyj Urengoj",
    id: "NUX",
}, {text: "Neiva", id: "NVA",}, {text: "Navoi", id: "NVI",}, {text: "Narvik", id: "NVK",}, {
    text: "Novo Aripuana",
    id: "NVP",
}, {text: "Nevers", id: "NVS",}, {text: "Navegantes", id: "NVT",}, {text: "Moheli", id: "NWA",}, {
    text: "Norwich",
    id: "NWI",
}, {text: "Nyagan", id: "NYA",}, {all: !0, text: "New York", id: "NYC",}, {
    text: "Nyeri",
    id: "NYE",
}, {text: "Quantico", id: "NYG",}, {text: "Sunyani", id: "NYI",}, {text: "Nanyuki", id: "NYK",}, {
    text: "Nadym",
    id: "NYM",
}, {text: "Nyngan", id: "NYN",}, {text: "Stockholm", id: "NYO",}, {
    text: "Nay Pyi Taw",
    id: "NYT",
}, {text: "Bagan/Nyaung-u", id: "NYU",}, {text: "Nzagi", id: "NZA",}, {text: "Nazca", id: "NZC",}, {
    text: "Manzhouli",
    id: "NZH",
}, {text: "San Diego", id: "NZY",}, {text: "Orange", id: "OAG",}, {text: "Jacksonville", id: "OAJ",}, {
    text: "Oakland",
    id: "OAK",
}, {text: "Cacoal", id: "OAL",}, {text: "Oamaru", id: "OAM",}, {text: "Monterey", id: "OAR",}, {
    text: "Oaxaca",
    id: "OAX",
}, {text: "Obock", id: "OBC",}, {text: "Okeechobee", id: "OBE",}, {text: "Oberpfaffenhofen", id: "OBF",}, {
    text: "Oban",
    id: "OBN",
}, {text: "Obihiro", id: "OBO",}, {text: "Aubenas", id: "OBS",}, {text: "Kobuk", id: "OBU",}, {
    text: "Obo",
    id: "OBX",
}, {text: "Ittoqqortoormiit", id: "OBY",}, {text: "Ocean Reef", id: "OCA",}, {text: "Coca", id: "OCC",}, {
    text: "Ocala",
    id: "OCF",
}, {text: "Ocho Rios", id: "OCJ",}, {text: "Ocana", id: "OCV",}, {text: "Cordoba", id: "ODB",}, {
    text: "Odense",
    id: "ODE",
}, {text: "Odiham", id: "ODH",}, {text: "Long Seridan", id: "ODN",}, {text: "Bodaybo", id: "ODO",}, {
    text: "Odesa",
    id: "ODS",
}, {text: "Muang Xay", id: "ODY",}, {text: "Paloemeu", id: "OEM",}, {
    text: "Ornskoldsvik",
    id: "OER",
}, {text: "San Antonio Oeste", id: "OES",}, {text: "Omaha", id: "OFF",}, {
    text: "Ofu Island",
    id: "OFU",
}, {text: "Kahului", id: "OGG",}, {text: "Ogle", id: "OGL",}, {text: "Yonaguni", id: "OGN",}, {
    text: "Ogdensburg",
    id: "OGS",
}, {text: "Ouargla", id: "OGX",}, {text: "Vladikavkaz", id: "OGZ",}, {text: "Ohrid", id: "OHD",}, {
    text: "Mohe County",
    id: "OHE",
}, {text: "Okha", id: "OHH",}, {text: "Okhotsk", id: "OHO",}, {text: "Wyk auf Foehr", id: "OHR",}, {
    text: "Ourilandia",
    id: "OIA",
}, {text: "Oshima", id: "OIM",}, {text: "Okushiri", id: "OIR",}, {text: "Oita", id: "OIT",}, {
    text: "Kansas text",
    id: "OJC",
}, {text: "Okinawa", id: "OKA",}, {text: "Fraser Island", id: "OKB",}, {
    text: "Oklahoma text",
    id: "OKC",
}, {text: "Sapporo", id: "OKD",}, {text: "Okaukuejo", id: "OKF",}, {text: "Oki", id: "OKI",}, {
    text: "Okayama",
    id: "OKJ",
}, {text: "Okondja", id: "OKN",}, {text: "Tokyo", id: "OKO",}, {
    text: "Yorke Island",
    id: "OKR",
}, {text: "Mokuti Lodge", id: "OKU",}, {text: "Oakey", id: "OKY",}, {text: "Orland", id: "OLA",}, {
    text: "Olbia",
    id: "OLB",
}, {text: "Sao Paulo de Olivenca", id: "OLC",}, {text: "Wolf Point", id: "OLF",}, {
    text: "Old Harbor",
    id: "OLH",
}, {text: "Olympia", id: "OLM",}, {text: "Colonia Sarmiento", id: "OLN",}, {
    text: "Olympic Dam",
    id: "OLP",
}, {text: "Nogales", id: "OLS",}, {text: "Olive Branch", id: "OLV",}, {text: "Olekminsk", id: "OLZ",}, {
    text: "Omaha",
    id: "OMA",
}, {text: "Omboue", id: "OMB",}, {text: "Ormoc", id: "OMC",}, {text: "Oranjemund", id: "OMD",}, {
    text: "Nome",
    id: "OME",
}, {text: "Mafraq", id: "OMF",}, {text: "Urumiyeh", id: "OMH",}, {text: "Marmul", id: "OMM",}, {
    text: "Mostar",
    id: "OMO",
}, {text: "Oradea", id: "OMR",}, {text: "Omsk", id: "OMS",}, {text: "Ononge", id: "ONB",}, {
    text: "Ondangwa",
    id: "OND",
}, {text: "Mornington Island", id: "ONG",}, {text: "Oneonta", id: "ONH",}, {
    text: "Odate/Noshiro",
    id: "ONJ",
}, {text: "Newport", id: "ONP",}, {text: "Zonguldak", id: "ONQ",}, {text: "Onslow", id: "ONS",}, {
    text: "Ontario",
    id: "ONT",
}, {text: "Colon", id: "ONX",}, {text: "Toksook Bay", id: "OOK",}, {text: "Gold Coast", id: "OOL",}, {
    text: "Cooma",
    id: "OOM",
}, {text: "Miami", id: "OPF",}, {text: "Porto", id: "OPO",}, {text: "Sinop", id: "OPS",}, {
    text: "Balimo",
    id: "OPU",
}, {text: "Oran", id: "ORA",}, {text: "Orebro", id: "ORB",}, {text: "Chicago", id: "ORD",}, {
    text: "Orleans",
    id: "ORE",
}, {text: "Norfolk", id: "ORF",}, {text: "Paramaribo", id: "ORG",}, {
    text: "Worcester",
    id: "ORH",
}, {text: "Port Lions", id: "ORI",}, {text: "Orinduik", id: "ORJ",}, {text: "Cork", id: "ORK",}, {
    text: "Orlando",
    id: "ORL",
}, {text: "Oran", id: "ORN",}, {text: "Orapa", id: "ORP",}, {text: "Orpheus Island", id: "ORS",}, {
    text: "Northway",
    id: "ORT",
}, {text: "Noorvik", id: "ORV",}, {text: "Ormara", id: "ORW",}, {text: "Oriximina", id: "ORX",}, {
    text: "Paris",
    id: "ORY",
}, {all: !0, text: "Osaka", id: "OSA",}, {text: "Osage Beach", id: "OSB",}, {
    text: "Oscoda",
    id: "OSC",
}, {text: "Ostersund", id: "OSD",}, {text: "Oshkosh", id: "OSH",}, {text: "Osijek", id: "OSI",}, {
    text: "Oskarshamn",
    id: "OSK",
}, {text: "Oslo", id: "OSL",}, {text: "Osan", id: "OSN",}, {text: "Ostrava", id: "OSR",}, {
    text: "Osh",
    id: "OSS",
}, {text: "Oostende/Brugge", id: "OST",}, {text: "Columbus", id: "OSU",}, {text: "Orsk", id: "OSW",}, {
    text: "Namsos",
    id: "OSY",
}, {text: "Koszalin", id: "OSZ",}, {text: "Contadora", id: "OTD",}, {
    text: "North Bend",
    id: "OTH",
}, {text: "Morotai Island", id: "OTI",}, {text: "Bucharest", id: "OTP",}, {
    text: "Coto 47",
    id: "OTR",
}, {text: "Anacortes", id: "OTS",}, {text: "Otu", id: "OTU",}, {text: "Kotzebue", id: "OTZ",}, {
    text: "Ouagadougou",
    id: "OUA",
}, {text: "Oujda", id: "OUD",}, {text: "Ouesso", country: "Congo (Kinshasa)", id: "OUE",}, {
    text: "Out Skerries",
    id: "OUK",
}, {text: "Oulu", id: "OUL",}, {text: "Bekily", id: "OVA",}, {text: "Novosibirsk", id: "OVB",}, {
    text: "Asturias",
    id: "OVD",
}, {text: "Sovetsky", id: "OVS",}, {text: "Owensboro", id: "OWB",}, {text: "Norwood", id: "OWD",}, {
    text: "Bissau",
    country: "Guinea-Bissau",
    id: "OXB",
}, {text: "Oxford", id: "OXC",}, {text: "Oxford", id: "OXD",}, {text: "Oxford", id: "OXF",}, {
    text: "Oxnard",
    id: "OXR",
}, {text: "Oyem", id: "OYE",}, {text: "Moyo", id: "OYG",}, {text: "Moyale", id: "OYL",}, {
    text: "Ozona",
    id: "OZA",
}, {text: "Ozamis", id: "OZC",}, {text: "Zaporizhzhia", id: "OZH",}, {text: "Moron", id: "OZP",}, {
    text: "Ouarzazate",
    id: "OZZ",
}, {text: "Bilaspur", id: "PAB",}, {text: "Panama text", id: "PAC",}, {
    text: "Paderborn/Lippstadt",
    id: "PAD",
}, {text: "Everett", id: "PAE",}, {text: "Pakuba", id: "PAF",}, {text: "Pagadian", id: "PAG",}, {
    text: "Paducah",
    id: "PAH",
}, {text: "Parachinar", id: "PAJ",}, {text: "Panama text", id: "PAM",}, {
    text: "Pattani",
    id: "PAN",
}, {text: "Palo Alto", id: "PAO",}, {text: "Port Au Prince", id: "PAP",}, {text: "Palmer", id: "PAQ",}, {
    all: !0,
    text: "Paris",
    id: "PAR",
}, {text: "Paros", id: "PAS",}, {text: "Patna", id: "PAT",}, {text: "Paulo Afonso", id: "PAV",}, {
    text: "Port De Paix",
    id: "PAX",
}, {text: "Poza Rica", id: "PAZ",}, {text: "Puebla", id: "PBC",}, {text: "Porbandar", id: "PBD",}, {
    text: "Pine Bluff",
    id: "PBF",
}, {text: "Plattsburgh", id: "PBG",}, {text: "Paro", id: "PBH",}, {
    text: "West Palm Beach",
    id: "PBI",
}, {text: "Paama Island Island", id: "PBJ",}, {text: "Puerto Cabello", id: "PBL",}, {
    text: "Paramaribo",
    id: "PBM",
}, {text: "Porto Amboim", id: "PBN",}, {text: "Paraburdoo", id: "PBO",}, {
    text: "Punta Islita",
    id: "PBP",
}, {text: "Puerto Barrios", id: "PBR",}, {text: "Putao", id: "PBU",}, {
    text: "Porto Dos Gauchos",
    id: "PBV",
}, {text: "Porto Alegre Do Norte", id: "PBX",}, {text: "Portage Creek", id: "PCA",}, {
    text: "Pondok Cabe",
    id: "PCB",
}, {text: "Pucallpa", id: "PCL",}, {text: "Playa Del Carmen", id: "PCM",}, {
    text: "Picton",
    id: "PCN",
}, {text: "Principe Island", id: "PCP",}, {text: "Puerto Carreno", id: "PCR",}, {
    text: "Par",
    id: "PCW",
}, {text: "Puerto Inirida", id: "PDA",}, {text: "Pedro Bay", id: "PDB",}, {
    text: "Padang",
    id: "PDG",
}, {text: "Atlanta", id: "PDK",}, {text: "Ponta Delgada (Azores)", id: "PDL",}, {
    text: "Pendopo",
    id: "PDO",
}, {text: "Punta Del Este", id: "PDP",}, {text: "Piedras Negras", id: "PDS",}, {
    text: "Pendleton",
    id: "PDT",
}, {text: "Plovdiv", id: "PDV",}, {text: "Portland", id: "PDX",}, {text: "Penneshaw", id: "PEA",}, {
    text: "Pelican",
    id: "PEC",
}, {text: "Pardubice", id: "PED",}, {text: "Perm", id: "PEE",}, {text: "Peenemuende", id: "PEF",}, {
    text: "Perugia",
    id: "PEG",
}, {text: "Pereira", id: "PEI",}, {text: "Beijing", id: "PEK",}, {
    text: "Puerto Maldonado",
    id: "PEM",
}, {text: "Penang", id: "PEN",}, {text: "Pecos text", id: "PEQ",}, {text: "Perth", id: "PER",}, {
    text: "Petrozavodsk",
    id: "PES",
}, {text: "Pelotas", id: "PET",}, {text: "Puerto Lempira", id: "PEU",}, {text: "Pecs", id: "PEV",}, {
    text: "Peshawar",
    id: "PEW",
}, {text: "Pechora", id: "PEX",}, {text: "Penza", id: "PEZ",}, {text: "Passo Fundo", id: "PFB",}, {
    text: "Patrekstjord",
    id: "PFJ",
}, {text: "Panama text", id: "PFN",}, {text: "Paphos", id: "PFO",}, {text: "Parsabad", id: "PFQ",}, {
    text: "Ilebo",
    country: "Congo (Kinshasa)",
    id: "PFR",
}, {text: "Page", id: "PGA",}, {text: "Punta Gorda", id: "PGD",}, {text: "Perpignan", id: "PGF",}, {
    text: "Pantnagar",
    id: "PGH",
}, {text: "Pangkalpinang", id: "PGK",}, {text: "Asaloyeh", id: "PGU",}, {
    text: "Greenville",
    id: "PGV",
}, {text: "Perigueux", id: "PGX",}, {text: "Phan Rang", id: "PHA",}, {
    text: "Port Harcourt",
    id: "PHC",
}, {text: "New Philadelphia", id: "PHD",}, {text: "Port Hedland", id: "PHE",}, {
    text: "Hampton",
    id: "PHF",
}, {text: "Pahokee", id: "PHK",}, {text: "Philadelphia", id: "PHL",}, {
    text: "Port Huron",
    id: "PHN",
}, {text: "Point Hope", id: "PHO",}, {text: "Phitsanulok", id: "PHS",}, {
    text: "Phalaborwa",
    id: "PHW",
}, {text: "Phoenix", id: "PHX",}, {text: "Phetchabun", id: "PHY",}, {text: "Peoria", id: "PIA",}, {
    text: "Laurel",
    id: "PIB",
}, {text: "Tampa", id: "PIE",}, {text: "Pingtung", id: "PIF",}, {text: "Pocatello", id: "PIH",}, {
    text: "Glasgow",
    id: "PIK",
}, {text: "Pine Mountain", id: "PIM",}, {text: "Parintins", id: "PIN",}, {
    text: "Pisco",
    id: "PIO",
}, {text: "Pilot Point", id: "PIP",}, {text: "Pierre", id: "PIR",}, {text: "Poitiers", id: "PIS",}, {
    text: "Pittsburgh",
    id: "PIT",
}, {text: "Piura", id: "PIU",}, {text: "Pico Island (Azores)", id: "PIX",}, {
    text: "Point Lay",
    id: "PIZ",
}, {text: "Pajala", id: "PJA",}, {text: "Pedro Juan Caballero", id: "PJC",}, {
    text: "Panjgur",
    id: "PJG",
}, {text: "Puerto Jimenez", id: "PJM",}, {text: "Parkersburg", id: "PKB",}, {
    text: "Petropavlovsk",
    id: "PKC",
}, {text: "Parkes", id: "PKE",}, {text: "Pangkor", id: "PKG",}, {text: "Portochelion", id: "PKH",}, {
    text: "Pakokku",
    id: "PKK",
}, {text: "Pangkalanbuun", id: "PKN",}, {text: "Puka Puka", id: "PKP",}, {
    text: "Pokhara",
    id: "PKR",
}, {text: "Pekanbaru", id: "PKU",}, {text: "Pskov", id: "PKV",}, {
    text: "Selebi-Phikwe",
    id: "PKW",
}, {text: "Palangkaraya", id: "PKY",}, {text: "Pakse", id: "PKZ",}, {
    text: "Playa Samara/Carrillo",
    id: "PLD",
}, {text: "Plymouth", id: "PLH",}, {text: "Placencia", id: "PLJ",}, {
    text: "Ponta Pelada",
    id: "PLL",
}, {text: "Palembang", id: "PLM",}, {text: "Pellston", id: "PLN",}, {
    text: "Port Lincoln",
    id: "PLO",
}, {text: "La Palma", id: "PLP",}, {text: "Klaipeda/Palanga", id: "PLQ",}, {
    text: "Providenciales",
    id: "PLS",
}, {text: "Belo Horizonte", id: "PLU",}, {text: "Poltava", id: "PLV",}, {text: "Palu", id: "PLW",}, {
    text: "Semey",
    id: "PLX",
}, {text: "Plymouth", id: "PLY",}, {text: "Port Elizabeth", id: "PLZ",}, {text: "Pemba", id: "PMA",}, {
    text: "Pembina",
    id: "PMB",
}, {text: "Puerto Montt", id: "PMC",}, {text: "Palmdale", id: "PMD",}, {text: "Portsmouth", id: "PME",}, {
    text: "Milan",
    id: "PMF",
}, {text: "Ponta Pora", id: "PMG",}, {text: "Palma De Mallorca", id: "PMI",}, {
    text: "Palm Island",
    id: "PMK",
}, {text: "Port Moller", id: "PML",}, {text: "Palermo", id: "PMO",}, {
    text: "Pimaga",
    id: "PMP",
}, {text: "Perito Moreno", id: "PMQ",}, {text: "Palmerston North", id: "PMR",}, {
    text: "Palmyra",
    id: "PMS",
}, {text: "Porlamar", id: "PMV",}, {text: "Palmas", id: "PMW",}, {
    text: "Puerto Madryn",
    id: "PMY",
}, {text: "Palmar Sur", id: "PMZ",}, {text: "Pamplona", id: "PNA",}, {
    text: "Porto Nacional",
    id: "PNB",
}, {text: "Ponca text", id: "PNC",}, {text: "Punta Gorda", id: "PND",}, {
    text: "Philadelphia",
    id: "PNE",
}, {text: "Phnom Penh", id: "PNH",}, {text: "Pohnpei", id: "PNI",}, {
    text: "Pontianak",
    id: "PNK",
}, {text: "Pantelleria", id: "PNL",}, {text: "Popondetta", id: "PNP",}, {
    text: "Pune",
    id: "PNQ",
}, {text: "Pointe-Noire", country: "Congo (Brazzaville)", id: "PNR",}, {
    text: "Pensacola",
    id: "PNS",
}, {text: "Puerto Natales", id: "PNT",}, {text: "Panevezys", id: "PNV",}, {
    text: "Pondicherry",
    id: "PNY",
}, {text: "Petrolina", id: "PNZ",}, {text: "Porto Alegre", id: "POA",}, {
    text: "Fayetteville",
    id: "POB",
}, {text: "La Verne", id: "POC",}, {text: "Fort Polk", id: "POE",}, {
    text: "Poplar Bluff",
    id: "POF",
}, {text: "Port Gentil", id: "POG",}, {text: "Potosi", id: "POI",}, {
    text: "Patos De Minas",
    id: "POJ",
}, {text: "Pemba", id: "POL",}, {text: "Port Moresby", id: "POM",}, {
    text: "Pocos De Caldas",
    id: "POO",
}, {text: "Puerto Plata", id: "POP",}, {text: "Pori", id: "POR",}, {
    text: "Port Of Spain",
    id: "POS",
}, {text: "Port Antonio", id: "POT",}, {text: "Portoroz", id: "POW",}, {text: "Paris", id: "POX",}, {
    text: "Poznan",
    id: "POZ",
}, {text: "Presidente Prudente", id: "PPB",}, {text: "Prospect Creek", id: "PPC",}, {
    text: "Puerto Penasco",
    id: "PPE",
}, {text: "Pago Pago", id: "PPG",}, {text: "Petropavlovsk", id: "PPK",}, {text: "Phaplu", id: "PPL",}, {
    text: "Popayan",
    id: "PPN",
}, {text: "Proserpine", id: "PPP",}, {text: "Paraparaumu", id: "PPQ",}, {
    text: "Puerto Princesa",
    id: "PPS",
}, {text: "Tahiti", id: "PPT",}, {text: "Port Protection", id: "PPV",}, {
    text: "Papa Westray",
    id: "PPW",
}, {text: "Phu Quoc Island", id: "PQC",}, {text: "Presque Isle", id: "PQI",}, {
    text: "Port Macquarie",
    id: "PQQ",
}, {text: "Pilot Station", id: "PQS",}, {text: "Parana", id: "PRA",}, {text: "Prescott", id: "PRC",}, {
    text: "Prague",
    id: "PRG",
}, {text: "Phrae", id: "PRH",}, {text: "Praslin Island", id: "PRI",}, {text: "Pristina", id: "PRN",}, {
    text: "Prerov",
    id: "PRV",
}, {text: "Pretoria", id: "PRY",}, {text: "Pisa", id: "PSA",}, {text: "Pasco", id: "PSC",}, {
    text: "Port Said",
    id: "PSD",
}, {text: "Ponce", id: "PSE",}, {text: "Petersburg", id: "PSG",}, {text: "St Peter-Ording", id: "PSH",}, {
    text: "Pasni",
    id: "PSI",
}, {text: "Poso", id: "PSJ",}, {text: "Perth", id: "PSL",}, {text: "Boston", id: "PSM",}, {
    text: "Pasto",
    id: "PSO",
}, {text: "Palm Springs", id: "PSP",}, {text: "Pescara", id: "PSR",}, {
    text: "Posadas",
    id: "PSS",
}, {text: "Putussibau", id: "PSU",}, {text: "Papa Stour", id: "PSV",}, {
    text: "Palacios",
    id: "PSX",
}, {text: "Port Stanley", id: "PSY",}, {text: "Puerto Suarez", id: "PSZ",}, {
    text: "Port Alsworth",
    id: "PTA",
}, {text: "Petersburg", id: "PTB",}, {text: "Malolo Lailai Island", id: "PTF",}, {
    text: "Polokwane",
    id: "PTG",
}, {text: "Port Heiden", id: "PTH",}, {text: "Portland", id: "PTJ",}, {
    text: "Pontiac",
    id: "PTK",
}, {text: "Pointe A Pitre", id: "PTP",}, {text: "Platinum", id: "PTU",}, {
    text: "Panama text",
    id: "PTY",
}, {text: "Pastaza", id: "PTZ",}, {text: "Pueblo", id: "PUB",}, {text: "Price", id: "PUC",}, {
    text: "Puerto Deseado",
    id: "PUD",
}, {text: "Puerto Obaldia", id: "PUE",}, {text: "Pau", id: "PUF",}, {
    text: "Port Augusta",
    id: "PUG",
}, {text: "Punta Cana", id: "PUJ",}, {text: "Pukarua, Tuamoto Island", id: "PUK",}, {
    text: "Kolaka",
    id: "PUM",
}, {text: "Punta Arenas", id: "PUQ",}, {text: "Puerto Rico", id: "PUR",}, {
    text: "Busan",
    id: "PUS",
}, {text: "Puerto Asis", id: "PUU",}, {text: "Pullman", id: "PUW",}, {
    text: "Pula",
    id: "PUY",
}, {text: "Puerto Cabezas", id: "PUZ",}, {text: "Providencia", id: "PVA",}, {
    text: "Provincetown",
    id: "PVC",
}, {text: "Providence", id: "PVD",}, {text: "El Porvenir", id: "PVE",}, {
    text: "Shanghai",
    id: "PVG",
}, {text: "Porto Velho", id: "PVH",}, {text: "Preveza/Lefkada", id: "PVK",}, {
    text: "Portoviejo",
    id: "PVO",
}, {text: "Puerto Vallarta", id: "PVR",}, {text: "Provideniya", id: "PVS",}, {
    text: "Provo",
    id: "PVU",
}, {text: "Pevek", id: "PWE",}, {text: "Chicago", id: "PWK",}, {text: "Portland", id: "PWM",}, {
    text: "Pavlodar",
    id: "PWQ",
}, {text: "Bremerton", id: "PWT",}, {text: "Prominent Hill", id: "PXH",}, {
    text: "Puerto Escondido",
    id: "PXM",
}, {text: "Porto Santo", id: "PXO",}, {text: "Pleiku", id: "PXU",}, {
    text: "Playon Chico",
    id: "PYC",
}, {text: "Penrhyn Atoll", id: "PYE",}, {text: "Puerto Ayacucho", id: "PYH",}, {
    text: "Polyarnyj",
    id: "PYJ",
}, {text: "Plymouth", id: "PYM",}, {text: "Pyrgos", id: "PYR",}, {text: "Pai", id: "PYY",}, {
    text: "Pietermaritzburg",
    id: "PZB",
}, {text: "Penzance", id: "PZE",}, {text: "Zhob", id: "PZH",}, {text: "Pan Zhi Hua", id: "PZI",}, {
    text: "Puerto Ordaz",
    id: "PZO",
}, {text: "Port Sudan", id: "PZU",}, {text: "Piestany", id: "PZY",}, {
    text: "Ech Cheliff",
    id: "QAS",
}, {text: "Bella Coola", id: "QBC",}, {text: "Botucatu", id: "QCJ",}, {
    text: "Akunnaaq",
    id: "QCU",
}, {text: "Coningsby", id: "QCY",}, {text: "Djelfa", id: "QDJ",}, {text: "Duesseldorf", id: "QDU",}, {
    text: "Egelsbach",
    id: "QEF",
}, {text: "Boufarik", id: "QFD",}, {text: "Iginniarfik", id: "QFI",}, {text: "Duxford", id: "QFO",}, {
    text: "Harar",
    id: "QHR",
}, {text: "Cologne/Bonn", id: "QKL",}, {text: "Kangaamiut", id: "QKT",}, {text: "Lasham", id: "QLA",}, {
    text: "Latina",
    id: "QLT",
}, {text: "Masjed Soleyman", id: "QMJ",}, {text: "Annemasse", id: "QNJ",}, {
    text: "Nova Iguacu",
    id: "QNV",
}, {text: "Macon", id: "QNX",}, {text: "Otaru", id: "QOT",}, {text: "Owerri", id: "QOW",}, {
    text: "Singapore",
    id: "QPG",
}, {text: "Pirassununga", id: "QPS",}, {text: "Piacenza", id: "QPZ",}, {text: "London", id: "QQP",}, {
    text: "London",
    id: "QQS",
}, {text: "Johannesburg", id: "QRA",}, {text: "Queretaro", id: "QRO",}, {text: "Warri", id: "QRW",}, {
    text: "Sabadell",
    id: "QSA",
}, {text: "Sao Carlos", id: "QSC",}, {text: "Setif", id: "QSF",}, {text: "Salerno", id: "QSR",}, {
    text: "Puttgarden",
    id: "QUA",
}, {text: "Ubari", id: "QUB",}, {text: "Gusau", id: "QUS",}, {text: "Aix-en-Provence", id: "QXB",}, {
    text: "Angers",
    id: "QXG",
}, {text: "Gdynia", id: "QYD",}, {text: "Hilversum", id: "QYI",}, {text: "Troyes", id: "QYR",}, {
    text: "Rabaul",
    id: "RAB",
}, {text: "Racine", id: "RAC",}, {text: "Arar", id: "RAE",}, {text: "Rafaela", id: "RAF",}, {
    text: "Rafha",
    id: "RAH",
}, {text: "Praia", id: "RAI",}, {text: "Rajkot", id: "RAJ",}, {text: "Marrakech", id: "RAK",}, {
    text: "Riverside",
    id: "RAL",
}, {text: "Ramingining", id: "RAM",}, {text: "Ribeirao Preto", id: "RAO",}, {
    text: "Rapid text",
    id: "RAP",
}, {text: "Rarotonga Island", id: "RAR",}, {text: "Rasht", id: "RAS",}, {
    text: "Raduzhny",
    id: "RAT",
}, {text: "Rawala Kot", id: "RAZ",}, {text: "Rabat", id: "RBA",}, {text: "Borba", id: "RBB",}, {
    text: "Dallas",
    id: "RBD",
}, {text: "Ratanakiri", id: "RBE",}, {text: "Rancho", id: "RBK",}, {
    text: "Straubing",
    id: "RBM",
}, {text: "Rurrenabaque", id: "RBQ",}, {text: "Rio Branco", id: "RBR",}, {
    text: "Ramata Island",
    id: "RBV",
}, {text: "Rumbek", id: "RBX",}, {text: "Ruby", id: "RBY",}, {text: "Rapid text", id: "RCA",}, {
    text: "Richards Bay",
    id: "RCB",
}, {text: "Roche Harbor", id: "RCE",}, {text: "Riohacha", id: "RCH",}, {
    text: "Redcliffe",
    id: "RCL",
}, {text: "Richmond", id: "RCM",}, {text: "Rochefort", id: "RCO",}, {
    text: "Rochester",
    id: "RCS",
}, {text: "Rio Cuarto", id: "RCU",}, {text: "Redencao", id: "RDC",}, {text: "Redding", id: "RDD",}, {
    text: "Reading",
    id: "RDG",
}, {text: "Redmond", id: "RDM",}, {text: "Redang Island", id: "RDN",}, {
    text: "Red River",
    id: "RDR",
}, {text: "Rincon de Los Sauces", id: "RDS",}, {text: "Raleigh/Durham", id: "RDU",}, {
    text: "Red Devil",
    id: "RDV",
}, {text: "Rodez", id: "RDZ",}, {text: "Reao, Tuamoto Island", id: "REA",}, {
    text: "Recife",
    id: "REC",
}, {text: "Reggio di Calabria", id: "REG",}, {text: "Regina", id: "REI",}, {
    text: "Reykjavik",
    id: "REK",
}, {text: "Trelew", id: "REL",}, {text: "Orenburg", id: "REN",}, {text: "Siem Reap", id: "REP",}, {
    text: "Resistencia",
    id: "RES",
}, {text: "Rost", id: "RET",}, {text: "Reus", id: "REU",}, {text: "Reynosa", id: "REX",}, {
    text: "Reyes",
    id: "REY",
}, {text: "Chicago", id: "RFD",}, {text: "Raiatea", id: "RFP",}, {text: "Rosita", id: "RFS",}, {
    text: "Rio Grande",
    id: "RGA",
}, {text: "Rangiroa", id: "RGI",}, {text: "Gorno-Altaysk", id: "RGK",}, {
    text: "Rio Gallegos",
    id: "RGL",
}, {text: "Yangon", id: "RGN",}, {text: "Orang", id: "RGO",}, {text: "Burgos", id: "RGS",}, {
    text: "Rengat",
    id: "RGT",
}, {text: "Rio Hondo", id: "RHD",}, {text: "Reims", id: "RHE",}, {text: "Rhinelander", id: "RHI",}, {
    text: "Rhodes",
    id: "RHO",
}, {text: "Ramechhap", id: "RHP",}, {text: "Santa Maria", id: "RIA",}, {
    text: "Riberalta",
    id: "RIB",
}, {text: "Richmond", id: "RIC",}, {text: "Richmond", id: "RID",}, {text: "Richfield", id: "RIF",}, {
    text: "Rio Grande",
    id: "RIG",
}, {text: "Rifle", id: "RIL",}, {text: "Ringgi Cove", id: "RIN",}, {
    text: "Rio De Janeiro",
    id: "RIO",
}, {text: "Riverside", id: "RIR",}, {text: "Rishiri", id: "RIS",}, {text: "Riverside", id: "RIV",}, {
    text: "Riverton",
    id: "RIW",
}, {text: "Riga", id: "RIX",}, {text: "Mukalla", id: "RIY",}, {text: "Rajahmundry", id: "RJA",}, {
    text: "Rajshahi",
    id: "RJH",
}, {text: "Rijeka", id: "RJK",}, {text: "Logrono", id: "RJL",}, {text: "Rafsanjan", id: "RJN",}, {
    text: "Rockland",
    id: "RKD",
}, {text: "Copenhagen", id: "RKE",}, {text: "Rock Hill", id: "RKH",}, {
    text: "Rockport",
    id: "RKP",
}, {text: "Rock Springs", id: "RKS",}, {text: "Ras al Khaimah", id: "RKT",}, {
    text: "Reykjavik",
    id: "RKV",
}, {text: "Rikaze", id: "RKZ",}, {text: "Rostock", id: "RLG",}, {text: "Bayannaoer", id: "RLK",}, {
    text: "Merlo",
    id: "RLO",
}, {text: "Roma", id: "RMA",}, {text: "Rome", id: "RME",}, {text: "Marsa Alam", id: "RMF",}, {
    text: "Rome",
    id: "RMG",
}, {text: "Rimini", id: "RMI",}, {text: "Renmark", id: "RMK",}, {text: "Colombo", id: "RML",}, {
    text: "Rampart",
    id: "RMP",
}, {text: "Taichung", id: "RMQ",}, {text: "Ramstein", id: "RMS",}, {text: "Rimatara", id: "RMT",}, {
    text: "Mariposa",
    id: "RMY",
}, {text: "Arona", id: "RNA",}, {text: "Ronneby", id: "RNB",}, {text: "San Antonio", id: "RND",}, {
    text: "Roanne",
    id: "RNE",
}, {text: "Corn Island", id: "RNI",}, {text: "Yoron", id: "RNJ",}, {
    text: "Rennell Island",
    id: "RNL",
}, {text: "Qarn Alam", id: "RNM",}, {text: "Bornholm", id: "RNN",}, {text: "Reno", id: "RNO",}, {
    text: "Rongelap",
    id: "RNP",
}, {text: "Rennes", id: "RNS",}, {text: "Renton", id: "RNT",}, {text: "Roanoke", id: "ROA",}, {
    text: "Monrovia",
    id: "ROB",
}, {text: "Rochester", id: "ROC",}, {text: "Robertson", id: "ROD",}, {text: "Roi Et", id: "ROI",}, {
    text: "Rockhampton",
    id: "ROK",
}, {all: !0, text: "Rome", id: "ROM",}, {text: "Rondonopolis", id: "ROO",}, {text: "Rota", id: "ROP",}, {
    text: "Koror",
    id: "ROR",
}, {text: "Rosario", id: "ROS",}, {text: "Rotorua", id: "ROT",}, {text: "Rostov", id: "ROV",}, {
    text: "Roswell",
    id: "ROW",
}, {text: "Roper Bar", id: "RPB",}, {text: "Rosh Pina", id: "RPN",}, {
    text: "Raipur",
    id: "RPR",
}, {text: "Rodrigues Island", id: "RRG",}, {text: "Rourkela", id: "RRK",}, {
    text: "Roros",
    id: "RRS",
}, {text: "Santa Rosa", id: "RSA",}, {text: "Rock Sound", id: "RSD",}, {
    text: "Russian Mission",
    id: "RSH",
}, {text: "Rosario", id: "RSJ",}, {text: "Rochester", id: "RST",}, {
    text: "Yeosu/Suncheon",
    id: "RSU",
}, {text: "Fort Myers", id: "RSW",}, {text: "Rotuma Island", id: "RTA",}, {text: "Roatan", id: "RTB",}, {
    text: "Ruteng",
    id: "RTG",
}, {text: "Rotterdam", id: "RTM",}, {text: "Saratov", id: "RTW",}, {text: "Arua", id: "RUA",}, {
    text: "Riyadh",
    id: "RUH",
}, {text: "Rukumkot", id: "RUK",}, {text: "Rumjatar", id: "RUM",}, {
    text: "Saint Denis de la Reunion",
    id: "RUN",
}, {text: "Rurutu", id: "RUR",}, {text: "Marau", id: "RUS",}, {text: "Rutland", id: "RUT",}, {
    text: "Farafangana",
    id: "RVA",
}, {text: "Rio Verde", id: "RVD",}, {text: "Saravena", id: "RVE",}, {text: "Roervik", id: "RVK",}, {
    text: "Rovaniemi",
    id: "RVN",
}, {text: "Green River", id: "RVR",}, {text: "Tulsa", id: "RVS",}, {text: "Ravensthorpe", id: "RVT",}, {
    text: "Rairua",
    id: "RVV",
}, {text: "Rivera", id: "RVY",}, {text: "Rocky Mount/Wilson", id: "RWI",}, {
    text: "Rawlins",
    id: "RWL",
}, {text: "Rivne", id: "RWN",}, {text: "Roxas", id: "RXS",}, {text: "Rybinsk", id: "RYB",}, {
    text: "Oslo",
    id: "RYG",
}, {text: "Rahim Yar Khan", id: "RYK",}, {text: "Royan", id: "RYN",}, {
    text: "Rio Turbio",
    id: "RYO",
}, {text: "Santa Cruz", id: "RZA",}, {text: "Rzeszow", id: "RZE",}, {
    text: "Taytay Sandoval",
    id: "RZP",
}, {text: "Ramsar", id: "RZR",}, {text: "Saratoga", id: "SAA",}, {text: "Saba", id: "SAB",}, {
    text: "Sacramento",
    id: "SAC",
}, {text: "Safford", id: "SAD",}, {text: "Santa Fe", id: "SAF",}, {text: "Sana'a", id: "SAH",}, {
    text: "Saudarkrokur",
    id: "SAK",
}, {text: "San Salvador", id: "SAL",}, {text: "San Diego", id: "SAN",}, {
    text: "Sao Paulo",
    id: "SAO",
}, {text: "San Pedro Sula", id: "SAP",}, {text: "San Andros", id: "SAQ",}, {
    text: "San Antonio",
    id: "SAT",
}, {text: "Savannah", id: "SAV",}, {text: "Istanbul", id: "SAW",}, {text: "Sambu", id: "SAX",}, {
    text: "Siena",
    id: "SAY",
}, {text: "Santa Barbara", id: "SBA",}, {text: "San Bernardino", id: "SBD",}, {
    text: "Sabang",
    id: "SBG",
}, {text: "St Barthelemy", id: "SBH",}, {text: "Saint Brieuc", id: "SBK",}, {
    text: "Sheboygan",
    id: "SBM",
}, {text: "South Bend", id: "SBN",}, {text: "Salina", id: "SBO",}, {
    text: "San Luis Obispo",
    id: "SBP",
}, {text: "Saibai Island", id: "SBR",}, {text: "Steamboat Springs", id: "SBS",}, {
    text: "Springbok",
    id: "SBU",
}, {text: "Sibu", id: "SBW",}, {text: "Salisbury-Ocean text", id: "SBY",}, {
    text: "Sibiu",
    id: "SBZ",
}, {text: "Prudhoe Bay/Deadhorse", id: "SCC",}, {text: "State College", id: "SCE",}, {
    text: "Schenectady",
    id: "SCH",
}, {text: "Sacramento", id: "SCK",}, {text: "Santiago", id: "SCL",}, {
    text: "Scammon Bay",
    id: "SCM",
}, {text: "Saarbruecken", id: "SCN",}, {text: "Aktau", id: "SCO",}, {
    text: "Santiago De Compostela",
    id: "SCQ",
}, {text: "Shetland Islands", id: "SCS",}, {text: "Socotra", id: "SCT",}, {
    text: "Santiago de Cuba",
    id: "SCU",
}, {text: "Suceava", id: "SCV",}, {text: "Syktyvkar", id: "SCW",}, {
    text: "Salina Cruz",
    id: "SCX",
}, {text: "San Cristobal Island", id: "SCY",}, {text: "Santa Cruz Island", id: "SCZ",}, {
    text: "Sandcreek",
    id: "SDC",
}, {text: "Lubango", id: "SDD",}, {text: "Santiago Del Estero", id: "SDE",}, {
    text: "Louisville",
    id: "SDF",
}, {text: "Sanandaj", id: "SDG",}, {text: "Sendai", id: "SDJ",}, {text: "Sandakan", id: "SDK",}, {
    text: "Sundsvall",
    id: "SDL",
}, {text: "San Diego", id: "SDM",}, {text: "Sandane", id: "SDN",}, {
    text: "Sand Point",
    id: "SDP",
}, {text: "Santo Domingo", id: "SDQ",}, {text: "Santander", id: "SDR",}, {
    text: "Saidu Sharif",
    id: "SDT",
}, {text: "Rio De Janeiro", id: "SDU",}, {text: "Tel Aviv-Yafo", id: "SDV",}, {
    text: "Sedona",
    id: "SDX",
}, {text: "Sidney", id: "SDY",}, {text: "Shetland Islands", id: "SDZ",}, {text: "Seattle", id: "SEA",}, {
    text: "Sebha",
    id: "SEB",
}, {text: "San Diego", id: "SEE",}, {text: "Sebring", id: "SEF",}, {text: "Senggeh", id: "SEH",}, {
    text: "Seoul",
    id: "SEL",
}, {text: "Selma", id: "SEM",}, {text: "London", id: "SEN",}, {text: "Seronera", id: "SEU",}, {
    text: "Selibabi",
    id: "SEY",
}, {text: "Mahe Island", id: "SEZ",}, {text: "Sfax", id: "SFA",}, {text: "Orlando", id: "SFB",}, {
    text: "St Francois",
    id: "SFC",
}, {text: "San Fernando De Apure", id: "SFD",}, {text: "San Fernando", id: "SFE",}, {
    text: "Spokane",
    id: "SFF",
}, {text: "St Martin", id: "SFG",}, {text: "San Felipe", id: "SFH",}, {
    text: "Kangerlussuaq",
    id: "SFJ",
}, {text: "Soure", id: "SFK",}, {text: "Sao Filipe", id: "SFL",}, {text: "Sanford", id: "SFM",}, {
    text: "Santa Fe",
    id: "SFN",
}, {text: "San Francisco", id: "SFO",}, {text: "Sanliurfa", id: "SFQ",}, {
    text: "Subic Bay",
    id: "SFS",
}, {text: "Skelleftea", id: "SFT",}, {text: "Smithfield", id: "SFZ",}, {
    text: "Surgut",
    id: "SGC",
}, {text: "Sonderborg", id: "SGD",}, {text: "Springfield", id: "SGF",}, {
    text: "Springfield",
    id: "SGH",
}, {text: "Sagarai", id: "SGJ",}, {text: "Ho Chi Minh text", id: "SGN",}, {
    text: "St George",
    id: "SGO",
}, {text: "Houston", id: "SGR",}, {text: "Saint George", id: "SGU",}, {
    text: "Sierra Grande",
    id: "SGV",
}, {text: "Skagway", id: "SGY",}, {text: "Shanghai", id: "SHA",}, {
    text: "Nakashibetsu",
    id: "SHB",
}, {text: "Inda Selassie", id: "SHC",}, {text: "Staunton", id: "SHD",}, {
    text: "Shenyang",
    id: "SHE",
}, {text: "Shungnak", id: "SHG",}, {text: "Shishmaref", id: "SHH",}, {
    text: "Shimojishima",
    id: "SHI",
}, {text: "Sharjah", id: "SHJ",}, {text: "Shillong", id: "SHL",}, {text: "Shirahama", id: "SHM",}, {
    text: "Manzini",
    id: "SHO",
}, {text: "Sheridan", id: "SHR",}, {text: "Shepparton", id: "SHT",}, {
    text: "Shreveport",
    id: "SHV",
}, {text: "Sharurah", id: "SHW",}, {text: "Shageluk", id: "SHX",}, {text: "Shinyanga", id: "SHY",}, {
    text: "Xi'an",
    id: "SIA",
}, {text: "Sibiti", id: "SIB",}, {text: "Sinop", id: "SIC",}, {text: "Sal Island", id: "SID",}, {
    text: "Simara",
    id: "SIF",
}, {text: "San Juan", id: "SIG",}, {text: "Siglufjordur", id: "SIJ",}, {text: "Sikeston", id: "SIK",}, {
    text: "Simbai",
    id: "SIM",
}, {text: "Singapore", id: "SIN",}, {text: "Simferopol", id: "SIP",}, {text: "Singkep", id: "SIQ",}, {
    text: "Sion",
    id: "SIR",
}, {text: "Sishen", id: "SIS",}, {text: "Sitka", id: "SIT",}, {text: "Siuna", id: "SIU",}, {
    text: "San Jose",
    id: "SJC",
}, {text: "San Jose del Cabo", id: "SJD",}, {text: "San Jose Del Gua", id: "SJE",}, {
    text: "San Jose",
    id: "SJI",
}, {text: "Sarajevo", id: "SJJ",}, {text: "Sao Jose dos Campos", id: "SJK",}, {
    text: "Sao Gabriel",
    id: "SJL",
}, {text: "San Jose", id: "SJO",}, {text: "Sao Jose Do Rio Preto", id: "SJP",}, {
    text: "San Angelo",
    id: "SJT",
}, {text: "San Juan", id: "SJU",}, {text: "Shijiazhuang", id: "SJW",}, {
    text: "Sarteneja",
    id: "SJX",
}, {text: "Seinajoki", id: "SJY",}, {text: "Sao Jorge Island", id: "SJZ",}, {
    text: "Spokane",
    id: "SKA",
}, {text: "St Kitts", id: "SKB",}, {text: "Suki", id: "SKC",}, {text: "Samarkand", id: "SKD",}, {
    text: "Skien",
    id: "SKE",
}, {text: "San Antonio", id: "SKF",}, {text: "Thessaloniki", id: "SKG",}, {
    text: "Surkhet",
    id: "SKH",
}, {text: "Shaktoolik", id: "SKK",}, {text: "Stokmarknes", id: "SKN",}, {text: "Sokoto", id: "SKO",}, {
    text: "Skopje",
    id: "SKP",
}, {text: "Vojens", id: "SKS",}, {text: "Sialkot", id: "SKT",}, {text: "Skyros", id: "SKU",}, {
    text: "St Catherine",
    id: "SKV",
}, {text: "Saransk", id: "SKX",}, {text: "Sandusky", id: "SKY",}, {text: "Sukkur", id: "SKZ",}, {
    text: "Salta",
    id: "SLA",
}, {text: "Salt Lake text", id: "SLC",}, {text: "Sliac", id: "SLD",}, {text: "Salem", id: "SLE",}, {
    text: "Sulayel",
    id: "SLF",
}, {text: "Sola", id: "SLH",}, {text: "Solwezi", id: "SLI",}, {text: "Solomon", id: "SLJ",}, {
    text: "Saranac Lake",
    id: "SLK",
}, {text: "Salalah", id: "SLL",}, {text: "Salamanca", id: "SLM",}, {
    text: "Salina",
    id: "SLN",
}, {text: "San Luis Potosi", id: "SLP",}, {text: "Sleetmute", id: "SLQ",}, {
    text: "St Lucia",
    id: "SLU",
}, {text: "Shimla", id: "SLV",}, {text: "Saltillo", id: "SLW",}, {text: "Salt Cay", id: "SLX",}, {
    text: "Salekhard",
    id: "SLY",
}, {text: "Sao Luis", id: "SLZ",}, {text: "Santa Maria (Azores)", id: "SMA",}, {
    text: "Fort Wayne",
    id: "SMD",
}, {text: "Somerset", id: "SME",}, {text: "Sacramento", id: "SMF",}, {text: "Samos", id: "SMI",}, {
    text: "St Michael",
    id: "SMK",
}, {text: "Stella Maris", id: "SML",}, {text: "Salmon", id: "SMN",}, {
    text: "Santa Monica",
    id: "SMO",
}, {text: "Sampit", id: "SMQ",}, {text: "Santa Marta", id: "SMR",}, {
    text: "Sainte-Marie",
    id: "SMS",
}, {text: "St Moritz", id: "SMV",}, {text: "Smara", id: "SMW",}, {
    text: "Santa Maria",
    id: "SMX",
}, {text: "Stoelmanseiland", id: "SMZ",}, {text: "Santa Ana", id: "SNA",}, {
    text: "Salinas",
    id: "SNC",
}, {text: "Sao Nicolau Island", id: "SNE",}, {text: "Shannon", id: "SNN",}, {
    text: "Sakon Nakhon",
    id: "SNO",
}, {text: "Saint Paul Island", id: "SNP",}, {text: "Saint Nazaire", id: "SNR",}, {
    text: "Santa Clara",
    id: "SNU",
}, {text: "Santa Elena", id: "SNV",}, {text: "Thandwe", id: "SNW",}, {text: "Sidney", id: "SNY",}, {
    text: "Heviz",
    id: "SOB",
}, {text: "Surakarta (Solo)", id: "SOC",}, {text: "Sorocaba", id: "SOD",}, {
    text: "Sofia",
    id: "SOF",
}, {text: "Sogndal", id: "SOG",}, {text: "Sorkjosen", id: "SOJ",}, {text: "San Tome", id: "SOM",}, {
    text: "Luganville",
    id: "SON",
}, {text: "Soderhamn", id: "SOO",}, {text: "Southern Pines", id: "SOP",}, {
    text: "Sorong",
    id: "SOQ",
}, {text: "Sodankyla", id: "SOT",}, {text: "Southampton", id: "SOU",}, {
    text: "Show Low",
    id: "SOW",
}, {text: "Stronsay", id: "SOY",}, {text: "Solenzara", id: "SOZ",}, {
    text: "St Thomas Island",
    id: "SPB",
}, {text: "Santa Cruz De La Palma", id: "SPC",}, {text: "Saidpur", id: "SPD",}, {
    text: "Spearfish",
    id: "SPF",
}, {text: "St Petersburg", id: "SPG",}, {text: "Springfield", id: "SPI",}, {
    text: "Sapporo",
    id: "SPK",
}, {text: "Spangdahlem", id: "SPM",}, {text: "Saipan", id: "SPN",}, {text: "Menongue", id: "SPP",}, {
    text: "San Pedro",
    id: "SPR",
}, {text: "Wichita Falls", id: "SPS",}, {text: "Split", id: "SPU",}, {text: "Spencer", id: "SPW",}, {
    text: "San Pedro",
    country: "Cote d'Ivoire",
    id: "SPY",
}, {text: "Springdale", id: "SPZ",}, {text: "Sintang", id: "SQG",}, {text: "Son La", id: "SQH",}, {
    text: "San Carlos",
    id: "SQL",
}, {text: "Storuman", id: "SQO",}, {text: "Siauliai", id: "SQQ",}, {text: "Santa Rosa", id: "SRA",}, {
    text: "Sucre",
    id: "SRE",
}, {text: "Semarang", id: "SRG",}, {text: "Sarh", id: "SRH",}, {text: "Samarinda", id: "SRI",}, {
    text: "San Borja",
    id: "SRJ",
}, {text: "Strahan", id: "SRN",}, {text: "Stord", id: "SRP",}, {
    text: "Sarasota",
    id: "SRQ",
}, {text: "Stradbroke Island", id: "SRR",}, {text: "Soroti", id: "SRT",}, {
    text: "Stony River",
    id: "SRV",
}, {text: "Sirte", id: "SRX",}, {text: "Sari", id: "SRY",}, {text: "Santa Cruz", id: "SRZ",}, {
    text: "Salvador",
    id: "SSA",
}, {text: "Saint Croix Island", id: "SSB",}, {text: "Sumter", id: "SSC",}, {
    text: "Solapur",
    id: "SSE",
}, {text: "Malabo", id: "SSG",}, {text: "Sharm el-Sheikh", id: "SSH",}, {
    text: "Brunswick",
    id: "SSI",
}, {text: "Sandnessjoen", id: "SSJ",}, {text: "Seoul", id: "SSN",}, {text: "Sara", id: "SSR",}, {
    text: "Santa Teresita",
    id: "SST",
}, {text: "Singita Safari Lodge", id: "SSX",}, {text: "M'Banza Congo", id: "SSY",}, {
    text: "Santos",
    id: "SSZ",
}, {text: "Stauning", id: "STA",}, {text: "Santa Barbara Ed", id: "STB",}, {
    text: "Saint Cloud",
    id: "STC",
}, {text: "Santo Domingo", id: "STD",}, {text: "Stevens Point", id: "STE",}, {
    text: "St George Island",
    id: "STG",
}, {text: "Santiago", id: "STI",}, {text: "St Joseph", id: "STJ",}, {text: "Sterling", id: "STK",}, {
    text: "St Louis",
    id: "STL",
}, {text: "Santarem", id: "STM",}, {text: "London", id: "STN",}, {text: "Stockholm", id: "STO",}, {
    text: "St Paul",
    id: "STP",
}, {text: "Stuttgart", id: "STR",}, {text: "Santa Rosa", id: "STS",}, {
    text: "St Thomas Island",
    id: "STT",
}, {text: "Surat Gujarat", id: "STV",}, {text: "Stavropol", id: "STW",}, {
    text: "Saint Croix Island",
    id: "STX",
}, {text: "Salto", id: "STY",}, {text: "Santa Teresinha", id: "STZ",}, {text: "Stuart", id: "SUA",}, {
    text: "Surabaya",
    id: "SUB",
}, {text: "Sturgeon Bay", id: "SUE",}, {text: "Lamezia Terme", id: "SUF",}, {
    text: "Surigao",
    id: "SUG",
}, {text: "Sukhumi", id: "SUI",}, {text: "Satu Mare", id: "SUJ",}, {text: "Sui", id: "SUL",}, {
    text: "Sun Valley",
    id: "SUN",
}, {text: "Summer Beaver", id: "SUR",}, {text: "St Louis", id: "SUS",}, {text: "Fairfield", id: "SUU",}, {
    text: "Suva",
    id: "SUV",
}, {text: "Sioux text", id: "SUX",}, {text: "Savoonga", id: "SVA",}, {
    text: "Sambava",
    id: "SVB",
}, {text: "Silver text", id: "SVC",}, {text: "St Vincent", id: "SVD",}, {
    text: "Stavanger",
    id: "SVG",
}, {text: "Statesville", id: "SVH",}, {text: "San Vicente", id: "SVI",}, {
    text: "Svolvaer",
    id: "SVJ",
}, {text: "Savonlinna", id: "SVL",}, {text: "Savannah", id: "SVN",}, {text: "Moscow", id: "SVO",}, {
    text: "Kuito",
    id: "SVP",
}, {text: "Sevilla", id: "SVQ",}, {text: "Savusavu", id: "SVU",}, {
    text: "Sparrevohn",
    id: "SVW",
}, {text: "Yekaterinburg", id: "SVX",}, {text: "San Antonio", id: "SVZ",}, {
    text: "Shantou",
    id: "SWA",
}, {text: "Seward", id: "SWD",}, {text: "Newburgh", id: "SWF",}, {
    text: "South West Bay",
    id: "SWJ",
}, {text: "Swakopmund", id: "SWP",}, {text: "Sumbawa Besar", id: "SWQ",}, {
    text: "Swansea",
    id: "SWS",
}, {text: "Strezhevoy", id: "SWT",}, {text: "Shakawe", id: "SWX",}, {text: "Strasbourg", id: "SXB",}, {
    text: "Berlin",
    id: "SXF",
}, {text: "Sligo", id: "SXL",}, {text: "St Maarten", id: "SXM",}, {
    text: "Sao Felix Do Araguaia",
    id: "SXO",
}, {text: "Sheldon Point", id: "SXP",}, {text: "Soldotna", id: "SXQ",}, {
    text: "Srinagar",
    id: "SXR",
}, {text: "Sao Felix Do Xingu", id: "SXX",}, {text: "Shemya", id: "SYA",}, {
    text: "Seal Bay",
    id: "SYB",
}, {text: "Sydney", id: "SYD",}, {text: "Syangboche", id: "SYH",}, {text: "Simao", id: "SYM",}, {
    text: "Shonai",
    id: "SYO",
}, {text: "San Jose", id: "SYQ",}, {text: "Syracuse", id: "SYR",}, {
    text: "Warraber Island",
    id: "SYU",
}, {text: "Sehwan Sharif", id: "SYW",}, {text: "Sanya", id: "SYX",}, {
    text: "Stornoway, Outer Stat Hebrides",
    id: "SYY",
}, {text: "Shiraz", id: "SYZ",}, {text: "Soyo", id: "SZA",}, {text: "Kuala Lumpur", id: "SZB",}, {
    text: "Samsun",
    id: "SZF",
}, {text: "Salzburg", id: "SZG",}, {text: "Skukuza", id: "SZK",}, {
    text: "Warrensburg",
    id: "SZL",
}, {text: "Stewart Island", id: "SZS",}, {text: "Schwerin", id: "SZW",}, {
    text: "Shenzhen",
    id: "SZX",
}, {text: "Szczecin", id: "SZZ",}, {text: "Tobago", id: "TAB",}, {text: "Tacloban", id: "TAC",}, {
    text: "Daegu",
    id: "TAE",
}, {text: "Oran", id: "TAF",}, {text: "Tagbilaran", id: "TAG",}, {text: "Tanna Island", id: "TAH",}, {
    text: "Taizz",
    id: "TAI",
}, {text: "Takamatsu", id: "TAK",}, {text: "Tanana", id: "TAL",}, {text: "Tampico", id: "TAM",}, {
    text: "Tangalooma",
    id: "TAN",
}, {text: "Qingdao", id: "TAO",}, {text: "Tapachula", id: "TAP",}, {text: "Taranto", id: "TAR",}, {
    text: "Tashkent",
    id: "TAS",
}, {text: "Poprad/Tatry", id: "TAT",}, {text: "Tartu", id: "TAY",}, {text: "Dashoguz", id: "TAZ",}, {
    text: "Tuy Hoa",
    id: "TBB",
}, {text: "Tabiteuea", id: "TBF",}, {text: "Tabubil", id: "TBG",}, {
    text: "Tablas Island",
    id: "TBH",
}, {text: "Tabarka", id: "TBJ",}, {text: "Fort Leonard Wood", id: "TBN",}, {
    text: "Tabora",
    id: "TBO",
}, {text: "Tumbes", id: "TBP",}, {text: "Tbilisi", id: "TBS",}, {text: "Tabatinga", id: "TBT",}, {
    text: "Nuku'alofa",
    id: "TBU",
}, {text: "Tambov", id: "TBW",}, {text: "Tabriz", id: "TBZ",}, {
    text: "Tennant Creek",
    id: "TCA",
}, {text: "Treasure Cay", id: "TCB",}, {text: "Tucumcari", id: "TCC",}, {text: "Tarapaca", id: "TCD",}, {
    text: "Tulcea",
    id: "TCE",
}, {text: "Tacheng", id: "TCG",}, {text: "Tchibanga", id: "TCH",}, {
    all: !0,
    text: "Tenerife",
    id: "TCI",
}, {text: "Tuscaloosa", id: "TCL",}, {text: "Tacoma", id: "TCM",}, {text: "Tehuacan", id: "TCN",}, {
    text: "Tumaco",
    id: "TCO",
}, {text: "Taba", id: "TCP",}, {text: "Tacna", id: "TCQ",}, {
    text: "Truth Or Consequences",
    id: "TCS",
}, {text: "Takotna", id: "TCT",}, {text: "Terrace Bay", id: "TCY",}, {
    text: "Teng Chong",
    id: "TCZ",
}, {text: "Trinidad", id: "TDD",}, {text: "Tandag", id: "TDG",}, {text: "Tadjoura", id: "TDJ",}, {
    text: "Taldykorgan",
    id: "TDK",
}, {text: "Tandil", id: "TDL",}, {text: "Theodore", id: "TDR",}, {text: "Trat", id: "TDX",}, {
    text: "Tela",
    id: "TEA",
}, {text: "Teterboro", id: "TEB",}, {text: "Thisted", id: "TED",}, {text: "Tebessa", id: "TEE",}, {
    text: "Telfer",
    id: "TEF",
}, {text: "Tatitlek", id: "TEK",}, {text: "Temora", id: "TEM",}, {text: "Tongren", id: "TEN",}, {
    text: "Tekirdag",
    id: "TEQ",
}, {text: "Terceira", id: "TER",}, {text: "Tete", id: "TET",}, {text: "Te Anau", id: "TEU",}, {
    text: "Telluride",
    id: "TEX",
}, {text: "Tezpur", id: "TEZ",}, {text: "Tefe", id: "TFF",}, {text: "Tufi", id: "TFI",}, {
    text: "Telefomin",
    id: "TFM",
}, {text: "Tenerife", id: "TFN",}, {text: "Tenerife", id: "TFS",}, {
    text: "Tanjung Manis",
    id: "TGC",
}, {text: "Podgorica", id: "TGD",}, {text: "Kuala Terengganu", id: "TGG",}, {
    text: "Tongoa Island",
    id: "TGH",
}, {text: "Tiga", id: "TGJ",}, {text: "Tirgu Mures", id: "TGM",}, {text: "Tongliao", id: "TGO",}, {
    text: "Touggourt",
    id: "TGR",
}, {text: "Tanga", id: "TGT",}, {text: "Tegucigalpa", id: "TGU",}, {
    text: "Tuxtla Gutierrez",
    id: "TGZ",
}, {text: "Thanh Hoa", id: "THD",}, {text: "Teresina", id: "THE",}, {text: "Thangool", id: "THG",}, {
    text: "Tachilek",
    id: "THL",
}, {text: "Trollhattan", id: "THN",}, {text: "Thorshofn", id: "THO",}, {text: "Tianshui", id: "THQ",}, {
    text: "Tehran",
    id: "THR",
}, {text: "Sukhothai", id: "THS",}, {text: "Pituffik", id: "THU",}, {text: "Tahoua", id: "THZ",}, {
    text: "Tirana",
    id: "TIA",
}, {text: "Tinak", id: "TIC",}, {text: "Tiaret", id: "TID",}, {text: "Tippi", id: "TIE",}, {
    text: "Taif",
    id: "TIF",
}, {text: "Tikehau", id: "TIH",}, {text: "Tarin Kot", id: "TII",}, {
    text: "Tijuana",
    id: "TIJ",
}, {text: "Oklahoma text", id: "TIK",}, {text: "Tembagapura/Timika", id: "TIM",}, {
    text: "Tindouf",
    id: "TIN",
}, {text: "Tripoli", id: "TIP",}, {text: "Tinian", id: "TIQ",}, {text: "Tirupati", id: "TIR",}, {
    text: "Timaru",
    id: "TIU",
}, {text: "Tivat", id: "TIV",}, {text: "Tacoma", id: "TIW",}, {text: "Titusville", id: "TIX",}, {
    text: "Tidjikja",
    id: "TIY",
}, {text: "Tari", id: "TIZ",}, {text: "Tarija", id: "TJA",}, {text: "Tanjung Warukin", id: "TJG",}, {
    text: "Toyooka",
    id: "TJH",
}, {text: "Tyumen", id: "TJM",}, {text: "Tanjung Pandan", id: "TJQ",}, {
    text: "Tanjung Selor",
    id: "TJS",
}, {text: "Kulyab", id: "TJU",}, {text: "Talkeetna", id: "TKA",}, {text: "Tiko", id: "TKC",}, {
    text: "Takoradi",
    id: "TKD",
}, {text: "Tenakee Springs", id: "TKE",}, {text: "Truckee", id: "TKF",}, {
    text: "Bandar Lampung",
    id: "TKG",
}, {text: "Tokeen", id: "TKI",}, {text: "Chuuk", id: "TKK",}, {text: "Tokunoshima", id: "TKN",}, {
    text: "Takapoto",
    id: "TKP",
}, {text: "Kigoma", id: "TKQ",}, {text: "Tokushima", id: "TKS",}, {text: "Tak", id: "TKT",}, {
    text: "Turku",
    id: "TKU",
}, {text: "Takaroa", id: "TKX",}, {text: "Teller", id: "TLA",}, {text: "Mexico text", id: "TLC",}, {
    text: "Tuli Lodge",
    id: "TLD",
}, {text: "Toliara", id: "TLE",}, {text: "Tulaghi", id: "TLG",}, {text: "Tallahassee", id: "TLH",}, {
    text: "Tatalina",
    id: "TLJ",
}, {text: "Tallinn", id: "TLL",}, {text: "Tlemcen", id: "TLM",}, {text: "Toulon", id: "TLN",}, {
    text: "Turpan",
    id: "TLQ",
}, {text: "Toulouse", id: "TLS",}, {text: "Tuluksak", id: "TLT",}, {text: "Tolu", id: "TLU",}, {
    text: "Tel Aviv-Yafo",
    id: "TLV",
}, {text: "Tifton", id: "TMA",}, {text: "Miami", id: "TMB",}, {text: "Tambolaka", id: "TMC",}, {
    text: "Tame",
    id: "TME",
}, {text: "Tomanggong", id: "TMG",}, {text: "Tumlingtar", id: "TMI",}, {text: "Termez", id: "TMJ",}, {
    text: "Tam Ky",
    id: "TMK",
}, {text: "Tamale", id: "TML",}, {text: "Toamasina", id: "TMM",}, {text: "Tamana", id: "TMN",}, {
    text: "Tampere",
    id: "TMP",
}, {text: "Tamenghest", id: "TMR",}, {text: "Sao Tome", id: "TMS",}, {text: "Trombetas", id: "TMT",}, {
    text: "Tambor",
    id: "TMU",
}, {text: "Tamworth", id: "TMW",}, {text: "Timimoun", id: "TMX",}, {text: "Jinan", id: "TNA",}, {
    text: "Tin text",
    id: "TNC",
}, {text: "Trinidad", id: "TND",}, {text: "Tanegashima", id: "TNE",}, {
    text: "Toussus-le-Noble",
    id: "TNF",
}, {text: "Tangier", id: "TNG",}, {text: "Satna", id: "TNI",}, {text: "Tanjung Pinang", id: "TNJ",}, {
    text: "Tununak",
    id: "TNK",
}, {text: "Ternopil", id: "TNL",}, {text: "Tainan", id: "TNN",}, {text: "Tamarindo", id: "TNO",}, {
    text: "Antananarivo",
    id: "TNR",
}, {text: "Miami", id: "TNT",}, {text: "Stung Treng", id: "TNX",}, {text: "Torrance", id: "TOA",}, {
    text: "Tobruk",
    id: "TOB",
}, {text: "Toccoa", id: "TOC",}, {text: "Tioman Island", id: "TOD",}, {text: "Tozeur", id: "TOE",}, {
    text: "Tomsk",
    id: "TOF",
}, {text: "Togiak Village", id: "TOG",}, {text: "Torres Islands", id: "TOH",}, {
    text: "Madrid",
    id: "TOJ",
}, {text: "Toledo", id: "TOL",}, {text: "Tombouctou", id: "TOM",}, {text: "Topeka", id: "TOP",}, {
    text: "Tromso",
    id: "TOS",
}, {text: "Totness", id: "TOT",}, {text: "Touho", id: "TOU",}, {text: "Toledo", id: "TOW",}, {
    text: "Toyama",
    id: "TOY",
}, {text: "Tampa", id: "TPA",}, {text: "Tarapoa", id: "TPC",}, {text: "Taipei", id: "TPE",}, {
    text: "Tapini",
    id: "TPI",
}, {text: "Taplejung", id: "TPJ",}, {text: "Temple", id: "TPL",}, {text: "Tiputini", id: "TPN",}, {
    text: "Tarapoto",
    id: "TPP",
}, {text: "Tepic", id: "TPQ",}, {text: "Trapani", id: "TPS",}, {
    text: "San Domino Island",
    id: "TQR",
}, {text: "Torreon", id: "TRC",}, {text: "Trondheim", id: "TRD",}, {
    text: "Tiree, Inner Hebrides",
    id: "TRE",
}, {text: "Oslo", id: "TRF",}, {text: "Tauranga", id: "TRG",}, {
    text: "Bristol, VA/Johnson text/Kingsport",
    id: "TRI",
}, {text: "Tarakan", id: "TRK",}, {text: "Thermal", id: "TRM",}, {text: "Turin", id: "TRN",}, {
    text: "Taree",
    id: "TRO",
}, {text: "Trincomalee", id: "TRR",}, {text: "Trieste", id: "TRS",}, {
    text: "Trujillo",
    id: "TRU",
}, {text: "Thiruvananthapuram", id: "TRV",}, {text: "Tarawa", id: "TRW",}, {
    text: "Tiruchchirappalli",
    id: "TRZ",
}, {text: "Taipei", id: "TSA",}, {text: "Tsumeb", id: "TSB",}, {text: "Astana", id: "NQZ",}, {
    text: "Venice",
    id: "TSF",
}, {text: "Tshikapa", country: "Congo (Kinshasa)", id: "TSH",}, {text: "Tsushima", id: "TSJ",}, {
    text: "Tamuin",
    id: "TSL",
}, {text: "Tianjin", id: "TSN",}, {text: "Isles Of Scilly", id: "TSO",}, {
    text: "Timisoara",
    id: "TSR",
}, {text: "New York", id: "TSS",}, {text: "Trang", id: "TST",}, {
    text: "Tabiteuea South",
    id: "TSU",
}, {text: "Townsville", id: "TSV",}, {text: "Tan-Tan", id: "TTA",}, {text: "Tortoli", id: "TTB",}, {
    text: "Troutdale",
    id: "TTD",
}, {text: "Ternate", id: "TTE",}, {text: "Tartagal", id: "TTG",}, {text: "Thumrait", id: "TTH",}, {
    text: "Tetiaroa",
    id: "TTI",
}, {text: "Tottori", id: "TTJ",}, {text: "Philadelphia", id: "TTN",}, {
    text: "Tortuquero",
    id: "TTQ",
}, {text: "Tana Toraja", id: "TTR",}, {text: "Tsaratanana", id: "TTS",}, {
    text: "Taitung",
    id: "TTT",
}, {text: "Tetouan", id: "TTU",}, {text: "Tulcan", id: "TUA",}, {text: "Tubuai", id: "TUB",}, {
    text: "Tucuman",
    id: "TUC",
}, {text: "Tambacounda", id: "TUD",}, {text: "Tours", id: "TUF",}, {text: "Tuguegarao", id: "TUG",}, {
    text: "Turaif",
    id: "TUI",
}, {text: "Turbat", id: "TUK",}, {text: "Tulsa", id: "TUL",}, {text: "Tunis", id: "TUN",}, {
    text: "Taupo",
    id: "TUO",
}, {text: "Tupelo", id: "TUP",}, {text: "Tucurui", id: "TUR",}, {text: "Tucson", id: "TUS",}, {
    text: "Tabuk",
    id: "TUU",
}, {text: "Tucupita", id: "TUV",}, {text: "Tubala", id: "TUW",}, {
    text: "Morafenobe",
    id: "TVA",
}, {text: "Traverse text", id: "TVC",}, {text: "Thief River Falls", id: "TVF",}, {
    text: "Thomasville",
    id: "TVI",
}, {text: "South Lake Tahoe", id: "TVL",}, {text: "Tangshan", id: "TVS",}, {
    text: "Taveuni Island",
    id: "TVU",
}, {text: "Dawei", id: "TVY",}, {text: "Twin Hills", id: "TWA",}, {
    text: "Toowoomba",
    id: "TWB",
}, {text: "Port Townsend", id: "TWD",}, {text: "Twin Falls", id: "TWF",}, {
    text: "Tawau",
    id: "TWU",
}, {text: "Texarkana", id: "TXK",}, {text: "Berlin", id: "TXL",}, {text: "Huangshan", id: "TXN",}, {
    text: "Tula",
    id: "TYA",
}, {text: "Tyonek", id: "TYE",}, {text: "Torsby", id: "TYF",}, {text: "Talara", id: "TYL",}, {
    text: "Taiyuan",
    id: "TYN",
}, {all: !0, text: "Tokyo", id: "TYO",}, {text: "Tyler", id: "TYR",}, {
    text: "Knoxville",
    id: "TYS",
}, {text: "Belize text", id: "TZA",}, {text: "Trabzon", id: "TZX",}, {text: "Adana", id: "UAB",}, {
    text: "Ua Huka",
    id: "UAH",
}, {text: "Narsarsuaq", id: "UAK",}, {text: "Guam", id: "UAM",}, {
    text: "Ua Pou, Marquesas Island",
    id: "UAP",
}, {text: "San Juan", id: "UAQ",}, {text: "Samburu", id: "UAS",}, {
    text: "Uberaba",
    id: "UBA",
}, {text: "Mabuiag Island", id: "UBB",}, {text: "Ube", id: "UBJ",}, {
    text: "Ubon Ratchathani",
    id: "UBP",
}, {text: "Ukhta", id: "UCT",}, {text: "Palm Springs", id: "UDD",}, {text: "Uden", id: "UDE",}, {
    text: "Uberlandia",
    id: "UDI",
}, {text: "Uzhhorod", id: "UDJ",}, {text: "Udaipur", id: "UDR",}, {text: "Quelimane", id: "UEL",}, {
    text: "Kume-jima",
    id: "UEO",
}, {text: "Waukesha", id: "UES",}, {text: "Quetta", id: "UET",}, {text: "Ufa", id: "UFA",}, {
    text: "Bulgan",
    id: "UGA",
}, {text: "Urgench", id: "UGC",}, {text: "Waukegan", id: "UGN",}, {text: "Uige", id: "UGO",}, {
    text: "Quibdo",
    id: "UIB",
}, {text: "Qui Nhon", id: "UIH",}, {text: "Utila", id: "UII",}, {text: "Ust-Ilimsk", id: "UIK",}, {
    text: "Quincy",
    id: "UIN",
}, {text: "Quito", id: "UIO",}, {text: "Quimper", id: "UIP",}, {text: "Jaluit", id: "UIT",}, {
    text: "Ujae Island",
    id: "UJE",
}, {text: "Ukunda", id: "UKA",}, {text: "Osaka", id: "UKB",}, {
    text: "Ust-Kamenogorsk",
    id: "UKK",
}, {text: "Sevastopol", id: "UKS",}, {text: "Nuku", id: "UKU",}, {text: "Ust-Kut", id: "UKX",}, {
    text: "Kyoto",
    id: "UKY",
}, {text: "San Julian", id: "ULA",}, {text: "Ulei", id: "ULB",}, {text: "Ulundi", id: "ULD",}, {
    text: "Ulgit",
    id: "ULG",
}, {text: "Al Ula", id: "ULH",}, {text: "Ulithi, Caroline Islands", id: "ULI",}, {
    text: "Lensk",
    id: "ULK",
}, {text: "Ulaanbaatar", id: "ULN",}, {text: "Ulaangom", id: "ULO",}, {text: "Quilpie", id: "ULP",}, {
    text: "Tulua",
    id: "ULQ",
}, {text: "Gulu", id: "ULU",}, {text: "Ulyanovsk", id: "ULV",}, {text: "Ulusaba", id: "ULX",}, {
    text: "Ulyanovsk",
    id: "ULY",
}, {text: "Uummannaq", id: "UMD",}, {text: "Umea", id: "UME",}, {text: "Woomera", id: "UMR",}, {
    text: "Ust-Maya",
    id: "UMS",
}, {text: "Umuarama", id: "UMU",}, {text: "Ilha Comandatuba/Una", id: "UNA",}, {
    text: "Kunduz",
    id: "UND",
}, {text: "Kiunga", id: "UNG",}, {text: "Union Island", id: "UNI",}, {text: "Unalakleet", id: "UNK",}, {
    text: "Ranong",
    id: "UNN",
}, {text: "Unst", id: "UNT",}, {text: "Makassar", id: "UPG",}, {text: "Uruapan", id: "UPN",}, {
    text: "Upolu Point",
    id: "UPP",
}, {text: "Uralsk", id: "URA",}, {text: "Urumqi", id: "URC",}, {text: "Kuressaare", id: "URE",}, {
    text: "Uruguaiana",
    id: "URG",
}, {text: "Uray", id: "URJ",}, {text: "Rouen", id: "URO",}, {text: "Kursk", id: "URS",}, {
    text: "Surat Thani",
    id: "URT",
}, {text: "Gurayat", id: "URY",}, {text: "Ushuaia", id: "USH",}, {text: "Mabaruma", id: "USI",}, {
    text: "Usinsk",
    id: "USK",
}, {text: "Koh Samui", id: "USM",}, {text: "Ulsan", id: "USN",}, {text: "Usak", id: "USQ",}, {
    text: "St Augustine",
    id: "UST",
}, {text: "Busuanga", id: "USU",}, {text: "Utrecht", id: "UTC",}, {
    text: "Udon Thani",
    id: "UTH",
}, {text: "Utirik Island", id: "UTK",}, {text: "Tunica", id: "UTM",}, {
    text: "Upington",
    id: "UTN",
}, {text: "Utopia Creek", id: "UTO",}, {text: "U-Tapao", id: "UTP",}, {text: "Umtata", id: "UTT",}, {
    text: "Ustupo",
    id: "UTU",
}, {text: "Queenstown", id: "UTW",}, {text: "Bugulma", id: "UUA",}, {text: "Ulan-Ude", id: "UUD",}, {
    text: "Kuparuk",
    id: "UUK",
}, {text: "Yuzhno-Sakhalinsk", id: "UUS",}, {text: "Manumu", id: "UUU",}, {text: "Uvalde", id: "UVA",}, {
    text: "Ouvea",
    id: "UVE",
}, {text: "St Lucia", id: "UVF",}, {text: "Nyala", id: "UYL",}, {text: "Yulin", id: "UYN",}, {
    text: "Uyuni",
    id: "UYU",
}, {text: "Vaasa", id: "VAA",}, {text: "Valdosta", id: "VAD",}, {text: "Valence", id: "VAF",}, {
    text: "Varginha",
    id: "VAG",
}, {text: "Vanimo", id: "VAI",}, {text: "Chevak", id: "VAK",}, {text: "Valenca", id: "VAL",}, {
    text: "Maamigili",
    id: "VAM",
}, {text: "Van", id: "VAN",}, {text: "Suavanao", id: "VAO",}, {text: "Varna", id: "VAR",}, {
    text: "Sivas",
    id: "VAS",
}, {text: "Vava'u", id: "VAV",}, {text: "Vardo", id: "VAW",}, {text: "Lompoc", id: "VBG",}, {
    text: "BRESCIA",
    id: "VBS",
}, {text: "Vanuabalavu Island", id: "VBV",}, {text: "Visby", id: "VBY",}, {
    text: "Can Tho",
    id: "VCA",
}, {text: "Victoria River Downs", id: "VCD",}, {text: "Venice", id: "VCE",}, {
    text: "Tamky-Chulai Airport",
    id: "VCL",
}, {text: "Sao Paulo", id: "VCP",}, {text: "Con Dao", id: "VCS",}, {text: "Victoria", id: "VCT",}, {
    text: "Victorville",
    id: "VCV",
}, {text: "Ovda", id: "VDA",}, {text: "Fagernes", id: "VDB",}, {
    text: "Vitoria Da Conquista",
    id: "VDC",
}, {text: "Valverde", id: "VDE",}, {text: "Tampa", id: "VDF",}, {text: "Dong Hoi", id: "VDH",}, {
    text: "Viedma",
    id: "VDM",
}, {text: "Valle de la Pascua", id: "VDP",}, {text: "Villa Dolores", id: "VDR",}, {
    text: "Vadso",
    id: "VDS",
}, {text: "Valdez", id: "VDZ",}, {text: "Venetie", id: "VEE",}, {text: "Vernal", id: "VEL",}, {
    text: "Veracruz",
    id: "VER",
}, {text: "Vestmannaeyjar", id: "VEY",}, {text: "Victoria Falls", id: "VFA",}, {
    text: "Vijayawada",
    id: "VGA",
}, {text: "Vologda", id: "VGD",}, {text: "Vigo", id: "VGO",}, {text: "Las Vegas", id: "VGT",}, {
    text: "Villagarzon",
    id: "VGZ",
}, {text: "Saurimo", id: "VHC",}, {text: "Vilhelmina", id: "VHM",}, {text: "Vichy", id: "VHY",}, {
    text: "Vicenza",
    id: "VIC",
}, {text: "Vienna", id: "VIE",}, {text: "Vieste", id: "VIF",}, {text: "El Vigia", id: "VIG",}, {
    text: "Vinh text",
    id: "VII",
}, {text: "Virgin Gorda", id: "VIJ",}, {text: "Dakhla", id: "VIL",}, {text: "Vinnytsia", id: "VIN",}, {
    text: "Durban",
    id: "VIR",
}, {text: "Visalia", id: "VIS",}, {text: "Vitoria", id: "VIT",}, {text: "Vitoria", id: "VIX",}, {
    text: "Rach Gia",
    id: "VKG",
}, {text: "Moscow", id: "VKO",}, {text: "Vorkuta", id: "VKT",}, {text: "Valencia", id: "VLC",}, {
    text: "Valdosta",
    id: "VLD",
}, {text: "Villa Gesell", id: "VLG",}, {text: "Port Vila", id: "VLI",}, {
    text: "Valladolid",
    id: "VLL",
}, {text: "Valencia", id: "VLN",}, {text: "Valesdir", id: "VLS",}, {text: "Velikiye Luki", id: "VLU",}, {
    text: "Valera",
    id: "VLV",
}, {text: "Baimuru", id: "VMU",}, {text: "Salavan", id: "VNA",}, {text: "Vannes", id: "VNE",}, {
    text: "Vilnius",
    id: "VNO",
}, {text: "Varanasi", id: "VNS",}, {text: "Vilankulos", id: "VNX",}, {
    text: "Los Angeles",
    id: "VNY",
}, {text: "Volgograd", id: "VOG",}, {text: "Vohimarina", id: "VOH",}, {
    text: "Camp Douglas",
    id: "VOK",
}, {text: "Volos", id: "VOL",}, {text: "Voronezh", id: "VOZ",}, {text: "Ondjiva", id: "VPE",}, {
    text: "Vopnafjordur",
    id: "VPN",
}, {text: "Valparaiso", id: "VPS",}, {text: "Chimoio", id: "VPY",}, {text: "Vieques", id: "VQS",}, {
    text: "Varadero",
    id: "VRA",
}, {text: "Vero Beach", id: "VRB",}, {text: "Virac", id: "VRC",}, {text: "Varkaus", id: "VRK",}, {
    text: "Vila Real",
    id: "VRL",
}, {text: "Verona", id: "VRN",}, {text: "Vryburg", id: "VRU",}, {text: "Vaeroy", id: "VRY",}, {
    text: "Villahermosa",
    id: "VSA",
}, {text: "Springfield", id: "VSF",}, {text: "Luhansk", id: "VSG",}, {text: "Stockholm", id: "VST",}, {
    text: "Vitebsk",
    id: "VTB",
}, {text: "Vientiane", id: "VTE",}, {text: "Las Tunas", id: "VTU",}, {
    text: "Vishakhapatnam",
    id: "VTZ",
}, {text: "Valledupar", id: "VUP",}, {text: "Veliky Ustyug", id: "VUS",}, {
    text: "Villavicencio",
    id: "VVC",
}, {text: "Santa Cruz", id: "VVI",}, {text: "Vladivostok", id: "VVO",}, {text: "Illizi", id: "VVZ",}, {
    text: "Lichinga",
    id: "VXC",
}, {text: "Sao Vicente Island", id: "VXE",}, {text: "Vaxjo", id: "VXO",}, {text: "Peru", id: "VYS",}, {
    text: "Wales",
    id: "WAA",
}, {text: "Wanganui", id: "WAG",}, {text: "Antsohihy", id: "WAI",}, {
    text: "Chincoteague",
    id: "WAL",
}, {text: "Ambatondrazaka", id: "WAM",}, {text: "Antsalova", id: "WAQ",}, {text: "Waris", id: "WAR",}, {
    all: !0,
    text: "Washington",
    id: "WAS",
}, {text: "Waterford", id: "WAT",}, {text: "Warsaw", id: "WAW",}, {text: "Stebbins", id: "WBB",}, {
    text: "Wapenamanda",
    id: "WBM",
}, {text: "Beaver", id: "WBQ",}, {text: "Boulder", id: "WBU",}, {text: "Wilkes-Barre", id: "WBW",}, {
    text: "Windhoek",
    id: "WDH",
}, {text: "Winder", id: "WDR",}, {text: "Weifang", id: "WEF",}, {text: "Weihai", id: "WEH",}, {
    text: "Weipa",
    id: "WEI",
}, {text: "Welkom", id: "WEL",}, {text: "Ketchikan", id: "WFB",}, {
    text: "Fianarantsoa",
    id: "WFI",
}, {text: "Frenchville", id: "WFK",}, {text: "Wagga Wagga", id: "WGA",}, {
    text: "Walgett",
    id: "WGE",
}, {text: "Waingapu", id: "WGP",}, {text: "Hyder", id: "WHD",}, {text: "Wadi Halfa", id: "WHF",}, {
    text: "Whakatane",
    id: "WHK",
}, {text: "Los Angeles", id: "WHP",}, {text: "Wick", id: "WIC",}, {text: "Nairobi", id: "WIL",}, {
    text: "Winton",
    id: "WIN",
}, {text: "Wilcannia", id: "WIO",}, {text: "Woja Island", id: "WJA",}, {text: "Wajir", id: "WJR",}, {
    text: "Wonju",
    id: "WJU",
}, {text: "Wanaka", id: "WKA",}, {text: "Wakkanai", id: "WKJ",}, {text: "Aleknagik", id: "WKK",}, {
    text: "Waikoloa",
    id: "WKL",
}, {text: "Wellington", id: "WLG",}, {text: "Walaha", id: "WLH",}, {
    text: "Selawik",
    id: "WLK",
}, {text: "Wallis Island", id: "WLS",}, {text: "Mandritsara", id: "WMA",}, {
    text: "Mount Keith",
    id: "WME",
}, {text: "Nowy Dwor Mazowiecki", id: "WMI",}, {text: "Maroantsetra", id: "WMN",}, {
    text: "White Mountain",
    id: "WMO",
}, {text: "Mampikony", id: "WMP",}, {text: "Mananara Avaratra", id: "WMR",}, {
    text: "Wamena",
    id: "WMX",
}, {text: "Wenshan", id: "WNH",}, {text: "Wunnummin Lake", id: "WNN",}, {text: "Naga", id: "WNP",}, {
    text: "Windorah",
    id: "WNR",
}, {text: "Nawabshah", id: "WNS",}, {text: "Wenzhou", id: "WNZ",}, {
    text: "Bergen Op Zoom",
    id: "WOE",
}, {text: "Wollongong", id: "WOL",}, {text: "Wang'an", id: "WOT",}, {
    text: "Port Berge Vaovao",
    id: "WPB",
}, {text: "Wipim", id: "WPM",}, {text: "Porvenir", id: "WPR",}, {text: "Puerto Williams", id: "WPU",}, {
    text: "Macon",
    id: "WRB",
}, {text: "Whangarei", id: "WRE",}, {text: "Wrangell", id: "WRG",}, {text: "Fort Dix", id: "WRI",}, {
    text: "Worland",
    id: "WRL",
}, {text: "Wroclaw", id: "WRO",}, {text: "Westray", id: "WRY",}, {text: "Weerawila", id: "WRZ",}, {
    text: "White Sands",
    id: "WSD",
}, {text: "South Naknek", id: "WSN",}, {text: "Waspam", id: "WSP",}, {text: "Westerly", id: "WST",}, {
    text: "Westsound",
    id: "WSX",
}, {text: "Airlie Beach/Shute Harbour", id: "WSY",}, {text: "Westport", id: "WSZ",}, {
    text: "Tambohorano",
    id: "WTA",
}, {text: "Wotje", id: "WTE",}, {text: "Noatak", id: "WTK",}, {text: "Tuntutuliak", id: "WTL",}, {
    text: "Waddington",
    id: "WTN",
}, {text: "Wotho", id: "WTO",}, {text: "Woitape", id: "WTP",}, {
    text: "Tsiroanomandidy",
    id: "WTS",
}, {text: "Whitianga", id: "WTZ",}, {text: "Wu Hai", id: "WUA",}, {text: "Wuhan", id: "WUH",}, {
    text: "Wiluna",
    id: "WUN",
}, {text: "Wuyishan", id: "WUS",}, {text: "Wau", id: "WUU",}, {text: "Wuxi", id: "WUX",}, {
    text: "Wuzhou",
    id: "WUZ",
}, {text: "Walvis Bay", id: "WVB",}, {text: "Manakara", id: "WVK",}, {
    text: "Wilhelmshaven",
    id: "WVN",
}, {text: "Wildwood", id: "WWD",}, {text: "Wewak", id: "WWK",}, {text: "Whale Pass", id: "WWP",}, {
    text: "Newtok",
    id: "WWT",
}, {text: "Wanzhou", id: "WXN",}, {text: "Whyalla", id: "WYA",}, {
    text: "Yengema",
    id: "WYE",
}, {text: "West Yellowstone", id: "WYS",}, {text: "Arcachon", id: "XAC",}, {text: "Chapeco", id: "XAP",}, {
    text: "Saul",
    id: "XAU",
}, {text: "Bearskin Lake", id: "XBE",}, {text: "Bogande", id: "XBG",}, {
    text: "Birjand",
    id: "XBJ",
}, {text: "Bourg En Bresse", id: "XBK",}, {text: "Chalon Sur Saone", id: "XCD",}, {
    text: "Christmas Island",
    id: "XCH",
}, {text: "Chatham", id: "XCM",}, {text: "Paris", id: "XCR",}, {text: "Lille", id: "XDB",}, {
    text: "Ottawa",
    id: "XDS",
}, {text: "Xiangyang", id: "XFN",}, {text: "Hamburg", id: "XFW",}, {
    text: "Xangongo",
    id: "XGN",
}, {text: "Kangiqsualujjuaq", id: "XGR",}, {text: "Paris", id: "XHP",}, {
    text: "Xichang",
    id: "XIC",
}, {text: "Xilinhot", id: "XIL",}, {text: "Xi'an", id: "XIY",}, {text: "Phonsavan", id: "XKH",}, {
    text: "Kasabonika",
    id: "XKS",
}, {text: "Lac Brochet", id: "XLB",}, {text: "Saint Louis", id: "XLS",}, {
    text: "Mallacoota",
    id: "XMC",
}, {text: "Manihi", id: "XMH",}, {text: "Xiamen", id: "XMN",}, {text: "Macas", id: "XMS",}, {
    text: "Moulin Sur Allier",
    id: "XMU",
}, {text: "Yam Island", id: "XMY",}, {text: "Fayetteville", id: "XNA",}, {text: "Dubai", id: "XNB",}, {
    text: "Xining",
    id: "XNN",
}, {text: "Paris", id: "XPG",}, {text: "Quepos", id: "XQP",}, {text: "Qualicum Beach", id: "XQU",}, {
    text: "Jerez",
    id: "XRY",
}, {text: "Saint Malo", id: "XSB",}, {text: "South Caicos", id: "XSC",}, {
    text: "Tours",
    id: "XSH",
}, {text: "South Indian Lake", id: "XSI",}, {text: "Singapore", id: "XSP",}, {
    text: "Thargomindah",
    id: "XTG",
}, {text: "Tadoule Lake", id: "XTL",}, {text: "Xuzhou", id: "XUZ",}, {
    text: "Villefranche Sur Saone",
    id: "XVF",
}, {text: "Strasbourg", id: "XWG",}, {text: "Vienna", id: "XWW",}, {text: "Yandina", id: "XYA",}, {
    text: "Lyon",
    id: "XYD",
}, {text: "Ye", id: "XYE",}, {text: "Macao", id: "XZM",}, {text: "Anahim Lake", id: "YAA",}, {
    text: "Arctic Bay",
    id: "YAB",
}, {text: "Cat Lake", id: "YAC",}, {text: "Fort Frances", id: "YAG",}, {
    text: "Yakutat",
    id: "YAK",
}, {text: "Sault Ste. Marie", id: "YAM",}, {text: "Yaounde", id: "YAO",}, {
    text: "Yap",
    id: "YAP",
}, {text: "Attawapiskat", id: "YAT",}, {text: "Mayne Island", id: "YAV",}, {
    text: "Halifax",
    id: "YAW",
}, {text: "Angling Lake", id: "YAX",}, {text: "St Anthony", id: "YAY",}, {
    text: "Tofino",
    id: "YAZ",
}, {text: "Kugaaruk", id: "YBB",}, {text: "Baie Comeau", id: "YBC",}, {
    text: "Uranium text",
    id: "YBE",
}, {text: "Bagotville", id: "YBG",}, {text: "Black Tickle", id: "YBI",}, {
    text: "Baker Lake",
    id: "YBK",
}, {text: "Campbell River", id: "YBL",}, {text: "Bobquinn Lake", id: "YBO",}, {
    text: "Yibin",
    id: "YBP",
}, {text: "Brandon", id: "YBR",}, {text: "Brochet", id: "YBT",}, {
    text: "Berens River",
    id: "YBV",
}, {text: "Bedwell Harbour", id: "YBW",}, {text: "Blanc-Sablon", id: "YBX",}, {
    text: "Bonnyville",
    id: "YBY",
}, {text: "Cambridge Bay", id: "YCB",}, {text: "Cornwall", id: "YCC",}, {
    text: "Nanaimo",
    id: "YCD",
}, {text: "Castlegar", id: "YCG",}, {text: "Miramichi", id: "YCH",}, {
    text: "Colville Lake",
    id: "YCK",
}, {text: "Charlo", id: "YCL",}, {text: "St Catharines", id: "YCM",}, {
    text: "Cochrane",
    id: "YCN",
}, {text: "Kugluktuk", id: "YCO",}, {text: "Cross Lake", id: "YCR",}, {
    text: "Chesterfield Inlet",
    id: "YCS",
}, {text: "Coronation", id: "YCT",}, {text: "Yun Cheng", id: "YCU",}, {
    text: "Chilliwack",
    id: "YCW",
}, {text: "Clyde River", id: "YCY",}, {text: "Dawson text", id: "YDA",}, {
    text: "Burwash Landing",
    id: "YDB",
}, {text: "Drayton Valley", id: "YDC",}, {text: "Deer Lake", id: "YDF",}, {
    text: "Dease Lake",
    id: "YDL",
}, {text: "Dauphin", id: "YDN",}, {text: "Nain", id: "YDP",}, {text: "Dawson Creek", id: "YDQ",}, {
    text: "Vancouver",
    id: "YDT",
}, {all: !0, text: "Edmonton", id: "YEA",}, {text: "Yecheon", id: "YEC",}, {
    text: "Edmonton",
    id: "YEG",
}, {text: "Bursa", id: "YEI",}, {text: "Arviat", id: "YEK",}, {text: "Manitowaning", id: "YEM",}, {
    text: "Estevan",
    id: "YEN",
}, {text: "Yeovilton", id: "YEO",}, {text: "Fort Severn", id: "YER",}, {text: "Yasouj", id: "YES",}, {
    text: "Edson",
    id: "YET",
}, {text: "Eureka", id: "YEU",}, {text: "Inuvik", id: "YEV",}, {text: "Fort Albany", id: "YFA",}, {
    text: "Iqaluit",
    id: "YFB",
}, {text: "Fredericton", id: "YFC",}, {text: "Fort Hope", id: "YFH",}, {
    text: "Flin Flon",
    id: "YFO",
}, {text: "Fort Resolution", id: "YFR",}, {text: "Fort Simpson", id: "YFS",}, {
    text: "St Lewis (Fox Harbour)",
    id: "YFX",
}, {text: "Gillies Bay", id: "YGB",}, {text: "Gorge Harbour", id: "YGE",}, {
    text: "Ganges",
    id: "YGG",
}, {text: "Fort Good Hope", id: "YGH",}, {text: "Yonago", id: "YGJ",}, {
    text: "Kingston",
    id: "YGK",
}, {text: "La Grande Riviere", id: "YGL",}, {text: "Gimli", id: "YGM",}, {
    text: "Gods Lake Narrows",
    id: "YGO",
}, {text: "Gaspe", id: "YGP",}, {text: "Geraldton", id: "YGQ",}, {
    text: "Iles de La Madeleine",
    id: "YGR",
}, {text: "Igloolik", id: "YGT",}, {text: "Havre-St-Pierre", id: "YGV",}, {
    text: "Kuujjuarapik",
    id: "YGW",
}, {text: "Gillam", id: "YGX",}, {text: "Grise Fiord", id: "YGZ",}, {
    text: "Port Hope Simpson",
    id: "YHA",
}, {text: "Hudson Bay", id: "YHB",}, {text: "Hakai Passage", id: "YHC",}, {text: "Dryden", id: "YHD",}, {
    text: "Hearst",
    id: "YHF",
}, {text: "Ulukhaktok", id: "YHI",}, {text: "Gjoa Haven", id: "YHK",}, {
    text: "Toronto",
    id: "YHM",
}, {text: "Hornepayne", id: "YHN",}, {text: "Hopedale", id: "YHO",}, {
    text: "Poplar Hill",
    id: "YHP",
}, {text: "Chevery", id: "YHR",}, {text: "Sechelt", id: "YHS",}, {text: "Montreal", id: "YHU",}, {
    text: "Hay River",
    id: "YHY",
}, {text: "Halifax", id: "YHZ",}, {text: "Atikokan", id: "YIB",}, {
    text: "Yichun (Jiangxi)",
    id: "YIC",
}, {text: "St-Augustin/Pakuashipi", id: "YIF",}, {text: "Yichang", id: "YIH",}, {
    text: "Ivujivik",
    id: "YIK",
}, {text: "Yining", id: "YIN",}, {text: "Pond Inlet", id: "YIO",}, {
    text: "Detroit",
    id: "YIP",
}, {text: "Island Lake/Garden Hill", id: "YIV",}, {text: "Yiwu", id: "YIW",}, {
    text: "Malaga",
    id: "YJM",
}, {text: "St Jean", id: "YJN",}, {text: "Samjiyon", id: "YJS",}, {text: "Stephenville", id: "YJT",}, {
    text: "Kamloops",
    id: "YKA",
}, {text: "Toronto", id: "YKF",}, {text: "Kangirsuk", id: "YKG",}, {text: "Schefferville", id: "YKL",}, {
    text: "Yakima",
    id: "YKM",
}, {text: "Yankton", id: "YKN",}, {text: "Waskaganish", id: "YKQ",}, {text: "Yakutsk", id: "YKS",}, {
    text: "Chisasibi",
    id: "YKU",
}, {text: "Kirkland Lake", id: "YKX",}, {text: "Kindersley", id: "YKY",}, {
    text: "Toronto",
    id: "YKZ",
}, {text: "Kimmirut", id: "YLC",}, {text: "Chapleau", id: "YLD",}, {
    text: "Whati",
    id: "YLE",
}, {text: "Lansdowne House", id: "YLH",}, {text: "Meadow Lake", id: "YLJ",}, {
    text: "Oro Station",
    id: "YLK",
}, {text: "Lloydminster", id: "YLL",}, {text: "Lebel-Sur-Quevillon", id: "YLS",}, {
    text: "Alert",
    id: "YLT",
}, {text: "Kelowna", id: "YLW",}, {text: "Mayo", id: "YMA",}, {
    text: "Manitouwadge",
    id: "YMG",
}, {text: "Mary's Harbour", id: "YMH",}, {text: "Moose Jaw", id: "YMJ",}, {
    text: "Fort McMurray",
    id: "YMM",
}, {text: "Makkovik", id: "YMN",}, {text: "Moosonee", id: "YMO",}, {text: "Port McNeill", id: "YMP",}, {
    all: !0,
    text: "Montreal",
    id: "YMQ",
}, {text: "Yurimaguas", id: "YMS",}, {text: "Chibougamau", id: "YMT",}, {
    text: "Mansons Landing",
    id: "YMU",
}, {text: "Maniwaki", id: "YMW",}, {text: "Montreal", id: "YMX",}, {
    text: "Natashquan",
    id: "YNA",
}, {text: "Yanbu al Bahr", id: "YNB",}, {text: "Wemindji", id: "YNC",}, {
    text: "Ottawa",
    id: "YND",
}, {text: "Norway House", id: "YNE",}, {text: "Youngstown", id: "YNG",}, {
    text: "Yanji",
    id: "YNJ",
}, {text: "Points North Landing", id: "YNL",}, {text: "Matagami", id: "YNM",}, {
    text: "North Spirit Lake",
    id: "YNO",
}, {text: "Nemiscau", id: "YNS",}, {text: "Yantai", id: "YNT",}, {text: "Yangyang", id: "YNY",}, {
    text: "Yancheng",
    id: "YNZ",
}, {text: "Ekati", id: "YOA",}, {text: "Old Crow", id: "YOC",}, {text: "Cold Lake", id: "YOD",}, {
    text: "Ogoki",
    id: "YOG",
}, {text: "Oxford House", id: "YOH",}, {text: "High Level", id: "YOJ",}, {text: "Yola", id: "YOL",}, {
    text: "Oshawa",
    id: "YOO",
}, {text: "Rainbow Lake", id: "YOP",}, {text: "Ottawa", id: "YOW",}, {
    text: "Prince Albert",
    id: "YPA",
}, {text: "Paulatuk", id: "YPC",}, {text: "Parry Sound", id: "YPD",}, {
    text: "Peace River",
    id: "YPE",
}, {text: "Portage La Prairie", id: "YPG",}, {text: "Inukjuak", id: "YPH",}, {
    text: "Port Simpson",
    id: "YPI",
}, {text: "Aupaluk", id: "YPJ",}, {text: "Pickle Lake", id: "YPL",}, {
    text: "Pikangikum",
    id: "YPM",
}, {text: "Port Menier", id: "YPN",}, {text: "Peawanuk", id: "YPO",}, {
    text: "Peterborough",
    id: "YPQ",
}, {text: "Prince Rupert", id: "YPR",}, {text: "Pender Harbour", id: "YPT",}, {
    text: "Powell River",
    id: "YPW",
}, {text: "Puvirnituq", id: "YPX",}, {text: "Fort Chipewyan", id: "YPY",}, {
    text: "Muskoka",
    id: "YQA",
}, {text: "Quebec", id: "YQB",}, {text: "Quaqtaq", id: "YQC",}, {text: "The Pas", id: "YQD",}, {
    text: "Red Deer",
    id: "YQF",
}, {text: "Windsor", id: "YQG",}, {text: "Watson Lake", id: "YQH",}, {text: "Yarmouth", id: "YQI",}, {
    text: "Kenora",
    id: "YQK",
}, {text: "Lethbridge", id: "YQL",}, {text: "Moncton", id: "YQM",}, {text: "Nakina", id: "YQN",}, {
    text: "Comox",
    id: "YQQ",
}, {text: "Regina", id: "YQR",}, {text: "Thunder Bay", id: "YQT",}, {
    text: "Grande Prairie",
    id: "YQU",
}, {text: "Yorkton", id: "YQV",}, {text: "North Battleford", id: "YQW",}, {text: "Gander", id: "YQX",}, {
    text: "Sydney",
    id: "YQY",
}, {text: "Quesnel", id: "YQZ",}, {text: "Gameti", id: "YRA",}, {text: "Resolute", id: "YRB",}, {
    text: "Cartwright",
    id: "YRF",
}, {text: "Rigolet", id: "YRG",}, {text: "Riviere-du-Loup", id: "YRI",}, {
    text: "Roberval",
    id: "YRJ",
}, {text: "Red Lake", id: "YRL",}, {text: "Rocky Mountain House", id: "YRM",}, {
    text: "Trois-Rivieres",
    id: "YRQ",
}, {text: "Stuart Island", id: "YRR",}, {text: "Red Sucker Lake", id: "YRS",}, {
    text: "Rankin Inlet",
    id: "YRT",
}, {text: "Revelstoke", id: "YRV",}, {text: "Sudbury", id: "YSB",}, {text: "Sherbrooke", id: "YSC",}, {
    text: "Suffield",
    id: "YSD",
}, {text: "Stony Rapids", id: "YSF",}, {text: "Lutselke", id: "YSG",}, {
    text: "Saint John",
    id: "YSJ",
}, {text: "Sanikiluaq", id: "YSK",}, {text: "Fort Smith", id: "YSM",}, {
    text: "Postville",
    id: "YSO",
}, {text: "Marathon", id: "YSP",}, {text: "Ste Theresa Point", id: "YST",}, {
    text: "Summerside",
    id: "YSU",
}, {text: "Sachs Harbour", id: "YSY",}, {text: "Pembroke", id: "YTA",}, {
    text: "Cape Dorset",
    id: "YTE",
}, {text: "Alma", id: "YTF",}, {text: "Sullivan Bay", id: "YTG",}, {
    text: "Thompson",
    id: "YTH",
}, {text: "Big Trout Lake", id: "YTL",}, {text: "Mont Tremblant", id: "YTM",}, {
    all: !0,
    text: "Toronto",
    id: "YTO",
}, {text: "Tasiujaq", id: "YTQ",}, {text: "Trenton", id: "YTR",}, {text: "Timmins", id: "YTS",}, {
    text: "Yangzhou",
    id: "YTY",
}, {text: "Toronto", id: "YTZ",}, {text: "Tuktoyaktuk", id: "YUB",}, {text: "Umiujag", id: "YUD",}, {
    text: "Yuendumu",
    id: "YUE",
}, {text: "Montreal", id: "YUL",}, {text: "Yuma", id: "YUM",}, {text: "Yushu Xian", id: "YUS",}, {
    text: "Repulse Bay",
    id: "YUT",
}, {text: "Hall Beach", id: "YUX",}, {text: "Rouyn-Noranda", id: "YUY",}, {
    text: "Moroni",
    id: "YVA",
}, {text: "Bonaventure", id: "YVB",}, {text: "La Ronge", id: "YVC",}, {
    text: "Vermilion",
    id: "YVG",
}, {text: "Qikiqtarjuaq", id: "YVM",}, {text: "Val d'Or", id: "YVO",}, {
    text: "Kuujjuaq",
    id: "YVP",
}, {text: "Norman Wells", id: "YVQ",}, {text: "Vancouver", id: "YVR",}, {
    text: "Buffalo Narrows",
    id: "YVT",
}, {text: "Wiarton", id: "YVV",}, {text: "Deer Lake", id: "YVZ",}, {
    text: "Petawawa",
    id: "YWA",
}, {text: "Kangiqsujuaq", id: "YWB",}, {text: "Winnipeg", id: "YWG",}, {text: "Victoria", id: "YWH",}, {
    text: "Deline",
    id: "YWJ",
}, {text: "Wabush", id: "YWK",}, {text: "Williams Lake", id: "YWL",}, {
    text: "Williams Harbour",
    id: "YWM",
}, {text: "Webequie", id: "YWP",}, {text: "Whistler", id: "YWS",}, {text: "Wrigley", id: "YWY",}, {
    text: "Cranbrook",
    id: "YXC",
}, {text: "Edmonton", id: "YXD",}, {text: "Saskatoon", id: "YXE",}, {
    text: "Medicine Hat",
    id: "YXH",
}, {text: "Fort St. John", id: "YXJ",}, {text: "Rimouski", id: "YXK",}, {
    text: "Sioux Lookout",
    id: "YXL",
}, {text: "Whale Cove", id: "YXN",}, {text: "Pangnirtung", id: "YXP",}, {
    text: "Earlton",
    id: "YXR",
}, {text: "Prince George", id: "YXS",}, {text: "Terrace", id: "YXT",}, {
    text: "London",
    id: "YXU",
}, {text: "Abbotsford", id: "YXX",}, {text: "Whitehorse", id: "YXY",}, {text: "Wawa", id: "YXZ",}, {
    text: "North Bay",
    id: "YYB",
}, {text: "Calgary", id: "YYC",}, {text: "Smithers", id: "YYD",}, {text: "Fort Nelson", id: "YYE",}, {
    text: "Penticton",
    id: "YYF",
}, {text: "Charlottetown", id: "YYG",}, {text: "Taloyoak", id: "YYH",}, {
    text: "Victoria",
    id: "YYJ",
}, {text: "Lynn Lake", id: "YYL",}, {text: "Swift Current", id: "YYN",}, {
    text: "Churchill",
    id: "YYQ",
}, {text: "Goose Bay", id: "YYR",}, {text: "St John's", id: "YYT",}, {
    text: "Kapuskasing",
    id: "YYU",
}, {text: "Armstrong", id: "YYW",}, {text: "Mont Joli", id: "YYY",}, {text: "Toronto", id: "YYZ",}, {
    text: "Gore Bay",
    id: "YZE",
}, {text: "Yellowknife", id: "YZF",}, {text: "Salluit", id: "YZG",}, {
    text: "Slave Lake",
    id: "YZH",
}, {text: "Sandspit", id: "YZP",}, {text: "Sarnia", id: "YZR",}, {
    text: "Coral Harbour",
    id: "YZS",
}, {text: "Port Hardy", id: "YZT",}, {text: "Whitecourt", id: "YZU",}, {text: "Sept-Iles", id: "YZV",}, {
    text: "Teslin",
    id: "YZW",
}, {text: "Greenwood", id: "YZX",}, {text: "Zhangye", id: "YZY",}, {text: "Trail", id: "YZZ",}, {
    text: "York Landing",
    id: "ZAC",
}, {text: "Zadar", id: "ZAD",}, {text: "Zagreb", id: "ZAG",}, {text: "Zahedan", id: "ZAH",}, {
    text: "Zaranj",
    id: "ZAJ",
}, {text: "Valdivia", id: "ZAL",}, {text: "Zamboanga", id: "ZAM",}, {text: "Zaria", id: "ZAR",}, {
    text: "Zhaotong",
    id: "ZAT",
}, {text: "Zaragoza", id: "ZAZ",}, {text: "Bathurst", id: "ZBF",}, {text: "Bromont", id: "ZBM",}, {
    text: "Chah Bahar",
    id: "ZBR",
}, {text: "Zacatecas", id: "ZCL",}, {text: "Celle", id: "ZCN",}, {text: "Temuco", id: "ZCO",}, {
    text: "Delma Island",
    id: "ZDY",
}, {text: "Bella Bella", id: "ZEL",}, {text: "Eastmain", id: "ZEM",}, {text: "Goeppingen", id: "ZES",}, {
    text: "Faro",
    id: "ZFA",
}, {text: "Fond-du-Lac", id: "ZFD",}, {text: "Fort McPherson", id: "ZFM",}, {
    text: "Tulita",
    id: "ZFN",
}, {text: "Philadelphia", id: "ZFV",}, {text: "Zagreb", id: "ZGC",}, {
    text: "Gods River",
    id: "ZGI",
}, {text: "Little Grand Rapids", id: "ZGR",}, {text: "Gaua", id: "ZGU",}, {
    text: "Zhanjiang",
    id: "ZHA",
}, {text: "Zhongwei", id: "ZHY",}, {text: "Ziguinchor", id: "ZIG",}, {
    text: "Ixtapa/Zihuatanejo",
    id: "ZIH",
}, {text: "Swan River", id: "ZJN",}, {text: "Kasaba Bay", id: "ZKB",}, {
    text: "Kashechewan",
    id: "ZKE",
}, {text: "Kegaska", id: "ZKG",}, {text: "Zyryanka", id: "ZKP",}, {
    text: "Manzanillo",
    id: "ZLO",
}, {text: "La Tabatiere", id: "ZLT",}, {text: "Zamora", id: "ZMM",}, {text: "Masset", id: "ZMT",}, {
    text: "Nanaimo",
    id: "ZNA",
}, {text: "Zinder", id: "ZND",}, {text: "Newman", id: "ZNE",}, {text: "Hanau", id: "ZNF",}, {
    text: "Zanzibar",
    id: "ZNZ",
}, {text: "Osorno", id: "ZOS",}, {text: "Sachigo Lake", id: "ZPB",}, {text: "Pucon", id: "ZPC",}, {
    text: "Zephyrhills",
    id: "ZPH",
}, {text: "Rheine", id: "ZPQ",}, {text: "Speyer", id: "ZQC",}, {
    text: "Villingen-Schwenningen",
    id: "ZQL",
}, {text: "Queenstown", id: "ZQN",}, {text: "Saarbruecken", id: "ZQW",}, {
    text: "Zurich",
    id: "ZRH",
}, {text: "Round Lake", id: "ZRJ",}, {text: "Newark NJ Rail", id: "ZRP",}, {
    text: "San Salvador",
    id: "ZSA",
}, {text: "Salzburg", id: "ZSB",}, {text: "Saint Pierre de la Reunion", id: "ZSE",}, {
    text: "Sandy Lake",
    id: "ZSJ",
}, {text: "Prince Rupert", id: "ZSW",}, {text: "Tureia", id: "ZTA",}, {
    text: "Tete-a-la Baleine",
    id: "ZTB",
}, {text: "Stamford", id: "ZTF",}, {text: "Zakinthos Island", id: "ZTH",}, {
    text: "Shamattawa",
    id: "ZTM",
}, {text: "Zhytomyr", id: "ZTR",}, {text: "Zagatala", id: "ZTU",}, {
    text: "Zhuhai",
    id: "ZUH",
}, {text: "Churchill Falls", id: "ZUM",}, {text: "Miandrivazo", id: "ZVA",}, {
    text: "New Haven",
    id: "ZVE",
}, {text: "Savannakhet", id: "ZVK",}, {text: "Andapa", id: "ZWA",}, {text: "Brussels", id: "ZWE",}, {
    text: "Wilmington",
    id: "ZWI",
}, {text: "Wollaston Lake", id: "ZWL",}, {text: "Stuttgart", id: "ZWS",}, {
    text: "Jan Mayen",
    id: "ZXB",
}, {text: "Amsterdam", id: "ZYA",}, {text: "Sylhet", id: "ZYL",}, {text: "Brussels", id: "ZYR",}, {
    text: "Mzuzu",
    id: "ZZU",
}, {text: "Winchester", id: "OKV",}, {text: "Beijing", id: "PKX",}]

airports.unshift({id: '', text: ''});


$(function () {

    $('.start-tab-nav__item').on('click', function () {

        $('.start-tab-nav__selector').attr('data-pos', $(this).data('tab'))
        $('.form-item').removeClass('_active');
        $('.form-item[data-tab="' + $(this).data('tab') + '"]').addClass('_active');
    })

    if ($('#sandbox-container').length) {

        $('#sandbox-container .input-daterange').datepicker({
            autoclose: true,
            todayHighlight: true
        });

        $('#sandbox-container input').datepicker({
            autoclose: true,
            todayHighlight: true
        });
    }

    $('.loader__line').on('animationend', function () {

        $('.result__item.loader').removeClass('_active');
        $('.result__item.content').addClass('_active');
    })

    $(document).on('wpcf7mailsent', function e() {
        $('.result__item.content').removeClass('_active');
        $('.result__item.thanks').addClass('_active');
    })

    $('#round_direction_form, #one_direction_form').on('submit', function (e) {
        let obj = {};
        let formdata = new FormData(e.target);
        if (formdata.get('from')) {
            obj.from = formdata.get('from');
        }

        if (formdata.get('to')) {
            obj.to = formdata.get('to');
        }
        sessionStorage.setItem('airports', JSON.stringify(obj));
        // return false;
    })

    airports = airports.map(el => el.text += ` (${el.id})`)

    $(".autocomplete-from").select2({
        data: airports,
        placeholder: 'From',
        minimumInputLength: 3,
        maximumSelectionLength: 1,
        multiple: true,
        autocomplete: 'off',
        maximumSelectionSize: 1,
    }).val(null).trigger('change')

    $(".autocomplete-to").select2({
        data: airports,
        placeholder: 'To',
        minimumInputLength: 3,
        multiple: true,
        autocomplete: 'off',
        maximumSelectionLength: 1,
    }).val(null).trigger('change')

    if (sessionStorage.getItem('airports')) {
        const obj = JSON.parse(sessionStorage.getItem('airports'));

        if (obj.from) {
            $(".autocomplete-from").val(obj.from).trigger('change');
        }

        if (obj.to) {
            $(".autocomplete-to").val(obj.to).trigger('change');
        }
    }
})
