import FetchAllDoctors from "./FetchAllDoctors";
import FetchConsultedDoctors from "./FetchConsultedDoctors";
import FetchNotConsultedDoctors from "./FetchNotConsultedDoctors";


function Doctor(){
    return(<div>
        <FetchAllDoctors />
        <FetchConsultedDoctors />
        <FetchNotConsultedDoctors />
    </div>)
}

export default Doctor;