function ageToString(rawAge) {
	var ageString = '';
	var firstDigit = Math.floor(rawAge / 10);
	var secondDigit = rawAge % 10;
	
	switch (secondDigit) {
		case 1: ageString += 'one-and-';
				break;
		case 2: ageString += 'two-and-';
				break;
		case 3: ageString += 'three-and-';
				break;
		case 4: ageString += 'four-and-';
				break;
		case 5: ageString += 'five-and-';
				break;
		case 6: ageString += 'six-and-';
				break;
		case 7: ageString += 'seven-and-';
				break;
		case 8: ageString += 'eight-and-';
				break;
		case 9: ageString += 'nine-and-';
				break;
		default: break;
	}
	switch (firstDigit) {
		case 1: ageString += 'ten';
				break;
		case 2: ageString += 'twenty';
				break;
		case 3: ageString += 'thirty';
				break;
		case 4: ageString += 'forty';
				break;
		case 5: ageString += 'fifty';
				break;
		case 6: ageString += 'sixty';
				break;
		case 7: ageString += 'seventy';
				break;
		case 8: ageString += 'eighty';
				break;
		case 9: ageString += 'ninety';
				break;
		default: break;
	}
	
	return ageString;
}

function Character(gender, region, house) {

	//select gender
	if (gender === 'Random') {
		if (Math.floor(Math.random() * 2) == 0) {
			this.gender = 'Male';
		} else {
			this.gender = 'Female';
		}
	} else {
		this.gender = gender;
	}
	
	//select region
	if (region === 'Random') {
		this.region = regions[Math.floor(Math.random() * regions.length)];
	}
	else {
		this.region = region;
	}
	
	//select house
	if (house === 'Random') {
		var houseOptions = houseNames[this.region]();
		this.house = houseOptions[Math.floor(Math.random() * houseOptions.length)];
	}
	else {
		this.house = house;
	}
	
	//select name
	var firstNameChoices = firstNames[this.region](this.gender);
	
	this.name = firstNameChoices[Math.floor(Math.random() * firstNameChoices.length)] + ' ' + this.house;
	
	//select age
	this.rawAge = this.getAge();
	this.ageString = ageToString(this.rawAge);
	
	var attributes = this.getAttributes();
	this.attribute = attributes[Math.floor(Math.random() * attributes.length)];
	
	var features = this.getFeatures();
	this.feature = features[Math.floor(Math.random() * features.length)];
	
	this.hair = this.getHair();
}

Character.prototype.getName = function() {return this.name}
Character.prototype.getDesc = function() {
	//Format: A (attribute) (gender) of (age), with (hair) and (feature).
	if (this.name === 'Jon Snow') return 'Knows nothing.'

	var desc = 'A ' + this.attribute + ' ';
	
	if (this.gender === 'Male') {
		if (this.rawAge >= 16) {
			desc += 'man';
		} else {
			desc += 'boy';
		}
	} else {
		if (this.rawAge >= 16) {
			desc += 'woman';
		} else {
			desc += 'girl';
		}
	}
	
	desc += ' of ' + this.ageString + ', with ' + this.hair + ' and ' + this.feature + '.';
	
	return desc;
};
Character.prototype.getAge = function(){
	//30% 13-25, 60% 26-60, 10% 61-99
	var ageRoll = Math.random();
	var age;
	
	
	if (ageRoll < 0.3) {
		age = Math.floor(Math.random() * 13) + 13;
	} else if (ageRoll < 0.6) {
		age = Math.floor(Math.random() * 35) + 26;
	} else {
		age = Math.floor(Math.random() * 39) + 61;
	}
	
	return age;
};
Character.prototype.getAttributes = function(){
	var attributes = ['tall', 'short', 'round', 'squat', 'fleshy',
					  'thin', 'frog-faced', 'fox-faced', 'wiry', 'portly',
					  'kindly', 'stern-faced', 'muscular', 'nervous', 'comely',
					  'quick-witted'];
	if (this.gender === 'Male') {
		attributes.push('handsome', 'broad-shouldered', 'barrel-chested', 'weak-chinned', 'burly', 'hard-bitten', 'grizzled', 'gruff');
	} else {
		attributes.push('pretty', 'lithe', 'willowy', 'homely');
	}
	return attributes;
};
Character.prototype.getFeatures = function(){
	var features = ['a squashed nose', 'a sharp nose', 'a bulbous nose',
					'a scar across one cheek', 'a reputation for promiscuity',
					'a soft voice', 'a thin voice', 'a high voice',
					'teeth gone red from sourleaf', 'green eyes', 'brown eyes',
					'blue eyes', 'grey eyes', 'narrow eyes', 'bushy eyebrows',
					'a reputation for violence', 'a voice like honey poured over thunder',
					'a dimpled chin', 'a snub nose', 'droopy eyes'];
	if (this.gender === 'Male') {
		features.push('a bushy beard', 'a close-cropped beard', 'a wiry beard',
				      'a thin mustache', 'a thick mustache', 'a pointed beard',
					  'a booming voice', 'a deep voice');
	}
	else {
		features.push('a freckled face');
	}
	if (this.age >= 50) {
		features.push('a scarred face', 'a deeply-lined face', 'a wrinkled face');
	}
	if (this.house == 'Targaryen') {
		features.push('purple eyes', 'purple eyes', 'purple eyes', 'purple eyes');
	}
	
	return features;
};
Character.prototype.getHair = function(){
	var hairColors = [];
	if (this.house === 'Targaryen' || this.house === 'Dayne') {
		hairColors.push('silver-gold', 'silver-gold', 'silver-gold');
	}
	if (this.gender === 'Male' && this.rawAge >= 35) {
		hairColors.push('salt-and-pepper');
	}
	if (this.rawAge >= 45) {
		hairColors.push('grey', 'white');
	} else {
		hairColors.push('black', 'brown', 'auburn', 'fiery red', 'blond', 'straw-colored', 'flaxen');
		if (this.house === 'Lannister') {
			hairColors.push('golden', 'golden', 'golden', 'golden', 'golden', 'golden');
		}
	}
	
	var hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
	
	var hairStyles = ['straight ' + hairColor + ' hair',
					  'curly ' + hairColor + ' hair',
					  'wavy ' + hairColor + ' hair',
					  'short ' + hairColor + ' hair',
					  'long ' + hairColor + ' hair',
					  'unruly ' + hairColor + ' hair'];
	if (this.gender === 'Male') {
		hairStyles.push('a mop of ' + hairColor + ' hair',
						'a shock of ' + hairColor + ' hair',
						'a bald head');
		if (this.rawAge >= 40) {
			hairStyles.push('balding hair');
		}	  
	} else {
		hairStyles.push(hairColor + ' hair that falls to her shoulders',
						hairColor + ' hair that falls to her waist');
	}
	if (this.house === 'Lannister' && this.rawAge <= 45) {
		hairStyles.push('a mop of golden curls', 'golden curls',
						'a mop of golden curls', 'golden curls',
						'a mop of golden curls', 'golden curls');
	}
	
	var hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
	return hairStyle;
	return 'brown hair';
};