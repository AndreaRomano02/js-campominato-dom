# TRACCIA

Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

---

## STEPS

1.  - Recuper l'elemnto dove andro ad inserire il punteggio nel DOM.
    - Dichiarimao una variabile per il punteggio.
    - Al click di ogni casella
      - **SE** Non è stata cliccata
        - Incremento la variabile e la stampo in pagina.
      - **ALTRIMENTI** Interrompo e vado avanti.

<br >

2.  - Inizializzo un Array vuoto dove andrò ad inserire man mano i numeri randomici compresi da 1 alla quantita delle celle che varia in base alla difficoltà.

- **Fintanto che** l'Array ha meno di 16 numeri allora
  - **Fintanto che** esce un doppione
    - Randomizza un numero
- Inserisci il numero nell'Array
