import { useParams } from 'react-router';

function Detail(){
    let params = useParams()
    // let userInfo;

    // let users = [
    //     { id: "1", name: "Alice", description: "This is Alice's profile" },
    //     { id: "2", name: "Tom", description: "This is Tom's profile" },
    //     { id: "3", name: "Jim", description: "This is Jim's profile"}
    // ]

    // for(let user of users){
    //     if(user.id == params.id){
    //         userInfo = user
    //     }
    // }

    return <h1>Param1: {params.test}, Param2: {params.cool}, Param3: {params.beans} </h1>
    //<div>
    //     <h1>
    //       Name and Id: {userInfo.name}, {userInfo.id}
    //     </h1>

    //     <h1>Description: {userInfo.description}</h1>
    // </div>
    
}

export default Detail