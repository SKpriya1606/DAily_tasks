Angular hands-on Exercise:

Create a SPA which have 3 components  GameComponent, OddNumber and EvenNumber
1. The GameComponent should have buttons to start and stop the game
2. When starting the game, an event (holding a incrementing number)
   should get emitted each second (ref = setInterval())
3. The event should be listenable from outside the component
4. When stopping the game, no more events should get emitted
  (clearInterval(ref))
5. A new OddNumber component should get created for every odd number
   emitted, the same should happen for the EvenNumber Component (on even numbers)
6. OddNumber component outputs  the Odd - Number and EvenNumber
   Component outputs the  Even - Number
7. Display both the Even and Odd numbers in a paragraph holding
   different Styles.
   
   
   #Angular Handson
     * Creating Game Component using setInterval,clearInterval with EventEmitter 
     * component binding - parent and child component communication
   
   
