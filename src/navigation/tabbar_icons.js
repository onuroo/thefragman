// import { Images } from '../helpers/assets';
const home = require('../assets/images/tabIcons/home.png');
const vizyona_girecekler = require('../assets/images/tabIcons/vizyona_girecekler.png');
const populer_diziler = require('../assets/images/tabIcons/populer_diziler.png');
const vizyondaki_filmler = require('../assets/images/tabIcons/vizyondaki_filmler.png');
const yeni_diziler = require('../assets/images/tabIcons/yeni_diziler.png');

const ICONS = {
  HomeTab: home,
  PopulerDizilerTab: populer_diziler,
  VizyonaGireceklerTab: vizyona_girecekler,
  VizyondakiFilmlerTab: vizyondaki_filmler,
  YeniDizilerTab: yeni_diziler,
};

const INDEXES = {
  HomeTab: 0,
  ProfileTab: 1,
};

const getTabIcon = (name, activeIndex) => {
  const obj = {
    icon: ICONS[name],
    opacity: INDEXES[name] === activeIndex ? 1 : 0.5,
  };

  return obj;
};

export default getTabIcon;
