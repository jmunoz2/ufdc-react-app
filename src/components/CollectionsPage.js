import React, { useState, useEffect } from "react";
import { getCollections } from "../api/collectionApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import CollectionsList from "./CollectionsList";
import {Link} from "react-router-dom";

function CollectionsPage() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getCollections().then((_collections) => setCollections(_collections));
  }, []);

  let _slug = "add-collection";

  return (
    <section className="main-section">
      <SubheaderSearchSection />
      <h2>Collections</h2>
      <Link className="btn btn-info" to={"/collection/" + _slug} >
        Add Collection
      </Link>
      <CollectionsList collections={collections} />
    </section>
  );
}

export default CollectionsPage;
