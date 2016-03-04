

describe("computerTurn", function() {
		
	it("should return 'rock' if number is 0.25", function() {
		var result = computerTurn(0.25);
		expect(result).toEqual("rock");
		});

	it("should return 'paper' if number is 0.50", function() {
		var result = computerTurn(0.50);
		expect(result).toEqual("paper");
	});

	it("should return 'scissors' if number is 0.75", function() {
		var result = computerTurn(0.75);
		expect(result).toEqual("scissors");
	});
});


describe("shoot", function() {
		
	it("should return 'tie' if selections are the same", function() {
		var result = shoot(rock, rock);
		expect(result).toEqual("tie");
	});

	it("should return 'win' if user has rock and computer has scissors ", function() {
		var result = shoot(rock, scissors);
		expect(result).toEqual("win");
	});

	it("should return 'lose' if user has rock and computer has paper", function() {
		var result = shoot(rock, paper) ;
		expect(result).toEqual("lose");
	});

	it("should return 'win' if user has paper and computer has rock", function() {
		var result = shoot(paper, rock) ;
		expect(result).toEqual("win");
	});

	it("should return 'lose' if user has paper and computer has scissors", function() {
		var result = shoot(paper, scissors);
		expect(result).toEqual("lose");
	});

	it("should return 'win' if user has scissors and computer has paper", function() {
		var result = shoot(scissors, paper);
		expect(result).toEqual("win");
	});

	it("should return 'lose' if user has scissors and computer has rock", function() {
		var result = shoot(scissors, rock);
		expect(result).toEqual("lose");
	});

});



