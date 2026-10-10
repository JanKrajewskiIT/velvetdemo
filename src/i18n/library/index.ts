import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

import { actionsEn, actionsPl } from './actions';
import { atomsEn, atomsPl } from './atoms';
import { brandEn, brandPl } from './brand';
import { cardsEn, cardsPl } from './cards';
import { colorEn, colorPl } from './color';
import { dataEn, dataPl } from './data';
import { dataVizEn, dataVizPl } from './data-viz';
import { depthEn, depthPl } from './depth';
import { displayEn, displayPl } from './display';
import { feedbackEn, feedbackPl } from './feedback';
import { formsEn, formsPl } from './forms';
import { iconsEn, iconsPl } from './icons';
import { inputsEn, inputsPl } from './inputs';
import { layoutEn, layoutPl } from './layout';
import { mediaEn, mediaPl } from './media';
import { menusEn, menusPl } from './menus';
import { motionEn, motionPl } from './motion';
import { navigationEn, navigationPl } from './navigation';
import { overlaysEn, overlaysPl } from './overlays';
import { overviewEn, overviewPl } from './overview';
import { patternsEn, patternsPl } from './patterns';
import { pickersEn, pickersPl } from './pickers';
import { planningEn, planningPl } from './planning';
import { selectionEn, selectionPl } from './selection';
import { shapeEn, shapePl } from './shape';
import { spaceLayoutEn, spaceLayoutPl } from './space-layout';
import { stateEn, statePl } from './state';
import { typeEn, typePl } from './type';

export const libraryEn = defineDictionary({
  library: {
    overview: overviewEn,
    brand: brandEn,
    color: colorEn,
    type: typeEn,
    icons: iconsEn,
    shape: shapeEn,
    spaceLayout: spaceLayoutEn,
    depth: depthEn,
    motion: motionEn,
    state: stateEn,
    atoms: atomsEn,
    layout: layoutEn,
    display: displayEn,
    feedback: feedbackEn,
    actions: actionsEn,
    inputs: inputsEn,
    selection: selectionEn,
    pickers: pickersEn,
    forms: formsEn,
    overlays: overlaysEn,
    menus: menusEn,
    navigation: navigationEn,
    cards: cardsEn,
    media: mediaEn,
    dataViz: dataVizEn,
    data: dataEn,
    planning: planningEn,
    patterns: patternsEn,
  },
});

export const libraryPl: TranslationOf<typeof libraryEn> = {
  library: {
    overview: overviewPl,
    brand: brandPl,
    color: colorPl,
    type: typePl,
    icons: iconsPl,
    shape: shapePl,
    spaceLayout: spaceLayoutPl,
    depth: depthPl,
    motion: motionPl,
    state: statePl,
    atoms: atomsPl,
    layout: layoutPl,
    display: displayPl,
    feedback: feedbackPl,
    actions: actionsPl,
    inputs: inputsPl,
    selection: selectionPl,
    pickers: pickersPl,
    forms: formsPl,
    overlays: overlaysPl,
    menus: menusPl,
    navigation: navigationPl,
    cards: cardsPl,
    media: mediaPl,
    dataViz: dataVizPl,
    data: dataPl,
    planning: planningPl,
    patterns: patternsPl,
  },
};

export type GroupSlug = keyof (typeof libraryEn)['library'];
