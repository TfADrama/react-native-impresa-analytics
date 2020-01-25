# react-native-impresa-analytics

## Getting started

`$ npm install react-native-impresa-analytics --save`

### Mostly automatic installation

`$ react-native link react-native-impresa-analytics`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-impresa-analytics` and add `RNImpresaAnalytics.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNImpresaAnalytics.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.RNImpresaAnalyticsPackage;` to the imports at the top of the file
  - Add `new RNImpresaAnalyticsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-impresa-analytics'
  	project(':react-native-impresa-analytics').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-impresa-analytics/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-impresa-analytics')
  	```


## Usage
```javascript
import RNImpresaAnalytics from 'react-native-impresa-analytics';

// TODO: What to do with the module?
RNImpresaAnalytics;
```
  