// Composants de prophéties
const debut = [
    "Quand la lune sera pleine",
    "Lorsque le vent soufflera du nord",
    "À l’aube d’un jour sombre",
    "Lorsque le soleil se couchera à l’est",
    "Quand les étoiles disparaîtront du ciel",
    "À l'heure où les ombres danseront",
    "Lorsque l'océan deviendra calme",
    "Quand la montagne chantera",
    "À l'instant où le corbeau criera trois fois",
    "Quand l'eau du Styx deviendra claire",
    "Quand la lune sera pleine",
    "Lorsque le vent soufflera du nord",
    "À l’aube d’un jour sombre",
    "Lorsque le soleil se couchera à l’est",
    "Quand les étoiles disparaîtront du ciel",
    "À l'heure où les ombres danseront",
    "Lorsque l'océan deviendra calme",
    "Quand la montagne chantera",
    "À l'instant où le corbeau criera trois fois",
    "Quand l'eau du Styx deviendra claire",
    "Quand le phénix renaîtra de ses cendres",
    "Lorsque l'éclair frappera la mer",
    "À la minute où le dernier souffle se fera entendre",
    "Quand le dragon d’argent se réveillera",
    "Quand le sable s'écoulera à l'envers",
    "À l'heure de la plus grande éclipse",
    "Quand les sept astres s'aligneront",
    "Lorsque la mer engloutira le soleil",
    "À l'instant où les pierres parleront",
    "Quand les feuilles seront rouges en été",
    "Lorsque le dernier arbre tombera",
    "Quand les rivières s'assécheront",
    "À l'heure où le monde dormira",
    "Quand les portes du Tartare s'ouvriront",
    "Lorsque le serpent mordra sa queue",
    "À la tombée d'un crépuscule sans fin",
    "Quand le souffle des dieux s'éteindra",
    "Quand le corbeau trouvera sa voix",
    "À l’aube du dernier jour",
    "Lorsque le tonnerre grondera sans pluie",
    "Quand la chouette criera à midi",
    "À l’heure où le monde sera plongé dans l’ombre",
    "Quand le soleil et la lune se croiseront",
    "Lorsque le feu sera froid comme la glace",
    "Quand les montagnes marcheront",
    "À l'heure où les étoiles s'éteindront",
    "Quand le grand lion rugira",
    "Lorsque la lumière naîtra de la pierre",
    "Quand l'arbre ancien fleurira en hiver",
    "À l'instant où le dernier souffle sera pris",
    "Quand l'eau de la mer deviendra douce",
    "Quand la foudre touchera la neige",
    "À l'heure où le vent s'arrêtera",
    "Lorsque la pluie tombera en silence",
    "Quand le miroir reflétera l'âme",
    "À l’aube du jour sans fin",
    "Quand l'ombre marchera seule",
    "Lorsque la voix de la terre se taira",
    "Quand la mer se déchaînera sans raison",
    "À l'instant où le grand arbre s'inclinera",
    "Quand le désert fleurira",
    "Lorsque le corbeau prendra son envol",
    "Quand l’arc-en-ciel apparaîtra en pleine nuit",
    "À l’heure de la lune rouge",
    "Quand la rivière s'enflammera",
    "Lorsque le monde se couvrira de glace",
    "Quand les oiseaux cesseront de voler",
    "À l’instant où le soleil pleurera",
    "Quand la brume couvrira les collines",
    "Lorsque la montagne parlera aux hommes",
    "Quand la pierre deviendra poussière",
    "À l'heure où le silence règnera",
    "Quand le fleuve coulera à l'envers",
    "Lorsque le lion dormira avec l’agneau",
    "Quand le vent murmura le nom des anciens",
    "À l’instant où l’ombre grandira",
    "Quand la forêt changera de couleur",
    "Lorsque le cygne noir dansera",
    "Quand la lumière se retirera",
    "À l’heure où la mer deviendra rouge",
    "Quand la terre tremblera sans avertissement",
    "Lorsque l’étoile filante tombera",
    "Quand le grand aigle volera à l'envers",
    "À l’instant où les flammes chanteront",
    "Quand la pluie deviendra d'or",
    "Lorsque le sable cachera la vérité",
    "Quand la tempête viendra sans vent",
    "À l'heure où les ombres grandiront",
    "Quand le miroir brisera le ciel",
    "Lorsque le loup hurlera à midi",
    "Quand les trois soleils apparaîtront",
    "À l’instant où l’écho répondra deux fois",
    "Quand la neige tombera en été",
    "Lorsque la brume cachera la montagne",
    "Quand le dragon ouvrira les yeux",
    "À l'heure où les cœurs trembleront",
    "Quand le chat noir passera trois fois",
    "Lorsque le froid deviendra brûlant",
    "Quand le ciel se fendra",
    "À l’instant où le temps s'arrêtera",
    "Quand l’éclair fendra la terre",
    "Lorsque le fleuve changera de couleur",
    "Quand les ombres s'étireront jusqu'à l'aube",
    "À l’heure où les vagues s’inverseront",
    "Quand la brume rouge couvrira le sol",
    "Lorsque le ciel sera sans nuages",
    "Quand les pierres éclateront de rire",
    "À l'instant où la cloche sonnera trois fois",
    "Quand le soleil se lèvera à l’ouest",
    "Lorsque les montagnes se briseront",
    "Quand la nuit sera sans fin",
    "À l’heure où la forêt murmure des secrets",
    "Quand la rivière chantera",
    "Lorsque le dernier feu s'éteindra",
    "Quand l’arbre s'effondrera dans le silence",
    "À l'instant où les vents cesseront",
    "Quand la mer se retirera pour toujours",
    "Lorsque le monde sera en cendres",
    "Quand les étoiles saigneront",
    "À l’aube de la grande révélation",
    "Quand les mers se rencontreront",
    "Lorsque le serpent géant bougera",
    "Quand la colline se déplacera",
    "À l’instant où l’aigle tombera",
    "Quand la montagne vomira de la lave",
    "Lorsque l’ombre deviendra lumière",
    "Quand le cygne s'envolera seul",
    "À l’heure où le lac deviendra noir",
    "Quand la pluie deviendra cendres",
    "Lorsque le grand lion rugira",
    "Quand la lune se baignera dans l'eau",
    "À l’instant où la rose deviendra pierre",
    "Quand les dieux parleront aux mortels",
    "Lorsque la colline se brisera",
    "Quand la lumière naîtra des ténèbres",
    "À l’heure de la fin des temps",
    "Quand les voix du vent crieront",
    "Lorsque la mer changera de forme",
    "Quand l’ombre traversera la lumière",
    "À l’instant où les oiseaux cesseront de chanter",
    "Quand le corbeau rira",
    "Lorsque le grand arbre pleurera",
    "Quand la montagne éclatera de rire",
    "À l’aube du crépuscule éternel",
    "Quand le dernier souffle sera pris",
    "Lorsque le sol se brisera en deux",
    "Quand la terreur se lèvera",
    "À l’heure où le ruisseau deviendra torrent",
    "Quand le monde deviendra silencieux",
    "Lorsque le dieu ancien s'éveillera",
    "Quand la brume envahira les champs",
    "À l’instant où le dernier astre brillera",
    "Quand le lion rugira sans fin",
    "Lorsque la neige deviendra rouge",
    "Quand le serpent embrassera le cygne",
    "À l’heure où la mer chantera",
    "Quand la rose deviendra noire",
    "Lorsque le cri du hibou retentira",
    "Quand le vent soufflera à l'envers",
    "À l’aube de l’hiver sans fin",
    "Quand la lumière de la lune s'éteindra",
    "Lorsque le sable deviendra liquide",
    "Quand le lion deviendra agneau",
    "À l’instant où le cor sonnera",
    "Quand la rivière pleurera",
    "Lorsque les montagnes changeront de place",
    "Quand le feu deviendra glace",
    "À l’heure où le monde soupirera",
    "Quand la lumière dansera",
    "Lorsque les étoiles tomberont comme la pluie",
    "Quand le serpent se mordra la queue",
    "À l’instant où l’éclair brillera deux fois",
    "Quand la terre se fendra",
    "Lorsque les dieux riront",
    "Quand l’ombre du passé apparaîtra",
    "À l’aube de la grande bataille",
    "Quand le monde sera plongé dans le noir",
    "Lorsque le cygne deviendra corbeau",
    "Quand l’arbre sacré s'effondrera",
    "À l’instant où la tempête s'arrêtera",
    "Quand le loup deviendra homme",
    "Lorsque la mer bouillonnera",
    "Quand le temps se tordra",
    "À l’heure où le vent chantera",
    "Quand l'herbe deviendra bleue",
    "Lorsque les rivières deviendront or",
    "Quand le corbeau planera bas",
    "À l’instant où la mer sera claire comme le cristal",
    "Quand la nuit deviendra jour",
    "Lorsque l’eau deviendra rouge",
    "Quand les statues marcheront",
    "À l’heure où les vagues deviendront calmes",
    "Quand la lune rouge se lèvera",
    "Lorsque le désert deviendra forêt",
    "Quand la montagne éclatera",
    "À l’instant où le loup criera",
    "Quand le fleuve s’enflammera",
    "Lorsque les vents chanteront",
    "Quand le lion rugira sans écho",
    "À l’aube de la fin de l'espoir",
    "Quand le chat blanc se montrera",
    "Lorsque le sable du désert brillera",
    "Quand le faucon deviendra hibou",
    "À l’instant où l’eau reflètera le ciel",
    "Quand le cor résonnera",
    "Lorsque le brouillard descendra sur la vallée",
    "Quand la lumière deviendra sombre",
    "À l’heure de la grande famine",
    "Quand l’ombre de la lune passera",
    "Lorsque la mer se retirera pour toujours",
];

const milieu = [
    "un secret ancien sera révélé",
    "le destin des hommes changera à jamais",
    "un grand roi tombera",
    "un ennemi se montrera sous un masque d'ami",
    "un voyage commencera vers l'inconnu",
    "les dieux eux-mêmes parleront aux mortels",
    "un amour perdu sera retrouvé",
    "un pacte oublié sera renouvelé",
    "une guerre silencieuse éclatera",
    "une prophétie oubliée s'accomplira",
    "un secret ancien sera révélé",
    "le destin des hommes changera à jamais",
    "un grand roi tombera",
    "un ennemi se montrera sous un masque d'ami",
    "un voyage commencera vers l'inconnu",
    "les dieux eux-mêmes parleront aux mortels",
    "un amour perdu sera retrouvé",
    "un pacte oublié sera renouvelé",
    "une guerre silencieuse éclatera",
    "une prophétie oubliée s'accomplira",
    "un héros inattendu se lèvera",
    "les cœurs des hommes seront testés",
    "les ombres révéleront leurs secrets",
    "un être cher se retournera contre toi",
    "un ancien mal reviendra",
    "le monde ne sera plus jamais le même",
    "les rivières se rempliront de larmes",
    "les montagnes s'effondreront",
    "un nouveau roi s'élèvera",
    "un mensonge sera dévoilé",
    "les cieux s'ouvriront",
    "les morts marcheront parmi les vivants",
    "le sang coulera dans les rivières",
    "une étoile filante tombera sur la terre",
    "une vérité oubliée ressurgira",
    "les anciens dieux se réveilleront",
    "les chaînes de l'Hadès seront brisées",
    "un enfant naîtra sous une étoile noire",
    "un navire fantôme apparaîtra",
    "le monde sera plongé dans le chaos",
    "un trône sera renversé",
    "un pacte de sang sera rompu",
    "les portes de l'enfer s'ouvriront",
    "un trésor perdu sera découvert",
    "un guerrier reviendra de l'ombre",
    "les lois du temps seront brisées",
    "un rêve deviendra réalité",
    "les eaux se sépareront",
    "les terres trembleront",
    "un feu éternel s'allumera",
    "les hommes oublieront leurs dieux",
    "une ombre couvrira le monde",
    "les étoiles danseront dans le ciel",
    "un ennemi caché se révélera",
    "le silence tombera sur la terre",
    "un éclat de lumière percera l'obscurité",
    "une voix d'outre-tombe résonnera",
    "les bêtes parleront la langue des hommes",
    "un royaume tombera dans l'oubli",
    "une nouvelle ère commencera",
    "le temps lui-même se tordra",
    "un ange déchu reviendra",
    "les anciens écrits seront trouvés",
    "un chant se fera entendre dans la nuit",
    "les brumes se dissiperont",
    "les oiseaux ne chanteront plus",
    "les hommes perdront leur voix",
    "un voyageur solitaire trouvera la clé",
    "les rêves deviendront cauchemars",
    "les miroirs se briseront",
    "un cri perçant déchirera le silence",
    "les esprits erreront librement",
    "une tempête surgira sans avertissement",
    "un secret sera murmuré dans le vent",
    "les anciens livres brûleront",
    "un messager inattendu viendra",
    "les montagnes prendront vie",
    "les larmes deviendront des diamants",
    "le feu glacera les cœurs",
    "les rivières changeront de cours",
    "les morts chanteront dans leurs tombes",
    "une couronne de fer sera forgée",
    "un enfant des étoiles descendra",
    "un royaume oublié émergera",
    "les cieux se diviseront",
    "le chaos régnera sur la terre",
    "une épée maudite sera brandie",
    "les nuages cacheront le soleil",
    "les fleurs s'épanouiront en hiver",
    "un loup solitaire hurlera",
    "les vagues toucheront les étoiles",
    "une lumière blanche remplira le ciel",
    "les portes des rêves s'ouvriront",
    "les montagnes saigneront",
    "un homme sans visage apparaîtra",
    "le grand dragon réveillera",
    "les morts marcheront sur la terre",
    "les étoiles s'éteindront",
    "le vent portera un avertissement",
    "un arbre de feu prendra racine",
    "les rivières seront de sang",
    "les songes deviendront réalité",
    "un prophète naîtra sous la pluie",
    "les loups deviendront des agneaux",
    "les dieux tourneront le dos",
    "un désert deviendra une mer",
    "le temps se figera",
    "les étoiles ne brilleront plus",
    "les ombres grandiront",
    "un vieux sage perdra la raison",
    "les oiseaux migreront vers l'inconnu",
    "un héros tombera pour toujours",
    "le silence deviendra un cri",
    "les arbres chanteront",
    "les visages deviendront des masques",
    "le ciel deviendra rouge",
    "un navire perdu reviendra",
    "le passé rattrapera le présent",
    "les morts danseront sous la lune",
    "un serment brisé provoquera une guerre",
    "les rires se transformeront en pleurs",
    "une lumière viendra de l'obscurité",
    "une ombre engloutira la lumière",
    "une étoile changera de couleur",
    "les montagnes s'effondreront",
    "les eaux se retireront",
    "un voile noir couvrira le monde",
    "un roi sans couronne règnera",
    "le cor sonnera dans la nuit",
    "les hommes seront sans mémoire",
    "une bête s'éveillera du sommeil",
    "un héros se tiendra seul",
    "les cœurs deviendront de pierre",
    "les éclats de verre rempliront le ciel",
    "le vent portera un nom oublié",
    "les larmes de la lune tomberont",
    "le temps ne sera plus",
    "un enfant portera une couronne",
    "le silence régnera sur la mer",
    "un cri de corbeau résonnera",
    "les mots perdront leur sens",
    "les visages se transformeront",
    "les voix du passé seront entendues",
    "un feu s'allumera dans le ciel",
    "les ombres couvriront la terre",
    "une pluie de cendres tombera",
    "les étoiles éclateront",
    "le temps deviendra fluide",
    "les hommes oublieront le jour",
    "les brumes cacheront la lumière",
    "un arbre géant s'effondrera",
    "le sang deviendra de l'or",
    "une rivière de feu coulera",
    "les oiseaux tomberont du ciel",
    "les statues prendront vie",
    "une porte s'ouvrira sur le néant",
    "un enfant de la nuit naîtra",
    "un chemin perdu sera trouvé",
    "le chaos se changera en ordre",
    "une étoile pleurera du sang",
    "les rires se feront hurlements",
    "une épée scintillera dans l'obscurité",
    "les ténèbres envelopperont tout",
    "le soleil se couchera pour toujours",
    "les ombres parleront",
    "un dragon rugira au sommet",
    "les portes de l'oubli s'ouvriront",
    "les eaux se tacheront de noir",
    "une lumière viendra de l'abîme",
    "les roches danseront",
    "une ombre s'étendra sur les terres",
    "les feuilles deviendront de l'argent",
    "un ange tombera des cieux",
    "une mélodie jouera sans fin",
    "les rivières seront asséchées",
    "le vent soufflera sans bruit",
    "un cœur battra sans écho",
    "les rêves seront brisés",
    "les ténèbres dévoreront le monde",
    "les montagnes s'effondreront",
    "une voix murmura dans les ténèbres",
    "les brumes cacheront tout",
    "un oiseau chantera seul",
    "le vent ne soufflera plus",
    "une lumière apparaîtra",
    "les feuilles tomberont en silence",
    "le silence sera brisé",
    "les vagues s'écraseront sans bruit",
    "les larmes deviendront de la pluie",
    "le cri de l'aube réveillera",
    "le cor sonnera dans le silence",
    "une étoile brillante tombera",
    "une rivière glacée coulera",
    "les yeux se fermeront",
    "une flamme s'éteindra",
    "les ténèbres étoufferont",
    "les mots seront perdus",
    "les voix s'élèveront",
    "un secret sera murmuré",
    "les yeux pleureront de joie",
    "les mains s'élèveront",
    "une ombre couvrira tout",
    "les portes s'ouvriront",
    "le vent chantera",
    "les larmes de la terre couleront",
    "le silence criera",
    "un murmure résonnera",
    "un écho se fera entendre",
    "les mains frapperont",
    "les yeux brilleront",
];

const fin = [
    "dans la lumière de l'aube.",
    "sous le regard des dieux.",
    "entre les mondes.",
    "au bord de la rivière de l'oubli.",
    "sous un ciel de sang.",
    "dans les ombres profondes.",
    "au crépuscule des temps.",
    "au milieu des flammes.",
    "à la fin d'un cycle.",
    "au commencement d'un nouveau monde.",
    "dans la lumière de l'aube.",
    "sous le regard des dieux.",
    "entre les mondes.",
    "au bord de la rivière de l'oubli.",
    "sous un ciel de sang.",
    "dans les ombres profondes.",
    "au crépuscule des temps.",
    "au milieu des flammes.",
    "à la fin d'un cycle.",
    "au commencement d'un nouveau monde.",
    "à l'aube d'une nouvelle ère.",
    "dans les brumes éternelles.",
    "dans un rêve sans fin.",
    "au sommet d'une montagne solitaire.",
    "au fond d'un océan noir.",
    "sous la lune rouge.",
    "dans les ruines du passé.",
    "au-delà de la grande mer.",
    "aux confins du monde.",
    "dans le silence des étoiles.",
    "à la fin de toutes choses.",
    "au bout du chemin oublié.",
    "dans le cœur de la tempête.",
    "sous les arbres millénaires.",
    "dans l'ombre des anciens.",
    "dans les vents hurlants.",
    "à l'aube des anciens temps.",
    "dans le murmure du vent.",
    "dans l'ombre des montagnes.",
    "au pied du grand arbre.",
    "dans les brumes de l'Est.",
    "dans le dernier cri de l'aube.",
    "sous le voile de la nuit.",
    "dans le souffle du dragon.",
    "dans les cendres du monde.",
    "dans la glace éternelle.",
    "à l'ombre des cyprès.",
    "dans le souffle des dieux.",
    "sous l'étoile sans nom.",
    "dans le chant des étoiles.",
    "au seuil du Tartare.",
    "à l'ombre des collines.",
    "dans l'obscurité éternelle.",
    "dans le dernier souffle.",
    "au-delà de la lumière.",
    "à l'ombre de l'ancien royaume.",
    "dans le silence de l'abîme.",
    "à la lisière des rêves.",
    "dans le cœur de la terre.",
    "sous les feux du crépuscule.",
    "au bout de la rivière sombre.",
    "dans l'étreinte de l'hiver.",
    "dans le chant des sirènes.",
    "sous la mer en furie.",
    "dans le grondement du tonnerre.",
    "à la fin du grand voyage.",
    "sous la tempête qui gronde.",
    "dans l'étreinte de la nuit.",
    "à l'aube de la fin.",
    "dans le dernier cri de la lumière.",
    "dans la lumière mourante.",
    "sous le ciel vide.",
    "à la fin des rêves.",
    "dans le murmure des feuilles.",
    "dans la nuit sans étoiles.",
    "dans l'ombre des cieux.",
    "au cœur de la tempête.",
    "dans le murmure de l'eau.",
    "à l'ombre du dernier roi.",
    "dans le chant des ancêtres.",
    "dans le dernier souffle de l'espoir.",
    "sous les pierres éternelles.",
    "au bout de la longue nuit.",
    "dans le dernier soupir.",
    "sous le regard du serpent.",
    "dans le dernier rayon de soleil.",
    "à l'aube d'un jour éternel.",
    "dans le murmure des morts.",
    "à l'ombre de la tour.",
    "au bout de la mer infinie.",
    "dans le dernier battement de cœur.",
    "au sommet du monde.",
    "dans l'étreinte de l'obscurité.",
    "au fond de la grotte.",
    "sous le ciel sans fin.",
    "à l'ombre du grand chêne.",
    "dans les eaux sombres.",
    "dans le dernier rayon d'une étoile.",
    "à la fin de toutes routes.",
    "dans le cri du vent.",
    "au pied du mur éternel.",
    "dans les murmures du passé.",
    "dans l'ombre des tours noires.",
    "dans le souffle des ancêtres.",
    "dans les abysses sans fond.",
    "au-delà des montagnes glacées.",
    "dans le silence des tombes.",
    "dans le dernier chant de l'orage.",
    "à l'ombre de la grande muraille.",
    "au-delà du dernier horizon.",
    "dans l'obscurité sans fin.",
    "au bout de la rivière d'or.",
    "dans la dernière lueur du jour.",
    "à l'ombre des flammes.",
    "dans la clarté d'une nuit sans lune.",
    "dans le silence de la plaine.",
    "dans les vagues rugissantes.",
    "sous le voile de l'aube.",
    "dans les ombres mouvantes.",
    "dans le dernier cri de la nuit.",
    "au cœur des ténèbres.",
    "dans le bruissement des feuilles mortes.",
    "sous le souffle glacé de l'hiver.",
    "à l'ombre du pin solitaire.",
    "dans la lueur des étoiles mourantes.",
    "dans le souffle de l'abîme.",
    "au bord du précipice éternel.",
    "dans le dernier souffle de l'hiver.",
    "dans l'ombre des fantômes.",
    "à l'aube du crépuscule.",
    "dans les cris du vent.",
    "dans le dernier murmure du vent.",
    "au seuil de l'autre monde.",
    "dans le fracas des cieux.",
    "au bord de la rivière gelée.",
    "dans le cri de la mer.",
    "à l'ombre des murailles.",
    "dans le rugissement des bêtes.",
    "au cœur du grand désert.",
    "dans le dernier souffle de la tempête.",
    "sous les cendres du temps.",
    "à l'ombre des cieux en feu.",
    "dans le cri du cor.",
    "dans le dernier écho des collines.",
    "à l'ombre de l'ancien trône.",
    "dans le murmure des rivières.",
    "au bout du chemin brisé.",
    "dans le dernier soupir de la mer.",
    "à l'ombre des ténèbres.",
    "dans la lueur de l'étoile unique.",
    "au bord de l'abîme sans fond.",
    "dans les ruines du passé.",
    "sous les vagues déchaînées.",
    "à l'ombre de la grande ombre.",
    "dans le dernier rayon de l'aube.",
    "dans le silence de la terre.",
    "dans les cris des âmes perdues.",
    "au bout de la longue route.",
    "à l'ombre du grand temple.",
    "dans le silence du crépuscule.",
    "au pied de l'arbre millénaire.",
    "dans les méandres du temps.",
    "au cœur de la forêt sombre.",
    "dans le murmure des ancêtres.",
    "dans le dernier battement du cœur.",
    "dans le souffle des vents.",
    "sous le regard de la grande étoile.",
    "au bord du monde.",
    "dans le cri de la lumière.",
    "à l'aube de l'infini.",
    "dans le dernier soupir de la nuit.",
    "dans le grondement de l'orage.",
    "dans le dernier battement du monde.",
    "sous les vagues infinies.",
    "à l'ombre des montagnes.",
    "dans le chant des ombres.",
    "au bord de l'éternité.",
    "dans le murmure des vagues.",
    "dans le dernier cri de l'abîme.",
    "à l'ombre des collines sacrées.",
    "dans la lumière mourante.",
    "dans l'étreinte du silence.",
    "au sommet de la montagne.",
    "dans le dernier souffle du vent.",
    "dans les ténèbres profondes.",
    "au-delà des mers gelées.",
    "dans le murmure de la rivière.",
    "dans l'ombre des cyprès.",
    "dans le cri du faucon.",
    "au bord du grand lac.",
    "dans le rugissement des dieux.",
    "au bout de la longue nuit.",
    "dans les méandres du rêve.",
    "à l'ombre des montagnes glacées.",
    "dans le dernier murmure de l'orage.",
    "dans l'ombre de l'antique forêt.",
    "dans le souffle des étoiles.",
    "sous le regard des anges.",
    "au bout de la mer noire.",
    "à l'aube de l'éternité.",
    "dans les ruines des rêves brisés.",
    "dans le murmure des feuilles mortes.",
    "à l'ombre de l'aigle.",
    "dans le dernier battement de l'univers.",
    "au bord de l'inconnu.",
    "dans le cri des âmes perdues.",
    "dans le silence des ombres.",
    "dans les larmes du ciel.",
    "au-delà du monde connu.",
    "dans la lumière de la fin des temps.",
];

// Variable pour compter le nombre de prophéties annoncées
let compteurProphéties = 50000;

// Fonction pour générer une prophétie aléatoire
function genererProphétie() {
    const debutAleatoire = debut[Math.floor(Math.random() * debut.length)];
    const milieuAleatoire = milieu[Math.floor(Math.random() * milieu.length)];
    const finAleatoire = fin[Math.floor(Math.random() * fin.length)];
    return `${debutAleatoire}, ${milieuAleatoire} ${finAleatoire}`;
}

// Fonction pour afficher le bouton de la prophétie après la soumission du formulaire
function afficherBouton() {
    const nom = document.getElementById('nom').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value; // Récupère l'heure de naissance
    const lieu = document.getElementById('lieu').value;

    if (nom && date && heure && lieu) {
        document.getElementById('formulaire').style.display = 'none'; // Cache le formulaire
        document.getElementById('boutonProphetie').style.display = 'block'; // Affiche le bouton
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}

// Fonction pour afficher une prophétie aléatoire après un chargement
function afficherProphetie() {
    const nomUtilisateur = document.getElementById('nom').value; // Récupère le nom de l'utilisateur
    document.getElementById('btn').style.display = 'none'; // Cache le bouton
    document.getElementById('chargement').style.display = 'block'; // Affiche le chargement

    // Simule un délai de chargement de 3 secondes
    setTimeout(function () {
        const prophetieAleatoire = genererProphétie(); // Génère une prophétie aléatoire

        // Modifie le titre pour afficher "Voici votre prophétie, [nom]"
        document.querySelector('h1').textContent = `Voici votre prophétie, ${nomUtilisateur}`;

        document.getElementById('chargement').style.display = 'none'; // Cache le chargement
        document.getElementById('prophetie').textContent = prophetieAleatoire; // Affiche la prophétie

        // Augmente le compteur de prophéties et met à jour le texte
        compteurProphéties++;
        document.getElementById('compteur').textContent = `Plus de ${compteurProphéties.toLocaleString()} prophéties annoncées`;
    }, 3000);
}