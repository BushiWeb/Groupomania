import Button from './components/buttons/Button/Button.jsx';
import FAB from './components/buttons/FAB/FAB.jsx';
import FilledButton from './components/buttons/FilledButton/FilledButton.jsx';
import OutlinedButton from './components/buttons/OutlinedButton/OutlinedButton.jsx';
import TextButton from './components/buttons/TextButton/TextButton.jsx';
import TonalButton from './components/buttons/TonalButton/TonalButton.jsx';
import Tooltip from './features/tooltip/Tooltip.jsx';
import IconButton from './components/icon-button/IconButton/IconButton.jsx';
import OutlinedIconButton from './components/icon-button/OutlinedIconButton/OutlinedIconButton.jsx';
import { useState } from 'react';
import StandardIconButton from './components/icon-button/StandardIconButton/StandardIconButton.jsx';
import Checkbox from './components/form-inputs/Checkbox/Checkbox.jsx';
import CheckboxLabel from './components/form-inputs/Checkbox/CheckboxLabel.jsx';
import HiddenNavigationLink from './components/HiddenNavigationLink/HiddenNavigationLink.jsx';
import Icon from './components/Icon/Icon.jsx';
import List from './components/List/List.jsx';

export default function App() {
    const [disabled, setDisabled] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [icon, setIcon] = useState(null);
    const [toggle, setToggle] = useState(undefined);
    const [checked, setChecked] = useState(false);
    const [iconWithText, setIconWithText] = useState(true);
    const [iconFill, setIconFill] = useState(true);

    const buttonProps = {
        disabled,
        icon,
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem',
            alignItems: 'start',
        }}>

            <HiddenNavigationLink target="#main">Hidden link</HiddenNavigationLink>

            <Button onClick={() => setDisabled((value) => !value)}>
                Bouton de base, toggle disabled
            </Button>

            <Tooltip label="Label test">
                <FilledButton onClick={() => console.log('click')} {...buttonProps}>
                Bouton rempli, avec tooltip
                </FilledButton>
            </Tooltip>

            <TonalButton onClick={() => setIconFill((value) => !value)} {...buttonProps}>
                Bouton rempli, icônes remplies
            </TonalButton>

            <OutlinedButton onClick={() => setIcon((icon) => icon ? null : 'favorite')} {...buttonProps}>
                Bouton entouré, toggle icons
            </OutlinedButton>

            <TextButton onClick={() => setIconWithText((value) => !value)} {...buttonProps}>
                Bouton texte, icon with text
            </TextButton>

            <FAB onClick={() => setMobile((value) => !value)} icon="edit" floating={mobile} >
                {!mobile && 'FAB, toggle extended'}
            </FAB>

            <IconButton icon="favorite" label="Icon button" onClick={() => setToggle((toggle) => toggle ? undefined : toggle === false)}/>

            <OutlinedIconButton icon="edit" label="Outlined icon button" disabled={disabled} onClick={() => {
                console.log(true);
            }} toggle={toggle}/>

            <StandardIconButton icon="search" label="Standard icon button" disabled={disabled} onClick={() => {
                console.log(true);
            }} toggle={toggle}/>

            <Checkbox name="test" checked={checked} label="Test checkbox" onChange={(e) => setChecked(e.target.checked)} disabled={disabled}/>

            <CheckboxLabel name="test" checked={checked} onChange={(e) => setChecked(e.target.checked)} disabled={disabled}>Test checkbox label</CheckboxLabel>

            <p><Icon name="favorite" fill={iconFill}/> {iconWithText && 'Texte!!!'}</p>

            <List data={[
                {
                    headline: 'coucou',
                    supportingText: 'supp',
                    link: '/',
                },
                {
                    headline: 'coucou2',
                    supportingText: 'supp2',
                    link: '#anchor',
                },
            ]} label="Liste test"/>
        </div>
    );
}
