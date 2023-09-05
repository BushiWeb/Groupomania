import { DialogAction, DialogCloseButton } from '../../../components/Dialog';
import FullscreenDialog from '../../../components/FullscreenDialog/FullscreenDialog';

/** Dilaog allowing the creation of a post */
export default function CreatePostDialog({ isOpen, setIsOpen }) {
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
        onClose={() => setIsOpen(false)}
        open={isOpen}
        acceptButton={acceptButton}
        dismissButton={dismissButton}
        closeButton={closeButton}
        headline="Titre de ma dialog"
    >
        Contenu du dialog
    </FullscreenDialog>;

}