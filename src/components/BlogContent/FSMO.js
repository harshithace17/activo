import { hot } from "react-hot-loader/root";


const FSMO=[`
Operations Master:
schema master, domain naming master, Relative ID master, Primary domain controller, Infrastructure master.

These domain controller roles are usually created and resided in the DC first created in the forest. These plays important role in the normal domain functionalities from user creation to cross object reference.
Some of the operations master have forest wide functionalities like schema master, domain naming master. while others have domain wide functionalities.

Purposes:
Schema master:
It defines the schema of the forest and every change to the schema are usually performed in the schema master role holed DC. So these must be up while schema changing function is done.

Domain Naming master:
It checks the naming clash between domain already in the forest and domain to be added. Without this role we can't add new domain to the forest.
It also holds to change namespace of directory partitions and add application partition to the directory.

Relative ID master:
Every object in the forest have unique SID which represents regardless of their attributes and it's unique.
RID master gives away from RID pool a bunch of unique numbers to the domain which they append with their own unique DC id and form a SID for object in their domain.
The role holding DC can be down for a while but if unique numbers given by RID is exhausted then domain controller can't create a new object in their domain.

Primary Domain Controller:
PDC are responsible for time synchronisation of all DC in their domain. They get time from atomic clock which is the most accurate time clock in the world.
DC in response contact PDC and assign their timings and all other computer objects get their timings from DC.
PDC also responsible for password clash checking which maintains a table of all users and the current updated password. 
where if a DC changes password for a object. Then replication for the new password change is updated immediately to the PDC. 
So if a user enters wrong password, DC check with PDC for currently updated password.
Plan to place PDC in high user process because of their password checking process.

Infrastructure master:
This role helps in cross domain references. When a group in a domain contains objects or security identifiers from other domain. Then they has to be updated and maintained correctly.
IM role holding DC checks for objects which are not in their DC. 
For that, when a cross domain objects is created, the local domain creates a Phantom record. 
The phantom record which contains DN, GUID, SID of the object helps to identify the object's path.
IM cheks aganist GC for any change in object referenced. They are by default check for every 2 days.
They can't be placed alongside GC because GC has references to all objects in the forest.
What creates the problem is when IM will not create a phantom record for cross domain references because GC contains PAS. So they will create referential integrity problems. 
To remedy this problem we can make all DC as GC or we create single domain forest.
-> When recycle bin is not enabled, there is no problem IM has a role. If recycle bin is enabled, then all DC should take care of updating cross domain reference by their own.
Then IM lost its work.



`]


export default hot(FSMO);