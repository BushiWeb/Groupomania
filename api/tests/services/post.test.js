import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.js';
import { createPost } from '../../src/services/posts.js';

jest.spyOn(db, 'models', 'get').mockImplementation(
    () => new Proxy(
        {Model: MockModel},
        {
            get: (target) => target.Model
        }
    )
);

beforeEach(() => {
    mockModelMethods.clearMocks();
});

describe('Post services test suite', () => {
    const postInfos = {
        postId: 13,
        title: 'Post title',
        message: 'Post message',
        imageUrl: 'image/pic.com',
        creationDate: '12-10-2022',
        lastUpdateDate: '26-11-2022',
        writerId: 6
    };


    describe('Create user service test suite', () => {
        it('should create a user with the default role id and return the user', async () => {
            const newUser = await createPost({ title: postInfos.title, message: postInfos.message, imageUrl: postInfos.imageUrl });

            expect(newUser).toHaveProperty('title', postInfos.title);
            expect(newUser).toHaveProperty('message', postInfos.message);
            expect(newUser).toHaveProperty('imageUrl', postInfos.imageUrl);
        });
    });
});