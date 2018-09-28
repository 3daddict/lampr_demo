import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {

    // formatPostData(obj){
    //     const dataToSend = new URLSearchParams();
    //     //loop through the object and destructure it
    //     for(let [k, v] of Object.entries(obj)){
    //         dataToSend.append(k, v);
    //     }
    //     return dataToSend;
    // }

    async componentDidMount(){
        
        const user = {
            name: 'Jane',
            email: 'jane@gmail.com',
            age: 25
        };

        const resp = await axios.post('/api/index.php', user);

        console.log('Server Response: ', resp);
    }


    render() {
        return <h1>API Test Component</h1>
    }
}

export default Test;