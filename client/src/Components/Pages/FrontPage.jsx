import Header from "../Header/Header";
import ScrollBar from "../Scroll-Bar/ScrollBar";
import Title from "../Title/Title";
import Sorting from "../Sorting/Sorting";
import Home from "../Container/Home";

function FrontPage() {
  return (
    <div>
      <Header />
      <ScrollBar />
      <Title />
      <Sorting />
      <Home />
    </div>
  );
}

export default FrontPage;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:4000/user")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="App">
//       <h1>Users List</h1>

//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <img src={user.image_url} alt="ok" />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// }

// export default App;
