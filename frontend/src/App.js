import HiddenNavigationLink from './components/HiddenNavigationLink/HiddenNavigationLink.jsx';
import Icon from './components/Icon/Icon.jsx';
import Logo from './components/Logo/Logo.jsx';
import Button from './components/buttons/Button/Button.jsx';
import FAB from './components/buttons/FAB/FAB.jsx';
import FilledButton from './components/buttons/FilledButton/FilledButton.jsx';
import OutlinedButton from './components/buttons/OutlinedButton/OutlinedButton.jsx';
import StandardIconButton from './components/icon-button/StandardIconButton/StandardIconButton.jsx';
import TextButton from './components/buttons/TextButton/TextButton.jsx';
import TonalButton from './components/buttons/TonalButton/TonalButton.jsx';
import CheckboxLabel from './components/form-inputs/Checkbox/CheckboxLabel.jsx';
import OutlinedIconButton from './components/icon-button/OutlinedIconButton/OutlinedIconButton.jsx';
import Tooltip from './features/tooltip/Tooltip.jsx';

export default function App() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem',
            alignItems: 'start',
        }}>
            <Tooltip/>
            <HiddenNavigationLink label="Skip to main content" target="/"/>
            <Logo/>
            <Icon name='search'/>
            <Icon name='favorite' label="like" action={(e) => {
                console.log(e);
            }}/>
            <CheckboxLabel label='Checkbox' onChange={(e) => {
                console.log(e);
            }}/>
            <Button action={(e) => {
                console.log(e);
            }} label="Button"/>
            <FilledButton action={(e) => {
                console.log(e);
            }} label="Filled Button"/>
            <TonalButton action={(e) => {
                console.log(e);
            }} label="Tonal Button"/>
            <OutlinedButton action={(e) => {
                console.log(e);
            }} label="Outlined Button"/>
            <OutlinedIconButton action={(e) => {
                console.log(e);
            }} label="Outlined Button" icon="favorite"/>
            <TextButton action={(e) => {
                console.log(e);
            }} label="Text Button"/>
            <StandardIconButton action={(e) => {
                console.log(e);
            }} label="Standard Icon Button" icon="favorite"/>
            <FAB action={(e) => {
                console.log(e);
            }} label="FAB"/>
        </div>
    );
}
