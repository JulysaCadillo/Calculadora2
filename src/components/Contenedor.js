import React ,{Component} from 'react';
class Contenedor extends Component {

constructor(){
            super()
            this.state ={
            calcular :'',
            base:''
            }}
             clickIncrementar=()=>{
             
            }
            clickUno=()=>{
                const {calcular} =this.state;
                this.setState({calcular:calcular +'1'})
            }
            clickDos=()=>{
                const {calcular} =this.state;
                this.setState({calcular:calcular +'2'})
            }
            clickTres=()=>{
                const {calcular} =this.state;
                this.setState({calcular:calcular+'3'})
            }
            clickCuatro=()=>{
                const {calcular} =this.state;
                this.setState({calcular:calcular +'4'})
            }
            clickCinco=()=>{
                const {calcular} =this.state;
                this.setState({calcular:calcular+'5'})
            }
            clickSeis=()=>{
                const {calcular} =this.state;
                this.setState({calcular:calcular +'6'})
            }
            clickporDos=()=>{
                const {calcular} =this.state;
                const opcalcular =(parseInt(calcular)*2)+"";
                this.setState({calcular:opcalcular })
            }
           
            clickIgual=()=>{
                const {calcular} =this.state;
                const {base} =this.state;
                const {opr} =this.state;
                
                if (opr==='sumar') {
                     const suma = (parseInt(base) +parseInt(calcular)+"")
                     this.setState({calcular:suma})
                } else if(  opr==='restar') {
                    const suma = (parseInt(base) -parseInt(calcular)+"")
                    this.setState({calcular:suma})
                }else if(  opr==='dividir') {
                    const suma = (parseInt(base) /parseInt(calcular)+"")
                    this.setState({calcular:suma})
                }else if(  opr==='multiplicar') {
                    const suma = (parseInt(base) *parseInt(calcular)+"")
                    this.setState({calcular:suma})
                }
               
            }
            clickSuma=()=>{
                const {calcular} =this.state;
                this.setState({calcular:''})
                this.setState({base:calcular})
                this.setState({opr:'sumar'})

                
            }
            clickResta=()=>{
                const {calcular} =this.state;
                this.setState({calcular:''})
                this.setState({base:calcular})
                this.setState({opr:'restar'})
            }
            clickDivision=()=>{
                const {calcular} =this.state;
                this.setState({calcular:''})
                this.setState({base:calcular})
                this.setState({opr:'dividir'})
            }
            clickMultiplar=()=>{
                const {calcular} =this.state;
                this.setState({calcular:''})
                this.setState({base:calcular})
                this.setState({opr:'multiplicar'})
            }
    render(){

        const {calcular} =this.state;

        return(
            <div>
                <div >
                      Respuesta: ----> {calcular}
                </div>

                <div >
                    <button onClick={this.clickUno}   > 1 </button>
                    <button onClick={this.clickDos}   > 2 </button>
                    <button onClick={this.clickTres}  > 3 </button>
                    <button onClick={this.clickMultiplicar}  >*</button>
       
                </div>

                <div >
                    <button onClick={this.clickCuatro}    > 4 </button>
                    <button onClick={this.clickCinco}     > 5 </button>
                    <button onClick={this.clickSeis}      > 6 </button>
                    <button onClick={this.clickDividir}   > / </button>
                </div>
             
                <div> 
                    <button onClick={this.clickp}      > 0 </button>
                    <button onClick={this.clickIgual}  > = </button>
                    <button onClick={this.clickSuma}   > + </button>
                    <button onClick={this.clickResta}  > - </button>
                </div>
            
            
            </div>
        )
        }
}
export default Contenedor;