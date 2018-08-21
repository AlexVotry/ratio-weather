import * as _ from 'lodash';
import { Subject, Observable, Observer, BehaviorSubject } from 'rxjs';

class DataStore {

  private location: {};
  private locationSubject = new BehaviorSubject({city: 'Seattle', state: 'WA'});
  public location$  = this.locationSubject.asObservable();

  updatelocation(location: {}) {
    console.log('broadcast: ', location);
    this.location = _.cloneDeep(location);
    this.locationSubject.next(_.cloneDeep(this.location))
  }

}

export const store = new DataStore();
