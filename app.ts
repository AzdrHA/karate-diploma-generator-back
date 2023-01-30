import { type SKCVoreppeDiploma } from "./types/SKCVoreppeDiploma";
import { generateDiplomas } from "./utils/GenerateDiplomas";

const defaultSKCVoreppeMember: Pick<SKCVoreppeDiploma, "clubName" | "city"> = {
  clubName: "SKC Voreppe",
  city: "Voreppe",
};

const diplomas: SKCVoreppeDiploma[] = [
  {
    ...defaultSKCVoreppeMember,
    firstName: "Samuel",
    lastName: "MARTINO",
    date: new Date(),
    type: "blanche-jaune",
    group: "Groupe 1",
  },
  {
    ...defaultSKCVoreppeMember,
    firstName: "Nathan",
    lastName: "DI BARTOLOMEO",
    date: new Date(),
    type: "blanche-jaune",
    group: "Groupe 1",
  },
  {
    ...defaultSKCVoreppeMember,
    firstName: "Karell",
    lastName: "LANGUILLE",
    date: new Date(),
    type: "jaune",
    group: "Groupe 1",
  },
  {
    ...defaultSKCVoreppeMember,
    firstName: "Kiara",
    lastName: "DIONGUE",
    date: new Date(),
    type: "jaune",
    group: "Groupe 1",
  },
  {
    ...defaultSKCVoreppeMember,
    firstName: "Aissatou",
    lastName: "DIONGUE",
    date: new Date(),
    type: "jaune",
    group: "Groupe 1",
  },
];

const sortedDiplomas = diplomas.sort((a, b) => {
  if (a.group < b.group) return -1;
  if (a.group > b.group) return 1;
  if (a.type < b.type) return -1;
  if (a.type > b.type) return 1;
  return 0;
});

generateDiplomas(diplomas);
