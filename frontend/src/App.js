import HiddenNavigationLink from './components/HiddenNavigationLink/HiddenNavigationLink.jsx';
import Logo from './components/Logo/Logo.jsx';

export default function App() {
    return (
        <div>
            <HiddenNavigationLink label="Skip to main content" target="/"/>
            <Logo/>
        </div>
    );
}
