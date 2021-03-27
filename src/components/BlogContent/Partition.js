import { hot } from 'react-hot-loader/root';



const Partition=[
       `Naming contexts aka Directory partitions:
       These partitions are used by AD for data distribution aka replication. 
       There are data used by all DC in the forest.
        While certain data are necessary for only DC in their domain. Certain data can be overwritten by other DC whereas some are allowed by only one DC.
        There are four directory partitions in AD
        Schema NC
        Domain NC
        Configuration NC
        Application NC
        
        why there are partitions needed:
        Because they can replicated separately and to define their purposes and scope of replication
        
        Schema NC(default NC) :
        Schema NC has objects of classSchema and AttributeSchema which defines what objects in Domain NC and Config NC can have.
        class defines the object to be defined and attribute defines the class attributes. 
        There is a difference between objects in schema and objects which are instances of class in the config and domain NC.
        
        Domain NC:
        Domain NC contains objects such as users,computers and builtin objects. These are replicated throughtout the domain and when needed replicated to other domain GC. 
        These hold the Group policy to replicated inside domain.
        
        `+"Configuration NC".link("http://localhost:8080/blog/configNC")+`:
        Configuration NC contains config and objects with access control, sites, lost and found config, well known security principles. These are replicated throughtout the domain.
        These are created while installing the forest and replicated. They clearly shows the topology of the forest.
        
        Application NC:
        These are used to control over the replication over for dynamic data. Dynamic data can't be replicated because they would be short l;ived then replication cycle and unncessary data for all DC in the domain.
        So Application partition are used for applications. For instance DNS zone data is not used by all DC. Before application partition are introduced they are replicated to all DC without useful.
        DNS zone data are placed under application partition which are called active directory integrated zones. Nowadays while installing two application partitions are created which are based on DNS.
        They are forestDNSZones directory partition and domainDNSZone partition.
        They have their own sub partitions which store all PAS(partial attribute Set).
        
        Partition hierarchy(Logical partition):
        Every database reside their directory partitions. They are contiguous and they are placed in a hierarchy manner. As root domain rootDSE at the top. 
        Configuration NC first object is a child of domain NC. Where schema NC object is a child of Configuration NC. Config and Schema NC are replicated to new DC when they are promoted.
        Which makes the sites and services synchronised across forest. 
        
        RootDSE:
        rootDSE reside at the top of the logical namespace. They arenot part of any namespace. Besides they provide info about the partitions and capabilities. 
        It is defined as a part of RFC for LDAPv3. They do not have any objects. They just provide info. 
        They are located in ntdsa.dll which are default location for DSA(directory system agent). Which helps in other things like other directory to access the DC.
        They contain configuration container which contains info about the various partitions location.`
]

export default hot(Partition);