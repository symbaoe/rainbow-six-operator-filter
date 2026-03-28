import { operators } from "$lib/data/operators"
import { NONE, type FilterParams, type Operator } from "$lib/data/types"

export function filter(filters: FilterParams): Operator[] {
	let output = operators
	if (filters.side !== NONE) {
		output = output.filter((op) => op.side === filters.side)
	}
	if (filters.gunTypePrimary !== NONE) {
		output = output.filter(
			(op) => op.gunsPrimary.filter((g) => g.gun.type === filters.gunTypePrimary).length,
		)
	}
	if (filters.gunTypeSecondary !== NONE) {
		output = output.filter(
			(op) => op.gunsSecondary.filter((g) => g.gun.type === filters.gunTypeSecondary).length,
		)
	}
	if (filters.gadget !== NONE) {
		output = output.filter((op) => op.gadgets.includes(filters.gadget))
	}
	if (filters.speed !== NONE) {
		output = output.filter((op) => op.speed === filters.speed)
	}
	if (filters.role !== NONE) {
		output = output.filter((op) => op.roles.includes(filters.role))
	}
	return output
}
