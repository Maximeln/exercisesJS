function conversionTemps(duree) {
    let heure = 0;
    let minute = 0;
    let seconde = 0;
    while (duree !== 0) {
      heure = Math.floor(duree / 3600);
      duree -= heure * 3600;
      minute = Math.floor(duree / 60);
      if (minute >= 60) {
        heure = Math.floor(minute / 60);
        minute = minute % 60;
      }
      duree -= minute * 60;
      seconde = duree;
      if (seconde >= 60) {
        minute = seconde / 60;
        seconde = minute % 60;
      }
      duree -= seconde;
    }
    return heure + " : " + minute + " : " + seconde;
  }