import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhko222-бокс-l');
  this.route('i-i-s-snezhko222-бокс-e',
  { path: 'i-i-s-snezhko222-бокс-e/:id' });
  this.route('i-i-s-snezhko222-бокс-e.new',
  { path: 'i-i-s-snezhko222-бокс-e/new' });
  this.route('i-i-s-snezhko222-детали-l');
  this.route('i-i-s-snezhko222-детали-e',
  { path: 'i-i-s-snezhko222-детали-e/:id' });
  this.route('i-i-s-snezhko222-детали-e.new',
  { path: 'i-i-s-snezhko222-детали-e/new' });
  this.route('i-i-s-snezhko222-должности-l');
  this.route('i-i-s-snezhko222-должности-e',
  { path: 'i-i-s-snezhko222-должности-e/:id' });
  this.route('i-i-s-snezhko222-должности-e.new',
  { path: 'i-i-s-snezhko222-должности-e/new' });
  this.route('i-i-s-snezhko222-заказ-l');
  this.route('i-i-s-snezhko222-заказ-e',
  { path: 'i-i-s-snezhko222-заказ-e/:id' });
  this.route('i-i-s-snezhko222-заказ-e.new',
  { path: 'i-i-s-snezhko222-заказ-e/new' });
  this.route('i-i-s-snezhko222-клиенты-l');
  this.route('i-i-s-snezhko222-клиенты-e',
  { path: 'i-i-s-snezhko222-клиенты-e/:id' });
  this.route('i-i-s-snezhko222-клиенты-e.new',
  { path: 'i-i-s-snezhko222-клиенты-e/new' });
  this.route('i-i-s-snezhko222-сотрудники-l');
  this.route('i-i-s-snezhko222-сотрудники-e',
  { path: 'i-i-s-snezhko222-сотрудники-e/:id' });
  this.route('i-i-s-snezhko222-сотрудники-e.new',
  { path: 'i-i-s-snezhko222-сотрудники-e/new' });
  this.route('i-i-s-snezhko222-услуга-l');
  this.route('i-i-s-snezhko222-услуга-e',
  { path: 'i-i-s-snezhko222-услуга-e/:id' });
  this.route('i-i-s-snezhko222-услуга-e.new',
  { path: 'i-i-s-snezhko222-услуга-e/new' });
});

export default Router;
