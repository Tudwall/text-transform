Algorithme:

    - Selectionner input, submit, result et offset

    - Mettre le texte de input en caps
    - Récupérer le texte dans input
    - Récupérer le int dans offset

    - Mettre input en array (split)
    - Décaler tout les caractères dans la str selon offset (map pour appliquer à chaque char)
    - Récupérer le code caractère de chaque char dans la str
    - Si code entre 65 et 90, retourne char
    - Si code < 78, retourne code + offset
    - Sinon retourne code - offset
    - Remettre input en str

    - Quand submit est clické, mettre le résultat de la fonction dans result

Table UTF-16:

    - A-Z: 65-90
    - a-z: 97-122

Test texts:

    - URYYB JBEYQ
    - BCRAPYNFFEBBZF
    - PRPV RFG ZBA PBQR FRPERG
