import React from "react"
import Footer from "../Footer"

import { Link } from "react-router-dom";
import { IoIosArrowBack as BackArrow } from "react-icons/io";

const url = "www.lanbenagel.space";

const list1 = [
  "aviser immédiatement " + url + " de toute utilisation frauduleuse de votre compte ou de toute autre violation de sécurité",
  "vous assurer que vous quittez votre compte à la fin de chaque session d’utilisation."
]

const list2 = [
  "diffamer, abuser, harceler, traquer, menacer ou violer les droits individuels",  
  "publier, afficher, télécharger, distribuer ou disséminer tout sujet inapproprié, vulgaire, diffamatoire, obscène, indécent ou illégal, nom, élément ou information personnels",
  "télécharger des fichiers qui contiennent des logiciels ou autres éléments protégés par les lois de propriété intellectuelle, sauf si vous possédez ou contrôlez les droits afférents ou ayez reçu tous les consentements nécessaires pour cela",
  "télécharger ou distribuer des fichiers qui contiennent des virus, des fichiers corrompus ou tout autre logiciel ou programme similaire pouvant endommager le fonctionnement du site Web ou un ordinateur",
  "mener des enquêtes ou à terme, des concours, des programmes effets « boule de neige»", 
  "télécharger un fichier publié par un autre utilisateur d’un service que vous savez, ou devriez raisonnablement savoir, ne peut pas être légalement distribué de cette manière",
  "falsifier ou supprimer toute mention d’auteur, des avis juridiques ou autres appropriés ou des désignations ou étiquettes exclusives concernant l’origine ou la source d’un logiciel ou autre matériel contenu dans un fichier qui est téléchargé", 
  "violer tout code de conduite ou autres directives, qui peuvent être applicables pour ou à un service particulier", 
  "transgresser  les lois ou règlements applicables au Maroc", 
  "atteinte à aucun des termes et conditions du présent Accord ou tous autres termes et conditions d’utilisation du site Web contient par ailleurs ici."
]

const list3 = [
  "Sauf indication contraire, " + url + "  possède, sans limite, tous les droits de propriété intellectuelle sur le contenu du site Web, tels que le code source, les bases de données, les textes, les images etc. Vous reconnaissez et acceptez que vous ne devez pas utiliser, de reproduire ou de distribuer tout contenu du Site Web appartenant à " + url + "  sans obtenir l’autorisation de " + url + "",
  "Vous êtes tenu seul responsable pour tout contenu que vous fournissez ou télécharger depuis le site Web."
]

const list4 = [
  "" + url + " peut suspendre ou résilier votre compte ou de tout élément si elle estime que vous n’avez pas respecté l’une des présentes conditions.",
  "Si vous ou " + url + " met fin à votre compte, " + url + " peut supprimer tout contenu ou tout élément relatif à votre utilisation de " + url + ""
]

const list5 = [
  "Les rabais seront appliqués sur la valeur totale des marchandises, comprenant la TVA. L’émission ou le rachat d’un bon ou un coupon s’applique sur valeur totale de la commande une fois toutes les remises promotionnelles appliquées.",
  "Un seul bon ou coupon peut être utilisé par commande, sauf indication contraire.",
  "" + url + " peut proposer des concours à des périodes différentes et limités. Les conditions de ces concours seront disponibles pour l’utilisateur sur le site."
]

const list6 = [
  "des dommages directs, indirects, consécutifs ou résultant de l’utilisation ou l’impossibilité d’utiliser les services",
  "de l’altération des transmissions des données (par exemple lorsque l’utilisateur voit s’afficher sur le site la mention 404, 501 etc.)  Droit applicable" 
]

const PrivacyPolicy = () => {
  return (
    <>
    <div className="container">
      <div className="policy">
      <Link className="policy-link" to="/">
            <span className="policy-link-text">عودة</span>
            <BackArrow className="policy-link-icon" />
      </Link>
        <h1 className="h h-pol">Conditions générales d'utilisation</h1>
        <p className="p p-pol">Merci de bien vouloir lire les conditions générales avec une attention particulière car l’utilisation de {url} suppose leur acceptation entière et sans réserve.</p>
        <p className="p p-pol">{url} est un contenu hébergé sur Internet et exploité par la société {url}, dont le siège social est situé à Tanger.</p>
        <p className="p p-pol">Les présentes conditions générales de vente des produits constituent des clauses contractuelles applicables à tout achat par tout utilisateur sur le site Web.
</p>
        <h2 className="h h-pol-nd">Introduction</h2>
        <p className="p p-pol">L’utilisation de {url}  est soumise à l’acceptation pleine et sans réserve de toutes les conditions ci-après et de toutes les conditions affichées sur le site Web.

Toute utilisation des Services aussi bien par l’utilisateur emporte de plein droit l’application des présentes CGU.

{url}  se réserve le droit de supprimer un utilisateur, considérant qu’il n’a pas respecté les CGU, sans le lui notifier.</p>
        <h2 className="h h-pol-nd">Interpretation des termes</h2>

        <p className="p p-pol">Les termes «vous» et «utilisateur» désignent l’utilisateur final accédant au site Web. Les termes «fournisseurs de services » désignent les prestataires de services tiers. Les termes autour du pronom personnel «nous» désignent {url} . Le terme « site » désigne {url} .</p>
        <p className="p p-pol">Les conditions présentes s’appliquent à la fois au singulier et au pluriel. Chaque fois que le contexte peut l’exiger, tout pronom doit inclure le masculin et le féminin correspondant. Les termes «notamment», «comprend» et «y compris» est réputée être suivie par l’expression «sans limitation». Sauf si le contexte ne s’y oppose, les termes «aux présentes», «des présentes», «aux présentes», «ci-après » et les termes au sens similaire se réfèrent aux conditions dans son ensemble.</p>
        <h2 className="h h-pol-nd">Division</h2>
        <p className="p p-pol">Si une disposition des conditions est jugée invalide ou inapplicable en tout ou en partie, cette invalidité ou inapplicabilité ne s’attache qu’à une disposition ou partie d’une disposition. Toutes les autres dispositions des présentes Conditions restent valables.</p>
        <h2 className="h h-pol-nd">Utilisation de site web</h2>
        <p className="p-pol p">Lors de la procédure d’inscription au site Web. vous créez un mot de passe et un nom de compte.
</p>
        <p className="p p-pol">Vous êtes responsable du maintien de la confidentialité du nom de compte et du mot de passe, et êtes entièrement responsable de toutes les activités liées à votre compte.
</p>
        <p className="p p-pol">À cette fin, vous vous engagez à :
</p>

        <ol className="policy-list">
          {list1.map((it, i) => <li key={i} className="policy-list-item">{it}</li>)}
        </ol>
        <p className="p p-pol">Vous acceptez et vous engagez à utiliser le site Web uniquement pour afficher et télécharger des données appropriées. A titre d’exemple, vous acceptez et
</p>
        <p className="p p-pol">vous vous engagez à ne pas:
</p>
        <ol className="policy-list">
          {list2.map((it, i) => <li key={i} className="policy-list-item">{it}</li>)}
        </ol>

        <p className="p p-pol">L’utilisateur accepte et s’engage à ne pas modifier, copier, distribuer, transmettre, afficher, exécuter, reproduire, publier, donner licence, créer des œuvres dérivées, transférer ou vendre toute information ou logiciel obtenu à partir du site Web. La reproduction illimitée ou massive, la copie du contenu à des fins commerciales ou non commerciales, ou la modification injustifiée de données et d’informations contenus sur le site Web n’est pas autorisée.</p>
        <h2 className="h h-pol-nd">Responsabilité de l'utilisateur</h2>
        <p className="p p-pol">Les utilisateurs sont seuls responsables de tous les éléments du contenu téléchargé sur le site Web. {url} ne vérifie pas, ne cautionne pas et ne se porte pas garant du contenu de l’utilisateur ou généralement de tout contenu affiché sur le site Web Internet. Les utilisateurs peuvent être tenus légalement responsables de leurs contenus, en particulier, lorsqu’ils sont diffamatoires ou protégés par droit d’auteur etc. Si vous rencontrez un abus ou êtes témoin d’une violation des Conditions, merci de rapporter ce dernier au Service Client.</p>

        <h2 className="h h-pol-nd">Exactitude des données utilisateur</h2>
        <p className="p p-pol">Vous certifiez que vous êtes le propriétaire du contenu que vous nous soumettez et que le contenu ne porte pas atteinte aux droits de propriété intellectuelle ou autres droits.</p>
        <p className="p p-pol">Vous certifiez également que, à votre connaissance, aucune action, poursuite, procédure, ou enquête n’a été engagée ou menacée à votre encontre à propos du contenu que vous soumettez, en particulier lorsqu’il s’agit d’une marque ou d’un nom commercial. Vous vous engagez à fournir des informations exactes quant à ses coordonnées personnelles ainsi que toute autre information nécessaire à l’accès aux Services du Site Web et à mettre à jour régulièrement ces informations si nécessaire, ces informations étant protégées conformément à la réglementation applicable.</p>

        <h2 className="h h-pol-nd">Propriété intellectuelle</h2>

        <ol className="policy-list">
          {list3.map((it, i) => <li key={i} className="policy-list">{it}</li>)}
        </ol>

        <h2 className="h h-pol-nd">Liens avec des tiers</h2>
        <p className="p p-pol">Le site Web peut contenir des liens vers d’autres sites (ci après désignés « sites liés »). Les sites liés ne sont pas sous le contrôle de {url} . {url}  n’est pas responsable du contenu des sites liés, en particulier des changements ou mises à jour du site lié. {url}  n’est pas responsable de toute forme de sollicitation du site lié. {url}  fournit ces liens pour votre seule commodité, et l’inclusion de tout lien n’implique pas l’approbation par {url} .</p>
        <h2 className="h h-pol-nd">Résiliation</h2>

        <ol className="policy-list">
          {list4.map((it, i) => <li key={i} className="policy-list-item">{it}</li>)}
        </ol>

        <h2 className="h h-pol-nd">Prix et promotions</h2>

        <ol className="policy-list">
          {list5.map((it, i) => <li key={i} className="policy-list-item">{it}</li>)}
        </ol>

        <h2 className="h h-pol-nd">Responsabilité de {url}</h2>
        <p className="p p-pol">{url} s’est efforcé de faire en sorte que toutes les informations sur le site Web soient correctes, mais {url} ne garantit la qualité, l’exactitude ou l’exhaustivité des données, informations, produits ou services . En aucun cas, {url} ne sera tenu responsable</p>
        
        <ol className="policy-list">
          {list6.map((it, i) => <li key={i} className="policy-list-item">{it}</li>)}
        </ol>

        <h2 className="h h-pol-nd">Droit applicable</h2>

        <p className="p p-pol">Ces conditions générales d’utilisation sont régies par le droit marocain.</p>

        <h2 className="h h-pol-nd">Modification</h2>

        <p className="p p-pol">Cette politique de confidentialité peut changer à tout moment à inclure / exclure des clauses personne l’utilisateur final accédant au site Web.</p>

        <h2 className="h h-pol-nd">
        Récupération des données utilisateur
        </h2>
        <p className="p p-pol">La protection des données de votre vie privée est un principe important pour nous. Nous recueillons des renseignements à des fins nécessaires à la bonne utilisation du site Web.</p>

        <p className="p p-pol">En soumettant des données à {url} vous consentez à notre utilisation de vos données de la manière prévue dans la présente politique de confidentialité.</p>
        <p className="p p-pol">Vous pouvez visiter et naviguer sur certaines pages de {url} sans avoir à fournir de renseignements personnels.
</p>
        <p className="p p-pol">Nous pouvons collecter des informations de nature diverses. Nous avons besoin de ces informations, notamment afin de permettre la commande d’un produit, le paiement et la livraison.
</p>
        <p className="p p-pol">Nous collectons, stockons et traitons vos données pour permettre la bonne utilisation du site Web. Nous pouvons recueillir des informations sur le formulaire d’inscription tel que votre nom, sexe, adresse Email, adresse postale, adresse de livraison (si différente), numéro de téléphone, numéro de téléphone mobile, détails de paiement, carte bancaire ou de coordonnées bancaires.
</p>
        <h2 className="h h-pol-nd">
        Utilisation des données utilisateur
        </h2>

        <p className="p p-pol">Nous stockons et traitons vos informations sur des serveurs protégés par des dispositifs technologiques et humains de sécurité. Nous demandons à des tiers de vérifier et certifier nos principes de confidentialité.
</p>
        <p className="p p-pol">Nous pouvons transmettre vos coordonnées à un tiers afin d’effectuer la livraison de la commande. Nous pouvons également utiliser vos données afin de détecter d’éventuels abus ou de fraude, vous envoyer des informations sur le site Web ou nos produits.
</p>
        <p className="p p-pol">Nous pouvons utiliser vos renseignements personnels pour avis et études de marché. Vos données sont anonymes et ne seront utilisées qu’à des fins statistiques.
</p>
        <p className="p p-pol">Nous ne partagerons aucune de vos informations personnelles avec des tiers sans votre consentement explicite. De la même manière, nous ne vendons ni ne louons vos informations personnelles à des tiers pour des fins de marketing sans votre consentement explicite.
</p>
      
      <h2 className="h h-pol-nd">Sécurité</h2>
      <p className="p p-pol">Nous avons mis en place des mesures techniques appropriées de sécurité pour empêcher l’accès non autorisé ou illégal à vos informations. Lorsque nous recueillons des données à travers le site Web, nous recueillons vos données personnelles sur un serveur sécurisé. Nous utilisons des pare-feu sur nos serveurs. Lorsque nous recueillons des informations de cartes de paiement électronique, nous utilisons le cryptage en utilisant la technologie Secure Socket Layer (SSL) de codage. Il est fortement recommandé de ne pas envoyer tous les détails de carte de crédit ou de débit dans les communications électroniques non cryptés avec nous. Mais vous êtes responsable de la protection contre l’accès non autorisé à votre mot de passe et à votre ordinateur.
</p>
      <h2 className="h h-pol-nd">Cookies</h2>
      <p className="p p-pol">L’acceptation des cookies n’est pas nécessaire pour visiter le site Web. Cependant, nous voudrions souligner que pour assurer la bonne utilisation du site Web les cookies sont nécessaires. Les cookies sont des fichiers texte qui servent à identifier votre ordinateur lorsque vous visitez certaines pages sur le site Web et ils sont stockés par votre navigateur Internet sur le disque dur de votre ordinateur. Les cookies peuvent être utilisés pour reconnaître votre adresse de protocole Internet, vous permet d’économiser du temps lorsque vous revenez sur le site Web. Votre navigateur peut être configuré pour ne pas accepter les cookies, mais cela peut restreindre votre utilisation de {url} . Si vous voulez en savoir plus d’informations sur les cookies, rendez-vous à http://www.allaboutcookies.org.</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default PrivacyPolicy