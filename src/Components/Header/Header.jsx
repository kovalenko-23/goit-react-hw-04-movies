import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
}
