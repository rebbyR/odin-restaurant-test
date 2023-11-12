console.log('working!');

import createInitialContent, { createNavigationTabs } from "./initial-load";
import { addNavigationFunctions } from "./navigation-tabs";
import { refreshPage } from "./navigation-tabs";
import './styles.css';

createNavigationTabs();
createInitialContent();
addNavigationFunctions();