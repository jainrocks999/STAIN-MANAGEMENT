import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import { ScrollView } from 'react-native-gesture-handler';

const AboutStain = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        onPress={() => {
          Alert.alert('hey');
        }}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
             <ScrollView style={{flex:1,width:'85%'}}
          contentContainerStyle={{alignItems:'center'}}
          >
        <View style={styles.titleView}>
          <Text style={styles.title}>ABOUT STAIN</Text>
        </View>

        <View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
              STAINS COME FROM MANY SOURCES BUT MOST ARE REMOVABLE{' '}
            </Text>
          </View>

          <View style={styles.subHeadingView}>
            <Text style={styles.subHeading}>
The key to success is cleaning up any spills and treating any resulting
              stains as soon as you can. Understanding the source of the stain
              will help in determining the best treatment. Many options are
              available for treating stains on natural stone from creating your
              own poultice to using convenient ready-made poultices. Ask us for
              help if you need it. 
              </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
              We all know what a stain is…. or do we? 
              </Text>
          </View>
              <View style={styles.subHeadingView}>
            <Text style={styles.subHeading}>
              Let’s
              start by saying that a stain is a discoloration. So far, so good.
              The fact is, however, that not all discolorations are stains. To
              illustrate the point, let’s take, for example, a piece of common
              fabric. Fabric is typically absorbent. Therefore, if we spill some
              liquid onto it, the material will absorb it. If it is only water,
              it will leave a temporary stain. In fact, once it dries the fabric
              will go back to its original color, but if coffee or cooking oil
              is spilled on it a stain will occur because the fabric will absorb
              the staining agent and change its color in a permanent way—unless
              we do something to remove the agent from the fabric. On the other
              hand, if bleach is spilled on that same fabric a discoloration
              will occur, but it can hardly be defined as a stain because it is
              actually a permanent damage to the dye that originally made the
              color of the fabric. As with the fabric example, when it comes to
              natural stone there are stains that are true stains and there are
              “stains” that are actually discolorations caused by something
              else. All stones are, more or less, absorbent. One may say that
              diamonds or gemstones are not absorbent. That’s right, but a
              gemstone is not actually a stone. It is actually made of one
              crystal of one single mineral. All other (less noble) stones are
              the composition of many crystals, either of the same mineral, or
              of different minerals bonded together. The “space” in between
              these molecules of minerals is mostly what determines the porosity
              of a stone. The porosity of stone varies greatly, and so does, of
              course, their absorbency. Some of them are extremely dense,
              therefore their porosity is minimal. What this translates into is
              the fact that the absorbency of such types of stone is so marginal
              that—by all practical intents and purposes—it can be considered
              irrelevant. Some other stones present a medium porosity, and
              others at the very end of the spectrum are extremely porous.
              Because of their inherent porosity, many stones will absorb
              liquids, and if such liquids are staining agents a true stain will
              occur. IS IT REALLY A STAIN? A true stain is always darker than
              the stained material. If it appears as a lighter color it is not a
              stain, but either a mark of corrosion (etching) made by an acid,
              or a caustic mark (bleaching) made by a strong base (alkali). In
              other words, a lighter color “stain” is always surface damage and
              has no relation whatsoever with the absorbency rate of the damaged
              material—stone or otherwise. There is not a single exception to
              this rule. A stain is a discoloration of the stone produced by a
              staining agent that was actually absorbed by the stone. Other
              “discolorations” have nothing to do with the porosity (absorbency)
              of the stone, but rather are a result of damage to the stone
              surface. All those “stains” that look like “water spots” or “water
              rings” are actually marks of corrosion (etches) created by some
              chemically active liquid (mostly—but not necessarily limited
              to—acids), which had a chance to come in contact with the stone.
              All calcite-based stones such as marble, limestone, onyx,
              travertine, etc., are sensitive to acids. Therefore, they will
              etch readily (within a few seconds). Many slates, will also etch
              and so will a few “granites” (those that instead of being a 100%
              silicate rock are mixed with a certain percentage of calcite). Now
              let’s discuss how to remove stains! How to remove a
              stain—Poulticing method Definition of a Poultice What’s a
              poultice? It is the combination of a very absorbent medium (it
              must be more absorbent than the stone) mixed with a chemical,
              which is to be selected in accordance with the type of stain to be
              removed. The concept is to re-absorb the stain out of the stone.
              The chemical will attack the stain inside the stone, and the
              absorbent agent will pull them both out together. The absorbent
              agent can be the same all the time, regardless of the nature of
              the stain to be removed, but the chemical will be different—in
              accordance with the nature of the staining agent—since it will
              have to interact with it. The absorbent part of a poultice could
              be (in order of preference): talcum powder (baby powder), paper
              towel or diatomaceous earth (the white stuff inside your swimming
              pool filter) for larger projects. NOTE: There are convenient
              poulticing kits that make the task of stain removal easier. You
              may want to ask your stone care contractor for some specific
              recommendations. As we said before, the chemical must be selected
              in accordance with the nature of the staining agent. There are
              five major classifications of stains: Organic stains (i.e. coffee,
              tea, coloring agents of dark sodas and other drinks, gravy,
              mustard, etc.) Inorganic stains (i.e. ink, color dies, dirt—water
              spilling over from flower or plant pots, etc.) Oily stains (i.e.
              any type of vegetable oil, certain mineral oils—motor oil, butter,
              margarine, melted animal fat, etc.) Biological stains (i.e.
              mildew, mold, etc.) Metal stains (i.e. rust, copper, etc.) The
              chemical of choice for both organic and inorganic stains is
              hydrogen peroxide (30/40 volumes, the clear type—available at your
              local beauty salon. The one from the drugstore is too weak, at 3.5
              volume). Sometimes, in the case of ink stains, denatured alcohol
              (or rubbing alcohol) may turn out to be more effective. For oily
              stains, our favorite is acetone, which is available at any
              hardware or paint store. (Forget your nail polish remover. Some of
              them contain other chemicals, and others contain no acetone
              whatsoever.) For biological stains, one can try using regular
              household bleach or a mildew stain remover designated safe for
              stone. For metal/rust stains, our favorite is a white powder (to
              be dissolved in water) called Iron-out™, which can be found in any
              hardware store. There is also a product called RSR-2000 made by
              Alpha Tools (available at www.stonecarecentral.com) that is used
              and recommended by restoration contractors.
            </Text>
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(AboutStain);
