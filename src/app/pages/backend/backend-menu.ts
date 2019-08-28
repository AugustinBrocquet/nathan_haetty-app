
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Utilisateurs',
    icon: 'shopping-cart-outline',
    link: '/admin/users',
    home: true
  },
  {
    title: 'Connexion',
    icon: 'shopping-cart-outline',
    link: '/admin/auth/login',
  },
  {
    title: 'Demande Mdp',
    icon: 'shopping-cart-outline',
    link: '/admin/auth/request-password',
  },
  {
    title: 'Réinitialisation Mdp',
    icon: 'shopping-cart-outline',
    link: '/admin/auth/reset-password/5cb3007ef76c195bc6d57d75faeccdda0c81b2e6',
  },
  {
    title: 'Messages',
    icon: 'shopping-cart-outline',
    link: '/admin/messages',
  },
  {
    title: 'Token expiré',
    icon: 'shopping-cart-outline',
    link: '/admin/auth/expired-token',
  },
  {
    title: 'Token invalide',
    icon: 'shopping-cart-outline',
    link: '/admin/auth/invalid-token',
  }
];
