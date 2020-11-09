import React, { 
    useState
    , useEffect 
} from 'react';
import { 
    HashRouter
    , Switch
    , Route 
} from 'react-router-dom';

import Nav from './Nav';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';

const Router = () => {
  
    const [current, setCurrent] = useState('home');

    useEffect(
        () => {
            setRoute()
            window.addEventListener(
                'hashchange'
                , setRoute
            );
            return () =>  window.removeEventListener(
                'hashchange'
                , setRoute
            )
        }
        , []
    );
    const setRoute = () => {
        // Extract the curent URL from the global window
        // object, if it exists, it may be null !
        //
        const location = window.location.href.split('/');
        const pathname = location[location.length - 1];

        //
        // Set the curent state to the path if it exists
        // otherwise, use the default 'home' route ...
        //
        setCurrent(pathname ? pathname : 'home');
    }
    return (
        <HashRouter>
            <Nav current={current} />
            <Switch>
                <Route 
                    exact path="/" 
                    component={Public}
                />

                <Route 
                    exact 
                    path="/protected" 
                    component={Protected} 
                />

                <Route exact 
                    path="/profile" 
                    component={Profile}
                />

                <Route 
                    component={Public}
                />
            </Switch>
        </HashRouter>
    );
}

export default Router;