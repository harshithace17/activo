import { hot } from 'react-hot-loader/root';

import GlobalCatalogServer from './BlogContent/GlobalCatalogServer';
import Partition from './BlogContent/Partition';
import ConfigNC from './BlogContent/ConfigNC';
import Replication from './BlogContent/Replication';
import FSMO from './BlogContent/FSMO';

const Contents=[
    {
        "GC":GlobalCatalogServer[0],
        "partitions":Partition[0],
        "ConfigNC":ConfigNC[0],
        "Replication":Replication[0],
        "FSMO":FSMO[0],
        
    }]


export default hot(Contents);