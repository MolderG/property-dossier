import { describe, it, expect } from "vitest";
import { Money } from "./Money.js";

describe("Money", () => {
	it("should create a money instance with valid amount", () => {
		const money = new Money(100);
		expect(money.getAmount()).toBe(100);
	});

	it("should throw error for negative amount", () => {
		expect(() => new Money(-10)).toThrow("Money amount cannot be negative");
	});

	it("should add two money instances", () => {
		const money1 = new Money(100);
		const money2 = new Money(50);
		const result = money1.add(money2);
		expect(result.getAmount()).toBe(150);
	});

	it("should check equality of money instances", () => {
		const money1 = new Money(100);
		const money2 = new Money(100);
		const money3 = new Money(200);
		expect(money1.equals(money2)).toBe(true);
		expect(money1.equals(money3)).toBe(false);
	});
});
