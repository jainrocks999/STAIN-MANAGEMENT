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
import {useNavigation, Route} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';

import {ScrollView, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';

let renderData = '';
const SupportScreen = ({route}) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {itemId, otherParam} = route.params;

  loadData = (itemId) => {
    switch (itemId) {
      case 1:
        return (
          <HTML
            html={AboutStains}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 2:
        return (
          <HTML
            html={CaseStudies}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 3:
        return (
          <HTML
            html={HowToApply}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 4:
        return (
          <HTML
            html={WhatIsPoultice}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 5:
        return (
          <HTML
            html={StainChart}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 6:
        return (
          <HTML
            html={important}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 7:
        return (
          <HTML
            html={AboutApp}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 8:
        return (
          <HTML
            html={Resources}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;
      case 9:
        return (
          <HTML
            html={Support}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
        break;

      default:
        Alert.alert('no data');
        break;
    }

    // if (itemId==1) {
    //   console.log('hey');
    //   return <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />

    // }
    // else{
    //   console.log('no');
    // }
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
          {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
          {loadData(itemId)}
          {/* <Text>otherParam: {otherParam}</Text> */}
        </ScrollView>

        <BottomTab />
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(SupportScreen);

const htmlContent = `<h2>TRAVERTINE RESTORATION</h2>
<p><br></p>
<h3>Client:</h3>
<p>Homeowners in San Diego</p>
<h3>Info:</h3>
<p>Travertine stripped, repaired, polished, and sealed</p>
<h3>PRO Partner:</h3>
<p>Set In Stone Restoration, San Diego, CA</p>
<h3>Problem:</h3>
<p>Dull, Discolored, Flaking Travertine Finish The owners of this home in Jamul, CA loved the idea of having beautiful travertine floors, but there were a few challenges to overcome along the way. During the installation process, an unqualified contractor installed the tiles improperly, resulting in lippage (or uneven tiles). In an attempt to correct the problem, this contractor ground the stone to make the floor level, but in the process, he damaged the beautiful finish. Dissatisfied with the dull, low-sheen finish, the homeowners applied a topical sealer to create a higher gloss and shine on the stone&rsquo;s surface. At first, the appearance of the floor improved, but with foot traffic and use, the coating became discolored and began flaking, leaving the appearance of this travertine in very poor condition. The homeowners decided enough was enough. They called the experts at Set In Stone Restoration, to resolve the problems once and for all. Problem: Urine and vomit contain acids which can etch polished marble. The proteins contained can also stain the stone and have a terrible odor. Solution: Travertine Stripping, Repairing, Polishing, and Sealing First, they removed the topical sealer using a stone-safe stripper. To correct the damage caused by the original installers, they honed the travertine using one-twenty, two-twenty, and four-hundred-grit diamond pads, which basically work on stone in the same way that sandpaper smooths wood. The professionals at Set In Stone Restoration filled the holes in the travertine with epoxy, stained to blend with the surrounding colors. To give the floor a natural, glass-like polish, they used a polishing compound to perform a mechanical polishing process, which achieves a high level of shine without coatings. Once the homeowners were completely satisfied with the high-gloss and clarity of their polished travertine, the stone restoration professional finished up by using a solvent-based, impregnating sealer. As you can see, the outcome is impressive. These homeowners were glad that professional restoration gave them the results they wanted. WATCH VIDEO &gt;&gt;</p>
<p><br></p>`;
const htmlContent1 = `<h2>TRAVERTINE 1 RESTORATION</h2>
<p><br></p>
<h3>Client:</h3>
<p>Homeowners in San Diego</p>
<h3>Info:</h3>
<p>Travertine stripped, repaired, polished, and sealed</p>
<h3>PRO Partner:</h3>
<p>Set In Stone Restoration, San Diego, CA</p>
<h3>Problem:</h3>
<p>Dull, Discolored, Flaking Travertine Finish The owners of this home in Jamul, CA loved the idea of having beautiful travertine floors, but there were a few challenges to overcome along the way. During the installation process, an unqualified contractor installed the tiles improperly, resulting in lippage (or uneven tiles). In an attempt to correct the problem, this contractor ground the stone to make the floor level, but in the process, he damaged the beautiful finish. Dissatisfied with the dull, low-sheen finish, the homeowners applied a topical sealer to create a higher gloss and shine on the stone&rsquo;s surface. At first, the appearance of the floor improved, but with foot traffic and use, the coating became discolored and began flaking, leaving the appearance of this travertine in very poor condition. The homeowners decided enough was enough. They called the experts at Set In Stone Restoration, to resolve the problems once and for all. Problem: Urine and vomit contain acids which can etch polished marble. The proteins contained can also stain the stone and have a terrible odor. Solution: Travertine Stripping, Repairing, Polishing, and Sealing First, they removed the topical sealer using a stone-safe stripper. To correct the damage caused by the original installers, they honed the travertine using one-twenty, two-twenty, and four-hundred-grit diamond pads, which basically work on stone in the same way that sandpaper smooths wood. The professionals at Set In Stone Restoration filled the holes in the travertine with epoxy, stained to blend with the surrounding colors. To give the floor a natural, glass-like polish, they used a polishing compound to perform a mechanical polishing process, which achieves a high level of shine without coatings. Once the homeowners were completely satisfied with the high-gloss and clarity of their polished travertine, the stone restoration professional finished up by using a solvent-based, impregnating sealer. As you can see, the outcome is impressive. These homeowners were glad that professional restoration gave them the results they wanted. WATCH VIDEO &gt;&gt;</p>
<p><br></p>`;
const htmlContent2 = `<h2>TRAVERTINE 2 RESTORATION</h2>
<p><br></p>
<h3>Client:</h3>
<p>Homeowners in San Diego</p>
<h3>Info:</h3>
<p>Travertine stripped, repaired, polished, and sealed</p>
<h3>PRO Partner:</h3>
<p>Set In Stone Restoration, San Diego, CA</p>
<h3>Problem:</h3>
<p>Dull, Discolored, Flaking Travertine Finish The owners of this home in Jamul, CA loved the idea of having beautiful travertine floors, but there were a few challenges to overcome along the way. During the installation process, an unqualified contractor installed the tiles improperly, resulting in lippage (or uneven tiles). In an attempt to correct the problem, this contractor ground the stone to make the floor level, but in the process, he damaged the beautiful finish. Dissatisfied with the dull, low-sheen finish, the homeowners applied a topical sealer to create a higher gloss and shine on the stone&rsquo;s surface. At first, the appearance of the floor improved, but with foot traffic and use, the coating became discolored and began flaking, leaving the appearance of this travertine in very poor condition. The homeowners decided enough was enough. They called the experts at Set In Stone Restoration, to resolve the problems once and for all. Problem: Urine and vomit contain acids which can etch polished marble. The proteins contained can also stain the stone and have a terrible odor. Solution: Travertine Stripping, Repairing, Polishing, and Sealing First, they removed the topical sealer using a stone-safe stripper. To correct the damage caused by the original installers, they honed the travertine using one-twenty, two-twenty, and four-hundred-grit diamond pads, which basically work on stone in the same way that sandpaper smooths wood. The professionals at Set In Stone Restoration filled the holes in the travertine with epoxy, stained to blend with the surrounding colors. To give the floor a natural, glass-like polish, they used a polishing compound to perform a mechanical polishing process, which achieves a high level of shine without coatings. Once the homeowners were completely satisfied with the high-gloss and clarity of their polished travertine, the stone restoration professional finished up by using a solvent-based, impregnating sealer. As you can see, the outcome is impressive. These homeowners were glad that professional restoration gave them the results they wanted. WATCH VIDEO &gt;&gt;</p>
<p><br></p>`;

const AboutStains = `<h2 style="text-align:center;">ABOUT STAINS</h2>
<p><br></p>
<h3>STAINS COME FROM MANY SOURCES BUT MOST ARE REMOVABLE</h3>

<p>The key to success is cleaning up any spills and treating any resulting stains as soon as you can. Understanding the source of the stain will help in determining the best treatment. Many options are available for treating stains on natural stone from creating your own poultice to using convenient ready-made poultices. Ask us for help if you need it.
<h3>We all know what a stain is…. or do we?</h3>
<p>Let’s start by saying that a stain is a discoloration. So far, so good. The fact is, however, that not all discolorations are stains. To illustrate the point, let’s take, for example, a piece of common fabric. Fabric is typically absorbent. Therefore, if we spill some liquid onto it, the material will absorb it. If it is only water, it will leave a temporary stain. In fact, once it dries the fabric will go back to its original color, but if coffee or cooking oil is spilled on it a stain will occur because the fabric will absorb the staining agent and change its color in a permanent way—unless we do something to remove the agent from the fabric. On the other hand, if bleach is spilled on that same fabric a discoloration will occur, but it can hardly be defined as a stain because it is actually a permanent damage to the dye that originally made the color of the fabric. As with the fabric example, when it comes to natural stone there are stains that are true stains and there are “stains” that are actually discolorations caused by something else. All stones are, more or less, absorbent. One may say that diamonds or gemstones are not absorbent. That’s right, but a gemstone is not actually a stone. It is actually made of one crystal of one single mineral. All other (less noble) stones are the composition of many crystals, either of the same mineral, or of different minerals bonded together. The “space” in between these molecules of minerals is mostly what determines the porosity of a stone. The porosity of stone varies greatly, and so does, of course, their absorbency. Some of them are extremely dense, therefore their porosity is minimal. What this translates into is the fact that the absorbency of such types of stone is so marginal that—by all practical intents and purposes—it can be considered irrelevant. Some other stones present a medium porosity, and others at the very end of the spectrum are extremely porous. Because of their inherent porosity, many stones will absorb liquids, and if such liquids are staining agents a true stain will occur. IS IT REALLY A STAIN? A true stain is always darker than the stained material. If it appears as a lighter color it is not a stain, but either a mark of corrosion (etching) made by an acid, or a caustic mark (bleaching) made by a strong base (alkali). In other words, a lighter color “stain” is always surface damage and has no relation whatsoever with the absorbency rate of the damaged material—stone or otherwise. There is not a single exception to this rule. A stain is a discoloration of the stone produced by a staining agent that was actually absorbed by the stone. Other “discolorations” have nothing to do with the porosity (absorbency) of the stone, but rather are a result of damage to the stone surface. All those “stains” that look like “water spots” or “water rings” are actually marks of corrosion (etches) created by some chemically active liquid (mostly—but not necessarily limited to—acids), which had a chance to come in contact with the stone. All calcite-based stones such as marble, limestone, onyx, travertine, etc., are sensitive to acids. Therefore, they will etch readily (within a few seconds). Many slates, will also etch and so will a few “granites” (those that instead of being a 100% silicate rock are mixed with a certain percentage of calcite). Now let’s discuss how to remove stains! How to remove a stain—Poulticing method Definition of a Poultice What’s a poultice? It is the combination of a very absorbent medium (it must be more absorbent than the stone) mixed with a chemical, which is to be selected in accordance with the type of stain to be removed. The concept is to re-absorb the stain out of the stone. The chemical will attack the stain inside the stone, and the absorbent agent will pull them both out together. The absorbent agent can be the same all the time, regardless of the nature of the stain to be removed, but the chemical will be different—in accordance with the nature of the staining agent—since it will have to interact with it. The absorbent part of a poultice could be (in order of preference): talcum powder (baby powder), paper towel or diatomaceous earth (the white stuff inside your swimming pool filter) for larger projects. NOTE: There are convenient poulticing kits that make the task of stain removal easier. You may want to ask your stone care contractor for some specific recommendations. As we said before, the chemical must be selected in accordance with the nature of the staining agent. There are five major classifications of stains: Organic stains (i.e. coffee, tea, coloring agents of dark sodas and other drinks, gravy, mustard, etc.) Inorganic stains (i.e. ink, color dies, dirt—water spilling over from flower or plant pots, etc.) Oily stains (i.e. any type of vegetable oil, certain mineral oils—motor oil, butter, margarine, melted animal fat, etc.) Biological stains (i.e. mildew, mold, etc.) Metal stains (i.e. rust, copper, etc.) The chemical of choice for both organic and inorganic stains is hydrogen peroxide (30/40 volumes, the clear type—available at your local beauty salon. The one from the drugstore is too weak, at 3.5 volume). Sometimes, in the case of ink stains, denatured alcohol (or rubbing alcohol) may turn out to be more effective. For oily stains, our favorite is acetone, which is available at any hardware or paint store. (Forget your nail polish remover. Some of them contain other chemicals, and others contain no acetone whatsoever.) For biological stains, one can try using regular household bleach or a mildew stain remover designated safe for stone. For metal/rust stains, our favorite is a white powder (to be dissolved in water) called Iron-out™, which can be found in any hardware store. There is also a product called RSR-2000 made by Alpha Tools (available at www.stonecarecentral.com) that is used and recommended by restoration contractors. </p>
<p>
<p><br></p>`;

const CaseStudies = `<h2 style="text-align:center;">Case Studies</h2>
<p><br></p>
<h3 style=”text-decoration:underline”>Travertine Restoration</h3>


<h3>Granite countertop cracks repaired near sink</h3>
<h3>Factory Finish Restored on Dull, Scratched Marble</h3>
<h3>Chanel Store Marble Floor Refinished</h3>
<h3>Historic Limestone Staircase Restored</h3>
<h3>Large-Scale Natural Stone Restoration Project</h3>
<p><br></p>`;

const HowToApply = `<h2 style="text-align:center;">HOW TO APPLY A POULTICE</h2>
<p><br></p>
<p>1. Identify the stain.</p>
<p>2. Clean the stained area to remove excess from the surface. </p>
<p>3. Wet the stained area with distilled water. Pre-wetting fills the pores of the stone with water, isolating the stain and accelerating the removal by the chemical. </p>
<p>4. Prepare the poultice. If a powder is to be used, pre-mix the powder and the chemical of choice into a thick paste the consistency of peanut butter. Wet it enough so that it does not run. If a paper poultice is to be used, soak the paper in the chemical. Lift the paper out of the chemical until it stops dripping. </p>
<p>5. Apply the poultice to the stain, being careful not to spill any on the un-stained areas. Apply poultice approximately one-quarter-inch thick, overlapping the stain area by about one inch. </p>
<p>6. Cover the poultice with plastic (food wrap works very well). Tape the plastic down to seal the edges. Allow the poultice to dry thoroughly. This is a very important step. The drying of the poultice is what pulls the stain from the stone into the poultice material. If the poultice is not allowed to dry, the stain may not be removed. Drying usually takes from 24 to 48 hours. </p>
<p>7. After 24 to 48 hours, remove the plastic.</p>
<p>8. Remove the poultice from the stain. Rinse with distilled water and buff dry with a soft cloth. If the stain is not removed, apply the poultice again. It may take five applications or more for difficult stains. </p>
<p>9. Some chemicals may etch the marble surface. If this occurs, apply a polishing powder and buff to restore the shine. For further assistance, contact your stone restoration professional. </p>
<p><br></p>`;

const WhatIsPoultice = `<h2 style="text-align:center;">WHAT IS A POULTICE?</h2>
<p><br></p>
<p>A poultice is an absorbent material applied to a surface to draw out a stain. It can be a powder, paper or a gel. The most common poultices in use today are powders. A number of powders are very absorbent and are ideal for stain removal. Some typical powders used in poultices are listed below: </p>
<h>• Stonecare PRO Signature Professional Stone Poultice Powder </h>
<h>• Clays and fullers earth</h>
<h>• Talc</h>
<h>• Chalk (whiting) </h>
<h>• Sepiolite (hydrous magnesium silicate)  </h>
<h>• Diatomaceous earth </h>
<h>• Methyl cellulose</h>
<h>• Flour </h>
<p>Do not use whiting or clays containing iron. When using acidic chemicals the acids will react with the iron and may cause yellowing of certain stone surfaces. It is best to purchase poultice powder materials from a reputable supplier of products for this purpose. </p>
<p>There are also pre-packaged ready to use poultices such as Dr Fred’s Innovative Solutions Stain Sponge (www.godrfred.com). </p>
Paper poultices can be quite effective on mild stains. They are easier to apply than powder poultices and are also easier to remove. Some typical paper poultices listed below: • Cotton balls • Paper towels • Gauze pads Gel poultices are usually thick chemical gels that are designed to be applied to a stain with the use of powders or papers. They work effectively with certain stains. When purchasing poultice materials, ask if they contain stain removing chemicals or if they need chemicals added. Some powder and gel poultices contain chemicals, and all you need to do is add water. Never mix additional chemicals with a poultice that contains its own chemical formulation.
<p><br></p>`;

const StainChart = `<h2 style="text-align:center;">STAIN CHART</h2>
<p><br></p>
<p>UNKNOWN STAIN </p>
<p>ADHESIVES </p>
<p>ALKALINE ETCHING </p>
<p>ALUMINUM </p>
<p>BEER </p>
<p>BIRD DROPPINGS </p>
<p>BLOOD </p>
<p>BODY FLUIDS </p>
<p>BURNS </p>
<p>CANDLE WAX </p>
<p>CANDY (NON-CHOCOLATE) </p>
<p>CARPET PADDING </p>
<p>CHOCOLATE </p>
<p>COFFEE AND TEA </p>
<p>COLAS </p>
<p>COPPER </p>
<p>EFFLORESCENCE </p>
<p>EGG </p>
<p>FATTY OILS </p>
<p>FRUIT JUICE (LIGHT COLORED) </p>
<p>FURNITURE POLISH </p>
<p><br></p>`;

const important = `<h2 style="text-align:center;">IMPORTANT</h2>

<p><br></p>
<p><br></p>
<p>• Always read the label on the chemical bottle. </p>
<p>• Always follow the directions and precautions listed on the label. </p>
<p>• Never use a chemical if you are unsure what it is or how to protect yourself. </p>
<p>• Always take the time to protect yourself and those working around you. </p>
<p>
• Always dispose of a chemical properly. Every municipality has a household hazardous waste drop-off location. For safe disposal of chemical products at work, contact your health and safety representative.</p>
<p><br></p>`;

const AboutApp = `<h2 style="text-align:center;">ABOUT THIS APP</h2>

<p><br></p>
<p>SurpHaces is a professional resource and support organization for quality surface PROS and their customers. At SurpHaces, you can find expert answers, solutions, and service providers for stone, tile, terrazzo, wood, carpet and interior textiles, polished concrete, metal, VCT, and more. The PROS in this network consist of skilled specialists in a variety of disciplines including specification, installation, repair, restoration, and maintenance. Each one is concerned with the art and science of surfaces—that is, they provide solutions that take into account both the beauty of surfaces and other important considerations, such as surface functionality, safety, preservation, and sustainability. </p>
<p>It was with help from our Chief Technical Director, author of over 30 books, 10 instructional videos, and over 100 articles on stone installation, care, and restoration in both the United States and foreign publications and journals, Fred Hueston is a world renowned industry expert that this app was created. </p>
<p>It was created to help you find answers quickly about any particular stain you may need information on immediately or to just use for reference as needed. </p>
<p><br></p>`;


const Resources = `<h2 style="text-align:center;">RESOURCES</h2>
<p><br></p>
<p><br></p>
<h3>Dr. Fred’s Innovative Solutions Professional Stain Removal Reagents</h3>

<p>Over many years as a contractor and expert, Fred Hueston refined the techniques and and ultimately created just 3 special reagents that are needed to treat virtually any kind of stain. These reagents are now available through the Dr. Fred’s Innovative Solutions product line.</p>
<p> They include: </p>
<h3>• Reagent #1 </h3>
<h>for organic stains A blend of peroxides and other reactive reagents that effectively break down organic stains. </h>
<h3>• Reagent #2 </h3>
<h>for inorganic stains A blend of solvents designed to effectively remove inorganic stains. </h>
<h3>• Reagent #3 </h3>
<h>for metal stains A blend of metal reducing reagents, formulated to treat metal stains.</h>
<p>To order: ESP Sales Reynolds Circle Business Park 434 Roberson Ln. San Jose, CA 95112 (408) 441-1407 www.espsales.net PROFESSIONAL TRAINING Interactive eLearning Course on Stain Management and other courses offered by Fred Hueston and other industry experts can be found at https://elearninginstitute.surphaces.com</p>
<p>
<p><br></p>`;

const Support = `<h2 style="text-align:center;">SUPPORT</h2>
<p><br></p>

<h3>App Technical Support</h3>
<p> ksjdfhkhzkvkbvkbkbvkjsnmsks </p>
<p> djxfgashzjxbdfjhsb </p>
<p> sdghbdhdfjzhxz </p>

<p><br></p>`;