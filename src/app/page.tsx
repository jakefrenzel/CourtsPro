import '@/app/globals.css';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>CourtsPro Developer Menu</h1>
      <nav>
        <h4>Press this to navigate to project</h4>
        <a href='./admin'>Admin Dashboard</a>
      </nav>
    </>
  );
}