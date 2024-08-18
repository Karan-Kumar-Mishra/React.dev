let root= document.getElementById('root');

function addElement(type,child)
{
   let reactElement=document.createElement(type);
   reactElement.innerHTML=child;
   root.appendChild(reactElement)
}

addElement('h1',"karan")
addElement('p',"karan kumar mishra")
