# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Your reply here...

Pēc lapas restartēšanas teksts atkal būs paslēpts, jo restartējot lapu skripts arī restartējas. Tāpēc ka nav servera kas saglabā datus .

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Your reply here...

Skripts nestrādās, jo vienkārši JS neredzēs visas html izveidotās klases/id jo būs ātrāk ielādējies nekā html. Scripta mērķis ir atvērt tekstu

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Your reply here...
Metode kas gaida signālu dokumenta par izpildītu notikumu.
