import React from  "react"
import DrinkSimpleat from "./DrinkSimpleat"
import ImagesSimpleat from "./ImagesSimpleat"

class Orders extends React.Component {
    render(){
        return (
<div className="row">
<div className="col-7"><ImagesSimpleat/></div>
<div className="col-4"><DrinkSimpleat/> </div>


</div>
        )
    }
}
export default Orders;