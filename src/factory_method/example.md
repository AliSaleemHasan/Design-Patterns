# factory method is creational design patterns

## used to create new objects of some interface base on some business logics

# example of factory method

- lets assume that we need to make a space shooting game with this rules
  1 player is space ship that must kill all aliens
  2 aliens are different from each other in size , speed , power, and spawn time
  3 each aliens will be instantiated in random position
  4 each level spawning may defer from the pervious level

to create this type of game we need to instantiate each enemy (aliens) randomly
and to do this we need a factory method design pattern

# this game stracture would be as shown bellow

- Factory abstract calss or interface
  1 some sub classes that implement this interface to spawn enemies deferently
- enemy interface (if there are multiple type of enemies)
  1 some sub classes thet implement this interface (represents different types of enemies)
