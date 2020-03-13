const generateShowInfo = (show) => {
  const titleText = show.title;
  const seasonsText = show.numberOfSeasons + ' seasons';
  const episodesText = show.episodesPerSeason + ' episodes per season';
  const component = {
    titleText: titleText,
    seasonsText: seasonsText,
    episodesText: episodesText
  };
}

generateShowInfo(tau);
generateShowInfo(meldrum);
generateShowInfo(clara);