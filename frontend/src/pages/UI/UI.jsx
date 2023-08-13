import NavigationSection from '../../layouts/Navigation/NavigationSection';

export default function UI() {
    const fab = {
        icon: 'favorite',
        label: 'favorite',
        onClick: () => console.log('coucou'),
    };
    return <NavigationSection fab={fab}/>;
}