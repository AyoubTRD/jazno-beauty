import React from "react";
import Footer from "../Footer";

import { Link } from "react-router-dom";
import { IoIosArrowBack as BackArrow } from "react-icons/io";

const ReturnPolicy = () => {
  return (
    <>
      <div className="container">
        <div className="policy">
          <Link className="policy-link" to="/">
            <span className="policy-link-text">عودة</span>
            <BackArrow className="policy-link-icon" />
          </Link>
          <h1 className="h h-pol">Conditions de retour</h1>
          <p className="p p-pol">
            Vous disposez de 7 jours à compter de la date de livraison pour
            retourner vos articles gratuitement.* Les articles retournés ne
            doivent avoir été ni portés ni utilisés. Ils doivent toujours
            comporter leur étiquette et être renvoyés dans leur emballage
            d’origine. Nous ne procédons à aucun remboursement ou échange de
            produits Cien achetés auprès de revendeurs agréés. Les
            remboursements sont effectués via le mode de paiement initial.
          </p>
          <p className="p p-pol">C'EST FACILE</p>
          <p className="p p-pol">
            Emballez le(s) produit(s)** que vous souhaitez renvoyer dans un
            carton. Collez l'étiquette d'expédition prépayée jointe sur le colis
            afin de planifier l'enlèvement de votre retour. Par la suite, vous
            recevrez un e-mail confirmant que votre remboursement a été traité.
            *Le remboursement espèce est activé seulement si le produit demandé
            ne correspond pas à la commande passé. au cas ou le le client change
            d'avis sur la première semaine, il a le droit de faire un seul
            changement d'article et payer ou se rembourser sur la différence de
            prix entre les deux articles.
          </p>
          <p className="p p-pol">
            *Si les produits sont retournés sans les articles promotionnels
            inclus dans la transaction initiale (produit offert pour tout achat
            supérieur à un certain montant), le montant initial de l’article
            promotionnel sera déduit du montant du remboursement.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
