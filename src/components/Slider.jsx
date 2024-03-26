import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from 'styled-components';

const MIN = 2000;
const MAX = 1000000;

export default function RangeSlider() {
  const [value, setValue] = React.useState([MIN, MAX]);
  console.log(value);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <ContainerSlider>
      <Box>
        <Slider
          sx={{
            color: ' #FC3A74',
            width: '242px',
            height: '1px',
            marginLeft: '20px',
            marginTop: '140px'
          }}
          value={value}
          min={MIN}
          max={MAX}
          onChange={handleChange}
          valueLabelDisplay="auto"
         
        
        />
      </Box>
    </ContainerSlider>
  );
}

const ContainerSlider = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 2px 3px #7e7878;
  width: 285px;
  height: 181px;
  margin-left: 60px;
  margin-top: 50px;
`;


