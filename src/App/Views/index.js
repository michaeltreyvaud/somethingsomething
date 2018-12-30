import Records from './Records';
import RecordsCreate from './Records/Create';
import RecordsUpdate from './Records/Update';

import Metrics from './Home/Metrics';
import Company from './Company';

import ManagementUsers from './Management/Users/users.container';
import ManagementUsersCreate from './Management/Users/Create/create.container';
import ManagementUsersUpdate from './Management/Users/Update/update.container';

import ManagementTeams from './Management/Teams/team.container';
import ManagementTeamsCreate from './Management/Teams/Create/create.container';
import ManagementTeamsUpdate from './Management/Teams/Update/update.container';

import ManagementSuppliers from './Management/Suppliers/suppliers.container';
import ManagementSupplierUpdate from './Management/Suppliers/Update/update.container';
import ManagementSuppliersCreate from './Management/Suppliers/Create/create.container';

import UserProfile from './User/Profile/profile.container';
import UserPassword from './User/Password';

import UserMedicalLog from './User/MedicalLog/medicalLog.container';
import UserMedicalLogCreate from './User/MedicalLog/Create/create.container';
import UserMedicalLogUpdate from './User/MedicalLog/Update/update.container';

import UserTrainingLog from './User/TrainingLog/trainingLog.container';
import UserTrainingLogCreate from './User/TrainingLog/Create/create.container';
import UserTrainingLogUpdate from './User/TrainingLog/Update/update.container';

import CheckList from './CheckList';
import CheckListCreate from './CheckList/Item/Create/create.container';

import CheckListCategory from './CheckList/Category/category.container';
import CheckListCategoryCreate from './CheckList/Category/Create/create.container';
import CheckListCategoryUpdate from './CheckList/Category/Update/update.container';

import SafetyTask from './SafetyRecord/SafetyTask';
import SafetyTaskCreate from './SafetyRecord/SafetyTask/Create/create.container';

//  TODO: What is this?
import SafetyLog from './SafetyRecord/SafetyLog';

import SafetyCategory from './SafetyRecord/Category/category.container';
import SafetyCategoryCreate from './SafetyRecord/Category/Create/create.container';
import SafetyCategoryUpdate from './SafetyRecord/Category/Update/update.container';

import FridgeItem from './Fridge/FridgeItem/fridgeItem.container';
import FridgeItemCreate from './Fridge/FridgeItem/Create/create.container';
import FridgeItemUpdate from './Fridge/FridgeItem/Update/update.container';

import FridgeTask from './Fridge/FridgeTask/fridgeTask.container';
import FridgeTaskCreate from './Fridge/FridgeTask/Create/create.container';

import FridgeChart from './Fridge/FridgeChart';

import FreezerItem from './Freezer/FreezerItem/freezerItem.container';
import FreezerItemCreate from './Freezer/FreezerItem/Create/create.container';
import FreezerItemUpdate from './Freezer/FreezerItem/Update/update.container';

import FreezerTask from './Freezer/FreezerTask/freezerTask.container';
import FreezerTaskCreate from './Freezer/FreezerTask/Create/create.container';

import FreezerChart from './Freezer/FreezerChart';

import FoodItem from './FoodItem/foodItem.container';
import FoodItemCreate from './FoodItem/Create/create.container';
import FoodItemUpdate from './FoodItem/Update/update.container';

import DeliveryRecords from './Traceability/DeliveryRecords';
import DeliveryRecordsCreate from './Traceability/DeliveryRecords/Create';
import TraceabilityLabels from './Traceability/TraceabilityLabels';

import Oil from './Oil/Oil';
import OilTask from './Oil/OilTask/oilTask';
import OilTaskCreate from './Oil/OilTask/Create/create';
import OilLog from './Oil/OilLog/oilLog.container';
import OilLogCreate from './Oil/OilLog/Create/create.container';

import Cleaning from './Cleaning/Cleaning/cleaningItem.container';
import CleaningCreate from './Cleaning/Cleaning/Create/create.container';
import CleaningUpdate from './Cleaning/Cleaning/Update/update.container';
import CleaningTask from './Cleaning/CleaningTask/cleaningTask';
import CleaningTaskCreate from './Cleaning/CleaningTask/Create/create';
import CleaningLog from './Cleaning/CleaningLog/cleaningLog.container';
import CleaningLogCreate from './Cleaning/CleaningLog/Create/create.container';

import Login from './Auth/Login';
import ForgotPassword from './ForgotPassword';

export default {
  Metrics,
  Company,
  Records,
  RecordsCreate,
  RecordsUpdate,
  ManagementUsers,
  ManagementUsersCreate,
  ManagementUsersUpdate,
  ManagementTeams,
  ManagementTeamsCreate,
  ManagementTeamsUpdate,
  ManagementSuppliers,
  ManagementSuppliersCreate,
  ManagementSupplierUpdate,
  UserProfile,
  UserPassword,
  UserMedicalLog,
  UserMedicalLogCreate,
  UserMedicalLogUpdate,
  UserTrainingLog,
  UserTrainingLogCreate,
  UserTrainingLogUpdate,
  CheckList,
  CheckListCreate,
  CheckListCategory,
  CheckListCategoryCreate,
  CheckListCategoryUpdate,
  SafetyTask,
  SafetyTaskCreate,
  SafetyLog,
  SafetyCategory,
  SafetyCategoryCreate,
  SafetyCategoryUpdate,
  FridgeItem,
  FridgeItemCreate,
  FridgeItemUpdate,
  FridgeTask,
  FridgeTaskCreate,
  FridgeChart,
  FreezerItem,
  FreezerItemCreate,
  FreezerItemUpdate,
  FreezerTask,
  FreezerTaskCreate,
  FreezerChart,
  FoodItem,
  FoodItemCreate,
  FoodItemUpdate,
  DeliveryRecords,
  DeliveryRecordsCreate,
  TraceabilityLabels,
  Oil,
  OilTask,
  OilTaskCreate,
  OilLog,
  OilLogCreate,
  Cleaning,
  CleaningCreate,
  CleaningUpdate,
  CleaningTask,
  CleaningTaskCreate,
  CleaningLog,
  CleaningLogCreate,
  Login,
  ForgotPassword,
};
