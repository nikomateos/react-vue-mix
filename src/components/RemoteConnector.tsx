import VideoComponent from "videoEditor/VideoEditor";
import { Root, createRoot } from 'react-dom/client';

export class ReactRemoteConnector {
    root:Root;
    constructor(targetEl:HTMLElement){
        this.root = createRoot(targetEl);
    }
    render(){
        this.root.render(<VideoComponent/>)
    }
}