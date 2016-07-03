import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Analyse',
        stats: '57,820',
        icon: 'fa-cart-plus',
        coloricon: 'analyse',
        hoverdesc: 'Analyse pour évaluation terminé',
      }, {
        color: pieColor,
        description: 'Dev',
        stats: '$ 89,745',
        icon: 'fa-code',
        coloricon: 'dev',
        hoverdesc: 'En développement',
      }, {
        color: pieColor,
        description: 'Support',
        stats: '32,592',
        icon: 'fa-comments-o',
        coloricon: 'support-analyste',
        hoverdesc: 'Demande de support à l\'analyste',
      }, {
        color: pieColor,
        description: 'Dev Terminé',
        stats: '32,592',
        icon: 'fa-cloud-upload',
        coloricon: 'dev-termine',
        hoverdesc: 'En cours de test hors-dev',
      }, {
        color: pieColor,
        description: 'Urgent',
        stats: '32,592',
        icon: 'fa-fire',
        coloricon: 'urgent-asap',
        hoverdesc: 'Demande urgente',
      }, {
        color: pieColor,
        description: 'En Attente',
        stats: '178,391',
        icon: 'fa-spinner',
        coloricon: 'en-attente',
        hoverdesc: 'En attente ou sur la glace',
      }, {
        color: pieColor,
        description: 'PROD',
        stats: '32,592',
        icon: 'fa-key',
        coloricon: 'prod',
        hoverdesc: 'Demande en prod',
      }, {
        color: pieColor,
        description: 'Approuvé',
        stats: '32,592',
        icon: 'fa-envelope-o',
        coloricon: 'confirme-par-chef',
        hoverdesc: 'Confirmation du Chef d\'équipe pour débuter',
      }
    ];
  }
}
