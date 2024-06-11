import {Link} from 'react-router-dom';

function Home(){
    let users = [
        { id: 1, name: "Alice", description: "This is Alice's profile" },
        { id: 2, name: "Tom", description: "This is Tom's profile" },
        { id: 3, name: "Jim", description: "This is Jim's profile"}
    ]

    return <div>  
        <a href="/personalinfo"> Personal Info Link</a>
        <ul>
          {users.map((user) => (
            <li>

              <h1>
                Name and Id: {user.name}, {user.id}
              </h1>

              <h1>Description: {user.description}</h1>
            </li>
         ))}
        </ul>
      </div>

}

export default Home