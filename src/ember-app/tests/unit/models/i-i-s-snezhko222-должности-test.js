import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko222-должности', 'Unit | Model | i-i-s-snezhko222-должности', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
