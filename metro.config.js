const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('json');  // Ensure `.json` files for Lottie are included

module.exports = withNativeWind(config, { input: './global.css' });


