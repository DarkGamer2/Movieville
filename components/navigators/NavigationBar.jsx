import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import NewReleases from '../../screens/NewReleases';
import PopularNow from '../../screens/PopularNow';
import Settings from '../../screens/Settings';
import {Icon, IconComponentProvider} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../assets/colors/colors';
export default function NavigationBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'BebasNeue-Regular',
          color: colors.slateBlack,
          marginBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'New Releases') {
            iconName = focused
              ? 'newspaper-variant'
              : 'newspaper-variant-outline';
          } else if (route.name === 'Popular Now') {
            iconName = focused
              ? 'arrow-top-right-thin-circle-outline'
              : 'arrow-top-right-thin';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          return (
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name={iconName} size={24} color="red" />
            </IconComponentProvider>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="New Releases" component={NewReleases} />
      <Tab.Screen name="Popular Now" component={PopularNow} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
