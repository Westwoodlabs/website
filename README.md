Westwoodlabs Website
====================

Dieses Git-Repository enthält nur der Seiteninhalt der Westwoodlabs Website ([westwoodlabs.de](https://westwoodlabs.de/)) 
und *nicht* der Source Code des Themes. Das Theme ist als Git-Submodule eingebunden.
↳ [Zum Git-Repository des Themes](https://github.com/WestwoodLabs/hexo-theme-westwoods)

## Einrichtung
Vorausgesetzt werden [nodejs](http://nodejs.org), [npm](npmjs.com) und natürlich [git](http://git-scm.com).

```sh
git clone git@git.westwoodlabs.de:Westwoodlabs/westwoodlabs-website.git
cd westwoodlabs-website
git submodule update --init
npm install
```

Zum Erstellen der HTML Dateien wird [Hexo](http://hexo.io) verwendet. Wenn Hexo noch nicht installiert ist, 
kann es über npm installiert werden:

```sh
[sudo] npm install hexo-cli -g
```

Mit `hexo generate` können nun die HTML Dateien erstellt werden. Die Dateien werden dann im Verzeichnis `public/` abgelegt.

Installiert man noch das npm Paket `hexo-server`, kann man mit `hexo server` einen Entwicklungsserver starten, 
welcher Änderungen direkt aktualisiert.

```
[sudo] npm install hexo-server -g
hexo server
```

## Aktualisieren
```sh
git pull -r
git submodules update
```
