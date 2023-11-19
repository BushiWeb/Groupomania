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

            type: async (element, input) => {
                await act(async () => {
                    await user.type(element, input);
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

            click: async (element) => {
                await act(async () => {
                    await user.click(element);
                });
            },

            upload: async (element, file) => {
                await act(async () => {
                    await user.upload(element, file);
                });
            },
        };
    },
};

export default userEvent;
