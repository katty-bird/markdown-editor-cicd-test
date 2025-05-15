const fs = require('fs');
const { faker } = require('@faker-js/faker'); // install faker: npm install faker --save-dev

const generatePayload = () => {
  const payload = [];
  for (let i = 0; i < 100; i++) {
    payload.push({
      id: i,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(5),
    });
  }
  return payload;
};

const payload = generatePayload();
fs.writeFileSync('public/largePayload.json', JSON.stringify(payload, null, 2));
console.log('Payload generated: largePayload.json');
