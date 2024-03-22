import React, { useState } from 'react';
import styled from 'styled-components';

const BackgroundRadio = ({ width, height, onClick }) => {
  const [selectedColor, setSelectedColor] = useState('#C1C1C1');
  console.log(selectedColor);

  const handleSvgClick = (color) => {
    setSelectedColor(color);
    if (onClick) {
      onClick();
    }
    document.body.style.backgroundColor = color; 
  };

  return (
    <div>
      <SvgStyled
        onClick={() => handleSvgClick('blue')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={width}
        height={height}
        selected={selectedColor === 'blue'}
      >
        <circle cx="15" cy="15" r="13" fill="blue" />
        <circle cx="15" cy="15" r="14.5" stroke="white" fill="none" />
      </SvgStyled>
      <SvgStyled
        onClick={() => handleSvgClick('green')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={width}
        height={height}
        selected={selectedColor === 'green'}
      >
        <circle cx="15" cy="15" r="13" fill="green" />
        <circle cx="15" cy="15" r="14.5" stroke="white" fill="none" />
      </SvgStyled>
      <SvgStyled
        onClick={() => handleSvgClick('yellow')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={width}
        height={height}
        selected={selectedColor === 'yellow'}
      >
        <circle cx="15" cy="15" r="13" fill="yellow" />
        <circle cx="15" cy="15" r="14.5" stroke="white" fill="none" />
      </SvgStyled>
      <SvgStyled
        onClick={() => handleSvgClick('bisque')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={width}
        height={height}
        selected={selectedColor === 'bisque'}
      >
        <circle cx="15" cy="15" r="13" fill="bisque" />
        <circle cx="15" cy="15" r="14.5" stroke="white" fill="none" />
      </SvgStyled>
      <SvgStyled
        onClick={() => handleSvgClick('black')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={width}
        height={height}
        selected={selectedColor === 'black'}
      >
        <circle cx="15" cy="15" r="13" fill="black" />
        <circle cx="15" cy="15" r="14.5" stroke="white" fill="none" />
      </SvgStyled>
    </div>
  );
};

export default BackgroundRadio;

const SvgStyled = styled.svg`
  width: ${(props) => props.width || '30px'};
  height: ${(props) => props.height || '30px'};
  cursor: pointer;
  border: 1px solid ${(props) => (props.selected ? 'black' : 'grey')};
  border-radius: 100%;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;








// import React, { useState } from 'react';

// function RadioColor() {
//   const [color, setColor] = useState('');

//   const handleColorChange = (event) => {
//     setColor(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Выберите цвет:</h2>
//       <input
//         type="radio"
//         id="red"
//         name="color"
//         value="red"
//         checked={color === 'red'}
//         onChange={handleColorChange}
//       />


//       <input
//         type="radio"
//         id="green"
//         name="color"
//         value="green"
//         checked={color === 'green'}
//         onChange={handleColorChange}
//       />

//       <input
//         type="radio"
//         id="blue"
//         name="color"
//         value="blue"
//         checked={color === 'blue'}
//         onChange={handleColorChange}
//       />

//       <div style={{ backgroundColor: color, width: '100px', height: '100px', marginTop: '20px' }}></div>
//     </div>
//   );
// }

// export default RadioColor;




