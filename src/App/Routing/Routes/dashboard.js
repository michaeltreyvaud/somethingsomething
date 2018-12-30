const dashRoutes = [
  {
    path: '/dashboard/records',
    name: 'Records',
    icon: 'Assignment',
    component: 'Records',
    views: [
      {
        hidden: true,
        path: '/dashboard/records/create',
        name: 'Create Record',
        component: 'RecordsCreate',
      },
    ],
  },
  // Main Navigation
  {
    path: '/dashboard/home',
    name: 'Metrics',
    icon: 'Dashboard',
    component: 'Metrics',
  },
  // Settings Navigation
  {
    path: '/dashboard/company',
    name: 'Company Profile',
    icon: 'Business',
    component: 'Company',
  },
  {
    collapse: true,
    path: '/dashboard/user',
    name: 'User Settings',
    state: 'openUser',
    icon: 'SettingsApplications',
    hidden: true,
    views: [
      {
        hidden: true,
        path: '/dashboard/user/profile',
        name: 'User Profile',
        component: 'UserProfile',
      },
      {
        hidden: true,
        path: '/dashboard/user/password',
        name: 'Password',
        component: 'UserPassword',
      },
      {
        hidden: true,
        path: '/dashboard/user/medical',
        name: 'Medical Log',
        component: 'UserMedicalLog',
      },
      {
        hidden: true,
        path: '/dashboard/user/medical/create',
        name: 'Medical Log',
        component: 'UserMedicalLogCreate',
      },
      {
        hidden: true,
        path: '/dashboard/user/medical/:id',
        name: 'Medical Log',
        component: 'UserMedicalLogUpdate',
      },
      {
        hidden: true,
        path: '/dashboard/user/training',
        name: 'Training Log',
        component: 'UserTrainingLog',
      },
      {
        hidden: true,
        path: '/dashboard/user/training/create',
        name: 'Training Log',
        component: 'UserTrainingLogCreate',
      },
      {
        hidden: true,
        path: '/dashboard/user/training/:id',
        name: 'Training Log',
        component: 'UserTrainingLogUpdate',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/management',
    name: 'Management',
    state: 'openManagement',
    icon: 'SettingsApplications',
    views: [
      {
        path: '/dashboard/management/teams',
        name: 'Teams',
        component: 'ManagementTeams',
      },
      {
        hidden: true,
        path: '/dashboard/management/teams/create',
        name: 'Team',
        component: 'ManagementTeamsCreate',
      },
      {
        hidden: true,
        path: '/dashboard/management/teams/:id',
        name: 'Team',
        component: 'ManagementTeamsUpdate',
      },
      {
        path: '/dashboard/management/users',
        name: 'Users',
        component: 'ManagementUsers',
      },
      {
        hidden: true,
        path: '/dashboard/management/users/create',
        name: 'Users',
        component: 'ManagementUsersCreate',
      },
      {
        hidden: true,
        path: '/dashboard/management/users/:id',
        name: 'Users',
        component: 'ManagementUsersUpdate',
      },
      {
        path: '/dashboard/management/suppliers',
        name: 'Suppliers',
        component: 'ManagementSuppliers',
      },
      {
        hidden: true,
        path: '/dashboard/management/suppliers/create',
        name: 'Create Supplier',
        component: 'ManagementSuppliersCreate',
      },
      {
        hidden: true,
        path: '/dashboard/management/suppliers/:id',
        name: 'Supplier',
        component: 'ManagementSupplierUpdate',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/checklist',
    name: 'Check List',
    state: 'openCheckList',
    icon: 'CheckCircle',
    views: [
      {
        path: '/dashboard/checklist/item',
        name: 'Check List',
        component: 'CheckList',
      },
      {
        hidden: true,
        path: '/dashboard/checklist/item/create',
        name: 'Create Task',
        component: 'CheckListCreate',
      },
      {
        path: '/dashboard/checklist/category',
        name: 'Category',
        component: 'CheckListCategory',
      },
      {
        hidden: true,
        path: '/dashboard/checklist/category/create',
        name: 'Create Category',
        component: 'CheckListCategoryCreate',
      },
      {
        hidden: true,
        path: '/dashboard/checklist/category/:id',
        name: 'Update Category',
        component: 'CheckListCategoryUpdate',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/safety',
    name: 'Safety Record',
    state: 'openSafetyRecord',
    icon: 'Assignment',
    views: [
      {
        path: '/dashboard/safety/task',
        name: 'Safety Task',
        component: 'SafetyTask',
      },
      {
        hidden: true,
        path: '/dashboard/safety/create',
        name: 'Create Task',
        component: 'SafetyTaskCreate',
      },
      {
        path: '/dashboard/safety/log',
        name: 'Safety Log',
        component: 'SafetyLog',
      },
      {
        path: '/dashboard/safety/category',
        name: 'Safety Category',
        component: 'SafetyCategory',
      },
      {
        hidden: true,
        path: '/dashboard/safety/category/create',
        name: 'Create Category',
        component: 'SafetyCategoryCreate',
      },
      {
        hidden: true,
        path: '/dashboard/safety/category/:id',
        name: 'Update Category',
        component: 'SafetyCategoryUpdate',
      },
    ],
  },
  // Temperature Navigation
  {
    collapse: true,
    path: '/dashboard/fridge',
    name: 'Fridge',
    state: 'openFridge',
    icon: 'AcUnit',
    views: [
      {
        path: '/dashboard/fridge/item',
        name: 'Fridge Item',
        component: 'FridgeItem',
      },
      {
        hidden: true,
        path: '/dashboard/fridge/item/create',
        name: 'Fridge Item',
        component: 'FridgeItemCreate',
      },
      {
        hidden: true,
        path: '/dashboard/fridge/item/:id',
        name: 'Fridge Item',
        component: 'FridgeItemUpdate',
      },
      {
        path: '/dashboard/fridge/task',
        name: 'Fridge Task',
        component: 'FridgeTask',
      },
      {
        hidden: true,
        path: '/dashboard/fridge/task/create',
        name: 'Create Task',
        component: 'FridgeTaskCreate',
      },
      {
        path: '/dashboard/fridge/chart',
        name: 'Fridge Chart',
        component: 'FridgeChart',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/freezer',
    name: 'Freezer',
    state: 'openFreezer',
    icon: 'AcUnit',
    views: [
      {
        path: '/dashboard/freezer/item',
        name: 'Freezer Item',
        component: 'FreezerItem',
      },
      {
        hidden: true,
        path: '/dashboard/freezer/item/create',
        name: 'Freezer Item',
        component: 'FreezerItemCreate',
      },
      {
        hidden: true,
        path: '/dashboard/freezer/item/:id',
        name: 'Freezer Item',
        component: 'FreezerItemUpdate',
      },
      {
        path: '/dashboard/freezer/task',
        name: 'Freezer Task',
        component: 'FreezerTask',
      },
      {
        hidden: true,
        path: '/dashboard/freezer/task/create',
        name: 'Create Task',
        component: 'FreezerTaskCreate',
      },
      {
        path: '/dashboard/freezer/chart',
        name: 'Freezer Chart',
        component: 'FreezerChart',
      },
    ],
  },
  // Item Navigation
  {
    path: '/dashboard/fooditem',
    name: 'Food Item',
    state: 'openFood',
    icon: 'Fastfood',
    component: 'FoodItem',
    views: [
      {
        path: '/dashboard/fooditem/create',
        name: 'Food Item',
        component: 'FoodItemCreate',
      },
      {
        path: '/dashboard/fooditem/:id',
        name: 'Food Item',
        component: 'FoodItemUpdate',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/traceability',
    name: 'Delivery Records',
    state: 'openTrace',
    icon: 'DirectionsCar',
    views: [
      {
        path: '/dashboard/delivery',
        name: 'Delivery Records',
        component: 'DeliveryRecords',
      },
      {
        hidden: true,
        path: '/dashboard/delivery/create',
        name: 'Create Delivery Record',
        component: 'DeliveryRecordsCreate',
      },
      {
        path: '/dashboard/traceability/labels',
        name: 'Labels',
        component: 'TraceabilityLabels',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/oil',
    name: 'Oil Test',
    state: 'openOilTest',
    icon: 'Colorize',
    views: [
      {
        path: '/dashboard/oil/location',
        name: 'Location',
        component: 'Oil',
      },
      {
        path: '/dashboard/oil/task',
        name: 'Task',
        component: 'OilTask',
      },
      {
        hidden: true,
        path: '/dashboard/oil/task/create',
        name: 'Create',
        component: 'OilTaskCreate',
      },
      {
        path: '/dashboard/oil/log',
        name: 'Log',
        component: 'OilLog',
      },
      {
        hidden: true,
        path: '/dashboard/oil/log/create',
        name: 'Create',
        component: 'OilLogCreate',
      },
    ],
  },
  {
    collapse: true,
    path: '/dashboard/cleaning',
    name: 'Cleaning',
    state: 'openCleaning',
    icon: 'LocalDrink',
    views: [
      {
        path: '/dashboard/cleaning/item',
        name: 'Location',
        component: 'Cleaning',
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/item/create',
        name: 'Item Create',
        component: 'CleaningCreate',
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/item/:id',
        name: 'Item Create',
        component: 'CleaningUpdate',
      },
      {
        path: '/dashboard/cleaning/task',
        name: 'Task',
        component: 'CleaningTask',
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/task/create',
        name: 'Task',
        component: 'CleaningTaskCreate',
      },
      {
        path: '/dashboard/cleaning/log',
        name: 'Log',
        component: 'CleaningLog',
      },
      {
        hidden: true,
        path: '/dashboard/cleaning/log/create',
        name: 'Create',
        component: 'CleaningLogCreate',
      },
    ],
  },
];
export default dashRoutes;
