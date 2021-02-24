import React from 'react'
import './Recomended.css'
import { Button } from '@material-ui/core';
import Card from './Card'

function Recomended() {
    return (
        <div className="recomended">
            <div className="recomended__text">
            <h1>Recomended</h1>
            <Button variant="contained" className="button" size="large">More</Button>
            </div>
            <div className="recomended__card">
                <Card title="Rose" country="France"
                price="40" />
                <Card  title="Lilium" country="Australia"
                price="55" />                
                <Card  title="Daisy" country="Iran"
                price="30" />
                  <Card  title="Tulip" country="Mexico"
                price="20"  />
                 <Card  title="Tulip" country="Mexico"
                price="20" />
           </div>
          
           </div>
        
    )
}

export default Recomended
