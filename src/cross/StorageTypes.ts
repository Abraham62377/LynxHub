import {DiscordRPC, StorageChosenArgumentsData} from './CrossTypes';
import {
  CustomRunBehaviorStore,
  DarkModeTypes,
  HomeCategory,
  LynxHotkeys,
  StoragePreOpenData,
  TaskbarStatus,
  TerminalCursorInactiveStyle,
  TerminalCursorStyle,
  TerminalUseConpty,
  TooltipStatus,
} from './IpcChannelAndTypes';

export type InstalledCard = {
  id: string;
  dir?: string;
};

export type InstalledCards = InstalledCard[];

type StorageTypes = {
  storage: {
    version: number;
  };
  cards: {
    installedCards: InstalledCards;
    autoUpdateCards: string[];
    autoUpdateExtensions: string[];
    pinnedCards: string[];
    recentlyUsedCards: string[];
    cardCompactMode: boolean;
    cardsDevImage: boolean;
    cardsDevName: boolean;
    cardsDesc: boolean;
    cardsRepoInfo: boolean;
    zoomFactor: {id: string; zoom: number}[];
  };
  cardsConfig: {
    preCommands: {cardId: string; data: string[]}[];
    customRun: {cardId: string; data: string[]}[];
    customRunBehavior: CustomRunBehaviorStore;
    preOpen: StoragePreOpenData;
    args: StorageChosenArgumentsData;
  };
  app: {
    closeConfirm: boolean;
    terminateAIConfirm: boolean;
    homeCategory: HomeCategory;
    darkMode: DarkModeTypes;
    taskbarStatus: TaskbarStatus;
    tooltipStatus: TooltipStatus;
    systemStartup: boolean;
    startMinimized: boolean;
    startupLastActivePage: boolean;
    lastPage: string;
    discordRP: DiscordRPC;
    hotkeys: LynxHotkeys;
    initialized: boolean;
    appDataDir: string;
  };
  terminal: {
    outputColor: boolean;
    useConpty: TerminalUseConpty;
    scrollBack: number;
    fontSize: number;
    cursorStyle: TerminalCursorStyle;
    cursorInactiveStyle: TerminalCursorInactiveStyle;
    blinkCursor: boolean;
    resizeDelay: number;
  };
};

export default StorageTypes;
