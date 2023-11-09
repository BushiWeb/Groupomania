import USERS from './users.js';

const POSTS = [
    {
        postId: 1,
        title: 'The most exalting post',
        message: 'This is the story of a litle man, so litle that evan I can\'t see him. The end.',
        imageUrl: 'http://groupomania.com/images/small_man31022002.png',
        writer: {
            writerId: USERS[1].userId,
            email: USERS[1].email,
        },
        likes: 3,
        usersLiked: [
            13,
            2,
            3,
        ],
        creationDate: '2019-08-24T14:15:22Z',
        lastUpdateDate: null,
    },
    {
        postId: 2,
        title: 'The most boring post',
        message: 'This is the story of a normal child in a normal house, wearing normal clothes.',
        imageUrl: null,
        writer: {
            writerId: USERS[2].userId,
            email: USERS[2].email,
        },
        likes: 0,
        usersLiked: [],
        creationDate: '2019-08-24T14:15:22Z',
        lastUpdateDate: '2020-09-18T03:12:13Z',
    },
    {
        postId: 3,
        title: 'The most exalting post',
        message: 'This is the story of a litle man, so litle that evan I can\'t see him. The end.',
        imageUrl: 'http://groupomania.com/images/small_man31022002.png',
        writer: {
            writerId: USERS[1].userId,
            email: USERS[1].email,
        },
        likes: 3,
        usersLiked: [
            1,
            2,
            3,
        ],
        creationDate: '2019-08-24T14:15:22Z',
        lastUpdateDate: null,
    },
    {
        postId: 4,
        title: 'The most boring post',
        message: 'This is the story of a normal child in a normal house, wearing normal clothes.',
        imageUrl: null,
        writer: {
            writerId: USERS[2].userId,
            email: USERS[2].email,
        },
        likes: 0,
        usersLiked: [],
        creationDate: '2019-08-24T14:15:22Z',
        lastUpdateDate: '2020-09-18T03:12:13Z',
    },
];

export default POSTS;