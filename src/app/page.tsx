import '@/app/globals.css';

export default function Page() {
  return (
    <div className="developer-menu">
      <h1>CourtsPro Developer Menu</h1>
      <nav>
        <h4>Press this to navigate to project</h4>
        <a href='/corporate'>Corporate Dashboard</a>
        <a href='/admin'>Admin Dashboard</a>
        <a href='/employee'>Employee Dashboard</a>
      </nav>
    </div>
  );
}