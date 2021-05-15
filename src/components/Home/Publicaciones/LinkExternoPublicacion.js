import React,{useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Acciones } from "./Acciones";
import LinkIcon from '@material-ui/icons/Link';
import {PublicacionHeader} from './PublicacionHeader';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const data={
  description: "After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
  image: "https://i.ytimg.com/vi/aOC8E8z_ifw/sddefault.jpg",
  title: "The Mandalorian | Official Trailer | Disney+ | Streaming Nov. 12",
  url: "https://www.youtube.com/watch?v=aOC8E8z_ifw"
};

export default function LinkExternoPublicacion(){

    const hoverLink=css`
    &:hover {
        background-color: #ecf0f1;
        cursor:pointer;
      }
    `;
  

const limitStrLength = (text, max_length) => {
    if(text.length > max_length - 3){
        return text.substring(0, max_length).trimEnd() + "...";
    }
    return text;
};
/*
useEffect(()=>{
  var data = {key: '6501a53ddc771c51449019364397ab0f', q: 'https://www.youtube.com/watch?v=aOC8E8z_ifw'}

fetch('https://api.linkpreview.net', {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(data),
})
  .then(res => res.json())
  .then(response => console.log(response))
})
*/
        return (
            <div className="col-md-8 offset-md-2 mb-4">

            <Card>
              <PublicacionHeader/>
             <CardContent>
              <Typography paragraph>

                        External link       
                  </Typography>
                  <div className="col-md-12" css={hoverLink} onClick={()=> window.open(data.url, "_blank")}>
                    <div className="row border rounded">
                      <div className="col-md-4 align-self-stretch d-flex align-items-center pl-0"><img src={data.image} alt="" className="img-fluid h-100 d-inline-block"/></div>
                      <div className="col-md-8">
                      <Typography variant="subtitle2" gutterBottom className=" mt-1"><b>{limitStrLength(data.title,70)}</b></Typography>
                      <Typography variant="body2" gutterBottom> {limitStrLength(data.description,100)}</Typography>
                      <Typography variant="caption" display="block" color="textSecondary" gutterBottom>
                      <LinkIcon fontSize="small" className="mr-1"/>  {data.url}
      </Typography>

                       </div>
                 

                      </div></div>
      
              </CardContent>
          
      
              <Acciones/>
        
            </Card>
        
               </div>
        );
    }