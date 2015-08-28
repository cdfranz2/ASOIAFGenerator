var houseNames = {
	'North': function() {
		return ['Stark', 'Bolton', 'Karstark', 'Glover', 'Mormont',
				'Manderly', 'Umber', 'Tallhart', 'Cerwyn', 'Reed',
				'Cassel', 'Poole', 'Flint', 'Snow'];
	},
	'Westerlands': function() {
		return ['Lannister', 'Clegane', 'Crakehall', 'Marbrand', 'Plumm',
				'Swyft', 'Westerling', 'Spicer', 'Payne', 'Lorch',
				'Peckledon', 'Yarwyck', 'Brax', 'Hill'];
	},
	'Iron Islands': function() {
		return ['Greyjoy', 'Botley', 'Drumm', 'Harlaw', 'Saltcliffe',
				'Codd', 'Goodbrother', 'Stonetree', 'Sunderly', 'Weaver',
				'Orkwood', 'Blacktyde', 'Farwynd',  'Pyke'];
	},
	'Riverlands': function() {
		return ['Tully', 'Blackwood', 'Bracken', 'Mallister', 'Frey',
				'Smallwood', 'Whent', 'Butterwell', 'Darry', 'Mooton',
				'Piper', 'Ryger', 'Grell', 'Rivers'];
	},
	'Vale': function() {
		return ['Arryn', 'Baelish', 'Corbray', 'Hardyng', 'Hunter',
				'Coldwater', 'Moore', 'Royce', 'Tollett', 'Waynwood',
				'Egen', 'Grafton', 'Belmore', 'Stone'];
	},
	'Stormlands': function() {
		return ['Baratheon', 'Wagstaff', 'Connington', 'Dondarrion', 'Estermont',
				'Penrose', 'Seaworth', 'Selmy', 'Swann', 'Tarth',
				'Trant', 'Wagstaff', 'Grandison', 'Storm'];
	},
	'Crownlands': function() {
		return ['Targaryen', 'Bywater', 'Celtigar', 'Chyttering', 'Hollard',
				'Stokeworth', 'Kettleblack', 'Manning', 'Rosby', 'Rykker',
				'Thorne', 'Slynt', 'Velaryon', 'Waters'];
	},
	'Reach': function() {
		return ['Tyrell', 'Tarly', 'Redwyne', 'Bulwer', 'Merryweather',
				'Florent', 'Fossoway', 'Hightower', 'Ashford', 'Rowan',
				'Oakheart', 'Beesbury', 'Mullendore', 'Flowers'];
	},
	'Dorne': function() {
		return ['Martell', 'Blackmont', 'Dayne', 'Jordayne', 'Dalt',
				'Yronwood', 'Vaith', 'Santagar', 'Qorgyle', 'Fowler',
				'Allyrion', 'Manwoody', 'Dalt', 'Sand'];
	}
}
	
var firstNames = {
	'North': function(gender) {
		if (gender === 'Male') {
			return ['Albett', 'Alyn', 'Bael', 'Domeric', 'Roose',
					'Borcas', 'Bran', 'Brandon', 'Brandon', 'Brandon',
					'Jory', 'Martyn', 'Rodrik', 'Cayn', 'Kyle',
					'Desmond', 'Roderick', 'Donnel', 'Gage', 'Gavin',
					'Galbart', 'Gawen', 'Robett', 'Grenn', 'Ronnel',
					'Harwin', 'Hobb', 'Hodor', 'Hullen', 'Jarl',
					'Jorquen', 'Eddard', 'Harrion', 'Rickard', 'Torrhen',
					'Mallador', 'Bowen', 'Jeor', 'Jorah', 'Veyon',
					'Howland', 'Jojen', 'Wyman', 'Ragwyle', 'Jon',
					'Benjen', 'Cregan', 'Dorren', 'Ramsay', 'Robb',
					'Edrick', 'Jonos', 'Walton', 'Benfred', 'Leobald',
					'Tormund', 'Toregg', 'Hother', 'Mors', 'Will',
					'Wendel', 'Wylis', 'Dickon', 'Rickard', 'Rickon'];
		} else {
			return ['Bethany', 'Jonelle', 'Dalla', 'Barbrey', 'Lyessa',
					'Gilly', 'Harma', 'Holly', 'Donella', 'Jyana',
					'Kyra', 'Wylla', 'Wynafryd', 'Maris', 'Alysane',
					'Lyanna', 'Jorelle', 'Dacey', 'Maege', 'Myranda',
					'Osha', 'Palla', 'Meera', 'Ros', 'Sansa',
					'Arya', 'Eddara', 'Val', 'Ygritte', 'Jeyne'];
		}
	},
	'Westerlands': function(gender) {
		if (gender === 'Male') {
			return ['Robert', 'Rupert', 'Tytos', 'Herrock', 'Cedric',
					'Emrick', 'Burton', 'Chiswyck', 'Sandor', 'Gregor',
					'Lyle', 'Merlon', 'Roland', 'Sumner', 'Tybolt',
					'Dunsen', 'Garth', 'Preston', 'Melara', 'Damion',
					'Damon', 'Jaime', 'Jason', 'Lancel', 'Loren',
					'Lucion', 'Martyn', 'Stafford', 'Theomore', 'Tommen',
					'Tywin', 'Leo', 'Lorent', 'Lyonel', 'Lewys',
					'Addam', 'Damon', 'Denys', 'Ilyn', 'Podrick',
					'Josmyn', 'Dennis', 'Harwyn', 'Ossifer', 'Peter',
					'Harys', 'Humfrey', 'Othell', 'Raynald', 'Rollam',
					'Joffrey', 'Tommen', 'Tyrion'];
		} else {
			return ['Amarei', 'Melesa', 'Shiera', 'Joy', 'Genna',
					'Rosamund', 'Margot', 'Myrielle', 'Joanna', 'Lanna',
					'Leonella', 'Jeyne', 'Dorna', 'Shierle', 'Ellyn',
					'Tysha', 'Eleyna', 'Cerenna', 'Cersei', 'Darlessa',
					'Tyta', 'Myrcella'];
		}
	},
	'Iron Islands': function(gender) {
		if (gender === 'Male') {
			return ['Beron', 'Bennarion', 'Harlon', 'Harren', 'Quellon',
					'Sargon', 'Sawane', 'Tristifer', 'Vickon', 'Cerrick',
					'Lucas', 'Eldred', 'Dagmer', 'Dale', 'Dunstan',
					'Hilmar', 'Roryn', 'Ygon', 'Gelmarr', 'Gorold',
					'Gormond', 'Norne', 'Torgon', 'Urragon', 'Urron',
					'Balon', 'Dagon', 'Donel', 'Dalton', 'Maron',
					'Quellon', 'Quenton', 'Rodrik', 'Theon', 'Urrigon',
					'Victarion', 'Euron', 'Harl', 'Hotho', 'Harras',
					'Erik', 'Thormor', 'Urek', 'Kenned', 'Kromm',
					'Manfryd', 'Lorren', 'Nute', 'Rolfe', 'Roggon',
					'Stygg', 'Todric', 'Tymor', 'Ulf', 'Wex'];
		}
		else {
			return ['Esgred', 'Gwin', 'Gysella', 'Asha', 'Alannys',
					'Gwynesse', 'Helya', 'Meldred', 'Yara'];
		}
	},
	'Riverlands': function(gender) {
		if (gender === 'Male') {
			return ['Arlan', 'Beck', 'Bennifer', 'Brynden', 'Hoster',
					'Lucas', 'Robert', 'Roger', 'Jonos', 'Otho',
					'Clement', 'Willem', 'Raymun', 'Demon', 'Morgan',
					'Alyn', 'Benfrey', 'Walder', 'Walder', 'Walder',
					'Walder', 'Danwell', 'Edwyn', 'Elmar', 'Emmon',
					'Hosteen', 'Lothar', 'Luceon', 'Lyonel', 'Mathis',
					'Osmund', 'Petyr', 'Stevron', 'Tytos', 'Tywin',
					'Walton', 'Waltyr', 'Whalen', 'Lymond', 'Garibald',
					'Jon', 'Jack', 'Joth', 'Joss'];
		} else {
			return ['Bella', 'Bessa', 'Bethany', 'Alysanne', 'Jayne',
					'Jeyne', 'Mariya', 'Darla', 'Amerei', 'Cersei',
					'Cynthea', 'Della', 'Jyanna', 'Merianne', 'Leana',
					'Roslin', 'Maegelle', 'Marissa', 'Serra', 'Tyta',
					'Shirei', 'Tysane', 'Walda', 'Walda', 'Walda',
					'Leslyn', 'Bellena', 'Masha', 'Lysa', 'Catelyn'];
		}
	},
	'Vale': function(gender) {
		if (gender == 'Male') {
			return ['Denys', 'Jon', 'Robert', 'Ronnel', 'Petyr',
					'Benedar', 'Godric', 'Lyn', 'Lyonel', 'Lucas',
					'Vardis', 'Galt', 'Gerold', 'Gyles', 'Gunthor',
					'Harrold', 'Humfrey', 'Gilwood', 'Harlan', 'Lucos',
					'Mandon', 'Andar', 'Yohn', 'Robar', 'Nestor',
					'Samwell', 'Orson', 'Timett', 'Edmund', 'Donnel',
					'Robin'];
		} else {
			return ['Alyssa', 'Jeyne', 'Rowena', 'Sharra', 'Becca',
					'Chella', 'Gella', 'Deana', 'Janyce', 'Kella',
					'Ysilla', 'Mya', 'Anya', 'Marsella'];
		}
	},
	'Stormlands': function(gender) {
		if (gender === 'Male') {
			return ['Anguy', 'Borros', 'Lyonel', 'Robert', 'Renly',
					'Stannis', 'Steffon', 'Herbert', 'Ralph', 'Bryce',
					'Bryen', 'Armond', 'Jon', 'Arrec', 'Sebastion',
					'Andrew', 'Eldon', 'Gunthor', 'Willis', 'Hugh',
					'Bonifer', 'Richard', 'Lester', 'Donal', 'Matthos',
					'Barristan', 'Arstan', 'Cedrik', 'Edrik', 'Rolland',
					'Ronald', 'Balon', 'Byron', 'Manfred', 'Quentyn',
					'Simon', 'Selwyn', 'Meryn', 'Criston', 'Ormund',
					'Willem', 'Casper', 'Humfrey', 'Joffrey', 'Tommen',
					'Davos', 'Dale'];
		} else {
			return ['Argella', 'Shyra', 'Elenei', 'Cassana', 'Marya',
					'Corenna', 'Cyrenna', 'Jeyne', 'Johanna', 'Ravella',
					'Brienne', 'Arianne', 'Alysanne', 'Tyana', 'Shireen',
					'Myrcella'];
		}
	},
	'Crownlands': function(gender) {
		if (gender === 'Male') {
			return ['Joffrey', 'Tommen', 'Aegon', 'Aemon', 'Daemon',
					'Daeron', 'Boros', 'Alfred', 'Bennard', 'Lothor',
					'Balman', 'Jacelyn', 'Clarence', 'Rupert', 'Harrold',
					'Steffon', 'Donnel', 'Duncan', 'Glendon', 'Garth',
					'Gwayne', 'Gendry', 'Elwood', 'Dontos', 'Symon',
					'Osfryd', 'Osmund', 'Osney', 'Luthor', 'Lommy',
					'Merrel', 'Robert', 'Davos', 'Janos', 'Morros',
					'Clayton', 'Aerys', 'Baelor', 'Jaehaerys', 'Maegor',
					'Maekar', 'Maelor', 'Viserys', 'Rhaegar'];
		} else {
			return ['Daenerys', 'Jaehaera', 'Baela', 'Rhaena', 'Rhaenyra',
					'Visenya', 'Rhaenys', 'Lollys', 'Tanda', 'Bethany',
					'Shiera', 'Falena', 'Hallyne', 'Armena', 'Myrcella',
					'Meredyth', 'Donyse', 'Mary'];
		}
	},
	'Reach': function(gender) {
		if (gender === 'Male') {
			return ['Arthur', 'Marq', 'Androw', 'Robert', 'Alan',
					'Ben', 'Bertram', 'Hugh', 'Lyman', 'Warryn',
					'Leo', 'Buford', 'Cleyton', 'Clifford', 'Owen',
					'Branston', 'Emmon', 'Dareon', 'Ebrose', 'Alester',
					'Colin', 'Erren', 'Omer', 'Byren', 'Garrett',
					'Garse', 'Jon', 'Raymun', 'Steffon', 'Tanton',
					'Garth', 'Garse', 'Gyles', 'Guthor', 'Glendon',
					'Gerold', 'Leyton', 'Ormund', 'Otto', 'Hyle',
					'Alyn', 'Lucas', 'Mark', 'Martyn', 'Hosman',
					'Titus', 'Hobber', 'Ryam', 'Paxter', 'Mathis',
					'Thaddeus', 'Randyll', 'Samwell', 'Garlan', 'Loras',
					'Lorent', 'Lyonel', 'Normund', 'Willas', 'Arys'];
		} else {
			return ['Aubrey', 'Jeyne', 'Alysanne', 'Melara', 'Emma',
					'Melessa', 'Rhea', 'Selyse', 'Leonette', 'Alerie',
					'Leyla', 'Lysa', 'Bethany', 'Rhonda', 'Lia',
					'Talla', 'Alla', 'Janna', 'Margaery', 'Victaria'];
		}
	},
	'Dorne': function(gender) {
		if (gender == 'Male') {
			return ['Ryon', 'Perros', 'Andrey', 'Arthur', 'Edric',
					'Gerold', 'Ulrick', 'Gerris', 'Franklyn', 'Tremond',
					'Trebor', 'Dagos', 'Myles', 'Doran', 'Lewyn',
					'Manfrey', 'Mors', 'Oberyn', 'Olyvar', 'Quentyn',
					'Arron', 'Gulian', 'Symon', 'Aron', 'Garibald',
					'Willam', 'Daeron', 'Anders'];
		} else {
			return ['Caleotte', 'Larra', 'Jynessa', 'Ashara', 'Allyria',
					'Jeyne', 'Jennelyn', 'Myria', 'Alysa', 'Jayne',
					'Mariya', 'Arianne', 'Elia', 'Trystane', 'Dorea',
					'Ellaria', 'Loreza', 'Obara', 'Obella', 'Sarella',
					'Tyene', 'Tanselle', 'Nymella', 'Teora', 'Valena',
					'Casella', 'Gwyneth', 'Ynys', 'Ysilla'];
		}
	}
}

var regions = ['North', 'Westerlands', 'Iron Islands', 'Riverlands', 'Vale', 'Stormlands', 'Crownlands', 'Reach', 'Dorne'];