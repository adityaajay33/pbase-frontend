import React from 'react'

export function imageconverter ({Component}) {

    try{
        const imageData = Component;
        const blob = imageData.blob();

        const imageURL = URL.createObjectURL(blob);

        // Set the src attribute of the image element
        const imageDisplay = document.getElementById("imageDisplay");
        imageDisplay.src = imageURL;

        console.log("Image stream successfully converted to data URL.")
      }catch(err){
        console.error();
    }
}
