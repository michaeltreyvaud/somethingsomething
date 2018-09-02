import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Business from '@material-ui/icons/Business';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Assignment from '@material-ui/icons/Assignment';
import AcUnit from '@material-ui/icons/AcUnit';
import Whatshot from '@material-ui/icons/Whatshot';
import Fastfood from '@material-ui/icons/Fastfood';
import FastForward from '@material-ui/icons/FastForward';
import RoomService from '@material-ui/icons/RoomService';
import Voicemail from '@material-ui/icons/Voicemail';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Book from '@material-ui/icons/Book';
import Colorize from '@material-ui/icons/Colorize';
import LocalDrink from '@material-ui/icons/LocalDrink';
import Timeline from '@material-ui/icons/Timeline';
import Description from '@material-ui/icons/Description';
import BugReport from '@material-ui/icons/BugReport';

import CompanySettings from '../../Views/Settings/CompanySettings';
import UserSettings from '../../Views/Settings/UserSettings';
import Authorisations from '../../Views/Settings/Authorisations';
import AuthorisationsCreate from '../../Views/Settings/Authorisations/Create';
import Teams from '../../Views/Settings/Teams';
import Users from '../../Views/Settings/Users';

import CheckList from '../../Views/CheckList';
import CheckListCreate from '../../Views/CheckList/Create';
import SafetyTask from '../../Views/SafetyRecord/SafetyTask';
import SafetyTaskCreate from '../../Views/SafetyRecord/SafetyTask/Create';
import SafetyLog from '../../Views/SafetyRecord/SafetyLog';
import SafetyCategory from '../../Views/SafetyRecord/SafetyCategory';

import FridgeItem from '../../Views/Fridge/FridgeItem';
import FridgeTask from '../../Views/Fridge/FridgeTask';
import FridgeLog from '../../Views/Fridge/FridgeLog';
import FridgeLogCreate from '../../Views/Fridge/FridgeLog/Create';
import FridgeChart from '../../Views/Fridge/FridgeChart';

import FreezerItem from '../../Views/Freezer/FreezerItem';
import FreezerTask from '../../Views/Freezer/FreezerTask';
import FreezerLog from '../../Views/Freezer/FreezerLog';
import FreezerLogCreate from '../../Views/Freezer/FreezerLog/Create';
import FreezerChart from '../../Views/Freezer/FreezerChart';

import FoodItem from '../../Views/FoodItem';
import FoodItemCreate from '../../Views/FoodItem/Create';

import HotHolding from '../../Views/HotHolding';
import HotHoldingCreate from '../../Views/HotHolding/Create';

import FastCooling from '../../Views/FastCooling';
import FastCoolingCreate from '../../Views/FastCooling/Create';

import Service from '../../Views/Service';
import ServiceCreate from '../../Views/Service/Create';

import ColdHotLocation from '../../Views/ColdHotLocation';
import ColdHotTransportLog from '../../Views/ColdHotTransportLog';
import SupplierList from '../../Views/Traceability/SupplierList';
import SupplierListCreate from '../../Views/Traceability/SupplierList/Create';
import DeliveryRecords from '../../Views/Traceability/DeliveryRecords';
import TraceabilityLabels from '../../Views/Traceability/TraceabilityLabels';

const TODOComponent = () => (<h1>TODO</h1>);
const dashRoutes = [
  // Main Navigation
  {
    path: '/dashboard/home',
    name: 'Metrics',
    icon: DashboardIcon,
    component: TODOComponent,
  },
  // Settings Navigation
  {
    path: '/dashboard/company',
    name: 'Company Profile',
    state: 'openCoSetting',
    icon: Business,
    component: CompanySettings,
  },
  {
    collapse: true,
    path: '/dashboard/settings',
    name: 'User Settings',
    state: 'openSettings',
    icon: SettingsApplications,
    views: [
      {
        path: '/dashboard/settings/user',
        name: 'User Settings',
        component: UserSettings,
      },
      {
        path: '/dashboard/settings/authorisations',
        name: 'Authorisations',
        component: Authorisations,
      },
      {
        hidden: true,
        path: '/dashboard/settings/authorisations/create',
        name: 'Create Authorisation',
        component: AuthorisationsCreate,
      },
      {
        path: '/dashboard/settings/teams',
        name: 'Teams',
        component: Teams,
      },
      {
        path: '/dashboard/settings/users',
        name: 'Users',
        component: Users,
      },
    ],
  },
  {
    path: '/dashboard/checklist',
    name: 'Check List',
    state: 'openCheckList',
    component: CheckList,
    icon: CheckCircle,
    views: [
      {
        hidden: true,
        path: '/dashboard/checklist/create',
        name: 'Create Task',
        component: CheckListCreate,
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/safety',
    name: 'Safety Record',
    state: 'openSafetyRecord',
    icon: Assignment,
    views: [
      {
        path: '/dashboard/safety/task',
        name: 'Safety Task',
        component: SafetyTask,
      },
      {
        hidden: true,
        path: '/dashboard/safety/create',
        name: 'Create Task',
        component: SafetyTaskCreate,
      },
      {
        path: '/dashboard/safety/log',
        name: 'Safety Log',
        component: SafetyLog,
      },
      {
        path: '/dashboard/safety/category',
        name: 'Safety Category',
        component: SafetyCategory,
      },
    ],
  },
  // Temperature Navigation
  {
    collapse: true,
    path: '/dashboard/fridge',
    name: 'Fridge',
    state: 'openFridge',
    icon: AcUnit,
    views: [
      {
        path: '/dashboard/fridge/item',
        name: 'Fridge Item',
        component: FridgeItem,
      },
      {
        path: '/dashboard/fridge/task',
        name: 'Fridge Task',
        component: FridgeTask,
      },
      {
        path: '/dashboard/fridge/log',
        name: 'Fridge Log',
        component: FridgeLog,
      },
      {
        hidden: true,
        path: '/dashboard/fridge/log/create',
        name: 'Create Fridge Log',
        component: FridgeLogCreate,
      },
      {
        path: '/dashboard/fridge/chart',
        name: 'Fridge Chart',
        component: FridgeChart,
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/freezer',
    name: 'Freezer',
    state: 'openFreezer',
    icon: AcUnit,
    views: [
      {
        path: '/dashboard/freezer/item',
        name: 'Freezer Item',
        component: FreezerItem,
      },
      {
        path: '/dashboard/freezer/task',
        name: 'Freezer Task',
        component: FreezerTask,
      },
      {
        path: '/dashboard/freezer/log',
        name: 'Freezer Log',
        component: FreezerLog,
      },
      {
        hidden: true,
        path: '/dashboard/freezer/log/create',
        name: 'Create Freezer Log',
        component: FreezerLogCreate,
      },
      {
        path: '/dashboard/freezer/chart',
        name: 'Freezer Chart',
        component: FreezerChart,
      },
    ],
  },
  // Item Navigation
  {
    path: '/dashboard/fooditem',
    name: 'Food Item',
    state: 'openFood',
    icon: Fastfood,
    component: FoodItem,
    views: [
      {
        hidden: true,
        path: '/dashboard/fooditem/create',
        name: 'Create Food Item',
        component: FoodItemCreate,
      },
    ],
  },
  {
    path: '/dashboard/hotholding',
    name: 'Hot Holding',
    state: '',
    icon: Whatshot,
    component: HotHolding,
    views: [
      {
        hidden: true,
        path: '/dashboard/hotholding/create',
        name: 'Capture Reheating Temperature',
        component: HotHoldingCreate,
      },
    ],
  },
  {
    path: '/dashboard/fastcooling',
    name: 'Fast Cooling',
    state: 'openFastCooling',
    icon: FastForward,
    component: FastCooling,
    views: [
      {
        hidden: true,
        path: '/dashboard/fastcooling/create',
        name: 'Capture Cooling Temperature',
        component: FastCoolingCreate,
      },
    ],
  },
  {
    path: '/dashboard/service',
    name: 'Service',
    state: 'openService',
    icon: RoomService,
    component: Service,
    views: [
      {
        hidden: true,
        path: '/dashboard/service/create',
        name: 'Capture Service Temperature',
        component: ServiceCreate,
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/hotcold',
    name: 'Cold/Hot Chain',
    state: 'openColdHot',
    icon: Voicemail,
    views: [
      {
        path: '/dashboard/hotcold/location',
        name: 'Location',
        component: ColdHotLocation,
      },
      {
        path: '/dashboard/hotcold/log',
        name: 'Transport Log',
        component: ColdHotTransportLog,
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/traceability',
    name: 'Traceability/deliveries',
    state: 'openTrace',
    icon: DirectionsCar,
    views: [
      {
        path: '/dashboard/traceability/suppliers',
        name: 'Supplier List',
        component: SupplierList,
      },
      {
        hidden: true,
        path: '/dashboard/traceability/suppliers/create',
        name: 'Create Supplier',
        component: SupplierListCreate,
      },
      {
        path: '/dashboard/traceability/records',
        name: 'Delivery Records',
        component: DeliveryRecords,
      },
      {
        path: '/dashboard/traceability/labels',
        name: 'Labels',
        component: TraceabilityLabels,
      },
    ],
  },
  {
    path: '/dashboard/menus',
    name: 'Menus',
    state: 'openMenus',
    icon: Book,
    component: TODOComponent,
  },
  {
    collapse: true,
    path: '/dashboard/oil',
    name: 'Oil Test',
    state: 'openOilTest',
    icon: Colorize,
    views: [
      {
        path: '/dashboard/oil/location',
        name: 'Location',
        component: TODOComponent,
      },
      {
        path: '/dashboard/oil/task',
        name: 'Task',
        component: TODOComponent,
      },
      {
        path: '/dashboard/oil/log',
        name: 'Log',
        component: TODOComponent,
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/cleaning',
    name: 'Cleaning',
    state: 'openCleaning',
    icon: LocalDrink,
    views: [
      {
        path: '/dashboard/cleaning/location',
        name: 'Location',
        component: TODOComponent,
      },
      {
        path: '/dashboard/cleaning/task',
        name: 'Task',
        component: TODOComponent,
      },
      {
        path: '/dashboard/cleaning/log',
        name: 'Log',
        component: TODOComponent,
      },
    ],
  },
  {
    path: '/dashboard/reports',
    name: 'Reports',
    state: 'openReports',
    icon: Timeline,
    component: TODOComponent,
  },
  {
    path: '/dashboard/safetysheet',
    name: 'Safety Datasheet',
    state: 'openSafetySheet',
    icon: Description,
    component: TODOComponent,
  },
  {
    path: '/dashboard/pest',
    name: 'Pest Management',
    state: 'openPestManagement',
    icon: BugReport,
    component: TODOComponent,
  },
];
export default dashRoutes;
