# JASYP 2022

## Hogar (des)conectado

### Server

RaspberryPi4 (with docker):

- Portainer.io
- PiHole
- HomeAssistante

datadis: gasto electricidad -> https://github.com/uvejota/homeassistant-edata
genie: asistente -> https://genie.standford.

### Productos

- Enchufe Ikea -> Toda la gama ZigBee de Ikea funciona muy bien
- Bombillas LIDL
- Sensor de movimiento Xiaomi
- Sensor CO2 montado en Arduino

## Inhibidores de micrófonos

Película: **Kimi**, sobre grabaciones de asistentes

### Componentes

- AdaFruit Pro Trinket - 5V 16Mhz -> Cualquier arduino que acepte ¿STI?
- PAM8403
- AD9833 -> Complicadísimo de comprar en España
- NU25C16T/R

**Con batería:**

- TP4056
- Batería 3.7V 500mAh

_NOTA: No alimentar todos los "emisores" de ultrasonido a la Arduino_

## Reportajes seguros

- Disroot
- Auditd: monitorización de archivos ([tutorial](https://linoxide.com/auditd-tool-security-auditing/))
- Se puede retransimitir FM/AM con la RaspberryPi
- User agent switcher
- Privacy badger

## Privacidad agresiva

### Operaciones técnicas

#### Browser

- Client side is not your friend: phishing (browser in the browser). Test your bro [trak](https://coveryourtracks.eff.org/). [Links remover](https://github.com/.)
- Browser hardening: 

#### Comunicación

- Surespot
- Signal
- TeamSpeak
- Mastodos
- [Revolt](https://revolt.chat)

#### Sharing

- [Shitpost](https://shitpost.to/)
- [OnionShare](https://onionshare.org)
- https://github.com/mergous/megatools
- https://github.com/pasmusser/gdrive

(Mezclo)

#### To build or not to build

- guerrillamail.com
smspva.com
- cleartalks.com

---

- https://sinux.su/main (Phishing as priv. comunications)(!)
- https://www.spoofcard.com (Spoofing)(!)

#### Sims & Privacy

Virutal SIMs, Layca, Pre-pay online SIM

- https://www.virtualsimapp.com/

[Onion Router 3G SIM](https:brashshornscommunications.uk/projects/onion3g)

#### Privacy in payments

**Prepaid cards**

- https://www.tarjetaspark.es/

**Cryptos + virtual Credit Card**

- https://www.bitstamp.net/ (no logs wallet?)
- https://tornado.cash/ (hide crypto transactions)
- https://ezzocard.com/ (pay vtc's in crypto)

**Cajeros**

- https://www.vatcointech.com/

#### Privacy Infrastucture

`PrivAgora`

- https://cockbox.org/ (Romanian VPS pay w/ BTC)
- https://koddos.net/ (offshore hosting)
- https://njal.la/

### Identity Security

SphereBrowser

### Physical Security

**HW Gadgets for H4x00rs**: Borrador de disco (recomendado discos M2, pq el borrado es más rápido), ~microlock~ (no funciona demasiado, la app puede seleccionar otro micrófono), detector de microfrecuencias (detectar si hay micrófonos, antenas,...), haula de faraday al metro (XD)

### Alert security

Situaciones donde tengas que hacer borrados y eso en muy muy muy poco tiempo.

#### Data destruction

- Arco voltaico: la fundes
- Microondas: a la RAM le sienta bien su bronceado 
**Chemical methods**
- Fuego
- Ácido Fluorantimónico: muy muy muy potente, y se carga una SSD en nada (un iPhone sobrevive jaja). Un policía si ve un cartel de ácido (ponlo tú anda) no interviene, tiene que llamar y le da tiempo de sobra a hacerse té.
**Mechanical methods**
- Taladro

Artículo 456 del Código Penal: ilegal la destrucción de pruebas.

**Globo de helio**: aprox 1L He - 1g para levantar, pones SSD + un poquito de ácido. En un patio interior no le van a disparar xd.

**Palomas mensajeras**: [Regulación BOE](https://www.boe.es/eli/es/rd/198), Servicio Colombófico Militar
Use Trusted Platform Module (TPM) Encryption, instead of passwords. Better SD or miniSD as they con be easier to destroy.

**Mezcla termita**: Explosiónnnnn
