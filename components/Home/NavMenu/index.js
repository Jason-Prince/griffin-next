import Link from 'next/link';
import NavGrid from './NavGrid';
import NavAnchor from './NavAnchor';
import NavObj from './NavObj';

const NavMenu = () => {
  return (
    <NavGrid>
      <Link href={NavObj.link1.anchor}>
        <NavAnchor>{NavObj.link1.name}</NavAnchor>
      </Link>
      <Link href={NavObj.link2.anchor}>
        <NavAnchor>{NavObj.link2.name}</NavAnchor>
      </Link>
      <Link href={NavObj.link3.anchor}>
        <NavAnchor>{NavObj.link3.name}</NavAnchor>
      </Link>
      <Link href={NavObj.link4.anchor}>
        <NavAnchor>{NavObj.link4.name}</NavAnchor>
      </Link>
      <Link href={NavObj.link5.anchor}>
        <NavAnchor>{NavObj.link5.name}</NavAnchor>
      </Link>
      <Link href={NavObj.link6.anchor}>
        <NavAnchor>{NavObj.link6.name}</NavAnchor>
      </Link>
    </NavGrid>
  );
};

export default NavMenu;
