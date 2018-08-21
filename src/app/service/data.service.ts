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

export class BroadcasterModalService {

  private _broadcaster = new BehaviorSubject(false);
  update$ = this._broadcaster.asObservable();

  sendModalUpdate(state) {
    this._broadcaster.next(state);
  }
}

export const store = new DataStore();
