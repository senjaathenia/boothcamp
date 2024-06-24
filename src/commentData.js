import { faker } from '@faker-js/faker';

export const comments = [
    { author: faker.name.firstName(), date: 'Today at 5:42PM', text: faker.word.words(8), avatar: faker.image.avatar() },
    { author: faker.name.firstName(), date: 'Yesterday at 12:30AM', text: faker.word.words(10), avatar: faker.image.avatar() },
    { author: faker.name.firstName(), date: 'Just now', text: faker.word.words(6), avatar: faker.image.avatar() },
    { author: faker.name.firstName(), date: '5 days ago', text: faker.word.words(12), avatar: faker.image.avatar() },
    { author: faker.name.firstName(), date: '5 days ago', text: faker.word.words(7), avatar: faker.image.avatar() }, 
];
