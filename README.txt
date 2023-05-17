En plus du projet de site eCommerce nous avons, individuellement, fait une série d'éxercice en JS.

Il y avait un total de 8 exercices. Il y en a un seul que je n'ai pas entièrement réussi. Celui-ci consistait à "détruire" une page en écrivant une suite de caractère au clavier.


Les consignes étaient les suivantes pour chacun des exercices:

- Vous devez créer une fonction qui renvoie J'aime le JS ! (utilisez le mot-clé return).

- L'objectif de cet exercice est de créer une fonction permettant de renvoyer le mot correspondant au chiffre passé en argument.

Les valeurs d'entrées sont les chiffres de 0 à 2 inclus.

Exemples

Pour le chiffre 0, la fonction doit renvoyer zéro
Pour le chiffre 1, la fonction doit renvoyer un
Pour le chiffre 2, la fonction doit renvoyer deux

- Étant donné un prénom prenom, la fonction doit renvoyer Un pour <prenom>, un pour moi..

Si aucun prénom n'est donné, la fonction doit renvoyer Un pour toi, un pour moi..

Exemples
Pour le prénom Anthony, la fonction doit renvoyer Un pour Anthony, un pour moi.
Pour le prénom Joséphine, la fonction doit renvoyer Un pour Joséphine, un pour moi.
Si aucun prénom n'est fourni, la fonction doit renvoyer Un pour toi, un pour moi.

- La conjecture de Syracuse ou le problème 3x + 1 peut être résumé comme ceci :

Prenez un nombre entier positif n. Si n est pair, divisez-le par 2 pour obtenir n / 2. Si n est impair, multipliez-le par 3 et ajoutez 1 pour obtenir n * 3 + 1.

Répétez ce processus indéfiniment. La conjecture établit que peu importe le nombre avec lequel vous commencez, vous finirez toujours par atteindre 1.

Étant donné un nombre n, retournez le nombre d'étapes nécessaires pour atteindre 1.

Exemples
On commence avec n = 12, les étapes seraient les suivantes :

12
6
3
10
5
16
8
4
2
1
On atteint 1 en 9 étapes. Donc pour n = 12, la fonction doit retourner 9.

- Étant donné les longueurs des 3 côtés d'un triangle, votre fonction devra renvoyer si celui-ci est équilatéral, isocèle, scalène ou impossible.

Un triangle est équilatéral lorsque ses 3 côtés sont égaux
Un triangle est isocèle lorsque 2 de ses côtés sont égaux
Un triangle est scalène lorsqu'aucun de ses côtés n'est égal à un autre côté
Un triangle est impossible lorsque la somme de deux de ses côtés est strictement inférieure au troisième côté

Exemples

(2, 3, 2) est un triangle isocèle
(7, 7, 7) est un triangle équilatéral
(3, 5, 6) est un triangle scalène
(2, 8, 5) est un triangle impossible car 2 + 5 < 8 !

- Rédigez une fonction qui retourne, sous la forme d'une chaîne de caractères, les nombres de 1 à 200 dans l’ordre, en remplaçant :

les multiples de 3 par le mot Fizz
les multiples de 5 par le mot Buzz
les multiples de 15 par le mot FizzBuzz
Les différents mots devront être séparés par des " - ".

Attention, l'exercice n'est pas si simple qu'il n'y paraît...

Exemple
Voici un extrait pour les nombres de 1 à 10 : '1 - 2 - Fizz - 4 - Buzz - Fizz - 7 - 8 - Fizz - Buzz'

- L'idée est de faire en sorte que sur votre page web (Challenge HTML / CSS), on puisse saisir un code qui détruira la page en question.

Concrètement, je me rends sur la page, et je commence à taper un code sur le clavier (ex : 'C' 'O' 'D' 'E' '1' '2' '3' '4'). Si je tape tous les caractères du code les uns à la suite des autres sans faire d'erreur, toute votre page doit s'autodétruire (méthodologie de destruction laissée à votre discrétion :) ).

NB : cette saisie ne se fait pas dans un champ de formulaire ou dans une fenêtre prompt js. Le code se saisit "dans le vide" à partir du moment où votre site a le focus.

NB2 : je peux saisir n'importe quelle combinaison de caractères avant, dès le moment où je tape la suite CODE1234, la page s'autodétruit. Je peux faire des erreurs de code, le reprendre en cours de route, ... à partir du moment où la suite exacte est saisie, la page se détruit.

- On demande une durée en secondes à l'utilisateur (ex : 483), et on lui retourne cette durée en heures:minutes:secondes (ex: 00 : 08 : 03 dans notre cas).