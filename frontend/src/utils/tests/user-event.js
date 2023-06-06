import userEventTL from '@testing-library/user-event';
import { act } from '@testing-library/react';

const userEvent = {
    setup: (options) => {
        const user = userEventTL.setup(options);

        return {
            tab: async (options) => {
                await act(async () => {
                    await user.tab(options);
                });
            },

            keyboard: async (input) => {
                await act(async () => {
                    await user.keyboard(input);
                });
            },

            hover: async (element) => {
                await act(async () => {
                    await user.hover(element);
                });
            },

            unhover: async (element) => {
                await act(async () => {
                    await user.unhover(element);
                });
            },
        };
    },
};

export default userEvent;