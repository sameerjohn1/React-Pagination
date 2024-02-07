// import React from 'react';
// import useFetch from './features/useFetch';

// const MyComponent = () => {
//   const { data, loading, error, setUrls } = useFetch([
//     'https://dummyjson.com/carts/5',
//     'https://dummyjson.com/recipes/10',
//   ]);

//   const handleButtonClick = () => {
//     // Dynamically change the URLs when the button is clicked
//     setUrls(['https://dummyjson.com/carts/5', 'https://dummyjson.com/recipes/10']);
//   };

//   // console.log(data,"data");
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1>Data from APIs:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       <button onClick={handleButtonClick}>Load other data</button>
//     </div>
//   );
// };

// export default MyComponent;

import React, { useEffect } from 'react';
import useFetch from './features/useFetch';

const MyComponent = () => {
  const apiUrl1 = 'https://dummyjson.com/carts/5';
  const apiUrl2 = 'https://dummyjson.com/recipes/10';
  const { data, loading, error } = useFetch(apiUrl1, apiUrl2);

  useEffect(() => {
    // Additional logic you may want to perform when data changes
    console.log('Data changed:', data);
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render your component using the combined data
  return (
    <div>
      <h1>Data from APIs:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;