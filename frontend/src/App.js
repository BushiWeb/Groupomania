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
import Snackbar from './features/snackbar/Snackbar.jsx';
import { useSnackbar } from './features/snackbar/useSnackbar.js';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator.jsx';
import List from './components/List/List.jsx';
import Post from './features/posts/Post.jsx';
import MainHeader from './layouts/MainHeader/MainHeader.jsx';

export default function App() {
    const displaySnackbar = useSnackbar();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem',
            alignItems: 'start',
        }}>
            <Snackbar/>
            <MainHeader mainContentId={'main'}/>
            <div id="main" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'start',
            }}>
                <Logo/>
                <Icon name='search'/>
                <Icon name='favorite' label="like" action={(e) => {
                    console.log(e);
                }}/>
                <CheckboxLabel label='Checkbox' onChange={(e) => {
                    console.log(e);
                }}/>
                <Tooltip label="Label test">
                    <Button action={(e) => {
                        console.log(e);
                    }} label="Button"/>
                </Tooltip>
                <FilledButton action={(e) => {
                    displaySnackbar(Date.now());
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
                <ProgressIndicator label="Linear indicator"/>
                <ProgressIndicator circular={true} label="Circular indicator"/>
                <List data={[
                    {
                        headline: 'test@gmail.com',
                        link: '/?test=oui',
                    },
                    {
                        headline: 'admin@gmail.com',
                        supportingText: 'admin',
                        link: '/',
                    },
                ]} label="test list"/>
                <Post
                    title="Post test"
                    message="Dolore nostrud ad aute voluptate nulla pariatur enim officia elit aute do amet. Aute id velit dolore in dolor in laborum minim do ut laborum laboris. Officia deserunt magna sit consequat. Sit veniam ipsum sunt duis cupidatat amet. Labore velit non cillum aliqua sint culpa labore. Quis anim deserunt ex ullamco consequat sint sint et veniam adipisicing culpa qui labore nisi."
                    authorEmail="test@gmail.com"
                    date="2019-08-24T14:15:22Z"
                    imageUrl="https://picsum.photos/200/300"
                    liked={true}
                    likeNumber={7}
                    posinset={1}
                    setsize={1}
                    hasRights={true}
                />
            </div>
        </div>
    );
}
