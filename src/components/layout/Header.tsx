import Image from 'next/image';
import Link from 'next/link';

import avatarImage from '@/assets/avatar.png';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-8">
        {/* Currently only have one. Eventually will add more - e.g. blog */}
        {/* // TODO: Maybe should extract this into separate component, but maybe do that once there's more item in navbar */}
        <nav className="text-xl font-bold">
          <ul>
            <li className="hover:text-[#ff7f00]">
              <Link href="#">About</Link>
            </li>
          </ul>
        </nav>
        <div className="size-[72px]">
          <Image
            className="aspect-square size-full rounded-full"
            src={avatarImage}
            alt="Charae profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
