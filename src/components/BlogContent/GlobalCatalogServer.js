import React from 'react';
import { hot } from 'react-hot-loader/root';


const GlobalCatalogServer=[`
GC is a feature of Active directory. It stores full info of objects which reside in their domain and partial unique identifiable copy of all other objects in the forest.

what if GC not available or down?
1)UPN(universal principal name) can't resolve so login locally using cached credentials.
2)While logging in the user's access token contains group and permission info. we have to contact GC to check for universal group placement. 
3)If GC is down, then login using cached credentials.
4)GC used for microsoft exchange server, GAL uses GC. So GC near Exchange server is advisable.

Uses:
1)For search objects in forest, otherwise we need to search for an object in each domain. It creates high traffic.
2)Universal groups memberships copies are stored in the GC. Because Universal groups contains members from all Domains. So they are replicated across all. Whereas other groups are not replicated as such. However Universal groups are stored in the domain created and cross domain references are maintained by IM.
3)When trying to login using UPN,GC helps in finding DC responsible to authentication.


working:
While authentication, GC plays vital role as to check for universal group membership. It also points to DC responsible for other domain user authentication in another domain computer. So for these purposes DC contacts GC in multi domain environment. These above does not applicable for single domain environment, it logged in without contacting GC. These are also does not applicable for partial pre 2000 windows NT domains. Because Universal groups are introduced in Windows 2000 NT forest functional level.DC querys GC using port 3268



References:
https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc730749(v=ws.11)?redirectedfrom=MSDN



To read:
https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc978012(v=technet.10)?redirectedfrom=MSDN  --> LDAP and GC search`,
"hello world"]


export default hot(GlobalCatalogServer);