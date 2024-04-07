// "use client";

// import React, { useState } from 'react';

// const Donate: React.FC = () => {
//   const [location, setLocation] = useState('');
//   const [searchResults, setSearchResults] = useState<string[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setLocation(event.target.value);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(`textsearch/json?query=food+bank+tempe&key=AIzaSyB6p47Gmzx-LGcoMCBjISxYqi42871sznA`);
//       const data = await response.json();

//       if (data.status === 'ZERO_RESULTS') {
//         setError('No food banks found in this location.');
//         setSearchResults([]);
//       } else if (data.status === 'OK') {
//         const links = data.results.map((result: any) => result.name + ": " + result.formatted_address);
//         setSearchResults(links);
//         setError(null);
//       } else {
//         setError('Error fetching data. Please try again later.');
//       }
//     } catch (error) {
//       setError('Error fetching data. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter location" />
//         <button type="submit">Search</button>
//       </form>
//       {error && <p>{error}</p>}
//       <ul>
//         {searchResults.map((link, index) => (
//           <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Donate;
