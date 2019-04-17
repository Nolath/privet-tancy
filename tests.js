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
describe("Эльф должен реагировать на особые камни", function() {
	it("спессартин: поднять всё", function(done) {
		let gem = "Спессартин";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		})
	});
	it("кварц: поднять и опустить руки", function(done) {
		let gem = "Кварц";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
	it("родолит: поднять правые руку и ногу", function(done) {
		let gem = "Родолит";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		})
	});
	it("андалузит: опустить руки и выставить ноги", function(done) {
		let gem = "Андалузит";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		})
	});
	it("гиацинт: собрать ноги и поднять руки", function(done) {
		let gem = "Гиацинт";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});
	it("танзанит: ускориться в два раза", function(done) {
		let gem = "Танзанит";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.danceSpeed).toEqual(5);
			done();
		})
	});
	it("топаз: замедлиться в два раза", function(done) {
		let gem = "Топаз";
		let elf = {
			favouriteGems: [],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.danceSpeed).toEqual(20);
			done();
		})
	});
});
describe("Эльф должен нестандартно реагировать на особые камни", function() {
	it("спессартин: поднять только руки", function(done) {
		let gem = "Спессартин";
		let elf = {
			favouriteGems: ["Спессартин"],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});
	it("кварц: поднять руки", function(done) {
		let gem = "Кварц";
		let elf = {
			favouriteGems: ["Кварц"],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});
	it("родолит: опустить руки", function(done) {
		let gem = "Родолит";
		let elf = {
			favouriteGems: [],
			dislikedGems: ["Родолит"],
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		})
	});
	it("танзанит: опустить руки и не ускоряться", function(done) {
		let gem = "Танзанит";
		let elf = {
			favouriteGems: [],
			dislikedGems: ["Танзанит"],
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			expect(elf.danceSpeed).toEqual(10);
			done();
		})
	});
	it("топаз: поднять руки и не замедляться", function(done) {
		let gem = "Топаз";
		let elf = {
			favouriteGems: ["Топаз"],
			dislikedGems: [],
			danceSpeed: 10,
			stance: [1, 0, 1, 0],
		}

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 0]);
			expect(elf.danceSpeed).toEqual(10);
			done();
		})
	});
});