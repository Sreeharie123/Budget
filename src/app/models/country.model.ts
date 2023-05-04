export interface CountryData {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies:
    | Currency
    | Currencies2
    | Currencies3
    | Currencies4
    | Currencies5
    | Currencies6
    | Currencies7
    | Currencies8
    | Currencies9
    | Currencies10
    | Currencies11
    | Currencies12
    | Currencies13
    | Currencies14
    | Currencies15
    | Currencies16
    | Currencies17
    | Currencies18
    | Currencies19
    | Currencies20
    | Currencies21
    | Currencies22
    | Currencies23
    | Currencies24
    | Currencies25
    | Currencies26
    | Currencies27
    | Currencies28
    | Currencies29
    | Currencies30
    | Currencies31
    | Currencies32
    | Currencies33
    | Currencies34
    | Currencies35
    | Currencies36
    | Currencies37
    | Currencies38
    | Currencies39
    | Currencies40
    | Currencies41
    | Currencies42
    | Currencies43
    | Currencies44
    | Currencies45
    | Currencies46
    | Currencies47
    | Currencies48
    | Currencies49
    | Currencies50
    | Currencies51
    | Currencies52
    | Currencies53
    | Currencies54
    | Currencies55
    | Currencies56
    | Currencies57
    | Currencies58
    | Currencies59
    | Currencies60
    | Currencies61
    | Currencies62
    | Currencies63
    | Currencies64
    | Currencies65
    | Currencies66
    | Currencies67
    | Currencies68
    | Currencies69
    | Currencies70
    | Currencies71
    | Currencies72
    | Currencies73
    | Currencies74
    | Currencies75
    | Currencies76
    | Currencies77
    | Currencies78
    | Currencies79
    | Currencies80
    | Currencies81
    | Currencies82
    | Currencies83
    | Currencies84
    | Currencies85
    | Currencies86
    | Currencies87
    | Currencies88
    | Currencies89
    | Currencies90
    | Currencies91
    | Currencies92
    | Currencies93
    | Currencies94
    | Currencies95
    | any[]
    | Currencies97
    | Currencies98
    | Currencies99
    | Currencies100
    | Currencies101
    | Currencies102
    | Currencies103
    | Currencies104
    | Currencies105
    | Currencies106
    | Currencies107
    | Currencies108
    | Currencies109
    | Currencies110
    | Currencies111
    | Currencies112
    | Currencies113
    | Currencies114
    | Currencies115
    | Currencies116
    | Currencies117
    | Currencies118
    | Currencies119
    | Currencies120
    | Currencies121
    | Currencies122
    | Currencies123
    | Currencies124
    | Currencies125
    | Currencies126
    | Currencies127
    | Currencies128
    | Currencies129
    | Currencies130
    | Currencies131
    | Currencies132
    | Currencies133
    | Currencies134
    | Currencies135
    | Currencies136
    | Currencies137
    | Currencies138
    | Currencies139
    | Currencies140
    | Currencies141
    | Currencies142
    | Currencies143
    | Currencies144
    | Currencies145
    | Currencies146
    | Currencies147
    | Currencies148
    | Currencies149
    | Currencies150
    | Currencies151
    | Currencies152
    | Currencies153
    | Currencies154
    | Currencies155
    | Currencies156
    | Currencies157
    | Currencies158
    | Currencies159
    | Currencies160
    | Currencies161
    | Currencies162
    | Currencies163
    | Currencies164
    | Currencies165
    | Currencies166;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  demonyms: Demonyms;
  callingCodes: string[];
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ces: Nld;
  deu: Nld;
  est: Nld;
  fin: Nld;
  fra: Nld;
  hrv?: Nld;
  hun: Nld;
  ita: Nld;
  jpn?: Nld;
  kor: Nld;
  nld: Nld;
  per?: Nld;
  pol: Nld;
  por: Nld;
  rus: Nld;
  slk: Nld;
  spa: Nld;
  swe: Nld;
  urd: Nld;
  zho?: Nld;
  cym?: Nld;
}

interface Languages {
  nld?: string;
  pap?: string;
  prs?: string;
  pus?: string;
  tuk?: string;
  por?: string;
  eng?: string;
  swe?: string;
  sqi?: string;
  cat?: string;
  ara?: string;
  grn?: string;
  spa?: string;
  hye?: string;
  smo?: string;
  fra?: string;
  bar?: string;
  aze?: string;
  rus?: string;
  run?: string;
  deu?: string;
  ben?: string;
  bul?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  bel?: string;
  bjz?: string;
  aym?: string;
  que?: string;
  msa?: string;
  dzo?: string;
  nor?: string;
  tsn?: string;
  sag?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  zho?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  swa?: string;
  rar?: string;
  zdj?: string;
  ell?: string;
  tur?: string;
  ces?: string;
  slk?: string;
  dan?: string;
  tir?: string;
  ber?: string;
  mey?: string;
  est?: string;
  amh?: string;
  fin?: string;
  fij?: string;
  hif?: string;
  fao?: string;
  kat?: string;
  nfr?: string;
  pov?: string;
  kal?: string;
  cha?: string;
  hat?: string;
  hun?: string;
  ind?: string;
  glv?: string;
  hin?: string;
  tam?: string;
  gle?: string;
  fas?: string;
  arc?: string;
  ckb?: string;
  isl?: string;
  heb?: string;
  jam?: string;
  nrf?: string;
  jpn?: string;
  kaz?: string;
  kir?: string;
  khm?: string;
  gil?: string;
  kor?: string;
  lao?: string;
  sin?: string;
  sot?: string;
  lit?: string;
  ltz?: string;
  lav?: string;
  ron?: string;
  mlg?: string;
  div?: string;
  mah?: string;
  mkd?: string;
  mlt?: string;
  mya?: string;
  cnr?: string;
  mon?: string;
  cal?: string;
  mfe?: string;
  nya?: string;
  afr?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  pih?: string;
  niu?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  nep?: string;
  nau?: string;
  mri?: string;
  nzs?: string;
  urd?: string;
  fil?: string;
  pau?: string;
  hmo?: string;
  tpi?: string;
  pol?: string;
  kin?: string;
  som?: string;
  slv?: string;
  ssw?: string;
  crs?: string;
  tha?: string;
  tgk?: string;
  tkl?: string;
  tet?: string;
  ton?: string;
  tvl?: string;
  ukr?: string;
  uzb?: string;
  lat?: string;
  vie?: string;
  bis?: string;
  nbl?: string;
  nso?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  zib?: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies166 {
  ANG: CZK;
}

interface Currencies165 {
  TRY: CZK;
}

interface Currencies164 {
  HUF: CZK;
}

interface Currencies163 {
  BWP: CZK;
  CNY: CZK;
  EUR: CZK;
  GBP: CZK;
  INR: CZK;
  JPY: CZK;
  USD: CZK;
  ZAR: CZK;
  ZWB: CZK;
}

interface Currencies162 {
  KPW: CZK;
}

interface Currencies161 {
  TTD: CZK;
}

interface Currencies160 {
  JOD: CZK;
}

interface Currencies159 {
  SCR: CZK;
}

interface Currencies158 {
  TND: CZK;
}

interface Currencies157 {
  CNY: CZK;
}

interface Currencies156 {
  IRR: CZK;
}

interface Currencies155 {
  MYR: CZK;
}

interface Currencies154 {
  XAF: CZK;
}

interface Currencies153 {
  TJS: CZK;
}

interface Currencies152 {
  YER: CZK;
}

interface Currencies151 {
  EGP: CZK;
}

interface Currencies150 {
  SOS: CZK;
}

interface Currencies149 {
  AWG: CZK;
}

interface Currencies148 {
  BBD: CZK;
}

interface Currencies147 {
  BOB: CZK;
}

interface Currencies146 {
  DJF: CZK;
}

interface Currencies145 {
  RWF: CZK;
}

interface Currencies144 {
  MWK: CZK;
}

interface Currencies143 {
  CDF: CZK;
}

interface Currencies142 {
  AED: CZK;
}

interface Currencies141 {
  PAB: CZK;
  USD: CZK;
}

interface Currencies140 {
  ALL: CZK;
}

interface Currencies139 {
  UAH: CZK;
}

interface Currencies138 {
  LKR: CZK;
}

interface Currencies137 {
  CVE: CZK;
}

interface Currencies136 {
  UYU: CZK;
}

interface Currencies135 {
  NOK: CZK;
}

interface Currencies134 {
  DZD: CZK;
  MAD: CZK;
  MRU: CZK;
}

interface Currencies133 {
  BZD: CZK;
}

interface Currencies132 {
  SHP: CZK;
}

interface Currencies131 {
  IQD: CZK;
}

interface Currencies130 {
  GBP: CZK;
  SHP: CZK;
}

interface Currencies129 {
  BMD: CZK;
}

interface Currencies128 {
  LSL: CZK;
  ZAR: CZK;
}

interface Currencies127 {
  AFN: CZK;
}

interface Currencies126 {
  GMD: CZK;
}

interface Currencies125 {
  KYD: CZK;
}

interface Currencies124 {
  THB: CZK;
}

interface Currencies123 {
  SEK: CZK;
}

interface Currencies122 {
  PGK: CZK;
}

interface Currencies121 {
  MGA: CZK;
}

interface Currencies120 {
  GBP: CZK;
  GGP: CZK;
}

interface Currencies119 {
  VUV: CZK;
}

interface Currencies118 {
  TZS: CZK;
}

interface Currencies117 {
  AUD: CZK;
}

interface Currencies116 {
  BRL: CZK;
}

interface Currencies115 {
  SBD: CZK;
}

interface Currencies114 {
  MAD: CZK;
}

interface Currencies113 {
  VES: CZK;
}

interface Currencies112 {
  EUR: CZK;
}

interface Currencies111 {
  JPY: CZK;
}

interface Currencies110 {
  USD: CZK;
}

interface Currencies109 {
  WST: CZK;
}

interface Currencies108 {
  TMT: CZK;
}

interface Currencies107 {
  SSP: CZK;
}

interface Currencies106 {
  NPR: CZK;
}

interface Currencies105 {
  UZS: CZK;
}

interface Currencies104 {
  RON: CZK;
}

interface Currencies103 {
  PLN: CZK;
}

interface Currencies102 {
  ZMW: CZK;
}

interface Currencies101 {
  BIF: CZK;
}

interface Currencies100 {
  JMD: CZK;
}

interface Currencies99 {
  CRC: CZK;
}

interface Currencies98 {
  SDG: CZK;
}

interface Currencies97 {
  EGP: CZK;
  ILS: CZK;
  JOD: CZK;
}

interface Currencies95 {
  CUC: CZK;
  CUP: CZK;
}

interface Currencies94 {
  LBP: CZK;
}

interface Currencies93 {
  XCD: CZK;
}

interface Currencies92 {
  INR: CZK;
}

interface Currencies91 {
  ILS: CZK;
}

interface Currencies90 {
  ZAR: CZK;
}

interface Currencies89 {
  TWD: CZK;
}

interface Currencies88 {
  IDR: CZK;
}

interface Currencies87 {
  KES: CZK;
}

interface Currencies86 {
  SYP: CZK;
}

interface Currencies85 {
  AUD: CZK;
  KID: CZK;
}

interface Currencies84 {
  CLP: CZK;
}

interface Currencies83 {
  NGN: CZK;
}

interface Currencies82 {
  ISK: CZK;
}

interface Currencies81 {
  QAR: CZK;
}

interface Currencies80 {
  FJD: CZK;
}

interface Currencies79 {
  GTQ: CZK;
}

interface Currencies78 {
  MRU: CZK;
}

interface Currencies77 {
  MVR: CZK;
}

interface Currencies76 {
  ETB: CZK;
}

interface Currencies75 {
  CKD: CZK;
  NZD: CZK;
}

interface Currencies74 {
  MZN: CZK;
}

interface Currencies73 {
  XOF: CZK;
}

interface Currencies72 {
  BDT: CZK;
}

interface Currencies71 {
  AMD: CZK;
}

interface Currencies70 {
  PHP: CZK;
}

interface Currencies69 {
  DZD: CZK;
}

interface Currencies68 {
  GYD: CZK;
}

interface Currencies67 {
  PEN: CZK;
}

interface Currencies66 {
  SAR: CZK;
}

interface Currencies65 {
  GHS: CZK;
}

interface Currencies64 {
  FKP: CZK;
}

interface Currencies63 {
  BSD: CZK;
  USD: CZK;
}

interface Currencies62 {
  KRW: CZK;
}

interface Currencies61 {
  MDL: CZK;
}

interface Currencies60 {
  SZL: CZK;
  ZAR: CZK;
}

interface Currencies59 {
  MUR: CZK;
}

interface Currencies58 {
  LRD: CZK;
}

interface Currencies57 {
  BGN: CZK;
}

interface Currencies56 {
  RSD: CZK;
}

interface Currencies55 {
  NIO: CZK;
}

interface Currencies54 {
  PKR: CZK;
}

interface Currencies53 {
  MKD: CZK;
}

interface Currencies52 {
  RUB: CZK;
}

interface Currencies51 {
  XPF: CZK;
}

interface Currencies50 {
  MNT: CZK;
}

interface Currencies49 {
  VND: CZK;
}

interface Currencies48 {
  GIP: CZK;
}

interface Currencies47 {
  UGX: CZK;
}

interface Currencies46 {
  HNL: CZK;
}

interface Currencies45 {
  HRK: CZK;
}

interface Currencies44 {
  MXN: CZK;
}

interface Currencies43 {
  CAD: CZK;
}

interface Currencies42 {
  SRD: CZK;
}

interface Currencies41 {
  CHF: CZK;
}

interface Currencies40 {
  GNF: CZK;
}

interface Currencies39 {
  STN: CZK;
}

interface Currencies38 {
  KMF: CZK;
}

interface Currencies37 {
  AUD: CZK;
  TVD: CZK;
}

interface Currencies36 {
  LYD: CZK;
}

interface Currencies35 {
  SLL: CZK;
}

interface Currencies34 {
  KHR: CZK;
  USD: CZK;
}

interface Currencies33 {
  OMR: CZK;
}

interface Currencies32 {
  GBP: CZK;
  IMP: CZK;
}

interface Currencies31 {
  NZD: CZK;
}

interface Currencies30 {
  GEL: CZK;
}

interface Currencies29 {
  MOP: CZK;
}

interface Currencies28 {
  NAD: CZK;
  ZAR: CZK;
}

interface Currencies27 {
  BYN: CZK;
}

interface Currencies26 {
  KWD: CZK;
}

interface Currencies25 {
  BND: CZK;
  SGD: CZK;
}

interface Currencies24 {
  LAK: CZK;
}

interface Currencies23 {
  MMK: CZK;
}

interface Currencies22 {
  BHD: CZK;
}

interface Currencies21 {
  AOA: CZK;
}

interface Currencies20 {
  ARS: CZK;
}

interface Currencies19 {
  DKK: CZK;
}

interface Currencies18 {
  DKK: CZK;
  FOK: CZK;
}

interface Currencies17 {
  DOP: CZK;
}

interface Currencies16 {
  BTN: CZK;
  INR: CZK;
}

interface Currencies15 {
  AZN: CZK;
}

interface Currencies14 {
  SGD: CZK;
}

interface Currencies13 {
  BAM: CZK;
}

interface Currencies12 {
  GBP: CZK;
}

interface Currencies11 {
  KGS: CZK;
}

interface Currencies10 {
  GBP: CZK;
  JEP: CZK;
}

interface Currencies9 {
  HTG: CZK;
}

interface Currencies8 {
  BWP: CZK;
}

interface Currencies7 {
  ERN: CZK;
}

interface Currencies6 {
  TOP: CZK;
}

interface Currencies5 {
  PYG: CZK;
}

interface Currencies4 {
  KZT: CZK;
}

interface Currencies3 {
  HKD: CZK;
}

interface Currencies2 {
  COP: CZK;
}

interface Currency {
  CZK: CZK;
}

interface CZK {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  native: Native;
}

interface Native {
  nld?: Nld;
  pap?: Nld;
  prs?: Nld;
  pus?: Nld;
  tuk?: Nld;
  por?: Nld;
  eng?: Nld;
  swe?: Nld;
  sqi?: Nld;
  cat?: Nld;
  ara?: Nld;
  grn?: Nld;
  spa?: Nld;
  hye?: Nld;
  smo?: Nld;
  fra?: Nld;
  bar?: Nld;
  aze?: Nld;
  rus?: Nld;
  run?: Nld;
  deu?: Nld;
  ben?: Nld;
  bul?: Nld;
  bos?: Nld;
  hrv?: Nld;
  srp?: Nld;
  bel?: Nld;
  bjz?: Nld;
  aym?: Nld;
  que?: Nld;
  msa?: Nld;
  dzo?: Nld;
  nor?: Nld;
  tsn?: Nld;
  sag?: Nld;
  gsw?: Nld;
  ita?: Nld;
  roh?: Nld;
  zho?: Nld;
  kon?: Nld;
  lin?: Nld;
  lua?: Nld;
  swa?: Nld;
  rar?: Nld;
  zdj?: Nld;
  ell?: Nld;
  tur?: Nld;
  ces?: Nld;
  slk?: Nld;
  dan?: Nld;
  tir?: Nld;
  ber?: Nld;
  mey?: Nld;
  est?: Nld;
  amh?: Nld;
  fin?: Nld;
  fij?: Nld;
  hif?: Nld;
  fao?: Nld;
  kat?: Nld;
  nfr?: Nld;
  pov?: Nld;
  kal?: Nld;
  cha?: Nld;
  hat?: Nld;
  hun?: Nld;
  ind?: Nld;
  glv?: Nld;
  hin?: Nld;
  tam?: Nld;
  gle?: Nld;
  fas?: Nld;
  arc?: Nld;
  ckb?: Nld;
  isl?: Nld;
  heb?: Nld;
  jam?: Nld;
  nrf?: Nld;
  jpn?: Nld;
  kaz?: Nld;
  kir?: Nld;
  khm?: Nld;
  gil?: Nld;
  kor?: Nld;
  lao?: Nld;
  sin?: Nld;
  sot?: Nld;
  lit?: Nld;
  ltz?: Nld;
  lav?: Nld;
  ron?: Nld;
  mlg?: Nld;
  div?: Nld;
  mah?: Nld;
  mkd?: Nld;
  mlt?: Nld;
  mya?: Nld;
  cnr?: Nld;
  mon?: Nld;
  cal?: Nld;
  mfe?: Nld;
  nya?: Nld;
  afr?: Nld;
  her?: Nld;
  hgm?: Nld;
  kwn?: Nld;
  loz?: Nld;
  ndo?: Nld;
  pih?: Nld;
  niu?: Nld;
  nno?: Nld;
  nob?: Nld;
  smi?: Nld;
  nep?: Nld;
  nau?: Nld;
  mri?: Nld;
  nzs?: Nld;
  urd?: Nld;
  fil?: Nld;
  pau?: Nld;
  hmo?: Nld;
  tpi?: Nld;
  pol?: Nld;
  kin?: Nld;
  som?: Nld;
  slv?: Nld;
  ssw?: Nld;
  crs?: Nld;
  tha?: Nld;
  tgk?: Nld;
  tkl?: Nld;
  tet?: Nld;
  ton?: Nld;
  tvl?: Nld;
  ukr?: Nld;
  uzb?: Nld;
  lat?: Nld;
  vie?: Nld;
  bis?: Nld;
  nbl?: Nld;
  nso?: Nld;
  tso?: Nld;
  ven?: Nld;
  xho?: Nld;
  zul?: Nld;
  bwg?: Nld;
  kck?: Nld;
  khi?: Nld;
  ndc?: Nld;
  nde?: Nld;
  sna?: Nld;
  toi?: Nld;
  zib?: Nld;
}

interface Nld {
  official: string;
  common: string;
}
