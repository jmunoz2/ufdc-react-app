import {EventEmitter} from "events";
import Dispatcher from "./appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _collections = [];

class CollectionStore  extends EventEmitter{
    // This will allow React componnents to subscribe to our store so they are notified when changes occur.
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback); 
    }

    //This will allow React componnents to unsubscribe from store.
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    //This will emit the change event.
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCollections() {
        return _collections;
    }

    getCollectionBySlug(slug) {
        return _collections.find(collection => collection.slug === slug);
    }
}

const store = new CollectionStore();

//This function will be called anytime an action is dispatched.
//Every store is notified of every action.
Dispatcher.register(action => {
  switch(action.actionType) {
      case actionTypes.CREATE_COLLECTION:
          _collections.push(action.collection);
          store.emitChange(); //Anytime the store changes, we need to call emitChange.
          break;
      default:
          //Nothing to do here.
  }
});

export default store;