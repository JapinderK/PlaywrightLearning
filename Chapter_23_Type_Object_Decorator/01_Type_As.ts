let element :unknown={
    tagName:"Button",
    textContent:"Submit",
    id:"1",
    disabled:true   
}

interface element1{
    tagName:string;
    textContent:string;
    id:string;
    disabled:boolean;   
}

let button = element as element1;  //setting the type of element to element1 from unknown 

console.log("Button Tag Name:", button.tagName);
console.log("Button Text Content:", button.textContent);
console.log("Button ID:", button.id);
console.log("Button Disabled:", button.disabled);