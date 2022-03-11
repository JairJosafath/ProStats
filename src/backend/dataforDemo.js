const Admins = [
  { id: 1, name: "Super League Admin", username: "user1" },
  //managers
];

const Leagues = [
  {
    id: 1,
    name: "Super League",
    descr: "E-League that hosts different competitions and divisions",
  },
];
const Managers = [
  //managers
  { id: 2, name: "Liverpool Manager", username: "user2" },
  { id: 3, name: "Barcelona Manager", username: "user3" },
  { id: 4, name: "Real Madrid Manager", username: "user4" },
  { id: 5, name: "Paris Saint Germain Manager", username: "user5" },
  { id: 6, name: "Manchester United Manager", username: "user6" },
  { id: 7, name: "Atletico Madrid Manager", username: "user7" },
  { id: 8, name: "Sevilla Manager", username: "user8" },
  { id: 9, name: "Manchester City Manager", username: "user9" },
  { id: 10, name: "Chelsea Manager", username: "user10" },
  { id: 11, name: "AC Milan Manager", username: "user11" },
  { id: 12, name: "Bayern Munich", username: "user12" },
  { id: 13, name: "Juventus Manager", username: "user13" },
];
const Players = [
  //players
  //Liv
  { id: 14, name: "Mo Salah", username: "user14" },
  { id: 15, name: "Sadio Mane", username: "user15" },
  { id: 16, name: "Roberto Firminho", username: "user16" },
  { id: 17, name: "Virgil Van Dijck", username: "user17" },
  { id: 18, name: "Lucas Henderson", username: "user18" },
  { id: 19, name: "Allison", username: "user19" },

  //FCB
  { id: 20, name: "Pierre Aubemeyang", username: "user20" },
  { id: 21, name: "Memphis Depay", username: "user21" },
  { id: 22, name: "Ousmane Dembele", username: "user22" },
  { id: 23, name: "Pedri", username: "user23" },
  { id: 24, name: "Gerard Pique", username: "user24" },
  { id: 25, name: "Ter Stegen", username: "user25" },
  //RMD
  { id: 26, name: "Karim Benzema", username: "user26" },
  { id: 27, name: "Vinicius Jr", username: "user27" },
  { id: 28, name: "Luka Modric", username: "user28" },
  { id: 29, name: "Marcello", username: "user29" },
  { id: 30, name: "Thibout Courtouis", username: "user30" },
  { id: 31, name: "Toni Kroos", username: "user31" },

  //PSG
  { id: 32, name: "Lionel Messi", username: "user32" },
  { id: 33, name: "Neymar Jr", username: "user33" },
  { id: 34, name: "Kyllian Mbappe", username: "user34" },
  { id: 35, name: "Marco Veratti", username: "user35" },
  { id: 36, name: "Sergio Ramos", username: "user36" },
  { id: 37, name: "Donna Ruma", username: "user37" },
  //MUTD
  { id: 14, name: "Cristiano Ronaldo", username: "user14" },
  { id: 15, name: "Marcus Rashford", username: "user15" },
  { id: 16, name: "Paul Pogba", username: "user16" },
  { id: 17, name: "Luke Shaw", username: "user17" },
  { id: 18, name: "De Gea", username: "user18" },
  { id: 19, name: "Edinson Cavani", username: "user19" },

  //ATL
  { id: 20, name: "Luis Suarez", username: "user20" },
  { id: 21, name: "Antione Griezman", username: "user21" },
  { id: 22, name: "Koke", username: "user22" },
  { id: 23, name: "Jan Oblak", username: "user23" },
  { id: 24, name: "Godin", username: "user24" },
  { id: 25, name: "Carrasco", username: "user25" },
  //SEV
  { id: 26, name: "Anthony Martial", username: "user26" },
  { id: 27, name: "Sevilla Forward", username: "user27" },
  { id: 28, name: "Sevilla Midfielder", username: "user28" },
  { id: 29, name: "Sevilla Defender", username: "user29" },
  { id: 30, name: "Sevilla Goalkeeper", username: "user30" },
  { id: 31, name: "David Silva", username: "user31" },

  //MANC
  { id: 32, name: "Raheem Sterling", username: "user32" },
  { id: 33, name: "Kevin De Bruyne", username: "user33" },
  { id: 34, name: "Bernardo Silva", username: "user34" },
  { id: 35, name: "Cancelo", username: "user35" },
  { id: 36, name: "Ederson", username: "user36" },
  { id: 37, name: "Phil Foden", username: "user37" },
  //Chel
  { id: 38, name: "Kai Havertz", username: "user38" },
  { id: 39, name: "Timo Werner", username: "user39" },
  { id: 40, name: "Lukaku", username: "user40" },
  { id: 41, name: "Ngolo Kante", username: "user41" },
  { id: 42, name: "Thiago Silva", username: "user42" },
  { id: 43, name: "Mendy", username: "user43" },

  //ACM
  { id: 44, name: "Zlatan Ibrahimovic", username: "user44" },
  { id: 45, name: "Olivier Giroud", username: "user45" },
  { id: 46, name: "Kessie", username: "user46" },
  { id: 47, name: "AC Milan Midfielder", username: "user47" },
  { id: 48, name: "AC Milan Defender", username: "user48" },
  { id: 49, name: "AC Milan Goalkeeper", username: "user49" },
  //BMun
  { id: 50, name: "Robert Lewandowski", username: "user50" },
  { id: 51, name: "Leroy Sane", username: "user51" },
  { id: 52, name: "Goretzka", username: "user52" },
  { id: 53, name: "Opamecano", username: "user53" },
  { id: 54, name: "Edgar Davies", username: "user54" },
  { id: 55, name: "Manuel Neuer", username: "user55" },

  //Juv
  { id: 56, name: "Dybala", username: "user56" },
  { id: 57, name: "Del Piero", username: "user57" },
  { id: 58, name: "Mandzukic", username: "user58" },
  { id: 59, name: "Juventus Midfielder", username: "user59" },
  { id: 60, name: "Chiellini", username: "user60" },
  { id: 61, name: "Juventus Goalkeeper", username: "user61" },
];

const Teams = [
  { id: 1, name: "Liverpool Manager", username: "user1" },
  { id: 2, name: "Barcelona Manager", username: "user2" },
  { id: 3, name: "Real Madrid Manager", username: "user3" },
  { id: 4, name: "Paris Saint Germain Manager", username: "user4" },
  { id: 5, name: "Manchester United Manager", username: "user5" },
  { id: 6, name: "Atletico Madrid Manager", username: "user6" },
  { id: 7, name: "Sevilla Manager", username: "user7" },
  { id: 8, name: "Manchester City Manager", username: "user8" },
  { id: 9, name: "Chelsea Manager", username: "user9" },
  { id: 10, name: "AC Milan Manager", username: "user10" },
  { id: 11, name: "Bayern Munich", username: "user11" },
  { id: 12, name: "Juventus Manager", username: "user12" },
];

const Tournaments = [
  { id: 1, name: "Super League", descr: "League for top teams" },
  { id: 2, name: "La Liga", descr: "League for Spanish teams" },
  { id: 2, name: "Premier League", descr: "League for English teams" },
  { id: 2, name: "Other League", descr: "League for Other teams" },
  { id: 2, name: "Copa Del Rey", descr: "Cup for Spanish teams" },
  { id: 2, name: "Fa Cup", descr: "Cup for English teams" },
  { id: 2, name: "Champions League", descr: "All top EU Teams" },
];
