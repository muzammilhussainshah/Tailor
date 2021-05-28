import SplashScreen from "../screens/SplashScreen/index";
import WalkThrough from "../screens/WalkThrough/index";
import TutorialFront from "../screens/TutorialFront/index";
import TutorialBack from "../screens/TutorialBack/index";
import TutorialRight from "../screens/TutorialRight/index";
import CustomizeScreen from "../screens/CustomizeScreen/index";
import MaterialScreen from "../screens/MaterialScreen/index";
import ClothSelection from "../screens/ClothSelection/index";
import CollarSelection from "../screens/CollarSelection/index";
import CuffSelection from "../screens/CuffSelection/index";
import ShirtLengthSelection from "../screens/ShirtLengthSelection/index";
import MonogramSelection from "../screens/MonogramSelection/index";
import AdditionalScreen from "../screens/AdditionalScreen/index";
import ChooseShirtFit from "../screens/ChooseShirtFit/index";
import FasionReady from "../screens/FasionReady/index";
import React,
{
  useEffect,
  useState
} from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux'

const Route = ({ _login }) => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>

        <Scene
          key='SplashScreen'
          component={SplashScreen}
          hideNavBar={true}

        />
        <Scene
          key='WalkThrough'
          component={WalkThrough}
          hideNavBar={true}

        />
        <Scene
          key='TutorialFront'
          component={TutorialFront}
          hideNavBar={true}
        />
        <Scene
          key='TutorialBack'
          component={TutorialBack}
          hideNavBar={true}
        />
        <Scene
          key='TutorialRight'
          component={TutorialRight}
          hideNavBar={true}
        />
        <Scene
          key='CustomizeScreen'
          component={CustomizeScreen}
          hideNavBar={true}
        />
        <Scene
          key='MaterialScreen'
          component={MaterialScreen}
          hideNavBar={true}
        />
        <Scene
          key='ClothSelection'
          component={ClothSelection}
          hideNavBar={true}
        />
        <Scene
          key='CollarSelection'
          component={CollarSelection}
          hideNavBar={true}
        />
        <Scene
          key='CuffSelection'
          component={CuffSelection}
          hideNavBar={true}
        />
        <Scene
          key='ShirtLengthSelection'
          component={ShirtLengthSelection}
          hideNavBar={true}
        />
        <Scene
          key='MonogramSelection'
          component={MonogramSelection}
          hideNavBar={true}
        />
        <Scene
          key='AdditionalScreen'
          component={AdditionalScreen}
          // initial
          hideNavBar={true}
        />
        <Scene
          key='ChooseShirtFit'
          component={ChooseShirtFit}
          hideNavBar={true}
        />
        <Scene
          key='FasionReady'
          component={FasionReady}
          hideNavBar={true}
        />

      </Scene>
    </Router>
  );
}

export default (Route);
