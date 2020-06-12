import {
  MATCHES,
  MATCHES_DESC,
  ARROWS,
  ARROWS_DESC,
  BOW,
  BOW_DESC,
  SHIELD,
  SHIELD_DESC,
  HEALTH_POTION,
  HEALTH_POTION_DESC,
  ROOM_1,
  ROOM_6,
  ROOM_3,
  ROOM_4,
} from "../constants/index";
import { arrows, bow, healthPotion, matches, shield } from "../ascii/index";

interface Item {
  name: string;
  description: string;
  art: string;
  location: string | null;
  isCarriedByPlayer: boolean;
}

const createItem = (
  name: string,
  description: string,
  art: string,
  location: string | null,
  isCarriedByPlayer: boolean,
): Item => {
  return {
    name,
    description,
    art,
    location,
    isCarriedByPlayer,
  };
};

const matchesAscii = createItem(MATCHES, MATCHES_DESC, matches(), null, true);
const arrowsAscii = createItem(ARROWS, ARROWS_DESC, arrows(), ROOM_1, false);
const bowAscii = createItem(BOW, BOW_DESC, bow(), ROOM_6, false);
const shieldAscii = createItem(SHIELD, SHIELD_DESC, shield(), ROOM_3, false);

const healthPotionAscii = createItem(
  HEALTH_POTION,
  HEALTH_POTION_DESC,
  healthPotion(),
  ROOM_4,
  false,
);

const itemsList = [
  matchesAscii,
  arrowsAscii,
  bowAscii,
  shieldAscii,
  healthPotionAscii,
];

export { itemsList };