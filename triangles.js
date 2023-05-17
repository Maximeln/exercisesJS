function triangles(cote1, cote2, cote3) {
    if (cote1 === cote2 && cote2 === cote3 && cote3 === cote1) {
      return "Triangle équilatéral";
    } else if (cote1 === cote2 || cote2 === cote3 || cote3 === cote1) {
      return "Triangle isocèle";
    } else if (
      cote1 + cote2 < cote3 ||
      cote2 + cote3 < cote1 ||
      cote3 + cote1 < cote2
    ) {
      return "Triangle impossible";
    } else {
      return "Triangle scalène";
    }
  }