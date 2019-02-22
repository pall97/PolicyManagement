user="admin";
/*
function setprivilege(){
	if (usertype== "admin" ){
	document.getElementById("addpolicybutton").style.display="none";
	document.getElementById("updatepolicybutton").style.display="none";
	document.getElementById("deletepolicybutton").style.display="none";
	}else{
	document.getElementById("addpolicybutton").style.display="none";
	document.getElementById("updatepolicybutton").style.display="none";
	document.getElementById("deletepolicybutton").style.display="none";
	}
}
/*function showadminbuttons(){
	document.getElementById("user").style.display="block";
	document.getElementById("skill").style.display="block";
	document.getElementById("project").style.display="block";
}*/	

function loadpolicies(){							
		$.ajax	({
		url: "http://localhost:58507/api/Policies/",
		type: 'GET',
		dataType: 'json', 
		success: function(policydata)
						{
						console.log(policydata);
						for (var j=0; j<policydata.length; j++){
						console.log(policydata[j]);
							for (var k=0; k<j.length; k++){
								console.log(policydata[0].Name)
						}
						}
						/*
						var table =document.getElementById("policylist");
						for (var i=0; i<policydata.lenght;i++){
							var row = table.insertRow(table.length);
							row.insertCell(0).innerHTML = policydata.Name;
							
						}
						/*
						var table=document.getElementById("mytable");
						for (var i=0; i<data.length; i++){
						var row=table.insertRow(table.length);
						row.insertCell(0).innerHTML=data[i].Id;
						row.insertCell(1).innerHTML=data[i].ProjectName;
						row.insertCell(2).innerHTML="<input type='button' value='Click To View' class='editbutton' onclick=\'ThrowId(\""+data[i].Id+"\")'>"
						row.insertCell(3).innerHTML="<input type='button' value='Click To View' class='deletebutton' onclick=\'ThrowId(\""+data[i].Id+"\")'>"
						}*/
				} 
		});
}


function addpolicy(){
		var PolicyId = document.getElementById("PolicyId").value;
		var PolicyName = document.getElementById("PolicyName").value;
		var PolicyDescription = document.getElementById("PolicyDescription").value;
		var PolicyLink = document.getElementById("PolicyLink").value;
	var datafornewpolicy={
		"Id" : PolicyId,
		"Name": PolicyName,
		"Description": PolicyDescription,
		"Link": PolicyLink,
	};
	$.ajax({
		url: 'http://localhost:58507/api/policies',
        type: 'POST',
		contentType: "application/json; charset=utf-8",
        dataType: 'json',
		data : datafornewpolicy,
        success: function(res)
						{
					alert("Policy "+Policyname+" Has been Added successfully");
					window.location="policies.html";
				}				
        });
}

function updatepolicy(){
		var PolicyId = document.getElementById("PolicyId").value;
		var PolicyName = document.getElementById("PolicyName").value;
		var PolicyDescription = document.getElementById("PolicyDescription").value;
		var PolicyLink = document.getElementById("PolicyLink").value;
	var datafornewpolicy={
		"Id" : PolicyId,
		"Name": PolicyName,
		"Description": PolicyDescription,
		"Link": PolicyLink,
	};
	$.ajax({
		url: 'http://localhost:58507/api/policies'+Id,
        type: 'PUT',
		contentType: "application/json; charset=utf-8",
        dataType: 'json',
		data : datafornewpolicy,
        success: function(res)
						{
					alert("Policy "+Policyname+" Has been Updated successfully");
					window.location="policies.html";

				}				
        });
}




