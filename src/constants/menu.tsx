import { SERVER_URLS } from '@config';

import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupIcon from '@mui/icons-material/Group';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';

export const MENU_ITEMS = {
  GENERAL: {
    name: 'General',
    icon: <PieChartIcon />,
    link: SERVER_URLS.URL_LANDING,
  },
  MARKETING: {
    name: 'Marketing',
    icon: <ConfirmationNumberIcon />,
    link: SERVER_URLS.URL_MARKETING,
  },
  HUMAN_RESOURCES: {
    name: 'Recursos Humanos',
    icon: <GroupIcon />,
    link: SERVER_URLS.URL_HUMAN_RESOURCES,
  },
  CONFIGURATION: {
    name: 'Configuración',
    icon: <SettingsIcon />,
    link: SERVER_URLS.URL_CONFIG,
  },
};
