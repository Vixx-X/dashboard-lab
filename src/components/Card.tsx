import * as React from 'react';

import Link from 'next/link';

import useTranslate from '@hooks/useTranslate';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const styles = {
  height: 200,
  '& .MuiSvgIcon-root': {
    width: '100%',
    height: '100%',
  },
};

export default function MediaCard({
  name,
  icon,
  color,
  description,
  link,
  style = styles,
}: any) {
  const t = useTranslate();

  return (
    <Link href={link} passHref>
      <Card sx={{ bgcolor: color, cursor: 'pointer' }}>
        <Box display="flex" justifyContent="center" sx={style}>
          {icon}
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: 'capitalize' }}
          >
            {t(name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t(description)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
