let animales=[
/* 0nombre  1imagen  2continente   3elemento */

/*0*/ ['Elefante','https://images.unsplash.com/photo-1605326152964-56fb991b95ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWZhbnRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','África y Asia','Tierra'],
  
/*1*/ ['Ballena','https://images.unsplash.com/photo-1616764014023-16ebb20dee30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','Océano','Agua'],
  
/*2*/ ['Águila','https://images.unsplash.com/photo-1628361147005-a66661adfc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80','Europa y América ','Aire'],
  
/*3*/ ['Lobo','https://images.unsplash.com/photo-1572363420552-058bd41af8c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','Europa y NorteAmérica','Tierra']
];

let miHTML= "<ul>";

  for (i=0; i<animales.length; i++){
    miHTML+="<li class='animales "+animales[i][2]+"'>";
	  miHTML+="<img src='"+animales[i][1]+"'>";
	  miHTML+="<h2>"+animales[i][0]+"</h2>";
	  miHTML+="<p class='continente "+animales[i][2]+"'>"+animales[i][2]+"</h2>";
	  miHTML+="<p class='elemento'>"+animales[i][3]+"</p>";
	  miHTML+="</li>";

}
miHTML+= "</ul>";

document.body.innerHTML=miHTML;