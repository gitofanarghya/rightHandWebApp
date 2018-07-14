import React, {Component} from 'react'

class User extends Component {
    state = {
        User: 'none'
    };

    componentDidMount() {
        let url = "http://rhserverpi.localtunnel.me/users/get"
        let data = {
            mode: "no-cors", // no-cors, cors, *same-origin
            headers: {
                "Authorization": sessionStorage.getItem('accessToken')
            }
        }
        fetch(url, data)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error);            
        })
            
    }

    render() {
        return (
            <div>User</div>
        )
    }
        
    
}

export default User