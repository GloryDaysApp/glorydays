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
  <img width="360" alt="App Home Screen" src="https://user-images.githubusercontent.com/23479038/85011274-93553380-b161-11ea-8b3f-14d4255cbd3e.png">
</p>

# Inhoudsopgave

* [Omschrijving](#Omschrijving)
  * [Doel](#Doel)
  * [Core functionaliteit](#Core-functionaliteit)
* [User Scenario](#User-scenario)
* [Installatie](#Installatie)
  * [Development](#Development)
  * [Production](#Production)
* [Spotify API](#Spotify-Api)
* [Datamodel](#Datamodel)
* [Documentatie](#Documentatie)
  * [Design rationale](#Design-rationale)
  * [Product biografie](#Product-biografie)
  * [Code afspraken](#Code-afspraken)
* [Contributors](#contributors-)

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

# Spotify API

Voor het verkrijgen en afspelen van muziek hebben wij de [Spotify API](https://developer.spotify.com/documentation/web-api/) gebruikt. In dit hoofdstuk zullen wij u vertellen hoe deze precies in elkaar zit.

<details>
 <summary>Data</summary>

```json
{

}
```
</details>

# Datamodel



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

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
