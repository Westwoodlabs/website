# Die Website für westwoodlabs.de

In diesem Repo ist nur der Seiteninhalt *nicht* der SourceCode des Themes.
Das Theme ist als git submodule eigenbunden.
-> Das [Theme Repo](http://git.westwoodlabs.de/Westwoodlabs/hexo-theme-westwoods)

## Installation:
[nodejs](http://nodejs.org), [npm](npmjs.com) und natürlich [git](http://git-scm.com) werden vorausgesetzt.

```sh
git clone git@git.westwoodlabs.de:Westwoodlabs/westwoodlabs-website.git
cd westwoodlabs-website
git submodule update --init #kann sein, dass--init nicht beötigt ist
npm install
sudo npm install -g hexo-cli
```

## Lokal Ansehen

```sh
hexo serve
```

## Update
```sh
git submodules update
git pull -r
```
