# moodPoint -app 1.0.0

## "INNOES - program grantowy na rzecz innowacji społecznych w obszarze dostępności"

Aplikacja PWA dla monitorowania stanu samopoczucia użytkownika biorącego udział w projekcie zdalnej opieki nad osobami starszymi:

## Funkcjonalności

- Zalogowanie uzytkownika do widoku głównego aplikacji.
- Możliwośc wskazania własnego samopoczucia w danym dniu miesiąca.
- Mozliwość zgłoszenia prośby kontaku z opiekunek zdalnym.
- Wyświetlenie komunikatu o poprawnym zgłoszeniu swojego nastroju.
- Wyświetlenie komunikatu o zgłoszonej prośbie kontaku.

## Technologia

W aplikacji zastosowano poszczególne technologie

- React JS 18.2.0
- SASS - preprocesor CSS
- Bootstrap - bibilioteka UI

## Instalacja

moodpoint-app wymaga [Node.js](https://nodejs.org/) v10+ do uruchomienia.

##### Dla uruchumoienia wersji deweloperskiej...

Aby uruchomić aplikacje mobilna w wersji deweloperskiej, należy się upewnić, że został uruchiomy serwer aplikacji (patrz ~./moodpoint-backend/README.md).
Nastepnie przechodzimy do folderu ./moodpoint-app i instalujemy za pomocą komendy npm i potrzebne dependecje.

```sh
cd moodpoint-app
npm i
```

Następnie komendą npm run start, uruchamiamy wersje deweloperską aplikacji.

```sh
npm run start
```

##### Dla uruchumoienia wersji produkcyjnej...

Aby uruchomić wersje produkcyjna aplikacji należy przeniesć aplikacje na server VPS, następnie poleceniem

```sh
npm i
```

zainstalowac potrzebne dependencje.

Po zainstalowaniu dependencji należy zbudować wersję produkcyjną aplikacji poleceniem

```sh
npm run build
```

w miejscu na serwerze na które wskazuje domena.

## License

Licencja na wyłączność INNOES
