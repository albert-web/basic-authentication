import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

const morepublic = ({history}) => {
  useEffect(
        () => {
            
                Auth.currentAuthenticatedUser()
                    .catch((e) => {
                        console.log(e);
                    history.push('/profile');
                    })
                      
            
                }       
            
        
        , []
    );

    return (
        <Container>
            <h1>
                More public info...
            </h1>
        </Container>
    );
}

export default morepublic;