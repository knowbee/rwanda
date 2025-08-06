import { Rwanda } from "@rwanda/data/provinces";

export function Provinces(): string[] {
	return Object.keys(Rwanda);
}
