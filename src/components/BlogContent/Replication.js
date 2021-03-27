import { hot } from "react-hot-loader/root"



const Replication = [`
Replication:
            There are number of DC available in a domain. While data changes can be made in any DC. But they should be synchronised in all DC. The data changed maybe depend on the domain functionality or forest functionality.
So there should be a way to communicate and synchronise changes in the domain and forest.

Connection object:
Connection objects are created by KCC automatically in a server object as a child of NTDS file.

Sites:
Site are used to represent physical structure or topology of an organization. Sites differ from domain where domain represent logical structure of an organization.
Sites are group of computers connected by a high speed network. All computers in a site usually reside in the same building. 
Clients connected to the sites are dynamically allocated based on their ip address and subnet mask(subnet). It differs for domain controllers which are assigned manually .

Subnets:
Sites are created on top of subnets because they represent the physcial connection. They can be used by computers to find the DC which are in the sites.
Each subnet objects has a siteAttribute which maintains where they are linked. When new DC is added, then the DC assign to the site automatically based on their ip address which are linked to a site.
When a subnet spans across multiple sites, then catchall subnets.

Intrasite replication:
Replication within site happens is called intrasite replication. It is assumed there is good connectivity between DC in site for replication.
Usually there is two connections for an DC and there is an rule there should be less than three hops between DC change made and any DC in the site.
So there is a limit of 7 DC in a site with ring topology. when 8th DC is added to the domain short links between them is added. Full mesh topology is not advisable because it creates high traffic.
There is a 15 seconds delay when changes are made in a DC. Change notification is displayed and pulled from the recipient DC.
scheduled replication is not necessary as these are high speed and less delay. Scheduled attribute of connection object specifies the timings for scheduled replication.
Connection objects are stored in NTDS settings in container in configuration partition.
KCC automatically creates site topology and manages them when DC are added, removed and changed.
Time limit for replication is 15 seconds, because to make change.

Intersite replication:
These are usually scheduled replication. Because in these change notification is not there automatically and can be created manually. 
We should create site links for the inter domains because we know about the WAN links in our network.
Site links should be created manually. Upon site links ISTG automatically creates connection object and site link bridges. 
Site link bridges reduce complexity by transitivity. When site A and B are connected and B-C are connected, then A-C site link bridge is created automatically in not full routed network. 
Schedules timings of sites should match for replication to be done.SMTP does not follow scheduled timings. 
Replication happens in a less cost network, which the costs are provided manually while creating sites links.
Bridgehead servers are designated automatically by KCC. It is advised to allow automatically because when created manually, they cannot choose another DC when BH failure.
When application and GC partition are hosted only in certain DC. Then they create their own connection object between them.
Usually, the shortest time period for replication check for intersite is 15 minutes. But these can be reduced as less as 15 seconds when notification is enabled.

DFS VS FRS:
FRS doesn't keep track of changes and replicates as a whole. While DFS have RDC which keep tracks changes and replicates what need to be. Meanwhile DFS also has high compression rate than FRS.

KCC:
knowledge consistency checker helps in creating, maintaing and updating the topology for replication. It automatically creates connection objects for intrasite replication and maintains three hop rule.
It also choose BH servers and maintains site link bridge in intersite replication. KCC uses DSA which have permission to modify NTDS file. 
KCC changes and modifies automatically created objects. while manually created objects are not modified by KCC. KCC takes help from site links to creates intersite replication topology.
When KCC modifies and creates topology activities, the DC on which it is performed reaches 100% CPU level. So DC should be choosed based on that. 
KCC runs on all domain controller and they do not speak with each other and creates replication topology based on their info which are given to them by their configuration partition.
They speak with each other when there is error in the config and results in topology. They create their own topology.

Catch All subnets:
Some organization have single subnet for all over organization even for remote offices. Then while creating sites a single subnet will be allocated for all sites.
Because of these while computer trying to authenticate, they can't find nearest DC. 
So to solve this, an aggregation of subnets are allocated for a site and which have high prefix are which matches them. So they are preferred over others.

Replication Transport:
DC primarily uses RPC over IP for replication which are synchronous. An other option is using SMTP for replication which are asynchronous.
SMTP can't be used for intrasite replication. Usually, intersite replication is compressed and replicated. But it implies some bottleneck on DC performance for compression.
If high bandiwidth is available then compression is not needed. Intrasite replication by default are not compressed.


-> Pre 2000 DC used to replicate fully when a change is made in a group or object. But In and after 2003 DC, linked value replication allows to replicate what was changed only.
when DC are upgraded from 2000 to 2003, pre 2003 made groups and objects still follow whole valued replication, but deleting all attributes or members and then adding or totally deleting and creating new objects, groups solve this.
-> Replication for RODC are unidirectional from writable DC to RODC. 

`+ "CatchAllSubnet".link("https://docs.microsoft.com/en-us/previous-versions/technet-magazine/dd797576(v=msdn.10)?redirectedfrom=MSDN") + `

` + "Linked Value ".link("https://social.technet.microsoft.com/wiki/contents/articles/32132.active-directory-allow-linked-multi-valued-attributes-to-use-lvr.aspx")+`

`]


export default hot(Replication);