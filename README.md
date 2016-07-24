Die Westwoodlabs Website
========================

In diesem Repo ist nur der Seiteninhalt *nicht* der Source Code des Layouts.
Das Theme ist als Git Submodule eingebunden.  
-> Das [Theme](https://github.com/WestwoodLabs/hexo-theme-westwoods)

## Einrichtung:
[nodejs](http://nodejs.org), [npm](npmjs.com) und natürlich [git](http://git-scm.com) werden vorausgesetzt.

```
git clone git@git.westwoodlabs.de:Westwoodlabs/westwoodlabs-website.git
cd westwoodlabs-website
git submodule update --init
npm install
```

Zur Erstellung der HTML Dateien wird [Hexo](http://hexo.io) verwendet. Wenn Hexo noch nicht vorhanden ist, kann es über npm installiert werden:

```
[sudo] npm install hexo-cli -g
```

Mit `hexo generate` kann dann die live Seite erstellt werden. Die Dateien werden dann im Verzeichnis `public/` abgelegt.

Installiert man noch das npm Paket `hexo-server`, kann man mit `hexo server` einen Entwicklungsserver starten, welcher Änderungen direkt aktualisiert.

```
[sudo] npm install hexo-server -g
hexo server
```

## Update
```sh
git pull -r
git submodules update
```
