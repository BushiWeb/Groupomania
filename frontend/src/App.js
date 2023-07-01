import { useState } from 'react';
import TextField from './components/form-inputs/TextField/TextField.jsx';

export default function App() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

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
            <TextField value={value} label="Text input test" onChange={(e) => setValue(e.target.value)} name="test" supportText="Supporting text"/>

            <TextField
                value={value2}
                label="Text input test avec icônes"
                onChange={(e) => setValue2(e.target.value)}
                name="test2"
                leadingIcon={{ name: 'favorite', label: 'favorite' }}
                trailingIcon={{ name: 'done', label: 'done', onClick: (e) => console.log('coucou') }}
                supportText="Supporting text"
            />

            <TextField
                value={value2}
                label="Text input test avec icônes"
                onChange={(e) => setValue2(e.target.value)}
                name="test2"
                leadingIcon={{ name: 'favorite', label: 'favorite' }}
                trailingIcon={{ name: 'done', label: 'done', onClick: (e) => console.log('coucou') }}
                supportText="Supporting text"
                errorMessage="Error"
            />

            <TextField
                value={value2}
                label="Text input disabled"
                disabled={true}
                onChange={(e) => setValue2(e.target.value)}
                name="test2"
                leadingIcon={{ name: 'favorite', label: 'favorite' }}
                trailingIcon={{ name: 'done', label: 'done', onClick: (e) => setValue2('') }}
                supportText="Supporting text"
            />

            <TextField
                value={value2}
                label="Text input placeholder"
                placeholder="Placeholder"
                onChange={(e) => setValue2(e.target.value)}
                name="test2"
                leadingIcon={{ name: 'favorite', label: 'favorite' }}
                trailingIcon={{
                    name: 'done',
                    label: 'done',
                    onClick: (e) => {
                        e.stopPropagation();
                        setValue2('');
                    },
                }}
                supportText="Supporting text"
            />

            <TextField
                value={value2}
                label="Text input read only"
                readOnly={true}
                onChange={(e) => setValue2(e.target.value)}
                name="test2"
                leadingIcon={{ name: 'favorite', label: 'favorite' }}
                trailingIcon={{ name: 'done', label: 'done', onClick: (e) => setValue2('') }}
                supportText="Supporting text"
            />

            <TextField
                value={value2}
                label="Text input required"
                required={true}
                onChange={(e) => setValue2(e.target.value)}
                name="test2"
                leadingIcon={{ name: 'favorite', label: 'favorite' }}
                trailingIcon={{ name: 'done', label: 'done', onClick: (e) => setValue2('') }}
                supportText="Supporting text"
            />
        </div>
    );
}
