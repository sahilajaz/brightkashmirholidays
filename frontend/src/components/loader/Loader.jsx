import { ColorRing } from "react-loader-spinner";
import './Loader.css'
const Loader = () => {
    return (
        <div className='loader-class'>
            <ColorRing
                visible={true}
                height="110"
                width="110"
                ariaLabel="bluish-color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="bluish-color-ring-wrapper"
                colors={["#5A5AF9", "#3A87F5", "#4FC3F7", "#87CEEB", "#4682B4"]}
            />
        </div>
    );
};

export default Loader;
