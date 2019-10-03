import {creatAppContainer, creactSwitchNavigator} from 'react-navigatio'

import Login from './pages/Login'
import List from './pages List'
import Book from './pages/Book'

const Routes = creatAppContainer(

    creactSwitchNavigator({
        Login,
        List,
        Book


    })// fim creactSwitchNavigator
);

export default Routes;