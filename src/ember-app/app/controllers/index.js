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
          caption: i18n.t('forms.application.sitemap.snezhko222.caption'),
          title: i18n.t('forms.application.sitemap.snezhko222.title'),
          children: [{
            link: 'i-i-s-snezhko222-должности-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-должности-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-snezhko222-заказ-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-заказ-l.title'),
            children: null
          }, {
            link: 'i-i-s-snezhko222-детали-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-детали-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-детали-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-snezhko222-клиенты-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-клиенты-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-snezhko222-услуга-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-услуга-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-snezhko222-бокс-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-бокс-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-бокс-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-snezhko222-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko222.i-i-s-snezhko222-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})