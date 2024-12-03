"use client"
import { useEffect, useRef, useState } from 'react';

  /**
   * Creates a FitMix widget using the provided API key.
   *
   * Note: Width and height are optional parameters.
   * If width and height are not provided, the widget will default to
   * 780px width and 560px height.
   *
   * @param {string} apiKey - The FitMix API key.
   * @param {React.MutableRefObject<any>} fitmixInstanceRef - A mutable React ref
   * object to store the FitMix widget instance.
   * @param {string} width - Optional width of the FitMix widget.
   * @param {string} height - Optional height of the FitMix widget.
   */
export function useFitMixWidget(apiKey: any, fitmixInstanceRef: any,width?:any,height?:any) {
  const [isFitmixTriggred, setIsFitmixTriggred] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.FitMix && !fitmixInstanceRef.current && !isFitmixTriggred) {
      setIsFitmixTriggred(true);
      const params = {
        apiKey,
        popupIntegration: {
          centeredHorizontal: true,
          centeredVertical: true,
          width: width ? width : '780px',
          height: height? height : '560px',
        },
      };

      fitmixInstanceRef.current = window.FitMix.createWidget('my-fitmix-container', params);
    }
  }, [apiKey]);
}

// Custom component that uses the hook to display the widget
interface VirtualTryOnProps {
  svgWidth: number;
  svgHeight: number;
  style: string;
  isText?: string;
  baseCode: string;
  virtuaSvgIcon?: any;
  fitmixInstanceRef?: any;
}

  /**
   * Custom component that uses the hook to display the widget.
   *
   * @param {number} svgWidth - The width of the virtual try on SVG icon.
   * @param {number} svgHeight - The height of the virtual try on SVG icon.
   * @param {string} style - The CSS style to be applied to the container
   * element.
   * @param {string} isText - Optional text to be displayed next to the SVG
   * icon.
   * @param {string} baseCode - The base code used to set the frame in the
   * FitMix widget.
   * @param {React.MutableRefObject<any>} fitmixInstanceRef - A mutable React
   * ref object to store the FitMix widget instance.
   * @param {string|React.ReactNode} virtuaSvgIcon - The virtual try on SVG icon.
   * If a string is passed, it is assumed to be the URL of the SVG icon. If a
   * React node is passed, it is used as the icon.
   */
const VirtualTryOn: React.FC<VirtualTryOnProps> = ({ svgWidth, svgHeight, style, isText, baseCode, fitmixInstanceRef, virtuaSvgIcon }) => {
  const handleButtonClick = () => {
    
    if (fitmixInstanceRef.current) {
      fitmixInstanceRef.current.setFrame(baseCode);
      fitmixInstanceRef.current.startVto('live');
      fitmixInstanceRef.current.iframe.style.display = 'block';
    }
  };

  return (
    <div className={(style)} onClick={()=>handleButtonClick()} >
      <img src={virtuaSvgIcon?.src || virtuaSvgIcon} alt="virtualSvgbase" width={svgWidth} height={svgHeight} className="pr-2" />
      {isText && <span>{isText}</span>}
    </div>
  );
};

export default VirtualTryOn;
