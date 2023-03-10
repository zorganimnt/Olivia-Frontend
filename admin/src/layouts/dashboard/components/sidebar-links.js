import { HiChartPie, HiShoppingBag, HiUsers } from 'react-icons/hi';
import { BiCategoryAlt } from 'react-icons/bi';

export const sidebarLinks = [
  {
    name: 'Dashboard',
    link: '/',
    icon: HiChartPie,
  },
  {
    name: 'Products',
    link: '/products',
    icon: HiShoppingBag,
  },
  {
    name: 'Categories',
    link: '/categories',
    icon: BiCategoryAlt,
  },
  {
    name: 'Users',
    link: '/users',
    icon: HiUsers,
  },
];
