/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './Home';
import Home2 from './Home2';
import PastTrips from './PastTrips';
import DestinationList from './DestinationList';
import DestinationPage from './DestinationPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DestinationPage);
