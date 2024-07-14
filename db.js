// ESM
import { faker } from '@faker-js/faker';
import fs from 'fs';
// CJS
// const { faker } = require('@faker-js/faker');
// const faker = new Faker({ locale: zh_CN });

function createNews() {
  let data = { news: [] };
  for (let i = 1; i <= 5; i++) {
    data.news.push({
      id: Number(i),
      title: faker.lorem.sentence(),
    });
  }
  return data;
}

fs.writeFileSync('db.json', JSON.stringify(createNews(), null, 2));
