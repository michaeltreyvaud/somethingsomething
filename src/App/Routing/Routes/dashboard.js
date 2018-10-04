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

import Metrics from '../../Views/Home/Metrics';
import Company from '../../Views/Company/company.container';

import ManagementUsers from '../../Views/Management/Users/users.container';
import ManagementUsersUpdate from '../../Views/Management/Users/Update/update.container';
import ManagementTeams from '../../Views/Management/Teams/team.container';
import ManagementTeamsUpdate from '../../Views/Management/Teams/Update/update.container';
import ManagementSuppliers from '../../Views/Management/Suppliers/suppliers.container';
import ManagementSupplierUpdate from '../../Views/Management/Suppliers/Update/update.container';
import ManagementSuppliersCreate from '../../Views/Management/Suppliers/Create';

import UserProfile from '../../Views/User/Profile/profile.container';
import UserPassword from '../../Views/User/Password';
import UserMedicalLog from '../../Views/User/MedicalLog/medicalLog.container';
import UserTrainingLog from '../../Views/User/TrainingLog/trainingLog.container';

import CheckList from '../../Views/CheckList';
import CheckListCreate from '../../Views/CheckList/Create';
import SafetyTask from '../../Views/SafetyRecord/SafetyTask';
import SafetyTaskCreate from '../../Views/SafetyRecord/SafetyTask/Create';
//  TODO: What is this?
import SafetyLog from '../../Views/SafetyRecord/SafetyLog';
import SafetyCategory from '../../Views/SafetyRecord/SafetyCategory';

import FridgeItem from '../../Views/Fridge/FridgeItem/fridgeItem.container';
import FridgeItemUpdate from '../../Views/Fridge/FridgeItem/Update/update.container';
import FridgeTask from '../../Views/Fridge/FridgeTask';
import FridgeLog from '../../Views/Fridge/FridgeLog/fridgeLog.container';
import FridgeLogCreate from '../../Views/Fridge/FridgeLog/Create';
import FridgeLogUpdate from '../../Views/Fridge/FridgeLog/Update/update.container';
import FridgeChart from '../../Views/Fridge/FridgeChart';

import FreezerItem from '../../Views/Freezer/FreezerItem/freezerItem.container';
import FreezerItemUpdate from '../../Views/Freezer/FreezerItem/Update/update.container';
import FreezerTask from '../../Views/Freezer/FreezerTask';
import FreezerLog from '../../Views/Freezer/FreezerLog/freezerLog.container';
import FreezerLogCreate from '../../Views/Freezer/FreezerLog/Create';
import FreezerLogUpdate from '../../Views/Freezer/FreezerLog/Update/update.container';
import FreezerChart from '../../Views/Freezer/FreezerChart';

import FoodItem from '../../Views/FoodItem/foodItem.container';
import FoodItemUpdate from '../../Views/FoodItem/Update/update.container';

import HotHolding from '../../Views/HotHolding/hotHolding.container';
import HotHoldingUpdate from '../../Views/HotHolding/Update/update.container';

import FastCooling from '../../Views/FastCooling/fastCooling.container';
import FastCoolingUpdate from '../../Views/FastCooling/Update/update.container';

import Service from '../../Views/Service';
import ServiceCreate from '../../Views/Service/Create';

import ColdHotLocation from '../../Views/ColdHotLocation';
import ColdHotTransportLog from '../../Views/ColdHotTransportLog';
import ColdHotTransportCreate from '../../Views/ColdHotTransportLog/Create'
import DeliveryRecords from '../../Views/Traceability/DeliveryRecords';
import DeliveryRecordsCreate from '../../Views/Traceability/DeliveryRecords/Create';
import TraceabilityLabels from '../../Views/Traceability/TraceabilityLabels';

import Reports from '../../Views/Reports/';
import ReportsCreate from '../../Views/Reports/Create';

import SafetySheet from '../../Views/SafetySheet/';
import SafetySheetCreate from '../../Views/SafetySheet/Create';

import PestControl from '../../Views/PestControl';
import PestControlCreate from '../../Views/PestControl/Create';

const TODOComponent = () => (<h1>TODO</h1>);
const dashRoutes = [
  // Main Navigation
  {
    path: '/dashboard/home',
    name: 'Metrics',
    icon: DashboardIcon,
    component: Metrics,
  },
  // Settings Navigation
  {
    path: '/dashboard/company',
    name: 'Company Profile',
    icon: Business,
    component: Company,
  },
  {
    collapse: true,
    path: '/dashboard/user',
    name: 'User Settings',
    state: 'openUser',
    icon: SettingsApplications,
    hidden: true,
    views: [
      {
        hidden: true,
        path: '/dashboard/user/profile',
        name: 'User Profile',
        component: UserProfile,
      },
      {
        hidden: true,
        path: '/dashboard/user/password',
        name: 'Password',
        component: UserPassword,
      },
      {
        hidden: true,
        path: '/dashboard/user/medical',
        name: 'Medical Log',
        component: UserMedicalLog,
      },
      {
        hidden: true,
        path: '/dashboard/user/training',
        name: 'Training Log',
        component: UserTrainingLog,
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/management',
    name: 'Management',
    state: 'openManagement',
    icon: SettingsApplications,
    views: [
      {
        path: '/dashboard/management/teams',
        name: 'Teams',
        component: ManagementTeams,
      },
      {
        hidden: true,
        path: '/dashboard/management/teams/:id',
        name: 'Team',
        component: ManagementTeamsUpdate,
      },
      {
        path: '/dashboard/management/users',
        name: 'Users',
        component: ManagementUsers,
      },
      {
        hidden: true,
        path: '/dashboard/management/users/:id',
        name: 'Users',
        component: ManagementUsersUpdate,
      },
      {
        path: '/dashboard/management/suppliers',
        name: 'Suppliers',
        component: ManagementSuppliers,
      },
      {
        hidden: true,
        path: '/dashboard/management/suppliers/create',
        name: 'Create Supplier',
        component: ManagementSuppliersCreate,
      },
      {
        hidden: true,
        path: '/dashboard/management/suppliers/:id',
        name: 'Supplier',
        component: ManagementSupplierUpdate,
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
        hidden: true,
        path: '/dashboard/fridge/item/:id',
        name: 'Fridge Item',
        component: FridgeItemUpdate,
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
        path: '/dashboard/fridge/log/:id',
        name: 'Create Fridge Log',
        component: FridgeLogUpdate,
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
        hidden: true,
        path: '/dashboard/freezer/item/:id',
        name: 'Freezer Item',
        component: FreezerItemUpdate,
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
        path: '/dashboard/freezer/log/:id',
        name: 'Create Freezer Log',
        component: FreezerLogUpdate,
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
        path: '/dashboard/fooditem/:id',
        name: 'Food Item',
        component: FoodItemUpdate,
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
        path: '/dashboard/hotholding/:id',
        name: 'Hot Holding Item',
        component: HotHoldingUpdate,
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
        path: '/dashboard/fastcooling/:id',
        name: 'Fast Cooling Item',
        component: FastCoolingUpdate,
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
        path: '/dashboard/transport/location',
        name: 'Location',
        component: ColdHotLocation,
      },
      {
        path: '/dashboard/transport/log',
        name: 'Transport Log',
        component: ColdHotTransportLog,
      },
      {
        hidden: true,
        path: '/dashboard/transport/create',
        name: 'Create Transport Log',
        component: ColdHotTransportCreate,
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
        path: '/dashboard/delivery',
        name: 'Delivery Records',
        component: DeliveryRecords,
      },
      {
        hidden: true,
        path: '/dashboard/delivery/create',
        name: 'Create Delivery Record',
        component: DeliveryRecordsCreate,
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
    component: Reports,
    views: [
      {
        hidden: true,
        path: '/dashboard/reports/create',
        name: 'Create Report Log',
        component: ReportsCreate,
      },
    ]    
  },
  {
    path: '/dashboard/safetysheet',
    name: 'Safety Datasheet',
    state: 'openSafetySheet',
    icon: Description,
    component: SafetySheet,
    views: [
      {
        hidden: true,
        path: '/dashboard/safetysheet/create',
        name: 'Create Safety Datasheet',
        component: SafetySheetCreate,
      },
    ]
  },  
  {
    path: '/dashboard/pest',
    name: 'Pest Management',
    state: 'openPestManagement',
    icon: BugReport,
    component: PestControl,
    views: [
      {
        hidden: true,
        path: '/dashboard/pest/create',
        name: 'Create Pest Record',
        component: PestControlCreate,
      },
    ]
  },
];
export default dashRoutes;
