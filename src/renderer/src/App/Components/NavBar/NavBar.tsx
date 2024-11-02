import {isEmpty} from 'lodash';
import {memo, useState} from 'react';

import {extensionsData} from '../../Extensions/ExtensionLoader';
import {useAppState} from '../../Redux/App/AppReducer';
import {ContentPagesButtons, SettingsPagesButtons} from './NavButtons';

const CONTAINER_WIDTH = 'w-[5.5rem]';

const NAV_BAR_STYLE = {
  bgColor: 'dark:bg-LynxRaisinBlack bg-white',
  gapY: 'gap-y-1',
  paddingY: 'py-3',
  shadow: 'shadow-sm',
  width: 'w-14',
};

const COMMON_STYLES =
  `${NAV_BAR_STYLE.width} ${NAV_BAR_STYLE.bgColor} ${NAV_BAR_STYLE.shadow} ${NAV_BAR_STYLE.paddingY}` +
  ` ${NAV_BAR_STYLE.gapY} flex relative min-h-16 flex-col flex-nowrap overflow-y-scroll rounded-full ` +
  `scrollbar-hide drop-shadow-md border border-foreground/5`;

/** Navigation bar containing two sections: Contents and Settings */
const NavBar = memo(() => {
  const navBar = useAppState('navBar');
  const [navBarExt] = useState(extensionsData.navBar);

  if (!navBar) return null;

  if (navBarExt.replace.container) {
    return <navBarExt.replace.container />;
  }

  return (
    <div className={`flex h-full ${CONTAINER_WIDTH} shrink-0 flex-col items-center justify-between pb-4 pt-3`}>
      {isEmpty(navBarExt.replace.contentBar) ? (
        <div className={`${COMMON_STYLES} max-h-[56%]`}>
          <ContentPagesButtons />
        </div>
      ) : (
        <navBarExt.replace.contentBar />
      )}
      {isEmpty(navBarExt.replace.settingsBar) ? (
        <div className={`${COMMON_STYLES} sm:max-h-[35%] lg:max-h-[35%] xl:max-h-[40%]`}>
          <SettingsPagesButtons />
        </div>
      ) : (
        <navBarExt.replace.settingsBar />
      )}
    </div>
  );
});

export default NavBar;
