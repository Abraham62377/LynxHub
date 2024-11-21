import {EMenuItem, ExtensionMainApi, MainExtensionUtils} from '../Managements/Plugin/Extensions/ExtensionTypes';
import StorageManager from '../Managements/Storage/StorageManager';
import {listenForChannels} from './Methods/IpcChannels';

let storeManager: StorageManager | undefined = undefined;

async function onAppReady() {
  console.log('Extension App Ready: ', storeManager?.getData('cards').installedCards);
}

function trayMenu_AddItem(): {item: EMenuItem; index: number} {
  return {item: {label: 'Extension Test', type: 'checkbox'}, index: 3};
}

export async function initialExtension(lynxApi: ExtensionMainApi, utils: MainExtensionUtils) {
  storeManager = utils.storageManager;

  lynxApi.trayMenu_AddItem(trayMenu_AddItem);
  lynxApi.listenForChannels(listenForChannels);

  lynxApi.onAppReady(onAppReady);
}
