import Model from "../modell/Model.js"; 
import NagykepView from "../view/NagykepView.js"; 
class Controler{
    constructor(){
        const MODEL = new Model();
        
        const NAGYKEP = new NagykepView($(".nagykep"),MODEL.getID());
        $(window).on('bal',()=>{
            MODEL.bal();
            let aktkep = MODEL.getID();
            NAGYKEP.NagyKepelembe(aktkep);
            console.log(MODEL.getID());
        })
        $(window).on('jobb',()=>{
            console.log(MODEL.getID());
            MODEL.jobb();
            let aktkep = MODEL.getID();
            NAGYKEP.NagyKepelembe(aktkep);
        })
    }
}
export default Controler