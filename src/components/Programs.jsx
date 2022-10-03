import Card from 'react-bootstrap/Card';



function Programs() {
   
  return (
    <div style={{display:'flex'}}>
    <div style={
        {marginLeft:'2%', padding: '5%', width:'400'}}>
            
        <h1 style={{paddingLeft:'2%',fontWeight:'bold', borderLeft:'5px solid green'}}>Our Programs</h1>
    <h4 style={{padding:'2%'}}>Our fitness experts can help you discover new training 
    techniques<br></br> and exercises that offer a dynamic and efficient full-body workout.
    </h4>
    <div style={{display:"flex"}}>
    <Card style={{width: '20rem', paddingTop:'2%', marginLeft:'2%',boxShadow: '0 2px 5px 0 rgb(78 182 142 / 77%), 0 2px 10px 0 rgb(0 0 0 / 12%)'} }>
      <Card.Body>
        <Card.Title>Weight Lifting</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
       <h6> We have a wide choice of classes that are a great complement to any training programme.<br></br>
        <a href='https://www.google.com/'>Know More.</a>
       </h6>
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{width: '20rem', paddingTop:'2%', marginLeft:'2%',boxShadow: '0 2px 5px 0 rgb(78 182 142 / 77%), 0 2px 10px 0 rgb(0 0 0 / 12%)'}}>
      <Card.Body>
        <Card.Title>Body Building</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
       <h6> We have a wide choice of classes that are a great complement to any training programme.
       .<br></br>
        <a href='https://www.google.com/'>Know More.</a>
       </h6>
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    
    
    
    <Card style={{width: '20rem', paddingTop:'2%', marginLeft:'2%',boxShadow: '0 2px 5px 0 rgb(78 182 142 / 77%), 0 2px 10px 0 rgb(0 0 0 / 12%)'}}>
      <Card.Body>
        <Card.Title>Weight Loss</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
       <h6> We have a wide choice of classes that are a great complement to any training programme.
       .<br></br>
        <a href='https://www.google.com/'>Know More.</a>
       </h6>
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card style={{width: '20rem', paddingTop:'2%', marginLeft:'2%',boxShadow: '0 2px 5px 0 rgb(78 182 142 / 77%), 0 2px 10px 0 rgb(0 0 0 / 12%)'}}>
      <Card.Body>
        <Card.Title>Yoga</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
       <h6> We have a wide choice of classes that are a great complement to any training programme.
       .<br></br>
        <a href='https://www.google.com/'>Know More.</a>
       </h6>
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>

    </div></div>
    {/* <div>
    <img src={gym} alt='youtube' className='center' padding='5%'
    width='300px' height='400px'
      /></div> */}
     
    </div>  
   
  );
}

export default Programs;

