import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header, Button } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



function MentionsLegales(props){

  console.log(props);

  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('HomeHost')} />;
  var headerCenter = <Text style={styles.title} >Mentions légales</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;



    return ( 
      <View style={styles.container}>
        <View>
            <Header
              containerStyle={{
                backgroundColor: "#131313", 
              //height: '20%', 
              alignItems: 'flex-start', 
              borderBottomWidth:0,  
              marginBottom:'5%'
            
              }}
              leftComponent={headerLeft}
              centerComponent={headerCenter}
              rightComponent={headerRight}
            />
          </View>
          <ScrollView style={styles.wrap}>
          
          
            <View style={styles.box}>

             <Text style={styles.subtitle}>DÉCLARATION DE CONFIDENTIALITÉ</Text>
             <Text style={styles.subtext}>ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS</Text>
            <Text style={styles.text}>Lorsque vous effectuez un achat sur notre boutique, dans le cadre de notre processus d’achat et de vente, nous recueillons les renseignements personnels que vous nous fournissez, tels que votre nom, votre adresse et votre adresse e-mail.</Text>

            <Text style={styles.text}>Lorsque vous naviguez sur notre boutique, nous recevons également automatiquement l’adresse de protocole Internet (adresse IP) de votre ordinateur, qui nous permet d’obtenir plus de détails au sujet du navigateur et du système d’exploitation que vous utilisez.</Text>

            <Text style={styles.text}>Marketing par e-mail (le cas échéant): Avec votre permission, nous pourrions vous envoyer des e-mails au sujet de notre boutique, de nouveaux produits et d’autres mises à jour.</Text>

            <Text style={styles.subtext}>ARTICLE 2 - CONSENTEMENT</Text>

            <Text style={styles.text}>Comment obtenez-vous mon consentement?</Text>

            <Text style={styles.text}>Lorsque vous nous fournissez vos renseignements personnels pour conclure une transaction, vérifier votre carte de crédit, passer une commande, planifier une livraison ou retourner un achat, nous présumons que vous consentez à ce que nous recueillions vos renseignements et à ce que nous les utilisions à cette fin uniquement.</Text>

            <Text style={styles.text}>Si nous vous demandons de nous fournir vos renseignements personnels pour une autre raison, à des fins de marketing par exemple, nous vous demanderons directement votre consentement explicite, ou nous vous donnerons la possibilité de refuser.</Text>

            <Text style={styles.text}>Comment puis-je retirer mon consentement?</Text>

            <Text style={styles.text}>Si après nous avoir donné votre consentement, vous changez d’avis et ne consentez plus à ce que nous puissions vous contacter, recueillir vos renseignements ou les divulguer, vous pouvez nous en aviser en nous contactant à erica.diasmatos99@gmail.com ou par courrier à: Everyone Is The DJ 56 boulevard Pereire , Paris, J, 75017, France </Text>

            <Text style={styles.subtext}>ARTICLE 3 – DIVULGATION</Text>

            <Text style={styles.text}>Nous pouvons divulguer vos renseignements personnels si la loi nous oblige à le faire ou si vous violez nos Conditions Générales de Vente et d’Utilisation.</Text>

            <Text style={styles.subtext}>ARTICLE 4 – SHOPIFY</Text>

            <Text style={styles.text}>Notre boutique est hébergée sur Shopify Inc. Ils nous fournissent la plate-forme e-commerce en ligne qui nous permet de vous vendre nos services et produits.</Text>

            <Text style={styles.text}>Vos données sont stockées dans le système de stockage de données et les bases de données de Shopify, et dans l’application générale de Shopify. Vos données sont conservées sur un serveur sécurisé protégé par un pare-feu.</Text>
            <Text style={styles.text}>Paiement:</Text>

            <Text style={styles.text}>Si vous réalisez votre achat par le biais d’une passerelle de paiement direct, dans ce cas Shopify stockera vos renseignements de carte de crédit. Ces renseignements sont chiffrés conformément à la norme de sécurité des données établie par l’industrie des cartes de paiement (norme PCI-DSS). Les renseignements relatifs à votre transaction d’achat sont conservés aussi longtemps que nécessaire pour finaliser votre commande. Une fois votre commande finalisée, les renseignements relatifs à la transaction d’achat sont supprimés.</Text>

            <Text style={styles.text}>Toutes les passerelles de paiement direct respectent la norme PCI-DSS, gérée par le conseil des normes de sécurité PCI, qui résulte de l’effort conjoint d’entreprises telles que Visa, MasterCard, American Express et Discover.</Text>

            <Text style={styles.text}>Les exigences de la norme PCI-DSS permettent d’assurer le traitement sécurisé des données de cartes de crédit par notre boutique et par ses prestataires de services.</Text>

            <Text style={styles.text}>Pour plus d’informations, veuillez consulter les Conditions d’Utilisation de Shopify ici ou la Politique de Confidentialité ici.</Text>

            <Text style={styles.subtext}>ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS</Text>

            <Text style={styles.text}>De manière générale, les fournisseurs tiers que nous utilisons vont uniquement recueillir, utiliser et divulguer vos renseignements dans la mesure du nécessaire pour pouvoir réaliser les services qu’ils nous fournissent.</Text>

            <Text style={styles.text}>Cependant, certains tiers fournisseurs de services, comme les passerelles de paiement et autres processeurs de transactions de paiement, possèdent leurs propres politiques de confidentialité quant aux renseignements que nous sommes tenus de leur fournir pour vos transactions d’achat.</Text>

            <Text style={styles.text}>En ce qui concerne ces fournisseurs, nous vous recommandons de lire attentivement leurs politiques de confidentialité pour que vous puissiez comprendre la manière dont ils traiteront vos renseignements personnels.</Text>

            <Text style={styles.text}>Il ne faut pas oublier que certains fournisseurs peuvent être situés ou avoir des installations situées dans une juridiction différente de la vôtre ou de la nôtre. Donc si vous décidez de poursuivre une transaction qui requiert les services d’un fournisseur tiers, vos renseignements pourraient alors être régis par les lois de la juridiction dans laquelle ce fournisseur se situe ou celles de la juridiction dans laquelle ses installations sont situées.</Text>

            <Text style={styles.text}>À titre d’exemple, si vous êtes situé au Canada et que votre transaction est traitée par une passerelle de paiement située aux États-Unis, les renseignements vous appartenant qui ont été utilisés pour conclure la transaction pourraient être divulgués en vertu de la législation des États-Unis, y compris le Patriot Act.
            </Text>

            <Text style={styles.text}>Une fois que vous quittez le site de notre boutique ou que vous êtes redirigé vers le site web ou l’application d’un tiers, vous n’êtes plus régi par la présente Politique de Confidentialité ni par les Conditions Générales de Vente et d’Utilisation de notre site web.</Text>

            <Text style={styles.subtext}>Liens</Text>

            <Text style={styles.text}>Vous pourriez être amené à quitter notre site web en cliquant sur certains liens présents sur notre site. Nous n’assumons aucune responsabilité quant aux pratiques de confidentialité exercées par ces autres sites et vous recommandons de lire attentivement leurs politiques de confidentialité.</Text>

            <Text style={styles.subtext}>ARTICLE 6 – SÉCURITÉ</Text>

            <Text style={styles.text}>Pour protéger vos données personnelles, nous prenons des précautions raisonnables et suivons les meilleures pratiques de l’industrie pour nous assurer qu’elles ne soient pas perdues, détournées, consultées, divulguées, modifiées ou détruites de manière inappropriée.</Text>

            <Text style={styles.text}>Si vous nous fournissez vos informations de carte de crédit, elles seront chiffrées par le biais de l’utilisation du protocole de sécurisation SSL et conservées avec un chiffrement de type AES-256. Bien qu’aucune méthode de transmission sur Internet ou de stockage électronique ne soit sûre à 100 %, nous suivons toutes les exigences de la norme PCI-DSS et mettons en œuvre des normes supplémentaires généralement reconnues par l’industrie.
            FICHIERS TÉMOINS (COOKIES)</Text>

            <Text style={styles.text}>Voici une liste de fichiers témoins que nous utilisons. Nous les avons énumérés ici pour que vous ayez la possibilité de choisir si vous souhaitez les autoriser ou non.</Text>

            <Text style={styles.text}>_session_id, identificateur unique de session, permet à Shopify de stocker les informations relatives à votre session (référent, page de renvoi, etc.).
            </Text>

            <Text style={styles.text}>cart, identificateur unique, persiste pendant 2 semaines, stocke l’information relative à votre panier d’achat.</Text>

            <Text style={styles.text}>_secure_session_id, identificateur unique de session</Text>

            <Text style={styles.text}>storefront_digest, identificateur unique, indéfini si la boutique possède un mot de passe, il est utilisé pour savoir si le visiteur actuel a accès.
            </Text>

            <Text style={styles.subtext}>ARTICLE 7 – ÂGE DE CONSENTEMENT</Text>

            <Text style={styles.text}>En utilisant ce site, vous déclarez que vous avez au moins l’âge de la majorité dans votre État ou province de résidence, et que vous nous avez donné votre consentement pour permettre à toute personne d’âge mineur à votre charge d’utiliser ce site web.</Text>

            <Text style={styles.subtext}>ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ</Text>

            <Text style={styles.text}>Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment, donc veuillez s’il vous plait la consulter fréquemment. Les changements et les clarifications prendront effet immédiatement après leur publication sur le site web. Si nous apportons des changements au contenu de cette politique, nous vous aviserons ici qu’elle a été mise à jour, pour que vous sachiez quels renseignements nous recueillons, la manière dont nous les utilisons, et dans quelles circonstances nous les divulguons, s’il y a lieu de le faire.</Text>

            <Text style={styles.text}>Si notre boutique fait l’objet d’une acquisition par ou d’une fusion avec une autre entreprise, vos renseignements pourraient être transférés aux nouveaux propriétaires pour que nous puissions continuer à vous vendre des produits.</Text>

            <Text style={styles.subtext}>QUESTIONS ET COORDONNÉES</Text>

            <Text style={styles.text}>Si vous souhaitez: accéder à, corriger, modifier ou supprimer toute information personnelle que nous avons à votre sujet, déposer une plainte, ou si vous souhaitez simplement avoir plus d’informations, contactez notre agent responsable des normes de confidentialité à erica.diasmatos99@gmail.com ou par courrier à Everyone Is The DJ
            </Text>

            <Text style={styles.text}>[56 boulevard Pereire , Paris, J, 75017, France]</Text>
            </View>

          </ScrollView>

        </View>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#131313',
      
    },

    wrap: {
      flexDirection: 'column',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',
      borderTopWidth:1,
      borderTopColor:"#fff",
     
    },
    
      title: {
        color: '#fff',
        fontSize: 24,
        fontFamily:'Staatliches'
      },
  
      subtitle: {
        color: '#fff',
        fontSize: 30,
        fontFamily:'Staatliches',
        textAlign: 'left',
        
      },
      subtext: {
        color: '#fff',
        fontSize: 20,
        fontFamily:'Staatliches',
        textAlign: 'left',
        marginTop: '15%',
        marginBottom:'3%'
        
      },
     text: {
        color: '#fff',
        fontSize: 20,
        fontFamily:'Roboto-Regular',
        textAlign: 'left',
        marginBottom:'2%',
        marginTop:'2%',
        
      },
      
      box: {
       paddingLeft: '1%',
       paddingRight: '1%',
      }
    
  });

  export default MentionsLegales;