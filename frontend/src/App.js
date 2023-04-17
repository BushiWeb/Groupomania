import HiddenNavigationLink from './components/HiddenNavigationLink/HiddenNavigationLink.jsx';
import Icon from './components/Icon/Icon.jsx';
import Logo from './components/Logo/Logo.jsx';

export default function App() {
    return (
        <div>
            <HiddenNavigationLink label="Skip to main content" target="/"/>
            <Logo/>
            <Icon name='search'/>
        </div>
    );
}
