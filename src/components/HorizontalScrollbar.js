import React from 'react';
import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPartCard from './BodyPartCard';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (

  data.map((item) => (
    <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 10px"
    >
      {bodyParts ? <BodyPartCard item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
    </Box>
  ))

);

export default HorizontalScrollbar;
