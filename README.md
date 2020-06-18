# Glory Days

<p align="center">
  <a href="https://glory-days.herokuapp.com/">
    <img src="https://img.shields.io/badge/demo-LIVE-brightgreen.svg?style=flat-square" alt="Demo">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GloryDaysApp/glorydays/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License">
  </a>
</p>

<img width="360" alt="App Home Screen" src="https://user-images.githubusercontent.com/23479038/85011274-93553380-b161-11ea-8b3f-14d4255cbd3e.png">

# Inhoudsopgave

* [Omschrijving](#Omschrijving)
* [Installatie](#Installatie)
  * [Development](#Development)
  * [Production](#Production)
* [API](#Api)
* [Performance Enhancements](#Performance-Enhancements)
* [Conclusion](#Conclusion)
* [Feature Wishlist](#Feature-Wishlist)
* [Evidence Learning Objectives](#Evidence-Learning-Objectives)
* [Sources](#Sources)
* [Credits](#Credits)

# Omschrijving 

## Het team

Het development team bestaat uit de volgende leden:


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

