import dispatcher from "../appDispatcher";
import * as collectionApi from "../api/collectionApi";
import actionTypes from "./actionTypes";

export function saveCollection(collection) {
  return collectionApi.saveCollection(collection).then(savedCollection => {
    //Hey Dispatcher, go tell all the stores that a collectionwas just created.
    dispatcher.dispatch({
        actionType: actionTypes.CRERATE_COLLECTION,
        collection: savedCollection
    });
  })
};
