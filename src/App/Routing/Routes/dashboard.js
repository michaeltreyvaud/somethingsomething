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
import ManagementUsersCreate from '../../Views/Management/Users/Create/create.container';
import ManagementUsersUpdate from '../../Views/Management/Users/Update/update.container';

import ManagementTeams from '../../Views/Management/Teams/team.container';
import ManagementTeamsCreate from '../../Views/Management/Teams/Create/create.container';
import ManagementTeamsUpdate from '../../Views/Management/Teams/Update/update.container';

import ManagementSuppliers from '../../Views/Management/Suppliers/suppliers.container';
import ManagementSupplierUpdate from '../../Views/Management/Suppliers/Update/update.container';
import ManagementSuppliersCreate from '../../Views/Management/Suppliers/Create/create.container';

import UserProfile from '../../Views/User/Profile/profile.container';
import UserPassword from '../../Views/User/Password';

import UserMedicalLog from '../../Views/User/MedicalLog/medicalLog.container';
import UserMedicalLogCreate from '../../Views/User/MedicalLog/Create/create.container';
import UserMedicalLogUpdate from '../../Views/User/MedicalLog/Update/update.container';

import UserTrainingLog from '../../Views/User/TrainingLog/trainingLog.container';
import UserTrainingLogCreate from '../../Views/User/TrainingLog/Create/create.container';
import UserTrainingLogUpdate from '../../Views/User/TrainingLog/Update/update.container';

import CheckList from '../../Views/CheckList';
import CheckListCreate from '../../Views/CheckList/Create';
import SafetyTask from '../../Views/SafetyRecord/SafetyTask';
import SafetyTaskCreate from '../../Views/SafetyRecord/SafetyTask/Create';
//  TODO: What is this?
import SafetyLog from '../../Views/SafetyRecord/SafetyLog';
import SafetyCategory from '../../Views/SafetyRecord/SafetyCategory';

import FridgeItem from '../../Views/Fridge/FridgeItem/fridgeItem.container';
import FridgeItemCreate from '../../Views/Fridge/FridgeItem/Create/create.container';
import FridgeItemUpdate from '../../Views/Fridge/FridgeItem/Update/update.container';

import FridgeTask from '../../Views/Fridge/FridgeTask';
import FridgeTaskCreate from '../../Views/Fridge/FridgeTask/Create/create.container';

import FridgeLog from '../../Views/Fridge/FridgeLog/fridgeLog.container';
import FridgeLogCreate from '../../Views/Fridge/FridgeLog/Create/create.container';
import FridgeLogUpdate from '../../Views/Fridge/FridgeLog/Update/update.container';

import FridgeChart from '../../Views/Fridge/FridgeChart';

import FreezerItem from '../../Views/Freezer/FreezerItem/freezerItem.container';
import FreezerItemCreate from '../../Views/Freezer/FreezerItem/Create/create.container';
import FreezerItemUpdate from '../../Views/Freezer/FreezerItem/Update/update.container';

import FreezerTask from '../../Views/Freezer/FreezerTask';
import FreezerTaskCreate from '../../Views/Freezer/FreezerTask/Create/create.container';

import FreezerLog from '../../Views/Freezer/FreezerLog/freezerLog.container';
import FreezerLogCreate from '../../Views/Freezer/FreezerLog/Create/create.container';
import FreezerLogUpdate from '../../Views/Freezer/FreezerLog/Update/update.container';

import FreezerChart from '../../Views/Freezer/FreezerChart';

import FoodItem from '../../Views/FoodItem/foodItem.container';
import FoodItemCreate from '../../Views/FoodItem/Create/create.container';
import FoodItemUpdate from '../../Views/FoodItem/Update/update.container';

import HotHolding from '../../Views/HotHolding/hotHolding.container';
import HotHoldingCreate from '../../Views/HotHolding/Create/create.container';
import HotHoldingUpdate from '../../Views/HotHolding/Update/update.container';

import FastCooling from '../../Views/FastCooling/fastCooling.container';
import FastCoolingCreate from '../../Views/FastCooling/Create/create.container';
import FastCoolingUpdate from '../../Views/FastCooling/Update/update.container';

import Service from '../../Views/Service';
import ServiceCreate from '../../Views/Service/Create';

import ColdHotLocation from '../../Views/ColdHotLocation';
import ColdHotTransportLog from '../../Views/ColdHotTransportLog';
import ColdHotTransportCreate from '../../Views/ColdHotTransportLog/Create';
import DeliveryRecords from '../../Views/Traceability/DeliveryRecords';
import DeliveryRecordsCreate from '../../Views/Traceability/DeliveryRecords/Create';
import TraceabilityLabels from '../../Views/Traceability/TraceabilityLabels';

import OilTask from '../../Views/Oil/OilTask/oilTask';
import OilTaskCreate from '../../Views/Oil/OilTask/Create/create';
import OilLog from '../../Views/Oil/OilLog/oilLog';
import OilLogCreate from '../../Views/Oil/OilLog/Create/create';

import CleaningTask from '../../Views/Cleaning/CleaningTask/cleaningTask';
import CleaningTaskCreate from '../../Views/Cleaning/CleaningTask/Create/create';
import CleaningLog from '../../Views/Cleaning/CleaningLog/cleaningLog';
import CleaningLogCreate from '../../Views/Cleaning/CleaningLog/Create/create';

import Reports from '../../Views/Reports/report.container';
import ReportsCreate from '../../Views/Reports/Create/create.container';

import SafetySheet from '../../Views/SafetySheet/safety.container';
import SafetySheetCreate from '../../Views/SafetySheet/Create/create.container';

import PestControl from '../../Views/PestControl/pest.container';
import PestControlCreate from '../../Views/PestControl/Create/create.container';

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
        path: '/dashboard/user/medical/create',
        name: 'Medical Log',
        component: UserMedicalLogCreate,
      },
      {
        hidden: true,
        path: '/dashboard/user/medical/:id',
        name: 'Medical Log',
        component: UserMedicalLogUpdate,
      },
      {
        hidden: true,
        path: '/dashboard/user/training',
        name: 'Training Log',
        component: UserTrainingLog,
      },
      {
        hidden: true,
        path: '/dashboard/user/training/create',
        name: 'Training Log',
        component: UserTrainingLogCreate,
      },
      {
        hidden: true,
        path: '/dashboard/user/training/:id',
        name: 'Training Log',
        component: UserTrainingLogUpdate,
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
        path: '/dashboard/management/teams/create',
        name: 'Team',
        component: ManagementTeamsCreate,
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
        path: '/dashboard/management/users/create',
        name: 'Users',
        component: ManagementUsersCreate,
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
        path: '/dashboard/fridge/item/create',
        name: 'Fridge Item',
        component: FridgeItemCreate,
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
        hidden: true,
        path: '/dashboard/fridge/task/create',
        name: 'Create Task',
        component: FridgeTaskCreate,
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
        hidden: true,
        path: '/dashboard/fridge/log/:id',
        name: 'Create Fridge Log',
        component: FridgeLogUpdate,
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
        path: '/dashboard/freezer/item/create',
        name: 'Freezer Item',
        component: FreezerItemCreate,
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
        hidden: true,
        path: '/dashboard/freezer/task/create',
        name: 'Create Task',
        component: FreezerTaskCreate,
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
        hidden: true,
        path: '/dashboard/freezer/log/:id',
        name: 'Create Freezer Log',
        component: FreezerLogUpdate,
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
        path: '/dashboard/fooditem/create',
        name: 'Food Item',
        component: FoodItemCreate,
      },
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
        path: '/dashboard/hotholding/create',
        name: 'Create Item',
        component: HotHoldingCreate,
      },
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
        path: '/dashboard/fastcooling/create',
        name: 'Create Item',
        component: FastCoolingCreate,
      },
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
        component: OilTask,
        OilTaskCreate,
      },
      {
        hidden: true,
        path: '/dashboard/oil/task/create',
        name: 'Create',
        component: OilTaskCreate,
      },
      {
        path: '/dashboard/oil/log',
        name: 'Log',
        component: OilLog,
      },
      {
        hidden: true,
        path: '/dashboard/oil/log/create',
        name: 'Create',
        component: OilLogCreate,
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
        component: CleaningTask,
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/task/create',
        name: 'Task',
        component: CleaningTaskCreate,
      },
      {
        path: '/dashboard/cleaning/log',
        name: 'Log',
        component: CleaningLog,
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/log/create',
        name: 'Create',
        component: CleaningLogCreate,
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
    ],
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
    ],
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
    ],
  },
];
export default dashRoutes;
