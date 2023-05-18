import List from './List.jsx';
import { screen, getByRole, getByText } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('List component test suite', () => {
    const listLabel = 'test list';
    const testParams = ['test=1', 'test=2'];
    const listData = [
        {
            headline: 'Test',
            supportingText: 'Supporting text Test',
            link: `/test?${testParams[0]}`,
        },
        {
            headline: 'Test without supporting text',
            link: `/test?${testParams[1]}`,
        },
    ];

    it('should render', () => {
        render(<List label={listLabel} data={listData}/>);
    });

    it('should have the right label and role', () => {
        render(<List label={listLabel} data={listData}/>);
        screen.getByRole('list', { name: listLabel });
    });

    it('should have the right headline level', () => {
        const headingLevel = 5;
        render(<List label={listLabel} data={listData} headlineLevel={headingLevel}/>);
        const titles = screen.getAllByRole('heading', { level: headingLevel });

        expect(titles).toHaveLength(listData.length);
    });

    it('should display the right list items', () => {
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('listitem');

        expect(listItems).toHaveLength(listData.length);

        for (const index in listItems) {
            const headline = getByRole(listItems[index], 'heading', { level: 2 });
            expect(headline).toHaveTextContent(listData[index].headline);

            if (listData[index].supportingText) {
                getByText(listItems[index], listData[index].supportingText);
            }

            getByRole(listItems[index], 'link', { name: listData[index].headline });
        }
    });

    it('should give the focus to the first list item on tab press', async () => {
        const user = userEvent.setup();
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('link');

        expect(listItems[0]).not.toHaveFocus();

        await user.tab();
        expect(listItems[0]).toHaveFocus();
    });

    it('should move the focus with the arrow keys', async () => {
        const user = userEvent.setup();
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('link');

        expect(listItems[0]).not.toHaveFocus();

        await user.tab();
        expect(listItems[0]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(listItems[0]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(listItems[0]).not.toHaveFocus();
        expect(listItems[1]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(listItems[1]).toHaveFocus();
    });

    it('should give the focus to the right element event when the first element gains it using a click', async () => {
        const user = userEvent.setup();
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('link');

        await user.click(listItems[1]);
        expect(listItems[1]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(listItems[0]).toHaveFocus();
    });

    it('should synchronyse between tab focus and arrow focus', async () => {
        const user = userEvent.setup();
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('link');

        expect(listItems[0]).not.toHaveFocus();

        await user.tab();
        expect(listItems[0]).toHaveFocus();

        await user.tab();
        expect(listItems[0]).not.toHaveFocus();
        expect(listItems[1]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(listItems[1]).not.toHaveFocus();
        expect(listItems[0]).toHaveFocus();

        await user.tab();
        await user.tab();
        expect(listItems[0]).not.toHaveFocus();
        expect(listItems[1]).not.toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(listItems[0]).not.toHaveFocus();
        expect(listItems[1]).not.toHaveFocus();

        await user.tab({ shift: true });
        expect(listItems[1]).toHaveFocus();
    });

    it('should be activated by the enter key', async () => {
        const user = userEvent.setup();
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('link');

        expect(listItems[0]).not.toHaveFocus();

        await user.tab();
        expect(listItems[0]).toHaveFocus();

        await user.keyboard('{Enter}');
        const testElement = screen.getByTestId('search-param');
        expect(testElement).toHaveTextContent(testParams[0]);
    });

    it('should be activated by the space key', async () => {
        const user = userEvent.setup();
        render(<List label={listLabel} data={listData}/>);
        const listItems = screen.getAllByRole('link');

        expect(listItems[0]).not.toHaveFocus();

        await user.tab();
        expect(listItems[0]).toHaveFocus();

        await user.keyboard('{ }');
        const testElement = screen.getByTestId('search-param');
        expect(testElement).toHaveTextContent(testParams[0]);
    });
});