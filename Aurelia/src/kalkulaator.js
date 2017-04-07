import { Line } from './line';

export class Kalkulaator {
	constructor() {
		this.lines = [];
		this.expected = {
			outcome: 0,
			income: 0,
			remainder: 0
		};

		this.actual = {
			outcome: 0,
			income: 0,
			remainder: 0
		};
		this.initFields();
	}

	initFields() {
		this.name = '';
		this.expectedSum = '';
		this.actualSum = '';
		this.type = 'Kulu';
	}

	addLine() {
		const line = new Line(this.name, parseFloat(this.expectedSum), parseFloat(this.actualSum), this.type);
		this.lines.push(line);
		this.initFields();
		this.calculate(line);
	}

	removeLine(line) {
		const index = this.lines.indexOf(line);
		if (index !== -1) {
			this.lines.splice(index, 1);
			line.expectedSum = -line.expectedSum;
			line.actualSum = -line.actualSum;
			this.calculate(line);
		}
	}

	calculate(line) {
		if (line.type === 'Kulu') {
			this.expected.outcome += line.expectedSum;
			this.actual.outcome += line.actualSum;
		} else {
			this.expected.income += line.expectedSum;
			this.actual.income += line.actualSum;
		}
		this.expected.remainder = this.expected.income - this.expected.outcome;
		this.actual.remainder = this.actual.income - this.actual.outcome;
	}
}