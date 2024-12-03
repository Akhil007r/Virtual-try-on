# my-react-typescript-package-Virtual-try-on

# Project Title

Virtual Try On for FittingBox 

## Description

Virtual Try on For FittigBox Next Js || React JS

## Getting Started

### Dependencies

* React 17+
* TypeScript (optional, but recommended for type safety)


### Executing program

* How to run the program
* install package
* Follow Below code example for implementation
*  Append The Script In head Section <script type="text/javascript" src='https://vto-advanced-integration-api.fittingbox.com/index.js'/>
* useFitMixWidget should be called globally once 
    ex: For E-commerce 
        In Listing page useFitMixWidget sholud be passed with required API, UseRef created
* For Api Refer https://www.fittingbox.com/en/glasses-virtual-try-on/advanced-website
* Base code Should Be Product SKU or any Unique Value which is added in Fitting Box
* Customize the VirtualTryOn component by adjusting props such as svgWidth, svgHeight, style, isText, and baseCode.

```
import React, { useRef } from 'react';
import VirtualTryOn,{ useFitMixWidget } from 'VirtualTryOn';

const App: React.FC = () => {
  const fitmixInstanceRef = useRef<any>(null);
  const apiKey = 'YOUR_API_KEY';

  useFitMixWidget(apiKey, fitmixInstanceRef, '800px', '600px');

  return (
    <div>
      <h1>Try On Your Favorite Items</h1>
      <VirtualTryOn
        svgWidth={200}
        svgHeight={200}
        style="custom-button-style"
        isText="Click to Try On"
        baseCode="BASE_CODE_HERE"
        fitmixInstanceRef={fitmixInstanceRef}
        virtuaSvgIcon={{ src: '/path/to/your/icon.svg' }}
      />
    </div>
  );
};

export default App; 
```
### How It Works
 * The useFitMixWidget hook initializes the FitMix widget with the provided API key and configuration.
 * The VirtualTryOn component displays an image and text, triggering the virtual try-on when clicked.
 * The handleButtonClick function ensures that the widget starts with the appropriate frame and displays the iframe.

## Customize Your Component
   Customize the VirtualTryOn component by adjusting props such as svgWidth, svgHeight, style, isText, and baseCode.

### Props
 * VirtualTryOn Component Props
 * svgWidth: The width of the SVG image (in pixels).
 * svgHeight: The height of the SVG image (in pixels).
 * style: The CSS class for the container div.
 * isText: Optional text displayed next to the image.
 * baseCode: The code used to set up the virtual try-on frame.
 * virtuaSvgIcon: The SVG icon for the virtual try-on button. Can be an object with a src property or a string URL.
 * fitmixInstanceRef: A React ref used to access the FitMix widget instance.

## Authors

Akhilesh.R

## Version History

* 0.1
    * Initial Release



## Acknowledgments

Inspiration, code snippets, etc.

* extension of Virtual Try On for React and Next.js
