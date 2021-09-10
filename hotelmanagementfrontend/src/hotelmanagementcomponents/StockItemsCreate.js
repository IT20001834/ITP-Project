import React,{ Component } from 'react';
import axios from 'axios';
import moment from 'moment';


export default class StockItemsCreate extends Component{

    constructor(props){
        super(props);
        this.state={
            stockitemId:"",
            stockitemName:"",
            stockitemQty:"",
            stockitemType:"",
            stockitemunitPrice:"",
            itemaddedDate:"",
            sisupplierId:"",
            siorderNo:""
        }
    }


    handleInputStockChange=(stk)=>{
        const {name,value} = stk.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onStockItemSave=(stk)=>{
        stk.preventDefault();

        const {stockitemId,stockitemName,stockitemQty,stockitemType,stockitemunitPrice,itemaddedDate,sisupplierId,siorderNo}=this.state;

        const stkdata={
            stockitemId:stockitemId,
            stockitemName:stockitemName,
            stockitemQty:stockitemQty,
            stockitemType:stockitemType,
            stockitemunitPrice:stockitemunitPrice,
            itemaddedDate:itemaddedDate,
            sisupplierId:sisupplierId,
            siorderNo:siorderNo
        }

        console.log(stkdata)

        axios.post(`http://localhost:8951/stockitem/save`,stkdata).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        stockitemId:"",
                        stockitemName:"",
                        stockitemQty:"",
                        stockitemType:"",
                        stockitemunitPrice:"",
                        itemaddedDate:"",
                        sisupplierId:"",
                        siorderNo:""
                    }
                )
            }
        })
    }

  render(){
    return (
     
     <div className="col-md-8 mt-4 mx-auto">
         <h1 className= "h3 mb-3 font-weight-normal">Insert New Item</h1>
         <form className="needs-validation" noValidate>
             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Item No</label>
                 <input type="text"
                 className="form-control"
                 name="stockitemId"
                 placeholder="Enter ITEM NO here"
                 value={this.state.stockitemId}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Item Name</label>
                 <input type="text"
                 className="form-control"
                 name="stockitemName"
                 placeholder="Enter ITEM NAME here"
                 value={this.state.stockitemName}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Quantity</label>
                 <input type="text"
                 className="form-control"
                 name="stockitemQty"
                 placeholder="Enter QUANTITY here"
                 value={this.state.stockitemQty}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Item Type</label>
                 <input type="text"
                 className="form-control"
                 name="stockitemType"
                 placeholder="Enter ITEM TYPE here"
                 value={this.state.stockitemType}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Unit Price</label>
                 <input type="text"
                 className="form-control"
                 name="stockitemunitPrice"
                 placeholder="Enter Unit Price here"
                 value={this.state.stockitemunitPrice}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Date</label>
                 <input type="text"
                 className="form-control"
                 name="itemaddedDate"
                 placeholder="MM/DD/YYYY"
                 value={this.state.itemaddedDate}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Supplier ID</label>
                 <input type="text"
                 className="form-control"
                 name="sisupplierId"
                 placeholder="Enter SUPPLIER ID here"
                 value={this.state.sisupplierId}
                 onChange={this.handleInputStockChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Order No</label>
                 <input type="text"
                 className="form-control"
                 name="siorderNo"
                 placeholder="Enter ITEM NO here"
                 value={this.state.siorderNo}
                 onChange={this.handleInputStockChange}/>

             </div>
             <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onStockItemSave}>
                   <i className="far fa-check-square"></i>&nbsp; Add to Stock
             </button>
         </form>
       

     </div>
     
    )
  }
}