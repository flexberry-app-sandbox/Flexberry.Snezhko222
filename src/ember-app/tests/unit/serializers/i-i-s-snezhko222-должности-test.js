import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko222-должности', 'Unit | Serializer | i-i-s-snezhko222-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-snezhko222-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-snezhko222-единицы',
    'transform:i-i-s-snezhko222-тип-автомобиля',
    'transform:i-i-s-snezhko222-тип-оплаты',

    'model:i-i-s-snezhko222-автомобиль',
    'model:i-i-s-snezhko222-бокс',
    'model:i-i-s-snezhko222-детали',
    'model:i-i-s-snezhko222-должности',
    'model:i-i-s-snezhko222-заказ',
    'model:i-i-s-snezhko222-клиенты',
    'model:i-i-s-snezhko222-состав-заказа',
    'model:i-i-s-snezhko222-состав-услуги',
    'model:i-i-s-snezhko222-сотрудники',
    'model:i-i-s-snezhko222-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
