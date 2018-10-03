import { DrawerNavigator, createDrawerNavigator } from "react-navigation";

import SideMenu from "./components/sideMenu";
import Home from "./views/Home/";
import Hymn from "./views/Hymn/";

const Routes = createDrawerNavigator({
	  Home: {
			screen: Home
	  },
	  Hymn: {
			screen: Hymn
	  }
	},
	{
	  contentComponent: SideMenu,
	  drawerWidth: 300,
	  initialRouteName: 'Home'
  })
  
  export default Routes;