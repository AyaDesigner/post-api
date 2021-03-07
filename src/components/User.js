import { useEffect, useState } from "react";

const User = ( {authorId} ) => {

    const [postUser, setPostUser] = useState({});



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
          .then((response) => response.json())
          .then((object) => {
            setPostUser(object);
          });
      }, []);


    
    return ( <div>
        <p>{postUser.name}</p>
    </div> );
}
 
export default User;