import { Routes } from '@angular/router';

import { ChooseComponent }    from './chooseAnswer/choose.component';
import { WriteComponent }    from './writing/write.component';
import { RacComponent }    from './completeSentence/rac.component';

export const testRoutes: Routes = [
  { path: 'chooseAns', component: ChooseComponent },
  { path: 'readAndWrite', component: RacComponent },
  { path: 'complete', component: WriteComponent }
];