import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-snezhko222-клиенты-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-snezhko222-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-snezhko222-клиенты-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуг.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуг.title'),
          children: [{
            link: 'i-i-s-snezhko222-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-snezhko222-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-snezhko222-услуга-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-snezhko222-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko222-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko222-сотрудники-l.title'),
            children: null
          }, {
            link: 'i-i-s-snezhko222-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko222-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko222-должности-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-snezhko222-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-snezhko222-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-snezhko222-заказ-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-детали.caption'),
          title: i18n.t('forms.application.sitemap.справочник-детали.title'),
          children: [{
            link: 'i-i-s-snezhko222-детали-l',
            caption: i18n.t('forms.application.sitemap.справочник-детали.i-i-s-snezhko222-детали-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-детали.i-i-s-snezhko222-детали-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.бокс.caption'),
          title: i18n.t('forms.application.sitemap.бокс.title'),
          children: [{
            link: 'i-i-s-snezhko222-бокс-l',
            caption: i18n.t('forms.application.sitemap.бокс.i-i-s-snezhko222-бокс-l.caption'),
            title: i18n.t('forms.application.sitemap.бокс.i-i-s-snezhko222-бокс-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})