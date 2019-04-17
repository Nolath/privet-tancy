describe("Эльф должен делать простые движения", function() {
	it("поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		})
	});

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			done();
		})
	});
	it("выставить левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftFootUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		})
	});

	it("выставить правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightFootUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 1]);
			done();
		})
	});
	it("опустить левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 0, 0, 0],
		}

		leftHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("опустить правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 0, 0],
		}

		rightHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
	it("убрать левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 0],
		}

		leftFootDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("убрать правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 1],
		}

		rightFootDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
});
describe("Эльф должен делать сложные движения", function() {
	it("поднять руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		handsUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});

	it("опустить руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
		}

		handsDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
	it("выставить ноги", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		feetUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		})
	});

	it("убрать ноги", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
		}

		feetDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
	it("поднять левые части тела", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftsUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 1, 0]);
			done();
		})
	});

	it("опустить левые части тела", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		leftsDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
	it("поднять правые части тела", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightsUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 1]);
			done();
		})
	});

	it("опустить правые части тела", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 0, 1],
		}

		rightsDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
});
describe("Эльф должен реагировать на камни", function() {
	it("поднять руки если камень нравится", function(done) {
		let gem = "Аметист";
		let elf = {
			favouriteGems: ["Аметист"],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});
	it("опустить руки если камень не нравится", function(done) {
		let gem = "Аметист";
		let elf = {
			favouriteGems: [],
			dislikedGems: ["Аметист"],
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
	it("сделать что-то если пофиг на обычный камень", function(done) {
		let gem = "Гужавинбомбит";
		let currentStance = [0, 0, 0, 0];
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}
		
		moshpit(elf).then((elf) => {
			expect(elf.stance).toBeTruthy();
			done();
		})
	});
});
