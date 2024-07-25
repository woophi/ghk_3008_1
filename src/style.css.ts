import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 42px)',
  padding: '21px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '21px',
  flexDirection: 'column',
  gap: '12px',
});

const titleBox = style({
  maxWidth: '340px',
  textAlign: 'center',
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '2rem',
});

const boxItem = style({
  borderRadius: '7px',
  backgroundColor: '#F2F3F5',
  border: '1px solid #D8D8D8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
});

const boxTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px 18px 23px 1rem',
});

const boxCheck = style({
  width: '25px',
  height: '25px',
  backgroundColor: '#fff',
  border: '1px solid #000000',
  borderRadius: '50%',
});

export const appSt = {
  bottomBtn,
  container,
  titleBox,
  boxItem,
  boxTitle,
  boxCheck,
};
