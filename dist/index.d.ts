import { Component } from 'react';
declare type Point = {
    x: number;
    y: number;
};
declare type CustomBrush = {
    image: any;
    width: number;
    height: number;
};
declare type CustomCheckZone = {
    x: number;
    y: number;
    width: number;
    height: number;
};
interface Props {
    width: number;
    height: number;
    image: any;
    finishPercent?: number;
    onComplete?: () => void;
    brushSize?: number;
    fadeOutOnComplete?: boolean;
    children?: any;
    customBrush?: CustomBrush;
    customCheckZone?: CustomCheckZone;
}
interface State {
    loaded: boolean;
    finished: boolean;
}
declare class Scratch extends Component<Props, State> {
    isDrawing: boolean;
    lastPoint: Point | null;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    brushImage?: any;
    image: HTMLImageElement;
    constructor(props: Props);
    componentDidMount(): void;
    reset: () => void;
    getFilledInPixels(stride: number): number;
    getMouse(e: any, canvas: HTMLCanvasElement): {
        x: number;
        y: number;
    };
    distanceBetween(point1: Point | null, point2: Point | null): number;
    angleBetween(point1: Point | null, point2: Point | null): number;
    handlePercentage(filledInPixels?: number): void;
    handleMouseDown: (e: any) => void;
    handleMouseMove: (e: any) => void;
    handleMouseUp: () => void;
    render(): JSX.Element;
}
export default Scratch;
export declare const CUSTOM_BRUSH_PRESET: CustomBrush;
