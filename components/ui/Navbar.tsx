import Link from "next/link";
import { Image } from "@nextui-org/react";


import {pokemon_logo_2} from "@/assets";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {

  return (
    <header className={styles.header}>

      <div>
        <Link href="/">
          <Image src={pokemon_logo_2.src}  alt="icono de la app" width={150} />
        </Link>
      </div>

      <div className={styles.header_menu}>
        <ul>
          <li><Link href="/favoritos/">Favoritos</Link></li>
        </ul>
      </div>

    </header>
  );
};

export default Navbar;
