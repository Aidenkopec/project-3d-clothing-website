import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#0CAFFF',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './t-shirt-holder.jpeg',
  fullDecal: './t-shirt-holder.jpeg',
});

export default state;

