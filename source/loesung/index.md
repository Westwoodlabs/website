---
title: Lösung der Einladung
---

Hier ist die Lösung für unsere mini CTF Einladung.

- Zuerst muss der QR Code mit einem belebigen Gerät gelesen werden.
  ```
	iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAAAAACqUOFJAAADJklEQVRo3uVa25bjMAhDnPz/J6N9
	aO3BxvjSdvfspHnomSapsRUhCzKQ0UERuq9oL6F8xq8Yjaby949/EeOSFpa4Xrgb4K52cHkwu5/f
	CStpEchAizcw4DYc7WZYxaPSCaMzzBG+dw7Oj6pIUaM6YPEdWDGBSAI4ESi2OhZHuwtWmHPphc/7
	8gqcpt4mevIVOQi2WQOnTtKjAbgkm8uXH/M6YzmFgkcs8nO6WwNYjWPPODzl1ZAz9aFZ2AchEDLC
	hcDPa4sXNqY3sbWUNa80CyEiluZEipXnVTmjj4GYGHhBfU5jbd/wopNFlPH0TayWIXaCXJnDfDLH
	Gn813OZYUpOJN1vMwXb4T7yBFY40YKPGqdlUMw5lGS1PLIiSaStfnWTp20it0dIPILW6GTba7h/Z
	Z8mcbJCPypFwrbA6WsaLvBru9JpGn0zpQlggpJGgyJZH9HYfJNhoHf6X2hkjFNCfITbAujhy6Sy/
	59Q7UdSJFNlajvq3zuqn5/y2Eoyv8IoRArzG60taQ1Udwo6xF/ykKssA0Zjpe0n0ES+q4zTTcMsi
	B7v61z8INB6xj1evslCDwYhiqVc+hu7c+UmoMW06ZfsgXcrwmcHINyGfW+Co4YDDdWiYuX6IVwee
	YXbrxcRJst1AOJ8ee42SNqlzw8BdaOxlrLBoOW1DzlDgoMxL6XeKLqT/bijC3tXdPHvmOLq4vUhu
	ujjTeTkFk0kJA6vlslgzH3eBLeCxNbGqP5gxENmDOtWr6v8mt6wLzyvyUX0jHY5cpg4qZxuMGam5
	5a8odZo6gMp+aoU3tN0FGTFqp0K/ugpOWv/AEgQigqrwVrlliX/hYb+EgJgATiRVSNHNxsxWT4YC
	FbLkCCnWUmOh/Ja/5GoshLrmxcNCsK8iZVyA7/evTASoI9n2Io56ZCK02GPbipEZjOFLQyZZNuwz
	YFOvfk1f9MLElo+anDI9j9BnwNe8dx72DSYMjJ1D+YL3zvH1H6f/2DB0Q7zjO/qJU/Sv/7wKdc7T
	cln7BqwQJCi+5EJgI057yL8Nq6V0Zy0fJjqPG/IKGwVl8FqJxOG4J/O7sPoDl1piDQ1k/CkAAAAA
	SUVORK5CYII=
  ```
- Du erhälst dann einen String der Base64 Codiert ist.
- Diesen String musst du decodieren und in eine datei schreiben.
  ```bash
	base64 -d datei_mit_dem_text.txt > bild.png
  ```
- Ein Blick auf den Header verrät dir, das es sich um ein PNG handelt.
  ```bash
	file bild.png
  ```
- Das PNG zeigt einen nicht lesbaren QR Code mit Westwoodlabs logo.
  ![](westwoodlabslogo.png)
- Durch verändern des Kontrastes und der Helligkeit in einem Bildbearbeitungsprogramm lassen sich die Fehlenden Würfel einblenden.
  ```bash
        # Hierfür ist imagemagick von nöten.
        convert logo.png -threshold 99.9% qrcode.png
  ```
  ![](einladungsqr.png)
- Das Lesen dieses Codes führt euch auf "Westwoodlabs.de/einladung"

War doch garnicht sooo schwer... ODER?
