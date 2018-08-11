import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Image from '@material-ui/icons/Image';
import Apps from '@material-ui/icons/Apps';

import CompanySettings from '../../Views/Settings/CompanySettings/index';
import UserSettings from '../../Views/Settings/UserSettings/index';

const testing = () => (<h1>testing</h1>);

const dashRoutes = [
  // Main Navigation
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: testing,
  },
  // Settings Navigation
  {
    path: '/CompanySettings',
    name: 'Company Profile',
    state: 'openCoSetting',
    icon: Image,
    component: CompanySettings,
  },
  {
    collapse: true,
    path: '/Settings',
    name: 'User Settings',
    state: 'openSettings',
    icon: Apps,
    views: [
      {
        path: '/UserSettings',
        name: 'User Settings',
        component: UserSettings,
      },
      {
        path: '/Authorisations',
        name: 'Authorisations',
        component: 'Authorisations',
      },
      {
        path: '/Teams',
        name: 'Teams',
        component: 'Teams',
      },
      {
        path: '/Users',
        name: 'Users',
        component: 'Users',
      },
    ],
  },
  {
    path: '/CheckList',
    name: 'Check List',
    state: '',
    icon: Image,
  },
  {
    collapse: true,
    path: '/Safety',
    name: 'Safety Record',
    state: 'openSafetyRecord',
    icon: Apps,
    views: [
      {
        path: '/SafetyTask',
        name: 'Task',
        component: 'SafetyTask',
      },
      {
        path: '/SafetyLog',
        name: 'Log',
        component: 'SafetyLog',
      },
      {
        path: '/SafetyCategory',
        name: 'Category',
        component: 'SafetyCategory',
      },
    ],
  },
  // Temperature Navigation
  {
    collapse: true,
    path: '/Fridge',
    name: 'Fridge',
    state: 'openFridge',
    icon: Apps,
    views: [
      {
        path: '/FridgeItem',
        name: 'Item',
        component: 'FridgeItem',
      },
      {
        path: '/FridgeTask',
        name: 'Task',
        component: 'FridgeTask',
      },
      {
        path: '/FridgeLog',
        name: 'Log',
        component: 'FridgeLog',
      },
      {
        path: '/FridgeChart',
        name: 'Chart',
        component: 'FridgeChart',
      },
    ],
  },
  {
    collapse: true,
    path: '/Freezer',
    name: 'Freezer',
    state: 'openFreezer',
    icon: Apps,
    views: [
      {
        path: '/FreezerItem',
        name: 'Item',
        component: 'FreezerItem',
      },
      {
        path: '/FreezerTask',
        name: 'Task',
        component: 'FreezerTask',
      },
      {
        path: '/FreezerLog',
        name: 'Log',
        component: 'FreezerLog',
      },
      {
        path: '/FreezerChart',
        name: 'Chart',
        component: 'FreezerChart',
      },
    ],
  },
  // Item Navigation
  {
    path: '/FoodItem',
    name: 'Food Item',
    state: '',
    icon: Image,
    component: 'FoodItem',
  },
  {
    path: '/HotHolding',
    name: 'Hot Holding',
    state: '',
    icon: Image,
    component: 'HotHolding',
  },
  {
    path: '/FastCooling',
    name: 'Fast Cooling',
    state: '',
    icon: Image,
    component: 'FastCooling',
  },
  {
    path: '/Service',
    name: 'Service',
    state: '',
    icon: Image,
    component: 'Service',
  },
  {
    collapse: true,
    path: '/ColdHot',
    name: 'Cold/Hot Chain',
    state: 'openColdHot',
    icon: Apps,
    views: [
      {
        path: '/ColdHotLocation',
        name: 'Location',
        component: 'ColdHotLocation',
      },
      {
        path: '/ColdHotTransportLog',
        name: 'Transport Log',
        component: 'ColdHotTransportLog',
      },
    ],
  },
  {
    collapse: true,
    path: '/Traceability',
    name: 'Traceability/deliveries',
    state: 'openTrace',
    icon: Apps,
    views: [
      {
        path: '/SupplierList',
        name: 'Supplier List',
        component: 'SupplierList',
      },
      {
        path: '/DeliveryRecords',
        name: 'Delivery Records',
        component: 'DeliveryRecords',
      },
      {
        path: '/TraceabilityLabels',
        name: 'Labels',
        component: 'TraceabilityLabels',
      },
    ],
  },
  {
    path: '/Menus',
    name: 'Menus',
    state: 'openMenus',
    icon: Image,
    component: 'Menus',
  },
  {
    collapse: true,
    path: '/Oil',
    name: 'Oil Test',
    state: 'openOilTest',
    icon: Apps,
    views: [
      {
        path: '/OilLocation',
        name: 'Location',
        component: 'OilLocation',
      },
      {
        path: '/OilTask',
        name: 'Task',
        component: 'OilTask',
      },
      {
        path: '/OilLog',
        name: 'Log',
        component: 'OilLog',
      },
    ],
  },
  {
    collapse: true,
    path: '/Cleaning',
    name: 'Cleaning',
    state: 'openCleaning',
    icon: Apps,
    views: [
      {
        path: '/CleaningLocation',
        name: 'Location',
        component: 'CleaningLocation',
      },
      {
        path: '/CleaningTask',
        name: 'Task',
        component: 'CleaningTask',
      },
      {
        path: '/CleaningLog',
        name: 'Log',
        component: 'CleaningLog',
      },
    ],
  },
  {
    path: '/Reports',
    name: 'Reports',
    state: 'openReports',
    icon: Image,
    component: 'Reports',
  },
  {
    path: '/SafetySheet',
    name: 'Safety Datasheet',
    state: 'openSafetySheet',
    icon: Image,
    component: 'SafetySheet',
  },
  {
    path: '/PestManagement',
    name: 'Pest Management',
    state: 'openPestManagement',
    icon: Image,
    component: 'PestManagement',
  },
];
export default dashRoutes;
