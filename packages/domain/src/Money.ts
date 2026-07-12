export class Money {
	constructor(private readonly amount: number) {
		if (amount < 0) {
			throw new Error("Money amount cannot be negative");
		}
	}

	getAmount(): number {
		return this.amount;
	}

	add(other: Money): Money {
		return new Money(this.amount + other.amount);
	}

	equals(other: Money): boolean {
		return this.amount === other.amount;
	}
}
