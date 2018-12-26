import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Business from '@material-ui/icons/Business';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Assignment from '@material-ui/icons/Assignment';
import AcUnit from '@material-ui/icons/AcUnit';
import Fastfood from '@material-ui/icons/Fastfood';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Colorize from '@material-ui/icons/Colorize';
import LocalDrink from '@material-ui/icons/LocalDrink';

import Metrics from '../../Views/Home/Metrics';
import Company from '../../Views/Company/company.container';

import Records from '../../Views/Records';
import RecordsCreate from '../../Views/Records/Create';

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
import CheckListCreate from '../../Views/CheckList/Item/Create/create.container';

import CheckListCategory from '../../Views/CheckList/Category/category.container';
import CheckListCategoryCreate from '../../Views/CheckList/Category/Create/create.container';
import CheckListCategoryUpdate from '../../Views/CheckList/Category/Update/update.container';

import SafetyTask from '../../Views/SafetyRecord/SafetyTask';
import SafetyTaskCreate from '../../Views/SafetyRecord/SafetyTask/Create/create.container';

//  TODO: What is this?
import SafetyLog from '../../Views/SafetyRecord/SafetyLog';

import SafetyCategory from '../../Views/SafetyRecord/Category/category.container';
import SafetyCategoryCreate from '../../Views/SafetyRecord/Category/Create/create.container';
import SafetyCategoryUpdate from '../../Views/SafetyRecord/Category/Update/update.container';

import FridgeItem from '../../Views/Fridge/FridgeItem/fridgeItem.container';
import FridgeItemCreate from '../../Views/Fridge/FridgeItem/Create/create.container';
import FridgeItemUpdate from '../../Views/Fridge/FridgeItem/Update/update.container';

import FridgeTask from '../../Views/Fridge/FridgeTask/fridgeTask.container';
import FridgeTaskCreate from '../../Views/Fridge/FridgeTask/Create/create.container';

import FridgeChart from '../../Views/Fridge/FridgeChart';

import FreezerItem from '../../Views/Freezer/FreezerItem/freezerItem.container';
import FreezerItemCreate from '../../Views/Freezer/FreezerItem/Create/create.container';
import FreezerItemUpdate from '../../Views/Freezer/FreezerItem/Update/update.container';

import FreezerTask from '../../Views/Freezer/FreezerTask/freezerTask.container';
import FreezerTaskCreate from '../../Views/Freezer/FreezerTask/Create/create.container';

import FreezerChart from '../../Views/Freezer/FreezerChart';

import FoodItem from '../../Views/FoodItem/foodItem.container';
import FoodItemCreate from '../../Views/FoodItem/Create/create.container';
import FoodItemUpdate from '../../Views/FoodItem/Update/update.container';

import DeliveryRecords from '../../Views/Traceability/DeliveryRecords';
import DeliveryRecordsCreate from '../../Views/Traceability/DeliveryRecords/Create';
import TraceabilityLabels from '../../Views/Traceability/TraceabilityLabels';

import Oil from '../../Views/Oil/Oil';
import OilTask from '../../Views/Oil/OilTask/oilTask';
import OilTaskCreate from '../../Views/Oil/OilTask/Create/create';
import OilLog from '../../Views/Oil/OilLog/oilLog.container';
import OilLogCreate from '../../Views/Oil/OilLog/Create/create.container';

import Cleaning from '../../Views/Cleaning/Cleaning/cleaningItem.container';
import CleaningCreate from '../../Views/Cleaning/Cleaning/Create/create.container';
import CleaningUpdate from '../../Views/Cleaning/Cleaning/Update/update.container';
import CleaningTask from '../../Views/Cleaning/CleaningTask/cleaningTask';
import CleaningTaskCreate from '../../Views/Cleaning/CleaningTask/Create/create';
import CleaningLog from '../../Views/Cleaning/CleaningLog/cleaningLog.container';
import CleaningLogCreate from '../../Views/Cleaning/CleaningLog/Create/create.container';

const dashRoutes = [
  {
    path: '/dashboard/records',
    name: 'Records',
    icon: Assignment,
    component: Records,
    views: [
      {
        hidden: true,
        path: '/dashboard/records/create',
        name: 'Create Record',
        component: RecordsCreate,
      },
    ],
  },
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
    collapse: true,
    path: '/dashboard/checklist',
    name: 'Check List',
    state: 'openCheckList',
    icon: CheckCircle,
    views: [
      {
        path: '/dashboard/checklist/item',
        name: 'Check List',
        component: CheckList,
      },
      {
        hidden: true,
        path: '/dashboard/checklist/item/create',
        name: 'Create Task',
        component: CheckListCreate,
      },
      {
        path: '/dashboard/checklist/category',
        name: 'Category',
        component: CheckListCategory,
      },
      {
        hidden: true,
        path: '/dashboard/checklist/category/create',
        name: 'Create Category',
        component: CheckListCategoryCreate,
      },
      {
        hidden: true,
        path: '/dashboard/checklist/category/:id',
        name: 'Update Category',
        component: CheckListCategoryUpdate,
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
      {
        hidden: true,
        path: '/dashboard/safety/category/create',
        name: 'Create Category',
        component: SafetyCategoryCreate,
      },
      {
        hidden: true,
        path: '/dashboard/safety/category/:id',
        name: 'Update Category',
        component: SafetyCategoryUpdate,
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
    collapse: true,
    path: '/dashboard/traceability',
    name: 'Delivery Records',
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
    collapse: true,
    path: '/dashboard/oil',
    name: 'Oil Test',
    state: 'openOilTest',
    icon: Colorize,
    views: [
      {
        path: '/dashboard/oil/location',
        name: 'Location',
        component: Oil,
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
        path: '/dashboard/cleaning/item',
        name: 'Location',
        component: Cleaning,
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/item/create',
        name: 'Item Create',
        component: CleaningCreate,
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/item/:id',
        name: 'Item Create',
        component: CleaningUpdate,
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
];
export default dashRoutes;
