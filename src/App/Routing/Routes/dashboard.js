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
import HotHolding from '../../Views/HotHolding';
import FastCooling from '../../Views/FastCooling';
import Service from '../../Views/Service';
import ColdHotLocation from '../../Views/ColdHotLocation';
import ColdHotTransportLog from '../../Views/ColdHotTransportLog';
import SupplierList from '../../Views/Traceability/SupplierList';
import SupplierListCreate from '../../Views/Traceability/SupplierList/Create';
import DeliveryRecords from '../../Views/Traceability/DeliveryRecords';
import TraceabilityLabels from '../../Views/Traceability/TraceabilityLabels';

const dashRoutes = [
  // Main Navigation
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: '',
  },
  // Settings Navigation
  {
    path: '/CompanySettings',
    name: 'Company Profile',
    state: 'openCoSetting',
    icon: Business,
    component: CompanySettings,
  },
  {
    collapse: true,
    path: '/Settings',
    name: 'User Settings',
    state: 'openSettings',
    icon: SettingsApplications,
    views: [
      {
        path: '/UserSettings',
        name: 'User Settings',
        component: UserSettings,
      },
      {
        path: '/Authorisations',
        name: 'Authorisations',
        component: Authorisations,
      },
      {
        hidden: true,
        path: '/Authorisations/Create',
        name: 'Create Authorisation',
        component: AuthorisationsCreate,
      },
      {
        path: '/Teams',
        name: 'Teams',
        component: Teams,
      },
      {
        path: '/Users',
        name: 'Users',
        component: Users,
      },
    ],
  },
  {
    path: '/CheckList',
    name: 'Check List',
    state: 'openCheckList',
    component: CheckList,
    icon: CheckCircle,
    views: [
      {
        hidden: true,
        path: '/CheckList/Create',
        name: 'Create Task',
        component: CheckListCreate,
      },
    ],
  },
  {
    collapse: true,
    path: '/Safety',
    name: 'Safety Record',
    state: 'openSafetyRecord',
    icon: Assignment,
    views: [
      {
        path: '/SafetyTask',
        name: 'Safety Task',
        component: SafetyTask,
      },
      {
        path: '/SafetyLog',
        name: 'Safety Log',
        component: SafetyLog,
      },
      {
        path: '/SafetyCategory',
        name: 'Safety Category',
        component: SafetyCategory,
      },
    ],
  },
  // Temperature Navigation
  {
    collapse: true,
    path: '/Fridge',
    name: 'Fridge',
    state: 'openFridge',
    icon: AcUnit,
    views: [
      {
        path: '/FridgeItem',
        name: 'Fridge Item',
        component: FridgeItem,
      },
      {
        path: '/FridgeTask',
        name: 'Fridge Task',
        component: FridgeTask,
      },
      {
        path: '/FridgeLog',
        name: 'Fridge Log',
        component: FridgeLog,
      },
      {
        hidden: true,
        path: '/FridgeLog/Create',
        name: 'Create Fridge Log',
        component: FridgeLogCreate,
      },      
      {
        path: '/FridgeChart',
        name: 'Fridge Chart',
        component: FridgeChart,
      },
    ],
  },
  {
    collapse: true,
    path: '/Freezer',
    name: 'Freezer',
    state: 'openFreezer',
    icon: AcUnit,
    views: [
      {
        path: '/FreezerItem',
        name: 'Freezer Item',
        component: FreezerItem,
      },
      {
        path: '/FreezerTask',
        name: 'Freezer Task',
        component: FreezerTask,
      },
      {
        path: '/FreezerLog',
        name: 'Freezer Log',
        component: FreezerLog,
      },
      {
        hidden: true,
        path: '/FreezerLog/Create',
        name: 'Create Freezer Log',
        component: FreezerLogCreate,
      },        
      {
        path: '/FreezerChart',
        name: 'Freezer Chart',
        component: FreezerChart,
      },
    ],
  },
  // Item Navigation
  {
    path: '/FoodItem',
    name: 'Food Item',
    state: '',
    icon: Fastfood,
    component: FoodItem,
  },
  {
    path: '/HotHolding',
    name: 'Hot Holding',
    state: '',
    icon: Whatshot,
    component: HotHolding,
  },
  {
    path: '/FastCooling',
    name: 'Fast Cooling',
    state: '',
    icon: FastForward,
    component: FastCooling,
  },
  {
    path: '/Service',
    name: 'Service',
    state: '',
    icon: RoomService,
    component: Service,
  },
  {
    collapse: true,
    path: '/ColdHot',
    name: 'Cold/Hot Chain',
    state: 'openColdHot',
    icon: Voicemail,
    views: [
      {
        path: '/ColdHotLocation',
        name: 'Location',
        component: ColdHotLocation,
      },
      {
        path: '/ColdHotTransportLog',
        name: 'Transport Log',
        component: ColdHotTransportLog,
      },
    ],
  },
  {
    collapse: true,
    path: '/Traceability',
    name: 'Traceability/deliveries',
    state: 'openTrace',
    icon: DirectionsCar,
    views: [
      {
        path: '/SupplierList',
        name: 'Supplier List',
        component: SupplierList,
      },
      {
        hidden: true,
        path: '/SupplierList/Create',
        name: 'Create Supplier',
        component: SupplierListCreate,
      },
      {
        path: '/DeliveryRecords',
        name: 'Delivery Records',
        component: DeliveryRecords,
      },
      {
        path: '/TraceabilityLabels',
        name: 'Labels',
        component: TraceabilityLabels,
      },
    ],
  },
  {
    path: '/Menus',
    name: 'Menus',
    state: 'openMenus',
    icon: Book,
    component: 'Menus',
  },
  {
    collapse: true,
    path: '/Oil',
    name: 'Oil Test',
    state: 'openOilTest',
    icon: Colorize,
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
    icon: LocalDrink,
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
    icon: Timeline,
    component: 'Reports',
  },
  {
    path: '/SafetySheet',
    name: 'Safety Datasheet',
    state: 'openSafetySheet',
    icon: Description,
    component: 'SafetySheet',
  },
  {
    path: '/PestManagement',
    name: 'Pest Management',
    state: 'openPestManagement',
    icon: BugReport,
    component: 'PestManagement',
  },
];
export default dashRoutes;
