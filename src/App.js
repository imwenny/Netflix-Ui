import React, { useEffect } from 'react';
import tmdb from './tmdb';


export default() => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, [] );

  return(
    <div>
      teste
    </div>
  );
}
