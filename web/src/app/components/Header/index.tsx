import ResponsiveWrapper from '../ResponsiveWrapper';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <header>
      <ResponsiveWrapper>
        <div className="flex justify-between">
          <div>Hosanger Mikrotrykkeri</div>
          <Navigation />
        </div>
      </ResponsiveWrapper>
    </header>
  );
}
