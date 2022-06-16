# Barcode_Scanner

## Projekt aufsetzen

Im 2.ten Folder "Barcode_Scanner" 'npm i' durchführen. (Falls nicht versucht 'npm install --save @ericblade/quagga2 ngx-barcode-scanner')

Zum starten verwendet 'ng serve --ssl=true --host=0.0.0.0 --disable-host-check'

'--ssl=true' bedeutet, es wird https verwendet.
'--host=0.0.0.0' erlaubt es allen Geräten im selben Netzwerk auf die aktive Session zu gelangen.
'--disable-host-check' hab ich verwendet weils ohne nicht gegangen ist.

Nun braucht ihr die ID des Hosts, also eures Laptops. (cmd -> ipconfig)
Damit dies funktioniert, müssen euer Host und euer Smartphone sich im gleichen Netzwerk befinden.
Beim Handy im Browser nun 'https://192.168.*.*:4200' eingeben. Zugriff auf Kamera erlauben, sonst funktionierts natürlich nicht!
