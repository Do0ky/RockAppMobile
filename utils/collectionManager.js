// Custom hook (not a React component) to manage the rock collection state
// It contains logic that's why its name is not capitalized
import { useState } from 'react';

export default function useCollectionManager() {
  const [collection, setCollection] = useState([]);

  const addToCollection = (rock) => {
    setCollection( (prev) => [...prev, rock] );
  };

  const removeFromCollection = (rock) => {
    setCollection( (prev) => prev.filter((r) => r.id !== rock.id) );
  };

  const isInCollection = (rock) => {
    return collection.some( (r) => r.id === rock.id );
  };

  return {
    collection,
    addToCollection,
    removeFromCollection,
    isInCollection,
  };
}