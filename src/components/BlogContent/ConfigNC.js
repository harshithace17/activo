import { hot } from "react-hot-loader/root";




const ConfigNC=[`
Configuration NC:
A partition which replicates forest wide and read/write in every DC in the forest.
These contains the containers and objects of the config which describe the topology of the forest.
These also contains the well known security principals

Display specifiers:
They provide localization and context menus. 
Instead of trying to translate contents of each attributes to their native language. They are stored as display specifiers and used regarding which is selected while installing. English has 0x409.
Context menus are which appears when we right click any object. They can be maintained by sidplay specifiers.

Extended rights:
__________________________________________

Lost and Found Config:
If an object is created and deleted within the replication cycle then they are found in the lost and found config.


`];




export default hot(ConfigNC);