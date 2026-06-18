# Ritocchi foto richiesti da Silvia (Villa AS)

Questi interventi sono presi dal file Excel `Info VILLA AS Piove di Sacco.xlsx`.
Richiedono ritocco manuale / inpainting (Photoshop o simili): **non** sono stati
applicati automaticamente perché la rimozione di oggetti, la sostituzione di
elementi e i ritocchi generativi non sono fattibili in modo affidabile via script.
Le foto attualmente online sono gli **originali ottimizzati**.

## Come applicare un ritocco (drop-in automatico)
1. Ritocca l'originale ed esporta il file mantenendo **lo stesso path relativo** della
   versione online, dentro la cartella:
   `…/Foto sito/_ritoccate/`
   Esempio: per sostituire `interni/01.jpg` crea
   `…/Foto sito/_ritoccate/projects/villa-as/interni/01.jpg`
2. Rilancia la pipeline:
   `python3 process_images.py villa-as`
   La pipeline userà automaticamente il file ritoccato al posto dell'originale.

## Elenco interventi → file online

| File online | Foto originale | Intervento richiesto |
|---|---|---|
| `interni/01.jpg` | DSC_2206 | Togliere il beige sotto la gamba del divano a destra |
| `interni/04.jpg` | DSC_2307 | (Valutare) raddrizzare allineando alle travi del soffitto |
| `interni/06.jpg` | DSC_2320 | Togliere l'oggetto sopra il divano |
| `interni/09.jpg` | IMG-4280 | Togliere ciò che si vede in TV e gli oggetti sul mobile sotto la TV; migliorare la qualità |
| `interni/11.jpg` | IMG_0383 | Togliere le cose sopra il tavolo |
| `interni/14.jpg` | IMG_0399 | Togliere gli oggetti in appoggio sul piano a destra |
| `interni/19.jpg` | IMG_0409 | Sostituire le lampadine con le lampade della foto "bagno padronale" |
| `interni/25.jpg` | bagno padronale | Togliere gli oggetti appoggiati sul piano a destra |
| `interni/27.jpg` | cucina mobile ferro | Togliere la borraccia |
| `before-after/5-dopo.jpg` | 5_DOPO | Ripulire legna e bancali sotto il portico sx, togliere le cose dal portico dx, trasformare il mucchio di terra in prato |

## Scelte già fatte (dove l'Excel chiedeva di decidere)
- **IMG_3382 vs IMG_3383** → tenuta **IMG_3383** (orizzontale, vista più ampia). 3382 esclusa.
- **cucina mobile ferro vs P1160381** → tenuta **cucina mobile ferro** (orizzontale). P1160381 esclusa.
- **Esterni**: inclusi 1, 2, 2a, 2b, 2c, 5, 6, 7, 8. Esclusi: 3 (qualità bassa), 4 e 9 (già presenti nel "prima/dopo").
- **IMG-1605** (`interni/08.jpg`): Silvia suggeriva di metterla piccola accanto allo scatto del mobile intero. Per ora è una tile della galleria; eventuale trattamento "dettaglio" da definire.
