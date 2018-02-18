import { Slot } from "./slot";
import { SlotType } from "./slot-type";

export const slotTypes = {
    NAME: new SlotType('NAME', ['Peter', 'Paul', 'John F. Kennedy']),
};

export function getSlotTypesForModel() {
    return Object.values(slotTypes).map((slotType) => slotType.getSkillModel());
}
