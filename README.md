# Installation du module
 - Installer le module dans Gladys à l'aide du menu avancé (Nom, Version, URL Git, et slug) 

Exemple : 

   Nom: MyApps
   
   Version: ![GitHub release](https://img.shields.io/github/release/pjap93/gladys-myapps.svg)
   
   URL Git: https://github.com/pjap93/gladys-myapps
   
   Slug: myapps
    
-	Redémarrer Gladys
 
## Module Gladys

Ajout de différentes fonctionnalitées à Gladys

## Ajout de fonctions à la liste des actions pour les scénarios

- Fonction FlipFlop : permet d'inverser l'état d'un device par commande en utilisant les parametres min-max
- Fonction SendNotifyByService : Permet de choisir sur quel canal envoyer une notification 

## Ajout de fonctions à la liste des conditions pour les scénarios

- Fonction device_isItValidCondition : permet de créer une condition par rapport à la valeur d'un deviceType 
- Fonction isItAM : Permet de créer une condition si matin
- Fonction isItPM : Permet de créer une condition si après-midi
- Fonction isInTimeRange : Permet de définir une plage horaire de validation du scénario
