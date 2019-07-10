---
title: Lösung der Einladung
---

Hier ist die Lösung für unsere mini CTF Einladung.

- Zuerst muss der QR Code mit einem belebigen Gerät gelesen werden.
- Du erhälst dann einen String der Base64 Codiert ist.
- Diesen String musst du decodieren und in eine datei schreiben.
- Ein Blick auf den Header verrät dir, das es sich um ein PNG handelt.
- Das PNG zeigt einen nicht lesbaren QR Code mit Westwoodlabs logo.
- Durch verändern des Kontrastes und der Helligkeit in einem Bildbearbeitungsprogramm lassen sich die Fehlenden Würfel einblenden.
- Das Lesen dieses Codes führt euch auf "Westwoodlabs.de/einladung"

War doch garnicht sooo schwer... ODER?