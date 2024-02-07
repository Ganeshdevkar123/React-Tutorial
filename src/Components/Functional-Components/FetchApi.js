import React, {useEffect, useState} from "react";

const FetchApi = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  // const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => response.json())
  //     .then((json) => setPhotos(json))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  return ((
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <table border={1}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </table>
        </>
      )}


        <>
          <h1>Todos</h1>
          <table border={1}>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </table>
        </>

{/* {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Todos</h1>
          <table border={1}>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>IMG</th>
            </tr>
            {photos.map((photo) => (
              <tr key={photo.id}>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td><img src={photo.url}/></td>
              </tr>
            ))}
          </table>
        </>
      )} */}
    </div>
   ));
};

export default FetchApi;