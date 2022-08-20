import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from 'react-lottie';
import library_lottie from '../Assets/lottie_lib.json';
import BasicExample from '../Components/Table1';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

 const Home = () => {
  const defaultOptions={
    loop :true,
    autoplay :true,
    animationData:library_lottie,
    rendersettings:{
    preserveAspectRatio:"XMidYMid slice"
    }
  }
  return (
    <div className='container'>
      <h2 className='text-center text-secondary'> PrepBytes Library🤷 </h2>
      <hr />

      <div className='w-100 formshere'>
        <Form className='w-50 '>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book name</Form.Label>
              <Form.Control type="type" placeholder="Harry potter"/>
            
              <Form.Control type="text" placeholder="J. K. Rowling"/>
            </Form.Group>

            <ButtonGroup aria-label="Basic example">
              <Button variant="dark">Coding</Button>
              <Button variant="dark">Cooking</Button>
              <Button variant="dark">Adventure</Button>
            </ButtonGroup>
            <br></br>
            <br></br>
            <button variant="warning" type="submit">SUBMIT</button>
            </Form>
            {/* <img src={library_img} alt="" /> */}
            <Lottie
            options= {defaultOptions}
            width={300}
            height={300}
            />

            {/* <div className="btn-group">
              <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" ref={cooking} />
              <label className="btn btn-secondary" htmlFor="option1">Cooking</label> */}

              {/* <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off"/>
              <label className="btn btn-secondary" htmlFor="option2">Coding</label>

               <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off"/>
              
              <label className="btn btn-secondary" htmlFor="option3">Adventure</label> */}

          

            <br />
            <br />
           <hr></hr>
            

          </div>
          <BasicExample />
      </div>
      
        
  
  )
}
export default Home;

