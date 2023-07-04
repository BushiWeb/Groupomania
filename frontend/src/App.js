import { useState } from 'react';
import PasswordField from './components/form-inputs/PasswordField/PasswordField.jsx';
import TextField from './components/form-inputs/TextField/TextField.jsx';
import FilledButton from './components/buttons/FilledButton/FilledButton.jsx';

export default function App() {
    const [value, setValue] = useState('');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem',
            alignItems: 'start',
            backgroundColor: 'rgb(var(--color-surface))',
            isolation: 'isolate',
        }}>
            <FilledButton onClick={(e) => console.log(Math.random())}>Coucou</FilledButton>
            <PasswordField
                value={value}
                label="Classique"
                onChange={(e) => setValue(e.target.value)}
                name="test2"
                supportText="Supporting text"
            />

            <PasswordField
                value={value}
                label="Erreur"
                onChange={(e) => setValue(e.target.value)}
                name="test2"
                supportText="Supporting text"
                errorMessage="Error"
            />

            <TextField
                value={value}
                label="Erreur"
                onChange={(e) => setValue(e.target.value)}
                supportText="Supporting text"
                errorMessage="Error"
            />

            <PasswordField
                value={value}
                label="Disabled"
                disabled={true}
                onChange={(e) => setValue(e.target.value)}
                name="test2"
                supportText="Supporting text"
            />

            <PasswordField
                value={value}
                label="Placeholder"
                placeholder="Placeholder"
                onChange={(e) => setValue(e.target.value)}
                name="test2"
                supportText="Supporting text"
            />

            <PasswordField
                value={value}
                label="ReadOnly"
                readOnly={true}
                onChange={(e) => setValue(e.target.value)}
                name="test2"
                supportText="Supporting text"
            />

            <PasswordField
                value={value}
                label="Required"
                required={true}
                onChange={(e) => setValue(e.target.value)}
                name="test2"
                supportText="Supporting text"
            />
        </div>
    );
}
