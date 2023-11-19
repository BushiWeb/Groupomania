/* eslint-disable no-await-in-loop */
import TopAppBar from './TopAppBar';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event.js';
import '@testing-library/jest-dom';

describe('TopAppBar component test suite', () => {
    const mainId = 'Main-id';
    const content = (
        <main id={mainId}>
            <h1>Test title</h1>
        </main>
    );
    function Test({ mainContent = false, ...props }) {
        return (
            <TopAppBar
                {...(mainContent && { hiddenLinkTargetId: mainId })}
                {...props}
            >
                {content}
            </TopAppBar>
        );
    }

    const actions = [
        {
            label: 'Passer au mode sombre',
            onClick: jest.fn(),
            icon: 'dark_mode',
        },
        {
            label: 'Se déconnecter',
            onClick: jest.fn(),
            icon: 'logout',
        },
        {
            label: 'Modifier le profil',
            onClick: jest.fn(),
            icon: 'edit',
        },
        {
            label: 'Supprimer le profil',
            onClick: jest.fn(),
            icon: 'delete_forever',
        },
        {
            label: "Modifier le role de l'utilisateur",
            onClick: jest.fn(),
            icon: 'admin_panel_settings',
        },
    ];

    beforeEach(() => {
        for (const action of actions) {
            action.onClick.mockReset();
        }
    });

    it('should render with its children', () => {
        render(<Test />);
        screen.getByRole('banner');
        screen.getByRole('heading', { level: 1 });
    });

    it('should render with additional classes', () => {
        const testClass = 'test';
        render(<Test className={testClass} />);
        expect(screen.getByRole('banner')).toHaveClass(testClass);
    });

    it('should be the medium type', () => {
        render(<Test type="medium" />);
        expect(screen.getByRole('banner')).toHaveAttribute(
            'data-type',
            'medium',
        );
    });

    it('should render the navigation arrow', async () => {
        const user = userEvent.setup();
        const target = '/login',
            label = 'navigation label';
        render(
            <Test
                navigationArrowTarget={target}
                navigationArrowLabel={label}
            />,
        );
        const navigationButton = screen.getByRole('button', { name: label });

        await user.click(navigationButton);
        expect(screen.getByTestId('search-path')).toHaveTextContent(target);
    });

    it('should link to the main content', async () => {
        const user = userEvent.setup();
        const { container } = render(<Test mainContent />);
        const hiddenLink = screen.getByRole('link', {
            name: 'Accéder directement au contenu',
        });

        await user.click(hiddenLink);
        const mainElt = container.querySelector(`#${mainId}`);
        expect(mainElt).toHaveFocus();
    });

    it('should render action buttons', async () => {
        const user = userEvent.setup();
        render(<TopAppBar actions={actions.slice(0, 3)} />);

        for (const actionIndex in actions) {
            if (actionIndex >= 3) {
                expect(
                    screen.queryByRole('button', {
                        name: actions[actionIndex].label,
                    }),
                ).toBeNull();
                continue;
            }

            const button = screen.getByRole('button', {
                name: actions[actionIndex].label,
            });
            await user.click(button);
            expect(actions[actionIndex].onClick).toHaveBeenCalled();
        }
    });

    it('should render action buttons and menu', async () => {
        const user = userEvent.setup();
        render(<TopAppBar actions={actions} />);

        for (const actionIndex in actions) {
            if (actionIndex >= 2) {
                expect(
                    screen.queryByRole('button', {
                        name: actions[actionIndex].label,
                    }),
                ).toBeNull();
                continue;
            }

            const button = screen.getByRole('button', {
                name: actions[actionIndex].label,
            });
            await user.click(button);
            expect(actions[actionIndex].onClick).toHaveBeenCalled();
        }

        const moreButton = screen.getByRole('button', {
            name: "Plus d'actions",
        });
        await user.click(moreButton);
        screen.getByRole('menu');
        await user.click(moreButton);

        for (const actionIndex in actions) {
            if (actionIndex < 2) {
                expect(
                    screen.queryByRole('menuitem', {
                        name: actions[actionIndex].label,
                    }),
                ).toBeNull();
                continue;
            }

            await user.click(moreButton);
            const button = screen.getByRole('button', {
                name: actions[actionIndex].label,
            });
            await user.click(button);
            expect(actions[actionIndex].onClick).toHaveBeenCalled();
        }
    });
});
