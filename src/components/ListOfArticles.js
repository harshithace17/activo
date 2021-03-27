import { hot } from 'react-hot-loader/root';

import Contents from './Contents';

const ListOfArticles=
    [
        {'title':'GlobalCatalogServer','content':Contents[0].GC,'path':'GlobalCatalogServer'},
        {'title':'partitions','content':Contents[0].partitions,'path':'partitions'},
        {'title':'ConfigNC','content':Contents[0].ConfigNC,'path':'ConfigNC'},
        {'title':'Replication','content':Contents[0].Replication,'path':'Replication'},
        {'title':'FSMO','content':Contents[0].FSMO,'path':'FSMO'},
        
    ];

export default hot(ListOfArticles);