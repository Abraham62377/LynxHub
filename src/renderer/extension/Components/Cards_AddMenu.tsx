import {DropdownItem, DropdownSection} from '@nextui-org/react';

import {Bug_Icon, Trash_Icon} from '../../src/assets/icons/SvgIcons/SvgIcons3';

export default function CardsAddMenu() {
  return (
    <DropdownSection key="bugs" title="Bugs" showDivider>
      <DropdownItem key="addBug" title="Add Bug" className="cursor-default" startContent={<Bug_Icon />}></DropdownItem>
      <DropdownItem
        key="removeBug"
        title="Remove Bug"
        className="cursor-default"
        startContent={<Trash_Icon />}></DropdownItem>
    </DropdownSection>
  );
}
