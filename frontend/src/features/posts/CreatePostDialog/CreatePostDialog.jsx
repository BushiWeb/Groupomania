import { useState } from 'react';
import { DialogAction, DialogCloseButton } from '../../../components/Dialog';
import FullscreenDialog from '../../../components/FullscreenDialog/FullscreenDialog';
import TextArea from '../../../components/form-inputs/TextArea/TextArea';
import TextField from '../../../components/form-inputs/TextField/TextField';

/** Dilaog allowing the creation of a post */
export default function CreatePostDialog({ isOpen, setIsOpen }) {
    const [message, setMessage] = useState(undefined);
    const [value, setValue] = useState('');
    const acceptButton = <DialogAction onClick={() => {
        console.log('bouton2');
        setIsOpen(false);
    }}>Bouton 2</DialogAction>;

    const dismissButton = <DialogAction onClick={() => {
        console.log('bouton1');
        setIsOpen(false);
    }}>Bouton 1</DialogAction>;

    const closeButton = <DialogCloseButton label="Fermer la dialog" onClick={() => {
        console.log('close');
        setIsOpen(false);
    }}/>;

    return <FullscreenDialog
        label="Test"
        onClose={() => {
            console.log('closed');
            setIsOpen(false);
        }}
        onEscape={(e) => {
            e.preventDefault();
            console.log('escape');
        }}
        open={isOpen}
        acceptButton={acceptButton}
        dismissButton={dismissButton}
        closeButton={closeButton}
        headline="Titre de ma dialog"
    >
        <TextArea onChange={(e) => setMessage(e.target.value)} value={message} label={'Test text area'} errorMessage="Support text" required cols={20} rows={10}/>

        <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
            label='Textbox test'
            supportText='Texte de support'
            leadingIconProps={{
                name: 'favorite',
                label: 'favorite',
            }}
            trailingIconProps={{
                name: 'favorite',
                label: 'favorite',
                onClick: (e) => console.log('favorite'),
            }}
            errorMessage="Error message"
        />
    </FullscreenDialog>;

}