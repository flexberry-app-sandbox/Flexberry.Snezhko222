import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSnezhko222БоксLForm from './forms/i-i-s-snezhko222-бокс-l';
import IISSnezhko222ДеталиLForm from './forms/i-i-s-snezhko222-детали-l';
import IISSnezhko222ДолжностиLForm from './forms/i-i-s-snezhko222-должности-l';
import IISSnezhko222ЗаказLForm from './forms/i-i-s-snezhko222-заказ-l';
import IISSnezhko222КлиентыLForm from './forms/i-i-s-snezhko222-клиенты-l';
import IISSnezhko222СотрудникиLForm from './forms/i-i-s-snezhko222-сотрудники-l';
import IISSnezhko222УслугаLForm from './forms/i-i-s-snezhko222-услуга-l';
import IISSnezhko222БоксEForm from './forms/i-i-s-snezhko222-бокс-e';
import IISSnezhko222ДеталиEForm from './forms/i-i-s-snezhko222-детали-e';
import IISSnezhko222ДолжностиEForm from './forms/i-i-s-snezhko222-должности-e';
import IISSnezhko222ЗаказEForm from './forms/i-i-s-snezhko222-заказ-e';
import IISSnezhko222КлиентыEForm from './forms/i-i-s-snezhko222-клиенты-e';
import IISSnezhko222СотрудникиEForm from './forms/i-i-s-snezhko222-сотрудники-e';
import IISSnezhko222УслугаEForm from './forms/i-i-s-snezhko222-услуга-e';
import IISSnezhko222АвтомобильModel from './models/i-i-s-snezhko222-автомобиль';
import IISSnezhko222БоксModel from './models/i-i-s-snezhko222-бокс';
import IISSnezhko222ДеталиModel from './models/i-i-s-snezhko222-детали';
import IISSnezhko222ДолжностиModel from './models/i-i-s-snezhko222-должности';
import IISSnezhko222ЗаказModel from './models/i-i-s-snezhko222-заказ';
import IISSnezhko222КлиентыModel from './models/i-i-s-snezhko222-клиенты';
import IISSnezhko222СоставЗаказаModel from './models/i-i-s-snezhko222-состав-заказа';
import IISSnezhko222СоставУслугиModel from './models/i-i-s-snezhko222-состав-услуги';
import IISSnezhko222СотрудникиModel from './models/i-i-s-snezhko222-сотрудники';
import IISSnezhko222УслугаModel from './models/i-i-s-snezhko222-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhko222-автомобиль': IISSnezhko222АвтомобильModel,
    'i-i-s-snezhko222-бокс': IISSnezhko222БоксModel,
    'i-i-s-snezhko222-детали': IISSnezhko222ДеталиModel,
    'i-i-s-snezhko222-должности': IISSnezhko222ДолжностиModel,
    'i-i-s-snezhko222-заказ': IISSnezhko222ЗаказModel,
    'i-i-s-snezhko222-клиенты': IISSnezhko222КлиентыModel,
    'i-i-s-snezhko222-состав-заказа': IISSnezhko222СоставЗаказаModel,
    'i-i-s-snezhko222-состав-услуги': IISSnezhko222СоставУслугиModel,
    'i-i-s-snezhko222-сотрудники': IISSnezhko222СотрудникиModel,
    'i-i-s-snezhko222-услуга': IISSnezhko222УслугаModel
  },

  'application-name': 'Snezhko222',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Snezhko222',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhko222',
          title: 'Snezhko222'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-snezhko222-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        'справочник-услуг': {
          caption: 'Справочник услуг',
          title: 'Справочник услуг',
          'i-i-s-snezhko222-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-snezhko222-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-snezhko222-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-snezhko222-заказ-l': {
            caption: 'Заказ',
            title: 'Заказ'
          }
        },
        'справочник-детали': {
          caption: 'Справочник детали',
          title: 'Справочник детали',
          'i-i-s-snezhko222-детали-l': {
            caption: 'Детали',
            title: 'Детали'
          }
        },
        бокс: {
          caption: 'Бокс',
          title: 'Бокс',
          'i-i-s-snezhko222-бокс-l': {
            caption: 'Бокс',
            title: 'Бокс'
          }
        },
        snezhko222: {
          caption: 'Snezhko222',
          title: 'Snezhko222',
          'i-i-s-snezhko222-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-snezhko222-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-snezhko222-детали-l': {
            caption: 'Детали',
            title: ''
          },
          'i-i-s-snezhko222-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-snezhko222-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-snezhko222-бокс-l': {
            caption: 'Бокс',
            title: ''
          },
          'i-i-s-snezhko222-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-snezhko222-бокс-l': IISSnezhko222БоксLForm,
    'i-i-s-snezhko222-детали-l': IISSnezhko222ДеталиLForm,
    'i-i-s-snezhko222-должности-l': IISSnezhko222ДолжностиLForm,
    'i-i-s-snezhko222-заказ-l': IISSnezhko222ЗаказLForm,
    'i-i-s-snezhko222-клиенты-l': IISSnezhko222КлиентыLForm,
    'i-i-s-snezhko222-сотрудники-l': IISSnezhko222СотрудникиLForm,
    'i-i-s-snezhko222-услуга-l': IISSnezhko222УслугаLForm,
    'i-i-s-snezhko222-бокс-e': IISSnezhko222БоксEForm,
    'i-i-s-snezhko222-детали-e': IISSnezhko222ДеталиEForm,
    'i-i-s-snezhko222-должности-e': IISSnezhko222ДолжностиEForm,
    'i-i-s-snezhko222-заказ-e': IISSnezhko222ЗаказEForm,
    'i-i-s-snezhko222-клиенты-e': IISSnezhko222КлиентыEForm,
    'i-i-s-snezhko222-сотрудники-e': IISSnezhko222СотрудникиEForm,
    'i-i-s-snezhko222-услуга-e': IISSnezhko222УслугаEForm
  },

});

export default translations;
