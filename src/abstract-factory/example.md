# abstract factory is creational design patterns

## used whe you need your code to work with various family of realted product withoud delaing with subclasses

# example of factory method

- UIFactory that gather UI elements due to the OS type
  let's assume that we need to make application that is cross platform (windows,macos,linux ... etc)
  each one of this platform differ from others with its UI components (linux buttons are different from windows buttons .. etc)
  the best way to make this application is by using abstract factory like that
  1 interface (factory) (sub classes of this factory are windowsFactory,linuxFactory ... etc)
  2 subclasses of factory to make different UI elements due to Operating System
  3 Button super class (interface or abstract class)
  4 subclasses for Button (one represent linux button , the other reperesent windows button ... )
  5 checkbox super class (interface or abstract class)
  6 subclasses for checkbox (one represent linux checkbox , the other reperesent windows checkbox ... )
  when the user start this application (the main function which is in app.tsx check what is his OS) ,
  if linux then the application use linuxFactory to instantiate linuxButton and linuxCheckbox ... etc
