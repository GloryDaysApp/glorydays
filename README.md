# Glory Days

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- [![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-) -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">
  <a href="https://glory-days.herokuapp.com/">
    <img src="https://img.shields.io/badge/demo-LIVE-brightgreen.svg?style=flat-square" alt="Demo">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GloryDaysApp/glorydays/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GloryDaysApp/glorydays#contributors-">
    <img src="https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square" alt="All Contributors">
  </a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/43337909/85061985-05e90200-b1a8-11ea-83db-0dbe21ced3e9.gif" alt="gif" width="200px">

</p>

# Inhoudsopgave

* [Omschrijving](#Omschrijving)
  * [Doel](#Doel)
  * [Core functionaliteit](#Core-functionaliteit)
* [User Scenario](#User-scenario)
* [Data Life Cycle](#Data-Life-Cycle)
* [Installatie](#Installatie)
  * [Development](#Development)
  * [Production](#Production)
* [Dependencies](#Dependencies)
  * [Dev dependencies](#Dev-dependencies)
* [Spotify API](#Spotify-Api)
  * [Oauth](#Oauth)
    * [OAuth flow](#OAuth-flow)
  * [Scopes](#Scopes)
  * [Spotfiy Web Playback SDK](#Spotfiy-Web-Playback-SDK)
* [Datamodel](#Datamodel)
* [Documentatie](#Documentatie)
  * [Design rationale](#Design-rationale)
  * [Product biografie](#Product-biografie)
  * [Code afspraken](#Code-afspraken)
* [Contributors](#contributors-)
* [Feature Wensenlijst](#Feature-Wensenlijst)

# Omschrijving 

Wereldwijd zijn er zo’n 50 miljoen Alzheimer patiënten. Ook in Nederland is het veel voorkomend. De ziekte treft mensen van uiteenlopende leeftijden, maar vooral ouderen krijgen ermee te maken. Alzheimer zorgt ervoor dat de hersenen worden aangetast, waardoor de persoonlijkheid vervaagd en herinneringen verdwijnen. Helaas is er op dit moment nog geen geneesmiddel voor deze slopende ziekte. 

Omdat de zoektocht naar een geneesmiddel tot nu toe nog geen succes heeft opgeleverd, hebben farmaceuten ervoor gekozen om alle energie te gaan steken in de preventie in plaats van het genezen.

Ondanks dat een medicijn ver weg is, kunnen we het verloop van de ziekte aangenamer maken met behulp van muziek. Onderzoek heeft namelijk aangetoond dat aan muziek gekoppelde herinneringen op een relatief ‘veilige’ plek in het menselijk brein worden opgeslagen. Het regelmatig beluisteren en beoefenen van muziek heeft een positief effect op de ontwikkeling van Alzheimer. Wanneer muziek persoonlijk en betekenisvol is voor het individu, beloven deze positieve effecten nog groter te worden.

## Doel

Wij hebben de applicatie Glory Days ontwikkeld met als doel om de band tussen vrienden, familie of verzorgers van Alzheimer patiënten te versterken. De app wordt hierbij niet gebruikt door de patiënt, maar door de vrienden, familie of verzorgers. Die kunnen vervolgens op zoek gaan naar herinneringen middels muziek. Als een muzieknummer gekoppeld is aan een unieke herinnering, dan kan dit opgeslagen worden om later terug te luisteren. Hierbij kan de gebruiker aangeven hoe de patiënt de herinnering ervaart. Op deze manier proberen wij bijzondere momenten te creëren.

## Core functionaliteit

De gebruiker moet via een muziek streaming platform nummers kunnen opzoeken en afspelen. Om deze vervolgens te kunnen liken of op te slaan als herinnering. Bij deze herinneringen kan tekst, audio en foto worden toegevoegd. Deze opgeslagen herinneringen en nummers kunnen terug worden gekeken en of geluisterd.

# User scenario

_**Wie is de gebruiker?**_ \
Een Alzheimer patiënt, zijn verzorg(st)ers, familieleden en vrienden.

_**Wat wil de gebruiker?**_ \
Herinneringen opslaan en ophalen door middel van muziek.

_**Waar gaat de gebruiker het gebruiken?**_ \
Thuis of buiten (in de buurt van het huis).

_**Waarom wil de gebruiker het gebruiken?**_ \
De band tussen vrienden, familie of verzorger versterken door middel van het ophalen van herinneringen met muziek. Om de emotionele toestand positief te beïnvloeden. Om cognitieve vaardigheden minder hard af te laten glijden.

_**Hoe gaat de gebruiker het gebruiken?**_ \
De verzorger zal een nummer opzoeken via de telefoon voor de patiënt. De patiënt krijgt optioneel bijbehorende afbeeldingen, video en of audio te zien en of horen. Bij de juiste muziek kunnen gerelateerde herinneringen op worden gehaald en vast worden gelegd binnen de app. Herinneringen kunnen te allen tijde terug worden gekeken. 

# Data Life Cycle
Om overzicht te houden waar de data in de applicatie leeft, is er een Data Life Cycle ontwikkeld. <br>
<img width="1074" alt="Screenshot 2020-06-18 at 23 11 02" src="https://user-images.githubusercontent.com/45422060/85072922-24f08f80-b1ba-11ea-934b-7a77c2bda50a.png">
<img width="1069" alt="Screenshot 2020-06-18 at 23 11 11" src="https://user-images.githubusercontent.com/45422060/85072909-1efaae80-b1ba-11ea-9d85-49df30d63f06.png">

# Installatie

Zie de installatie gids om te zien hoe je de app kan installeren en gebruiken.

<details>
    <summary>Installatie gids</summary>

Ga via de terminal naar de map waar je het project wilt plaatsen:

```
    cd Path/To/Folder
```

Kloon de repository en ga naar de projectmap:

```
    git clone https://github.com/GloryDaysApp/glorydays.git && cd glorydays
```

Na het klonen kan je alle dependencies installeren:

```
    npm install
```

### Development

Voer tijdens de ontwikkeling de volgende opdracht uit om de wijzigingen door te laten voeren in je browser zodat je 
ze kan bekijken en testen:

```
    npm run dev:watch
```

Ga in je browser naar `localhost`:

```
   localhost:3030 
```

### Production

Wanneer de app klaar is, gebruikt u Heroku om deze te implementeren.

Log eerst in bij Heroku:
```
    heroku login
```

Implementeer de app door een nieuw domein op Heroku te maken. Heroku genereert een willekeurige naam voor uw app.
```
    heroku create
```

Kloon de repository:
```
    heroku git:remote -a glory-days
```

Push de master branch naar Heroku:
```
    git add .
    git commit -m "Heroku"
    git push heroku master
```

Open de app in je browser om te controleren of alles goed is gegaan:
```
    heroku open
```

Voer de volgende opdracht uit om de logs te zien wanneer er iets mis is gegaan:
```
    heroku logs --tail
```
</details>

# Dependencies

De core Node.js packages die gebruikt worden in de app zijn:

| Naam  | NPM Package Link  |
| ----- | ----------------- |
| Cookie parser  | [cookie-parser](https://www.npmjs.com/package/cookie-parser) |
| Dotenv | [dotenv](https://www.npmjs.com/package/dotenv) |
| EJS | [ejs](https://www.npmjs.com/package/ejs) |
| Express | [express](https://www.npmjs.com/package/express) |
| Express Session | [express-session](https://www.npmjs.com/package/express-session) |
| FS | [fs](https://www.npmjs.com/package/fs) |
| Heroku | [heroku](https://www.npmjs.com/package/heroku) |
| Mongoose | [mongoose](https://www.npmjs.com/package/mongoose) |
| Multer | [multer](https://www.npmjs.com/package/multer) |
| Node Fetch | [node-fetch](https://www.npmjs.com/package/node-fetch) |
| NPM Rull All| [npm-run-all](https://www.npmjs.com/package/npm-run-all) |
| Query String | [query-string](https://www.npmjs.com/package/query-string) |
| Rimraf | [rimraf](https://www.npmjs.com/package/rimraf) |

## Dev dependencies

De Node.js packages die voor development in de app gebruikt worden zijn:

| Naam  | NPM Package Link  |
| ----- | ----------------- |
| Chokidar CLI | [chokidar-cli](https://www.npmjs.com/package/hokidar-cli) |
| Concurrently | [concurrently](https://www.npmjs.com/package/concurrently) |
| ESLint | [eslint](https://www.npmjs.com/package/eslint) |
| Gulp | [gulp](https://www.npmjs.com/package/gulp) |
| Gulp Autoprefixer | [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) |
| Gulp Clean CSS | [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) |
| Gulp Concat | [gulp-concat](https://www.npmjs.com/package/gulp-concat) |
| Gulp Filter | [gulp-filter](https://www.npmjs.com/package/gulp-filter) |
| Gulp Minify | [gulp-minify](https://www.npmjs.com/package/gulp-minify) |
| Gulp Rev | [gulp-rev](https://www.npmjs.com/package/gulp-rev) |
| Gulp Rev CSS URL | [gulp-rev-css-url](https://www.npmjs.com/package/gulp-rev-css-url) |
| Gulp Rev Replace | [gulp-rev-replace](https://www.npmjs.com/package/gulp-rev-replace) |
| Gulp Sass | [gulp-sass](https://www.npmjs.com/package/gulp-sass) |
| Nodemon | [nodemon](https://www.npmjs.com/package/nodemon) |
| NPX | [npx](https://www.npmjs.com/package/npx) |
| Stylelint | [stylelint](https://www.npmjs.com/package/stylelint) |
| Stylelint Config Standaard | [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) |
| Stylelint Config Sass Guidelines | [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines) |
       
# Spotify API

In het concept hebben we veel te maken met het zoeken en toevoegen van muziek. Voor de applicatie gebruiken we de [WebAPI van Spotify](https://developer.spotify.com/documentation/web-api/). Deze API is gratis te gebruiken, zolang dit niet voor commerciële doeleinden wordt gebruikt. Om te beginnen heb je een [Spotify Developer account](https://developer.spotify.com/) nodig. 

De gebruiker van de applicatie heeft een premium Spotify account nodig. Om te beginnen zal de gebruiker moeten inloggen bij Spotify. 

<img width="1145" alt="Spotify Login Scherm" src="https://user-images.githubusercontent.com/65908596/85026767-601e9e80-b179-11ea-9004-5c2822a748bf.png">

Zodra de gebruiker in ingelogd zal de autorisatie starten. 

## Oauth

Om de OAuth 2.0 voor de Spotify API te gebruiken, heb je de volgende variabelen nodig:
- Client ID
- Client Secret
- Redirect URI

Deze variabelen zijn terug te vinden in het [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/login). De Spotify Redirect-URI moet worden ingesteld in uw Spotify-dashboard. Deze URI moet hetzelfde zijn als uw callback-URI. Anders zal de OAuth niet slagen. Het is belangrijk om te onthouden dat deze URI zal veranderen zodra u de applicatie wilt deployen. Daarnaast mogen de Client Id en de Client Secret nooit zichtbaar zijn in Github (net zoals andere gevoelige data). 

Deze kun je bijvoorbeeld opslaan in een dotenv bestand en deze in je .gitignore zetten zodat hij niet op Github komt te staan. Hier is een voorbeeld van hoe wij dit hebben aangepakt;

<details>
  <summary>.env.example</summary>
  
```
PORT=3030
SPOTIFY_REDIRECT_URI='caalback URI'
SPOTIFY_CLIENT_ID='client id from your Spotify Developer account'
SPOTIFY_CLIENT_SECRET='client secret from your Spotify Developer account'
SESSION_KEY='session key'
MONGODB_URI='URI to mongoose DB'
```
  
</details>

### OAuth flow

<img width="1176" alt="OAuth flow" src="https://user-images.githubusercontent.com/65908596/85027043-c1467200-b179-11ea-94dc-eec95d5be53e.png">

1. Stuur de gebruiker naar Spotify en vraag hem toestemming te geven aan de applicatie om zijn of haar Spotify-gegevens in te lezen.
2. Spotify keert terug naar de applicatie op een ingestelde callback-URL(redirect URI).
3. Doe een verzoek tot de acces en refresh token met een fetch, inclusief .env gegevens. 
4. Nu kunt u de Spotify-gegevens van de gebruiker ophalen via een fetch met de accestoken. 

## Scopes

Nu de OAuth is geslaagd kun je door middel van Scopes features aan de applicatie toevoegen. De features voor onze applicatie zijn;

- Muziek zoeken
- Muziek afspelen
- Nummer toevoegen aan favorieten
- Nummer toevoegen aan herinnering. 

Per functionaliteit is het van belang om uit te zoeken welke Scope hiervoor nodig is in de [Authorization Scopes](https://developer.spotify.com/documentation/general/guides/scopes/). 

## Spotfiy Web Playback SDK

De Spotify Web SDK is een beta versie van een client-side Javascript library van Spotify. Met de library kan je een Spotify Player creëren in de browser. Hiermee kan je nummers afspelen, zonder dat Spotify geopend hoeft te zijn. Hiervoor heb je de uit de OAuth verkregen `ACCESS_TOKEN` nodig. Wanneer de webplayer is geïnitialiseerd, kun je nummers afspelen door de `song id` mee te geven. Met de speler kun je afspelen, en local playback (pauzeren, volgende, etc.) controleren. In het geval van Glory Days is een nummer afspelen en pauzeren functioneel. Dit wordt later uitgebreid. Om meer te lezen over de technische implicaties, kun je de [documentatie van Spotiy Web Player SDK](https://developer.spotify.com/documentation/web-playback-sdk/) raadplegen.

# Datamodel

Voor het opslaan en de management van data maken we gebruik van Mongodb: een niet-relationele database. Zo houden we onze data gestructureerd en breekt de webapp niet wanneer de server uitvalt. Voor Mongodb gebruiken we Mongoose om het werkbaar te maken binnen onze code. Mongoose heeft een schema nodig, zodat Mongodb wat voor data in de database terecht komt. Door dit vaste patroon is het veiliger en meer solide. Onze Mongoose datamodel ziet er als volgt uit:
```javascript
const mongoose = require('mongoose');

// Mongoose schema
const Schema = mongoose.Schema;

const account = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    country: String,
    photo: String,
    genres: {
        type: Array,
        default: []
    },
    ages: {
        type: Array,
        default: []
    },
    artists: {
        type: Array,
        default: []
    },
    spotifyRefreshToken: String,
    spotifyAccessToken: String,
    careTakers: {
        type: Array,
        default: []
    }
});

const memory = new Schema({
    memoryId: String,
    song: {
        type: Array,
        default: []
    },
    emotion: String,
    energy: String, 
    description: {
        type: Array,
        default: []
    },
    title: {
        type: Array,
        default: []
    },
    keywords: {
        type: Array,
        default: []
    },
    media: {
        type: Array,
        default: []
    }
});

// // Model
const Account = mongoose.model('Account', account);
const Memory = mongoose.model('Memory', memory);

module.exports = { Account, Memory };
```


# Documentatie

Afgelopen weken hebben we het proces bijgehouden in de **product biografie**. Ook hebben we een **design rationale** gemaakt, die een verantwoording is van onze app. 

## Design rationale

In de design rationale hebben wij de debriefing, probleem definitie beschreven, aangetoond was onze oplossing is en een uitleg gegeven van onze code. De design rationale is een verantwoording van ons ontwerp.

Bekijk [hier](https://docs.google.com/document/d/1C6x1odMwO2Cvtgix7nsdtX78dHrmNY_EgaVVLOTDGHk/edit) de design rationale!

## Product biografie

In het eindproject doorlopen wij een iteratief proces. Elke week bespreken wij met onze opdrachtgever onze vorderingen en ideeen. In de product biografie hebben wij stap voor stap bijgehouden wat we allemaal hebben gedaan. 
Zo hebben we het proces, de werkwijze en de planning beschreven. Maar ook onze schetsen, testen, uitprobeersels en inspiratie zijn deel van de product biografie.

Bekijk [hier](https://docs.google.com/document/d/1WLTZvnaozR54mjuEAJiTyEz7x85r8EW1nZUzlMftpLw/edit) de product biografie!

## Code afspraken

Om ervoor te zorgen dat al onze code consistent is hebben wij allemaal afspraken gemaakt met betrekking hierop. Deze afspraken zijn [in de Wiki](https://github.com/GloryDaysApp/glorydays/wiki/Code-Regels) te vinden.


## Contributors ✨

Bedankt aan deze geweldige mensen ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Coenmathijssen"><img src="https://avatars3.githubusercontent.com/u/43337909?v=4" width="100px;" alt=""/><br /><sub><b>Coenmathijssen</b></sub></a><br /><a href="https://github.com/GloryDaysApp/glorydays/commits?author=Coenmathijssen" title="Code">💻</a> <a href="https://github.com/GloryDaysApp/glorydays/issues?q=author%3ACoenmathijssen" title="Bug reports">🐛</a> <a href="#a11y-Coenmathijssen" title="Accessibility">️️️️♿️</a> <a href="#content-Coenmathijssen" title="Content">🖋</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=Coenmathijssen" title="Documentation">📖</a> <a href="#design-Coenmathijssen" title="Design">🎨</a> <a href="#ideas-Coenmathijssen" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-Coenmathijssen" title="Maintenance">🚧</a> <a href="#question-Coenmathijssen" title="Answering Questions">💬</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=Coenmathijssen" title="Tests">⚠️</a><a href="https://github.com/GloryDaysApp/glorydays/commits?author=Coenmathijssen" title="Data">🔣</a></td>
   <td align="center"><a href="http://www.jenniferslagt.nl"><img src="https://avatars0.githubusercontent.com/u/45489420?v=4" width="100px;" alt=""/><br /><sub><b>Jennifer Slagt</b></sub></a><br /><a href="https://github.com/GloryDaysApp/glorydays/commits?author=jenniferslagt" title="Code">💻</a> <a href="https://github.com/GloryDaysApp/glorydays/issues?q=author%3Ajenniferslagt" title="Bug reports">🐛</a> <a href="#a11y-jenniferslagt" title="Accessibility">️️️️♿️</a> <a href="#content-jenniferslagt" title="Content">🖋</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=jenniferslagt" title="Documentation">📖</a> <a href="#design-jenniferslagt" title="Design">🎨</a> <a href="#ideas-jenniferslagt" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-jenniferslagt" title="Maintenance">🚧</a> <a href="#question-jenniferslagt" title="Answering Questions">💬</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=jenniferslagt" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/marissaverdonck"><img src="https://avatars3.githubusercontent.com/u/43657951?v=4" width="100px;" alt=""/><br /><sub><b>marissaverdonck</b></sub></a><br /><a href="https://github.com/GloryDaysApp/glorydays/commits?author=marissaverdonck" title="Code">💻</a> <a href="https://github.com/GloryDaysApp/glorydays/issues?q=author%3Amarissaverdonck" title="Bug reports">🐛</a> <a href="#a11y-marissaverdonck" title="Accessibility">️️️️♿️</a> <a href="#content-marissaverdonck" title="Content">🖋</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=marissaverdonck" title="Documentation">📖</a> <a href="#design-marissaverdonck" title="Design">🎨</a> <a href="#ideas-marissaverdonck" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-marissaverdonck" title="Maintenance">🚧</a> <a href="#question-marissaverdonck" title="Answering Questions">💬</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=marissaverdonck" title="Tests">⚠️</a></td>
   <td align="center"><a href="https://github.com/MarjoleinAardewijn"><img src="https://avatars1.githubusercontent.com/u/23479038?v=4" width="100px;" alt=""/><br /><sub><b>MarjoleinAardewijn</b></sub></a><br /><a href="https://github.com/GloryDaysApp/glorydays/commits?author=MarjoleinAardewijn" title="Code">💻</a> <a href="#infra-MarjoleinAardewijn" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/GloryDaysApp/glorydays/issues?q=author%3AMarjoleinAardewijn" title="Bug reports">🐛</a> <a href="#a11y-MarjoleinAardewijn" title="Accessibility">️️️️♿️</a> <a href="#content-MarjoleinAardewijn" title="Content">🖋</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=MarjoleinAardewijn" title="Documentation">📖</a> <a href="#design-MarjoleinAardewijn" title="Design">🎨</a> <a href="#ideas-MarjoleinAardewijn" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-MarjoleinAardewijn" title="Maintenance">🚧</a> <a href="#question-MarjoleinAardewijn" title="Answering Questions">💬</a> <a href="#tutorial-MarjoleinAardewijn" title="Tutorials">✅</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=MarjoleinAardewijn" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Zeijls"><img src="https://avatars1.githubusercontent.com/u/45422060?v=4" width="100px;" alt=""/><br /><sub><b>Simone</b></sub></a><br /><a href="https://github.com/GloryDaysApp/glorydays/commits?author=Zeijls" title="Code">💻</a> <a href="https://github.com/GloryDaysApp/glorydays/issues?q=author%3AZeijls" title="Bug reports">🐛</a> <a href="#a11y-Zeijls" title="Accessibility">️️️️♿️</a> <a href="#content-Zeijls" title="Content">🖋</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=Zeijls" title="Documentation">📖</a> <a href="#design-Zeijls" title="Design">🎨</a> <a href="#ideas-Zeijls" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-Zeijls" title="Maintenance">🚧</a> <a href="#question-Zeijls" title="Answering Questions">💬</a> <a href="https://github.com/GloryDaysApp/glorydays/commits?author=Zeijls" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Dit project volgt de specificatie van [all-contributors](https://github.com/all-contributors/all-contributors). Bijdragen van welke aard dan ook zijn welkom!

# Feature Wensenlijst
- Account aanmaken/inloggen
- Verschillende subaccounts voor verzorgers
- Muzieksuggesties op maat
- Playlist samenstellen
- Herinnering aanpassen / verwijderen
- Muziekspelen door de gehele app heen
- Data filteren, sorteren en analyseren
- Verschillende muziekdiensten
