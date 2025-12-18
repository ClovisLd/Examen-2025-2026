import Link from "next/link";

type NavlinkProps = {
  href: string;
  children: string;
};

function Navlink(props: NavlinkProps) {
  return (
    <li>
      <Link
        href={props.href}
        className="block border border-transparent px-4 py-2 rounded-lg hover:border-white hover:border-2 transition-all duration-300"
      >
        {props.children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center space-x-4 mb-4">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/bookings">Reservation</Navlink>
        <Navlink href="/about">Information</Navlink>
      </ul>
    </nav>
  );
}
