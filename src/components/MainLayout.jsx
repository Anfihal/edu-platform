import Header from './Header';
import BottomNav from './BottomNav';

export default function MainLayout({ children }) {
    return (
        <div className="app-layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}