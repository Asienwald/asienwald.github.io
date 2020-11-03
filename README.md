# This platformer site is really just an excuse for me to learn React
Being a single developer, relatively small site, there wasn't really a reason for me to add more complexity to the code by implementing Typescript and Redux...but all in the name of learning right?  

Though through building this site, I really learnt a lot.  
I learnt stuff like:  
- Building scalable and reusable components with ReactJS
- Managing complex application state with Redux
- Implementing type casting and code sanity with Typescript
- Building fluent animations with the Framer Motion animation library


### A bit of background
A part of my brain wanted a minimalistic sick looking website, and another part wanted a fun platformer site to pay homage to my game dev roots.  
But if I'm just looking to create a nice portfolio site, might as well get a template right?

Since game dev was basically what got me started into IT, I decided to settle with a platformer themed site.  


### Application State
An example of the app state used by this site is in `src/data/data.json`  

The entire application state is controlled by 2 main reducers,  
- __envReducer__, which controls app state related to the environment of the site, like the player, parallax background and ground states.
- __dataReducer__, which controls app state related to content hosted on the site, though there isn't any actions implemented for this state yet.

The initial application state is first derived from `src/data/data.json`.


### Interfaces
All state interfaces used is in `src/types/interfaces.ts`. Though some interfaces for specific components are in their `.tsx` file itself.   
Action types used for reducers are in `src/actions/actionTypes.tsx`


### Animations
Most animations are controlled by the `framer-motion` library except the environment animations which are coded with css keyframes.  


### Looking Forward
Some features I would like to implement in the future includes  
- Implementing a physics engine to add game features like player controls and platforms